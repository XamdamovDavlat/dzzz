const products = [
    {
        name: "moloko",
        price: 12000,
        type: "milk"
    },
    {
        name: "cheese",
        price: 67000,
        type: "milk"
    },
    {
        name: "banana",
        price: 25000,
        type: "fruit"
    },
    {
        name: "apple",
        price: 8000,
        type: "fruit"
    },
    {
        name: "vodka",
        price: 32000,
        type: "alcohole"
    },
    {
        name: "beer",
        price: 12000,
        type: "alcohole"
    },
]

let typesOfGood = {
    alcohole: 0,
    fruit: 0,
    milk: 0,
};

for (let product of products) {
    typesOfGood[product.type] += product.price;
}

console.log(typesOfGood);

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    typesOfGood[product.type] += product.price;
}

console.log(typesOfGood);