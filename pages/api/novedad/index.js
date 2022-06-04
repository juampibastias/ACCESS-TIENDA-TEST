import connectDB from "../../../utils/connectDB";
import Novedades from "../../../models/novedadesModel";
import auth from '../../../middleware/auth'
connectDB();

export default async (req, res) => {
  switch(req.method) {
    case "GET":
      await getNovedades(req, res);
      break;
      case "POST":
            await createProduct(req, res)
            break;
  }
} 

class APIfeatures {
  constructor(query, queryString){
      this.query = query;
      this.queryString = queryString;
  }
  filtering(){
      const queryObj = {...this.queryString}

      const excludeFields = ['page', 'sort', 'limit']
      excludeFields.forEach(el => delete(queryObj[el]))

      if(queryObj.category !== 'all')
          this.query.find({category: queryObj.category})
      if(queryObj.title !== 'all')
          this.query.find({title: {$regex: queryObj.title}})

      this.query.find()
      return this;
  }

  sorting(){
      if(this.queryString.sort){
          const sortBy = this.queryString.sort.split(',').join('')
          this.query = this.query.sort(sortBy)
      }else{
          this.query = this.query.sort('-createdAt')
      }

      return this;
  }

  paginating(){
      const page = this.queryString.page * 1 || 1
      const limit = this.queryString.limit * 1 || 6
      const skip = (page - 1) * limit;
      this.query = this.query.skip(skip).limit(limit)
      return this;
  }
}

const getNovedades = async (req, res) => {
  try {
    const features = new APIfeatures(Novedades.find(), req.query)
        .filtering().sorting().paginating()
    const novedades = await Novedades.find();
    res.json({
      status: "success",
      result: novedades.length,
      novedades,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
      const result = await auth(req, res)
      if(result.role !== 'admin') return res.status(400).json({err: 'Autenticación inválida.'})

      const {name, descrip, detail, category, images} = req.body

      if(!name || !descrip || !detail || category === 'all' || images.length === 0)
      return res.status(400).json({err: 'Por favor complete todos los campos.'})


      const newNovedad = new Novedades({
          name: name.toLowerCase(), descrip, detail, category, images
      })

      await newNovedad.save()

      res.json({msg: 'Éxito, creaste una novedad!.'})

  } catch (err) {
      return res.status(500).json({err: err.message})
  }
}
