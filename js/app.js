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

        function fullPage(){
            $('#fullpage').fullpage({
                sectionsColor: ['#F8F2E2', '#3BC391', '#EB4549', '#2F79C3', '#374047'],
                responsiveWidth: 900,
                slidesNavigation: true,
                navigation: true,
                anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
                menu: '#menu'
            });
        }

        //function scrollPage(){
        //    var links = $(".main-nav-btn a");
        //
        //    links.on("click", function(){
        //        $("html, body").animate({                               //if links are clicked, animate (1s) html and body
        //            scrollTop: $($(this).attr("href")).offset().top     //to the top of the clicked anchor's href
        //        }, 700, 'swing');
        //        console.log("smiga");
        //    });
        //}

        return {
            init: init,
            fullPage: fullPage,
            scrollPage: scrollPage
        }

    };

    var app = new Application();
    app.init();
    app.fullPage();
    app.scrollPage();


});
