<template>
  <div class="project">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col-4">Name</th>
          <th scope="col-3">Id_Jira</th>
          <th scope="col-3">Nombre de Tickets</th>
          <th scope="col-1"></th>
        </tr>
      </thead>
      <tbody>
        <tr  :bgcolor="pro.color" class="color" v-for="pro in project.project" :key="pro.id_project">
          <td>{{pro.name}}</td>
          <td>{{pro.id_jira}}</td>
          <td>{{pro.nb_tickets}}</td>
          <td><button @click="deleteProject(pro.id_project)">Supprimer</button></td>
        </tr>
      </tbody>
    </table>
    <h2>Nouveau Projet</h2>
    <form>
      <div class="form-row align-items-center">
        <div class="col-sm-3 my-1">
          <input v-model="name" type="text" class="form-control" id="inlineFormInputName" placeholder="Name">
        </div>
        <div class="col-sm-3 my-1">
          <input v-model="id_jira" type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Id Jira">
        </div>
        <div class="col-sm-2 my-1">
          <input v-model="nb_tickets" type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Nombre de taches">
        </div>
        <div class="col-sm-2 my-1">
          <input v-model="color" type="color" class="form-control" id="inlineFormInputGroupUsername" placeholder="Couleur du projet">
        </div>
        <div class="col-sm-2 my-1">
          <button @click="newProject" type="button" class="btn btn-primary">Envoyer</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: 'project',
  data () {
    return {
      name: "",
      id_jira: "",
      nb_tickets: "",
      color: "",
    }
  },
  computed: {
    ...mapState(['project']),

  },
  components: {
  },
  methods: {
    callProject(){
      this.$store.dispatch("callProject")
    },
    newProject() {
      let payload = {
        name : this.name,
        id_jira : this.id_jira,
        nb_tickets : this.nb_tickets,
        color : this.color,
      }
      this.$store.dispatch("newProject", payload);
    },
    deleteProject(id) {
      let idProject = {
        id_project : id
      }
      this.$store.dispatch("deleteProject", idProject);
    },
  },
  created() {
    this.callProject()
  }
}
</script>

<style scoped>
  .project{
    margin : 50px 250px;;
  }
  h2 {
    padding-top: 150px;
  }

  .color{
    color: white;
  }
</style>
