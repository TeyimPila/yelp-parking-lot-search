# Getting Started with Yelp Search

This is a simple application for searching the yelp website

# Running the application:

To run the application, simply...
- Clone with `git clone git@github.com:TeyimPila/yelp-parking-lot-search.git`,
- Create a file at the root of the project and copy content of `.env.sample` into it: `touch .env && cp .env.sample .env`
- Get `<yelAPIKey>` with a value from the project description
- Run `npm install` to install dependencies
- Run `npm run start`. The application should run on `port 3000`

# Room for improvement

Given more time, I would do the following to make the project better

- Better styling
- Dockerize for easy running
- if the project grows bigger, I would use Redux for global state management
- Use nextJS to enjoy the benefits of server side rendering and better SEO
- Write tests for components and utility methods
- Solve the CORS issue by implementing a proxy server to run my requests through
- Add Themes

# Design/Technical Consideration:

- Avoid the use of real-time fetching (autosuggestion) results to avoid making too many requests to the server
- Did not use Redux because of size of application. There is no need for global state management
- Would have loved to, but could not Dockerize due to time constraint
- To keep things simple, I use App.js as both the router and layout. This could be split in projects with a more complex layout
