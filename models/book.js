import mongoose from 'mongoose';
const {Schema, model} = mongoose;
import Category from './category.js';

const bookSchema = new Schema({
   title: {
       type: String,
       required: true
   },
   description: String,
   amazonProductUrl: String,
   author: {
       type: Schema.Types.ObjectId,
       ref: 'Author'
   },
   category: [{
       type: Schema.Types.ObjectId,
       ref: Category
   }],
   image: {
       type: Schema.Types.ObjectId,
       ref: 'File'
   },
   isDeleted: {
       type: Boolean,
       default: false
   }
}, {
   collection: 'books',
   timestamps: true
});

bookSchema.pre(['find', 'findOne'], function () {
    this.populate(['author', 'category', 'image']);
 });
 
 const Book = model('Book', bookSchema);
 export default Book;