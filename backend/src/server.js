require('dotenv').config();

const app = require('./app');
const sequelize = require('./config/database');
require('./models');

const PORT = process.env.PORT || 3000;

async function startServer() {
        try {
                await sequelize.authenticate();
                console.log('Connexion à MySQL réussie.');

                app.listen(PORT, () => {
                        console.log(`Server running on port ${PORT}`);
                });

        } catch (error) {
                console.error('Impossible de se connecter à MySQL :', error.message);
        }
}

startServer();