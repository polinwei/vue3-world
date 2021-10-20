<template>
  <div id="nav">
    <router-link :to="{ name: 'EventList' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <span id="lang">
      <label for="locale">{{ $t('common.language') }}: </label>
      <select v-model="$i18n.locale">
        <option value="en-US">英文 (English)</option>
        <option value="zh-TW">中文 (Chinese)</option>
      </select>
    </span>
    |
    <a href="https://github.com/polinwei/vue3-world">polinwei/vue3-world</a>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
