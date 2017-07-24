$( document ).ready(function() {
  var scrollTime = 500,
      scrollSelector = 'html, body',
      mobileThreshold = 750;

  function scrollToForm() {
    $(scrollSelector).animate({
        scrollTop: $('section.join').offset().top
    }, scrollTime);
  }

  function submitForm() {
    var first = $('#first').val(),
        last = $('#last').val(),
        email = $('#email').val(),
        phone = $('#phone').val(),
        school = $('#school').val(),
        role = $('input[name=role]:checked', 'form').val(),
        json = "{first: "+first+", last: "+last+", email: "+email+", phone: "+phone+", school: "+school+", role: "+role+"}";

    $.post('/signup', {first: first, last: last, email: email, phone:  phone, school: school, role: role, json: json});
    // emailjs.send("gradster_rocks_1982","template_ljkvXWfR",{first: first, last: last, email: email, phone:  phone, school: school, role: role, json: json});
    scrollToCompletion();
    clearForm();
  }

  function clearForm() {
    setTimeout(function(){
      $('input').val('');
    }, 1000)
  }

  function scrollToCompletion () {
    $('section.completion').css('display', 'block');
    $(scrollSelector).animate({
        scrollTop: $('section.completion').offset().top
    }, scrollTime);
  }

  function scrollToCommunity() {
    $(scrollSelector).animate({
        scrollTop: $('section.community').offset().top
    }, scrollTime);
  }

  function resize () {
    var height = $(window).height(),
        section = $('section');
    
    if ( $( window ).width() >= mobileThreshold ) {
      section.css('height',height);
    } else {
      section.removeAttr("style");
      $('section.splash').css('height',height);
    }
    
  }

  function init () {
    resize();
  }

  $('.btn:not(submit)').click(scrollToForm);  //":not" isn't supported by IE8
  $('.tab-down').click(scrollToCommunity);
  $('.btn.submit').click(submitForm);

  init();
});