const http = require ('http');
const server = http.createServer((req, res) => {
    const data = {
        Nama: "Memey dan Aldi",
        Kelas: "TI25A",
        MataKuliah: "Pemrograman JavaScript"
    };

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));

});

server.listen(8000, ()=>{
    console.log(`Server berjalan di http://localhost:8000`);

});