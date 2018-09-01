
setTimeout(function(){
	$('.main-container').addClass('open')


},5000);


$('#subscribe').on('Click',function() {
	console.log("test");
	$('.main-container').addClass('open');

});

$('.exit').on('click', function(){
  $('.main-container').removeClass('open');
});

$("#submit").on("click",function(){
  check_empty();
});

// $('#collectionmove').parallax();

$('#scene').parallax();


// Search Bar
// -
function expand() {
  $(".search").toggleClass("close");
  $(".input").toggleClass("square");
  if ($('.search').hasClass('close')) {
    $('input').focus();
  } else {
    $('input').blur();
  }
}
$('button').on('click', expand);





// var scale = Math.min( 
//   availableWidth / contentWidth, 
//   availableHeight / contentHeight 
// );

 