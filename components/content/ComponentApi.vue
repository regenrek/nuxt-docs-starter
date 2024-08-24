<template>
  <ContentRenderer :value="ast" />
</template>

<script setup lang="ts">
import { transformContent } from '@nuxt/content/transformers'
import { useShikiHighlighter } from '~/composables/useShikiHighlighter'

const route = useRoute()
const highlighter = useShikiHighlighter()
const name = `Button`
const state = await $fetch(`/api/content-examples-code/${name}.json`)

console.log(state)

const { data: ast } = await useAsyncData(`${name}-preset`, () => transformContent('content:_markdown.md', `
\`\`\`vue
    <button class="button" :class="{ 'is-primary': primary }" @click="$emit('click')">
        <slot></slot>
    </button>
\`\`\`\
`, {
  markdown: {
    highlight: {
      highlighter,
      theme: {
        light: 'material-theme-lighter',
        default: 'material-theme',
        dark: 'material-theme-palenight'
      }
    }
  }
}))
</script>
