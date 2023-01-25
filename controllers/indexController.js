/*
    Index Controller
 */

const getMain = (req,res) => {
    res.render('index', { title: 'Express', year:'2025' });
}

const getHello = (req,res) => {
    res.send('hello');
}

module.exports = {
    getMain,
    getHello
}