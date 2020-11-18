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
                if (count === 25) {
                    document.querySelector("#header-nav a span").textContent = "Love Ning!";
                }
            }
        );

        document.querySelector("#wujiangButton").addEventListener("click",
            function (event) {
                this.textContent = "Generated!";
                if (document.querySelector("#wujiangContainer").classList.contains("invisible")) {
                    document.querySelector("#wujiangContainer").classList.remove("invisible");
                }
                else {
                    document.querySelector("#wujiangContainer").classList.add("invisible")
                    this.textContent = "Generate Wujiang";
                }

                // call the server
                $ajaxUtils.sendGetRequest("data/wujiang.json",
                    function (response) {
                        document.querySelector("#wujiang-name").textContent = "名称：" + response.名称;
                        document.querySelector("#wujiang-level").textContent = "等级：" + response.等级;
                        document.querySelector("#wujiang-profession").textContent = "职业：" + response.职业;
                    })
            }
        )
    }
)
