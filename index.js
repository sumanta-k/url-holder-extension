const inputBtn = document.querySelector("#input-btn");
let inputEl = document.querySelector("#input-el");
let myLeads = [];

inputBtn.addEventListener("click", function () {
    let userSearched = inputEl.value;
    myLeads.push(userSearched);

    inputEl.value = "";
    console.log(myLeads);
});
