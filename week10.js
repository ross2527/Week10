//  can be used to get document by id
// function for button functionality
const textbox = document.getElementById("list-input") 
        const list = document.querySelector("#list-container") 
        const deleteBottomItemButton = document.getElementById("delete-bottom-item-button")

        const listArray = []

        deleteTopItemButton.addEventListener("click", deleteBottomItem)

        function createListItem() {
            const newItemText = textbox.value;
            const newLi = document.createElement("li") 

            // Either put it on the whole list item
            //newLi.addEventListener("click", () => deleteListItem(newLi))

            newLi.textContent = newItemText
            newLi.classList.add("list-group-item") // Adds a class that changes the style

            // Make an image
            const image = document.createElement("img")
            image.src = "/images/tullip background.png
            image.style.width = "50px" // Changes the style directly
            newLi.appendChild(image)

            // OR make a delete button and just listen to clicks on that button
            // Make a delete button
            const button = document.createElement("button")
            button.textContent = "Delete"
            button.classList.add("btn")
            button.classList.add("btn-danger")
            button.addEventListener("click", () => deleteListItem(newLi))
            newLi.appendChild(button)

            // Also add it to our Javascript data
            listArray.push(newItemText)

            // Put that list item in the list
            list.appendChild(newLi) // MOVES THINGS

            textbox.value = ""
        }

        function deleteTopItem() {
            list.removeChild(list.firstElementChild)
            deleteTopItemButton.removeEventListener("click", deleteTopItem)
        }

        function deleteListItem(liToDelete) {
            list.removeChild(liToDelete)
        }

        function deleteAllListItems() {
            while (list.firstChild) {
                list.removeChild(list.firstChild)
            }
        }

        function onKeyPress() {
            console.log(event.key)
            if(event.keyCode === 13) { // 13 means Enter
                createListItem()
            }
        }
