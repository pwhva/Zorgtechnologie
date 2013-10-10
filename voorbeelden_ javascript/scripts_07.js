$(document).ready(function() {
 
  // jQuery events werken alleen voor elementen die zichtbaar zijn 
  // op het moment dat het event wordt toegevoegd.
  // dat wil zeggen op het moment dat onderstaande code wordt gelezen.
  // Nieuwe eigen artikelen bestaan op dat moment echter nog niet.
  //
  // de div met id #content bestaat echter wel, we kunnen de on voor dit element aanroepen
  // en als tweede argument meegeven voor wat voor soort elementen binnen #content de meegegeven
  // eigen functie moet worden aangeroepen. Dit werkt ook voor elementen die pas later toegevoegd
  // worden.
  $('#content').on('mouseenter', 'article', function() {
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
