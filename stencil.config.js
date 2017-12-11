exports.config = {
  namespace: 'orango-material',
  generateDistribution: true,
  bundles: [
    { components: ['o-mdc-button'] },
    { components: ['o-mdc-fab'] },
    { components: ['o-mdc-linear-progress'] }
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
