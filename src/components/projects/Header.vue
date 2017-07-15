<template>
  <nav class="level">
    <div class="level-left">
      <div class="level-item">
        <p class="subtitle is-5">
          <strong>{{ item.name }}</strong> Project
        </p>
      </div>
    </div>

    <div class="level-right">
      <p class="level-item">
        <i class="fa fa-calendar has-margin-right"></i>
        20/10/17
      </p>
      <p class="level-item">
        <a class="button is-outlined is-success">
          On Track
        </a>
      </p>
    </div>
  </nav>
</template>

<script>
  export default {
    props: ['item']
  }
</script>
