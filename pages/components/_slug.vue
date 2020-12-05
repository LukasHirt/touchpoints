<template>
  <DocsContainer>
    <sidebar />
    <header>
      <h1 v-text="component.title" />
      <p v-text="component.description" />
      <ul>
        <li v-if="component.version" v-text="component.version" />
        <li v-if="component.since" v-text="component.since" />
        <li v-if="component.author" key="author-link">
          <a :href="componentAuthor.url" v-text="componentAuthor.name" />
        </li>
      </ul>
    </header>
    <main class="docs-content-container">
      <section class="docs-content">
        <nuxt-content :document="component" />
      </section>
      <aside class="docs-toc">
        <h3>On this page</h3>
        <nav>
          <ul>
            <li v-for="content in component.toc" :key="content.id">
              <a :href="`#${content.id}`" v-text="content.text" />
            </li>
          </ul>
        </nav>
      </aside>
    </main>
  </DocsContainer>
</template>

<script lang="ts">
import Vue from 'vue'

interface Author {
  name: string | null
  url: string | null
}

export default Vue.extend({
  async asyncData({ $content, params }) {
    const component: any = await $content('components', params.slug).fetch()
    const componentAuthor: Author = {
      name: null,
      url: null,
    }

    const author = component.author
    componentAuthor.name = author.substring(
      author.lastIndexOf('[') + 1,
      author.lastIndexOf(']')
    )
    componentAuthor.url = author.substring(
      author.lastIndexOf('(') + 1,
      author.lastIndexOf(')')
    )

    return { component, componentAuthor }
  },
})
</script>

<style scoped>
.docs-content-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0 30px;
  grid-template-areas:
    'Content Content Toc'
    'Content Content Toc'
    'Content Content Toc';
  height: 100%;
}

.docs-content {
  grid-area: Content;
}

.docs-toc {
  grid-area: Toc;
}
</style>
