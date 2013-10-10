$(document).ready(function() {
 
  var show_in_zoom = function() {
    $('#zoom').text($(this).text());
  }
  
  var hide_zoom = function() {
    $('#zoom').text('');
  }
  
  $('#content').on('mouseenter', 'article', show_in_zoom).on('mouseleave', 'article', hide_zoom);
  
  $('#add').click(function(event) {
    var value = $('#tekst').val();
    
    if (value != '') {
      $('#content').prepend('<article>' + value + '</article>');
      
      $('#tekst').val('');
    }
    
    event.preventDefault();
  });
  
  $('article').click(function(event) {
    $(this).fadeOut('slow');
  });
});
