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

    document.getElementById('totalPrice').innerText = totalPrice;

    count++
    })
}