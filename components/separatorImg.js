import React from "react";
import Image from "next/image";

const SeparatorBanner =(props) =>{

    return(
        <div className="separator-promo">
            <Image placeholder="blur" src={props.imagen} alt={props.title} />
            <Image placeholder="blur" src={props.imagen2} alt={props.title} />
            <Image placeholder="blur" src={props.imagen3} alt={props.title} />
           
            

        </div>
    )
}
export default SeparatorBanner;