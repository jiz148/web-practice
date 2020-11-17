sayHello = function () {
    if (document.querySelector("#helloContainer").classList.contains("invisible")) {
        document.querySelector("#helloContainer").classList.remove("invisible")
    }
    else {
        document.querySelector("#helloContainer").classList.add("invisible")
    }
}
