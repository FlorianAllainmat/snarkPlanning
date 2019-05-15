<template>
<div>
  <div>
      <h1>
        Snark Planning
      </h1>
    </div>
  <button>
    <router-link to="/login-manager">Manager</router-link>
  </button>
  <button>
    <router-link to="/login-collaborater">Collaborateur</router-link>
  </button>
</div>
</template>

<script>
export default {
  name: 'Acceuil',
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
