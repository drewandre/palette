// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  $('#nav-dropdown').hide();
});


$(document).ready(function() {
  $('#user-icon').click( function(event){
    event.stopPropagation();
    console.log("clicked!");
    $('#nav-dropdown').slideToggle("fast");
  });
});
