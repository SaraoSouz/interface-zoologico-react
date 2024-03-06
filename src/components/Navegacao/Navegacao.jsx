import './Navegacao.css'

function Navegacao(){
    

    return(
        // fragment
        <div className="barra-navegacao"> 
            <div className='logo-zoo'>
                <h1>ZOOLÓGICO</h1>
            </div>

            <div className="navbar-opcoes">
                <ul>
                    <li>Inicio</li>
                    <li>Os Animais</li>
                    <li>Fotos</li>
                    <li>Depoimentos</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    );
}

export default Navegacao;