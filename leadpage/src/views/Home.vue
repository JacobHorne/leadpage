<template>
  <div>
    <div class="hero">
      <div class="hero-title">
        <h1 class="title is-1">Disability Benefits Heading</h1>
        <h4 class="title is-4">This is A Subtitle</h4>
      </div>
      <div class="columns">
        <div class="column">
           <div class="form-wrapper">
            <!--Name-->
            <div class="field">
              <label class="label">Name</label>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left has-icons-right">
                    <input class="input is-medium" type="text" placeholder="First Name">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                 <div class="field is-expanded is-grouped">
                  <p class="control is-expanded has-icons-left has-icons-right">
                    <input class="input is-medium" type="text" placeholder="Last Name">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <!--Email-->
            <div class="field">
                <label class="label">Email</label>
                <p class="control is-expanded has-icons-left has-icons-right">
                  <input class="input is-medium is-success" type="email" placeholder="Email" value="alex@smith.com">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
            </div>

            <!--Location-->
            <div class="field">
                <label class="label">Address</label>
                <p class="control has-icons-left has-icons-right">
                  <input class="input is-medium is-success" type="text" placeholder="Address" value="">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
            </div>
            <div class="field is-grouped">
                <p class="control has-icons-left">
                  <span class="select">
                    <select class="is-medium">
                      <option selected>Choose A State</option>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </span>
                  <span class="icon is-small is-left">
                    <i class="fas fa-globe"></i>
                  </span>
                </p>
                <p class="control has-icons-left is-expanded has-icons-right">
                  <input class="input is-medium is-success" type="text" placeholder="Zipcode" value="">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
          </div>
          <div class="field">
            <label class="label is-expanded">Age Range (choose one)</label>
            <div class="buttons">
              <span class="button is-medium">22-30</span>
              <span class="button is-medium">30-45</span>
              <span class="button is-medium">45-60</span>
              <span class="button is-medium">45-60</span>
            </div>
          </div>
          <div class="field">
            <label>Phone</label>
            <div class="field-body">
              <div class="field is-expanded">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static is-medium">
                      +1
                    </a>
                  </p>
                  <p class="control is-expanded">
                    <input class="input is-medium" type="tel" placeholder="Your phone number">
                  </p>
                </div>
                <!-- <p class="help">Do not enter the first zero</p> -->
              </div>
            </div>
          </div>
        </div><!--end of form containter-->
        </div>
        <div class="column">
          <div class="people-container">
                <img src="../assets/face.png">
          </div>
        </div>
      </div>
    </div><!--This is end of HEro-->
    <div class="feature">

    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'home',
}
</script>

<style scoped lang="scss">
    .field:not(:last-child){
      margin-bottom: 2em;
    }
    .hero{
      width:100%;
      height:400px;
      background:whitesmoke;
      // * top, transparent red, faked with gradient */ 
      // linear-gradient(
      //   rgba(41, 128, 228, 0.9), 
      //    rgba(19, 18, 18, 0.1)
      // ),

      // url('../assets/disability.jpg');
      // background-position: center;
      // background-repeat: no-repeat;
      // background-size:cover;
    }
    .hero-title{
      width:100%;
      margin:1em auto;
    }
    .feature{
      background:slategray;
      height:400px;
    }
    .form-wrapper{
      background:white;
      width:95%;
      margin:0 auto;
      padding:1.4em;
      border-radius:3px;
      box-shadow:1px 15px 20px 0 grey;
    }
    h1,h4{
      color:#442d2d;
      margin:0 !important;
      padding:0;
      text-align: center;
    }
    h4{
      font-weight: 300;
    }
</style>