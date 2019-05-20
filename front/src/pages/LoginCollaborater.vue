<template>
  <div class="hello">
    <div>
      <h1>
        Snark Planning
      </h1>
    </div>
    <form class="col-4">
      <div class="form-group col-4">
        <label>Nom</label>
        <input v-model="name" type="text" class="form-control" placeholder="Entrer Nom">
      </div>
      <div class="form-group col-4">
        <label>Password</label>
        <input v-model="password" type="text" class="form-control" placeholder="Password">
      </div>
      <button @click="connectCollab" type="submit" class="btn btn-primary">Login</button>
    </form>
      <button>
        <router-link to="/collaborater">Login</router-link>
      </button>
  </div>
</template>

<script>
export default {
  name: 'collaborater',
  data () {
    return {
      name: "",
      password: "",
    }
  },
  computed: {
        },
  components: {
  },
  methods: {
    connectCollab(){
      let payload = {
        name_collaboraters : this.name,
        password : this.password
      }
      this.$store.dispatch("connectCollaborater", payload);
      console.log(status)
      if(status === 204) {
          this.$router.push({
            name: 'collaborater'
          });
        } else {
          this.$router.push({
            name: "LoginCollaborater"
          })
        }
    }
  },
  created() {
  }
}
</script>

<style scoped>
</style>
