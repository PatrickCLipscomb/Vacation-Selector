$(function() {
  $('form#blanks').submit(function(event) {
    event.preventDefault();
    var proceed = $('input#continue').val();
    var seeSelects = $('input@seeselects').val();

    if ( proceed === true ) {
      $('#home').hide();
      $('#personal').show();
      $('#selector').hide();
    } else if ( seeSelects === true ) {
      alert('take to options');
    }
});

  //   $('#home').hide();
  //   $('#selector').hide();
  //   $('#personal').();
  // });
  //
  // $('form#boxes').submit(function(event) {
  //   event.preventDefault();
  //   $('#personal').hide();
  //   var negSelection = ('input#negative').val();
  //   var affirmSelection = ('input#affirmative').val();
  //   if ( negSelection ) {
  //     $('#home').hide();
  //     $('#personal').hide();
  //     $('#selector').hide();
  //   } else if ( affirmSelection ) {
  //     $('#home').hide();
  //     $('#personal').hide();
  //     $('#selector').show();
  //   }
  // }

});
