<template>
  <div>
    Security Page
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'step2',
}
</script>

<style lang="scss">
    // .field:not(:last-child){
    //    margin-bottom: 1.1em;
    // }
     #step2{
      
    }
    .dot-background{
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
      margin:1.5em auto 2em auto;
    }
    .feature{
      background:#0384CA;
      height:450px;
    }
    .radio-button-container{
      padding: 1em 0.4em;
      background:whitesmoke;
      border-radius:4px;
    }
    .form-wrapper{
      background:white;
      width:95%;
      margin:2em auto;
      padding:2em 1.5em;
      border-radius:3px;
      box-shadow: 5px 5px 25px 0px rgba(46,61,73,0.2);
      border-radius: 0.375rem;
      transition: all 0.3s ease;
    }
    .form-wrapper > .column{
      font-weight:bold;
    }
    #question-container{
      border:1px solid whitesmoke;
      padding:1.4em;
      border-radius:4px;
      p{
        font-weight: 600 !important;  
      }
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
    input,select,textarea{
      background:whitesmoke;
    }
    .radio{
      margin-right: 15px;
    }
    .field{
      color:#565151;
    }
    .features{
      .column{
        padding:0.8em;
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