<?php
/**
 * Plugin Name:     Remove Background
 * Description:     Remove backgrounds of images automatically
 * Author:          Aykan Burcak
 * Author URI:      https://www.aykanburcak.com
 * Text Domain:     remove-background
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Remove_Background
 */

/* Load JS file */
function remove_background_enqueue_admin_script( $hook ) {
	if ( 'upload.php' != $hook ) {
		return;
	}
	wp_enqueue_script( 'remove_background_script', plugin_dir_url( __FILE__ ) . 'assets/public/js/backend.js', array(), '1.0', true );
}
add_action( 'admin_enqueue_scripts', 'remove_background_enqueue_admin_script' );

/* Ajax endpoint for API call */
add_action( 'wp_ajax_remove_background_request', 'remove_background_request' );
add_action( 'wp_ajax_nopriv_remove_background_request', 'remove_background_request' );

function remove_background_request() {
    var_dump('test');
}
