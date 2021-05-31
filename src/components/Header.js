import React from 'react';
import { Link } from 'react-router-dom';



const  Header = () => {
  //render() {
    return( 
      <div className="navigator">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <Link className="nav-link" to='/ocr'><a class="nav-link" aria-current="page" href="#"><h3>Распознавание</h3></a></Link>
      <Link className="nav-link" to='/search'><a class="nav-link" href="#"><h3>Поиск</h3></a></Link>
      </div>
    </div>
  </div>
</nav>
  </div>)
  }
//}

export default Header;