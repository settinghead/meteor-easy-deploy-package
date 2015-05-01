var fs = Npm.require('fs-extra'),
    mkdirp = Meteor.wrapAsync(fs.mkdirp, fs),
    yaml = Npm.require('js-yaml'),
    path = Npm.require('path');

var deployRoot = path.join(process.cwd(), '..', '..', '..', '..', '..', '..', '.deploy');

Meteor.startup(function () {
  var mainVarYmlPath = path.join(deployRoot, 'vars', 'main.yml');
  // Get document, or throw exception on error
  try {
    var doc = yaml.safeLoad(fs.readFileSync(mainVarYmlPath, 'utf8'));
    console.log('deploy config', doc);
  } catch (e) {
    console.error(e);
  }
});
