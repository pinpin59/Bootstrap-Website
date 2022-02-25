const allNavItems = document.querySelectorAll('.nav-item');
const navbar = document.querySelector('.navbar-collapse');

allNavitems.forEach(item => item.addEventListener('click', () =>{

navbar.classList.toggle('show');

}))
