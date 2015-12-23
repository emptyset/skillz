
# Overview

This is a simple web application to provide a visual representation of the
various skill sets of developers.  It uses tags paired with ratings as data
points, and then renders nice bar graphs.  One can click on the bar tags
to obtain a list of developers that rate themselves at that tag and level.

The purpose of this application is to demonstrate a working application
written in the MEAN stack, to also demonstrate using [vagrant](https://docs.vagrantup.com/v2/) 
to create a common environment that can be replicated among developers, 
and the use of [c3](http://c3js.org/examples.html).

# Quick Start

    $ vagrant up
    $ vagrant ssh
    vm$ cd /vagrant
    vm$ npm start

Then open a browser to: [192.168.33.10:3000](http://192.168.33.10:3000)

# Not-So-Quick Start

Vagrant is a little finicky on this project, so here's some OSX instructions
to get started without Vagrant.

This assumes that `mongo`/`node`/`npm`/`bower` binaries are installed.  I use
homebrew to install these packages locally.

In a separate terminal, run:

    $ mongod

In another terminal:

    $ npm update
	$ npm install
	$ bower install
	$ cd data
	$ ./import.sh
	$ cd ..
	$ npm start

Then open a browser to: [localhost:3000](http://localhost:3000)

# Documentation

The application is documented with [mkdocs](http://www.mkdocs.org/).  To view
the documentation, including project overview and license, run:

    $ mkdocs build --clean && mkdocs serve

And open a browser to [http://localhost:8000](http://localhost:8000).

