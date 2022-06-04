import React from 'react'
import Head from 'next/head'

export const Sucursales = () => {
  return (
    <div className='contenedor-sucursales'>
      <Head>
        <title>ACCESS - SUCURSALES</title>
        <link rel='shortcut icon' href='/images/favicon.ico'></link>
      </Head>
   
      <div className="card-container">
        <div className="card " style={{width: 90+"%"}}>
          <img
            src="images/rivadavia.PNG"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Sucursal Rivadavia</h5>
            <p className="card-text">
             <address>
               Dirección: W. Nuñez 597 <br />
               Tel:<a href='tel:+5402634445900'>(0263)4445900</a>
               
                </address>
            </p>
            <a href="https://www.google.com/search?q=access%20lider%20en%20tecnologia&sxsrf=ALiCzsYFv4NjCs36QRHYQo-hJCfCSGCnwA:1652496984453&ei=9Qd_YuWMN5iG1sQP_ZSr8A0&oq=access+lider+en+tec&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCCEQoAEyBQghEKABMggIIRAWEB0QHjIICCEQFhAdEB4yCAghEBYQHRAeMgUIIRCSAzIFCCEQkgMyBQghEJIDMgUIIRCSAzIFCCEQkgM6BwgjELADECc6BwgAEEcQsAM6BwgAELADEEM6BwgjEOoCECc6BwguEOoCECc6BAgjECc6CwgAEIAEELEDEIMBOgUIABCABDoLCC4QgAQQxwEQrwE6CAgAELEDEIMBOgoIABCxAxCDARBDOgQIABBDOgsILhCABBCxAxCDAToHCAAQsQMQQzoECAAQAzoQCC4QsQMQgwEQxwEQowIQQzoICAAQgAQQsQM6CggAEIAEEIcCEBQ6BQgAEMsBOgYIABAWEB46BAghEBVKBAhBGABKBAhGGABQxxdYikxg3FtoBHABeACAAYUBiAHrEJIBBDEuMTiYAQCgAQGwAQrIAQrAAQE&sclient=gws-wiz&tbs=lf:1,lf_ui:10&tbm=lcl&rflfq=1&num=10&rldimm=8800656549664484697&lqi=ChphY2Nlc3MgbGlkZXIgZW4gdGVjbm9sb2dpYUiV_4SrvoKAgAhaJhAAEAEQAhADGAAiGmFjY2VzcyBsaWRlciBlbiB0ZWNub2xvZ2lhkgEOY29tcHV0ZXJfc3RvcmWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTkxOa3B1YkZOQkVBRaoBIhABKh4iGmFjY2VzcyBsaWRlciBlbiB0ZWNub2xvZ2lhKA4&phdesc=8JsweizuFAg&ved=2ahUKEwi1noD-_t33AhWAjZUCHbixD3MQvS56BAgJEAE&sa=X&rlst=f#rlfi=hd:;si:7836554368005757101;mv:[[-33.0796987,-68.4627964],[-33.2028666,-68.4864025]]" className="btn ">Ver en mapa</a>
          </div>
        </div>
      </div>
  
   
      <div className="card-container">
        <div className="card " style={{width: 90+"%"}}>
          <img
            src="images/junin.PNG"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Sucursal Junin</h5>
            <p className="card-text">
            <address>
               Dirección: W. Nuñez 597 <br />
               Tel:<a href='tel:+5402634445900'>(0263)4445900</a>
               
                </address>
            </p>
            <a href="https://www.google.com/search?q=access%20lider%20en%20tecnologia&sxsrf=ALiCzsYFv4NjCs36QRHYQo-hJCfCSGCnwA:1652496984453&ei=9Qd_YuWMN5iG1sQP_ZSr8A0&oq=access+lider+en+tec&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCCEQoAEyBQghEKABMggIIRAWEB0QHjIICCEQFhAdEB4yCAghEBYQHRAeMgUIIRCSAzIFCCEQkgMyBQghEJIDMgUIIRCSAzIFCCEQkgM6BwgjELADECc6BwgAEEcQsAM6BwgAELADEEM6BwgjEOoCECc6BwguEOoCECc6BAgjECc6CwgAEIAEELEDEIMBOgUIABCABDoLCC4QgAQQxwEQrwE6CAgAELEDEIMBOgoIABCxAxCDARBDOgQIABBDOgsILhCABBCxAxCDAToHCAAQsQMQQzoECAAQAzoQCC4QsQMQgwEQxwEQowIQQzoICAAQgAQQsQM6CggAEIAEEIcCEBQ6BQgAEMsBOgYIABAWEB46BAghEBVKBAhBGABKBAhGGABQxxdYikxg3FtoBHABeACAAYUBiAHrEJIBBDEuMTiYAQCgAQGwAQrIAQrAAQE&sclient=gws-wiz&tbs=lf:1,lf_ui:10&tbm=lcl&rflfq=1&num=10&rldimm=8800656549664484697&lqi=ChphY2Nlc3MgbGlkZXIgZW4gdGVjbm9sb2dpYUiV_4SrvoKAgAhaJhAAEAEQAhADGAAiGmFjY2VzcyBsaWRlciBlbiB0ZWNub2xvZ2lhkgEOY29tcHV0ZXJfc3RvcmWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTkxOa3B1YkZOQkVBRaoBIhABKh4iGmFjY2VzcyBsaWRlciBlbiB0ZWNub2xvZ2lhKA4&phdesc=8JsweizuFAg&ved=2ahUKEwi1noD-_t33AhWAjZUCHbixD3MQvS56BAgJEAE&sa=X&rlst=f#rlfi=hd:;si:3556340944000107216,l,ChphY2Nlc3MgbGlkZXIgZW4gdGVjbm9sb2dpYVocIhphY2Nlc3MgbGlkZXIgZW4gdGVjbm9sb2dpYZIBGmNvbXB1dGVyX2FjY2Vzc29yaWVzX3N0b3JlqgEiEAEqHiIaYWNjZXNzIGxpZGVyIGVuIHRlY25vbG9naWEoDg;mv:[[-33.0796987,-68.4627964],[-33.2028666,-68.4864025]]" className="btn ">Ver en mapa</a>
          </div>
        </div>
      </div>
  

      <div className="card-container">
        <div className="card " style={{width: 90+"%"}}>
          <img
            src="images/sanmartin.PNG"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">SUCURSAL SAN MARTIN</h5>
            <p className="card-text">
            <address>
               Dirección: 25 de Mayo 252 <br />
               Tel:<a href='tel:+5402634428808'>(0263)4428808</a>
               
                </address>
            </p>
            <a href="https://www.google.com/search?q=access%20lider%20en%20tecnologia&sxsrf=ALiCzsYFv4NjCs36QRHYQo-hJCfCSGCnwA:1652496984453&ei=9Qd_YuWMN5iG1sQP_ZSr8A0&oq=access+lider+en+tec&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCCEQoAEyBQghEKABMggIIRAWEB0QHjIICCEQFhAdEB4yCAghEBYQHRAeMgUIIRCSAzIFCCEQkgMyBQghEJIDMgUIIRCSAzIFCCEQkgM6BwgjELADECc6BwgAEEcQsAM6BwgAELADEEM6BwgjEOoCECc6BwguEOoCECc6BAgjECc6CwgAEIAEELEDEIMBOgUIABCABDoLCC4QgAQQxwEQrwE6CAgAELEDEIMBOgoIABCxAxCDARBDOgQIABBDOgsILhCABBCxAxCDAToHCAAQsQMQQzoECAAQAzoQCC4QsQMQgwEQxwEQowIQQzoICAAQgAQQsQM6CggAEIAEEIcCEBQ6BQgAEMsBOgYIABAWEB46BAghEBVKBAhBGABKBAhGGABQxxdYikxg3FtoBHABeACAAYUBiAHrEJIBBDEuMTiYAQCgAQGwAQrIAQrAAQE&sclient=gws-wiz&tbs=lf:1,lf_ui:10&tbm=lcl&rflfq=1&num=10&rldimm=8800656549664484697&lqi=ChphY2Nlc3MgbGlkZXIgZW4gdGVjbm9sb2dpYUiV_4SrvoKAgAhaJhAAEAEQAhADGAAiGmFjY2VzcyBsaWRlciBlbiB0ZWNub2xvZ2lhkgEOY29tcHV0ZXJfc3RvcmWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTkxOa3B1YkZOQkVBRaoBIhABKh4iGmFjY2VzcyBsaWRlciBlbiB0ZWNub2xvZ2lhKA4&phdesc=8JsweizuFAg&ved=2ahUKEwi1noD-_t33AhWAjZUCHbixD3MQvS56BAgJEAE&sa=X&rlst=f#rlfi=hd:;si:7836554368005757101,l,ChphY2Nlc3MgbGlkZXIgZW4gdGVjbm9sb2dpYUiAlZPlnKqAgAhaJhAAEAEQAhADGAAiGmFjY2VzcyBsaWRlciBlbiB0ZWNub2xvZ2lhkgEaY29tcHV0ZXJfYWNjZXNzb3JpZXNfc3RvcmWqASIQASoeIhphY2Nlc3MgbGlkZXIgZW4gdGVjbm9sb2dpYSgO,y,7YAt7S5XS7M;mv:[[-33.0796987,-68.4627964],[-33.2028666,-68.4864025]]" className="btn">Ver en mapa</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sucursales