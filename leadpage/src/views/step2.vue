<template>
  <div>
    <div class="hero">
      
      <div class="columns">
        <div class="column">

          <div class="hero-title">
            <h1 class="title is-2">Is A Disability Keeping You From working?</h1>
            <h4 class="title is-4">Get A Free Evaluation and Get The Benefits You Deserve!</h4>
          </div>

          <div class="form-wrapper">
            <h3 class="title is-4">Qualification Questions</h3>
            <div class="field question-container">
              
               <div class="columns">
                 <div class="column is-three-fifths">
                   Do you expect to be out of work for at least a year?
                 </div>
                 <div class="column">
                   <div class="control">
                    <label class="radio">
                      <input type="radio" name="q1">
                      YES
                    </label>
                    <label class="radio">
                      <input type="radio" name="q1" checked>
                      NO
                    </label>
                  </div>
                 </div>
               </div>

                <div class="columns">
                 <div class="column is-three-fifths">
                   Since 2008 have you worked at least 5 years?
                 </div>
                 <div class="column">
                   <div class="control">
                    <label class="radio">
                      <input type="radio" name="q2">
                      YES
                    </label>
                    <label class="radio">
                      <input type="radio" name="q2">
                      NO
                    </label>
                  </div>
                 </div>
               </div>

                <div class="columns">
                 <div class="column is-three-fifths">
                   Are you currently receiving Social Security Disability benefits?
                 </div>
                 <div class="column">
                   <div class="control">
                    <label class="radio">
                      <input type="radio" name="q3">
                      YES
                    </label>
                    <label class="radio">
                      <input type="radio" name="q3">
                      NO
                    </label>
                  </div>
                 </div>
               </div>

                <div class="columns">
                 <div class="column is-three-fifths">
                   Is an attorney helping you with your case?
                 </div>
                 <div class="column">
                   <div class="control">
                    <label class="radio">
                      <input type="radio" name="q4">
                      YES
                    </label>
                    <label class="radio">
                      <input type="radio" name="q4" checked>
                      NO
                    </label>
                  </div>
                 </div>
               </div>

                <div class="columns">
                 <div class="column is-three-fifths">
                   Are you receiving treatment from a Doctor?
                 </div>
                 <div class="column">
                   <div class="control">
                    <label class="radio">
                      <input type="radio" name="q5">
                      YES
                    </label>
                    <label class="radio">
                      <input type="radio" name="q5" checked>
                      NO
                    </label>
                  </div>
                 </div>
               </div>
               <div class="field">
                  <label class="label">Describe Your Disability</label>
                  <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

          <button class="button is-large is-fullwidth" style="margin-top:1.5em;background:orange;color:white;font-weight:600;">Send Information</button>
          </div><!--end of form containter-->
        </div>
        <div class="column is-hidden-mobile">
          <div class="people-container">
                <img src="../assets/face.png">
          </div>
        </div>
      </div><!--End of Columns-->
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

<style  lang="scss" src="bulma">
    // .field:not(:last-child){
    //    margin-bottom: 1.1em;
    // }
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
      width:90%;
      margin:1.5em auto 2em auto;
    }
    .feature{
      background:#0384CA;
      height:450px;
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
      margin:0 auto;
      padding:2em 1.5em;
      border-radius:3px;
      box-shadow: 5px 5px 25px 0px rgba(46,61,73,0.2);
      border-radius: 0.375rem;
      transition: all 0.3s ease;
    }
    .form-wrapper > .column{
      font-weight:bold;
    }
    .question-container{
      border:1px solid lightgrey;
      padding:1.4em;
      border-radius:4px;
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
</style>