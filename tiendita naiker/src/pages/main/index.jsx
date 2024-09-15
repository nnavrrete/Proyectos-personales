import './main.css'
import { Link } from 'react-router-dom'

export default function Main() {
    
       return(
        <>
        <header>
            <div className="headers">
            <div className="logo">
                <h1>Tiendita naiker</h1>
            </div>
            <div>
              <Link to="/login" className='button-login'>Login</Link>
            </div>
            </div>
        </header>
        <div></div>
            <h1>                 
            Tiendita naiker
        </h1>
        </>
       )

}