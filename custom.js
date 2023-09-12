"use strict";
var typed3 = new Typed('.type', {
     strings: [
               'WEB DEVELOPER',
               'GRAPHICS DESINER',
               'PHOTOGRAPHER',
               'SEO OPTIMIZATION',
               
   ],
     typeSpeed: 100,
     backSpeed: 100,
     smartBackspace: true, 
     loop: true
   });
     

  //  <!--===========skill=====================-->
  

      let options = {
        startAngle: -1.55,
        size: 107,
        value: 0.85,
        fill: {gradient: ['#ffdd00', '#00ff8c']}
      }
      $(".circle .bar").circleProgress(options).on('circle-animation-progress',
      function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
      });
      $(".js .bar").circleProgress({
        value: 0.70
      });
      $(".node .bar").circleProgress({
        value: 0.90
      });      
	  $(".react .bar").circleProgress({
        value: 0.60
      });
  




// <!--===========contact=====================-->

  const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  // You can use this formData to send an email or do something else with the form data
  console.log(formData);
  form.reset();
});

