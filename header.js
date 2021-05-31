const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
	selectElement('header').classList.toggle('active');
	selectElement('body').classList.toggle('lock');

});

selectElement('#list-0').addEventListener('click', () => {
	document.getElementById('footer-list-0').classList.toggle('showlist0');
	document.getElementById('footer-column').classList.toggle('rotateicon');

});

selectElement('#list-1').addEventListener('click', () => {
	document.getElementById('footer-list-1').classList.toggle('showlist1');
	document.getElementById('footer-column-1').classList.toggle('rotateicon');

});