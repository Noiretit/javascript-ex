const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle navbar on the side
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Close modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Close modal when click outside the box
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false )