import "../Css/about.css"
import { RiArrowDownDoubleLine } from "react-icons/ri";


export default function About(){

    return (
<>
        <div  id="about" className="about-wrapper"> 
        <div className="valami">
            <p>Szia! Darázs Ferenc vagyok.
              Ez az oldal azért jött létre, hogy bemutathassam kisebb projektjeim amiket a Progmatic Acemeny-nél a képzésem során és a szabadidőmben készítettem.
              Célom a képességeim fejlesztése és pályafutásom megkezdése.</p>
              <h5>De elöbb ismerj meg!</h5>
              <p className="icon"><RiArrowDownDoubleLine/></p>
       
          </div>
          </div>
          </>
         )
 }