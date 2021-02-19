
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');


const Router = ( app ) => {
    
    app.use('/auth', authRoutes);
    app.use('/products', productRoutes);
    app.use('/users', userRoutes);

}

module.exports = Router;
