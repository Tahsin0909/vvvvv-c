document.getElementById('cupontext').addEventListener('keyup', function () {
    const couponText = document.getElementById('cupontext').value;
    const couponBtn = document.getElementById('couponbtn');
    if (couponText === 'SELL200') {
        couponBtn.removeAttribute('disabled');
    } else {
        couponBtn.setAttribute('disabled', 'disabled');
    }
});
// tab and mobile 
document.getElementById('input-field').addEventListener('keyup', function () {
    const inputField = document.getElementById('input-field').value;
    const applyBtn = document.getElementById('apply-btn');
    if (inputField === 'SELL200') {
        applyBtn.removeAttribute('disabled');
    } else {
        applyBtn.setAttribute('disabled', 'disabled');
    }
});

let total = 0;
const selectedItems = new Set(); // Set to keep track of selected items

document.getElementById('couponbtn').addEventListener('click', function () {
    const discountPercentage = 0.20; // 20% discount
    const discountAmount = total * discountPercentage;
    total -= discountAmount; // Apply the discount
    const totalBill = total;
    document.getElementById('discount').innerText = discountAmount.toFixed(2);
    document.getElementById('totalbill').innerText = totalBill.toFixed(2);
    document.getElementById('couponbtn').setAttribute('disabled', 'disabled');
});
// tab and mobile 
document.getElementById('apply-btn').addEventListener('click', function () {
    const discount = 0.20; // 20% discount
    const amount = total * discount;
    total -= amount; // Apply the discount correctly
    const bill = total; // Use 'total' instead of 'totalPrice'
    document.getElementById('newdiscount').innerText = amount.toFixed(2);
    document.getElementById('newbill').innerText = bill.toFixed(2);
    document.getElementById('apply-btn').setAttribute('disabled', 'disabled');
});





function handleClickBtn(target) {
    if (!selectedItems.has(target)) {
        selectedItems.add(target);

        const itemName = target.querySelector('.card-title').innerText;
        const price = parseFloat(target.querySelector('.font-light').innerText);
        const selectedItemContainer = document.getElementById('selected-items');

        const li = document.createElement("li");
        li.innerText = itemName;
        const buyList = document.getElementById('buylist');
        buyList.appendChild(li);

        total += price;
        document.getElementById('totalprice').innerText = total.toFixed(2);
        document.getElementById('newtotal').innerText = total.toFixed(2);
    }
}






// home-page

function goToHomePage() {
    window.location.href = 'index.html';
}
