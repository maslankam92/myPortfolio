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

        function parallax(){
            var scene = document.getElementById('scene');
            var parallax = new Parallax(scene);
        }

        return {
            init: init,
            parallax: parallax
        }

    };

    var app = new Application();
    app.init();
    app.parallax();


});
