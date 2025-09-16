const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);});
const admin ={
    username: 'admin',
    password: '1234'
}    
const toys = [
    { 
        id: 1, 
        name: 'Teddy Bear', 
        price: 19.99,
        category: 'Stuffed Animals',
        manufacturer: 'ToyCo',
        inStock: true,
        description: 'A soft and cuddly teddy bear for children of all ages.'
    },
    { 
        id: 2, 
        name: 'Lego Set', 
        price: 49.99,
        category: 'Building Blocks',
        manufacturer: 'LEGO',
        inStock: false,
        description: 'A creative building set with 500 pieces for endless fun.'
    },
    { 
        id: 3, 
        name: "Action Figure", 
        price: 14.99,
        category: "Figures",
        manufacturer: "Hasbro",
        inStock: true,
        description: "A poseable action figure with accessories."
    }
];
app.get('/Get-data', (req, res) => {
    res.json(toys);});
app.get('/Get-data/:id', (req, res) => {
    const toyId = parseInt(req.params.id);
    const toy = toys.find(t => t.id === toyId); 
    const newArr = [];
    if (toy) {
        newArr.push(toy);
        res.json(newArr);
    } else {
        res.status(404).json({ message: `toy not found with id ${toyId}` });
    }
    });

app.post('/Post-data', (req, res) => {  
    const {name , price,category,manufacturer,inStock,description} = req.body;
    if (name === undefined)return res.status(400).json({ "msg": 'Name is required' });
    if (price === undefined)return res.status(400).json({ "msg": 'Price is required' });
    if (category === undefined)return res.status(400).json({ "msg": 'Category is required' });
    if (manufacturer === undefined)return res.status(400).json({ "msg": 'Manufacturer is required' });
    if (inStock === undefined)return res.status(400).json({ "msg": 'InStock is required' });
    if (description === undefined)return res.status(400).json({ "msg": 'Description is required' });

    const newToy = {
        id: toys.length + 1,
        name,  price,category,manufacturer,inStock,description
    };
    toys.push(newToy);
    res.status(201).json(newToy);
}
);
app.put('/Put-data/:id', (req, res) => {
        const {name , price,category,manufacturer,inStock,description} = req.body;
        const idToUpdate = parseInt(req.params.id);
        const toyIndex = toys.findIndex(t => t.id === idToUpdate);
        if (toyIndex === -1) {
            return res.status(404).json({ "msg": `toy with id ${idToUpdate} Not Found` });
        }else{
            const toyToUpdate = toys[toyIndex];
            if (name !== undefined) toyToUpdate.name = name;
            if (price !== undefined) toyToUpdate.price = price;
            if (category !== undefined) toyToUpdate.category = category;
            if (manufacturer !== undefined) toyToUpdate.manufacturer = manufacturer;
            if (inStock !== undefined) toyToUpdate.inStock = inStock;
            if (description !== undefined) toyToUpdate.description = description;
            toys[toyIndex] = toyToUpdate;
            res.json(toyToUpdate);
        }

});
