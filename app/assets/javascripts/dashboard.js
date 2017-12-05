$(function() {
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
