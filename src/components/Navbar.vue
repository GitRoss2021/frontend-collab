<template>
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src="../assets/logo/logo.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">|||</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/appliances" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="/cellphones">Cellphones</a></li>
            <li><a class="dropdown-item" href="/television">Television</a></li>
            <!-- <li><hr class="dropdown-divider"></li> -->
            <li><a class="dropdown-item" href="/accessories">Accessories</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact Us</a>
        </li>
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
       
      </ul>
      
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
  margin: 0;
}
.navbar{
  background-color: #fcb800;
  position: fixed !important;
  margin: 0;
  width: 100%;
  border-bottom: black !;
  height: 70px;
  z-index: 1000;
}

a{
  font-weight: bold;
  color: black;
  font-size: 20px;
}

a:hover{
  color: white;
}

li a :active{
  color: white !important;
}

img{
  height: 60px;
  width: 80px;
}

.btn{
  background-color: black;
  color: white;
}

.dropdown-menu{
   background-color: #fcb800;
   color: black;
}
.nav-item{
  display: flex;
}

.d-flex{
  margin: 5px;
}

navbar-nav-scroll {
    max-height: var(--bs-scroll-height, 0);
    overflow-y: auto;
    color: black;
}

.navbar-toggler{
  background-color: #fcb800;
  color: black;
}

.btn{
  border-color: black;
  border-radius: 160px;
  width: 100px;
  border-width: 2px;
}
</style>