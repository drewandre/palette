$(function() {
  $(document).on("click","#login-signup-button",function() {
    var form = $(this).closest("form");
    form.submit();
  });
  document.onkeypress = function(e) {
    var key = e.charCode || e.keyCode || 0;
    if (key == 13) {
      $('a').trigger('click');
    }
  }
});
