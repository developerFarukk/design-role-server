
# Blog Project API

## Overview

The Blog Platform API allows users to create, update, delete, and view blogs. The system supports two roles: **Admin** and **User**. The Admin has special permissions to manage users and their blogs, while regular users can only manage their own blogs. The API includes secure authentication, role-based access control, and a public API for reading blogs with search, sorting, and filtering functionalities.

## Technologies

- TypeScript
- Node.js
- Express.js
- MongoDB with Mongoose

---

- **Website Live Link**: <a href="https://blog-project-2059.vercel.app" target="_blank" rel="noopener noreferrer">Blog API Project</a>
- **Requirement Link**: <a href="https://github.com/Apollo-Level2-Web-Dev/b4-assignment-3" target="_blank" rel="noopener noreferrer">Blog API Project</a>
  **VIDIO Review Link**: <a href="https://drive.google.com/file/d/1yQAq8_xwQZgoJ15Fi1cNhRQLdzg4Gm3I/view?usp=sharing" target="_blank" rel="noopener noreferrer">Video Presentation</a>


  - **LogIn Admin Credentials**:
  ```json
  {
    "email": "admin@gmail.com",
    "password": "123456"
  }
  

## Features

### User Roles
- **Admin**:
  - Created manually in the database with predefined credentials.
  - Can delete any blog.
  - Can block any user by updating the `isBlocked` property.
  - Cannot update any blog.
  
- **User**:
  - Can register and log in.
  - Can create, update, and delete their own blogs.
  - Cannot perform admin actions.

### Authentication & Authorization
- **Authentication**: Users must log in to perform write, update, and delete operations.
- **Authorization**: Admin and User roles are differentiated and secured.

### Blog API
- A public API to fetch blogs with search, sort, and filter capabilities.

---

## Models

### User Model
- **name**: string — Full name of the user.
- **email**: string — Email address (used for authentication).
- **password**: string — Securely stored password.
- **role**: `"admin" | "user"` — Role of the user (default is `"user"`).
- **isBlocked**: boolean — Indicates whether the user is blocked (default is `false`).
- **createdAt**: Date — Timestamp of user creation.
- **updatedAt**: Date — Timestamp of last update.

### Blog Model
- **title**: string — Title of the blog post.
- **content**: string — Content of the blog post.
- **author**: ObjectId — Reference to the User model.
- **isPublished**: boolean — Indicates whether the blog is published (default is `true`).
- **createdAt**: Date — Timestamp of blog creation.
- **updatedAt**: Date — Timestamp of last update.

---

## API Endpoints

### 1. Authentication

#### 1.1 Register User
**POST** `/api/auth/register`

Registers a new user.

- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword"
  }


