# Backend engine for Recipe App

## To run the project:
  - Install dependencies with: ```npm istall```
  - Create a ```.env``` file with the port (```PORT=4000```).
  - Run ```npm run dev``` to start the development server on ```.env``` port
  
## To set the Mongo Database:
 In the ```.env``` file add the following:
  - In a new line: ```DB_CNN='mongodb+srv://mainUser:hSadOJx1c5xd3sNk@cluster0.3rxx8.mongodb.net/recipe_mern'```
  - In a new line: ```SECRET_JWT_SEED=<Whatever_You_Consider_a_Strong_Secret>``` 

# Available routes to test:

## Add ingredient: 
  - ```host``` + ```/api/ingredients/create```
  - ```POST``` Request
  - Payload:
      ```
      {
        "name": String/Required,
        "description": String,
        "spec_cond": Boolean
      }
      ```
  - Response: 
      ```
      {
        ok: true,
        ingredient: {
                id: Int,
                name: String
            }
      }
      ```
      
## Show ingredient list:
  - ```host``` + ```/api/ingredients/```
  - ```GET``` Request
  - Response:
      ```
      {
        ok: true,
        ingredients(as an Array of Objects)
      }
      ```
      
## Check ingredient detail:
  - ```host``` + ```/api/ingredients/:id```
  - ```GET``` Request
  - URL param: ```ingredient_id```
  - Response:
      ```
      {
        ok: true,
        ingredient(as an Object)
      }
      ```
      
## Add Recipe:
  - ```host``` + ```/api/recipes/create```
  - ```POST``` Request
  - Payload:
      ```
      {
        "name": String/Required,
        "ingredients": [
          {
            "id": String,
            "name": String,
            "qty": String,
            "unit": String
          }
        ],
        "flexible": Boolean,
        "preparation": String
      }
      ```
  - Response:
      ```
      {
        ok: true,
        ingredient: {
                id: Int,
                name: String
            }
      }
      ```

## Show recipe list:
  - ```host``` + ```/api/recipes/```
  - ```GET``` Request
  - Response:
      ```
      {
        ok: true,
        recipes(as an Array of Objects)
      }
      ```
      
## Check recipe detail:
  - ```host``` + ```/api/recipes/:id```
  - ```GET``` Request
  - URL param: ```recipe_id```
  - Response:
      ```
      {
        ok: true,
        recipe(as an Object)
      }
      ```

## Search recipe by ingredient list
  - ```host``` + ```/api/search/```
  - ```POST``` Request
  - Payload:
      ```
      {
        [
          ingredient_id,
        ]
      }
      ```
  - Response:
      ```
      {
        ok: true,
        recipes(as an Array of Objects)
      }
      ```
