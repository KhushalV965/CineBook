Movie Ticket Booking Application Backend
Project Description
The Movie Ticket Booking Application Backend is built using the MERN stack. It provides APIs for user authentication, movie management, ticket bookings, and payment processing. The backend is designed to handle all server-side functionalities, ensuring scalability and security.

Features
User authentication with JWT.
Movie management (CRUD operations).
Ticket booking with seat selection.
Integration with Stripe for secure payments.
Admin and user role management.
Technologies Used
Node.js: Runtime environment for JavaScript.
Express.js: Framework for API development.
MongoDB: Database for storing application data.
Mongoose: ODM for MongoDB.
JWT: Authentication mechanism.
Bcrypt: Password hashing library.
Stripe: Payment gateway integration.
Cors: Middleware for handling Cross-Origin Resource Sharing.
Setup Instructions
1. Prerequisites
Install Node.js and MongoDB.
Install Postman or any API testing tool.
Create a Stripe account for payment integration.
2. Installation
Clone the repository:

bash
Copy code
git clone <repository_url>
cd movie-ticket-backend
Install dependencies:

bash
Copy code
npm install
Create a .env file and add the following:

makefile
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/movie-ticket-db
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
Start the development server:

bash
Copy code
npm run dev

API Endpoints
User Routes
Method	Endpoint	Description	Authorization
POST	/register	Register a new user	Public
POST	/login	Authenticate a user	Public
Movie Routes
Method	Endpoint	Description	Authorization
GET	/movies	Fetch all movies	Public
GET	/movies/:id	Fetch movie details by ID	Public
POST	/movies	Add a new movie (admin only)	Admin
PUT	/movies/:id	Update movie details	Admin
DELETE	/movies/:id	Delete a movie	Admin
Booking Routes
Method	Endpoint	Description	Authorization
POST	/book	Book tickets for a movie	User
GET	/bookings	Fetch user bookings	User
Database Models
User Model
javascript
Copy code
{
  name: String,
  email: String,
  password: String,
  role: { type: String, default: 'user' }
}
Movie Model
javascript
Copy code
{
  title: String,
  description: String,
  genre: String,
  showtimes: [Date],
  theater: String,
  price: Number
}
Booking Model
javascript
Copy code
{
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  seats: [String],
  totalPrice: Number,
  paymentStatus: { type: String, default: 'pending' }
}
Running Tests
Install testing tools like Postman.
Start the server:
bash
Copy code
npm run dev
Test endpoints for:
User registration and login.
Fetching movies.
Booking tickets.
Deployment
Deploy the backend using platforms like:
Vercel
Heroku
Render
Use MongoDB Atlas for the cloud database.
Configure the .env file for production.
Future Improvements
Add email notifications for booking confirmation.
Implement seat map for visual seat selection.
Allow user reviews and ratings for movies.
Add support for multi-language and multi-currency payment.