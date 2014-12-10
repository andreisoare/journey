# Web

This README outlines the details of collaborating on this Ember application.

A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Models

Account
 * id
 * firstName
 * lastName
 * name
 * email
 * password
 * projectId

User
 * id
 * firstName
 * lastName
 * name
 * email
 * created (backend)
 * firstSeen (backend, optional)
 * lastSeen (backend, optional)
 * country (backend, optional)
 * city (backend, optional)
 * lastIpUsed (backend, optional)
 * properties (JSON)

Event
 * id
 * userId
 * timestamp (backend)
 * referrer
 * campaign
 * browser
 * os
 * ip (backend)
 * properties (JSON)

## Routes

 * `/` (login) -> custom POST with email, password
 * `/dashboard` (list of users sorted by created) -> fetch User sortBy, chunkSize, page; search by custom field
    * `store.find('user', {email: "test@gmail.com", page: 1, chunkSize: 100, sortBy: "created"});`
 * `/:user_id` (for one user, list of events sorted by timestamp) -> fetch Event sortBy, chunkSize, page

## TODO

### Next

 * Browser back button doesn't work when transitioning from user to users
 * add real event fixtures using titles from our blog and urls from hacker news
 * convert everything to components. delete all Views/Controllers.
 * add tests
 * investigate performance issues when loading users route
 * keep an eye on "model dependent state". figure out a way to avoid resetting the users/index controller manually.
 * merge users/index with users
 * incorporate the grid and font-size from skeleton http://getskeleton.com

### Someday

Server
 * preload authenticated user from backend
 * preload user in the user route from backend

Mobile
 * width too large on mobile. search bar looks weird on mobile.
 * preloader on fetchMore not showing on mobile
 * when going to a user profile page the scroll isn't at level 0
