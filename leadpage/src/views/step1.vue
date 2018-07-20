<template>
  <div id="step1">
    <div class="is-fluid dot-background">
      <div class="columns">
        <div class="column">
          <div class="hero-title is-hidden-tablet">
            <h1 class="title is-2">A Disability Keeping You From working?</h1>
            <h4 class="title is-5">Get A <span>Free Evaluation</span> and Get The Benefits You Deserve!</h4>
          </div>
          <div class="form-wrapper">
            <!--Name-->
            <div class="field">
             <h3 class="title is-4">Contact Information</h3>
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
                <!-- <label class="label">Email</label> -->
                <p class="control is-expanded has-icons-left has-icons-right">
                  <input class="input is-medium" type="email" placeholder="Email" value="">
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
                  <input class="input is-medium" type="text" placeholder="Address" value="">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
            </div>
            <div class="field is-grouped">
                <p class="control">
                  <span class="select">
                    <select class="is-medium is-expanded" style="font-size:1.2em;">
                      <option selected>Choose A State</option>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </span>
                </p>
                <p class="control is-expanded has-icons-right">
                  <input class="input is-medium" type="text" placeholder="Zipcode" value="">
                  <!-- <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span> -->
                </p>
          </div>
          <div class="field">
            <label class="label">Age Group</label>
            <div class="field-body radio-button-container">
              <div class="field is-narrow">
                <div class="control">
                  <label class="radio">
                    <input type="radio" name="member">
                    18-30
                  </label>
                  <label class="radio">
                    <input type="radio" name="member">
                    31-40
                  </label>
                  <label class="radio">
                    <input type="radio" name="member">
                    41-50
                  </label>
                  <label class="radio">
                    <input type="radio" name="member">
                    50+
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Phone Number</label>
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
          <!-- <router-link to="/step2" class="button is-large is-fullwidth" tag="button">foo</router-link> -->
          <router-link to="/step2" tag="button" class="button is-large is-fullwidth" style="margin-top:1.5em;background:#d82377;;color:white;font-weight:600;">Send Information</router-link>
        
        </div><!--end of form containter-->
        </div>
        <div class="column is-hidden-mobile">
          <div class="people-container">
            <div class="hero-title">
              <h1 class="title is-2">Disability Keeping You From working?</h1>
              <h4 class="title is-5">Get A Free Evaluation and Get The Benefits You Deserve!</h4>
            </div>
            <img src="../assets/face-hero.jpg">
          </div>
        </div>
      </div>
    </div><!--This is end of HEro-->
    


    <section class="section features">
      <div class="feature-title">
            <h1 class="title is-2">Is A Disability Keeping You From working?</h1>
            <!-- <h4 class="title is-5">Get A Free Evaluation and Get The Benefits You Deserve!</h4> -->
          </div>
      <div class="columns">
        <div class="column">
          <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="../assets/feature2.jpg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">Feature</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
        </div>
        <div class="column">
         <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="../assets/feature3.jpg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      
      <div class="media-content">
        <p class="title is-4">Feature</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
        </div>
        <div class="column">
         <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="../assets/feature1.jpg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">Feature</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
    <section class="section disclaimer">
      <p>This website is owned and operated by Spartus Disability Network (spartus.com). This website is owned and This 
        website is owned and operated by Spartus (spartus.com). operated by American Disability Network (spartus.com). By registering for. © 2018 spartus.com</p>
    </section>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'step1',
}
</script>

<style lang="scss">
    // .field:not(:last-child){
    //    margin-bottom: 1.1em;
    // }
    #step1{
      max-width:1600px;
      margin:0 auto;
    }
    
    .dot-background{
      // background:background-color: #fdfdfd;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%234e4b52' fill-opacity='0.19' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
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
      width:90%;
      margin:3em auto;
      span{
        font-weight: 900;
      }
    }
    // .hero-title > h1{
    //   text-align:left;
    // }
    //  .hero-title > h4{
    //   text-align:left;
    // }
    .features{
      background:#0384CA;
    }
    .radio-button-container{
      border: 1px solid lightgrey;
      padding: 1em 0.4em;
      background:whitesmoke;
      border-radius:4px;
    }
    .form-wrapper{
      background:white;
      width:95%;
      margin:4em auto;
      max-width:600px;
      padding:2em 1.5em;
      border-radius:3px;
      box-shadow: 5px 5px 25px 0px rgba(46,61,73,0.2);
      border-radius: 0.375rem;
      transition: all 0.3s ease;
    }
    h1,h4{
      color:#442d2d;
      margin:0 !important;
      padding:0;
      text-align: center;
    }
    h4{
      font-weight: 300 !important;
    }
    input,select{
      background:whitesmoke !important;
    }
    .radio{
      margin-right: 15px;
    }
    .label{
      color:#565151
    }
    .features{
      .column{
        padding:1em;
        margin:2em 2em;
        box-shadow: 5px 5px 25px 0px rgba(46,61,73,0.2);
        background:white;
        border-radius:4px;
      }
      h1{
        color:white;
        margin:0 0 2em 0 !important;
      }
      h3{
        font-size:1.5em;
        font-weight: 600;
        margin:1em 0;
      }
      p{
        opacity:0.9;
        line-height:27px;
      }
    }
    .disclaimer{
      p{
        font-size:0.8em;
        opacity:0.9;
        width:90%;
        margin:0 auto;
      }
    }
</style>