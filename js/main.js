var video = document.getElementById("myvid");
var btn = document.getElementById("mybtn");

function myFunction() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
    btn.innerHTML = "";
  }
}

jQuery('a').click( function(e) {
  jQuery('.collapse').collapse('hide');
});


(function($) {
  // DOM ready
  $(function() {
    // icons
    var $icons = $('.faq-links');
    $icons.on('click', function(e) {
      // variables
      var $this = $(this);
      var $icon = $this.find('i');
      // iconName taken from data-icon attribute
      var iconName = $icon.data('icon');
      // close icon
      var closeIconName = 'fa-angle-up';
      // prevent default browser behaviour, just in case
      e.preventDefault();
      // handle state
      if ($icon.hasClass(closeIconName)) {
        $icon.removeClass(closeIconName).addClass(iconName);
      } else {
        $icon.addClass(closeIconName).removeClass(iconName);
      };
    });
  });
})(jQuery);