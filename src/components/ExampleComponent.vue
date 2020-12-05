<template>
  <button class="example-button">
    <!-- @slot Content of the button -->
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

interface Variation {}

/**
 * Example button component
 * @version 0.0.1
 * @author [Lukas Hirt](https://github.com/LukasHirt)
 * @since Version 0.0.1
 */
@Component
export default class Button extends Vue {
  /**
   * Variation of the button
   * @values primary, secondary
   */
  @Prop({
    default: 'primary',
    validator: (value: string): boolean => /(primary|secondary)/.test(value),
    required: false,
  })
  variation!: string
}
</script>

<docs>
## General
This is an example component with a docs block

```vuejs
<Button variant="secondary">Hello world!</Button>
```
</docs>
