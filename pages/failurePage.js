import React from "react";
import Head from "next/head";

export const failurePage = () => {
  return (
    <div className=" contenedor-nosotros ">
      <Head>
        <title>ACCESS - PAGO RECHAZADO</title>
        <link rel='shortcut icon' href='/images/favicon.ico'></link>
      </Head>

      <div className="contenedor-texto">
        PAGO RECHAZADO POR MERCADOPAGO
       
      </div>
    </div>
  );
};

export default failurePage;