


var $form = $('form#contactForm'),
    url = 'https://script.google.com/macros/s/AKfycbxPuPS6ca2m502eVTdrN-oNiWRHGbBzpWDg-lJCevP5bib8oTlD/exec'

$('#contactSubmit').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
    success:function(data) {
    console.log('success');
    // window.location.href = 'nomination?nomination_name=' + data.nomination_name + "&nomination_reason=" + data.nomination_reason + "&submitter_name=" + data.submitter_name;
  }
  });
})
