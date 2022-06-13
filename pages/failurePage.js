import React from "react";
import Head from "next/head";

export const failurePage = () => {
  return (
    <div className=" contenedor-nosotros ">
      <Head>
        <title>ACCESS - PAGO RECHAZADO</title>
        <link rel='shortcut icon' href='/images/favicon.ico'></link>
      </Head>

      <div className="contenedor-texto mp-error">
        <h2>PAGO RECHAZADO POR MERCADOPAGO</h2>
        <p>Parece ser que hubo un error en el pago por el sistema de Mercado Pago. <br/>
         Lo invitamos a que vuelva a intentar o que se comunique con uno de nuestros operadores. <br/>
          <b>Estamos atentos para ayudarlo con el inconveniente</b></p>
        <div className="contenedor-botones">
        <a href="/profile">Volver a Orden de Compra <i class="fa fa-tasks"></i></a>
        <a href="/profile">Volver a la Tienda <i class="fa fa-store"></i></a>
        
        

        <a onClick={()=>{
          alert("lo sentimos, de momento no hay operadores disponibles")
        }}>Atención al cliente <i class="fa fa-comments"></i></a>
        </div>
       
      </div>
    </div>
  );
};

export default failurePage;