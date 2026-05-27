const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const categoryRoutes = require('./routes/categoryRoutes');
const artisanRoutes = require('./routes/artisanRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(helmet());

app.use(cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],       
}));

app.use(express.json());

app.get('/', (req, res) => {
        res.json({ message: `API Trouve ton artisan fonctionne.` });
});

app.use('/api/categories', categoryRoutes);
app.use('/api/artisans', artisanRoutes);
app.use('/api/contact', contactRoutes);

app.use((req, res) => {
        res.status(404).json({
                message: `Route introuvable.`,
        });
});

module.exports = app;