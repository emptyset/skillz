# Requirements and Project Plan

## v0.2.0

Allow for selection of multiple technology items.

This means that you can compare two or more technology items, and 
generate a histogram with the combined datapoints.

For example, you may select both javascript and jquery, and a
histogram with two types of bars (two different colors) appears.


## v0.3.0

Allow for selection of multiple bars in the generated histogram, which
generates an aggregate list of developers.

This means that once you select a technology suite (one or more technology
items) to generate a histogram, you can select multiple bars.  The
list of developers is updated with no duplicates.

For example, if you seek javascript and jquery developers, you can
select all bars above a rating of 8, and get a unique list of developers
that all have self-reported ratings of at least 8 for javascript and
jquery.


## v1.0.0

Rework the original skills Google Sheet so that web frameworks are broken out.
Rework the application to connect to Google Sheet via the Sheets API and use it
to generate the histograms from the live data.

This allows any updates or new developers self-reporting skills to update the 
application, which now will work against the live data.


## v1.1.0

Supply user account for developers to update skills.
Allow developers to update availability (hours/week?  schedule?) or status 
(as a list of current projects, or unassigned as empty list).




