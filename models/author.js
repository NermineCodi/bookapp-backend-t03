import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const authorSchema = new Schema({
   firstName: {
       type: String,
       required: true
   },
   lastName: {
       type: String,
       required: true
   }

}, {
   collection: 'authors'
});
authorSchema.virtual('fullName').get(function() { return this.firstName + ' ' + this.lastName;});

const Author = model('Author', authorSchema);
export default Author;
