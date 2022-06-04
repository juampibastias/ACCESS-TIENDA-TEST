
import React,{useEffect} from 'react';
import Link from 'next/link'
import 'animate.css';
const MiniCartWidget =(props)=>{
   
    useEffect(()=>{
        let toggler = document.querySelector('.container-widget');
        toggler.addEventListener('mouseover', () => {
            toggler.classList.add('animate__animated', 'animate__bounce');
        })
        toggler.addEventListener('mouseout', () => {
            toggler.classList.remove('animate__animated', 'animate__bounce');
        })
    },[])
    

    return(
        <div className="container-widget animate__animated animate__bounce">
          
            <Link href='/cart' >
            
                <a> <i className="fas fa-shopping-cart " aria-hidden="true"></i> <p>{props.count}</p></a>
           
            </Link>
        </div>
    )
}
export default MiniCartWidget;