## CMPE272 -- Group 8

### FE implementation for student reg service

#### Technology stack
* NodeJS Express
* HandleBar
* Angular
* Minifier for static assets


-- Leverage NodeJS for multiple reasons
Fast integrate between REST and FE frame work
Leverage JS template rendering goodness
Caching and GZIP content delivery
Asynchronous call
-- Leverage Angular
2 ways model binding
MVC FE model
-- Handlebar template
JS template rendering for best template render performance
minified template, caching for faster delivery
Partial template logic and helper for DRY

-- Rest layer is defined in URL.js
-- Handle Asynchorous call (multiple request in parallel) -- Success/failure handling (200 status code for rendering, 500~ statuscode for failure)
-- CSS/JS static is cached in gzip through express compression (save bandwidth through file caching)
-- Handle user authentication (secure cookie encrypted logic, httpOnly to prevent client manipulation)
-- Handle admin user logic for /admin page. If user is not admin, 403 on /admin page
-- All POST request handled with CSRF token check
-- All variable is “escaped” by handlebar template rendering mechanism, prevent XSS attack
