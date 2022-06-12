import Head from "next/head";
import { useState } from "react";
import { getData } from "../../utils/fetchData";

const DetailNovedades = (props) => {
  const [novedades] = useState(props.novedad)
  
  return (
    <div className="contenedor-detallesnovedades">
       <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/home">Inicio</a></li>
    <li className="breadcrumb-item "><a href="/novedades">Novedades</a></li>
    <li className="breadcrumb-item active" aria-current="page">{novedades.name}</li>
  </ol>
</nav>
      <Head>
        <title>DETALLE-NOVEDADES</title>
      </Head>
      <div className="contenedor-novedad">
        <img src={novedades.images[0].url} alt={novedades.images[0].url} className=""
        />

      <div className="contenedor-novedad-texto">
      <div className="title">
        <h2>{novedades.name.toUpperCase()}</h2>
        </div>
        <div className="desc">
          <h4>Descripción</h4>
        {novedades.descrip}
        </div>
        <div className="desc">
          <h4>Detalles</h4>
        {novedades.detail}
        </div>
        <div hidden className="row mx-0">
        {novedades.category}
        </div>
      </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`novedad/${id}`);

  return {
    props: { novedad: res.novedad},
  };
}

export default DetailNovedades;
