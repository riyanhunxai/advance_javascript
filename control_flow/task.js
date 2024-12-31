const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

addButton.addEventListener('click', () => {
 const newItem = document.createElement('li');
    newItem.textContent = `New Item ${itemList.children.length + 1}`;

    itemList.appendChild(newItem);
});
