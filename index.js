
const images = []

const mainDiv = document.createElement("div")
mainDiv.setAttribute("id", "container")
document.body.append(mainDiv)

function newImage(picture, left, bottom, name) {

    let img = document.createElement("img")
    images.push(name)

    img.src = picture
    img.style.position = "fixed"
    img.style.left = left + "px"
    img.style.bottom = bottom + "px"
    mainDiv.appendChild(img)
    return img

    // for (let i = 0; i < images.length; i++) {
    //     img.setAttribute("id", images[i])
    // }

}

function newItem(picture, left, bottom, name) {

    let img = document.createElement("img")

    img.src = picture
    img.style.position = "fixed"
    img.style.left = left + "px"
    img.style.bottom = bottom + "px"
    mainDiv.appendChild(img)

    newImage(picture, left, bottom, name)

    img.addEventListener("dblclick", function() {
        img.remove()
    })
}


let sword = newItem("assets/sword.png", 500, 405, "sword")
let sheild = newItem("assets/sheild.png", 165, 185, "sheild")
let staff = newItem("assets/staff.png", 600, 100, "staff")


let greenCharacter =  newImage("assets/green-character.gif", 100, 100, "greenCharacter")
let tree = newImage("assets/tree.png", 200, 300, "tree")
let piller = newImage('assets/pillar.png', 350, 100, "piller")
let pineTree = newImage('assets/pine-tree.png', 450, 200, "piineTree")
let crate = newImage('assets/crate.png', 150, 200, "crate")
let well = newImage('assets/well.png', 500, 425, "well")





console.log(images)



function mainDivAppend(addElement) {
    mainDiv.append(addElement)
} 

let main = document.createElement("main")
mainDivAppend(main)





// ATTEMPT AT SEPERATING THE POSITONS INTO THEIR OWN FUNCTIONS
// **********************************************************************************

// function positionTop(elementName, top) {
//     let element = elementName
//     element.style.top = top + "px"
//      return element
// }
// function positionBottom(elementName, bottom) {
//     let element = elementName
//     element.style.bottom = bottom + "px"
//     return element
// }

// let greenCharacter =  newImage("assets/green-character.gif", "fixed", "greenCharacter")
// greenCharacter.positionBottom("greenCharacter", 100)
