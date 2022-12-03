import './styles.scss'
import img from './suco-de-laranja.png'

function titleComponent() {
    const eleh1 = document.createElement('h1')
    eleh1.innerHTML = 'hello world3'
    eleh1.classList.add('title')
    return eleh1
}

function rootStyle() {
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')
    return elemRoot
}

function imageComponent() {
    const elemImg = new Image(393,200)
    elemImg.src = img
    return elemImg
}


document.body.appendChild('root')(rootStyle())
document.body.appendChild('root')(imageComponent())
document.body.appendChild('root')(imageComponent())

