import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import CartItem from "../components/CartItem";
import Link from "next/link";
import { getData, postData } from "../utils/fetchData";
import { useRouter } from "next/router";
import Image from "next/image";
import pibeDeFondo from "../public/images/pibeDeFondo.png";
import { Accordion } from "react-bootstrap";
import axios from "axios";

let itemMp;
let itemMpArray = [];

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth, orders } = state;

  const [total, setTotal] = useState(0);

  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [address, setAddress] = useState("");
  const [cp, setCp] = useState("");
  const [mobile, setMobile] = useState("");
  const [coment, setComent] = useState("");

  const [callback, setCallback] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(res);
    };

    getTotal();
  }, [cart]);

  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem("__next__cart01__devat"));
    if (cartLocal && cartLocal.length > 0) {
      let newArr = [];
      const updateCart = async () => {
        for (const item of cartLocal) {
          const res = await getData(`product/${item._id}`);
          const { _id, title, images, price, inStock, sold } = res.product;
          if (inStock > 0) {
            newArr.push({
              _id,
              title,
              images,
              price,
              inStock,
              sold,
              quantity: item.quantity > inStock ? 1 : item.quantity,
            });
          }
        }

        dispatch({ type: "ADD_CART", payload: newArr });
      };

      updateCart();
    }
  }, [callback]);

  const handlePayment = async () => {
    if (!provincia || !ciudad || !address || !mobile || !coment || !cp)
      return dispatch({
        type: "NOTIFY",
        payload: { error: "Por favor, complete los datos de envío." },
      });

    let newCart = [];
    while(itemMpArray.length > 0) {
    itemMpArray.pop();
    }  
    for (const item of cart) {
      const res = await getData(`product/${item._id}`);
      if (res.product.inStock - item.quantity >= 0) {
        newCart.push(item);
      }

      
    itemMp = {
      title: item.title,
      unit_price: item.price,
      quantity: item.quantity,
    };

    itemMpArray.push(itemMp);

    
    }
      
    axios.post("http://localhost:3001/payment", {
      data: itemMpArray,
      headers: {
        "Content-Type": "application/json",
      },
    })
  
    .then((response) =>{
      window.open(response.data.data, '_blank')
      })
    

    if (newCart.length < cart.length) {
      setCallback(!callback);
      return dispatch({
        type: "NOTIFY",
        payload: {
          error: "El producto está agotado o la cantidad es insuficiente.",
        },
      });
    }

    dispatch({ type: "NOTIFY", payload: { loading: true } });

    postData(
      "order",
      { provincia, ciudad, address, cp, mobile, coment, cart, total },
      auth.token
    ).then((res) => {
      if (res.err)
        return dispatch({ type: "NOTIFY", payload: { error: res.err } });

      dispatch({ type: "ADD_CART", payload: [] });

      const newOrder = {
        ...res.newOrder,
        user: auth.user,
      };
      dispatch({ type: "ADD_ORDERS", payload: [...orders, newOrder] });
      dispatch({ type: "NOTIFY", payload: { success: res.msg } });
      return router.push(`/order/${res.newOrder._id}`);
    });
  };

  //flechita toggle envio

  if (cart.length === 0)
    return (
      <Image
        className="img-responsive w-100"
        src={pibeDeFondo}
        alt="not empty"
      />
    );

  return (
    <div className="contenedor-carrito">
      <Head>
        <title>MI CARRITO</title>
        <link rel="shortcut icon" href="/images/favicon.ico"></link>
      </Head>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="home">Inicio</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Carrito
          </li>
        </ol>
      </nav>
      <div className="contenedor-carro-envio">
        <Head>
          <title>Carrito</title>
        </Head>

        <div className="contenedor-articulos">
          <div className=" text-secondary table-responsive my-3">
            <h1 className="text-uppercase title">Carrito de compras</h1>

            <table className="table my-3">
              <thead>
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <CartItem
                    key={item._id}
                    item={item}
                    dispatch={dispatch}
                    cart={cart}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className=" my-3  text-uppercase  contenedor-envio-subtotal">
          <h2>RESUMEN</h2>
          <div className="contenedor-envio">
            
                  <form>
                    <label htmlFor="provincia">Provincia</label>
                   <select name="provincia"
                      id="provincia"
                      className="form-control mb-2"
                      onChange={(e)=>setProvincia(e.target.value)}>
                      <option value="0">Seleccione una provincia</option>
                      <option value="2">Seleccione una provincia</option>
                      <option value="3">Seleccione una provincia</option>
                      </select>

                    <label htmlFor="ciudad">Ciudad</label>
                    <input
                      type="text"
                      name="ciudad"
                      id="ciudad"
                      className="form-control mb-2"
                      value={ciudad}
                      onChange={(e) => setCiudad(e.target.value)}
                      placeholder="Por ejemplo Rivadavia..."
                      autoComplete="on"
                    />

                   <div className="cp-ciudad"
                   >
                    <div className="item-cp">
                    <label htmlFor="address">Dirección</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="form-control mb-2"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="ingrese su calle y número"
                      autoComplete="on"
                    />
                    </div>
                    <div className="item-cp">
                    <label htmlFor="cp">Código postal</label>
                    <input
                      type="text"
                      name="cp"
                      id="cp"
                      className="form-control mb-2"
                      value={cp}
                      onChange={(e) => setCp(e.target.value)}
                      placeholder="- - - -" pattern="[0-9]{4}"
                      autoComplete="on"
                    />
                   </div>
                    </div>
                   

                    <label htmlFor="mobile">
                     Teléfono
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      className="form-control mb-2"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="+54 9 xxxxxxxxx"
                      autoComplete="on"
                    />

                    <label htmlFor="coment">Comentario</label>
                    <input
                      type="text"
                      name="coment"
                      id="coment"
                      placeholder="entre que calles, horario de visita, etc."
                      className="form-control mb-2"
                      value={coment}
                      onChange={(e) => setComent(e.target.value)}
                    />
                  </form>
       
            <div className="contenedor-subtotal">
              <div className="subtotal-item">
                <h4>Articulos</h4>
                <h4>$ {total}</h4>
              </div>
              <div className="subtotal-item">
                <h4>Envio</h4>
                <h4>$ {0}</h4>
              </div>
            </div>
            <h3>
              Total: <span className="text-danger">${total}</span>
            </h3>
          </div>
          <Link href="/">
            <a className="btn add-to-cart my-2">Seguir comprando</a>
          </Link>

          <Link href={auth.user ? "#!" : "/signin"}>
            <a className="btn add-to-cart my-2" onClick={handlePayment}>
              Finalizar compra
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
