$(document).ready(function() {

  $('#content').on('mouseenter', 'article', function() {

    $('#zoom').html( $(this).html() );

  });

  $('#add').on('click', function(event) {
    var value = $('#tekst').val();

    if (value != '') {

      var new_article = '<article>' + value + '</article>';

      $('#content').prepend(new_article);

      $('#tekst').val('');
    }

    event.preventDefault();
  });

});
