// package metadata file for Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'EnergySage:es-bs-base', // https://atmospherejs.com/twbs/bootstrap
  summary: 'EnergySages Base CSS',
  version: '0.1.0',
  git: 'https://github.com/EnergySage/es-bs-base'
})

Package.onUse(api => {
  api.versionsFrom('METEOR@1.0')
  api.use('jquery', 'client')
  api.addFiles([
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js'
  ], 'client')
})
