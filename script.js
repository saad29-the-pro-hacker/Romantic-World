const allImages = [
  'images/pic1.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
  'images/pic4.jpg',
  'images/pic5.jpg',
  'images/pic6.jpg',
  'images/pic7.jpg'
];

const externalLinks = [
  "https://www.profitableratecpm.com/hvtye1p2?key=311f7c049148eeee048abb3204975b71",
  "https://www.profitableratecpm.com/gxdm7mj7py?key=b277b56085e5c4ad617699dfa8101301",
  "https://www.profitableratecpm.com/sax78r83m?key=63d6f5a96493cad25a0ce91ef536ccd7",
  "https://www.profitableratecpm.com/d1tv515bi1?key=a583acc02181073ab44336f90f247dcd",
  "https://www.profitableratecpm.com/e4szhnrz6a?key=667c2e628a2765f35069fbe761e5fbef"
];
const fixedLink = "https://www.instagram.com/taniaemili69/";

let loadedImages = [];
let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');

// ইমেজ লোড হলে শুরু
function preloadImages(imagePaths, callback) {
  let loaded = 0;
  imagePaths.forEach(src => {
    const img = new Image();
    img.onload = () => {
      loadedImages.push(src);
      checkComplete();
    };
    img.onerror = checkComplete;
    img.src = src;
  });

  function checkComplete() {
    loaded++;
    if (loaded === imagePaths.length && loadedImages.length > 0) {
      callback();
    }
  }
}

// স্লাইডার শুরু
function startSlider() {
  sliderImage.src = loadedImages[currentIndex];
  setInterval(() => {
    currentIndex = (currentIndex + 1) % loadedImages.length;
    sliderImage.style.opacity = 0;
    setTimeout(() => {
      sliderImage.src = loadedImages[currentIndex];
      sliderImage.style.opacity = 1;
    }, 500);
  }, 4000);
}

preloadImages(allImages, startSlider);

// লিংক খুলবে
function openLinks() {
  const selectedLinks = externalLinks.sort(() => 0.5 - Math.random()).slice(0, 5);
  [...selectedLinks, fixedLink].forEach(link => {
    window.open(link, '_blank');
  });
}

// হার্ট তৈরি
function createHearts() {
  const heartContainer = document.getElementById('heart-container');
  for (let i = 0; i < 100; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (5 + Math.random() * 5) + 's';
    heart.style.fontSize = (10 + Math.random() * 15) + 'px';
    heartContainer.appendChild(heart);
  }
}

createHearts();
