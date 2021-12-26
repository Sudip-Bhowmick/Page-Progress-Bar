const progress = document.getElementById('progressBar');
const container = document.querySelector('.container');

function progressBar(){
    var scrollPosition = -container.getBoundingClientRect().top;
    var progressBarWidth = (scrollPosition / (container.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    var percentValue = Math.floor(progressBarWidth);
    progress.style.width = percentValue + '%';
}

window.addEventListener('scroll', progressBar);