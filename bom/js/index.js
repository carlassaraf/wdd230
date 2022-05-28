document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#input button").addEventListener("click", addChapter);

});

function addChapter() {

    let input = document.querySelector("#input input");
    if(input.value) {

        let p = document.createElement("p");
        p.innerText = input.value;

        let button = document.createElement("button");
        button.innerText = "❌";
        button.addEventListener("click", removeChapter);

        let div = document.createElement("div");
        div.setAttribute("class", "chapter");
        div.append(p);
        div.append(button);

        document.querySelector("#chapters").append(div);
    }

}

function removeChapter() {

    this.parentElement.remove();
    document.querySelector("#input input").focus();
}