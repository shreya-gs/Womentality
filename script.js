document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};

document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};

function redirect(){
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSc9GwaM62KWh8nj2sE9sHf7pK2EaYd7kMVsdMmFBowdpF9dAA/viewform";
}

function start(){
    document.getElementById("quizz").style.display = 'block';
}

function closed(){
    document.getElementById("quizz").style.display = 'none';
}

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function nextslide(){
  swiper.slideNext(2000, false)
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxwbKlTlUllxzbIPZC_Q5If56oNmA0qLtJKtF4pA9osv7FssbWPx7cdDzabWqxVpM1-/exec";
const form = document.forms["submit-to-google-sheet"];
const msg=document.getElementById("msg")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
        msg.innerHTML = "Thank You for subscribing !"
        setTimeout(function(){
        msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});

