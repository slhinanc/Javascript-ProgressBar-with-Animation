
const progress = document.querySelector('#progress');
const lineCircles = document.querySelectorAll('.line-number');
const back = document.getElementById('back');
const next = document.getElementById('next');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > lineCircles.length){
        currentActive = lineCircles.length;
    }
    update();
})



back.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1){
        currentActive = 1;
    }
    update();
})



function update() {
    lineCircles.forEach((lineCircle, index) => {
        if(index < currentActive){
            lineCircle.classList.add('active');
        } else {
            lineCircle.classList.remove('active')
        }
    })
    
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length -1) / (lineCircles.length -1) * 100 + '%';

    if(currentActive === 1){
        back.disabled = true;
    } else if (currentActive === lineCircles.length){
        next.disabled = true;
    }else{
        back.disabled = false;
        next.disabled = false;
    }
}

