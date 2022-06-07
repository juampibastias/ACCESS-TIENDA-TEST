import { getData } from "../utils/fetchData";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import { useRouter } from "next/router";
import NovedadesItem from "../components/Novedad/NovedadesItem";
import Head from "next/head";

const Novedades = (props) => {
  const [novedades, setNovedades] = useState(props.novedades);

  const [isCheck, setIsCheck] = useState(false);
  const [page, setPage] = useState(1);
  const router = useRouter();

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  useEffect(() => {
    setNovedades(props.novedades);
  }, [props.novedades]);

  useEffect(() => {
    if (Object.keys(router.query).length === 0) setPage(1);
  }, [router.query]);

  const handleCheck = (id) => {
    novedades.forEach((novedad) => {
      if (novedad._id === id) novedad.checked = !novedad.checked;
    });
    setNovedades([...novedades]);
  };

  const handleCheckALL = () => {
    novedades.forEach((novedad) => (novedad.checked = !isCheck));
    setNovedades([...novedades]);
    setIsCheck(!isCheck);
  };

  const handleDeleteAll = () => {
    let deleteArr = [];
    novedades.forEach((novedad) => {
      if (novedad.checked) {
        deleteArr.push({
          data: "",
          id: novedad._id,
          title: "Eliminar todas las novedades seleccionadas?",
          type: "DELETE_NOV",
        });
      }
    });

    dispatch({ type: "ADD_MODAL", payload: deleteArr });
  };

  const handleLoadmore = () => {
    setPage(page + 1);
    filterSearch({ router, page: page + 1 });
  };

  return (
    <div>
      <Head>
        <title>ACCESS - NOVEDADES</title>
        <link rel="shortcut icon" href="/images/favicon.ico"></link>
      </Head>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="home">Inicio</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Novedades
          </li>
        </ol>
      </nav>
      <div className="contenedor-novedades">
        {auth.user && auth.user.role === "admin" && (
          <div
            className="delete_all btn btn-danger mt-2"
            style={{ marginBottom: "-10px" }}
          >
            <input
              type="checkbox"
              checked={isCheck}
              onChange={handleCheckALL}
              
            />

            <button
              className="btn btn-danger ml-2"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={handleDeleteAll}
            >
              Borrar todo
            </button>
          </div>
        )}

        {novedades.length === 0 ? (
          <h2>Sin novedades</h2>
        ) : (
          novedades.map((novedad) => (
            <NovedadesItem key={novedad._id} novedad={novedad} handleCheck={handleCheck} />
          ))
        )}

        {props.result < page * 8 ? (
          ""
        ) : (
          <button
            className="btn btn-outline-info d-block mx-auto mb-4"
            onClick={handleLoadmore}
          >
            Mostrar más
          </button>
        )}
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  const res = await getData("novedad");

  return {
    props: {
      novedades: res.novedades,
      result: res.result,
    },
  };
}
export default Novedades;
