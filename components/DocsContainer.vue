<template>
  <div class="docs-container">
    <slot />
  </div>
</template>

<style scoped>
.docs-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0 0;
  grid-template-areas:
    'Sidebar Header Header Header'
    'Sidebar Main Main Main'
    'Sidebar Main Main Main';
  height: 100%;
}

nav {
  grid-area: Sidebar;
  padding: 30px;
}

header {
  grid-area: Header;
  padding: 30px;
}

main {
  grid-area: Main;
  padding: 30px;
}
</style>
