# Train Scheduler

Goal: Make a train schedule application that will provide up-to-date information about various trains.

This is a project demonstrating my skills with Firebase, Moment.js, and JavaScript.

> Deployed: https://github.com/purpetrator/Train-Scheduler

# Parameters of the project:

- Your app will retrieve and manipulate this information with Moment.js.

- Use Firebase to host arrival and departure data.

- Code this app to calculate when the next train will arrive; this should be relative to the current time.

- Users from many different machines must be able to view same train times.

# Overview

I made an internal train scheduling app that retrieves user input and hosts the data in Firebase.

Once the user inputs the train name, destination, frequency, and first train time, the information will populate on the table. There are two additional calculations: "Next Arrival" and "Minutes Away" which are calculated with Moment.js relative to the current user's time.
