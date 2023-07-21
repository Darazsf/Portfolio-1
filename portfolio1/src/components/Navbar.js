import "../Css/navbar.css"
import { TbMenu2 } from "react-icons/tb"
import Home from "../pages/Home"
import About from "../pages/About"
import Skills from "../pages/Skills"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"



export default function Navbar() {



    return (
        <>
        <nav class="navbar navbar-expand-xl bg-body-tertiary navbar sticky-top bg-body-tertiary min-vw-100 " data-bs-theme="dark">
            <div class="container-fluid justify-content-around">
                <a class="navbar-brand" href="#home">Darázs Ferenc</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span><TbMenu2 /></span>
                </button>
                <div class="collapse navbar-collapse justify-content-evenly " id="navbarSupportedContent">
                    <ul class="navbar-nav me mb-2 mb-lg- nav  nav nav-pills ">
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading1"><span> {"< "}Home{"/>"}</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading2"><span> {"< "}Rólam{"/>"}</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading3"><span> {"< "}Skills & Cv{"/>"}</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading4"><span> {"< "}Projects {"/>"}</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading5"><span> {"< "}Kapcsolat{"/>"}</span></a>
                        </li>

                    </ul>



                </div>
            </div>


        </nav>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
        <h4 id="scrollspyHeading1"><Home/></h4>
       
        <h4 id="scrollspyHeading2"><About/></h4>
       
        <h4 id="scrollspyHeading3"><Skills/></h4>
      
        <h4 id="scrollspyHeading4"><Projects/></h4>
      
        <h4 id="scrollspyHeading5"><Contact/></h4>
      
      </div>
      </>
    )
}