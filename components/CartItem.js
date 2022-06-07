import Link from 'next/link'
import { decrease, increase } from '../store/Actions'

const CartItem = ({item, dispatch, cart}) => {
    return (
        <tr>
            <td className='table-product' >
                <img src={item.images[0].url} alt={item.images[0].url}
                className="img-thumbnail "
                 />
               <div className='text-details'>
               <h5 >
                    <Link href={`/product/${item._id}`}>
                        <a>{item.title}</a>
                    </Link>
                </h5>
               
               </div>
            </td>

            <td  className='table-price'>
                
            <h3> ${item.price}</h3>
               
            </td>

            <td className="contador" >
                <button className="btn btn-outline-secondary"
                onClick={ () => dispatch(decrease(cart, item._id)) } 
                disabled={item.quantity === 1 ? true : false} > - </button>

                <span className="px-3">{item.quantity}</span>

                <button className="btn btn-outline-secondary"
                onClick={ () => dispatch(increase(cart, item._id)) }
                disabled={item.quantity === item.inStock ? true : false} > + </button>
            </td>

            <td className="table-total" >
                
                <h6 >${item.quantity * item.price}</h6>
                {
                    item.inStock > 0
                    ? <p className="mb-1 text-primary"></p>
                    : <p className="mb-1 text-danger">Sin Stock</p>
                }
               
            </td>
            <td className="table-edit" >
            <i className="far fa-trash-alt text-danger" aria-hidden="true" 
                style={{fontSize: '18px'}} data-toggle="modal" data-target="#exampleModal"
                onClick={() => dispatch({
                    type: 'ADD_MODAL',
                    payload: [{ data: cart, id: item._id, title: item.title, type: 'ADD_CART' }]
                })} ></i>
               
               
            </td>
        </tr>
    )
}

export default CartItem