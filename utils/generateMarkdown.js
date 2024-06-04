// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}
  //using shields.io to generate the license

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `[License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License
  This project is licenses under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- Installation
- Usage Information
- ${renderLicenseLink(data.license)}
- Contribution Guidelines
- Test Instructions
- Questions Resource

## Installation
${data.installation}

## Usage Information
${data.usage}

## Constribution Guidelines
${data.contribution}

## Test Instructions
${data.tests}

## Questions?
Please feel free to contact me at ${data.email} if you have any questions.
You can find more of my work at [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
