const {parse} = require("url");
const {select_medicine} = require("../main/api/db/back_db");

module.exports = function(app, db) {
    app.get('/data/medicine', (req, res) => {
        select_medicine().then(AllDocuments => {
            console.log(AllDocuments)
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
};