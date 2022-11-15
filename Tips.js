const readMore = function(btn) {
    btn.textContent = changeText(btn.textContent);
    btn.previousElementSibling.classList.toggle("hide");
}

function changeText(txt) {
    if (txt === "Read More") {
    return "Read Less";
    }
    return "Read More";
};

