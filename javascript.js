// scripts.js

const houseOwners = [];
const customers = [];
const rooms = [];

function showHomePage() {
    document.getElementById('home-section').style.display = 'block';
    document.getElementById('house-owner-section').style.display = 'none';
    document.getElementById('customer-section').style.display = 'none';
}

function showHouseOwnerForm() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('house-owner-section').style.display = 'block';
    document.getElementById('customer-section').style.display = 'none';
}

function showCustomerForm() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('house-owner-section').style.display = 'none';
    document.getElementById('customer-section').style.display = 'block';
}

function registerHouseOwner() {
    const email = document.getElementById('owner-email').value;
    const mobile = document.getElementById('owner-mobile').value;
    houseOwners.push({ email, mobile });
    document.getElementById('house-owner-actions').style.display = 'block';
    alert('House owner registered successfully!');
}

function registerCustomer() {
    const email = document.getElementById('customer-email').value;
    const mobile = document.getElementById('customer-mobile').value;
    customers.push({ email, mobile });
    document.getElementById('customer-actions').style.display = 'block';
    alert('Customer registered successfully!');
}

function addRoom() {
    const name = document.getElementById('room-name').value;
    const floorSize = document.getElementById('floor-size').value;
    const numBeds = document.getElementById('num-beds').value;
    const amenities = document.getElementById('amenities').value;
    const rent = document.getElementById('rent').value;
    const minDays = document.getElementById('min-days').value;
    const maxDays = document.getElementById('max-days').value;
    rooms.push({ name, floorSize, numBeds, amenities, rent, minDays, maxDays });

    updateRoomList();
}

function updateRoomList() {
    const roomList = document.getElementById('room-list');
    roomList.innerHTML = '';

    rooms.forEach(room => {
        const roomItem = document.createElement('div');
        roomItem.className = 'room-item';
        roomItem.innerHTML = `
            <span>${room.name}</span>
            <button onclick="deleteRoom('${room.name}')">Delete</button>
        `;
        roomList.appendChild(roomItem);
    });
}

function deleteRoom(name) {
    const index = rooms.findIndex(room => room.name === name);
    if (index !== -1) {
        rooms.splice(index, 1);
        updateRoomList();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('a[onclick="showHomePage()"]').addEventListener('click', showHomePage);
    document.querySelector('a[onclick="showHouseOwnerForm()"]').addEventListener('click', showHouseOwnerForm);
    document.querySelector('a[onclick="showCustomerForm()"]').addEventListener('click', showCustomerForm);
});
