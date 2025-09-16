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
        name: 'Action Figure', 
        price: 14.99,
        category: 'Figures',
        manufacturer: 'Hasbro',
        inStock: true,
        description: 'A poseable action figure with accessories.'
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
    
  });