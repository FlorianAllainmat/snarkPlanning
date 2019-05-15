<template>
  <div class="hello">
    <div>
      <h1>
        Snark Planning
      </h1>
    </div>
    <div>
      Manager
      <input/>
    </div>
    <div>
      Mot de passe
      <input />
    </div>
    <div>
      <button>
        <router-link to="/manager">Login</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'manager',
  data () {
    return {

    }
  },
  computed: {
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
