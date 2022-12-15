document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#color-change").onchange = function() {
        document.querySelector("body").style.backgroundColor = this.value;
        document.querySelector("#resume").style.color = this.value;
    }

    document.querySelector("#resume").onclick = () => {
        window.open("assets/Kathan_Gandhi_Internship_Resume.pdf");
    }
});