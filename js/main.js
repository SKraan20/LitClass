(function (jQuery, $, window, undefined) {

  // Document ready.
  $(function(){
    $('.highlight').mouseenter(function(e) {
      showAnnotation(e);
    });
    $('.highlight').mouseleave(function(e) {
      hideAnnotation(e);
    });
  });

  function showAnnotation(e) {
    var id = e.currentTarget.attributes["data-highlight"].nodeValue;
    $('[data-annotation="' + id + '"]').addClass("current-annotation");
  }

  function hideAnnotation(e) {
    $('.annotation').removeClass("current-annotation");
  }

})(jQuery, $, window);
