<template>
  <div class="planning">
    <div>
      <div class="row col-12">
        <div class="offset-5 col-2 offset-5">
          <label>Collaborateur</label>
          <select v-model="filterCollab" class="form-control">
            <option selected></option>
            <option  v-bind:value="collab.id_collaboraters" v-for="collab in collaborater.collaborater" :key="collab.id_collaboraters">
              {{collab.name_collaboraters}}
            </option>
          </select>
        </div>
      </div>
      <div class="row col-12">
        <div class="offset-4 col-1">
          <button @click="putWeek(-1)" :value="-1">-</button>
        </div>
        <div class="col-2">
          <label>Semaine</label>
          <select v-model="week" class="form-control">
            <option selected></option>
            <option v-bind:value="week" v-for="(week, i) in choiceWeek" :key="i">
              {{week}}
            </option>
          </select>
        </div>
        <div class="offset-1 col-1">
          <button @click="putWeek(1)" :value="1">+</button>
        </div>
      </div>
      <div class="col-12">
        <table class="table">
          <tr v-for="tic in filterTickets" :key="tic.id_tickets_progress">
            <th :bgcolor="tic.color" class="att1">
                <div>{{tic.name}}</div>
                <div>Week:{{tic.week}}</div>
                <div>{{tic.name_collaboraters}}</div>
            </th>
            <th class="case_ticket" v-for="(nb, id) in tic.nb_ticket" :key="id">
              <td :bgcolor="tic.color" class="nb_ticket">{{nb}}</td>
            </th>
            <th>
              <button @click="upTickets(tic.id_tickets_progress, tic.nb_ticket)">+</button>
              <button @click="downTickets(tic.id_tickets_progress, tic.nb_ticket)">-</button>
              <button @click="deleteLotTickets(tic.id_tickets_progress)">Sup</button>
            </th>
          </tr>
        </table>
      </div>
    </div>
    <div>
        <h2>Creation Tickets</h2>
      <form class="row">
        <div class="form-group col-1">
          <label for="exampleFormControlSelect2">Semaine</label>
          <select v-model="week" class="form-control">
            <option v-bind:value="week" v-for="(week, i) in choiceWeek" :key="i">
              {{week}}
            </option>
          </select>
        </div>
        <div class="form-group col-3">
          <label for="exampleFormControlSelect1">Projet</label>
          <select v-model="idProject" class="form-control">
            <option v-bind:value="pro.id_project" v-for="pro in project.project" :key="pro.id_project">
              {{pro.name}}
            </option>
          </select>
        </div>
        <div class="form-group col-3">
          <label for="exampleFormControlSelect2">Collaborateur</label>
          <select v-model="idCollab" class="form-control">
            <option v-bind:value="collab.id_collaboraters" v-for="collab in collaborater.collaborater" :key="collab.id_collaboraters">
              {{collab.name_collaboraters}}
            </option>
          </select>
        </div>
        <div class="form-group col-3">
          <label for="exampleFormControlSelect3">Nombre de quart de journée</label>
          <select v-model="nbTicket" class="form-control">
            <option v-bind:value="nbTicket" v-for="(nbTicket, n) in choiceTicket" :key="n">
              {{nbTicket}}
            </option>
          </select>
        </div>
        <div class="col-auto">
          <button @click="newTicketsProgress" type="button" class="btn btn-primary">Envoyer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: 'planning',
  data () {
    return {
      choiceWeek : 53,
      choiceTicket : 20,
      idCollab : "",
      idProject: "",
      nbTicket: 0,
      week: 0,
      filterCollab: "",
    }
  },
  computed: {
    ...mapState(['collaborater', 'project', 'ticketsProgress']),
    filterTickets() {
        const ticketsProgress = this.$store.state.ticketsProgress.ticketsProgress;
        if(this.filterCollab){
            if(this.week) {
                return ticketsProgress.filter(ticketCollab => ticketCollab.collaboraters_id_collaboraters === this.filterCollab && ticketCollab.week === this.week)
            }
            return ticketsProgress.filter(ticketCollab => ticketCollab.collaboraters_id_collaboraters === this.filterCollab)
        } else {
            if(this.week) {
                return ticketsProgress.filter(ticketCollab => ticketCollab.week === this.week)
            }
            return ticketsProgress
        }
    },
        },
  components: {
  },
  methods: {
    callAll(){
      this.$store.dispatch("callTicketsProgress")
      this.$store.dispatch("callProject")
      this.$store.dispatch("callCollaborater")
    },
    putWeek(modif) {
      this.week += modif;
    },
    newTicketsProgress() {
      let payload = {
        collaboraters_id_collaboraters: this.idCollab,
        project_id_project: this.idProject,
        nb_ticket: this.nbTicket,
        week: this.week,
      }
      this.$store.dispatch("newTicketsProgress", payload);
    },
    deleteLotTickets(id) {
      let idLotTickets = {
        id_tickets_progress : id
      }
      this.$store.dispatch("deleteLotTickets", idLotTickets);
    },
    upTickets(id, nb){
      nb += 1
      let idLotTickets = {
        id_tickets_progress : id,
        nb_ticket : nb,
      }
      this.$store.dispatch("putTicketsProgress", idLotTickets);
    },
    downTickets(id, nb){
      nb -= 1
      let idLotTickets = {
        id_tickets_progress : id,
        nb_ticket : nb
      }
      this.$store.dispatch("putTicketsProgress", idLotTickets)
    }
  },
  created() {
    this.callAll()
  }
}
</script>

<style scoped>

.table {
  padding: 0px;
  margin: 0px;
}
.case_ticket{
  padding: 1px;
}
.nb_ticket {
  color : white;
  padding: 40px;
  margin: 0px;
}
</style>
