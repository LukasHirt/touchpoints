<template>
  <nav class="docs-sidebar">
    <NuxtLink to="/">
      <Logo class="docs-logo" />
    </NuxtLink>
    <ul>
      <li>
        <span>Components</span>
        <ul>
          <li v-for="component in components" :key="component.slug">
            <NuxtLink :to="`${component.path}`">
              <li>{{ component.title }}</li>
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    components() {
      return this.$store.state.components.navItems
    },
  },
})
</script>

<style scoped>
.docs-sidebar {
  border-right: 1px solid green;
}

.docs-logo {
  height: 100px;
  margin-bottom: 20px;
}
</style>
