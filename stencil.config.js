exports.config = {
  namespace: 'orango-material',
  generateDistribution: true,
  bundles: [
    { components: ['o-button'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
