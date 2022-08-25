// Modal header
const modal = document.querySelector('.js-modal');
const closeBtn = document.querySelector('.js-close');  
const menuBtn = document.querySelector('.js-menu-btn'); 

//hàm hiển thi modal
function showMenu() {
    modal.classList.add('open');
}

//hàm ẩn modal
function hideMenu() {
    modal.classList.remove('open');
}


// sự kiên click menuBtn
menuBtn.addEventListener('click', function() {
    showMenu();
})

// hành vi click close btn
closeBtn.addEventListener('click', hideMenu);
 

console.log(menuBtn);