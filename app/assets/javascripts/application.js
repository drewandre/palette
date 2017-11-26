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

  $('#nav-dropdown').hide();
  $('.palette-dropdown').hide();
  $(".upload-instructions").hide();

  $('.account-dropdown').click( function(event){
    event.stopPropagation();
    $('#nav-dropdown').slideToggle("fast");
  });

  $('.palette-name-input').focusin(function() {
    $('.palette-blur').css({
      filter: 'blur(60px)'
    });
  });

  $('.palette-name-input').focusout(function() {
    $('.palette-blur').css({
      filter: 'none'
    });
  });

  $( "#palette-upload" )
  .mouseenter(function() {
    $('.palette-dropzone').css({
      filter: 'blur(60px)'
    });
    $(".upload-instructions").show();
    $(".palette-search").blur();
  })
  .mouseleave(function() {
    $('.palette-dropzone').css({
      filter: 'none'
    });
    $(".upload-instructions").hide();
  });

  $('.palette-dropzone').bind('dragenter', function(){
    $('.palette-dropzone').css({
      filter: 'blur(60px)'
    });
    $(".upload-instructions").show();
    $(".palette-search").blur();
  });
  $('.palette-dropzone').on('dragleave', function(e){
    if (e.originalEvent.pageX != 0 || e.originalEvent.pageY != 0) {
      return false
    } else {
      $('.palette-blur').css({
        filter: 'none'
      });
      $(".upload-instructions").hide();
    }
  });
  $('.palette-dropzone').on('drop', function(){
    $(".upload-instructions").hide();
  });

  document.getElementsByClassName("palette-name-input").onkeypress = function(e) {
    var key = e.charCode || e.keyCode || 0;
    if (key == 13) {
      alert('success from jquery!')
      $('.palette-dropzone').css({
        filter: 'none'
      });
      e.preventDefault();
    }
  }

  $('.palette-search').focusin(function() {
    $('.palette-blur').css({
      filter: 'blur(60px)'
    });
    $('.palette-dropdown').show();
  });

  $('.palette-search').focusout(function() {
    setTimeout(function(){
      $('.palette-blur').css({
        filter: 'none'
      });
    }, 300);
    setTimeout(function(){
      $( ".palette-dropdown" ).fadeOut( "fast" );
    }, 100);
  });

});
