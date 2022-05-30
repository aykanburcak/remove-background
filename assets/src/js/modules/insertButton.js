export const insertButton = () => {
	const removeBackgroundButton = document.createElement('button');
	removeBackgroundButton.innerText = 'Remove background';
	removeBackgroundButton.classList.add('button', 'imgedit-rmbg');
	removeBackgroundButton.type = 'button';

	setTimeout(() => {
		const imageEditMenu = document.querySelector('.imgedit-menu');
		const undoSeparator = document.querySelector(
			'.imgedit-undo-redo-separator'
		);
		imageEditMenu.insertBefore(removeBackgroundButton, undoSeparator);
	}, 1000);
};
