# README

Heroku: https://palette-dashboard.herokuapp.com/

User stories: http://bit.ly/2yIIwRL</br>
ER diagram: http://bit.ly/2zHAhDx</br>

<h1>Palette</h1>

## Description
Palette is a dashboard for controlling the smart led products designed by Drew André (www.drewandre.net).

## Features
* Users can sign up for an account and register a product.
* Users can choose from several different effects and have control over six unique parameters.
* Users can turn their product on and off.
* Users can schedule when their lighting products turn on and off.
* Users can control master brightness.
* Users can search for color palettes uploaded by other users and save them to their account.
* Users can upload images and have Palette automatically create a palette using the image's most prominent colors.
* Users can pull in live API data and use that data to automatically adjust lighting parameters.

## Technologies
* Backend: Rails 5.1.2
* Frontend: React.js and Embedded Ruby
* Palette generation: Vibrant.js / dropzone.js
* User Auth: bcrypt-ruby 
* Styling: CSS3 & Foundation
* Database: Postgres
* Testing: RSpec, Capybara, Jasmine, Karma, Enzyme

## To run this app on your local machine
* Install Ruby.2.3.3
* In a terminal, run git clone `https://github.com/drewandre/palette-dashboard.git`
* Navigate to the project's root directory with `cd palette-dashboard`
* Run `bundle install && npm install && rake db:setup`
* In terminal, run `rails s`
* In another terminal window, run `./bin/webpacker-dev-server`
* Visit http://localhost:3000/ in your browser.
