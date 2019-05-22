<template>
  <div class="planning">
    <div>
      <div class="offset-5 col-2">
        <label>Collaborateur</label>
          <select v-model="filterCollab" class="form-control">
            <option selected></option>
            <option  v-bind:value="collab.id_collaboraters" v-for="collab in collaborater.collaborater" :key="collab.id_collaboraters">
              {{collab.name_collaboraters}}
            </option>
          </select>
      </div>
      <div class="offset-5 col-2">
        <label>Semaine</label>
        <select v-model="filterWeek" class="form-control">
          <option selected></option>
          <option v-bind:value="week" v-for="(week, i) in choiceWeek" :key="i">
            {{week}}
          </option>
        </select>
      </div>
    </div>
    <div class="att row">
      <div class="col-6">
        <h1>Taches Programmées</h1>
        <table class="table">
          <tr :bgcolor="tic.color" v-for="tic in filterTickets" :key="tic.id_tickets_progress">
            <th class="att1">
              <div :bgcolor="tic.color">{{tic.name}}</div>
              <div>Week:{{tic.week}}</div>
              <div>{{tic.name_collaboraters}}</div>
            </th>
            <th class="case_ticket" v-for="(nb, id) in tic.nb_ticket" :key="id">
              <td :bgcolor="tic.color" class="nb_ticket">{{nb}}</td>
            </th>
          </tr>
        </table>
      </div>
      <div class="col-6">
        <h1>Taches Effectuées</h1>
        <table class="table">
          <tr :bgcolor="tic.color" v-for="tic in filterTicketsB" :key="tic.id_tickets_progress">
            <th class="att1">
              <div :bgcolor="tic.color">{{tic.name}}</div>
              <div>Week:{{tic.week}}</div>
              <div>{{tic.name_collaboraters}}</div>
            </th>
            <th class="case_ticket" v-for="(nb, id) in tic.nb_ticket" :key="id">
              <td :bgcolor="tic.color" class="nb_ticket">{{nb}}</td>
            </th>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: 'suivi',
  data () {
    return {
      choiceWeek : 53,
      filterCollab: "",
      filterWeek: "",
    }
  },
  computed: {
    ...mapState(['collaborater', 'project', 'ticketsProgress', 'ticketsFinish']),
    filterTickets() {
        const ticketsProgress = this.$store.state.ticketsProgress.ticketsProgress;
        if(this.filterCollab){
            if(this.filterWeek) {
                return ticketsProgress.filter(ticketCollab => ticketCollab.collaboraters_id_collaboraters === this.filterCollab && ticketCollab.week === this.filterWeek)
            }
            return ticketsProgress.filter(ticketCollab => ticketCollab.collaboraters_id_collaboraters === this.filterCollab)
        } else {
            if(this.filterWeek) {
                return ticketsProgress.filter(ticketCollab => ticketCollab.week === this.filterWeek)
            }
            return ticketsProgress
        }
    },
    filterTicketsB() {
        const ticketsFinish = this.$store.state.ticketsFinish.ticketsFinish;
        if(this.filterCollab){
            if(this.filterWeek) {
                return ticketsFinish.filter(ticketCollab => ticketCollab.collaboraters_id_collaboraters === this.filterCollab && ticketCollab.week === this.filterWeek)
            }
            return ticketsFinish.filter(ticketCollab => ticketCollab.collaboraters_id_collaboraters === this.filterCollab)
        } else {
            if(this.filterWeek) {
                return ticketsFinish.filter(ticketCollab => ticketCollab.week === this.filterWeek)
            }
            return ticketsFinish
        }
    },
  },
  components: {

  },
  methods: {
  },
  created() {
    this.$store.dispatch("callCollaborater");
    this.$store.dispatch("callProject");
    this.$store.dispatch("callTicketsProgress");
    this.$store.dispatch("callTicketsFinish");
  }
}
</script>

<style scoped>

.att{
  margin: 80px 0px;
}
.table {
  margin: 80px 0px;
}
.att1{
  color: white;
}
.case_ticket{
  border: 1px solid white;
}
.nb_ticket {
  vertical-align: center;
  border : none;
  color : white;
  margin: 0px;
}
</style>
