const exploreBtn = document.getElementById("exploreBtn");
exploreBtn.onclick = function(event) {
  event.preventDefault(); 

  setTimeout(function() {
    window.location.href = exploreBtn.href; 
  }, 6000); 
};