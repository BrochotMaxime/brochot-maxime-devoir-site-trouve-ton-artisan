const express = require('express');
const cors = require('cors');

const categoryRoutes = require('./routes/categoryRoutes');
const artisanRoutes = require('./routes/artisanRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
        res.json({ message: 'API fonctionne' });
});

app.use('/api/categories', categoryRoutes);
app.use('/api/artisans', artisanRoutes);
app.use('/api/contact', contactRoutes);

module.exports = app;