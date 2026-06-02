const express = require('express');
const path = require('path');

const app = express();

// serve static files (css, js, images if any)
app.use(express.static(__dirname));

// homepage → open HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'studreg.html'));
});


// form submit API
app.get('/process_get', (req, res) => {
    const response = {
        stud_name: req.query.sname,
        stud_contact: req.query.scon,
        stud_gender: req.query.g,
        stud_address: req.query.sadd,
        stud_hobbies: req.query.shob,
        stud_skillset: req.query.sss,
        stud_highest_qualification: req.query.shq,
        stud_district: req.query.sdis
    };

    console.log(response);
    res.json(response);
});

// listen on all interfaces (IMPORTANT for Docker)
app.listen(8081, '0.0.0.0', () => {
    console.log("Server running at http://localhost:8081");
});
