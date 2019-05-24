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
        <label>Semaine {{momentWeek}}</label>
        <select v-model="filterWeek" class="form-control">
          <option selected></option>
          <option v-bind:value="week" v-for="(week, i) in choiceWeek" :key="i">
            {{week}}
          </option>
        </select>
      </div>
    </div>
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
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import moment from 'moment';

export default {
  name: 'planningCollaborater',
  data () {
    return {
      choiceWeek : 53,
      filterCollab: "",
      filterWeek: moment(new Date(), "MM-DD-YYYY").week(),
      momentWeek: moment(new Date(), "MM-DD-YYYY").week(),
    }
  },
  computed: {
    ...mapState(['collaborater', 'project', 'ticketsProgress']),
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
  },
  components: {

  },
  methods: {
  },
  created() {
    this.$store.dispatch("callCollaborater")
    this.$store.dispatch("callProject")
    this.$store.dispatch("callTicketsProgress")
  }
}
</script>

<style scoped>
.table {
  margin: 80px 20px;
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
  padding: 20px;
  margin: 0px;
}
</style>
