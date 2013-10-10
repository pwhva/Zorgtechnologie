$(document).ready(function() {
 
  $('article').on('mouseenter', function() {
    $('#zoom').text($(this).text());
  });
  
  $('#add').on('click', function(event) {
    var value = $('#tekst').val();
    
    if (value != '') {
        $('#content').prepend('<article>' + value + '</article>');
        
        $('#tekst').val('');
    }
    
    event.preventDefault();
  });

});
