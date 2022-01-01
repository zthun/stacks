const generated = ['**/CHANGELOG.md', 'node_modules/**', 'yarn.lock', '.yarnrc.yml'];
const k8sTemplates = ['src/templates/**'];
const partialGenerated = ['cspell.json'];

const esFiles = ['*.js'];
const markdownFiles = ['*.md', '**/*.md'];
const jsonFiles = ['*.json', '**/*.json'];
const yamlFiles = ['*.yml', '*.yaml', 'src/**/*.yaml', 'src/**/*.yml'];
const prettyFiles = [].concat(esFiles).concat(markdownFiles).concat(jsonFiles).concat(yamlFiles);
const spellingFiles = [].concat(esFiles).concat(markdownFiles).concat(jsonFiles).concat(yamlFiles);

const esFilesExclude = generated;
const markdownFilesExclude = generated;
const jsonFilesExclude = generated;
const yamlFilesExclude = generated.concat(k8sTemplates);
const prettyFilesExclude = generated.concat(k8sTemplates).concat(partialGenerated);
const spellingFilesExclude = generated.concat(k8sTemplates).concat(partialGenerated);

module.exports = {
  esFiles,
  esFilesExclude,
  markdownFiles,
  markdownFilesExclude,
  jsonFiles,
  jsonFilesExclude,
  yamlFiles,
  yamlFilesExclude,
  prettyFiles,
  prettyFilesExclude,
  spellingFiles,
  spellingFilesExclude
};
