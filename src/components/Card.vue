<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        <slot name="title"></slot>
      </p>
      <a class="card-header-icon">
        <span class="icon">
          <i class="fa fa-angle-down"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
    <footer class="card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
