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
      <button @click="connectManager" type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import connection from '@/helpers/connection'
import { mapState, mapActions, mapMutations } from "vuex";


export default {
  name: 'manager',
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
    connectManager({
      name_manager = this.name,
      password = this.password }) {
      this.$store.dispatch('connectManager',  { name_manager, password })
      .then( () => this.$router.push({name: 'manager'}))
      .catch(err => console.log(err))
    }
  },
  created() {
  }
}
</script>
<style scoped>
</style>
