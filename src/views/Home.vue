<template>
  <section class="home">
    <div class="picture">

    </div>
<li><a class="btn" href="/login">Login</a></li>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
section{
  background-color: #fcb800;
  height: 100vh !important;
}
.home{
    background-image: url("../assets/logo/logo.png");
    background-repeat: no-repeat;
   height: 50px ;
   
}

.photo{
  padding-top: 110px;
  width: 50%;
  height: 600p;
}

.btn{
  color: white;
  font-size: 23px;
  background-color: black;
  width: 130px;
  height: 60px;
  border-radius: 360px;
  margin-top: 500px;
}

button:hover{
  background-color: rgb(58, 160, 58);
}

p{
  margin-top: 9px;
  font-size: 27px;
  font-weight: bold;
}
</style>