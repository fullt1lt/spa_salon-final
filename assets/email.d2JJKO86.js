(function(){emailjs.init("GkQR7oiV7MVCjW--s")})();document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("order-form");console.log("fsfsfsf"),t.addEventListener("submit",function(n){n.preventDefault();const o=document.getElementById("from_name").value,m=document.getElementById("from_email").value,l=document.getElementById("from_phone").value,a={from_name:o,from_email:m,from_phone:l};emailjs.send("service_16rukhh","template_5tn31u6",a).then(function(e){console.log("SUCCESS!",e.status,e.text),alert("Email sent successfully!")},function(e){console.log("FAILED...",e),alert("Failed to send email.")})})});
