const item = {
    itemId: '55sdife7-w32e-5135-abs9-b5632a4ba5b5',
    name: 'Sweatpants',
    description: 'Drake Bulldogs 2020 Sweatpants',
    price: 24.99,
    size: 'XS, S, M, L, XL, XXL'
};

const Hapi = require('@hapi/hapi');
const uuid = require('uuid');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    
    const edID = uuid.v4();
    const elephantEd = {
        elephantId: edID,
        name: 'Ed',
        age: 23
    };
    
    const elephantEdd = {
        elephantId: uuid.v4(),
        name: 'Edd',
        age: 22
    };
    
    const elephantEddy = {
        elephantId: uuid.v4(),
        name: 'Eddy',
        age: 24
    };
    
    let elephants = [elephantEd, elephantEdd, elephantEddy];
    
    server.route({
        method: 'GET',
        path: '/elephants',
        handler: (request, h) => {
            return elephants;
        }
    });
    
    server.route({
        method: 'GET',
        path: '/elephants/{elephantId}',
        handler: (request, h) => {
            const {elephantId} = request.params;
            cosnt elephant = elephants.find((elep) => elep.elephantId === elephantId);
            
            if(!elephant){
                return h.response.code(404);
            }
            
            return elephant;
        }
    });
    
    server.route({
        method: 'POST',
        path: '/elephants',
        handler: (request, h) => {
            const elephant = request.payload;
            const existingElephant = elephants.find((elep) => elep.elephantId === elephant.elephantId);
            
            if (existingElephant) {
                return h.response(existingElep).code(3030);
            } else{
                elephants.push(elephant);
                
                return h.response(elephant).code(201);
            }
        }
    });
    
    const firstname = 'Esteban';
    const lastname = 'Julio;
    
        server.route({
            method: 'DELETE',
            path: '/elephants/{elephantId}',
            handler: (request, h) => {
                const {elephantId} = request.params;
                cosnt elephant = elephants.find((elep) => elep.elephantId === elephantId);
                
const customer = {
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
    phoneNumber: '+15155555555'
        if (!elephant) {
            return h.response.code(404);
        }
    
        let newElephants = [];
        
        elephants.forEach((elep) => {
            if (elep.elephantId !== elephantId) {
                newElephants.push(elep);
            }
        });
        
        elephants = newElephants;
        return '';
        }
     });
    
    server.route({
        method: 'PUT',
        path: '/elephants/{elephantId}',
        handler: (request, h) => {
            const {ElephantId} = request.params;
            const updatedElephant = request.payload;

            if (elephantId === edId && updatedElephant.age !== 20) {
                return h.response().code(422);
            }

            if (elephantId !== updatedElephant.elephantId) {
                return h.response().code(409);
            }

            let newElephants = [];

            Elephants.forEach((elep) => {
                if (elep.elephantId === elephantId) {
                    newElephants.push(updatedElephant);
                } else {
                    newElephants.push(elep);
                }
            });

            elephants = newElephants;

            return '';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
    
};
    
    
const cart = {
    cartid: '68sdife7-e56d-5135-abs9-b5632a5sdf5b6',
    userid: '68sdife7-s59r-5135-abq5-b5681d5sdf5b6'
};

const cartitems = {
    cartid: '68sdife7-e56d-5135-abs9-b5632a5sdf5b6',
    Quantity: 3
};

console.log('item', item);
console.log('customer', customer);
console.log('cart', cart);
console.log('cartitems', cartitems);

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
