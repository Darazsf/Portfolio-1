import "../Css/navbar.css"

export default function Navbar() {


    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar sticky-top bg-body-tertiary" data-bs-theme="dark">
           
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="./_3f73c84f-270a-413b-8688-87a58db822ca.jpg" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Rólam</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Portfolió</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Kapcsolat</a>
                        </li>
                    </ul>

                </div>
            </div>
          
        </nav>
    )
}