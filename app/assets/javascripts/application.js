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
//= require_tree .

// $(function(){ $(document).foundation(); });

// $(function() {
//     $("form input").keypress(function (e) {
//         if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
//             $('button[type=submit] .default').click();
//             return false;
//         } else {
//             return true;
//         }
//     });
// });

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
