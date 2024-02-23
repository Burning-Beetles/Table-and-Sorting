let container = document.getElementById("tableContainer")

let table = document.createElement("table")
table.id = "dynamicTable"
table.className = "tableDynamic"

{/* <table>
    <thead>
      <tr> 
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
    </thead>

    <tbody>

        <tr> 
          <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
        
        </tr>
        <tr> </tr>
        <tr> </tr>
        <tr> </tr>

        
    </tbody>
</table> */}


const header = table.createTHead()

const row = header.insertRow(0) 

let arr = ["Column1", "Column2", "Column3", "Column4", "Column5"]


arr.forEach((headerText, index)=>{
    const cell =  row.insertCell(index) // td
    cell.innerText = headerText // adding text to td
})


// create tbody

// const tbody = table.createTBody()


// // adding for tr and td


function  addRow(dataArray){
    let tableBody = (table.getElementsByTagName("tbody")[0]) || (table.createTBody()
    )
    let newRow = tableBody.insertRow(0)

    dataArray.forEach((headerText, index)=>{
        const cell =  newRow.insertCell(index) // td
        cell.innerText = headerText // adding text to td
    })

}

// let obj = {
//     0: ["Data1", "Data2", "Data3", "Data4", "Data5"],
//     1: ["value1", "value2", "value3", "value4", "value5"],
//     2: ["info1", "info2", "info3", "info4", "info5"],
//     3: ["info1", "info2", "info3", "info4", "info5"]
// }

addRow(["Data1", "Data2", "Data3", "Data4", "Data5"]) //0
addRow(["value1", "value2", "value3", "value4", "value5"])
addRow(["info1", "info2", "info3", "info4", "info5"])





container.append(table)

// container.appendChild(table)


// table.innerHTML = `
//    <thead>
//         <tr> 
//             <td> </td>
//             <td> </td>
//             <td> </td>
//             <td> </td>
//             <td> </td>
//         </tr>
//         </thead>
    
//         <tbody>
    
//             <tr> 
//             <td> </td>
//                 <td> </td>
//                 <td> </td>
//                 <td> </td>
//                 <td> </td>
            
//             </tr>
//             <tr> </tr>
//             <tr> </tr>
//             <tr> </tr>
                // <tr> </tr>
    
            
//         </tbody>


// `
