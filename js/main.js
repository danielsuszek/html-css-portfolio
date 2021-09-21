const rm1 = document.getElementById('readmore-post1');
rm1.addEventListener('click', function(e){
    e.preventDefault();
    const mp1 = document.querySelector('#more-post1');
    (mp1.style.display === "none") ? mp1.style.display = "block" : mp1.style.display = "none";
});

const rm2 = document.getElementById('readmore-post2');
rm2.addEventListener('click', function(e){
    e.preventDefault();
    const mp1 = document.querySelector('#more-post2');
    (mp1.style.display === "none") ? mp1.style.display = "block" : mp1.style.display = "none";
});

const hamburger = document.querySelector(".hamburger");
const mobileLinks = document.querySelector(".nav-mobile__links")

hamburger.addEventListener("click", moveMenu);

function moveMenu() {
  mobileLinks.classList.toggle("active")
  hamburger.classList.toggle("active")
}

