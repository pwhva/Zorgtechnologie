$(document).ready(function() {
 
  $('article').on('mouseenter', function() {
    $('#zoom').text($(this).text());
  });

});
