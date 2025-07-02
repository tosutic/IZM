import React from 'react';
import { Header } from 'react-bootstrap';
const Header = () => {

    return(
        <header class="container">



        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a href="#" class="navbar-brand order-2 order-lg-1">
            <img src="img/logo.svg"/>
          </a>
          <button class="navbar-toggler order-1 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="menu-icon">
				<span></span>
                <span></span>
                <span></span>
			</span>
          </button>
          <div class="collapse navbar-collapse main-nav order-lg-2" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0 text-uppercase">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="home.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="detail.html">Detail</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="category.html">Category</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Payment</a>
              </li>
			  <li class="nav-item">
                <a class="nav-link" href="#">Admin</a>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav align-items-center mobile-menu order-3">
              <li class="nav-item">
                <a class="nav-link nav-icon" href="#">
                  <img src="img/like.svg"/>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-icon" href="#">
                  <img src="img/notification.svg"/>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-icon" href="#">
                  <img src="img/settings.svg"/>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="img/profil.svg"/>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
        </div>
      </nav>



</header>
    );
};
export default Header;