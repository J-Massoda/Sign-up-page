import React from "react"
import ReactDom from "react-dom/client"

export default function SignUp() {
  return (

    <><div class="container">
      <div class="row">

        <div class="col-md-6 d-none d-md-block"><!-- left content (image) -->
          <img src="img/signup.png" alt="" class="img-fluid">
        </div>

        <div class="col-md-6 my-3"><!-- right content (input field) -->
          <div class="text-center">
            <form action="">
              <h1 class="font-weight-bold text-primary mb-4">Sign up</h1>
              <div class="input-field w-75 mx-auto">
                <i class="fa fa-user"></i>
                <input type="text" placeholder="Username">
              </div>
              <div class="input-field w-75 mx-auto">
                <i class="fa fa-envelope"></i>
                <input type="email" placeholder="Email">
              </div>
              <div class="input-field w-75 mx-auto">
                <i class="fa fa-lock"></i>
                <input type="password" placeholder="Password">
              </div>
              <input type="submit" value="Sign up" class="btn btn-lg btn-outline-primary rounded-pill m-3 font-weight-bold">
                <p style="color:lightskyblue;">OR</p>
                <div class="social-icon d-flex justify-content-center">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                  <a href="#"><i class="fab fa-google"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </form>
          </div>
        </div><!-- x ----- end right content (input field) ------ x -->
      </div>
    </div>

      <div class="colo-12 col-md-6 my-1 my-sm-0 text-center mx-auto"><!-- bottom content -->
        <h1 class="font-weight-bold">Connect Us</h1>
        <p>We're looking for people like you to help the developers</p>
        <a href="signin.html" class="btn btn-lg btn-outline-primary rounded-pill font-weight-bold">Sign in</a>
      </div>
    </>

  )
}