import bookModel from '../models/book.js';

class Controller {
   getAll(req, res, next) {
    bookModel.find({}, (err, response) => {
           if (err) return next(err);
           res.status(200).send({ success: true, response });
       })
   }

   get(req, res, next) {
       let { id } = req.params;
       bookModel.findOne({ _id: id }, (err, response) => {
           if (err) return next(err);
           res.status(200).send({ success: true, response });
       });
   }

   post(req, res, next) {
    let body = req.body;
    let doc = new bookModel(body);
    doc.save((err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });
    });
}
put(req, res, next) {
    let { id } = req.params;
    let body = req.body;
    bookModel.updateOne({ _id: id }, {
        $set: body
    }, (err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });
    });
}
delete(req, res, next) {
    let { id } = req.params;
    bookModel.findByIdAndDelete({ _id: id }, (err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });
    })
}

softDelete(req, res, next) {
    let { id } = req.params;
    bookModel.updateOne({ _id: id }, {
        $set: { isDeleted: true }
    }, (err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });
    });
}
}

const controller = new Controller();

export default  controller;