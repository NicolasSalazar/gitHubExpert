const productScheme = require('../Scheme/productos.scheme')
const productoCtrl = {};

productoCtrl.getProductsAll = async (req, res) =>{
    const product = await productScheme.find();
    res.json(product)
}

productoCtrl.postProduct = async(req,res)=>{
  const newProduct = new productScheme(req.body);
  await newProduct.save();
  res.json('received');
}

productoCtrl.getProductById = async(req, res)=>{
    const productById = await productScheme.findById(req.params.id);
    res.json(productById);
}

productoCtrl.putProductEdit = async (req, res) =>{
    const {Nombre, Marca, Precio} = req.body
    await productScheme.findByIdAndUpdate(req.params.id, {Nombre, Marca, Precio})
    res.json('Success')
}

productoCtrl.deleteProduct = async(req, res) =>{
    await productScheme.findByIdAndRemove(req.params.id)
    res.json('Delete success')
}

module.exports = productoCtrl;