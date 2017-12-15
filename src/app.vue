<template>
  <div class="app">
    <main class="layout-wrapper">
      <header class="layout-header header">
        <div class="header-logo logo">
          <div class="logo_v">v</div>
          <div class="logo_rest">
            <a target="_blank" href="https://vuejs.org/">uejs</a> + 
            <a target="_blank" href="https://github.com/parcel-bundler/parcel">Parcel-bundle</a>
          </div>
        </div>
        <router-link to="/">Go to home page</router-link>
        <router-link to="/details">Go to details page</router-link>
      </header>
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </main>
    <footer class="layout-footer">
      <i class="fa fa-github-alt" aria-hidden="true"></i> <a href="https://github.com/noveogroup-amorgunov/parcel-vuejs-starterkit">See on github</a> <small>(Stars: <strong>{{githubStars}}</strong>)</small>, {{ year }}
    </footer>
  </div>
</template>
<style lang="less">
  @vue-color: #41b883;

  .app {
    display: flex;
    min-height: 100vh;
    height: 100%;
    flex-direction: column;
    max-width: 760px;
    margin: 0 auto;
  }

  .layout-wrapper {
    flex: 1;
    background-color: #f5fef5;
  }

  .layout-footer, .layout-header {
    padding: 30px 20px;
    text-align: center;
    background-color: #eee;
  }

  .layout-header {
    background-color: @vue-color;

    a {
      color: white;
    }
  }

  .view {
    padding: 30px;
  }

  .logo {
    padding-bottom: 50px;
    &_v {
      display: inline-block;
      border: 2px solid white;
      color: white;
      font-size: 18px;
      font-weight: bold;
      width: 25px;
      text-align: center;
      margin-right: 5px;
    }
    &_rest {
      display: inline-block;
      color: white;
      font-size: 14px;
      margin-right: 10px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .2s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
<script>
export default {
  name: 'app',
  data() {
    return {
      githubStars: '',
    };
  },
  mounted() {
    this.fetchGithubStarts()
  },
  computed: {
    year() {
      return (new Date()).getFullYear();
    },
  },
  methods: {
    fetchGithubStarts() {
      this.githubStars = 5;
      return fetch('https://api.github.com/repos/noveogroup-amorgunov/parcel-vuejs-starterkit')
        .then(response => response.json())
        .then(data => this.githubStars = data.stargazers_count);
    }
  }
}
</script>
