# End-to-End Web App Automation Framework

- [End-to-End Web App Automation Framework](#end-to-end-web-app-automation-framework)
    - [Prerequisites](#prerequisites)
    - [Introduction](#introduction)
    - [Install](#install)
    - [How to run automation locally](#how-to-run-automation-locally)
    - [Writing Tests & POMs](#writing-tests--poms)
        - [Element Locators](#element-locators)
        - [Naming Conventions](#naming-conventions)

## Prerequisites

It is helpful to have a basic understanding of the following technologies:

- Git
- NodeJS
- JavaScript/TypeScript
- HTML/CSS
- ESLint
- Command line tools (CLI)

## Introduction

The framework you see here is intended for end-to-end web app testing.

There are multiple ways to run tests:

- On the background ('npx cypress run').
- In the Electron runner('npx cypress open').

## Install

This framework is set up to be cross-platform supported. You'll need to have NodeJS installed first! You'll also need to install cypress.

    Create a project folder on your machine.

    Open the project file in Visual Studio code.

    Install npm 'npm install'.

    Install cypress 'npm install cypress --save-dev'.

    Start cypress by running 'npx cypress open'.

    Click on 'E2E Testing' option, Cypress will add files to configure your project. Click OK.

    Click 'Start E2E Testing in Electron' button, it will ask you to create spec file for you. Click 'Create new empty spec'. Enter file name and click 'Continue'. Clik 'OK, run the spec' option - it will run your expmple spec file.

    Click on the file name to run it.

    Everytime you saving changes in the code, test will run automatically. You can close Electron window in order to prevent it.

## How to run automation locally

- On the background ('npx cypress run'). This will run all spec files and will save a video in the video folder.
- In the Electron runner ('npx cypress open'). Click on 'E2E Testing' option, Click 'Start E2E Testing in Electron' button. In newly opened window, click on your spec file, it will run the test.

## Writing Tests & POMs

### Element Locators

When writing POMs (Page Objects), the classes need to contain page element locators. These are standard `get` methods. Please try to use CSS Selectors as much as possible. CSS Selectors can be used with IDs `#buttonID`, accessibility IDs `~button`, class names `.buttonClass`, or standard CSS Selector paths `.buttonClass > span > a`.

For more info on Cypress element locators, please see [Cypress basics: Selecting elements](https://filiphric.com/cypress-basics-selecting-elements)

### Naming Conventions

When creating a new PageObject, we have several types to choose from.

- If creating a full page class, use `pageName.page.js`
- If creating a modal class, use `modalName.modal.js`
- If creating a partial class representing a page feature, use `featureName.feature.js`

When creating new test/specs, please follow a User Story-like style:

- In your `describe` use something like, "`Test Case Number from TestRail` As a `userType`, I want to..."
- In your `it` tests, use something to describe the actions the user is taking, like, "login to `xyz` portal".

The full example would then read: "As a `userType`, I want to...login to `xyz` portal."