import "../Css/navbar.css"
import { TbMenu2 } from "react-icons/tb"
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export default function Navbar() {


    return (
        <nav class="navbar navbar-expand-xl bg-body-tertiary navbar sticky-top bg-body-tertiary min-vw-100 " data-bs-theme="dark">
            <div class="container-fluid">
             <a class="navbar-brand" href="#home">Darázs Ferenc</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span><TbMenu2/></span>
                </button>
                <div class="collapse navbar-collapse justify-content-sm-evenly " id="navbarSupportedContent">
                    <ul class="navbar-nav me mb-2 mb-lg- nav nav-underline ">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#home"><span>{"< "}</span>Home<span>{" />"}</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about"><span>{"< "}</span>Rólam<span>{" />"}</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#skills"><span>{"< "}</span>Skills & CV<span>{" />"}</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><span>{"< "}</span>Munkáim<span>{" />"}</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><span>{"< "}</span>Kapcsolat<span>{" />"}</span></a>
                        </li>

                    </ul>
                
             

                </div>
                </div>
          
            
        </nav>
    )
}