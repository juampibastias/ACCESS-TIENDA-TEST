import Head from 'next/head'
import { useState, useContext } from 'react'
import { getData } from '../../utils/fetchData'
import { DataContext } from '../../store/GlobalState'
import { addToCart } from '../../store/Actions'

const DetailProduct = (props) => {
    const [product] = useState(props.product)
    const [tab, setTab] = useState(0)

    const { state, dispatch } = useContext(DataContext)
    const { cart } = state

    const isActive = (index) => {
        if(tab === index) return " active";
        return ""
    }

    return(
        <div className="row detail_page">
            <Head>
                <title>Detalle de Producto</title>
            </Head>

            <div className="col-md-6">
                <img src={ product.images[tab].url } alt={ product.images[tab].url }
                className="d-block img-thumbnail rounded mt-4 w-100"
                style={{height: '350px'}} />

                <div className="row mx-0" style={{cursor: 'pointer'}} >

                    {product.images.map((img, index) => (
                        <img key={index} src={img.url} alt={img.url}
                        className={`img-thumbnail rounded ${isActive(index)}`}
                        style={{height: '80px', width: '20%'}}
                        onClick={() => setTab(index)} />
                    ))}

                </div>
            </div>

            <div className="col-md-6 mt-3">
                <h2 className="text-uppercase">{product.title}</h2>
                <h5 className="text-danger">${product.price}</h5>

                <div className="row mx-0 d-flex justify-content-between">
                    {
                        product.inStock > 0
                        ? <h6 className="text-danger">En Stock: {product.inStock}</h6>
                        : <h6 className="text-danger">Sin Stock</h6>
                    }

                    <h6 className="text-danger">Vendidos: {product.sold}</h6>
                </div>
                <div><h4>Descripción</h4></div>
                <div className="my-2">{product.description}</div>
                <div><h4>Especificaciones técnicas</h4></div>
                <div className="my-2">{product.content}</div>

              <div className='botonera'>
              <button type="button" className="btn add-to-cart"
                onClick={() => dispatch(addToCart(product, cart))} >
                    Añadir al carrito
                </button>
                
                <button type="button" className="btn continue">
                    <a href='/'>Seguir comprando</a>
                </button>
              </div>
                <div>
            </div>

            </div>
        </div>
    )
}

export async function getServerSideProps({params: {id}}) {

    const res = await getData(`product/${id}`)
    // server side rendering
    return {
      props: { product: res.product }, // will be passed to the page component as props
    }
}


export default DetailProduct