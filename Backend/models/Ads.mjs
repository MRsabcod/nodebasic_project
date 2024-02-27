import mongoose from 'mongoose';
const { Schema } = mongoose;

const addSchema = new Schema({
  title: {
    type: String,
    required:  true,
  }, // String is shorthand for {type: String}
  desc: {
    type: String,
    required:  true,
  },
  
  price: {
    type: Number,
    required:  true,
  },
  _id:{
    type: Number,
    required:true
  }
})
const Ads = mongoose.model('ads', addSchema);
export  default Ads;