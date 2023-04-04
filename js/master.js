// Check If There's Local Storge Color Option
let mainColors = localStorage.getItem("color_option");

if(mainColors !== null) {
    // console.log('Local Storage Is Not Empty You Can Set It On Root Now');
    // console.log(localStorage.getItem("color_option"));

    document.documentElement.style.setProperty('--main-color', mainColors);

// Remove Active Class From ALL Colors List Item
document.querySelectorAll(".colors-list li").forEach(element =>{
    element.classList.remove("active");


 // Add Active Class On Element With Data-Color === Local Stoarge Item
    if(element.dataset.color === mainColors){
        // Add Active Class 
        element.classList.add("active");
    }   
});

}


//Random Background Option
let backgroundOption = true; 
   
// Variable To Control The Background Interval 
let backgroundInterval;

//Check if There's Local Stoarge Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Stoarge Is Not Empty 
if(backgroundLocalItem !== null){

if(backgroundLocalItem === "true"){
    backgroundOption = true;
}else{
    backgroundOption = false;
}

// Remove Active Class From All Spans
document.querySelectorAll(".random-backgrounds span").forEach(element => {
    
        element.classList.remove("active");
});
if(backgroundLocalItem === "true"){

    document.querySelector(".random-backgrounds .yes").classList.add("active");
}else{
    document.querySelector(".random-backgrounds .no").classList.add("active");

    }
}

//Click On Toggle Settings Gear
    document.querySelector(".toggle-settings .fa-gear").onclick = function() {

//Toggle Class Fa-spin For Rotation On Self
    this.classList.toggle("fa-spin");

// Toglle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
    };






// Switch Colors
    const colorsLi = document.querySelectorAll(".colors-list li");

    // Loop On Every List Items
    colorsLi.forEach(li => {

// Click On Every List Items
    li.addEventListener("click", (e) => {

//Set Color On Root
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        
//Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);
        
        handleActive(e);
    });
 });




// Switch Random Background option
const RandomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
RandomBackEl.forEach(span => {

// Click On Every Span
span.addEventListener("click", (e) => {

    handleActive(e);

if (e.target.dataset.background === "yes"){

    BackgroundOption = true;

        randomizeImgs();

    localStorage.setItem("background_option", true);    

}else{
    BackgroundOption = false;
        clearInterval(backgroundInterval);
        localStorage.setItem("background_option", false);    
    
}

});

});






//Select Landing Page Element
    let landingPage= document.querySelector(".landing-page");

// Get Array Of Images
    let imgsArray=["1.jpg", "2.jpg", "3.jpg", "4.jpg" ,"5.png"];

// Function To Randomize Imgs
function randomizeImgs() {
    if(backgroundOption === true){
        backgroundInterval = setInterval(() => {

            // Get Random Number
                let randomNumber =  Math.floor(Math.random() * imgsArray.length);
            
            // Change Background Image Url
                landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
                }, 1000);
    }
}

randomizeImgs();





// Select Skills Selector 
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

// Skills Offset Top 
let skillsOffsetTop = ourSkills.offsetTop;

//Skills Outer Height 
let skillsOuterHeight = ourSkills.offsetHeight;

// Window Height
let windowHeight = this.innerHeight;    

//Window ScrollTop
let windowScrollTop = this.pageYOffset;     


if(windowScrollTop < (skillsOffsetTop + skillsOuterHeight - windowHeight)){

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
    allSkills.forEach(skill =>  {

        skill.style.width = skill.dataset.progress;

    });
}

};







//Creat Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");


ourGallery.forEach(img => {

img.addEventListener("click" , (e)=>{

//Creat Overlay Element
 let overlay = document.createElement("div"); 

//Add Class To Overlay
overlay.className = "popup-overlay";

// Append Overlay To The Body 
document.body.appendChild(overlay);


// Creat The Popup Box
let popupBox = document.createElement("div");

// Add Class To The Popup Box 
popupBox.className = 'popup-box';

// Creat The Image
let popupImage = document.createElement("img");

//Set Image Source 
popupImage.src = img.src;

// Add Image To Popup Box
popupBox.appendChild(popupImage);

// Append The Popup Box To Body 
document.body.appendChild(popupBox);

});

});






//Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");


//Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

    elements.forEach(ele =>{
    
        ele.addEventListener("click",(e) => {
    
            e.preventDefault();
    
            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior:'smooth'
    
            });
        });
    
    });

}
scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);



// Handle Active State
function handleActive(ev){
// Remove Active Class From All Childernd
ev.target.parentElement.querySelectorAll(".active").forEach(element => {
    element.classList.remove("active");
});
// Add Active Class On Self
ev.target.classList.add("active");
}


let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocallItem = localStorage.getItem("bullets-option");

if (bulletLocallItem !== null){

    bulletsSpan.forEach(span =>{
        span.classList.remove("active");

    });

    if(bulletLocallItem === 'block'){
        bulletsContainer.style.display ='block';

        document.querySelector(".bullets-option .yes").classList.add("active");

    }else{
        bulletsContainer.style.display ='none';

        document.querySelector(".bullets-option .no").classList.add("active");


    }

}



bulletsSpan.forEach(span=> {
 span.addEventListener("click",(e)=>{

    if (span.dataset.display == 'show'){

        bulletsContainer.style.display = 'block';

        localStorage.setItem("bullets-option", 'block');

    }else {
        bulletsContainer.style.display = 'none';
        localStorage.setItem("bullets-option", 'none');

    }
    handleActive(e);


 });

});






// Restet Button
document.querySelector(".reset-options").onclick = function (){

    
// localStorage.clear();


    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");

//Realod Window 
window.location.reload();

};




// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks =document.querySelector (".links");


toggleBtn.onclick = function(e){

// Stop Propagation
e.stopPropagation();

//Toggle Class "menu-active" On Button

    this.classList.toggle("menu-active");

// Toggle Class "open" On Links

tLinks.classList.toggle("open");
};




// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click",(e) => {


    if(e.target !== toggleBtn && e.target !== tLinks){


// Check If Menu Is Open

if (tLinks.classList.contains("open")){

//Toggle Class "menu-active" On Button

toggleBtn.classList.toggle("menu-active");

// Toggle Class "open" On Links

tLinks.classList.toggle("open");

}
    }

});






// Stop Propagation On Menu 
tLinks.onclick =function (e){
    e.stopPropagation()
     
};