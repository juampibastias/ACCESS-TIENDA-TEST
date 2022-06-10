import Head from 'next/head'
import path from "path";
import fsPromises from 'fs/promises'
import Link from 'next/link'

export default function costoEnvio(props) {
    const posts = props.provincias;
    return (
      <div style={{ padding: 30 }}>
        <Head>
          <title>Costos de envio</title>
        </Head>
        <div>
          <button className='btn btn-success'>
            <Link href="/">
            Ir a la Tienda
            </Link>
          </button>
          {posts.map(post =>
            <div
              key={post.id}
              style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
              <h2>{post.nombre}</h2>
              <p> $ {post.costo} por paquete (hasta 25 kg)</p>
            </div>)}
        </div>
      </div>
    )
  }

//llamada a api provincias y ciudades argentias
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'costoEnvio.json');
    
    const jsonData = await fsPromises.readFile(filePath);
  
    const objectData = JSON.parse(jsonData);
      
    return {
      props: objectData
    }
  }