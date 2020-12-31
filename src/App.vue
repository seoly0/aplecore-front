<template>
  <div id="nav">
    <div>김영서 정처기 실기 떨어짐</div>
    <div>아아아아악!!!</div>
    <div>오와아아아ㅏㄱ</div>
    <div>dmdmdmddm</div>
    <div>정신 나갈 것 같다</div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
