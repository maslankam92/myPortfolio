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

        return {
            init: init,
            scrollPage: scrollPage
        }

    };

    var app = new Application();
    app.init();
    app.scrollPage();


});
