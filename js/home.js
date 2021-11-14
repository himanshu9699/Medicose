var storeHtml = "";
homeMedicine.forEach((element) => {
  var name = element.name;
  var batchNo = element.batchNo;
  var img = element.image;
  var price = element.Price;
  var composition = element.composition;
  var id = element.id;

  storeHtml += `
    
    <div class="card mb-5 mt-5 me-3 group hover:bg-white hover:shadow-lg hover:border-transparent ..." style="width: 18rem; border-radius: 30px;" onclick='product()' id='${id}'>
    <img src="${img}" class="card-img-top w-75 p-3" alt="...">
    <div class="card-body ">
    
      <h5 class="card-title group-hover:text-gray-900 ...">${name}</h5>
      <hr>
      <p class="card-text group-hover:text-gray-900 ...">
         <span class="pe-2"> 
           <del> ₹100</del>
            <span style="color: rgb(255, 94, 0);">&nbsp; 6%off </span>
          </span> 
         <span> ₹${price}</span> &nbsp;
          
          <a onclick="cart()" class="btn btn-outline-primary bg-gradient" style="border-radius: 18px;">Add to cart</a>
        </p>
    </div>
  </div> 



  `;
 
});
document.querySelector(".items-medicine").innerHTML = storeHtml;

console.log("Homes")


const product = (e) =>{
  console.log(e)
}



const cart = () =>{
  (document.getElementById("cart-value").innerText)++;
  
}


$('.card').click(function(event) {
  var medicineName = $(event.target)[0].offsetParent.children[1].children[0].innerText;
  var img = $(event.target)[0].src;
  var price = $(event.target)[0].offsetParent.children[1].children[2].children[1].innerText;
  // html += ` `
  console.log(medicineName,img,price)
  localStorage.setItem('name',`${medicineName}`)
  localStorage.setItem('img',`${img}`)
  localStorage.setItem('price',`${price}`)
  window.location = './productEach.html'
});


var li = [['Dolo' ,'650mg' ,'Tablet' ,'15'],['Paracetamol'],['Amg', '15mg'],['Dabur','Amul']];
       
// function press(){
//     var searchInput = document.getElementById("search").value
//     for (i of li){
//         for (j of i){
//             if(searchInput.toLowerCase() == j.toLowerCase()){
//                 console.log(i)
                
//             }
//         }
//     }
    
// }

homeMedicine.forEach((ele)=>{
  var name = ele.name
  document.getElementById('search-btn').addEventListener('click',function(){
    var search = document.getElementById("search").value
    for (i of name.toLowerCase()){
      for (j of search){
        if (i == j.toLowerCase()){
          console.log(name)
        }
      }
    }
  })
   

})
