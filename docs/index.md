# Overview

> "we could make an actual app instead of using gdocs" -- developer on my team 

## About
A simple web application written in MEAN to visualize developer skills.

## Architecture, Technology Stack

- [Vagrant](https://docs.vagrantup.com/v2/)
- MEAN
    - [MongoDB](http://docs.mongodb.org/manual/)
    - [Express.js](http://expressjs.com/4x/api.html)
    - [AngularJS](https://docs.angularjs.org/guide)
    - [Node.js](https://nodejs.org/documentation/)
- [C3.js](http://c3js.org/reference.html)

The app will be deployed to and hosted on Heroku.

## API Design

```
	GET /developers					[ 'Alice', 'Bob', 'Eve', ... ]
	GET /developers/javascript
	GET /developers/javascript/8	
	
	GET /technologies				[ 'javascript', 'jquery', ... ]
	
	GET /ratings/javascript			[ { rating: '3', count: '15' }, ... ]
```

## Run

    $ vagrant up
    $ vagrant ssh
    vm$ cd /vagrant
    vm$ npm start

Then open a browser to: [192.168.33.10:3000](http://192.168.33.10:3000)

Documentation is provided at: [192.168.33.10:3000/docs](http://192.168.33.10:3000/docs)

## Deploy

    $ vagrant push

*NOTE:* Not configured to push to heroku (yet).
