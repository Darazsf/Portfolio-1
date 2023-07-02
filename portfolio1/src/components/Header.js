import "../Css/header.css"
import { TypeAnimation } from 'react-type-animation';


export default function Header(){

    return(
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Üdvözöllek az oldalamon!</h1>
                <TypeAnimation
        sequence={[
          "A nevem Darázs Ferenc",
          1000,
       
        ]}
        speed={40}
        repeat={2}
        style={{ fontSize: '2em', color:"yellow" }}
      />
                <div class="wrap">
                    <button class="button">Kontakt</button>
                </div>
                
            </div>

        </div>
    )
}