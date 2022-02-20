let placeholder = document.getElementById("placeholder");
let notification = document.getElementById("notification");

let head = ["Name", "Strength", "Age"];
let heroes = [
    { name: `Black Panther`, strength: 66, age: 53 },
    { name: `Captain America`, strength: 79, age: 137 },
    { name: `Captain Marvel`, strength: 97, age: 26 },
    { name: `Hulk`, strength: 80, age: 49 },
    { name: `Iron Man`, strength: 88, age: 48 },
    { name: `Spider-Man`, strength: 78, age: 16 },
    { name: `Thanos`, strength: 99, age: 1000 },
    { name: `Thor`, strength: 95, age: 1000 },
    { name: `Yon-Rogg`, strength: 73, age: 52 }
]

function createTable(tableElem){
    const ownTable = document.createElement("table");   

    const headRow = document.createElement("tr");

    for (let x = 0; x < 3; x++) {
        let cell = document.createElement("th");

        cell.innerText = head[x];
        if (x === 0)
            cell.setAttribute("onclick", "sortByName()");
        else if (x === 1) {
            cell.setAttribute("onclick", "sortByStrength()");
        }
        else {
            cell.setAttribute("onclick", "sortByAge()");
        }
        headRow.appendChild(cell);
    }
    ownTable.appendChild(headRow);
    for (let x = 0; x < 9; x++) {
        let bodyRow = document.createElement("tr");
        createCell(`${tableElem[x].name}`, bodyRow);
        createCell(`${tableElem[x].strength}`, bodyRow);
        createCell(`${tableElem[x].age}`, bodyRow);
        ownTable.appendChild(bodyRow);
    }
    placeholder.innerHTML="";
    placeholder.appendChild(ownTable);

}

function createCell(str, row) {
    let cell = document.createElement("td");

    cell.innerText = str;
    row.appendChild(cell);
}

function sortByName(){
    heroes.sort((a, b) => a.name > b.name ? 1 : -1);
    createTable(heroes);
    notification.innerHTML = "Sorting by Name, order: ASC"
}

function sortByStrength(){
    heroes.sort((a, b) => a.strength > b.strength ? 1 : -1);
    createTable(heroes)
    notification.innerHTML = "Sorting by Strength, order: ASC";
}

function sortByAge(){
    heroes.sort((a, b) => a.age > b.age ? 1 : -1);
    createTable(heroes)
    notification.innerHTML = "Sorting by Age, order: ASC";
}

createTable(heroes);
