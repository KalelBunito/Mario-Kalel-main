const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');
 
const jump = ()=>{
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
        
    }, 500)
}

const loop = setInterval(()=>{
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const pipePosition = pipe.offsetLeft;
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px','');

    if(pipePosition > 0  && pipePosition <= 100 && marioPosition < 60){
        console.log('Funcionando')
        // mario
        mario.style.animation = "none";
        mario.style.width = '70px';
        mario.style.marginLeft = '35px';
        mario.src = 'assets/imgs/game-over.png';
        mario.style.bottom = `${marioPosition} px`;

        // game over exibido
        gameOver.style.visibility = 'visible';

        // pipe
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition} px`;
        // cloud
        clearInterval(loop)
        cloud.style.left = `${cloudPosition} px`;
    }
}, 10);

const restart = ()=>{
    gameOver.style.visibility = 'hidden';
    pipe.style.animation = 'pipe-animations 1.5s infinite linear';
    pipe.style.left;

    mario.style.animation = '';
    mario.style.bottom = `0px`;
    mario.src = 'assets/imgs/mario.gif';
    mario.style.width = '130px';
    mario.style.marginLeft = '';

    cloud.style.left = '';

const loop = setInterval(()=>{
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const pipePosition = pipe.offsetLeft;
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px','');

    if(pipePosition > 0  && pipePosition <= 100 && marioPosition < 60){
        console.log('Funcionando')
        // mario
        mario.style.animation = "none";
        mario.style.width = '70px';
        mario.style.marginLeft = '35px';
        mario.src = 'assets/imgs/game-over.png';
        mario.style.bottom = `${marioPosition} px`;

        // game over exibido
        gameOver.style.visibility = 'visible';

        // pipe
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition} px`;
        // cloud
        clearInterval(loop)
        cloud.style.left = `${cloudPosition} px`;
    }
}, 10);
}

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);
restartButton.addEventListener('click', restart);