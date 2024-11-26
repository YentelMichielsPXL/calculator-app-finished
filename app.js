const express = require('express');
const routes = require('./routes');
const path = require('path')

const app = express();
app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});
app.use(express.static(path.join(__dirname, 'public')))
app.use('/calc', routes);

module.exports = app    
