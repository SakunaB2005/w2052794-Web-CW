function fetchData(){
    showLoader();
    fetch('https://example.com/data')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
        })
        .catch(error=>{
            console.error("Error : ",error);
        })
        .finally(()=>{
            hideLoader();
        });
}

document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
        document.getElementById('splashScreen').style.display='none';
    },4000);
});

/*------Java Script for Shop.html-------*/

let order = []; // Array to store order items

function addToOrder(itemId, itemName, itemPrice) {
  const quantity = document.getElementById(`quantity${itemId}`).value; // Get quantity by input's ID
  const itemTotal = itemPrice * quantity;
  order.push({ id: itemId, name: itemName, price: itemPrice, quantity: quantity, total: itemTotal });
  displayOrder();
}

function resetQuantity(itemId) {
  document.getElementById(`quantity${itemId}`).value = 1; // Reset the specific quantity input to 1

  const itemIndex=order.findIndex(item=>item.id===itemId);
  if (itemIndex!==-1){
    order.splice(itemIndex,1)
  }
  displayOrder();
}

function displayOrder() {
  const orderList = document.getElementById("order");
  orderList.innerHTML = ""; // Clear existing order list
  let totalBill = 0;

  order.forEach(item => {
    const itemElement = document.createElement("p");
    itemElement.textContent = `${item.quantity} x ${item.name} = Rs.${item.total}`;
    orderList.appendChild(itemElement);
    totalBill += item.total;
  });

  document.getElementById("totalBill").textContent = `Total Bill: Rs.${totalBill}`;

  
}

function resetWholeOrder() {
  order = []; 

  const orderList = document.getElementById("order");
  if (orderList) {
    orderList.innerHTML = ""; 
  }

  const totalBillElement = document.getElementById("totalBill");
  if (totalBillElement) {
    totalBillElement.textContent = "Total Bill: Rs.0"; 
  }

  alert('Your whole order will be reset!')
}

function initiateCheckout(){
  if(order.length === 0){
    alert('You have not ordered anything yet!')
  }
  else{
    
    document.getElementById('fullInfoForm')
      .innerHTML=`
        <div class="Credit_card_and_person_information" id="fullInfoForm">
              <div class="formtitle">
                  <p>---Please fill the Below forms to verify the order---</p>
      
              </div>
              <form id="paymentForm">
                <fieldset>
                    <legend><h2>Payment Information</h2></legend>
                    <label for="Creditcardnumber">Credit Card No.: </label><br>
                    <input type="text" id="cardNumber" placeholder="Enter your credit card no. here" size="50"  required><br><br>
                    <label for="Creditcardholder">Credit Card Holder name : </label><br>
                    <input type="text" id="cardHolder" placeholder="Enter card holder name here " size="50"  required><br><br>
                    <label for="Creditcardccv">Credit Card CCV : </label><br>
                    <input type="text" id="cardCcv" placeholder="Enter card CCV here" size="50"  required><br><br>
                    <button type="button" onclick="resetPaymentForm()">Reset</button>
                    <button type="button" onclick="savePaymentInfo()">Save Changes</button>
                </fieldset>
              </form><br>
              <form id="personForm">
                <fieldset>
                    <legend><h2>Person Information</h2></legend>
                    <label for="customername">Name : </label><br>
                    <input type="text" id="customerName" placeholder="Enter your Name" size="50" required><br><br>
                    <label for="customeraddress">Home Address : </label><br>
                    <input type="text" id="customerAddress" placeholder="Enter your address" size="50"  required><br><br>
                    <label for="customernumber">Contact number : </label><br>
                    <input type="text" id="customerNumber" placeholder="Enter telephone number" size="50"  required><br><br>
                    <button type="button" onclick="resetPersonForm()">Reset</button>
                    <button type="button" onclick="savePersonInfo()">Save Changes</button>
                </fieldset>
              </form><br>
              
              <div class="confirm_or_reset">
                  <button type="button" onclick="confirmOrder()">Confirm Order</button>
                  
              </div>
          </div>
      
      `
      setTimeout(()=>{
        document.getElementById('fullInfoForm').scrollIntoView({
          behavior:"smooth"
        });
      },0);
  }
}

/*function for reset payment form*/
function resetPaymentForm(){
  document.getElementById('paymentForm').reset();
}

function savePaymentInfo(){
  const cardNumber=document.getElementById('cardNumber').value.trim();
  const cardHolder=document.getElementById('cardHolder').value.trim();
  const cardCcv=document.getElementById('cardCcv').value.trim();

  if(!cardNumber||!cardHolder||!cardCcv){
    alert('Please fill the payment form.')
    return;
  }

  console.log('saved payment information - ',{cardNumber,cardHolder,cardCcv});
  alert('Payment information has sucessfully saved.')
}

/*function for reset person form*/
function resetPersonForm(){
  document.getElementById('personForm').reset();
}

function savePersonInfo(){
  const customerName=document.getElementById('customerName').value.trim();
  const customerAddress=document.getElementById('customerAddress').value.trim();
  const customerNumber=document.getElementById('customerNumber').value.trim();

  if(!customerName||!customerAddress||!customerNumber){
    alert('Please fill the person form.')
    return;
  }

  console.log('saved person information - ',{customerName,customerAddress,customerNumber});
  alert('person information has sucessfully saved.')
}


function confirmOrder(){
  if(order.length===0){
    alert('Your order bill is empty.')
    return;
  }

  const cardNumber=document.getElementById('cardNumber').value.trim();
  const cardHolder=document.getElementById('cardHolder').value.trim();
  const cardCcv=document.getElementById('cardCcv').value.trim();
  const customerName=document.getElementById('customerName').value.trim();
  const customerAddress=document.getElementById('customerAddress').value.trim();
  const customerNumber=document.getElementById('customerNumber').value.trim();

  if(!cardNumber||!cardHolder||!cardCcv||!customerName||!customerAddress||!customerNumber){
    alert('Please fill the both payment and person forms to confirm order.');
    return;
  }
  alert('You have successfully made the Order.')


}


  




  
  
  





