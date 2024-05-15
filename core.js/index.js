const ImgSlade = document.querySelectorAll('.ImgSlade')
const points = document.querySelectorAll('.points')
const leftArrow = document.querySelector('.leftArrow')
const rightArrow = document.querySelector('.rightArrow')

ImgSlade[0].classList.remove('activeImg')
points[0].classList.add('colorPoint')

let counter = 0

function point() {
  for(let a = 0; a < points.length; a++) {
      points[a].addEventListener('click', () => {
          for(let k = 0; k < ImgSlade.length; k++) {
          ImgSlade[k].classList.add('activeImg') 
          points[k].classList.remove('colorPoint')
        }
            
      counter = a
      points[counter].classList.add('colorPoint')
      ImgSlade[counter].classList.remove('activeImg')
          
    })
    
  }
}

point()

function LeftArrow() {
  leftArrow.addEventListener('click', () => {
      for(let k = 0; k < ImgSlade.length; k++) {
        ImgSlade[k].classList.add('activeImg') 
        points[k].classList.remove('colorPoint')
      }
  
      counter--

      if(counter < 0) {
      counter = ImgSlade.length-1
    }

    ImgSlade[counter].classList.remove('activeImg')
    points[counter].classList.add('colorPoint')
  })
}

LeftArrow()

function RightArrow() {
  rightArrow.addEventListener('click', () => {
      for(let k = 0; k < ImgSlade.length; k++) {
        ImgSlade[k].classList.add('activeImg') 
        points[k].classList.remove('colorPoint')
      }

      counter++

      if(counter >= ImgSlade.length) {
      counter = 0
    }

    ImgSlade[counter].classList.remove('activeImg')
    points[counter].classList.add('colorPoint')
  })
}

RightArrow()

