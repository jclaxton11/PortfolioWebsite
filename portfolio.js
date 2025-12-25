
function fadein() {
    var fade = document.getElementById("body"); 
    var opacity = 0; 
    var intervalID = setInterval(function() { 
    
        if (opacity < 1) { 
            opacity = opacity + 0.1 
            fade.style.opacity = opacity; 
        } else { 
            clearInterval(intervalID); 
        } 
    }, 200); 
}

function loadBlogs(category) {
    document.getElementById('blog-posts').innerHTML = '';
    url = "getBlogs.php";
    if (category) {
        url +='?category=' + category;
    }
    request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = updatePage;
    request.send();
}

function updatePage() {
  if (request.readyState == 4)
  {
      var blogs = JSON.parse(request.responseText);
      console.log(blogs);
      if (blogs.length > 0) {
        blogs.forEach(blogPost => {
            addPost(blogPost.Title, blogPost.Name, blogPost.DateAdded, 
                blogPost.Category, blogPost.Info)
        });
      } else {
        var postDiv = document.createElement('div');
        postDiv.innerHTML = '<h2>No Blogs For This Category Yet</h2><p>';
        document.getElementById('blog-posts').appendChild(postDiv);
      }
  }
}

function addPost(title, name, date, category, info) {
    var postDiv = document.createElement('div');
    var titleElement = document.createElement('h2');
    //var nameElement = document.createElement('p');
    var dateElement = document.createElement('p');
    var categoryElement = document.createElement('p');
    var infoElement = document.createElement('p');
    //nameElement.style.color = '#000000';
    dateElement.style.color = '#000000';
    categoryElement.style.color = '#000000';
    infoElement.style.color = '#000000';
    //nameElement.innerHTML = name;
    titleElement.innerHTML = title;
    dateElement.innerHTML = 'Published on: ' + date;
    categoryElement.innerHTML = 'Category: ' + category + '<hr>';
    infoElement.innerHTML = info;
    //postDiv.appendChild(nameElement);
    postDiv.appendChild(titleElement);
    postDiv.appendChild(dateElement);
    postDiv.appendChild(categoryElement);
    postDiv.appendChild(infoElement);
    //postDiv.innerHTML = '<h2>' + title + '</h2><p style="color: black;">' + name + '</p><p style="color: black;">Category: ' + category + '</p><p style="color: black;">Published on: ' + date + '</p><hr><p style="color: black;">' + info + '</p>';
    document.getElementById('blog-posts').appendChild(postDiv);
}

var prefix = "images/imageSlide";

//Use that prefix to put the proper sequence of image filenames into an array
var imageArray = new Array(3);
for (i=0; i<imageArray.length; i++)
    imageArray[i] = prefix + (i+1) + ".jpg";

var appImageArray = new Array(3);
for (i=0; i<appImageArray.length; i++) {
    appImageArray[i] = "images/mindcircuit" + (i+1) + ".png";
}
//Perform a "cicular rotation" of the images in the array
var imageCounter = 0;
function rotate()
{
    var imageObject = document.getElementById('placeholder');
    imageObject.src = imageArray[imageCounter];
    ++imageCounter;
    if (imageCounter == 3) imageCounter = 0;
}

var appImageCounter = 0;
function appRotate()
{
    var appImageObject = document.getElementById('appPlaceholder');
    appImageObject.src = appImageArray[appImageCounter];
    ++appImageCounter;
    if (appImageCounter == 3) appImageCounter = 0;
}

function startMindCircuitRotation()
{
    document.getElementById('appPlaceholder').src=appImageArray[2];
    setInterval('appRotate()', 3000);
}
//Called as soon as home page has loaded, to start image rotation
function startImageRotation()
{
    document.getElementById('placeholder').src=imageArray[2];
    setInterval('rotate()', 3000);
}



// function scroll() {
//     const options = {
//         root: null,
//         rootMargin: '0px',
//         threshold: .4
//     }

//     const callbacks = (entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('active');
//             }
//         });
//     }

//     let observer = new IntersectionObserver(cb, options)

//     ElementInternals.forEach(element => {
//         observer.observe(element);
//     });
// }
