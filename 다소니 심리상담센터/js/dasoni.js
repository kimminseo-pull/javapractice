document.addEventListener("DOMContentLoaded", function() {
    let btns = document.querySelectorAll('.box')
    let slide1 = document.querySelector('.s1')
    let slide2 = document.querySelector('.s2')

    function changeSlide(){
        slide1.classList.toggle('on')
        slide2.classList.toggle('on')
    
    }
    autoSlide = setInterval(changeSlide,3000)

    btns.forEach(btn => {
        btn.addEventListener('click',function(){
        changeSlide();
        clearInterval(autoSlide);
        autoSlide = setInterval(changeSlide,3000)
    })
    }); 
})
