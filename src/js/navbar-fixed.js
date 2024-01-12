
var nav = $('nav');

var navHeight = nav.outerHeight();

$('a[href*="#"]:not([href="#"])').click(function(event) {
  scrollToSection(this);
  event.preventDefault();
});


$(document).scroll(function() {
  activateCurrentSection();
});

function scrollToSection(self) {
 
  var href = $(self).attr('href');

  var targetPos = $(href).offset().top - navHeight + 5;

  $('html, body').animate({
    scrollTop: targetPos
  }, 400);
}

$(document).scroll(function() {
  activateCurrentSection();
});


function activateCurrentSection() {
  var id; 

  var sections = $('.section');

  var pos = $(document).scrollTop();

  var lastSection = sections[sections.length-1];
  var lastSectionTooSmall = $(lastSection).height() < $(window).height();

  if (lastSectionTooSmall) {
    var lastSectionTopPos = $(lastSection).offset().top;
e
    var lastSectionTriggerPos = $(window).height() + $(document).scrollTop() - ($(lastSection).height()/2);
    var lastSectionInView = lastSectionTriggerPos > lastSectionTopPos;
  }

  if (lastSectionTooSmall && lastSectionInView) {
    id = $(lastSection).attr('id');
  } else { 
    sections.each(function() {
      var top = $(this).offset().top - navHeight; 
      var bottom = top + $(this).outerHeight();

      if (pos >= top && pos <= bottom) {
        id = $(this).attr('id');
      }
    });
  }

  if (id) {
    nav.find('a').removeClass('active');
    nav.find('a[href="#' + id + '"]').addClass('active');
  }
}
