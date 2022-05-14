// Dark-mode functionality
let modeIsDark = false

const changeMode = ()=> {
  modeIsDark = !modeIsDark
  let body = document.querySelector("body");
  
  body.className = modeIsDark ? " dark-mode" : null
}


// To-top button functionality:
toTopButton = document.getElementById("to-top")

// When scrolling down 20px from the top of the document, show the button
window.onscroll = ()=> { 
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block"
  } else {
    toTopButton.style.display = "none"
  }
}

const gotToTop = ()=> {
  document.documentElement.scrollTop = 0
}

const loadingBtn = document.querySelector('#loading');
let currentItem = 3;

loadingBtn.onclick = () => {

  const items = [...document.querySelectorAll('#row .workshops_item')];
  for (let i= currentItem; i < currentItem + 3; i++){
    items[i].style.display = 'block';
  }
  currentItem+=3;

  if (currentItem >= items.length){
    loadingBtn.style.display = 'none';
  }

};