let saveBtn = document.querySelector("#save-btn");
let saveTab = document.querySelector("#save-current-tab-btn");
const deleteBtn = document.querySelector("#delete-btn");
let inputElement = document.querySelector("#input-el");
let listUrl = document.querySelector("#list-url");
let myUrlListArray = [];
let UrlListFromLocalStorage = JSON.parse(localStorage.getItem("myUrls"));

if (UrlListFromLocalStorage) {
    myUrlListArray = UrlListFromLocalStorage;
    createUrlAndUpdateDom();
}
// first store the value into array
// how ?

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
});

function clearInputField() {
    inputElement.value = "";
}

saveBtn.addEventListener("click", () => {
    storeUrlIntoArray();
    localStorage.setItem("myUrls", JSON.stringify(myUrlListArray));
    createUrlAndUpdateDom();
    clearInputField();
});

deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear();
    myUrlListArray = [];
    createUrlAndUpdateDom();
    listUrl.innerHTML = "";
});
