# ![Scale-Up Velocity](./readme-files/logo-main.png) Poekex

In this project, I built a Pokemon collection Web Application, with the [MERN stack](https://www.educative.io/edpresso/what-is-mern-stack).
I got this task in my full-stack coure with some requirements. 
The application works that way: I have pokemon-API that i had to learn how to work with. The web - https://pokeapi.co/ || The base api - https://pokeapi.co/api/v2 .
My backend comunicates with the pokemon-api and my DB and the client makes requests from the backend server.


## backend
The Express app is located in app.js and exports the app object.
I made 3 routes (routes folder) api/tickets that has 5 requests:
- [GET] `api/pokemon/[:name]` - Returns an object of the pokemon data from the api by the name that the request gets. 
- [GET] `api/type/[:name]` - Returns an array of objects {photo:[photo url], name: pokemon name} . The array is taken from the api by the type name.
- [GET] `api/collection/` - Return array of objects. The array is the collection of pokemons that the user have. The collection is saved in the database.
- [POST] `api/collection/catch` - The request gets the info from the body and save this in the database. 
- [POST] `api/collection/release/:id` - The request got a pokemon id the deletes him from the collection/ database.

I use mongoDB database, and using mongoose to communicate with the database. I use one model (in the models folder).

## client
- axios used in the client
- The client has have 6 components (App, Header, InputSection, Card, Collection, Types).
- The client has one css file.

## features
- Nice style page.
- Search any pokemon you would like.
- discover lost of pokemons by searching from the type lists.
- Adding pokemon to your collection.
- Access to the type lists by clicking the types labels in the pokemon card.
- Real time changing collection.
- Cool scroll slide in the collection/types section.
- Cool animations in the pokemon card picture by hovering.

## Setup & Instrucions 
1. Clone this repository
2. Open the terminal in the repo directory
3. Run `npm i` at the root directory and at the client directory.
4. Run `npm run dev` at the root directory and wait to the terminal log `app listening on 5000` and `connected to MongoDB`.
5. Run `npm run start` at the client directory. 
6. In your browser, go to http://localhost:3000/. Enjoy :)


I'm really hope that you will enjoy my app.


