<template>
  <nav>
    <router-link to="/">TODOLIST</router-link> |
    <router-link to="/about">NOTE</router-link> | 
    <router-link to="/calculator">CALCULATOR</router-link> | 
    <router-link to="/music">MUSIC</router-link> | 
    <router-link to="/find">FIND</router-link>
  </nav>
  <router-view/>
</template>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 50px;
  background-color: gray;
  border-bottom: 2px solid wheat;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: black;
}
router-link{
    background-color: gray;
}
</style>
