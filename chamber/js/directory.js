const requestURL='https://carlassaraf.github.io/wdd230/chamber/data.json';

document.addEventListener("DOMContentLoaded", () => {
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        companies= jsonObject['companies'];
        companies.forEach(displayCompanies);
    });
});

function displayCompanies(company) {

    const shops = document.querySelector('#directory-list');

    let li = document.createElement("li");
    let h4 = document.createElement("h4");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let a = document.createElement("a");

    li.setAttribute("class", "company");

    h4.innerText = company.name;
    p1.innerText = company.address;
    p2.innerText = company.phone;
    a.innerText = company.site;

    li.append(h4);
    li.append(p1);
    li.append(p2);
    li.append(a);

    shops.append(li);
}
