

document.addEventListener('DOMContentLoaded',()=>{

    function hscroll(contId,back,next,amount){
        const scrollingList=document.getElementById(contId);
    
        document.getElementById(back).addEventListener('click', ()=>{
            scrollingList.scrollBy({left:-amount,behavior:'smooth'});
        });
    
        document.getElementById(next).addEventListener('click',()=>{
            scrollingList.scrollBy({left:amount,behavior:'smooth'});
        });
    }
    hscroll('scrolling-list','back','next',100);
    hscroll('scrolling-category','back-menus','next-menus',100);
});
const mBtn=document.getElementById('menu-toggle');
const sidebar=document.getElementById('sidebar');

mBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('active');
});


function toggleCartPopup(){
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.classList.toggle('active');
}
function closeCart(){
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.classList.remove('active');
}


function addToCart(itemName,itemPrice){
    const cartItems = document.getElementById('cart-items').getElementsByTagName('tbody')[0];
    const existingItem = Array.from(cartItems.getElementsByTagName('tr')).find(item=>item.cells[0].textContent === itemName);
    if(existingItem){
        const itemCount = parseInt(existingItem.querySelector('.item-count').textContent) + 1;
        existingItem.querySelector('.item-count').textContent = itemCount;
        
        const itemTotal = parseFloat(existingItem.querySelector('.item-total').textContent) + parseFloat(itemPrice);
        existingItem.querySelector('item-total').textContent = itemTotal.toFixed(2);
    }
    else{
        const newRow = cartItems.insertRow();
        newRow.innerHTML = `
        <td>${itemName}</td>
        <td class='item-count'>1</td>
        <td class='item-price'>${itemPrice}</td>
        <td class='item-total'>${itemPrice}</td>
        `;
    }
    updateCartCountAndTotal();
}

function updateCartCountAndTotal() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.querySelectorAll('#cart-items tbody tr');
    let totalCount = 0;
    let total = 0;
    cartItems.forEach(item => {
        const itemCount = parseInt(item.querySelector('.item-count').textContent);
        const itemTotal = parseFloat(item.querySelector('.item-total').textContent);
        totalCount += itemCount;
        total += itemTotal;
    });
    cartCount.textContent = totalCount;
    cartTotal.textContent = total.toFixed(2);
}


