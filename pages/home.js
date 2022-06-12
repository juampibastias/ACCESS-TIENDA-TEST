import React from "react";
import Head from "next/head";
import Image from "next/image";
import banner from "../public/images/banner.png";
import banner1 from "../public/images/banner1.png";
import banner2 from "../public/images/banner2.png";
import banner3 from "../public/OFERTA-access.png";
import banner4 from "../public/OFERTA-access1.png";
import separatorImg from "../public/promos/ingreso.jpeg";
import separatorImg2 from "../public/promos/ingreso_2.jpeg";

import separatorImg3 from "../public/promos/ingreso_3.jpeg";





import { Carousel } from "react-bootstrap";

import { useState, useContext, useEffect } from "react";
import { DataContext } from "../store/GlobalState";

import { getData } from "../utils/fetchData";
import ProductHome from "../components/product/ProductHome";
import { useRouter } from "next/router";
import SeparatorImage from "../components/separatorImg";
//import MiniCartWidget from '../components/widget/minicart'

const Home = (props) => {
  const [products, setProducts] = useState(props.products);

  const [isCheck, setIsCheck] = useState(false);
  const [page, setPage] = useState(1);
  const router = useRouter();

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  /*   const [novedades, setNovedades] = useState(props.novedades)
   */
  useEffect(() => {
    setProducts(props.products);
  }, [props.products]);

  useEffect(() => {
    if (Object.keys(router.query).length === 0) setPage(1);
  }, [router.query]);

  const handleCheck = (id) => {
    products.forEach((product) => {
      if (product._id === id) product.checked = !product.checked;
    });
    setProducts([...products]);
  };

  const handleCheckALL = () => {
    products.forEach((product) => (product.checked = !isCheck));
    setProducts([...products]);
    setIsCheck(!isCheck);
  };

  const handleDeleteAll = () => {
    let deleteArr = [];
    products.forEach((product) => {
      if (product.checked) {
        deleteArr.push({
          data: "",
          id: product._id,
          title: "Eliminar todos los productos seleccionados?",
          type: "DELETE_PRODUCT",
        });
      }
    });

    dispatch({ type: "ADD_MODAL", payload: deleteArr });
  };

  const handleLoadmore = () => {};
  return (
    <div className="contenedor-home">
      <Head>
        <title>ACCESS - HOME</title>
      </Head>
      <Carousel prevLabel="" nextLabel="">
        <Carousel.Item>
          <Image className="d-block w-100" src={banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={banner} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={banner3} alt="fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={banner4} alt="fifth slide" />
        </Carousel.Item>
      </Carousel>

      {/*       <NovedadesHome />
       */}
      {auth.user && auth.user.role === "admin" && (
        <div
          className="delete_all btn btn-danger mt-2"
          style={{ marginBottom: "-10px" }}
        >
          <input type="checkbox" checked={isCheck} onChange={handleCheckALL} />

          <button
            className="btn btn-danger ml-2"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={handleDeleteAll}
          >
            Borrar todo
          </button>
        </div>
      )}
      <SeparatorImage imagen={separatorImg} imagen2={separatorImg2} imagen3={separatorImg3}  title="aah"/>

      <div className="featured">
        <h2>Nuevos Ingresos</h2>
        <div className="featured-items">
        {products.length === 0 ? (
          <h2>No hay productos</h2>
        ) : (
          products.map((product) => (
            <ProductHome
              key={product._id}
              product={product}
              handleCheck={handleCheck}
            />
          ))
        )}
        
        </div>
      </div>

      <div></div>
      {props.result < page * 6 ? (
        ""
      ) : (
        <button
          className="btn btn-outline-info d-block mx-auto mb-4"
          onClick={handleLoadmore}
        >
          Mostrar más
        </button>
      )}
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const page = query.page || 1;
  const category = query.category || "all";
  const sort = query.sort || "";
  const search = query.search || "all";

  const res = await getData(
    `product?limit=${
      page * 4
    }&category=${category}&sort=${sort}&title=${search}`
  );
  // server side rendering
  return {
    props: {
      products: res.products,
      result: res.result,
    }, // will be passed to the page component as props
  };
}

export default Home;

/* EN LOS PRODUCTOS CARDS QUE APARECEN EN LA HOME SOLO NECESITAMOS LAS PROPS DE IMAGE, TITLE, PRECIO, DESCRIPTION, SOLO DEBEN SER 4 
CARDS, Y SERAN LAS PRIMERAS 4 QUE APAREZCAN EN LA SECCION TIENDA  */
