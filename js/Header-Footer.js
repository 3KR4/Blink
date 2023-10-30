// //! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss Header
let header = document.querySelector(".header");
mainHeader = () => {
  return (header.innerHTML = `
  <div class="preLoader-holder">
  <div class="preLoader">
  <span class="loading-circle sp1">
    <span class="loading-circle sp2">
      <span class="loading-circle sp3"></span>
    </span>
  </span>
</div>
</div>
<button class="scrollBar"><i class="fa-solid fa-angles-up"></i></button>
<div class="container">
  <div class="logo">
    <img src="img/logo.png" alt="">
    <h1>Blink</h1>
  </div>
  <ul class="main-nav">
    <li class="active"><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li class="megaBtn">Pages 
      <ul class="megaMenu">
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="blog-grid.html">Blog Grid</a></li>
        <li><a href="blog-single.html">Blog Sidebar</a></li>
        <li><a href="mail-success.html">Mail Success</a></li>
        <li><a href="404-error.html">404 Error</a></li>
      </ul>
    </li>
  </ul>
  <div class="btns">

    <input onclick="darkMode()" id="checkbox_toggle" type="checkbox" class="check">
    <div class="checkbox">
      <label class="slide" for="checkbox_toggle">
        <label class="toggle" for="checkbox_toggle"></label>
        <label class="text" for="checkbox_toggle">Light</label>
        <label class="text" for="checkbox_toggle">Dark</label>
      </label>
    </div>

    <a href="sign-in.html" class="sign-in">Sign in</a>
    <a href="sign-up.html" class="sign-up">Sign Up</a>
    <input onclick="showMega()" type="checkbox" id="checkbox">
    <label for="checkbox" class="toggle bars-holder">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>
  </div>
</div>
  `);
};
mainHeader();

let body = document.querySelector("body");
let loadIcon = document.querySelector(".preLoader-holder")
window.addEventListener("load", function() {
  loadIcon.style.display = "none"
  body.style.overflow = "auto"
})

let darkLight = document.querySelector(".check");

function darkMode () {
  if (darkLight.checked) {
    body.classList.add("dark");
    localStorage.setItem("mode", "dark-mode");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("mode", "light-mode");
  }
}
if (localStorage.getItem("mode") === "dark-mode") {
  body.classList.add("dark");
  darkLight.checked = true;
}

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let mainNav = document.querySelector(".header .main-nav")
function showMega () {
  mainNav.classList.toggle("show")
}


let header2 = document.querySelector(".header-2");
mainHeader2 = () => {
  return (header2.innerHTML = `
  <div class="container">
  <h4 class="pageName1"></h4>
  <div class="pages">
    <div class="home">
      <i class="bi bi-house-door"></i>
      <a href="index.html">Home</a>
    </div>
    <i class="fa-solid fa-angle-right"></i>
    <h6 class="pageName2"></h6>
  </div>
  </div>
  `);
};
mainHeader2();


function pageNameChanger1 () {
  let pageName = document.querySelector(".pageName1")
  pageName.innerHTML = document.title
}
pageNameChanger1()

function pageNameChanger2 () {
  let pageName2 = document.querySelector(".pageName2")
  pageName2.innerHTML = document.title
}
pageNameChanger2()

//! ScrollBar / States
const scrollBar = document.querySelector(".scrollBar");
let nums = document.querySelectorAll(".about .num h1");
let about = document.querySelector(".about");
let started = false;


window.onscroll = function () {
  if(this.scrollY >= 400){
    scrollBar.classList.add('show')
  }else{
    scrollBar.classList.remove('show')
  }

  if (window.scrollY >= about.offsetTop - 900) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
scrollBar.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
console.log(started);





//! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss theme

  // let themeButtons = document.querySelectorAll(".theme-buttons")

  // if (window.localStorage.getItem("theme")) {
  //   document.querySelector(':root').style.setProperty('--main-color', window.localStorage.getItem("theme"));

  //   if (window.localStorage.getItem("theme") === "#2a84ff") {
  //     document.querySelector(':root').style.setProperty('--hover-color',  window.localStorage.getItem("hover")); 
  //   } else if (window.localStorage.getItem("theme") !== "#2a84ff") {
  //     document.querySelector(':root').style.setProperty('--hover-color', "#0167f3");
  //   }
  // }
  // themeButtons.forEach((btn) =>{
  //   btn.addEventListener('click', (e) => {
    
  //   themeButtons.forEach((li) => {
  //     li.classList.remove("active")
  //   })
  //   e.currentTarget.classList.add("active")
  
  //   window.localStorage.setItem("theme", e.currentTarget.dataset.color)
  //   window.localStorage.setItem("hover", "#0e3f81")
  
  //   document.querySelector(':root').style.setProperty('--main-color', e.currentTarget.dataset.color);

  //       if (window.localStorage.getItem("theme") === "#2a84ff") {
  //         document.querySelector(':root').style.setProperty('--hover-color',  window.localStorage.getItem("hover")); 
  //       } else if (window.localStorage.getItem("theme") !== "#2a84ff") {
  //         document.querySelector(':root').style.setProperty('--hover-color', "#0167f3");
  //       }
  //   });
  // });


//! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss footer

let footer = document.querySelector(".footer");
mainFooter = () => {
  return (footer.innerHTML = `
  <div class="container">
  <div class="main">
    <div class="logo">
      <img src="img/logo.png" alt="">
      <h1>Blink</h1>
    </div>
    <p>Making the world a better place through constructing elegant hierarchies.</p>
    <div class="holder">
      <span>© 2023 Blink.</span>
      <span>Designed and Developed by GrayGrids</span>
    </div>
  </div>
  <div class="solutions">
    <h3>Solutions</h3>
    <ul>
      <li><a href="">Insights</a></li>
      <li><a href="">Commerce</a></li>
      <li><a href="">Marketing</a></li>
      <li><a href="">Analytics</a></li>
    </ul>
  </div>
  <div class="support">
    <h3>support</h3>
    <ul>
      <li><a href="">Pricing</a></li>
      <li><a href="">Documentation</a></li>
      <li><a href="">Guides</a></li>
      <li><a href="">API Status</a></li>
    </ul>
  </div>
  <div class="subscribe">
    <h3>Subscribe</h3>
    <p>Subscribe to our newsletter for the latest updates</p>
    <div class="input-holder">
      <input name="EMAIL" placeholder="Email address" required="required" type="email">
      <div class="btn">
        <button></button>
        <i class="bi bi-envelope"></i>
      </div>
    </div>
  </div>
</div>
  `);
};
mainFooter();

//! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss about video

// const video = document.querySelector(".video")
// function openVideo() {
//   video.classList.add("videoClicked")
//   document.body.style.setProperty("overflow", "hidden")
// }
// function closeVideo() {
//   video.classList.remove("videoClicked")
//   document.body.style.removeProperty("overflow")
// }