const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
    const left = index * 100
    slide.style.left = `${left}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
});
prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
});

function carousel() {
if(counter < slides.length -1){
    nextBtn.style.display = "block";
} else {
    nextBtn.style.display = "none";
}
if(counter > 0) {
    prevBtn.style.display = "block";
} else {
    prevBtn.style.display = "none";
}

slides.forEach(function (slide) {
    console.log("counter", counter)
    slide.style.transform = `translateX(-${counter * 100}%)`;
})
}
prevBtn.style.display = "none";
