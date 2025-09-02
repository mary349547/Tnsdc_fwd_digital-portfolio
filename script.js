document.getElementById("contactForm").addEventListener("submit", function(event){

  event.preventDefault();

  alert("Thank you! Your Message has been submitted successfully.");

  this.reset();

});