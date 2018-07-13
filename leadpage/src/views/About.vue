<template>
  <div>
    <div class="hero">
      <h1 class="title is-2">Disability Benefits</h1>
      <div class="form-container">
        
      <!-- <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input">
        </div>
      </div> -->

      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="Text input" value="bulma">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <p class="help is-success">This username is available</p>
      </div>

      <!-- <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
      </div> -->

      <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox">
            I agree to the <a href="#">terms and conditions</a>
          </label>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="radio">
            <input type="radio" name="question">
            Yes
          </label>
          <label class="radio">
            <input type="radio" name="question">
            No
          </label>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-text">Cancel</button>
        </div>
      </div>



      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'about',
}
</script>

<style scoped lang="scss">
    .hero{
      width:100%;
      height:400px;
      
      background: 
      /* top, transparent red, faked with gradient */ 
      linear-gradient(
        rgba(3, 119, 255, 0.45), 
        rgba(4, 200, 222, 0.90)
      ),
      url('../assets/disability.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size:cover;
    }
    .form-container{
      background:white;
      width:90%;
      margin:0 auto;
      padding:1.4em;
      border-radius:3px;
      box-shadow: 0 8px 6px -6px black;
    }
    h1{
      color:white;
      text-align: center;
    }
</style>
