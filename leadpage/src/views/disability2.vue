<template>
  <div id="step1">
    <div class="background">
      <h1 class="hero-title is-size-3-mobile is-size-2-tablet is-size-1-desktop">This would be page 2</h1>
        <div class="form-wrapper">
        <!--Name-->
        <div class="field">
         <h3 class="form-title is-size-5-mobile is-size-4-tablet">Contact Information</h3>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input class="input is-medium" v-model="userData.firstName" type="text" placeholder="First Name">
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
                <input class="input is-medium" v-model="userData.lastName" type="text" placeholder="Last Name">
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
              <input class="input is-medium" v-model="userData.email" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
        </div>
        <div class="field">
            <!-- <label class="label">Email</label> -->
            <p class="control is-expanded has-icons-left has-icons-right">
              <input class="input is-medium" v-model="userData.zipCode" type="email" placeholder="Zipcode">
              <span class="icon is-small is-left">
                <i class="fas fa-globe"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
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
                    <input class="input is-medium" type="tel" v-model="userData.phoneNumber" placeholder="Your phone number">
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
                    <input type="radio" name="ageRange" v-model="userData.ageRange"> 
                    18-30
                  </label>
                  <label class="radio">
                    <input type="radio" name="ageRange" v-model="userData.ageRange">
                    31-40
                  </label>
                  <label class="radio">
                    <input type="radio" name="ageRange" v-model="userData.ageRange">
                    41-50
                  </label>
                  <label class="radio">
                    <input type="radio" name="ageRange" v-model="userData.ageRange">
                    50+
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div to="/step2" tag="button" @click="sendUserData();" class="button is-large is-fullwidth submit">Send Information</div>
          <p>By clicking Send Information, I authorize sing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
             'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum 
             as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
             have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div><!--end of form container-->
      </div><!--end of of background container-->
  
    


    <section class="section features">
       <h1 class="section-title is-size-3-mobile is-size-2-tablet is-size-1-desktop">Our Disability Experts Will Connect You With The Help You Deserve.</h1>
            <!-- <h4 class="title is-5">Get A Free Evaluation and Get The Benefits You Deserve!</h4> -->
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
        Phasellus nec iaculis mauris
        <br>
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
      Phasellus nec iaculis mauris.
     
      <br>
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
      Phasellus nec iaculis mauris
      <br>
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
  import axios from 'axios'
  export default {
    name: 'Header',
    data () {
      return {
        // options:['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'],
        userData:{
          firstName:'',
          lastName:'',
          email:'',
          phoneNumber:'',
          city:'',
          state:'',
          zipCode:'',
          ageRange:''
        }
      }
    }, 
    methods: {
      sendUserData(){
        axios.get(`http://api.zippopotam.us/us/${this.userData.zipCode}`)
           .then(function (response) {
            console.log(response.data);
            let locationData = response.data;
            console.log(locationData.places[0]["place name"])
            // this.userData.city = locationData.places[0]["place name"];
            // this.userData.state = locationData.places[0]["state"];
            alert(`${this.userData.firstName} ${this.userData.firstName} ${this.userData.email} ${this.userData.phoneNumber} ${this.userData.zipCode} ${this.userData.city} ${this.userData.state}`);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.$router.push('disability2');
      },
    },
  }
</script>

<style lang="scss" scoped>
    .submit{
      margin:1em auto;
      border:none;
      background:#32cc75;
      color:white;
      font-weight:600;
    }
    .input{
      box-shadow:none;
      background: white !important;
      opacity:1;
    }
    .background{
      background: url(../assets/security.jpg);
      background-position: center;
      background-size: contain;
      padding:2em 3em;
      min-height:800px;
      position:relative;
      padding:3em 0;
      background-repeat:no-repeat;
    }
    .hero-title{
      color:#2d2d2d;
      max-width:800px;
      font-weight: 600;
      width:90%;
      margin: 1em auto;
    }
    .form-title{
      color:white;
      font-weight:600;
      margin:0.5em auto;
    }
    .radio-button-container{
      padding: 1em 0.4em;
      background:whitesmoke;
      border-radius:4px;
    }
    .form-wrapper{
      width:97%;
      background:#131f46;
      max-width: 500px;
      padding: 1.2em 1.5em 2.5em 1.2em;
      border-radius:3px;
      position:absolute;
      left:1.5%;
      box-shadow: 5px 5px 25px 0px rgba(46,61,73,0.2);
      border-radius: 0.375rem;
      transition: all 0.3s ease;
      z-index: 100;
      p{
        font-size:0.8em;
        opacity:0.9;
        color:white;
      }
    }
    .radio{
      margin-right: 5px;
    }
    .label{
      color:white;
    }
    .features{
      background:white;
      padding:14em 0 0 0;
      .section-title{
        color:#131f46;
        margin:1.5em auto;
        text-align:center;
        font-weight: 600;
        max-width: 900px;
      }
      .column{
        padding:1em;
        margin:2em 2em;
        box-shadow: 5px 5px 25px 0px rgba(46,61,73,0.2);
        background:white;
        border-radius:4px;
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
    .card{
      -webkit-box-shadow:none;
      box-shadow: none;
    }
    
@media only screen and (min-width: 700px) {
    .form-wrapper{
      margin-left:20%;
    }
    .hero-title{
      max-width:500px;
      width:60%;
    }
    .features{
      background:white;
      padding:14em 0 0 0;
    }
}
@media only screen and (min-width: 1000px) {
  .form-wrapper{
    margin:4em 0;
  }
  .hero-title{
      color:#2d2d2d;
      position:absolute;
      left:560px;
      top:50px;
      background:none;
      text-align:left;
      max-width: 550px;
    }
    .features{
      background:white;
      padding:0 0 0 0;
    }
}
@media only screen and (min-width: 1300px) {
  .form-wrapper{
    margin:4em 0;
  }
  .hero-title{
      left:600px;
      top:50px;
      text-align:left;
      max-width: 650px;
    }
}
</style>

