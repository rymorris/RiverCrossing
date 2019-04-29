


var $form = $('form#nominate'),
    url = 'https://script.google.com/macros/s/AKfycbx3AWI0XLyJpeG-AtUXnyIfXyvFAhbL99ajCuM1iMJSm3zOBwc/exec'

$('#nominationSubmit').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
    success:function(data) {
    console.log('success');
    var data = $form.serializeObject();
    window.location = './nomination?nomination_name=' + data.nomination_name + "&nomination_reason=" + data.nomination_reason + "&submitter_name=" + data.submitter_name;
  }
  });
})
