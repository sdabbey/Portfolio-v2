
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
    console.log("Open")
    nav_trigger.classList.toggle('active')
}
searchBtn.onclick = function() {
    sidebar.classList.toggle('active')
}


