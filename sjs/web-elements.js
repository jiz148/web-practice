$(function () {
    function hideToggle (event) {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) { // That is medium size of Twitter Bootstrap 4 2020
            $("#navbar-toggle-target").collapse("hide");
        }
    }

    // hide toggle target when toggle button blurs
    $("#header-nav .navbar-toggle").blur(hideToggle);
    // solve the focus issue in Firefox and Safari
    $("#header-nav .navbar-toggle").click(function (event) {
            $(event.currentTarget).focus();
        }
    )
});

(function (global) {

    const dc = {};

    // html addresses
    homeHtml = "snippets/home-snippet.html";

    // function for inserting innerHTML for 'select'
    function insertHtml (selector, html) {
        let targetElement = document.querySelector(selector);
        targetElement.innerHTML = html;
    }

    // function for showing loading gif in the selector
    function showLoading (selector) {
        let html = "<div class='text-center'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    }

    //on page load
    document.addEventListener("DOMContentLoaded", function (event) {
        // show home snippet
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            "snippets/home-snippet.html",
            function (responseText) {
                insertHtml("#main-content", responseText);
            },
            false);
    });

    // secret feature~
    let count = 0;
    document.addEventListener("touchend",
        function (event) {
            count += 1;
            if (count === 25) {
                document.querySelector("#header-nav a span").textContent = "Love Ning!";
            }
        }
    );

})(window);
