import Link from 'next/link'
import { useContext } from 'react'
import { DataContext } from '../../store/GlobalState'

const ProductHome = ({product, handleCheck}) => {
    const { state, dispatch } = useContext(DataContext)
    const { auth } = state

    const userLink = () => {
        return(
            <>
                
                <button className="btn add-to-cart"
                style={{marginLeft: '5px', flex: 1}}
                disabled={product.inStock === 0 ? true : false} 
                onClick={()=> location.href="http://localhost:3000/?search=all"} >
                     <p className="small"></p>${product.price}
                </button>
            </>
        )
    }

    const adminLink = () => {
        return(
            <>
                <Link href={`create/${product._id}`}>
                    <a className="btn btn-info"
                    style={{marginRight: '5px', flex: 1}}>Editar</a>
                </Link>
                <button className="btn btn-danger"
                style={{marginLeft: '5px', flex: 1}}
                data-toggle="modal" data-target="#exampleModal"
                onClick={() => dispatch({
                    type: 'ADD_MODAL',
                    payload: [{ 
                        data: '', id: product._id, 
                        title: product.title, type: 'DELETE_PRODUCT' 
                    }]
                })} >
                    Eliminar
                </button>
            </>
        )
    }

    return(
        <div className="card" >
            {
                auth.user && auth.user.role === 'admin' &&
                <input type="checkbox" checked={product.checked}
                className="position-absolute"
                style={{height: '40px', width: '40px'}}
                onChange={() => handleCheck(product._id)} />
            }
            <Link  href={`product/${product._id}`}>
            <a><img className="card-img-top" src={product.images[0].url} alt={product.images[0].url} /></a></Link>
            <div className="card-body">
                <Link href={`product/${product._id}`}>
                    <a><h5 className="card-title text-capitalize" title={product.title}>
                    {product.title}
                </h5></a>
                </Link>

                <p className="card-text" title={product.description}>
                    {product.description}
                </p>


                 <div className="row justify-content-between mx-0">
                    <h6 hidden className="text-danger">${product.price}</h6>
                </div> 

                
                    
                <div className="mt-auto">
                    {!auth.user || auth.user.role !== "admin" ? userLink() : adminLink()}
                </div>
            </div>
        </div>
    )
}


export default ProductHome

/* EN LOS PRODUCTOS CARDS QUE APARECEN EN LA HOME SOLO NECESITAMOS LAS PROPS DE IMAGE, TITLE, PRECIO, DESCRIPTION, SOLO DEBEN SER 4 
CARDS, Y SERAN LAS PRIMERAS 4 QUE APAREZCAN EN LA SECCION TIENDA  */