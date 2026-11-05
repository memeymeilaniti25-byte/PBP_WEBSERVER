const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello express! Server berjalan dengan cepat!');

});

app.get('/data', (req, res)=>{
    req.json({nama: 'Memey', kampus: 'nusput', matkul: 'PBP'});

});

app.listen(8000, () => console.log('Server Express Berjalan di htpp://localhost:8000'));