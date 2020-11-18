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
                    document.querySelector("#wujiangContainer").classList.add("invisible");
                    this.textContent = "Generate Wujiang";
                }

                // call the server
                $ajaxUtils.sendGetRequest("data/wujiang.json",
                    function (response) {
                        let wujiangName = document.querySelector("#wujiangInput").value;
                        wujiang = response[wujiangName];
                        if (wujiang === undefined) {
                            wujiangTagList = document.querySelectorAll("#wujiangContainer div p")
                            for (let i = 0; i < wujiangTagList.length; i++) {
                                wujiangTagList[i].textContent = "";
                            }
                            document.querySelector("#wujiangName").textContent = "Did not find this Wujiang in record.";
                        }
                        else {
                            // assign values to web
                            document.querySelector("#wujiangName").textContent = "名称：" + wujiang.名称;
                            document.querySelector("#wujiangLevel").textContent = "等级：" + wujiang.等级;
                            document.querySelector("#wujiangProfession").textContent = "职业：" + wujiang.职业;

                            document.querySelector("#wujiangAttack").textContent = "攻：" + wujiang.攻;
                            document.querySelector("#wujiangDef").textContent = "受：" + wujiang.受;
                            document.querySelector("#wujiangSpeed").textContent = "速：" + wujiang.速;
                            document.querySelector("#wujiangRange").textContent = "范：" + wujiang.范;
                            document.querySelector("#wujiangMag").textContent = "魔：" + wujiang.魔;

                            document.querySelector("#wujiangSpell").textContent = "技能：" + wujiang.技能;
                            document.querySelector("#wujiangSpecs").textContent = "特性：" + wujiang.性质;

                        }
                    })
            }
        )
    }
)
