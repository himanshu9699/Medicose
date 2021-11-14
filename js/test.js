var li = ['Dolo 650mg Tablet 15','logo']
var i;

function searchVal(){
val = document.getElementById('search').value
value = []
for (i of val){
    value.push(i)
}
for(var i =0; i<li.length; i++){
    if(li[i] == val){
        console.log(li[i])
    }
}
}

// function myFunction() {
//     // Declare variables
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
  
//     // Loop through all table rows, and hide those who don't match the search query
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }
//     }
//   }