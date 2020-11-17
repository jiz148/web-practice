document.addEventListener("DOMContentLoaded",
    function (event) {
        function sayHello (event) {
            this.textContent = "Said It!!";
            if (document.querySelector("#helloContainer").classList.contains("invisible")) {
                document.querySelector("#helloContainer").classList.remove("invisible");
            }
            else {
                document.querySelector("#helloContainer").classList.add("invisible");
                this.textContent = "Say Hello";
            }
        }
        document.querySelector("#helloButton").addEventListener("click", sayHello);
        let count = 0;
        document.addEventListener("touchend",
            function (event) {
                count += 1;
                if (count === 15) {
                    document.querySelector("#header-nav a span").textContent = "Love Ning!";
                }
            }
            );
    }
)
