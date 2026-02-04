const inputBtn = document.querySelector("#input-btn");
let inputEl = document.querySelector("#input-el");
let listUrl = document.querySelector("#list-url");
let myLeads = [];

inputBtn.addEventListener("click", function () {
    let userSearched = inputEl.value;
    myLeads.push(userSearched);

function storeUrlIntoArray() {
    let userEnteredUrl = inputElement.value;
    myUrlListArray.push(userEnteredUrl);
}
    a.setAttribute("href", userSearched);
    a.setAttribute("target", "_blank");
    li.append(a);
    listUrl.append(li);

    inputEl.value = "";
});
