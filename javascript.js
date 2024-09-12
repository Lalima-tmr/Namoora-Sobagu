
function open_box() {
    var res = confirm("You want to buy this product?");
    if(res == true){
        alert("Order Confirmed!\nThank You!");
    }
    else {
        alert("Order Canceled!\nThank You!");
    }
}