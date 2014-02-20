// user goal
// 	- rate food pics

// interactions
// 	- display 1 image at a time
// 	- rate image and go to next image
// 	- skip to next
// 	- return to previous image
// 	- rerate images
// 	- end rating
// 	- show score

// Implementation
	// DISPLAY display 1 image at a time
	// * an array of images



var images = [
		"pics/image1.jpg",
		"pics/image2.jpg",
		"pics/image3.jpg"
];

	// * display the image corresponding to sequence the user is on

$('#gallery').append('<img src="'+images[0]+'">');
$('#gallery').append('<img src="'+images[1]+'">');
$('#gallery').append('<img src="'+images[2]+'">');

	// RATING rate image 
	// * store score in an array with the same index as the images 
	// NAVIG go to next image
	// * display next image (can be merged with the 1st display function)
	// NAVIG skip to next
	// * display next image (can be merged with the 1st display function)
	// NAVIG return to previous image
	// * display previous image (can be merged with the 1st display function)
	// RATING rerate images
	// * call the rating function again with correct image index 
	// LOGIC end rating
	// * when user reaches last image index, show specific page (disable skip button and show score)
		// DISPLAY show score
		// * add scores, divide my total number of images, display score 