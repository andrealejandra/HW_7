// function to generate markdown for README
function generateMarkdown(answers) {
  return `# README
  ${JSON.stringify(answers, null, 2)}

`;
}

module.exports = generateMarkdown;
