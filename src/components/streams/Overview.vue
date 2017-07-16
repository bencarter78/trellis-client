<template>
  <div class="columns">
    <div class="column is-6">
      <trellis-card>
        <div slot="title">Streams</div>

        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam error porro libero totam harum eum sequi aliquam molestiae illum provident laboriosam perspiciatis maxime minus ullam, sint quasi, voluptatem natus adipisci.
        </div>
      </trellis-card>
    </div>

    <div class="column is-6">
      <trellis-card>
        <div slot="title">Upcoming Tasks</div>

        <div slot="content">
          <table class="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Due</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Some Task</td>
                <td>2 days</td>
              </tr>
              <tr>
                <td>Some Other Task</td>
                <td>20/10/17</td>
              </tr>
            </tbody>
          </table>
        </div>
      </trellis-card>
    </div>
  </div>
</template>

<script>
  export default {
    //
  }
</script>
