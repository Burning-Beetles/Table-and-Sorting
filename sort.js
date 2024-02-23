
// let arr = ["mango","apple", "banana", "cherry", "orange"];

// arr.sort((a,b)=> b-a) // ascending order

// arr.sort((a,b)=>{
//      if(a>b){ 
//         return -1
//      }
//      if(a<b){
//         return 1
//      }
//      return 0
// })

// console.log(arr);





// let arr1 = [100, 30]; // string


// arr1.sort((a,b)=>b-a) // ascending order

// console.log(arr1); 



// let str = "30" // 
// let str1 = "100000"

// console.log(str>str1)


// A-Z => 65-90
// a-z => 97-122
// "0"-"9" => 48-57
// " " => 32


// let items = [
//     { name: "Banana", price: 50 },
//     { name: "Apple", price: 20 },
//     { name: "Orange", price: 30 }
// ];

// items.sort((a,b)=> a.price - b.price) 

// console.log(items);  // ascending order


// let employees = [
//     { name: "Hannah", department: "Finance" },
//     { name: "Sarah", department: "IT" },
//     { name: "Bryan", department: "Finance" },
//     { name: "Mike", department: "IT" },
//     { name: "Ashley", department: "Finance" },
//     { name: "Jeff", department: "IT" }
//   ];


//   employees.sort((a,b)=>{
//      // primary sorting
//        if(a.department >b.department){
//            return 1
//        }
//        if(a.department < b.department){
//            return -1
//        }
// //   if(a.department == b.department){
// //       if(a.name > b.name){
// //           return 1
// //       }
// //       if(a.name < b.name){
// //           return -1
// //       }
//     // secondary sorting
//     if(a.name > b.name){
//         return 1
//     }
//     if(a.name < b.name){
//         return -1
//     }
//   })

//     console.log(employees);  // ascending order
  


let books = [
    { title: "Book B", author: { firstName: "John", lastName: "Doe" } },
    { title: "Book A", author: { firstName: "Jane", lastName: "Doe" } },
    { title: "Book C", author: { firstName: "Alice", lastName: "Johnson" } },
    { title: "Book D", author: { firstName: "Mike", lastName: "Smith" } }
  ];

  // sort it based on author last name, if last name is same sort it based on book tiitle

  books.sort((a,b)=>{
      if(a.author.lastName > b.author.lastName){
           return 1
      }
      if (a.author.lastName < b.author.lastName){
          return -1
      }
     if(a.author.lastName == b.author.lastName){
         if(a.title > b.title){
             return 1
         }
         if(a.title < b.title){
             return -1
         }
     }
  })

  console.log(books);  // ascending order