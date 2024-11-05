$(function(){
    let menuBar = $('.menubar')
    let menu = $('nav ul');
    let subMenu = $('nav  ul  ul');
    let shadow = $('.shadow')
    let slideMenu = $('.slide')
    let slide = $('.slide ul')
    let totalSlide = $('.slide ul li').length
    let slideW = 1920;
    num = 0;

    subMenu.hide();
    menuBar.mouseenter(function(){
        subMenu.stop(true, true).slideDown(200);
        shadow.stop().fadeIn(200);
    })
    menuBar.mouseleave(function(){
        subMenu.stop(true, true).slideUp(200);
        shadow.stop().fadeOut(200);
    })

    function autoplay(){
        num++
        
        if(num >= totalSlide){
            num = 0;
        }slide.css('transform',`translateX(${-num*slideW}px)`)
    }
    setInterval(autoplay,2000)


})