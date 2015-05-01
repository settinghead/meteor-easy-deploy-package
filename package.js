Package.describe({
  name: 'settinghead:easy-deploy',
  debugOnly: true
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.use('iron:router@1.0.5');
  api.use('templating');
  api.addFiles('easy-deploy.js', 'server');
  api.addFiles('deploy-ui.js', 'client');
  api.addFiles('__easy_deploy.html', 'client');
});

Npm.depends({
  'fs-extra': '0.18.0',
  'js-yaml': '3.3.0'
});
