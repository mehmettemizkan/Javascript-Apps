let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}
function decrement() {
    count -= 1;
    countEl.textContent = count;
}

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("previous-entries");

function save() {
    // 2. Create a variable that contains both the count and the comma separator. "
    let commaCount = `${count} , `;

    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += commaCount;
}

function reset() {
    count = 0;
    countEl.textContent = count;
}
function resetAll() {
    count = 0;
    countEl.textContent = count;
    saveEl.textContent = "";
}
