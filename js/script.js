// new TypeIt(".tpc", {
//   speed: 50,
//   waitUntilVisible: true,
// }).go();


// ScrollReveal().reveal('.box');

// $(document).ready(function() {
// 	$('.tpc').funnyText({
// 		speed: 700,
// 		borderColor: 'black',
// 		activeColor: 'white',
// 		color: 'black',
// 		fontSize: '7em',
// 		direction: 'both'
// 	});
// });

$(".language .lang-btn").click(function(){
  $(".drm-lang").stop().slideToggle()
})

$(".accordion button").click(function(){
   $(".accordion p").stop().slideUp()
    $(this).next().stop().slideToggle()
})

// $(".accordion button").click(function(){
// $(".acc-icon").css("transform","rotate(180deg)")
	
//  })




// $("#accordion button").click(function(){
//   $("#accordion p").stop().slideUp()
//    $(this).next().stop().slideToggle()
// })