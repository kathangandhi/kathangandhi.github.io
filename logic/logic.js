document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector("#color-change");
    const index = window.localStorage.getItem("index") | 0;
    select.selectedIndex = parseInt(window.localStorage.getItem("index"));
    const option = select.options[select.selectedIndex];
    select.style.color = option.value;
    document.querySelector("body").style.backgroundColor = option.value;
    document.querySelector("#selected").style.color = option.value;

    select.onchange = function() {
        window.localStorage.setItem("index", select.selectedIndex.toString());
        select.style.color = this.value;
        document.querySelector("body").style.backgroundColor = this.value;
        document.querySelector("#selected").style.color = this.value;
    }

    document.querySelectorAll(".color-option").forEach(option => {
        option.style.color = option.value;
    });
});