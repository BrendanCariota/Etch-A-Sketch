let container = document.querySelector('.container')
let resetBtn = document.querySelector('.resetBtn')



let gridArea = prompt('Input a perfect square to make a drawing grid')
let perfectSquare = Math.sqrt(gridArea)

container.style.cssText = `display: grid; grid-template-columns: repeat(${perfectSquare}, 1fr); width: 840px; height: 840px; grid-gap: 3px; padding: 50px;`;

function hover(e) {
    e.target.classList.add('hovered')
}

function reset() {
    window.location.reload()
}




    for (i=0; i < gridArea; i++) {
        let tempDiv = document.createElement('div')
        tempDiv.classList.add('notHovered')
        tempDiv.addEventListener('mouseover', hover)
        container.appendChild(tempDiv)
    }

    




resetBtn.addEventListener('click', reset)

console.log(Math.sqrt(gridArea))