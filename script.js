document.addEventListener('DOMContentLoaded', () => {
    // Text Changer
    const textBtn = document.getElementById('text-btn');
    const dynamicText = document.getElementById('dynamic-text');
    
    textBtn.addEventListener('click', () => {
        dynamicText.textContent = dynamicText.textContent.includes('changed') 
            ? 'Click the button to change this text' 
            : 'Text successfully changed!';
    });

    // Style Modifier
    const styleBtn = document.getElementById('style-btn');
    const colorBox = document.getElementById('color-box');
    
    styleBtn.addEventListener('click', () => {
        colorBox.style.backgroundColor = colorBox.style.backgroundColor === 'rgb(220, 252, 231)' 
            ? '#e2e8f0' 
            : 'rgb(220, 252, 231)';
        
        colorBox.style.color = colorBox.style.color === 'rgb(22, 163, 74)' 
            ? 'inherit' 
            : 'rgb(22, 163, 74)';
    });

    // Element Manager
    const addBtn = document.getElementById('add-btn');
    const removeBtn = document.getElementById('remove-btn');
    const itemList = document.getElementById('item-list');
    let itemCount = 1;
    
    addBtn.addEventListener('click', () => {
        itemCount++;
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${itemCount}`;
        itemList.appendChild(newItem);
    });
    
    removeBtn.addEventListener('click', () => {
        if (itemList.children.length > 1) {
            itemList.removeChild(itemList.lastElementChild);
            itemCount--;
        } else {
            alert('You must keep at least one item!');
        }
    });
});
