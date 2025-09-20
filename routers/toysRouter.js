const router = require('express').Router();
const toys = require('../data/toys');
// Get all toys
router.get('/', (req, res) => {
    res.json(toys);
});

// Get a toy by ID
router.get('/:id', (req, res) => {
    const toyId = parseInt(req.params.id);
    const toy = toys.find(t => t.id === toyId);
    if (toy) {
        res.json(toy);
    } else {
        res.status(404).json({ message: `Toy not found with id ${toyId}` });
    }
});


router.get('/Get-data/:id', (req, res) => {
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

router.post('/Post-data', (req, res) => {  
    const {name , price,category,manufacturer,inStock,description} = req.body;
    if (name === undefined)return res.status(400).console.log("name").json({ "msg": 'Name is required' });
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
router.put('/Put-data/:id', (req, res) => {
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
router.delete('/Delete-data/:id', (req, res) => {
    const id = req.params.id 
    const NewId= parseInt(id);
    const toyIndex = toys.findIndex(t => t.id === NewId);
    if (toyIndex === -1) {
        return res.status(404).json({ "msg": `toy with id ${NewId} Not Found` });
    }else{
        toys.splice(toyIndex, 1);
res.json({
  msg: `toy with id ${NewId} Deleted Successfully`,
  toys: toys
});    }

});

module.exports = router;