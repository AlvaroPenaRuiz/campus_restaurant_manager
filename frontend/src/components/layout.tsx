import LandingPage from "./landingPage"

const Layout = () => {

    return (
      <>
        <nav className="mainNav">
            <div>
                <button>Restaurantes</button>
                <button>Comida</button>
                <button>Menú del día</button>
                <button>Reservas</button>
                <button>Gestion</button>
                <button>Administracion</button>

            </div>
            <div>
                <span>LOGO AQUI</span>
            </div>
            <div>
                <button>ICONO LOGIN AQUI</button>
            </div>
        </nav>
        
        <div>
            <LandingPage/>
        </div>
        
        <footer></footer>
      </>
    )
  }
  
  export default Layout
  
