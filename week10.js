//  can be used to get document by id
// function for button functionality
const textbox = document.getElementById("list-input") 
        const list = document.querySelector("#list-container") 
        const deleteBottomItemButton = document.getElementById("delete-bottom-item-button")

        deleteBottomItemButton.addEventListener("click", deleteBottomItem)

        function createListItem() {
            const newItemText = textbox.value;
            const newLi = document.createElement("li") 
            const button = document.createElement("button")
            button.textContent = "Delete"
            button.classList.add("btn")
            button.classList.add("btn-danger")
            button.addEventListener("click", () => deleteListItem(newLi))
            newLi.appendChild(button)

            listArray.push(newItemText)
            list.appendChild(newLi)

            textbox.value = ""
        }

        function deleteBottomItem() {
            list.removeChild(list.firstElementChild)
            deleteBottomItemButton.removeEventListener("click", deleteBottomItem)
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
            if(event.keyCode === 13) { 
                createListItem()
            }
        }
