import Link from "next/link"

const NovedadesHome = ({novedad}) =>{

  const  novedadLink = () => {
    return(
      <>

      <Link href={`novedad/${novedad._id}`}>
      <a className="btn btn-info">Ir</a>
      </Link>

      </>
    )
  }
    
    return(
        <div className="card" >
        <img className="card-img-top" src={novedad.images[0].url} alt={novedad.images[0].url} />
        <div className="card-body">
          <h5 className="card-title">{novedad.name}</h5>
          <p className="card-text">{novedad.descrip}</p>
        </div>
        <div className="row justify-content-between mx-0">
          {novedadLink()}
        </div>
      </div>
    )
}


export default NovedadesHome


/* Los atributos que se imprimiran dentro de las cards novedades seran images, name, descrip */