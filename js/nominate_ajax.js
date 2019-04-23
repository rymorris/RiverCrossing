


var $form = $('form#nominate'),
    url = 'https://script.google.com/macros/s/AKfycbx3AWI0XLyJpeG-AtUXnyIfXyvFAhbL99ajCuM1iMJSm3zOBwc/exec'

$('#nominationSubmit').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    console.log('success!');
    // do something
  );
})
