let grocery = document.querySelector("[id='grocery']");
grocery.addEventListener('submit', addItem);

function addItem(event){
    event.preventDefault();
    let data = this.elements.writeList.value;
    let list = document.querySelector('ul');
    let item = document.createElement('li');
    let text = document.createElement('p');

    text.textContent = data;
    this.elements.writeList.value = "";
    item.append(text);
    list.append(item);

    let rmvBtn = document.createElement('span')
    rmvBtn.classList.add('remove');
    item.append(rmvBtn);
    rmvBtn.addEventListener('click', deleteItem);

}
function deleteItem(event){
    this.parentElement.remove();

}