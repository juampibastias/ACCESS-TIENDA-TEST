import React from "react";
import Head from "next/head";

export const Nosotros = () => {
  return (
    <div className=" contenedor-nosotros ">
      <Head>
        <title>ACCESS - NOSOTROS</title>
        <link rel='shortcut icon' href='/images/favicon.ico'></link>
      </Head>

      <div className="contenedor-imagen">
        <img src="images/nosotros.jpg" className="card-img-top" alt="..." />
      </div>
      <div className="contenedor-texto">
        <p>
          Somos una empresa argentina, nacida hace más de 20 años en la ciudad
          de Rivadavia (Mendoza), con el objetivo de cubrir las necesidades
          informáticas insatisfechas de las Empresas, logrando su inmediata
          aceptación y habiendo alcanzado en la actualidad una exitosa
          proyección a nivel nacional.
        </p>
        <p>
          Los efectos de la globalización han producido la aparición de diversos
          productos y servicios en distintos lugares del mundo. La creatividad
          es la base principal para captar las tendencias de los mercados más
          exigentes. Hoy en día es necesario contar con herramientas
          tecnológicas que nos permitan hacer frente a la alta competitividad
          imperante.
        </p>
        <p>
          Es nuestra misión primordial la incorporación e implementación de
          Tecnologías de Avanzada e Integración de Sistemas para la concreción
          de las metas trazadas.
        </p>
        <p>
          Contando con un eficiente y capacitado grupo de colaboradores y
          coordinando cada uno de los sectores de la empresa, desde la
          investigación hasta los servicios post venta; se logra el cumplimiento
          de metas inmediatas y la concreción de nuestra misión.
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
