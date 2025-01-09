# 📰 Blog App - Full Stack Website  

Welcome to the **Blog App** project! This is a full-stack application built using **Next.js**, **MongoDB**, and **Tailwind CSS**. The project includes a user-friendly frontend, a robust backend, and an admin panel for managing blog posts.

---

## 📋 Table of Contents  
1. [Introduction](#-introduction)  
2. [Features](#-features)  
3. [Technologies Used](#-technologies-used)  
4. [Installation](#-installation)  
5. [Usage](#-usage)  
6. [Folder Structure](#-folder-structure)  
7. [Contributing](#-contributing)  
8. [License](#-license)  

---

## 🌟 Introduction  
The Blog App project is a full-stack web application that allows users to view blog posts, while providing an admin dashboard to create, edit, and delete posts. It is designed to be efficient, responsive, and scalable using modern web technologies.

---

## 🚀 Features  
- **Frontend**: Display blog posts fetched from a **MongoDB database**.  
- **Admin Panel**: Create, edit, and delete blog posts.  
- **Backend APIs**: Handle CRUD operations efficiently.  
- **Responsive Design**: Built with **Tailwind CSS** for seamless user experience on all devices.  
- **Notifications**: Integrated with **React Toastify** for status alerts.  

---

## 🛠 Technologies Used  
- **Frontend**: Next.js, Tailwind CSS  
- **Backend**: Next.js API Routes, MongoDB  
- **Database**: MongoDB  
- **Others**: React Toastify for notifications  

---

## 🖥 Installation  

### Prerequisites  
Ensure you have the following installed:  
- [Node.js](https://nodejs.org/)  
- [MongoDB](https://www.mongodb.com/)  

### Steps  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/KethakaWanasinghe/blog-app.git  
   cd blog-app ```
  
## 🖥 Installation  

### Install dependencies:
```bash
npm install  
```
###Set up your environment variables in a .env.local file:
```
MONGO_URI=your-mongo-connection-string  
JWT_SECRET=your-secret-key  
```
###Start the development server:
```
npm run dev  
```
###Access the App

Open the app in your browser at ``` http://localhost:3000.```


----

##💡 Usage

###Running the Frontend
The frontend is built with Next.js and styled using Tailwind CSS for a responsive and clean design.

###Admin Panel
Admins can:

Add new blog posts.
Update or delete existing posts.
API Integration
The app uses Next.js API routes to:

Fetch blog data from MongoDB.
Handle create, update, and delete requests.

##📂 Folder Structure
blog-app/  
├── components/       # Reusable UI components  
├── pages/            # Next.js pages (Frontend & API routes)  
├── public/           # Static assets  
├── styles/           # Tailwind CSS files  
├── utils/            # Helper functions and database connection  
├── .env.local        # Environment variables (add this file to .gitignore)  







