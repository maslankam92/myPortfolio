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
                anchors: ['firstPage', 'secondPage', '3rdPage'],
                sectionsColor: ['#fff', '#fff', '#F8F2E2', '#3BC391', '#EB4549', '#2F79C3', '#374047'],
                responsiveWidth: 900,
                slidesNavigation: true
            });
        }

        return {
            init: init,
            fullPage: fullPage
        }

    };

    var app = new Application();
    app.init();
    app.fullPage();


});
