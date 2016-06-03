$(function() {
  $('form#blanks').submit(function(event) {
    event.preventDefault();
    $('.home').hide();
    $('.results').show();
    var nameInput = $('#name').val();
    var emailInput = $('#email').val();
    var phoneInput = $('#phone').val();
    var departInput = $('#datedepart').val();
    var returnInput = $('#datereturn').val();
    var hikingInput = parseInt($('#hiking').val());
    var drinkInput = parseInt($('#drink').val());
    var ruralInput = parseInt($('#rural').val());
    var outdoorsInput = parseInt($('#outdoors').val());
    var total = hikingInput + drinkInput + ruralInput + outdoorsInput;
    if ( total < -2 ) {
      $('.bangkok').show();
    } else if ( total <= 2 && total >= -2 ) {
      $('.portland').show();
    } else if ( total > 2 ) {
      $('.himalayas').show();
    } else {
      console.log();
    }
    $('.datedepart').text(departInput);
    $('.datereturn').text(returnInput);
    $('.name').text(nameInput);
    $('.email').text(emailInput);
    $('.phone').text(phoneInput);
  });

});

// if ( proceed === true ) {
//   $('#home').hide();
//   $('#personal').show();
//   $('#selector').hide();
// } else if ( seeSelects === true ) {
//   alert('take to options');
// }

// var proceed = $('input#continue').val();
// var seeSelects = $('input@seeselects').val();

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
