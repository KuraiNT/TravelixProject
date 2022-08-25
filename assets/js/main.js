//Header scrolled fixed
var header = document.querySelector('#header');

var scrollable = 192;

window.onscroll = function() {
    myFunction();
}

function myFunction() {
    if(window.pageYOffset >= scrollable) {
        header.classList.add('scrollable');
    }else {
        header.classList.remove('scrollable');
    }
}




/** 
 * Slider
*/
let slides = document.querySelectorAll('.slider__nav');
let btnNext = document.querySelector('.slider__next-btn');
let btnPrev = document.querySelector('.slider__prev-btn');

let currentImageIndex = 0;
let lengthIndex = slides.length - 1;
showSlides(currentImageIndex);


btnNext.addEventListener('click', function() {
    showSlides(1);
    bodySilde();
})

btnPrev.addEventListener('click', function() {
    showSlides(-1);
    bodySilde();
})


function showSlides(n) {

    currentImageIndex += n;
    if(currentImageIndex > lengthIndex) {
        currentImageIndex = 0;
    }
    else if(currentImageIndex < 0) {
        currentImageIndex = lengthIndex;
    }

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${-100 * currentImageIndex}%)`;
    }

    
    let numbers = document.querySelectorAll('.slider__show-number-link');
    for(let i = 0; i < numbers.length; i++) {
        numbers[i].classList.remove('active');
    } 
    numbers[currentImageIndex].classList.add('active');
    
}
  
function bodySilde() {
    let bodys = document.querySelectorAll('.slider__body');

    for(let i = 0; i < bodys.length; i++) {
        bodys[i].classList.remove('flipInX');
    }
    bodys[currentImageIndex].classList.add('flipInX');
}




// Package
let packages = document.querySelectorAll('.package__body');
let prevBtn = document.querySelector('.package__prev-btn');
let nextBtn = document.querySelector('.package__next-btn');

// console.log(nextBtn);
let currentIndex = 0;
let lengthPackage = packages.length - 1;
showPackage(currentIndex);

nextBtn.addEventListener('click', function() {
    showPackage(1);
})

prevBtn.addEventListener('click', function() {
    showPackage(-1);
})


function showPackage(index) { 
    currentIndex += index;
    if(currentIndex > lengthPackage) {
        currentIndex = 0;
    }else if(currentIndex < 0) {
        currentIndex = lengthPackage;
    }

    for(let i = 0; i < packages.length; i++) {
        packages[i].style.transform = `translateX(${-100 * currentIndex}%)`;
    }
}



// Comments
let comments = document.querySelectorAll('.comment__col');
let commentList = document.querySelector('.comment__row');
let commentContainer = document.querySelector('.grid-js');
let commentPrev = document.querySelector('.comment__prev-btn');
let commentNext = document.querySelector('.comment__next-btn');


document.addEventListener('DOMContentLoaded', function () {
    // responsive
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1239) {
            showComment(3);
        } else if (window.innerWidth >= 740) {
            showComment(2);
        } else {
            showComment(1);
        }
    });

    const media = [
        window.matchMedia('(min-width: 1239px)'),
        window.matchMedia('(min-width: 740px)'),
    ];

    if (media[0].matches) {
        showComment(3);
    } else if (media[1].matches) {
        showComment(2);
    } else {
        showComment(1);
    }
});


function showComment(amout) {
    // width 1 slide = grid.wide / amout
    const widthItem = commentContainer.offsetWidth / amout;
    // Tổng width chứa slide = width 1 slide * số lượng item
    let widthAllComment = widthItem * comments.length;
    // set width cho parent
    commentList.style.width = `${widthAllComment}px`;
    
    // set width cho item
    comments.forEach((element) => {
        element.style.width = `${widthItem}px`;
    });

    let commentCurrent = 0;
    // Vị trí slide cuối cùng =
    // tổng width - số lượng item muốn show * width 1 item
    let spacing = widthAllComment - amout * widthItem;
    
    commentNext.addEventListener('click', function() {
        commentCurrent += widthItem;
        if(commentCurrent > spacing) {
            commentCurrent = 0;
        }
        commentList.style.transform = `translateX(${-commentCurrent}px)`;
    })

    commentPrev.addEventListener('click', function() {
        commentCurrent -= widthItem;
        if(commentCurrent < 0) {
            commentCurrent = spacing;
        }
        commentList.style.transform = `translateX(${-commentCurrent}px)`;
    })
    
}

