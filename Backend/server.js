const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173'
}));

const products = [
    { id: 1, name: 'Laptop', price: 1200, img : 'assets/img.jpg'},
    { id: 2, name: 'Mouse', price: 25, img : 'assets/img2.png' },
    { id: 3, name: 'Keyboard', price: 75 , img : 'assets/img3.png'}
];

app.get('/api/products', (req, res)=>{
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.is;
    const product = products.find(p => p.id === productId);

    if(product) {
        res.join(product);
    }else { 
        res.status(404).json({message : 'Products not found'})
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})