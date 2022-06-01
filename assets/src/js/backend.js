/**
 * SASS
 */
import '../sass/backend.scss';
import { insertButton } from './modules/insertButton';
import { apiRequest } from './modules/apiRequest';
import { REMOVE_BACKGROUND_ACTION } from './constants';

const handleEditClick = (event, editButton) => {
	const clickedElement = event.target;

	if (clickedElement.matches('.button.imgedit-rmbg')) {
		apiRequest(REMOVE_BACKGROUND_ACTION, imageEdit.postid);
	}

	if (clickedElement.matches(editButton)) {
		insertButton();
	}
};

(function () {
	const editButton = '.button.edit-attachment';

	/* Insert Remove Background button when clicking edit image button */
	document.addEventListener('click', function (event) {
		handleEditClick(event, editButton);
	});
})();

/* Insert Remove Background button on page load if edit mode is open */
window.addEventListener('load', function () {
	const pageHref = window.location.href;

	if (pageHref.includes('upload.php') && pageHref.includes('mode=edit')) {
		insertButton();
	}
});
