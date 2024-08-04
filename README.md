Hotel-Booking-Website-Project
Interactive website made with the help of #MERN stack.

Overview
This project is a comprehensive hotel booking system with a frontend and backend implementation. The frontend provides an interactive user interface for users to search, book, and manage hotel reservations. The backend manages data storage, business logic, and serves API endpoints for the frontend to consume.

Repositories
Frontend: hotel-Booking-frontend
Backend: Hotel-Booking-Backend
Features
User registration and authentication
Hotel search and filtering
Room booking and management
Payment processing
Booking history and user profiles
Admin panel for hotel management
Tech Stack
Frontend
React.js
Redux
Material-UI
Axios
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT for authentication
Stripe for payment processing
Installation
Frontend
Clone the frontend repository:
bash
Copy code
git clone https://github.com/theUtkarshRaj/hotel-Booking-frontend.git
Navigate to the project directory:
bash
Copy code
cd hotel-Booking-frontend
Install the dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to see the frontend in action.
Backend
Clone the backend repository:
bash
Copy code
git clone https://github.com/theUtkarshRaj/Hotel-Booking-Backend.git
Navigate to the project directory:
bash
Copy code
cd Hotel-Booking-Backend
Install the dependencies:
bash
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory and add the following variables:
env
Copy code
PORT=5000
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
STRIPE_SECRET_KEY=<Your Stripe Secret Key>
Start the development server:
bash
Copy code
npm run dev
The backend server will be running at http://localhost:5000.
Usage
Register and log in to the system.
Search for hotels based on location, date, and other filters.
Select a hotel and book a room.
Complete the payment process using Stripe.
View and manage your bookings in your profile.
Admins can log in to the admin panel to manage hotel listings, rooms, and bookings.
Contributing
Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-name
Make your changes and commit them:
bash
Copy code
git commit -m "Add some feature"
Push to the branch:
bash
Copy code
git push origin feature-name
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.
