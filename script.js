// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

// the tutorial starts here

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true



btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')
  document.querySelector('#open').style.display = 'none'
  setTimeout(()=>{
    //
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const fondo = document.querySelector('css-doodle')
    fondo.style.display = 'block'

    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'

   const hola = document.querySelector('.hola')
   hola.style.display = 'block'

   const hola2 = document.querySelector('.hola2')
   hola2.style.display = 'block'

    const heartElement3 = document.querySelector('.heart3')
    heartElement3.style.display = 'block'

    const heartElement4 = document.querySelector('.heart4')
    heartElement4.style.display = 'block'

    const heartElement5 = document.querySelector('.heart5')
    heartElement5.style.display = 'block'



    const heartElement6 = document.querySelector('.heart6')
    heartElement6.style.display = 'block'

    const heartElement7 = document.querySelector('.heart7')
    heartElement7.style.display = 'block'

    const heartElement8 = document.querySelector('.heart8')
    heartElement8.style.display = 'block'

    const heartElement9 = document.querySelector('.heart9')
    heartElement9.style.display = 'block'

  }, 500)

  const hola2 = document.querySelector('.hola2')
    hola2.style.display = 'block' 

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)
})