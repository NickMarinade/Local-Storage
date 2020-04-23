const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

const checkItems = document.querySelector('.check-item');
const deleteItems = document.querySelector('.delete-items');