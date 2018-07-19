<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/logo.jpg" style="max-width:160px;">
      <!-- <router-link to="/">Step1</router-link>
      <router-link to="/step2">Step2</router-link> -->
    </div>
    <router-view/>
    <footer>
      <router-link to="/">Privacy Policy</router-link>
      <router-link to="/step2">Disclaimer</router-link>
    </footer>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* max-width:1400px; */
  margin:0 auto;
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
</style>
