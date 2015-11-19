## v0.2.0

### Higher Priority
- select multiple technology items to produce additional histogram data
- fix URL reload issue
- fix onclick handling, lack of state change

### Lower Priority
- `[ISSUE]` .net, c# tags do not work (probably safe encoding for URL required)
- `[ISSUE]` for some reason, `project-bootstrap.sh` script works fine when run manually in VM; but not as part of provisioning
- `[DESIGN]` do we want `GET /developers/:technology/:rating` to return equals, or greater-than-equals rating?
- fix up the routing in the server-side to produce routes for `/api/v1/*` endpoints
- clean-up front-end directory structure, use conventions where applicable
- clean-up server-side directory structure, use conventions where applicable
- research grunt, gulp and unit testing 
- use the min versions (or uglify) the libraries managed by bower
- convert all console.log to debug statements; research a logging module 
- make the HTML/CSS look good
- look into an API documentation language to render some fancy docs 
- use load/unload to transition between chart data 
- write a script to comb through web framework and other field in spreadsheet
    - include ratings to matches against StackOverflow tags
- include some "missing" attributes after data clean-up
    - for "ASP.NET MVC / C#" convert to "c#" create a duplicate attribute for "asp.net-mvc" with the same value as "c#"
    - for ".NET Desktop (WinForms, WPF)" convert to ".net" and create duplicate attribute "wpf"
    - for "HTML/CSS" convert to "html" and create duplicate attribute "css"
- order the technologies list by total cumulative score among developers 
- manually correct some of the multi-rating entries (e.g. MVC vs. C#)

## Ongoing
- remove themes directory from source control once mkdocs puts themes in separate repos [link](http://www.mkdocs.org/about/release-notes/#warn-users-about-the-removal-of-builtin-themes)


