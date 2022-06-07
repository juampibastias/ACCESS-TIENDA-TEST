import Head from 'next/head'
import {useState, useContext, useEffect} from 'react'
import {DataContext} from '../../store/GlobalState'
import {imageUpload} from '../../utils/imageUpload'
import {postData, getData, putData} from '../../utils/fetchData'
import {useRouter} from 'next/router'

const NovedadesManager = () => {    
    const initialState = {
        name: '',
        decrip: '',
        detail: '',
        category: ''
    }
    const [novedad, setNovedad] = useState(initialState)
    const {descrip, name, detail, category} = novedad

    const [images, setImages] = useState([])

    const {state, dispatch} = useContext(DataContext)
    const {categories, auth} = state
    
    const router = useRouter()
    const {id} = router.query
    const [onEdit, setOnEdit] = useState(false)

    useEffect(() => {
        if(id){
            setOnEdit(true)
            getData(`novedad/${id}`).then(res => {
                setNovedad(res.novedad)
                setImages(res.novedad.images)
            })
        }else{
            setOnEdit(false)
            setNovedad(initialState)
            setImages([])
        }
    },[id])

    const handleChangeInput = e => {
        const {name, value} = e.target
        setNovedad({...novedad, [name]:value})
        dispatch({type: 'NOTIFY', payload: {}})
    }

    const handleUploadInput = e => {
        dispatch({type: 'NOTIFY', payload: {}})
        let newImages = []
        let num = 0
        let err = ''
        const files = [...e.target.files]

        if(files.length === 0) 
        return dispatch({type: 'NOTIFY', payload: {error: 'El archivo no existe.'}})

        files.forEach(file => {
            if(file.size > 1024 * 1024)
            return err = 'La imagen es mas grande que 1mb'

            if(file.type !== 'image/jpeg' && file.type !== 'image/png')
            return err = 'Formato de imagen incorrecto.'

            num += 1;
            if(num <= 1) newImages.push(file)
            return newImages;
        })

        if(err) dispatch({type: 'NOTIFY', payload: {error: err}})

        const imgCount = images.length
        if(imgCount + newImages.length > 1)
        return dispatch({type: 'NOTIFY', payload: {error: 'Seleccione 1 imagen.'}})
        setImages([...images, ...newImages])
    }

    const deleteImage = index => {
        const newArr = [...images]
        newArr.splice(index, 1)
        setImages(newArr)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(auth.user.role !== 'admin') 
        return dispatch({type: 'NOTIFY', payload: {error: 'Autenticación inválida.'}})

        if(!name || !descrip || !detail === 'all' || images.length === 0)
        return dispatch({type: 'NOTIFY', payload: {error: 'Por favor complete todos los campos.'}})

    
        dispatch({type: 'NOTIFY', payload: {loading: true}})
        let media = []
        const imgNewURL = images.filter(img => !img.url)
        const imgOldURL = images.filter(img => img.url)

        if(imgNewURL.length > 0) media = await imageUpload(imgNewURL)

        let res;
        if(onEdit){
            res = await putData(`novedad/${id}`, {...novedad, images: [...imgOldURL, ...media]}, auth.token)
            if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
        }else{
            res = await postData('novedad', {...novedad, images: [...imgOldURL, ...media]}, auth.token)
            if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
        }

        return dispatch({type: 'NOTIFY', payload: {success: res.msg}})
        
    }

    return(
        <div className="products_manager">
            <Head>
                <title>Administración de Novedades</title>
            </Head>
            <h3 className='text-center my-3 '>NOVEDADES MANAGER</h3>
            <form  onSubmit={handleSubmit}>
   
        <div className='items-form'>
        <label for="name">Nombre</label>
                    <input type="text" name="name" value={name}
                    placeholder="Título" className="d-block  w-100 p-2"
                    onChange={handleChangeInput} />
<label for="descrip">Descripción</label>
                    <textarea name="descrip" id="descrip" cols="30" rows="4"
                    placeholder="Descripción" onChange={handleChangeInput}
                    className="d-block  w-100 p-2" value={descrip} />
<label for="detail">Detalles</label>
                    <textarea name="detail" id="detail" cols="30" rows="4"
                    placeholder="Detalle de la novedad" onChange={handleChangeInput}
                    className="d-block  w-100 p-2" value={detail} />
<label for="category">Categorias</label>
                  <div className="input-group-prepend px-0 my-2">
                        <select name="category" id="category" value={category}
                        onChange={handleChangeInput} className="custom-select text-capitalize">
                            <option value="all">Todos los productos</option>
                            {
                                categories.map(item => (
                                    <option key={item._id} value={item._id}>
                                        {item.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    
                    <button type="submit" className="btn btn-info my-2 px-4">
                        {onEdit ? 'Actualizar': 'Crear'}
                    </button>

        </div>


                

                <div className="form-images">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Elegí la foto</span>
                        </div>
                        <div className="custom-file border rounded">
                            <input type="file" className="custom-file-input"
                            onChange={handleUploadInput} multiple accept="image/*" />
                        </div>

                    </div> 

                    <div className="row img-up mx-0">
                        {
                            images.map((img, index) => (
                                <div key={index} className="file_img my-1">
                                    
                                    <img src={img.url ? img.url : URL.createObjectURL(img)} alt="imagen" className="img-thumbnail rounded" />         

                                     <span onClick={() => deleteImage(index)}>X</span>
                                </div>
                            ))
                        }
                    </div>
                        

                </div>

               
            </form>

            
        </div>
    )
}

export default NovedadesManager
