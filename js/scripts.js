$(function() {
  $('form#personalbtn').submit(function(event) {
    event.preventDefault();
    $('#home').hide();
    $('#personal').show();

  });

});
