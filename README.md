# meet-app

A progressive web app (PWA) with the ability to work offline and a serverless backend developed using a test-driven development (TDD) technique.
![This is an image](/public/meet-app.png)

## Git-Page:

https://yuhuiwu92.github.io/meet-app/

## Features and Requirements

### Key Features:

● Filter events by city.
● Show/hide event details.
● Specify number of events.
● Use the app when offline.
● Add an app shortcut to the home screen.
● View a chart showing the number of upcoming events by city.

### User Stories:

● As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
● As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
● As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
● Asauser,IwouldliketobeabletousetheappwhenofflinesothatIcanseetheeventsI viewed the last time I was online.
● As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
● As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

### Technical Details

A React applcation. Built using the TDD technique. Uses the Google Calendar API and OAuth2 authentication flow. Uses serverless functions (AWS lambda) for the authorization server instead of using a traditional server. Passes Lighthouse’s PWA checklist. Works offline or in slow network conditions with the help of a service worker. The API calls use React axios and async/await. Implements an alert system using an OOP approach to show information to the user.
