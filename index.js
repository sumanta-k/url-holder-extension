const saveBtn = document.querySelector("#save-btn");
let inputElement = document.querySelector("#input-el");
let listUrl = document.querySelector("#list-url");
let myUrlListArray = [];

// first store the value into array
// how ?

function storeUrlIntoArray() {
    let userEnteredUrl = inputElement.value;
    myUrlListArray.push(userEnteredUrl);
}
    a.setAttribute("href", userSearched);
    a.setAttribute("target", "_blank");
    li.append(a);
    listUrl.append(li);
function clearInputField() {
    inputElement.value = "";
}

saveBtn.addEventListener("click", () => {
    storeUrlIntoArray();
    createUrlAndUpdateDom();
    clearInputField();
});
