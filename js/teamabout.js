//toggle bar
function toggle() {
  var curtain = document.getElementById('curtain');
  var container = document.getElementById('container');
  var fas = document.querySelector('.fas');
  curtain.classList.toggle('active')
  container.classList.toggle('active')
  fas.classList.toggle('active')
};

//ligthSlider
$(document).ready(function () {
  $('#autoWidth').lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $('#autoWidth').removeClass('cS-hidden');
    }
  });
});