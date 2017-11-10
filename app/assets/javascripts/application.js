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

// document.getElementsByClassName("palette-search").onkeypress = function(e) {
//   var key = e.charCode || e.keyCode || 0;
//   if (key == 13) {
//     e.preventDefault();
//   }
// }

// $(document).ready(function() {
//   $('#nav-dropdown').hide();
//   $('.palette-dropdown').hide();
// });

$(document).ready(function() {

  $('#nav-dropdown').hide();
  $('.palette-dropdown').hide();
  $(".upload-instructions").hide();
  // $('.palette-dropzone').unbind( "click", handler );

  // $(function() {
  //   $("table").resizableColumns({
  //     store: window.store
  //   });
  // });

  // $(document).click( function(event){
  //   event.stopPropagation();
  //   $('.palette-dropdown').hide();
  // });

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
    // setTimeout(function(){
      $('.palette-blur').css({
        filter: 'none'
      });
    // }, 500);
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
    // console.log('entered!!!!!');
    $('.palette-dropzone').css({
      filter: 'blur(60px)'
    });
    $(".upload-instructions").show();
    $(".palette-search").blur();
  });
  $('.palette-dropzone').on('dragleave', function(e){
    // console.log("dont leave!");
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

  // $('.palette-name-input').submit(function() {
  //   alert('success from jquery!')
  //   // $('#ele').removeClass('whatever').addClass('whatever');
  // });

  document.getElementsByClassName("palette-name-input").onkeypress = function(e) {
    var key = e.charCode || e.keyCode || 0;
    if (key == 13) {
      // console.log('yes');
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
