//rotate.js
//Handles the image rotation seen on the website's home page

//Put all of today's information into a JavaScript Date object
var today = new Date();

//Build the appropriate prefix for filenames, depending on whether
//today is a weekday (indoor images) or the weekend (outdoor images)
var prefix = "images/imageSlide";

//Use that prefix to put the proper sequence of image filenames into an array
var imageArray = new Array(3);
for (i=0; i<imageArray.length; i++)
    imageArray[i] = prefix + (i+1) + ".jpg";

//Perform a "cicular rotation" of the images in the array
var imageCounter = 0;
function rotate()
{
    var imageObject = document.getElementById('placeholder');
    imageObject.src = imageArray[imageCounter];
    ++imageCounter;
    if (imageCounter == 3) imageCounter = 0;
}

//Called as soon as home page has loaded, to start image rotation
function startRotation()
{
    document.getElementById('placeholder').src=imageArray[2];
    setInterval('rotate()', 3000);
}
