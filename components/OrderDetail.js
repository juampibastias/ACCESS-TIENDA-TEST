import Link from 'next/link'
import {patchData} from '../utils/fetchData'
import {updateItem} from '../store/Actions'

const OrderDetail = ({orderDetail, state, dispatch}) => {
    const {auth, orders} = state

    const handleDelivered = (order) => {
        
        dispatch({type: 'NOTIFY', payload: {loading: true}})

        patchData(`order/delivered/${order._id}`, null, auth.token)
        .then(res => {
            if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

            const { paid, dateOfPayment, method, delivered } = res.result

            dispatch(updateItem(orders, order._id, {
                ...order, paid, dateOfPayment, method, delivered
            }, 'ADD_ORDERS'))

            return dispatch({type: 'NOTIFY', payload: {success: res.msg}})
        })
    }

    if(!auth.user) return null;
    return(
        <div className='order-container'>
        {
            orderDetail.map(order => (
            <div key={order._id} style={{margin: '20px auto'}} className="container-general">

                <div className="text-uppercase my-3 order-upper" >
                    <h2 className="text-break order-title">Mi orden de pedido: <b>#{order._id}</b></h2>

                   <div className='order-item-container'>
                   <div className=" order-details">
                        <h3 className='title'>Datos de envío</h3>
                        <p className='bold'>Nombre: <b>{order.user.name}</b></p>
                        <p>Email: <b>{order.user.email}</b></p>
                        <p>Provincia: <b>{order.provincia}</b></p>
                        <p>Ciudad: <b>{order.ciudad}</b></p>
                        <p>Codigo postal: <b>{order.cp}</b></p>
                        <p>Dirección: <b>{order.address}</b></p>
                        <p>Telefono: <b>{order.mobile}</b></p>
                        <p>Comentarios: <b>{order.coment}</b></p>
                        <p>Color del producto: <b>{order.color}</b></p>


                        <div className={`alert ${order.delivered ? 'alert-success' : 'alert-danger'}
                        d-flex justify-content-between align-items-center fw-bold`} role="alert">
                            {
                                order.delivered ? `Entregado ${order.updatedAt}` : 'No entregado'
                            }
                            {
                                auth.user.role === 'admin' && !order.delivered &&
                                <button className="btn btn-dark text-uppercase"
                                onClick={() => handleDelivered(order)}>
                                    Marcar como entregado
                                </button>
                            }
                            
                        </div>

                        

                    </div>
                    <div className='product-list-order'>
                            <h3>Lista de artículos</h3>
                            {
                                order.cart.map(item => (
                                    <div className="articles-list" key={item._id} >
                                        <img src={item.images[0].url} alt={item.images[0].url}
                                        />
<div className='title-price-qty'> <h5 className="flex-fill  px-3 m-0">
                                            <Link href={`/product/${item._id}`}>
                                                <a>{item.title}</a>
                                            </Link>
                                        </h5>

                                        <span className=" m-0">
                                            {item.quantity} x ${item.price} = ${item.price * item.quantity}
                                        </span></div>
                                       

                                       
                                    </div>
                                ))
                            }
                             {
                    !order.paid && auth.user.role !== 'admin' &&
                    <div className="p-4">
                        <h2 className="mb-4 text-uppercase">Total: ${order.total}</h2>
                    </div>
                }
                      
                      
                        </div>
                   </div>

                </div>
                            
                
               
            </div>
            ))
        }
        </div>
    )
}

export default OrderDetail