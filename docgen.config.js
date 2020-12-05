const path = require('path')

module.exports = {
  componentsRoot: './src/components', // the folder where CLI will start searching for components.
  components: '**/[A-Z]*.vue', // the glob to define what files should be documented as components (relative to componentRoot)
  outDir: 'content/components', // folder to save components docs in (relative to the current working directry)
  apiOptions: {
    // ...require('./webpack.config').resolve, // inform vue-docgen-api of your webpack aliases
    jsx: false, // tell vue-docgen-api that your components are using JSX to avoid conflicts with TypeScript <type> syntax
  },
  getDocFileName: (componentPath) => componentPath.replace(/\.vue$/, '.md'), // specify the name of the input md file
  getDestFile: (file, config) =>
    path.join(config.outDir, file).replace(/\.vue$/, '.md'), // specify the name of the output md file
  templates: {
    // // global component template wrapping all others see #templates
    component: require('./templates/component'),
    // events: require('templates/docs/events'),
    // methods: require('templates/docs/methods'),
    // props: require('templates/docs/props'),
    // slots: require('templates/docs/slots'),
    // static template to display as a tag if component is functional
    functionalTag: '**functional**',
  },
  docsRepo: 'LukasHirt/vue-design-system',
  docsBranch: 'master',
  docsFolder: 'src/components',
  editLinkLabel: 'Edit on github',
}
