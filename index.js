let count = 1;
let totalPrice = 0;
const cards = document.querySelectorAll('.card');
for(const card of cards){
    card.addEventListener('click', function(){
    const cardTitle  =  card.querySelector('h3').innerText;
    const taitelContainer = document.getElementById('title-container');
    const p = document.createElement('p');
    p.innerText = count + ' ' + cardTitle;
    taitelContainer.appendChild(p)

    const cardPrice = card.querySelector('span').innerText;
    const price = parseFloat(cardPrice.split(' ')[1])
    totalPrice += price;

    // document.getElementById('totalPrice').innerText = totalPrice;
    setInnerText('totalPrice', totalPrice.toFixed(2))

    count++
    })
}

const applyFild = document.getElementById('apply-btn');
const discountFild = document.getElementById('input-field');
// const discountpreice = document.getElementById('discountPrice');

applyFild.addEventListener('click', function(){

    if(discountFild.value == 'SELL200'){
        if(totalPrice >= 200){
            const discount = totalPrice * 0.2;
            setInnerText('discountPrice', discount.toFixed(2))
            const total = totalPrice - discount;
            setInnerText('total', total.toFixed(2))
            discountFild.value = '';
        }
        else{
        alert('Buy above 200$ for discount')
        }
    }
    else{
        // setInnerText('total', totalPrice)
        alert('Enter a valid coupon')
    }
})


// set inner Teext 
function setInnerText(id, value){
    const result = document.getElementById(id).innerText = value;
    return result;
}

function confirmPurchase(){
    if(totalPrice > 0){
        showModal()
    }
    else{
        alert('Select some item')
    }
}