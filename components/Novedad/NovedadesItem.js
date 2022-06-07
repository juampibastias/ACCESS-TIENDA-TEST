import Link from "next/link"
import { useContext } from 'react'
import { DataContext } from '../../store/GlobalState'
import { addToNov } from '../../store/Actions'

const NovedadesItem = ({novedad, handleCheck}) =>{
  const { state, dispatch } = useContext(DataContext)
  const { novedades, auth } = state


  const  userLink = () => {
    return(
      <>

      <Link href={`novedad/${novedad._id}`}>
      <a className="btn-custom" onClick={() => dispatch(addToNov(novedad, novedades))}>{">"}</a>
      </Link>

      </>
    )
  }

  const  adminLink = () => {
    return(
      <>
      
      <Link href={`createNov/${novedad._id}`}>
      <a className="btn-item-edit" 
      >Editar <i class="fas fa-edit"></i></a>
      </Link>
      <button className="btn btn-danger btn-item-erase"
      
      data-toggle="modal" data-target="#exampleModal"
      onClick={() => dispatch({
          type: 'ADD_MODAL',
          payload: [{ 
              data: '', id: novedad._id, 
              title: novedad.title, type: 'DELETE_NOV' 
                    }]
                })} >
                    Eliminar<i class="fas fa-trash"></i>
                </button>
      </>
    )
  }
    
    return(
        <div className="card">
        {
                auth.user && auth.user.role === 'admin' &&
                <input type="checkbox" checked={novedad.checked}
                className="position-absolute"
                style={{height: '20px', width: '20px'}}
                onChange={() => handleCheck(novedad._id)} />
            }
        <Link href={`novedad/${novedad._id}`}>
        <img className="card-img-top" src={novedad.images[0].url} alt={novedad.images[0].url} />
        </Link>
        
        <div className="card-body-custom">
          <Link href={`novedad/${novedad._id}`}>
          <h5 className="card-title">{novedad.name.toUpperCase()}</h5>
          </Link>
          <Link href={`novedad/${novedad._id}`}>
          <p className="card-text">{novedad.descrip}</p>          
          </Link>
          

          <div className="mt-auto botonera">
          {!auth.user || auth.user.role !== "admin" ? userLink() : adminLink()}
        </div>
        </div>
        
      </div>
    )
}


export default NovedadesItem


/* Los atributos que se imprimiran dentro de las cards novedades seran images, name, descrip */