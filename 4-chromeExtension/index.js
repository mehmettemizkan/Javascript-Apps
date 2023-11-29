let myLeads = []
const inputEl = document.getElementById('input-el')
const inputButton = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')


// SAVE INPUT
inputButton.addEventListener('click', function () {
        if (inputEl.value === '') {
                myLeads.push(window.location.href)
        } else {
                myLeads.push(inputEl.value) // We added the data from input to the myLeads array.
        }
        localStorage.setItem("myLeads", JSON.stringify(myLeads))

        ulEl.innerHTML += `
                <li>
                        <a href='https://${inputEl.value}' target='blank'>${inputEl.value} </a>
                </li>
                `

        inputEl.value = '' // After we are done, we clean the input field.
})


// DELETE ALL
deleteBtn.addEventListener('dblclick', function () {
        localStorage.clear()
        ulEl.innerHTML = '' // Clear html list.
        inputEl.value = '' // Clear input.
        myLeads = []
})


// SAVE TAB
tabBtn.addEventListener('click', function logLink() {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                inputEl.placeholder = tabs[0].url // We assign the current url as a placeholder to the input.
                myLeads.push(tabs[0].url)
                localStorage.setItem("myLeads", JSON.stringify(myLeads))
                ulEl.innerHTML += `
                 <li>
                         <a href='https://${tabs[0].url}' target='blank'>${tabs[0].url} </a>
                 </li>
                ` // Add the url to the html list.
        })
})