//menu mobail
(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".mobail-menu");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      $(".menu").toggleClass("responsive");
    });

  }
 
})();



//ul.column li same height

$(document).ready(function(){
  var maxH = 0;
  if ($(window).width() >= 576){
  $(".column li").each(function () {
    var h_block = parseInt($(this).height());
    if(h_block > maxH) {
      maxH = h_block;
    };
  });
  }
});
