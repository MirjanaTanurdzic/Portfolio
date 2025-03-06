let slider = document.querySelector('.slider');
let images = document.querySelectorAll('.slider img');
let totalImages = images.length;
let imageWidth = images[0].width;

function moveSlider() {
    slider.style.transform = `translateX(-${imageWidth}px)`;
    setTimeout(() => {
        slider.appendChild(slider.firstElementChild);  
        slider.style.transition = 'none'; 
        slider.style.transform = `translateX(0)`; 
    }, 500); 
    setTimeout(() => {
        slider.style.transition = 'transform 1s ease'; 
    }, 800); 
}
setInterval(moveSlider, 1000);

let start=false;

function fillPercentBars() {
    let about=document.getElementById('about');
    let aboutTop=about.getBoundingClientRect().top;
    let percentBars = document.querySelectorAll('.percent');
    if(aboutTop >= 0 && aboutTop < window.innerHeight && !start){
        start=true;
        percentBars.forEach(bar => {
        let targetWidth = bar.getAttribute('data-width');
        bar.style.width = targetWidth;
        });
    }
}
window.addEventListener('scroll', fillPercentBars);

let form = document.getElementById('contact-form');
let formMessage = document.getElementById('form-message');

form.addEventListener('submit', function() {
    formMessage.style.display = 'block';
    form.reset();

    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});

function openEDiv(){
    document.getElementById('emailDiv').style.display='flex';
}
function closeEDiv() {
    document.getElementById('emailDiv').style.display='none';
}
function copyEmail() {
    let email = document.getElementById('emailToCopy').innerText;
    navigator.clipboard.writeText(email);
}

let home=document.getElementById('home');
let pointerImg=document.getElementById('pointerImg');

function scroll(){
    let homeBottom=home.getBoundingClientRect().bottom;
    if(homeBottom<0){
        pointerImg.classList.add('visible');
    } else{
        pointerImg.classList.remove('visible');
    }
}
window.addEventListener('scroll',scroll);
