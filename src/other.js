// const express = require('express')
// const app = express();
// const cors = require('cors');
// const tutorial = require('./courses.json')
// const port = 5000;

// app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Assignment-10 already finished mousumi akter')
// });

// app.get('/tutorial', (req, res) => {
//     res.send(tutorial)
// })

// app.get('/tutorial/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const tutor = tutorial.find(t => t.id === id) || {};
//     res.send(tutor);
// })


// app.listen(port, () => {
//     console.log(`Dragon News Server running on port${port}`)
// })