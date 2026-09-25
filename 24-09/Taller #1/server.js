const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('<h1>🚀 ¡Reto Docker Completado Exitosamente por Alejandro Díaz Osorio!</h1>');
});
app.listen(PORT, () => console.log('Corriendo en puerto ' + PORT));