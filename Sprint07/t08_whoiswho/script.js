const TableContainer = document.getElementById('csvTable');
const SorterContainer = document.getElementById('Sorter');
const SelectFilter = document.getElementById('SelectFilter');
const reqUrl = '/getTable';
let currenArr = [];
let SorterCol = '';

function SortTable(){
    const key = SelectFilter.options[SelectFilter.selectedIndex].value;
    console.log(key);
    currenArr.sort((a, b) => b[SorterCol] == key  ? 1 : -1);
    console.log(currenArr);
    createTable(currenArr);
}

function createSorter(event){
    SorterContainer.style.display = 'unset';
    SorterCol = event.target.value;
    let  SortValues = currenArr
        .map(x => x[event.target.value])
        .filter((val, ind, arr) => arr.indexOf(val) === ind);
    let options = `<option value="NOT SELECTED" selected>NOT SELECTED</option>`;
    for (let index = 0; index < SortValues.length; index++) {
        const element = SortValues[index];
        options += `<option value="${element}">${element}</option>`
    }
    SelectFilter.innerHTML = options;
}

function createHeaderArr( obj){
    const headerArr = [];
    for(let key in obj){
        headerArr.push(key);
    }
    return headerArr;
}

function createCell(str, row) {
    let cell = document.createElement("td");
    cell.innerText = str;
    row.appendChild(cell);
}

/**
 * 
 * @param {Array} headerData 
 */
function createHeaderRow(headerData, Table){
    const headRow = document.createElement("tr");
    for (let x = 0; x < headerData.length; x++) {
        const cell = document.createElement("th");
        const button = document.createElement('button');
        button.innerText = headerData[x];
        button.setAttribute('value', headerData[x]);
        button.addEventListener('click', createSorter)
        cell.appendChild(button);
        headRow.appendChild(cell);
    }
    Table.appendChild(headRow)
}

/**
 * 
 * @param {Array} tableData 
 */
function createTable(tableData){
    const Table = document.createElement('table');
    const headerArr = createHeaderArr(tableData[0]);
    createHeaderRow(headerArr, Table);
    for (let index = 0; index < tableData.length; index++) {
        const element = tableData[index];
        let bodyRow = document.createElement("tr");
        for(let key in element){
            createCell(element[key], bodyRow);
        }
        Table.appendChild(bodyRow);
    }
    TableContainer.innerHTML = '';
    TableContainer.appendChild(Table);
}

async function getData(){
    const {results} = await fetch(reqUrl).then( res => res.json());
    console.log(results);
    if(!(results == 'No Data')){
        currenArr = results;
        createTable(currenArr);
    }
}

getData();
