const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const usersRoute = require('./routes/users');
const groupsRoute = require('./routes/groups');

app.use(bodyParser.json());

app.use((req, res, next) => {
    const auth = { login: 'jose', password: '12341234aa' }; 

    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        return next();
    }

    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).send('Authentication required.');
});

app.use('/users', usersRoute);
app.use('/groups', groupsRoute);

app.get('/app_js', (req, res) => {
    res.send('Connection with SailPoint configured successfully.');
});

app.post('/sailpoint', (req, res) => {
    const operation = req.body.operation;
    console.log(`Received operation: ${operation}`);
    res.send(`Operation ${operation} received and processed.`);
});

app.get('/help', (req, res) => {
    res.send('Connection with SailPoint configured successfully.');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
