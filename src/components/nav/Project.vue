<template>
  <aside class="menu">
    <p class="menu-label">{{ project }}</p>
    <ul class="menu-list">
      <li>
        <a class='is-active'>
          <span class="icon is-small">
            <i class="fa fa-fw fa-tachometer has-margin-right"></i>
          </span>
          Overview
        </a>
      </li>

      <li>
        <a>
          <span class="icon is-small">
            <i class="fa fa-fw fa-bullseye has-margin-right"></i>
          </span>
          Objectives
        </a>
        </li>

      <li>
        <a>
          <span class="icon is-small">
            <i class="fa fa-fw fa-code-fork has-margin-right"></i>
          </span>
          Streams
        </a>
        </li>

      <li>
        <a>
          <span class="icon is-small">
            <i class="fa fa-fw fa-check-square-o has-margin-right"></i>
          </span>
          Tasks
        </a>
        </li>

      <li>
        <a>
          <span class="icon is-small">
            <i class="fa fa-fw fa-lightbulb-o has-margin-right"></i>
          </span>
          Lessons
        </a>
        </li>

      <li>
        <a>
          <span class="icon is-small">
            <i class="fa fa-fw fa-users has-margin-right"></i>
          </span>
          Milestones
        </a>
        </li>

      <li>
        <a>
          <span class="icon is-small">
            <i class="fa fa-fw fa-users has-margin-right"></i>
          </span>
          Status
        </a>
        </li>

      <li>
        <a>
          <span class="icon is-small">
            <i class="fa fa-fw fa-users has-margin-right"></i>
          </span>
          Risks
        </a>
        </li>

      <li>
        <a>
          <span class="icon is-small">
            <i class="fa fa-fw fa-users has-margin-right"></i>
          </span>
          Issues
        </a>
        </li>
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
      props: ['active', 'project']
    }
</script>
