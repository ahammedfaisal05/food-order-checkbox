//get element
const box = document.querySelector('.box');
const h3 = document.querySelector('h3');

const food = box.querySelectorAll('input[name="food"]');

food.forEach(item => {
    item.onchange = (e) => {
        const selectedFood = box.querySelectorAll('input[name="food"]:checked');
        
        
        let selectedfoods = [];
        let total = 0;
        selectedFood.forEach(khabar => {
            selectedfoods.push(khabar.value);
            total += Number(khabar.getAttribute('price'));
            
        });
        
        h3.innerHTML = `sir you selected ${selectedfoods.join(', ')}, now your total bill = ${ total} taka, please wait few time.`
        
    }
});