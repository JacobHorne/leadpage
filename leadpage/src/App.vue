<template>
  <div id="app">
    <div id="nav" style="position:absolute;">
      <img @click="home()" class="logo" src="./assets/spartus-white.png">
      <!-- <router-link to="/Security" style="margin:0 20px;color:white;">Security</router-link>
      <router-link to="/Medicare" style="margin:0 20px;color:white;">Medicare Plans</router-link> -->
    </div>
    <router-view/>
    <footer>
      <router-link to="/">Privacy Policy</router-link>
      <router-link to="/disability">Disclaimer</router-link>
    </footer>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin:0 auto;
  /* background:black; */
}
.logo{
  max-width:130px;
}
#nav {
  z-index: 100;
  padding:1em 2em;
  box-shadow: 5px 5px 25px 0px rgba(46,61,73,0.2);
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
footer{
  height:50px;
  padding:1em;
  background:#2d2d2d;
  text-align:center;
}
footer a{
  color:white;
  margin-right:10px;
  font-weight: 600;
}
@media only screen and (min-width: 700px) {
  .logo{
    max-width:150px;
  }
}
@media only screen and (min-width: 1000px) {
  .logo{
    max-width:180px;
  }
}
</style>
<script>
  export default {
  methods: {
    home() {
      this.$router.push('/')
    }
  }
}
</script>