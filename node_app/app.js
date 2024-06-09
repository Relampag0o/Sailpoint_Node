const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let users = [
    { id: 1, username: 'user1', email: 'user1@example.com',role_id:1},
    { id: 2, username: 'user2', email: 'user2@example.com',role_id:1},
    { id: 3, username: 'user3', email: 'user3@example.com',role_id:1},
    { id: 4, username: 'user4', email: 'user4@example.com',role_id:1},
    { id: 5, username: 'user5', email: 'user5@example.com',role_id:1}
]; 

let groups = [
    { name:'Developer',role_id:1 },
    { name: 'Human Resources',role_id:2},
    { name:'Maintenance',role_id:3}
]

app.use(bodyParser.json());

app.use((req, res, next) => {
    const auth = {login: 'jose', password: '12341234aa'}; 

    // Analizar encabezado de autorización
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    // Verificar credenciales
    if (login && password && login === auth.login && password === auth.password) {
        return next();
    }

    // Acceso denegado
    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).send('Authentication required.');
});

// Ruta de prueba
app.get('/app_js', (req, res) => {
    res.send('Conexión con SailPoint configurada correctamente.');
});

// Ruta para manejar operaciones de SailPoint (ejemplo)
app.post('/sailpoint', (req, res) => {
    const operation = req.body.operation;
    console.log(`Operación recibida: ${operation}`);
    res.send(`Operación ${operation} recibida y procesada.`);
});

// Ruta para obtener la lista de usuarios de prueba
app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/groups', (req, res) => {
    res.json(groups);
});
app.get('/help', (req, res) => {
    res.send('Conexión con SailPoint configurada correctamente.');
});


app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
