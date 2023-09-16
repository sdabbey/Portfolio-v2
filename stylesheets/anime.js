  // Name

var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var landingText = document.querySelector('.home-section .main_content h4')
anime.timeline({loop: false})
  .add({
    targets: '.ml1 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 700,

    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml1 .letter',
    rotateY: [-90, 0],
    duration: 1700,
    delay:600
  })


  const preloader = document.getElementById("preloader")
  setTimeout(() => {
      preloader.style.transition = "4s ease-out"
      preloader.style.display = "none"
  }, 4000);

 
  var i = 0;
  var intro = 'Hi, my name is';
  
  var speed = 50;
  function typeWriter() {
      if (i < intro.length) {
          document.querySelector(".main_content h4").innerHTML += intro.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
      }   
  }


  var name = 'Samuel Desmond Abbey Darko.';
  var j = 0
  var speed = 50;
  function typeName() {
      if (j < name.length) {
          document.querySelector(".main_content h1").innerHTML += name.charAt(j);
          j++;
          setTimeout(typeName, speed);
      }   
  }


  var job = 'I develop things for the web.';
  var k = 0
  var speed = 50;
  function typeDo() {
      if (k < job.length) {
          document.querySelector(".main_content span").innerHTML += job.charAt(k);
          k++;
          setTimeout(typeDo, speed);
      }   
  }


  var info = "I'm a web developer specializing in building exceptional and responsive websites and web apps. Currently, I'm focused on building very interactive UI.";
  var l = 0
  var speed2 = 20;
  function typeInfo() {
      if (l < info.length) {
          document.querySelector(".main_content p").innerHTML += info.charAt(l);
          l++;
          setTimeout(typeInfo, speed2);
      }   
  }
  window.addEventListener('load', () =>{
      
      setTimeout(() => {
          typeWriter()
          
      }, 5000);
      setTimeout(() => {
          typeName()
          
      }, 7000);

      setTimeout(() => {
          typeDo()
          
      }, 9000);

      setTimeout(() => {
          typeInfo()
          
      }, 11000);
      
     
  })