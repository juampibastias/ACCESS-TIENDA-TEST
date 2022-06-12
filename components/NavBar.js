import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {DataContext} from '../store/GlobalState'
import Cookie from 'js-cookie'
import Image from 'next/image'
import logo from '../public/images/logo.png'
import MiniCartWidget from './widget/minicart'

function NavBar() {
    const router = useRouter()
    const {state, dispatch} = useContext(DataContext)
    const { auth, cart } = state
    const   [isOpen, setIsOpen] = useState(true)


    useEffect(() => {
        const btnMobile = document.querySelectorAll('.nav-item-mobile');
        const dropdownMobile = window.document.querySelector('#navbarNavDropdown');
        
            dropdownMobile.classList.remove('show');
           
       
        setIsOpen(false)
    }, [isOpen])
  
    let abrirNav =()=>{
       
        setIsOpen(true)
    }
    const isActive = (r) => {
        if(r === router.pathname){
            return " active"
        }else{
            return ""
        }
    }

    const handleLogout = () => {
        Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
        localStorage.removeItem('firstLogin')
        dispatch({ type: 'AUTH', payload: {} })
        dispatch({ type: 'NOTIFY', payload: {success: '¡Cerraste tu sesión correctamente!'} })
        return router.push('/')
    }

    const adminRouter = () => {
        return(
            <>
            <Link href="/users">
                <a className="dropdown-item">Usuario</a>
            </Link>
            <Link href="/create">
                <a className="dropdown-item">Productos</a>
            </Link>
            <Link href="/createNov">
                <a className="dropdown-item">Novedades</a>
            </Link>
            <Link href="/categories">
                <a className="dropdown-item">Categorias</a>
            </Link>
            
            </>
        )
    }

    const loggedRouter = () => {
        return(
            <li className="nav-item dropdown usermenu">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={auth.user.avatar} alt={auth.user.avatar} 
                    style={{
                        borderRadius: '50%', width: '30px', height: '30px',
                        transform: 'translateY(-3px)', marginRight: '3px'
                    }} /> {auth.user.name}
                </a>

                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link href="/profile">
                        <a className="dropdown-item">Perfil</a>
                    </Link>
                    {
                        auth.user.role === 'admin' && adminRouter()
                    }
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={handleLogout}>Salir</button>
                </div>
            </li>
        )
    }

    return (
        <header>
            <MiniCartWidget count={cart.length} />
        <nav className="navbar bootless-margin navbar-expand-lg navbar-light bg-dark text-light">
            <Link className="text-center"  href="/home">
                <a className=" text-center"><Image src={logo} className="logo" layout="intrinsic" alt='logo-access' /></a>
            </Link>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" >
                <ul className="navbar-nav social-collapse p-1">
         
                    <li className="nav-item">
                        <Link href="/cart">
                            <a style={{color:'white'}} className={"nav-link" + isActive('/cart')}>
                                <i className="fas fa-shopping-cart position-relative" aria-hidden="true">
                                    <span className="position-absolute cartitems-counter"
                                   >
                                        {cart.length}
                                    </span>
                                </i> CARRITO
                            </a>
                        </Link>
                    </li>
                    {
                        Object.keys(auth).length === 0 
                        ? <li className="nav-item">
                            <Link href="/signin">
                                <a style={{color:'white'}} className={"nav-link" + isActive('/signin')}>
                                    <i className="fas fa-user" aria-hidden="true"></i> Ingresar
                                </a>
                            </Link>
                        </li>
                        : loggedRouter()
                    }
                    <li className='icono-redes'>
                       <a href="https://www.facebook.com/accessvirtual/" target="_blank"><img src='images/iconos-redes1.png' alt="iconos-redes" /></a> 
                    </li>
                    <li className='icono-redes'>
                       <a href="https://wa.me/5492634617852"  target="_blank"><img src='images/iconos-redes2.png' alt="iconos-redes" /></a> 
                    </li>
                    <li className='icono-redes'>
                       <a href="https://www.instagram.com/access.virtual/"  target="_blank"><img src='images/iconos-redes3.png' alt="iconos-redes" /></a> 
                    </li>
                </ul>
            </div>
        </nav>
        <nav className="links-list d-none  d-lg-flex d-xl-flex">
                <ul className="" >
                <li className="nav-item">
                        <Link href="/nosotros">
                            <a style={{color:'white'}} className={"nav-link" + isActive('/nosotros')}>
                                NOSOTROS
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/sucursales">
                            <a style={{color:'white'}} className={"nav-link" + isActive('/sucursales')}>
                                SUCURSALES
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/servicios">
                            <a style={{color:'white'}} className={"nav-link" + isActive('/servicios')}>
                                SERVICIOS
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/novedades">
                            <a style={{color:'white'}} className={"nav-link" + isActive('/novedades')}>
                                NOVEDADES
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a style={{color:'white'}} className={"nav-link" + isActive('/')}>
                                TIENDA VIRTUAL
                            </a>
                        </Link>
                    </li>
                </ul>
        </nav>
        <nav className='links-list-vertical collapse navbar-collapse justify-content-end' id="navbarNavDropdown">
                <ul className="" >
                <li className="nav-item nav-item-mobile" >
                        <Link href="/nosotros">
                            <a style={{color:'white'}} onClick={abrirNav} className={"nav-link" + isActive('/nosotros')}>
                                NOSOTROS
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item nav-item-mobile">
                        <Link href="/sucursales">
                            <a style={{color:'white'}} onClick={abrirNav} className={"nav-link" + isActive('/sucursales')}>
                                SUCURSALES
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item nav-item-mobile">
                        <Link href="/servicios">
                            <a style={{color:'white'}} onClick={abrirNav} className={"nav-link" + isActive('/servicios')}>
                                SERVICIOS
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item nav-item-mobile">
                        <Link href="/novedades">
                            <a style={{color:'white'}} onClick={abrirNav} className={"nav-link" + isActive('/novedades')}>
                                NOVEDADES
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item nav-item-mobile">
                        <Link href="/">
                            <a style={{color:'white'}} onClick={abrirNav} className={"nav-link" + isActive('/')}>
                                TIENDA VIRTUAL
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/cart">
                            <a style={{color:'white'}} onClick={abrirNav} className={"nav-link" + isActive('/cart')}>
                                <i className="fas fa-shopping-cart position-relative" aria-hidden="true">
                                    <span className="position-absolute"
                                    style={{
                                        padding: '3px 6px',
                                        background: '#ed143dc2',
                                        borderRadius: '50%',
                                        top: '-10px',
                                        right: '-10px',
                                        color: 'white',
                                        fontSize: '14px'
                                    }}>
                                        {cart.length}
                                    </span>
                                </i> CARRITO
                            </a>
                        </Link>
                    </li>
                    {
                        Object.keys(auth).length === 0 
                        ? <li className="nav-item">
                            <Link href="/signin">
                                <a style={{color:'white'}} className={"nav-link" + isActive('/signin')}>
                                    <i className="fas fa-user" aria-hidden="true"></i> Ingresar
                                </a>
                            </Link>
                        </li>
                        : loggedRouter()
                    }
                    <ul className="social-collapse">
                    <li className='icono-redes'>
                       <a href="#face" target="_blank"><img src='images/iconos-redes1.png' alt="iconos-redes" /></a> 
                    </li>
                    <li className='icono-redes'>
                       <a href="#whatsapp"  target="_blank"><img src='images/iconos-redes2.png' alt="iconos-redes" /></a> 
                    </li>
                    <li className='icono-redes'>
                       <a href="#instagram"  target="_blank"><img src='images/iconos-redes3.png' alt="iconos-redes" /></a> 
                    </li>
                    </ul>
                </ul>
        </nav>
        </header>
    )
}

export default NavBar
