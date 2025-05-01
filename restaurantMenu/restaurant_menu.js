const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.97', 'Oatmeal - $21.99', 'Frittata - $10.99'];
const mainCourseMenu = ['Steak - $21.99', 'Pasta - $15.99', 'Burger - $11.99', 'Salmon - $20.99'];
const dessertMenu = ['Cake - $5.99', 'Ice Cream - $2.99', 'Pudding - $3.99', 'Fruit Salad - $4.99'];

const breakfastMenuItemsHtml = breakfastMenu.map((item, index)=>`<p> Item ${index+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHtml;


let mainCourseItem = '';
mainCourseMenu.forEach((item, index)=>{
    mainCourseItem += `<p>Item ${index+1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;


let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;


