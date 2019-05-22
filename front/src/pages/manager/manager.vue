<template>
  <div class="manager">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Snark Factory</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/manager/collaborater-edit" class="nav-item nav-link">Collaborateur</router-link>
          <router-link to="/manager/planning-manager" class="nav-item nav-link">Planning</router-link>
          <router-link to="/manager/project" class="nav-item nav-link">Projet</router-link>
          <router-link to="/manager/statistic" class="nav-item nav-link">Statistique</router-link>
          <router-link to="/manager/suivi" class="nav-item nav-link">Suivi</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'manager',
  data () {
    return {
    }
  },
  computed:{
  }
  ,
  components: {
  },
  methods: {
  },
  created() {
  }
}
</script>

<style scoped>
</style>
