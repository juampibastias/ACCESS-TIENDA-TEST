import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import imagenLogo from "../public/images/logoblanco.png";

const Footer = () => {
    return(
        <footer className="footer">
        <div className="footer-logo">
          <Image className="logo-blanco" src={imagenLogo} alt="access" />
        </div>
  
        <ul >
          <li>
            <h5>Mapa del Sitio</h5>
  
            <ul>
              <li><Link href="/nosotros"><a>NOSOTROS</a></Link></li>
              <li><Link href="/sucursales"><a>SUCURSALES</a></Link></li>
              <li><Link href="/servicios"><a>SERVICIOS</a></Link></li>
              <li><Link href="/novedades"><a>NOVEDADES</a></Link></li>
              <li><Link href="/" ><a>TIENDA VIRTUAL</a></Link></li>
            </ul>
          </li>
  
          <li>
            <h5>Dirección</h5>
            <p>Rivadavia, W.Nuñez 597, Tel: (0263) 4445900 - 4445901</p>
            <p>Junin, Av. Mitre 8, Tel: (0263) 4498375</p>
            <p>San Martin, 25 de Mayo 252, Tel: (0263) 4428808 - 4420051</p>
          </li>
        </ul>
  
        <p className="copyright-footer">Copyright © All Rights Reserved</p>
      </footer>
    )
}
export default Footer;