const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
	selectElement('header').classList.toggle('active');
	selectElement('body').classList.toggle('lock');

});

selectElement('#list-1').addEventListener('click', () => {
	document.getElementById('footer-list-1').classList.toggle('showlist1');
	document.getElementById('footer-column-1').classList.toggle('rotateicon-1');

});

selectElement('#list-2').addEventListener('click', () => {
	document.getElementById('footer-list-2').classList.toggle('showlist2');
	document.getElementById('footer-column-2').classList.toggle('rotateicon-2');

});