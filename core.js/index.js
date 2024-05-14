const ImgSlade = document.querySelectorAll('.ImgSlade')
const points = document.querySelectorAll('.points')
const leftArrow = document.querySelector('.leftArrow')
const rightArrow = document.querySelector('.rightArrow')

ImgSlade[0].classList.remove('activeImg')
points[0].classList.add('colorPoint')

function poi() {
  for(let a = 0; a < points.length; a++) {
    points[a].addEventListener('click', () => {
        for(let k = 0; k < ImgSlade.length; k++) {
            ImgSlade[k].classList.add('activeImg') 
            points[k].classList.remove('colorPoint')
        }
          
        let count = a
        points[count].classList.add('colorPoint')
        ImgSlade[count].classList.remove('activeImg')
        
    })
   
  }
}

poi()   
