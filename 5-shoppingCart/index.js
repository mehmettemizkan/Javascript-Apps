import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
        databaseURL: 'https://realtime-database-10fe2-default-rtdb.europe-west1.firebasedatabase.app/' // write your own database link
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")


const addButtonEl = document.getElementById('add-button')
const inputFieldEl = document.getElementById('input-field')
const shoppingListEl = document.getElementById('shopping-list') // ul

addButtonEl.addEventListener('click', function () {
        let inputValue = inputFieldEl.value
        push(shoppingListInDB, inputValue) // add inputValue to database

        clearInputFieldEl() // inputFieldEl.value = ''
})


// onValue: fetch data from the database
onValue(shoppingListInDB, function (snapshot) {
        if (!snapshot.exists()) {
                shoppingListEl.innerHTML = "No items here... yet"
        } else {
                let itemsArray = Object.entries(snapshot.val())

                clearShoppingListEl()
                itemsArray.forEach(shoppingItem => {
                        let currentShopping = shoppingItem
                        let currentItemID = shoppingItem[0]
                        let currentItemValue = shoppingItem[1]

                        appendItemToShoppingListEl(shoppingItem)
                });

        }

})

function clearInputFieldEl() {
        inputFieldEl.value = ""
}
function clearShoppingListEl() {
        shoppingListEl.innerHTML = ""
}

function appendItemToShoppingListEl(item) {// item is the data from database and it comes [key, value] format. item[0] is the key of data and item[1] is the value of 


        let itemID = item[0]
        let itemValue = item[1]

        let newLi = document.createElement('li') // create a list item html element

        newLi.textContent = itemValue // set content of the list item

        shoppingListEl.append(newLi) // finally append the list item to the list

        newLi.addEventListener('click', function () {
                const exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
                remove(exactLocationOfItemInDB) // remove item from the database
        })
}