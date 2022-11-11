let noOfCharac = 150;
let contents = document.querySelectorAll(".contentp2");

contents.forEach(contentp2 => {
    if(contentp2.textContent.length < noOfCharac) {
        contentp2.nextElementSibling.style.display = "none";
    }
    else{
        let displayText = contentp2.textContent.slice(0, noOfCharac);
        let moreText = contentp2.textContent.slice(noOfCharac);
        contentp2.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}
