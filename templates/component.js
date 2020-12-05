module.exports = (
  renderedUsage, // props, events, methods and slots documentation rendered
  doc // the object returned by vue-docgen-api
) => {
  const { displayName, description, docsBlocks, tags } = doc
  const frontMatter = [`title: ${displayName}`]

  if (description) {
    frontMatter.push(`description: ${description}`)
  }

  if (tags) {
    const renderedTags = []

    for (const tag in tags) {
      renderedTags.push(
        [tags[tag][0].title, `"${tags[tag][0].description}"`].join(`: `)
      )
    }

    frontMatter.push(renderedTags.join(`\n`))
  }

  return `
  ---
  ${frontMatter.join('\n')}
  ---

  ${docsBlocks ? '---\n' + docsBlocks.join('\n---\n') : ''}
  ${renderedUsage.props}
  ${renderedUsage.methods}
  ${renderedUsage.events}
  ${renderedUsage.slots}
  `
}
