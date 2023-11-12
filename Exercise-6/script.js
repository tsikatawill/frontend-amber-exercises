const videos = [

  {clip: "./images/v1.mp4",
   logo: "./images/image-product-1.jpg",
   title: "How To Create Image Search Engine Using HTML CSS and JavaScript",
   text: " Using HTML CSS and JavaScript"
  },
  {clip: "./images/v2.mp4",
   logo: "./images/image-product-1.jpg",
   title: "How To Create Image Search Engine Using HTML CSS and JavaScript",
   text: " Using HTML CSS and JavaScript"
  },
  {clip: "./images/v3.mp4",
   logo: "./images/image-product-1.jpg",
   title: "How To Create Image Search Engine Using HTML CSS and JavaScript",
   text: " Using HTML CSS and JavaScript"
  },
  {clip: "./images/v4.mp4",
   logo: "./images/image-product-1.jpg",
   title: "How To Create Image Search Engine Using HTML CSS and JavaScript",
   text: " Using HTML CSS and JavaScript"
  },
  {clip: "./images/v5.mp4",
   logo: "./images/image-product-1.jpg",
   title: "How To Create Image Search Engine Using HTML CSS and JavaScript",
   text: " Using HTML CSS and JavaScript"
  },
  {clip: "./images/v6.mp4",
   logo: "./images/image-product-1.jpg",
   title: "How To Create Image Search Engine Using HTML CSS and JavaScript",
   text: " Using HTML CSS and JavaScript"
  },
  {clip: "./images/v7.mp4",
   logo: "./images/image-product-1.jpg",
   title: "How To Create Image Search Engine Using HTML CSS and JavaScript",
   text: " Using HTML CSS and JavaScript"
  },
  {clip: "./images/v8.mp4",
   logo: "./images/image-product-1.jpg",
   title: "How To Create Image Search Engine Using HTML CSS and JavaScript",
   text: " Using HTML CSS and JavaScript"
  },

];



let template = '';

videos.forEach(function (video) {
    
  template += `
 
  <div class="block">
  <video  src="${video.clip}"  muted class="video-src"></video>
  <div class="description">
  <img src="${video.logo}"class="video-icon">
  <div class="text">
  <h4 class="video-title">${video.title}</h4>
  <p class="video-desc">${video.text}</p>
 </div>
 </div>
 </div>
  
  `;
});
let container = document.querySelector('.video-col');

container.insertAdjacentHTML('beforeend',template);



const display = document.querySelector('.large');
const  videoCol = document.querySelector('.video-col');
let videoSRC = false;
videoCol.addEventListener('click', (event) =>{
  const clickedVid = event.target;
  const videoSRC = clickedVid.getAttribute('src');

  if(videoSRC){
    display.setAttribute('src', videoSRC)
  }
});







const menuIcon = document.querySelector('#menu');
const sideMenu = document.querySelector('.side-nav');

menuIcon.addEventListener('click', ()=> {
  sideMenu.classList.toggle('show');
});
 



