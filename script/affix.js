$(document).ready(function() {

  var toggleAffix = function(affixElement, scrollElement) {
  
    var height = affixElement.outerHeight(),
        top = affixElement.attr('data-offset-top');
    
    if (scrollElement.scrollTop() >= top){
        affixElement.addClass("affix");
    }
    else {
        affixElement.removeClass("affix");
    }
      
  };
  

  $('[data-toggle="affix"]').each(function() {
    var ele = $(this);
    
    $(window).on('scroll resize', function() {
        toggleAffix(ele, $(this));
    });
    
    // init
    toggleAffix(ele, $(window));
  });
  
});