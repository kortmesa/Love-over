const wrapper = document.querySelector('.wrapper');
const quesion = document.querySelector('.quesion');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click',()=>{
    quesion.innerHTML =" >> I Love You Too🤍🫶 << "
    gif.src=
    "https://www.whoa.in/download/hug-me-kiss-me-love-me-animated-gif-of-emojis-and-cartoon-3-emoji-gif"
});
noBtn.addEventListener('mouseover',()=>{
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});