const express = require('express');
const router = express.Router();
const AuthorModel = require('../model/Person');
const BooksModel = require('../model/Story');
const EditionModel = require('../model/Edition');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/book', async function(req, res, next) {
    const{book, author, edition} = req.body;
    console.log(req.body);
    try{
        const bookModel= await new BooksModel({
            title: book,
        }).save();
        const authorModel = await new AuthorModel({
            name: author
        }).save();
        const editionModel= await new EditionModel({
            title: edition
        }).save();

        let a = BooksModel.findOneAndUpdate({title: book},{$push:{author: authorModel._id, edition: editionModel._id}})
        let b = AuthorModel.findOneAndUpdate({name: author},{$push:{stories: bookModel._id}})
        let e = EditionModel.findOneAndUpdate({title: edition},{$push:{stories: bookModel._id, author: authorModel._id}})

        Promise.all([a,b,e]).then(data=>{
            res.json(JSON.stringify(data));
        });
        // await res.send('ok')

    } catch (e) {
        console.log(e)
    }

});






// router.post('/populate', async function(req, res, next) {
//     try {
//         const{ book,author, edition} = req.body;
//         let a = await EditionModel.findOne({title: edition})
//             .populate({path:'stories', populate:[{path:'author'}]})
//             .then(data=>res.send(data))
//             .catch(err=>console.log(err));
//         // let bo = await BooksModel.findOne({title: book})
//         //     .populate({path:'author'})
//         //     .then(data => data)
//         //     .catch(err=>console.log(err));
//         // console.log(a)
//         // await res.send('ok');
//
//     } catch(err) {
//         console.log(err)
//     }
// });

module.exports = router;


// ,{new:true}
//, populate:[{path:'author'}]
//, populate:{path:'author'}