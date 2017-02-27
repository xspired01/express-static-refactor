# Express Static Refactor

Special thanks to g42's [Kevin Zheng](https://github.com/kvinzheng) for letting us use some of his open source code for this assignment.

## Objective

By the end of this session you will be able to:

  - refactor a front-end only app and its static assets, served from the file system, to be served by an express server

You will demonstrate this by:

  - refactoring a serverless front-end app to be served, along with its static assets, by an express server

## Before beginning

Consolidate answers to the following questions in order to support our main objective:

  - What kind of request does a browser make when you enter a URL into the address bar?
  - How does a browser know how to render html as html, rather than as plain text?
  - What happens when the browser finds a `src` attribute in a `<script>` or `<image>` tag (or an `href` attribute in a `<link>` tag)?
  - What does the `express.static` middleware function do?
  - What key assumption does express.static make when it receives an otherwise unhandled GET request to '/'?

## TODO

  - Fork this repo
  - Clone down your fork of the repo
  - Create an `upstream` remote to `https://github.com/gSchool/express-static-refactor.git`
  - Cut a `refactor` branch from your local copy of the repo
  - Refactor this application, including its static assets, to be served by an express server
  - Push up your work on your `refactor` branch to your fork of this repo `origin`
