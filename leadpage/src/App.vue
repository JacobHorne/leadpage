<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/logo.jpg" style="max-width:130px;margin:0.8em 2em">
      <router-link to="/">Step1</router-link>
      <router-link to="/step2">Step2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width:1400px;
  margin:0 auto;
  border:1px solid whitesmoke;
}
#nav {
  box-shadow: 0px 8px 8px 0px rgba(19, 119, 201, 1) !important;
  z-index: 100;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
