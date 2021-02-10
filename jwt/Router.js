
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');


const Router = ( app ) => {
    
    app.use('/auth', authRoutes);
    app.use('/products', productRoutes);

}

module.exports = Router;
