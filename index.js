const item = {
    itemId: '55sdife7-w32e-5135-abs9-b5632a4ba5b5',
    name: 'Sweatpants',
    description: 'Drake Bulldogs 2020 Sweatpants',
    price: 24.99,
    size: 'XS-XXL'
};

const firstName = 'Esteban';
const lastName = 'Julio Ricardo Montoya de la Rosa Ramirez';

const customer = {
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
    phoneNumber: '+15155555555'
};

const cart = {
    cartid: '68sdife7-e56d-5135-abs9-b5632a5sdf5b6'
    userid: '68sdife7-s59r-5135-abq5-b5681d5sdf5b6'
};

const cartitems = {
    cartid: '68sdife7-e56d-5135-abs9-b5632a5sdf5b6'
    Quantity: 3
};

console.log('item', item);
console.log('customer', customer);
console.log('cart', cart);
console.log('cartitems', cartitems);

