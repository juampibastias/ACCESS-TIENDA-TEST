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
        <div className="contenedor-pdp">
            <Head>
                <title>Detalle de Producto</title>
            </Head>
            <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="home">Inicio</a>
          </li>
          <li className="breadcrumb-item" aria-current="page">
          <a href="/">Tienda</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
          {product.title}
          </li>
        </ol>
      </nav>
           <div className='pdp'>
           <div className="contenedor-img-desc ">
                <img src={ product.images[tab].url } alt={ product.images[tab].url }
                className=" img-thumbnail rounded"
                />

                <div className="thumbnail-pdp mx-0" style={{cursor: 'pointer'}} >

                    {product.images.map((img, index) => (
                        <img key={index} src={img.url} alt={img.url}
                        className={`img-thumbnail rounded ${isActive(index)}`}
                        
                        onClick={() => setTab(index)} />
                    ))}

                </div>
            </div>

            <div className="text-pdp">
               <div className="title-price">
               <h2 className="text-uppercase">{product.title}</h2>
                <h5 className="">${product.price}</h5>
               </div>

                <div className="row mx-0 d-flex justify-content-between stock-info">
                   <div className='data-stock'>
                   {
                        product.inStock > 0
                        ? <h6 className="">En Stock: <b>{product.inStock}</b></h6>
                        : <h6 className=""><b>Sin Stock</b></h6>
                    }

                    <h6 className="">Vendidos:<b> {product.sold}</b></h6>
                   </div>
                    <h6 className="">Colores disponibles: <b>{product.color}</b></h6>
                </div>
               <div className="info">
                <div><h4>Descripción</h4></div>
                 <div className="my-2">{product.description}</div>
                 <div><h4>Especificaciones técnicas</h4></div>
                 <div className="my-2">{product.content}</div>
               </div>

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