<template>
  <section class="home">
    <div class="container">
<div class="wrapper">
  <div class="container">
    <div class="col-left">
      <div class="login-text">
        <img src="../assets/logo/logo.png" alt="">
        <p>
 ACCEPTING OUR TERMS

By creating an account or using our Services you confirm that you accept these Terms. You also confirm that:

1. You have reached the age of 18; or
2. You are 13 or older but younger than 18 (“Minor”), that you have reviewed these Terms with your parent or legal guardian, and that you and your parent or guardian understand and consent to the terms and conditions of these Terms. If you are a parent or guardian permitting a Minor to use the Services, you agree to: (i) supervise the Minor’s use of the Services; (ii) assume all risks associated with the Minor’s use of the Services, (iii) assume any liability resulting from the Minor’s use of the Services; (iv) ensure the accuracy and truthfulness of all information submitted by you or the Minor; and (v) assume responsibility and are bound by these Terms for the Minor’s access and use of the Services.
3. You may be prevented from creating an account or using our Services due to our children accessibility policy in accordance with the applicable laws and regulations in your jurisdiction.
        </p>
        <!-- <a class="btn" href="">Read More</a> -->
      </div>
    </div>
    <div class="col-right">
      <div class="login-form">
        <h2>Sign In</h2>
        <form>
          <p>
            <input type="text" placeholder="Email address" required>
          </p>
          <p>
            <input type="password" placeholder="Password" required>
          </p>
          <p>
            <a><input class="btn" type="submit" value="Sing In" href="/login" /></a>
          </p>
          <p>
            <a href="">Forget password?</a>
            <a href="">Create an account.</a>
          </p>
        </form>
      </div>
    </div>
  </div>
  <div class="credit">
    Designed by <a>M|M coding</a>
  </div>
</div>
    </div>

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

/* * * * * General CSS * * * * */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  background: #eaeff4;
}

.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 1170px;
  min-height: 60vh;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: auto;
  display: flex;
  background: black;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.9);
}

.credit {
  position: relative;
  margin: 25px auto 0 auto;
  width: 100%;
  text-align: center;
  color: #666666;
  font-size: 16px;
  font-weight: 400;
}

.credit a {
  color: #222222;
  font-size: 16px;
  font-weight: 600;
}

/* * * * * Login Form CSS * * * * */
h2 {
  margin: 0 0 15px 0;
  font-size: 30px;
  font-weight: 700;
}

h2 img {
  width: 120px;
}

p {
  /* margin: 0 0 20px 0; */
  font-size: 1px;
  /* font-weight: 500; */
  /* line-height: 22px; */
}

.btn {
  display: inline-block;
  padding: 7px 20px;
  font-size: 16px;
  letter-spacing: 1px;
  text-decoration: none;
  border-radius: 5px;
  color: #ffffff;
  outline: none;
  border: 1px solid;
  
  transition: .3s;
  -webkit-transition: .3s;
}

.btn:hover {
  color: black !important;
  background: #fcb800 !important;
  
}

.col-left,
.col-right {
  width: 55%;
  padding: 45px 35px;
  display: flex;
}

.col-left {
 
  width: 50%;
  height: 105%;
  background: #fcb800;
  -webkit-clip-path: polygon(98% 17%, 100% 34%, 98% 51%, 100% 68%, 98% 84%, 100% 100%, 0 100%, 0 0, 100% 0);
  clip-path: polygon(98% 17%, 100% 34%, 98% 51%, 100% 68%, 98% 84%, 100% 100%, 0 100%, 0 0, 100% 0);
}

img{
  height: 30%;
  width: 95%;
}

@media(max-width: 575.98px) {
  .container {
    flex-direction: column;
    box-shadow: none;
  }

  .col-left,
  .col-right {
    width: 100%;
    margin: 0;
    padding: 30px;
    -webkit-clip-path: none;
    clip-path: none;
  }
}

.login-text {
  position: relative;
  width: 100%;
  color: #ffffff;
  text-align: center;
}

.login-form {
  margin-top: 90px;
  position: relative;
  width: 100%;
  color: #666666;
}

.login-form p:last-child {
  margin: 0;
}

.login-form p a {
  color: white;
  font-size: 14px;
  text-decoration: none;
}

p a:hover{
  color: #fcb800;
}

.login-form p:last-child a:last-child {
  float: right;
}

.login-form label {
  display: block;
  width: 100%;
  margin-bottom: 2px;
  letter-spacing: .5px;
}

.login-form p:last-child label {
  width: 60%;
  float: left;
}

.login-form label span {
  color: #ff574e;
  padding-left: 2px;
}

.login-form input {
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  font-size: 16px;
  letter-spacing: 1px;
  outline: none;
  border: 1px solid #cccccc;
  border-radius: 5px;
}

.login-form input:focus {
  border-color: #ff574e;
}

.login-form input.btn {
  color: #ffffff;
  background: #4CAF50;
  border-color: #4CAF50;
  outline: none;
  cursor: pointer;
}

.login-form input.btn:hover {
  color: #4CAF50;
  background: #ffffff;
}
/* .container{
   background-color: black;
   width: 30%;
   height: 40%;
   padding-top: 20%; 
} */

/* .photo{
  padding-top: 110px;
  width: 50%;
  height: 600p;
} */

.btn{
  color: white;
  font-size: 23px;
  background-color: black !important;
  border-color: #fcb800;
  width: 130px;
  height: 60px;
  border-radius: 360px;
  margin-top: 50px;
}

button:hover{
  background-color: rgb(58, 160, 58);
}

p{
  
  font-size: 9px;
  font-weight: bold;
}

.credit{
  padding-left: 255px;
}
</style>