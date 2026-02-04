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

function createUrlAndUpdateDom() {
    let url = inputElement.value;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.append(url);
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    li.append(a);

    listUrl.append(li);
}

function clearInputField() {
    inputElement.value = "";
}

saveBtn.addEventListener("click", () => {
    storeUrlIntoArray();
    localStorage.setItem("myUrls", JSON.stringify(myUrlListArray));
    createUrlAndUpdateDom();
    clearInputField();
});
