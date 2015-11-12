/**
 * Created by MarcinM on 06-Nov-15.
 */
$(function(){

    /** main module function
     * which contain all functions on the page.
     * Make functions more visible and organized **/

    var Application = function(){

        function init(){
            console.log("napisz, ze dziala");
        }

        function scrollPage(){
            var links = $("a");

            links.click(function(){
                $("html, body").animate({                               //if links are clicked, animate (1s) html and body
                    scrollTop: $($(this).attr("href")).offset().top     //to the top of the clicked anchor's href
                }, 700, 'swing');

                return false;
            });
        }

        function scrollSpy(){
            $(window).on("scroll", function(event){

                var menuBtns = $(".menu li");
                var sections = $("section");

                sections.each(function(index){

                    if(index + 1 >= sections.length){
                        if(sections.eq(index).offset().top < $(window).scrollTop()){
                            var colorBg = menuBtns.eq(index).data("color");
                            menuBtns.eq(index).css({"background-color": colorBg });
                            console.log("cos sie dzieje");
                        }
                        else {
                            menuBtns.eq(index).css({"background-color": "initial" });
                        }

                    }
                    else {

                        if( sections.eq(index).offset().top < $(window).scrollTop() &&          //te dwie linijki szukaja miedzy ktorymi paragrafami sie znajdujemy
                            sections.eq(index + 1).offset().top > $(window).scrollTop()){
                            var color = menuBtns.eq(index).data("color");
                            console.log(color);
                            menuBtns.eq(index).css({"background-color": color });
                        }
                        else {
                            menuBtns.eq(index).css({"background-color": "initial"});
                        }
                    }

                });
            });
        }


        return {
            init: init,
            scrollPage: scrollPage,
            scrollSpy: scrollSpy
        }

    };

    var app = new Application();
    app.init();
    app.scrollPage();
    app.scrollSpy();


});
