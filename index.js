

// // activate the close button
 $(".close-button").click(function(){
// 	// hide the popup
	$('.popup').hide();
 });

// // activate the navigation links
 $(".menu-item").click(function(){
   $('.popup').hide();
// 	// get the id of the clicked menu item
	var id = $(this).attr('id');   // use it to open the connected popup
 	$("#popup-" + id).show();
 });



$( function( ) {
  var background = $( '#backg' );
  var images = background.find( 'img' );


  function positionBackgrounds( ) {
    var display_wdt = $( 'body' ).outerWidth( );
    var display_hgt = $( 'body' ).outerHeight( ) - background.position( ).top;

    images.each( function( ) {
      var image=$( this );

      var image_wdt = image.width( );
      var image_hgt = image.height( );

      var max_x = display_wdt - image_wdt;
      var max_y = display_hgt - image_hgt - 1000;

      image.css( { 'top': ( Math.random( ) * max_y ) + 'px',
                   'left': ( Math.random( ) * max_x ) + 'px' } );

    } );
  }

  function openDetails( event ) {
    event.preventDefault( );
    event.stopPropagation( );

    var link = $( this );
    var href = link.data( 'src' );

    $( '#detail-popup' ).load( href, function( ) {
      var popup = $( this );
      var content = popup.find( '.pagecontent' ).html( );
      popup.html( content ).fadeIn( 200 );
    } );
  }
  $( '.detail-link' ).click( openDetails );

  function closeDetails( ) {
    $( '#detail-popup' ).fadeOut( 200, function( ) {
      $( this ).empty( );
    } );
  }
  $( window ).click( closeDetails );

  $( window ).resize( positionBackgrounds )
             .trigger( 'resize' );
} )
