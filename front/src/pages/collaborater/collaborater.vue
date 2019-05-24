<template>
  <div class="collaborater">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Snark Factory</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/collaborater/planning-collaborater" class="nav-item nav-link">Planning</router-link><span v-if="isLoggedIn"></span>
          <router-link to="/collaborater/validation-planning" class="nav-item nav-link">Validation planning</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'collaborater',
  data () {
    return {
    }
  },
  computed: {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
        },
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
