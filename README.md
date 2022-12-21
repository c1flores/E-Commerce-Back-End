# Table of Contents

  - [Overview](#overview)
  - [Why does object relational mapping matter?](#why-does-object-relational-mapping-matter?)
  - [Screen Capture](#screen-capture)
  - [Link to Screen Recording of Application](#link-to-screen-recording-of-application)
  - [Installation](#installation)
  - [Usage](#usage)
  
## Overview
 This repository is an exhibition of an e-commerce back end implementation. The user can consult the repo to learn how to create a back end for an e-commerce site effectively, using the object-relational mapping design pattern. The project makes use of <a href="https://nodejs.org/en/" target="_blank">Node.js</a> to work with a back end, the <a href="https://www.npmjs.com/package/express" target="_blank">Express package</a> to design and configure an API, the <a href="https://www.npmjs.com/package/dotenv" target="_blank">dotenv package</a> to classify environmental variables, and the <a href="https://www.npmjs.com/package/mysql2" target="_blank">MySQL2</a> as well as the <a href="https://www.npmjs.com/package/sequelize" target="_blank">Sequelize</a> packages to manage and interact with the database.


## Why does object relational mapping matter?
 Today, the majority of applications are written in OOP language and at the same time persist their data in relational databases. Due to this fundamental paradigm mismatch, a need for a more harmonic way to communicate between them arose. Object relational mapping allows one to call and manipulate data from the database using your language of choice instead of SQL.

## Screen Capture
![](https://user-images.githubusercontent.com/81927296/200155718-b33fa1bf-6313-4db9-8ad2-cafcbf984e17.gif)

## Link to Screen Recording of Application
[Google Drive Link](https://drive.google.com/file/d/1Dbh4QWcO7Wmhn6AkF-OH7cngSzKeRiR3/view?usp=share_link)

## Installation

  1. Fork and clone repository to local machine.
  2. Run integrated terminal in personal IDE.
  3. Run ```npm i``` to install dependencies in local project directory.
  
## Usage

  1. Create database via command-line or in MySQL GUI.
  2. Insert synthetic "seed" data via command line or in MySQL GUI.
  3. Open integrated terminal in IDE.
  4. Run ```my sql -u root -p```.
  5. Enter MySQL GUI password.
  6. Run ```source ./db/schema.sql```.
  7. Run ```exit```.
  8. Run ```npm run seed```.
  9. Run ```npm start```.
  10. Test endpoints in API tester tool such as [Insomnia](https://insomnia.rest/).
