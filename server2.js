const http = require('http');
const port = 8000;
const server = http.createServer((req, res) => {
    const data = {
        Nama: "Memey dan Aldi",
        Kelas: "TI25A",
        MataKuliah: "Pemrograman JavaScript"
    };
    res.writeHead(200);
    if(req.url === '/'){
        res.write('<html><body><h2> Selamat Datang di Halaman Utama Web Memey Cantik <h2><body><html>');
    }
    else if(req.url === '/mahasiswa'){
        res.write('<html><body><h2> Selamat Datang di Halaman Data Mahasiswa <h2><body><html>');
        res.end(JSON.stringify(data));
    }
    else if(req.url === '/dosen'){
        res.write('<html><body><h2> Selamat Datang di Halaman Data Dosen <h2><body><html>');
        res.end();
    }
    else if(req.url === '/admin'){
        res.write('<html><body><h2> Selamat Datang di Halaman Utama Admin <h2><body><html>');
        res.end();
    }
    else {
        res.write('<html><body><h2> Page Not found! (400) <h2><body><html>');
        res.end();
    }

}).listen (port, () => {
    console.log(`Server is listening on port ${port}`);
})


