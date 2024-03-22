
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
