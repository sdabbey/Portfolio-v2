
/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });
  
//Work toggle
const workbtns = document.querySelectorAll(".workplaces .action-buttons li")
const skilldetails = document.querySelectorAll(".skill-details")
workbtns.forEach(btn => {
    btn.addEventListener("click", () =>{
        workbtns.forEach(button =>{
            if(button.classList.contains("active") == true){
                button.classList.remove("active")
            }
        })
        btn.classList.add("active")
        skilldetails.forEach(detail =>{
            if(detail.classList.contains("active")){
                detail.classList.remove("active")
            }
            workDetailId = detail.getAttribute("data-detail-id")
            if(workDetailId == btn.id){
                detail.classList.add("active")
            }
        })
    })
})

//Dark Mode
var toggle = document.getElementById("toggle_dark")
var input_toggle = document.getElementById("darkmode-toggle")
var body = document.getElementById("main-body")
toggle.addEventListener('click', () => {
    body.classList.toggle('dark')
    localStorage.setItem('darkmode', body.className);
})

var body = document.getElementById("main-body")
window.addEventListener('load', () => {
    if(localStorage.getItem("darkmode")){
    body.classList.toggle('dark')
    input_toggle.checked = true;
    }
    setTimeout(function() {
            document.getElementById('alert').classList.add("close");
        }, 4000);
    
})

// SideNav trigger
let nav_trigger = document.querySelector('#nav-trigger');
let sidebar = document.querySelector('.sidebar');
let nav_item = document.querySelectorAll('.nav_list li')
nav_item.forEach(item => {
    item.addEventListener('click', () => {
        sidebar.classList.remove('active')
        nav_trigger.classList.remove('active')
    })
        
    }
);

nav_trigger.onclick = function() {
    sidebar.classList.toggle('active')
    nav_trigger.classList.toggle('active')
}
searchBtn.onclick = function() {
    sidebar.classList.toggle('active')
}


