# README

[ ![Codeship Status for drewandre/reporev](https://app.codeship.com/projects/87ce2be0-a061-0135-21d0-72267cb9a81b/status?branch=master)](https://app.codeship.com/projects/253920)    [![Coverage Status](https://coveralls.io/repos/github/drewandre/palette-dashboard/badge.svg?branch=master)](https://coveralls.io/github/drewandre/palette-dashboard?branch=master)    <a href="https://codeclimate.com/github/drewandre/palette-dashboard/maintainability"><img src="https://api.codeclimate.com/v1/badges/2922eba3b2b8516af001/maintainability" /></a>   <a href="https://codeclimate.com/github/drewandre/palette-dashboard/test_coverage"><img src="https://api.codeclimate.com/v1/badges/2922eba3b2b8516af001/test_coverage" /></a>

Heroku: https://palette-dashboard.herokuapp.com/

User stories: http://bit.ly/2yIIwRL</br>
ER diagram: http://bit.ly/2zHAhDx</br>
Project Trello: http://bit.ly/2zFYUQV</br>

README

<h1>Palette</h1>

Description

<hr>

Features

Users can create and update their own personal account.
Users can sign in/out of their account
Users can optionally add a profile picture to their account.
Users can view a list of timelines on the root page
Users can create a timeline.
Users can view a chronological list of events in each timeline.
Users can add events to a timeline.
Users can optionally add an image to each event.
Users can add memories on individual events
Users can edit reviews they have created.
Users can view their personal timelines with their memories in their profiles.
Admins can delete any review, timeline, or event.
Technologies
<hr>
Backend: Rails 5.1.2
Frontend: React.js and Embedded Ruby
User Auth: Github Omniauth
Image Hosting: Amazon Web Services
Styling: Foundation
Database: Postgres
Testing: RSpec, Capybara, Jasmine, Karma, Enzyme
To run this app on your local machine
<hr>
Install Ruby.2.3.3
In a terminal, run git clone https://github.com/luigilake/pensieve.git
Navigate to the project's root directory with cd pensieve
Run bundle install && npm install && rake db:setup
In terminal, run rails s
In another terminal window, run ./bin/webpacker-dev-server
Visit http://localhost:3000/ in your browser.
