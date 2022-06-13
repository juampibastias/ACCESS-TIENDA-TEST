import React from "react";
import Head from "next/head";

export const pendingPage = () => {
 
  return (
    <div className=" contenedor-nosotros ">
      <Head>
        <title>ACCESS - PAGO PENDIENTE</title>
        <link rel='shortcut icon' href='/images/favicon.ico'></link>
      </Head>

      <div className="contenedor-texto mp-pending">
        <h2>Pago en Revisión</h2>
      <p>
      Mercadopago esta procesando tu pago.<br/> <br/>
        No te preocupes, en menos de 2 días hábiles mercadopago te avisará por e-mail si se acreditó o si necesitamos más información.
<br/>
        Tu orden de pedido quedara pendiente en tu perfil, si deseas puedes carncelar tu compra desde mercadopago.

       
      </p>
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

export default pendingPage;