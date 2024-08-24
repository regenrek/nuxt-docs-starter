import { defineEventHandler, createError, appendHeader } from 'h3'

export default defineEventHandler((event) => {
  appendHeader(event, 'Access-Control-Allow-Origin', '*')
  const componentName = ('Button').replace(/\.json$/, '')
  if (componentName) {
    const component = 'Button'
    if (!component) {
      throw createError({
        statusMessage: 'Examples not found!',
        statusCode: 404
      })
    }
    return component
  }
})
