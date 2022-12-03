import './styles.scss'
import img from './suco-de-laranja.png'



function titleComponent(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Hello world 6'
    elemH1.classList.add('title')
    return elemH1
}

function rootStyle(){
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')
    return elemRoot
}

function imageComponent(){
    const elemImg = new Image()
    elemImg.src = img
    return elemImg
}

document.getElementById('root').appendChild(rootStyle())
document.getElementById('root').appendChild(titleComponent())
document.getElementById('root').appendChild(imageComponent())

