module.exports = {
    name: "Produts",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "string"
        },
        price: {
           type: "int" 
        },
        categories: {
            type: "string",
            enum: ['bag', 'wallet']
        }
    }
};