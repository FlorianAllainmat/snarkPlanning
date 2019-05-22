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
  </div>
</template>

<script>
import axios from 'axios';
import connection from '@/helpers/connection'
import { mapState, mapActions, mapMutations } from "vuex";


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
    connectCollab({ name_collaboraters = this.name, password = this.password }) {
      axios
        .post(`${connection}collaboraters/connect`, { name_collaboraters, password })
        .then(col => {
          if(col.data !== null) {
            this.$router.push({
              name: 'collaborater'
            });
          } else {
            this.$router.push({
              name: "LoginCollaborater"
            })
          }
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  },
  created() {
  }
}
</script>
<style scoped>
</style>
