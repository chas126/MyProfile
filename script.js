$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY >20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
    })

    $('.toggler').click(function(){
        $(this).toggleClass("active");
        $('.menu').toggleClass("active");
    })

    var typed = new Typed(".typing",{
        strings: ["22歳","テストエンジニア"],
        typeSpeed: 100,
        backSpace: 80,
        loop: true,
    });
})
