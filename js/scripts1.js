
function appendImages() {

var imagesArr = [
  'images/one.png',
  'images/collection1.png',
  'images/slide4.png',
  'images/two.png',
  'images/1.jpg'

]

// console.log(imagesArr.length)

  for (var i = 0; i < imagesArr.length; i ++ ) {
    var slidePrev = '<div><img src=' + imagesArr[i] + '></div>'
    var prev = $('.js__prev-slider')
    prev.append(slidePrev)

    var j = i + 1 
    if (j >= imagesArr.length) {
      j = j - imagesArr.length
    }

    var slideMain = '<div><img src=' + imagesArr[j] + '></div>'
    var main = $('.js__main-slider')
    main.append(slideMain)


    var k = i + 2
    if (k >= imagesArr.length) {
      k = k - imagesArr.length
    }

    console.log(k)

    var slideNext = '<div><img src=' + imagesArr[k] + '></div>'
    var next = $('.js__next-slider')
    next.append(slideNext)



  }




}

appendImages()

$(document).ready(function($) {

  var sliderButton = function(el, sliderClass, sliderNumber) {
    if (sliderNumber === "") {
      $(el).on("click", function() {
        $(sliderClass).slick("slickNext");
      });
      return;
    }
    $(el).on("click", function() {
      $(sliderClass).slick("slickGoTo", parseInt(sliderNumber));
    });
  };

  var sliderPrevButton = function(el, sliderClass, sliderNumber) {
    if (sliderNumber === "") {
      $(el).on("click", function() {
        $(sliderClass).slick("slickPrev");
      });
      return;
    }
    $(el).on("click", function() {
      $(sliderClass).slick("slickGoTo", parseInt(sliderNumber));
    });
  };

  sliderButton(".js__nav-next", ".js__next-slider", "");
  sliderPrevButton(".js__nav-prev", ".js__next-slider", "");

  var updateLogger = function(output, selector) {
    $(selector).text(output);
  };

  $(".js__prev-slider").slick({
    arrows: true,
    speed: 1500,
    // vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: true,
    asNavFor: ".js__next-slider, .js__main-slider"
    // dots: true,
    // centerMode: true,
  });

  $(".js__next-slider").slick({
    arrows: true,
    speed: 1500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    asNavFor: ".js__prev-slider, .js__main-slider"
    // dots: true,
    // draggable: false,
    // respondTo: $(".js__prev-slider"),
    // vertical: true,
    // centerMode: true,
  });

  $(".js__main-slider").slick({
    arrows: false,
    speed: 1500,
    // autoplay: true,
    // autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    asNavFor: ".js__prev-slider, .js__next-slider"
    // draggable: false,
    // vertical: true,
    // centerMode: true,
    // centerPadding: '40px',
    // slidesToShow: 3,
  });
});









// var scale = Math.min( 
//   availableWidth / contentWidth, 
//   availableHeight / contentHeight 
// );


// $('.slider').slick({
// 	autoplay:true,
// 	autoplaySpeed:10000,
// 	dots:true,
// 	dotsClass: 'myDots',
// 	prevArrow: '<div class="slick-prev"> &#60 </div>',
// 	nextArrow: '<div class="slick-next"> &#62 </div>'
// }); 

// $('.slider').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows: true,
//   dots: false,
//   centerMode: true,
//   variableWidth: true,
//   infinite: true,
//   focusOnSelect: true,
//   cssEase: 'linear',
//   touchMove: true,
//   prevArrow:'<button class="slick-prev"> < </button>',
//   nextArrow:'<button class="slick-next"> > </button>',
  
  //         responsive: [                        
  //             {
  //               breakpoint: 576,
  //               settings: {
  //                 centerMode: false,
  //                 variableWidth: false,
  //               }
  //             },
  //         ]
// });


// var imgs = $('.slider img');
// imgs.each(function(){
//   var item = $(this).closest('.item');
//   item.css({
//     'background-image': 'url(' + $(this).attr('src') + ')', 
//     'background-position': 'center',            
//     '-webkit-background-size': 'cover',
//     'background-size': 'cover', 
//   });
//   $(this).hide();
// });


var imagesArr = [
  'https://images.unsplash.com/photo-1516355686850-d4df2f2507db?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&'
]

