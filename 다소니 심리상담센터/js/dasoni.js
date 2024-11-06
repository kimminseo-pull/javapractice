document.addEventListener("DOMContentLoaded", function() {
    let btns = document.querySelectorAll('.box')
    let slide1 = document.querySelector('.s1')
    let slide2 = document.querySelector('.s2')
    let pText1 = document.querySelectorAll('ptext1')

    function changeSlide(){
        slide1.classList.toggle('on')
        slide2.classList.toggle('on')
        pText1.classList.toggle('on')
        
    }
    autoSlide = setInterval(changeSlide,6000)

    btns.forEach(btn => {
        btn.addEventListener('click',function(){
        changeSlide();
        clearInterval(autoSlide);
        autoSlide = setInterval(changeSlide,6000)
    })
    }); 
})
