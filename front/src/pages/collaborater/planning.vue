<template>
  <div class="planning">
        <div class="row">
      <div class="col-1">
        <label>Collaborateur</label>
        <select v-model="filterCollab" class="form-control">
          <option  v-bind:value="collab.id_collaboraters" v-for="collab in collaborater.collaborater" :key="collab.id_collaboraters">
            {{collab.name_collaboraters}}
          </option>
        </select>
        <label>Semaine</label>
        <select v-model="filterWeek" class="form-control">
          <option v-bind:value="week" v-for="(week, i) in choiceWeek" :key="i">
            {{week}}
          </option>
        </select>
      </div>
      <div class="col-11">
        <table class="table">
          <tr v-for="tic in filterTickets" :key="tic.id_tickets_progress">
            <th>
              <div :bgcolor="tic.color" class="att1">{{tic.name}}</div>
              <div class="att2">Week:{{tic.week}}</div>
              <div class="att3">{{tic.name_collaboraters}}</div>
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
  name: 'planning',
  data () {
    return {
      choiceWeek : 53,
      filterCollab: "",
      filterWeek: "",
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
  padding: 0px;
  margin: 0px;
  width: 50px;
}
.case_ticket{
  padding: 1px;
}
.nb_ticket {
  padding: 30px;
  margin: 0px;
  width: 40px;
}
</style>
