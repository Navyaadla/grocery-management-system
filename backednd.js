// script.js
let addItemInventory = []; // Inventory for added items (POST)
let getItemsInventory = []; // Inventory for items when "Get Items" button is clicked (GET)

// Function to render added items table
function renderAddItemTable() {
  const addItemBody = document.getElementById('addItemBody');
  addItemBody.innerHTML = ''; // Clear the table body

  addItemInventory.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
    `;
    addItemBody.appendChild(row);
  });
}

// Function to render items when "Get Items" button is clicked (GET)
function renderGetItemsTable() {
  const getItemsBody = document.getElementById('getItemsBody');
  getItemsBody.innerHTML = ''; // Clear the table body

  getItemsInventory.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
    `;
    getItemsBody.appendChild(row);
  });
}

// Function to handle form submission and add item to inventory (POST)
document.getElementById('addItemForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const itemName = document.getElementById('itemName').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (itemName && quantity) {
    const newItem = { name: itemName, quantity: quantity };
    addItemInventory.push(newItem);
    renderAddItemTable(); // Render added items table
    document.getElementById('addItemForm').reset(); // Reset form fields
  } else {
    alert('Please fill in all fields');
  }
});

// Function to handle displaying items when "Get Items" button is clicked (GET)
document.getElementById('getItemsBtn').addEventListener('click', function() {
  getItemsInventory = addItemInventory.slice(); // Copy added items to "Get Items" inventory
  renderGetItemsTable(); // Render "Get Items" table
  document.getElementById('getItemsTable').style.display = 'table'; // Display the "Get Items" table
});
