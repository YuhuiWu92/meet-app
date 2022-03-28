### It must be able to show/hide event details.

As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

# Scenario 1: An event element is collapsed by default

Given the user drop-down list of events in list
When- the user don’t do anything
Then- the user have a overview of an event information without expand it

# Scenario 2: User can expand an event to see its details

Given-the list of events has been loaded
When-user clicks on a “Details” button for expand the event
Then-the event element should be expand and user can see more details of the event

# Scenario 3: User can collapse an event to hide its details

Given-there is the details of an event element have been showed
When-user clicks a “Details” button to collapse it
// use simulate and onClick on this button to render.
Then-the event element should be collapsed and the user can only see the basic information of an event

textbox element is rendered correctly and for changing the event on the textbox.

### It must specify the number of events (this will be very similar to the CitySearch component).

## FEATURE 3: SPECIFY NUMBER OF EVENTS

As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once

# Scenario 1: When user hasn’t specified a number, 32 is the default number

Given-the events list of a city has been loaded
When-the user don’t specified a number of events to view in the app
Then-the user will view 32 events at once.

# Scenario 2: User can change the number of events they want to see

Given-the the events list of a city has been loaded
When-the user change the number of events to view
Then-the events in the list will be the number, the user has changed.
