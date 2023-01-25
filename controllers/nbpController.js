/*
    NBP Controller
 */

const getIndex = (req,res) => {
    res.render('indexNbp');
}

const getTable = (req,res) => {
    var url = 'https://api.nbp.pl/api/exchangerates/tables/a/?format=json';
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            res.render('indexNbpTable', {data});
        })
        .catch((error) => {
            res.send('BRAK WALUTY');
        });
}

const getKurs = (req,res) => {
    var data;
    res.render('indexKurs',{data})
}

const postKurs = (req,res) => {
    var url = 'http://api.nbp.pl/api/exchangerates/rates/a/'+req.body.a;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            res.render('indexKurs',{data});
        })
        .catch((error) => {
            res.render('error', {message: 'Błąd strony', error});
        });
}

module.exports= {
    getIndex,
    getTable,
    getKurs, postKurs

}