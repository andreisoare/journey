# Step by step tutorial for building a complex web application with Ember.js

Alternatives:

http://www.toptal.com/javascript/a-step-by-step-guide-to-building-your-first-ember-js-app
https://stuk.io/en/courses
http://www.smashingmagazine.com/2013/11/07/an-in-depth-introduction-to-ember-js/
http://thetechcofounder.com/getting-started-with-ember-js-using-ember-cli/

TODO:

 - figure out a way to deliver it chunk by chunk as opposed to a single page
 - figure out a way to get feedback to improve
   - where do people get stuck?
   - what is wrong in the tutorial?
   - any suggestions, really.

Supports the following package versions:
 - "ember": "1.9.0-beta.3",
 - "ember-data": "1.0.0-beta.12",
 - "ember-cli": "0.1.2",

1. What is Ember.js? What is it good for?

 - link to: reasons why people in the industry use it blog post

2. Who is this tutorial good for?

 - must know javascript
 - no prior ember knowledge necessary
 - it's great if you know ember as well, as it covers advanced topics as well

3. How to consume this tutorial

practice first, theory later. but theory is just as important as practice!!

4. Installing Ember.js

node, npm without sudo
bower, ember-cli

linux, mac, windows

5. Hello world

Create new project, view it in the browser. Explore file organization.
Change something in the application template.
Add fonts to index.html and use them in style.css

6. Installing addons

Install LESS

7. Router

You need to build your application in the order that the user will use it, just so that it's easier to run it while developing.
Explain how it works.
Add the login route (initially at "/"). We want it at path "/".
Learn how to add images.

8. Routes

Explain nesting.
Add a sign up route.

9. Models

Explain how it works.
Create the models for our app.

10. Adapter

Explain how it works.
Create a http mock server for the User model.
Add a "users" route and test the new server.

11. Dynamic segments

Add a "user" route.
Explain dynamic segment and link-to helpers.
Explain why we don't store events in the User model as relationships.

12. Fetching multiple types of data in the model()

Add a subroute "events" for the "user" route.

13. Components

Introduce components.
Add a "gravatar" component, a "user-block" component and an "event-block" component.

14. Controllers and Authentication

Implement the "login" and "signup" actions.

15. Session

session service
authenticated routes
redirect to login / users depending on the session service state
auth initializer
retry transitions

## Advanced topics

16. Loading states

Add a delay to the mock server.
Add loading templates.

17. Error states

Send errors from the mock server
Add error handling.

18. Infinite scroll / pagination

19. Styling - best practices
