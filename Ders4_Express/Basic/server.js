const express = require('express');
const app = express();
const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/', (req, res) => {
//     res.sendFile('./views/index.html', {root: __dirname});
// });

// app.get('/users/:id', (req, res) => {
//     res.status(200).send(`<h1>User ID: ${req.params.id}</h1>`);
// });

//----
app.use(express.json())

const lessons = [
    {id: 1,name: 'Fizik'},
    {id: 2,name: 'Kimya'},
    {id: 3,name: 'Mat'},
];

app.get('/api/lessons', (req, res) => {
    res.status(200).send(lessons);
});

app.post('/api/lessons',(req, res) => {
    const lesson={id:lessons.length+1,name:req.body.name};
    lessons.push(lesson);
    res.status(201).send(lesson);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 