<template>
  <aside class="menu">
    <p class="menu-label">Team</p>
    <ul class="menu-list">
      <li><a class='is-active'>Overview</a></li>
      <li><a>Settings</a></li>
      <li><a>Projects</a></li>
      <li>
        <a>Manage Your Team</a>
        <ul>
          <li><a>Members</a></li>
          <li><a>Add a member</a></li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
    export default {
      props: ['active']
    }
</script>
