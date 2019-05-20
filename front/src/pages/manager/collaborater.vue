<template>
  <div class="collaborater">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="collab in collaborater.collaborater" :key="collab.id_collaboraters">
          <td>{{collab.name_collaboraters}}</td>
          <td><button @click="deleteCollaborater(collab.id_collaboraters)">Supprimer</button></td>
        </tr>
      </tbody>
    </table>
    <h2>Ajouter Collaborateur</h2>
    <form>
      <div class="form-row align-items-center">
        <div class="col-sm-3 my-1">
          <input v-model="name" type="text" class="form-control" id="inlineFormInputName" placeholder="Name">
        </div>
        <div class="col-sm-3 my-1">
          <input v-model="password" type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Mot de passe">
        </div>
        <div class="col-auto my-1">
          <button @click="newCollaborater" type="button" class="btn btn-primary">Envoyer</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: 'collaborater',
  data () {
    return {
      name: "",
      password:"",
    }
  },
  computed: {
    ...mapState(['collaborater'])
        },
  components: {
  },
  methods: {
    callCollab(){
      this.$store.dispatch("callCollaborater")
    },
    newCollaborater() {
      let payload ={
        name_collaboraters : this.name,
        password : this.password,
      }
      this.$store.dispatch("newCollaborater", payload);
      this.name = "";
      this.password = "";
    },
    deleteCollaborater(id) {
      let idCollaborater = {
        id_collaboraters : id
      }
      this.$store.dispatch("deleteCollaborater", idCollaborater);
    }
  },
  created() {
    this.callCollab()
  }
}
</script>

<style scoped>
</style>
