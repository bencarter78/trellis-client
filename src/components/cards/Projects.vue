<template>
  <div class="columns is-multiline">
    <div class="column is-3" v-for="item in items">
      <trellis-card>
        <div slot="title">{{ item.name }}</div>

        <div slot="content">
          {{ item.description }}
        </div>

        <div slot="footer">
          <div class="card-footer-item is-pulled-right">
            <router-link
              :to="{
                name: 'teams.projects.show',
                params: {id: item.team.uid, pid: item.uid}}"
              class="button is-primary">
              View
            </router-link>
          </div>
        </div>
      </trellis-card>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['items']
  }
</script>
