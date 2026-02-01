const inputBtn = document.querySelector("#input-btn");
let inputEl = document.querySelector("#input-el");
let listUrl = document.querySelector("#list-url");
let myLeads = [];

inputBtn.addEventListener("click", function () {
    let userSearched = inputEl.value;
    myLeads.push(userSearched);

    // TODO: list out url's
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.append(userSearched);
    a.setAttribute("href", userSearched);
    a.setAttribute("target", "_blank");
    li.append(a);
    listUrl.append(li);

    inputEl.value = "";
});
