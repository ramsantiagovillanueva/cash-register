function getTotal(){
    let Price = Number (document.getElementById('Price').value);
    let Quantity = Number (document.getElementById('Quantity').value);
    let Total = Price * Quantity;

    document.getElementById('Total').innerText = Total;
}
function Save(){
    let inputcash =Number(document.getElementById('Cash').value);
    let total =Number(document.getElementById('Total').innerText);

    if(inputcash < total) {
        alert("Insufficient Cash");
    }
    else {
        let Change = inputcash-total;
        document.getElementById('Prod').innerText = document.getElementById('Product').value;
        document.getElementById('Pri').innerText = document.getElementById('Price').value;
        document.getElementById('Quan').innerText = document.getElementById('Quantity').value;
        document.getElementById('Tot').innerText = total;
        document.getElementById('Cas').innerText = document.getElementById('Cash').value
        document.getElementById('Change').innerText = Change;
        
    }
    function isValid(){
        let Price =
    }

}
