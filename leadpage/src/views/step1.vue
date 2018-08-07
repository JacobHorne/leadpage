<template>
  <div id="step1">
    
    <div class="background" style="min-height:800px;position:relative;padding:3em 0;">
        <h1 class="title is-2" style="position:relative;top:50px;background:rgba(0,0,0,0.1);padding:0.5em 0;">Our Experts Will Help You Find the Right Disability Systemy</h1>
        <div class="form-float" style="min-height:500px;position:absolute;">
            <div class="form-wrapper" style="background:dark;">
            <!--Name-->
            <div class="field">
             <h3 class="title is-4">Our Experts Will Help You Find the Right Disability System</h3>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left has-icons-right">
                    <input class="input is-medium" v-model="firstName" type="text" placeholder="First Name">
                    <span class="icon is-small is-left ">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                 <div class="field is-expanded is-grouped">
                  <p class="control is-expanded has-icons-left has-icons-right">
                    <input class="input is-medium" v-model="lastName" type="text" placeholder="Last Name">
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
            <div class="field is-grouped">
                <p class="control">
                 
                    <select class="select is-medium">
                      <option selected>Choose A State</option>
                      <option v-for="option in options" :key="option" :value="option.value">
                            {{option}}
                      </option>
                    </select>
                 
                </p>
                <p class="control is-expanded has-icons-right">
                  <input class="input is-medium" type="text" placeholder="Zipcode" value="">
                  <!-- <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span> -->
                </p>
          </div>
          <div class="field">
            <!-- <label class="label">Phone Number</label> -->
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
          
          <!-- <router-link to="/step2" class="button is-large is-fullwidth" tag="button">foo</router-link> -->
          <router-link to="/step2" tag="button" class="button is-large is-fullwidth" style="margin:1.5em auto;border:none;background:seagreen;color:white;font-weight:600;">Send Information</router-link>
          <p>By clicking Send Information, I authorize security companies including ADT, Alarm Advisors, Alliance, FrontPoint, LifeShield, Brinks Home Security, Protect America, Protect Your Home – ADT Authorized Premier Provider, Protection1, SafeStreetsUSA – ADT Authorized Dealer, Vivint, their dealers, home services companies and marketing partners to contact me about security offers by phone calls and text messages to the number I provided above. I authorize that these marketing communications may be delivered to me using an automatic telephone dialing system or by prerecorded message. I understand that my consent is not a condition of purchase and that standard message and data rates may apply. I agree to the Terms of Service and Privacy Policy.</p>
        </div><!--end of form containter-->
      </div>
    </div>
    


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
export default {
  name: 'Header',
  data () {
    return {
      options:['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'],
      userData:{
        firstName:'',
        lastName:'',
        email:'',
        state:'',
        phone:'',
        zipCode:'',
        ageRange:''
      }
    }

  }
}
</script>

<style lang="scss" scoped>
    .background{
      // background: url(../assets/grandparents.jpg);
       background:linear-gradient(rgba(250, 249, 250, 0.1),rgba(30, 198, 167, 0.1)),url(../assets/grandparents.jpg);
      // background: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
      padding:2em 3em;
    }
    .title.is-2{
      color:white;
    }
    #step1{
      max-width:1600px;
      margin:0 auto;
    }
    .hero-title{
      width:90%;
      margin:1em auto;
      span{
        font-weight: 900;
      }
    }
    .features{
      background:#0384CA;
    }
    .section{
      margin:20em 0 0 0 !important;
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
      margin: 5em auto;
      max-width:600px;
      padding: 3em 2.8em;
      border-radius:3px;
      margin-left:3%;
      box-shadow: 5px 5px 25px 0px rgba(46,61,73,0.2);
      border-radius: 0.375rem;
      transition: all 0.3s ease;
      z-index: 100;
      p{
        font-size:0.6em;
        opacity:0.8;
      }
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
@media only screen and (min-width: 800px) {
    .form-wrapper{
      margin-left:17%;
    }
}
</style>

