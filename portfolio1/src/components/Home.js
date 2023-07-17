import "../Css/home.css"
import { TypeAnimation } from 'react-type-animation';



export default function Home(){

    return(

        <>
<div id="home">
            <div className="header-wrapper">
                <div className="main-info">
                    <h1>Üdvözöllek az oldalon!</h1>
                    <TypeAnimation
                        sequence={[
                            "Üdvözöllek az oldalon!",
                            1000,

                        ]}
                        speed={40}
                        repeat={2}
                        style={{ fontSize: '2em', color: "#323232" }}
                    />
                    


                </div>
            </div>
            </div>
        </>
    )
}