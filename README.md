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

  - Fork repository
  - Setup Node project
  - Install dependencies
  - Ensure dotenv package is installed
  - Ensure express package is installed
  - Ensure mysql2 package is installed
  - Ensure sequelize package is installed
  
## Usage

  - Create database via command-line or in MySQL GUI
  - Insert synthetic "seed" data via command line or in MySQL GUI
  - Open integrated terminal in IDE if haven't already
  - Run "npm i init"
  - Run "npm i dotenv"
  - Run "npm i express"
  - Run "npm i mysql2"
  - Run "npm i sequelize"
  - Run "my sql -u root -p"
  - Enter MySQL GUI password
  - Run "source ./db/schema.sql" 
  - Run "exit"
  - Run "npm run seed"
  - Run "npm start"
  - Test endpoints in API tester tool such as [Insomnia](https://insomnia.rest/)