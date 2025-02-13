// backend/src/server.js
const express = require('express');
const cors = require('cors');
const db = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/tasks', taskRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
db.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}).catch(err => console.error('Erro ao sincronizar banco de dados', err));
