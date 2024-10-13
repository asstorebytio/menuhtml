function changeQuantity(id,amount){var quantityInput=document.getElementById(id);var currentValue=parseInt(quantityInput.value);var newValue=currentValue+amount;if(newValue<1)newValue=1;quantityInput.value=newValue}
function addToCart(menuItem,quantity,price){var total=quantity*price;var formattedTotal=total.toLocaleString('id-ID');Swal.fire({title:menuItem,html:`
      <div style="margin-bottom: 10px ;font-size: 26px;">Quantity: ${quantity}</div>
      <div style="margin-top: 10px;font-size: 26px;">Total Price: Rp ${formattedTotal}</div>
    `,icon:'success',confirmButtonText:'OK'})}
