function insert_Row() {
    //Write your code here
    let table = document.getElementById('sampleTable');
    let btn = document.querySelector('input'); 


    btn.addEventListener('click', addRow) 

    function addRow() {
        console.log("I am executed")
        let row = table.insertRow();
        row.insertCell(0).innerHTML = "New Cell1";
        row.insertCell(1).innerHTML = "New Cell2";
    }


}