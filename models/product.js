const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const companyModel = require("./company");

const productSchema = new Schema({
  //id del producto hecho por mi p #
  nombre: { type: String, required: true },
  medida: { type: String, required: true },
  precio_unitario: { type: Number, required: true },
  fecha_agregado: { type: Date, default: Date.now },
  flete: { type: Number, required: false },
  fecha_entrega: { type: String, required: true },
  cantidad_disponible: { type: Number, required: true },
  companyId: { type: Schema.Types.ObjectId, required: true}
});

productSchema.post('save', function(error, response, next) {
  const productId = this._id;
  const companyId = this.companyId;

  companyModel.findOneAndUpdate({
    _id: companyId
  }, {
    $push: { products: productId } 
  }, (error, doc, res) => {
    if(error)
      console.error(error);
    
    next();
  });
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
