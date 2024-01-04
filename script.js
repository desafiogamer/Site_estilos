const body = document.querySelector('body')
const BtnProximo = document.querySelector('.Sobre') 
const home = document.querySelector('.home')
const About = document.querySelector('.About')
const BtnHome = document.querySelector('.BtnHome')


for(var i = 0; i< 150; i++){
    let box = document.createElement('span');
    document.getElementById('container').appendChild(box);
}

let cursor = document.getElementById('cursor');
window.onmousemove = function(e){
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
}

BtnProximo.addEventListener('click', function(){
    home.style.display = 'none'
    body.style.overflowY = 'auto'
    About.classList.add('ativo')

})

BtnHome.addEventListener('click', function(){
    home.style.display = 'flex'
    body.style.overflow = 'hidden'
    About.classList.remove('ativo')
})
