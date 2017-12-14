exports.config = {
  namespace: 'orango-material',
  generateDistribution: true,
  bundles: [
    { components: ['o-mdc-theme'] },
    { components: ['o-mdc-form-field'] },
    { components: ['o-mdc-button'] },
    { components: ['o-mdc-radio'] },
    { components: ['o-mdc-checkbox'] },
    { components: ['o-mdc-text-field'] },
    { components: ['o-mdc-select'] },
    { components: ['o-mdc-fab'] },
    { components: ['o-mdc-linear-progress'] },
    { components: ['o-mdc-toolbar', 'o-mdc-toolbar-title' , 'o-mdc-toolbar-section'] }
  ],
  collections: [],
  sassConfig: {
    includePaths: ['node_modules']
  }
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
