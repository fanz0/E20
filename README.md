# E-20

E-20, the site that helps you to know what to do this evening.

## Introduction

This site is born to fill a common need, the possibility to check which events are available in your area.
The aim of that is to help people to organize the day after work and to help businesses publish their events, combine them in a simplest way as possible.

## Functionalities

- Is possible to check the home page, with the main event in the first line. Below this section there are the other events.
- It’s possible to add a new event with the right button “Aggiungi evento”. But attention: you have to do the registration or the login before, otherwise the button is disabled.
- In the bottom there’s the footer with all links and information about company.

## Start the website in local

To start the website in the local database you need some informations:

- You need to clone the repository with `git clone https://github.com/fanz0/E20.git` and go in the right directory where the project is saved.
- There are three file `package.json`, in the _root_ directory, in the _server_ directory and in the _client_ directory. So you need to install the node modules with `npm i` in each of them.
- After that, you need to create a file `.env` in the _server_ directory to connect your mongoDB database and create the variable `DB_URI="your-connection-string"`.
- Now, go in the _root_ directory and run the website with `npm start`.

## Technologies

This a full stack project, realized with MERN stack and Tailwindcss.

## Website

Enjoy the site.
