$(function () {

    function hideToggle (event) {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) { // That is medium size of Twitter Bootstrap 4 2020
            $("#navbar-toggle-target").collapse("hide");
        }
    }

    // hide toggle target when toggle button blurs
    $("#header-nav .navbar-toggle").on("mouseleave blur", hideToggle);
});

(function (global) {

    const dc = {};

    // url addresses
    dc.homeUrl = "snippets/home-snippet.html";
    dc.showCasesUrl = "snippets/show-cases.html";
    dc.blogUrl = "snippets/blog.html";

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
        loadPage(dc.homeUrl)
    });

    function loadPage (url) {
        $ajaxUtils.sendGetRequest(
            url,
            function (responseText) {
                insertHtml("#main-content", responseText);
            },
            false);
    }



    // secret feature~
    let count = 0;
    document.addEventListener("touchend",
        function (event) {
            if (event.target === document.querySelector("#title")) {
                count += 1;
            }
            if (count === 15) {
                document.querySelector("#title").textContent = "Loves Ning!";
            }
        }
    );

    // expose to window
    dc.loadPage = loadPage

    global.$dc = dc

})(window);
