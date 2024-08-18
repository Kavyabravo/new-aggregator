const express = require('express');
const authRoutes = require('./src/routes/auth.route');
const userRoutes = require('./src/routes/user.route');
const newsRoutes = require('./src/routes/news.route');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', authRoutes);
app.use('/users', userRoutes);
app.use('/', newsRoutes);
app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;