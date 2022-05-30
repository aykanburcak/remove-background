/**
 * SASS
 */
import '../sass/backend.scss';
import { insertButton } from './modules/insertButton';

(function () {
	const editButton = '.button.edit-attachment';

	/* Insert Remove Background button when clicking edit image button */
	document.addEventListener('click', function (e) {
		const el = e.target;

		if (el.matches('.button.imgedit-rmbg')) {
			alert(imageEdit.postid);
		}

		if (el.matches(editButton)) {
			insertButton();
		}
	});
})();

/* Insert Remove Background button on page load if edit mode is open */
window.addEventListener('load', function () {
	const pageHref = window.location.href;

	if (pageHref.includes('upload.php') && pageHref.includes('mode=edit')) {
		insertButton();
	}
});
