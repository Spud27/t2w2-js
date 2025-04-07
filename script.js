// Lets say we got this array from an API request
const data = [
    'Frankenstein',
    'Dracula',
    'Freddie',
    'Jason',
    'Ghost Face',
    'Chuckie'
]

function addCostumeToList (costume) {
    const ul = document.querySelector('#costumeContainer ul')
    // Create an <li> from using costume
    const newLi = document.createElement('li')
    // set the child text of li to the value of costume
    newLi.innerText = costume

    //create a button for removing item
    const removeButton = document.createElement('button')
    removeButton.innerText = `Remove ${costume}`
    // attatch a click listener
    removeButton.addEventListener('click', () => {
        ul.removeChild(newLi)
        // todo remove item from array aswell
    })
    //append the button to the li
    newLi.appendChild(removeButton)

    // append li to ul in the DOM as a child element
    ul.appendChild(newLi)
}

// iterate over data
for (let costume of data) {
    // easy way
    // ul.innerHTML += `
    //     <li>    
    //         ${costume}
    //         <button>Remove ${costume}</button>
    //     </li>
    // `
}

// listen for form submission
document.querySelector('#newCostumeForm').addEventListener('submit', (event) => {
    event.preventDefault()
    //get costume from form input
    const newCostumeInput = document.querySelector('#newCostumeForm input')
    const costume = newCostumeInput.value
    // add the new costume to the list
    addCostumeToList(costume)
    // clear the input field
    newCostumeInput.value = ''
})


