// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {

  jQuery.fn.toggleFocus = function(){
    if (this.is(":focus")) {
      this.blur();
    } else {
      this.focus();
    }
  }

  $(document).ready(function() {
    $('#nav-dropdown').hide();
    $('.palette-search-results').hide();
  });

  $('.account-dropdown').click( function(event){
    event.stopPropagation();
    $('#nav-dropdown').slideToggle("fast");
  });

  $('#palette-search').click( function(event){
    event.stopPropagation();
    $('.palette-search-results').fadeToggle(50);
    $( ".palette-search" ).focus();
    $( ".current-palette-title" ).toggle();
  });


  $('.palette-search').focusin(function() {
    $('.palette-list').css({
      filter: 'blur(60px)'
    });
    $('.current-palette').css({
      filter: 'blur(60px)'
    });
    $('.palette-dropdown').show();
  });

  $('.palette-search').focusout(function() {
    $('.palette-list').css({
      filter: 'none'
    });
    $('.current-palette').css({
      filter: 'none'
    });
    $('.palette-dropdown').hide();
  });

  // $(".palette-container").on('mousemove', function(e) {
  //   var mouseSide;
  //   if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
  //       mouseSide = 'L';
  //   } else {
  //       mouseSide = 'R';
  //   }
  //   console.log(mouseSide);
  // });


  $(".palette-container-left").on('mousemove', function(e) {
    console.log('left!');
  });

  $(".palette-container-right").on('mousemove', function(e) {
    console.log('right!');
  });

});
