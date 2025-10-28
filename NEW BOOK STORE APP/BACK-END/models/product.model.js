import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    },
},{ 
    timestamps : true // createdAt , updatedAt
});

const Product = mongoose.model('Product', productSchema);
//products mongoose does the job of converting it to pluarl and removng the capital letter
export default Product ;