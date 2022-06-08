import React from "react";
import Head from "next/head";

export const pendingPage = () => {
  return (
    <div className=" contenedor-nosotros ">
      <Head>
        <title>ACCESS - PAGO PENDIENTE</title>
        <link rel='shortcut icon' href='/images/favicon.ico'></link>
      </Head>

      <div className="contenedor-texto">
        Mercadopago esta procesando tu pago.
        No te preocupes, menos de 2 días hábiles mercadopago te avisará por e-mail si se acreditó o si necesitamos más información.

        Tu orden de pedido quedara pendiente en tu perfil, si deseas puedes carncelar tu compra desde mercadopago.

        boton para regresar al perfil.
        boton para regresar a tienda.
      </div>
    </div>
  );
};

export default pendingPage;