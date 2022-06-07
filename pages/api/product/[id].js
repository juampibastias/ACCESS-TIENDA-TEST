import connectDB from '../../../utils/connectDB'
import Products from '../../../models/productModel'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getProduct(req, res)
            break;
        case "PUT":
            await updateProduct(req, res)
            break;
        case "DELETE":
            await deleteProduct(req, res)
            break;
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.query;

        const product = await Products.findById(id)
        if(!product) return res.status(400).json({err: 'Este producto no existe.'})
        
        res.json({ product })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const updateProduct = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(result.role !== 'admin') 
        return res.status(400).json({err: 'La autenticación no es válida.'})

        const {id} = req.query
        const {title, price, inStock, description, content, color, category, images} = req.body

        if(!title || !price || !inStock || !description || !content || !color || category === 'all' || images.length === 0)
        return res.status(400).json({err: 'Por favor complete todos los campos.'})

        await Products.findOneAndUpdate({_id: id}, {
            title: title.toLowerCase(), price, inStock, description, content, color, category, images
        })

        res.json({msg: '¡Éxito! Se actualizó el producto'})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const deleteProduct = async(req, res) => {
    try {
        const result = await auth(req, res)
        
        if(result.role !== 'admin') 
        return res.status(400).json({err: 'La autenticación no es válida.'})

        const {id} = req.query

        await Products.findByIdAndDelete(id)
        res.json({msg: 'Producto eliminado.'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}