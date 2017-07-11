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
              :to="{ name: 'projects.edit', params: {id: item.id} }"
              class="button is-primary">
              Edit
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
