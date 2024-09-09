<!DOCTYPE html>
<html>
<head>

</head>
<body>
  <h1>Global Dish API</h1>

  <p>A RESTful API for managing a collection of recipes from cuisines around the world.</p>

  <h2>Features</h2>
  <ul>
    <li>CRUD Operations: Create, Read, Update, and Delete dish data.</li>
    <li>Diverse Cuisine: Support recipes from various culinary traditions.</li>
    <li>Detailed Information: Include ingredients, instructions, nutritional facts, and more.</li>
  </ul>

  <h2>Endpoints</h2>
  <ul>
    <li>GET /dishes: Retrieve a list of all dishes.</li>
    <li>GET /dishes/:id: Get a specific dish by its ID.</li>
    <li>POST /dishes: Create a new dish.</li>
    <li>PUT /dishes/:id: Update an existing dish.</li>
    <li>DELETE /dishes/:id: Delete a dish.</li>
  </ul>

  <h2>Request/Response Format</h2>
   <pre>
{
  "dishName": "Koshari",
  "cuisine": "Egyptian",
  "ingredients": [
    "brown lentils",
    "medium-grain rice",
    "macaroni",
    "fried onions",
    "tomato sauce",
    "garlicky tomato sauce (optional)",
    "vegetable oil",
    "cumin",
    "coriander",
    "salt",
    "black pepper"
  ],
  "instructions": [
    "Wash and cook brown lentils until tender.",
    "Wash and cook medium-grain rice according to package instructions.",
    "Cook macaroni pasta al dente.",
    "Fry onions in vegetable oil until golden brown.",
    "Combine cooked lentils, rice, macaroni, fried onions, and tomato sauce in a large serving dish.",
    "For a richer flavor, drizzle with garlicky tomato sauce (optional).",
    "Season with cumin, coriander, salt, and pepper to taste."
  ],
  "servingSize": "4 servings",
  "nutritionalInfo": {
    "calories": (approximately) 400 per serving (may vary depending on ingredients used),
    "protein": 15,
    "fat": 10,
    "carbohydrates": 60
  },
  "tags": ["vegetarian", "one-pot", "comfort food", "Egyptian"],
  "image": "https:/koshari.jpg" 
  "cookTime": "45 minutes",
  "difficultyLevel": "easy"
}
  </pre>

  <h2>Technologies Used</h2>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB</li>
    <li>Mongoose</li>
  </ul>

  <h2>Getting Started</h2>
  <ol>
    <li>Clone the Repository:</li>
    <pre>git clone https://github.com/MuhammedMagid/cuisine-hub.git</pre>
    <li>Install Dependencies:</li>
    <pre>npm install</pre>
    <li>Run the Application:</li>
    <pre>npm run dev</pre>
  </ol>

  <h2>License</h2>
  <p>This project is licensed under the [MIT License].</p>

  <p>Enjoy exploring the world of food through this API!</p>
</body>
</html>
