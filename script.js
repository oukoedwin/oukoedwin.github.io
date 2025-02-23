document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("ul li").forEach(function (item) {
        let sublist = item.querySelector("ul");
        if (sublist) {
            item.classList.add("toggleable");
            item.addEventListener("click", function () {
                sublist.style.display = sublist.style.display === "block" ? "none" : "block";
                this.classList.toggle("open");
            });
        }
    });
});
