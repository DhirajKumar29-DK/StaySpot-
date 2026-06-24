# StaySpot

A full-stack Airbnb-inspired accommodation booking platform that enables users to discover, create, review, and manage property listings. Built with Node.js, Express.js, MongoDB, and EJS, StaySpot delivers a seamless booking experience with secure authentication, image uploads, interactive maps, and user-generated reviews.

## Live Demo

**Live Website:** https://stayspot-s4wv.onrender.com

---

## Features

### Authentication & Authorization

* Secure user registration and login using Passport.js
* Session-based authentication
* Protected routes and access control
* Only listing owners can edit or delete their properties

### Property Listings

* Create, view, update, and delete listings
* Upload property images via Cloudinary
* Categorized listings (Trending, Rooms, Mountains, Castles, and more)
* Search properties by title or location

### Reviews & Ratings

* Add reviews and star ratings
* User-generated feedback system
* Review validation and authorization

### Maps & Location

* Interactive maps powered by Leaflet.js
* OpenStreetMap integration for location visualization

### User Experience

* Responsive design using Bootstrap 5
* Flash messages for user feedback
* Tax calculation toggle
* Clean and intuitive UI

---

## Tech Stack

### Frontend

* EJS
* Bootstrap 5
* CSS3
* JavaScript
* Leaflet.js

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose
* MongoDB Atlas

### Authentication

* Passport.js
* passport-local-mongoose

### Cloud Services

* Cloudinary (Image Storage)

### Deployment

* Render

---

## Project Structure

```bash
StaySpot/
├── controllers/
├── models/
├── routes/
├── views/
│   ├── layouts/
│   ├── listings/
│   ├── includes/
│   └── users/
├── public/
│   ├── css/
│   └── js/
├── init/
├── middleware.js
├── app.js
└── cloudConfig.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/DhirajKumar29-DK/StaySpot-.git
cd StaySpot-
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_atlas_url
SECRET=your_secret_key

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### 4. Seed Sample Data

```bash
node init/index.js
```

### 5. Start the Application

```bash
npm start
```

### 6. Open in Browser

```bash
http://localhost:8080/listings
```

---

## Environment Variables

| Variable         | Description                     |
| ---------------- | ------------------------------- |
| ATLASDB_URL      | MongoDB Atlas Connection String |
| SECRET           | Express Session Secret          |
| CLOUD_NAME       | Cloudinary Cloud Name           |
| CLOUD_API_KEY    | Cloudinary API Key              |
| CLOUD_API_SECRET | Cloudinary API Secret           |

---

## Key Learning Outcomes

* Full-Stack Web Development using MERN ecosystem concepts
* Authentication & Authorization with Passport.js
* RESTful Routing and MVC Architecture
* Cloud-based Image Storage with Cloudinary
* MongoDB Database Design and Relationships
* Deployment using Render and MongoDB Atlas

---

## Author

**Dhiraj Kumar**

* GitHub: https://github.com/DhirajKumar29-DK
* LinkedIn: Add your LinkedIn profile here

---

## 📄 License

This project is licensed under the MIT License.
