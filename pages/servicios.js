import React from 'react'
import Head from 'next/head'


export const Servicios = () => {
  return (
    <div className='contenedor-servicios'>
      <Head>
        <title>ACCESS - SERVICIOS</title>
        <link rel="icon" src="../public/images/logo-favicom.png"></link>
      </Head>
       <h1>Nuestros Servicios</h1>

      <div className='servicio-items'>
        <div className='servicio-item'>
          <img src="icons/3709749_advice_consult_mobile_service_system_icon.svg" alt="" />
          <div className='text'>
            <h4>Soporte Online</h4>
            <p>tel: (123)123546</p>
          </div>
        </div>
        <div className='servicio-item'>
          <img src="icons/3709743_assistance_fix_problem_service_trouble_icon.svg" alt="" />
          <div className='text'>
            <h4>Servicio Técnico</h4>
            <p>tel: (123)123546</p>
          </div>
        </div>
        <div className='servicio-item'>
          <img src="icons/desarrollo.svg" alt="" />
          <div className='text'>
            <h4>Desarrollo de Software</h4>
            <p>tel: (123)123546</p>
          </div>
        </div>
        <div className='servicio-item'>
          <img src="icons/eye.svg" alt="" />
          <div className='text'>
            <h4>Sistema de Cámaras de Seguridad</h4>
            <p>tel: (123)123546</p>
          </div>
        </div>
        <div className='servicio-item'>
          <img src="icons/3709745_assistance_client_customer_employee_female_icon.svg" alt="" />
          <div className='text'>
            <h4>Sistema Para Negocios</h4>
            <p>tel: (123)123546</p>
          </div>
        </div>
        <div className='servicio-item'>
          <img src="icons/venta.svg" alt="" />
          <div className='text'>
            <h4>Ventas de Equipo</h4>
            <p>tel: (123)123546</p>
          </div>
        </div>
      </div>
{/* <ul>
  <li>LINK PARA SOPORTE ONLINE</li>
  <li>SERVICIO TECNICO</li>
  <li>DESARROLLO DE SOFTWARE</li>
  <li>SISTEMAS DE CAMARAS DE SEGURIDAD</li>
  <li>SISTEMAS PARA NEGOCIOS</li>
  <li>VENTAS DE EQUIPOS</li>
</ul> */}
    </div>
  )
}

export default Servicios