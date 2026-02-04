/*!
 * Item: Kitzu
 * Description: Personal Portfolio Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v2.0.0
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */
!function(n){"use strict";n((function(){
    // Back button handling
    // When a nav link is clicked, push state
    n('.navbar .navbar-nav .nav-link[href^="#"]').on('click', function(e) {
        var targetId = n(this).attr('href');
        // If not already in that state
        if (window.location.hash !== targetId) {
            history.pushState({modalOpen: true, target: targetId}, null, targetId);
        }
    });

    // Handle back button (popstate)
    window.onpopstate = function(event) {
        // If the modal close button exists and is visible (or if checking specific class)
        var closeBtn = n('.close-btn');
        if (closeBtn.length) {
            // Trigger the close button click defined by animatedModal/template
            closeBtn.click();
        }
    };
})),n(window).on("load",(function(){}))}(jQuery);