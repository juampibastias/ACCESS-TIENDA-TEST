import connectDB from '../../../utils/connectDB'
import Users from '../../../models/userModel'
import valid from '../../../utils/valid'
import bcrypt from 'bcrypt'


connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await register(req, res)
            break;
    }
}

const register = async (req, res) => {
    try{
        const { name, phone, email, password, cf_password } = req.body

        const errMsg = valid(name, phone, email, password, cf_password)
        if(errMsg) return res.status(400).json({err: errMsg})

        const user = await Users.findOne({ email })
        if(user) return res.status(400).json({err: 'Este email ya existe.'})

        const passwordHash = await bcrypt.hash(password, 12)

        const newUser = new Users({ 
            name, phone, email, password: passwordHash, cf_password 
        })

        await newUser.save()
        res.json({msg: "Registro exitoso!"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}