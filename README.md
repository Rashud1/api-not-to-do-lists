# Not to do bckend api
this is the backend api for our not to do react app

## How to use
-Clone the project
-Run`npm install`
-Make sure to have `nodemon`
install globally in your system, if you
don't have them run ` npm i -g nodemon`

## ApI Endpoints
-all the api endpoint will follow the `rootUrl/api/v1/`
path
| # | API| Method | Description |
|-----|----|----|------|
|1.|`/`| GET | Fetch single task if @id param is provided otherwise fetch from the server |
|2.|`/`| POST | Add new ticket in the database |
|3.|`/`| Delete | Expects ID to be deleted, and deletes from the database. |

# Backend-front-end
