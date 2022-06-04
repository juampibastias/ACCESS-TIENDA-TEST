import connectDB from '../../../utils/connectDB'
import Novedades from '../../../models/novedadesModel'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getNovedades(req, res)
            break;
        case "PUT":
            await updateNovedades(req, res)
            break;
        case "DELETE":
            await deleteNovedades(req, res)
            break;
    }
}

const getNovedades = async (req, res) => {
    try {
        const { id } = req.query;

        const novedad = await Novedades.findById(id)
        if(!novedad) return res.status(400).json({err: 'La novedad no existe.'})
        
        res.json({ novedad })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const updateNovedades = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(result.role !== 'admin') 
        return res.status(400).json({err: 'La autenticación no es válida.'})

        const {id} = req.query
        const {descrip, images, name, detail} = req.body

        if(!descrip || !name || !detail || images.length === 0)
        return res.status(400).json({err: 'Por favor complete todos los campos.'})

        await Novedades.findOneAndUpdate({_id: id}, {
            name: name.toLowerCase(), descrip, detail, images
        })

        res.json({msg: '¡Éxito! Se actualizó la novedad!'})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const deleteNovedades = async(req, res) => {
    try {
        const result = await auth(req, res)
        
        if(result.role !== 'admin') 
        return res.status(400).json({err: 'La autenticación no es válida.'})

        const {id} = req.query

        await Novedades.findByIdAndDelete(id)
        res.json({msg: 'Novedad eliminada.'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}