<template>
  <nav class="level">
    <div class="level-left">
      <div class="level-item">
        <p class="subtitle is-3">
          <slot name="title"></slot>
        </p>
      </div>
    </div>

    <slot name="nav-right"></slot>
  </nav>
</template>
