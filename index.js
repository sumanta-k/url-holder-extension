const inputBtn = document.querySelector("#input-btn");
let inputEl = document.querySelector("#input-el");
let listUrl = document.querySelector("#list-url");
let myLeads = [];

inputBtn.addEventListener("click", function () {
    let userSearched = inputEl.value;
    myLeads.push(userSearched);

    // TODO: list out url's
    let li = document.createElement("li");
    li.append(userSearched);
    listUrl.append(li);

    inputEl.value = "";
    console.log(myLeads);
});
