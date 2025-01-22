# **Event Management System**
A full-stack application for managing events, allowing users to create, view, update, and delete events along with their associated categories. This project showcases backend API development, database design, and a responsive, user-friendly React.js frontend.

-----
## **Features**
**Backend**

- Create, read, update, and delete events.
- Associate events with categories.
- Handle edge cases like invalid inputs or non-existent IDs.

**Frontend**

- Form to create and edit events with multi-select dropdowns for categories.
- Responsive event listing with filtering options by category.
- Visually appealing UI.

**Database**

- Many-to-many relationship between events and categories.
- Designed for scalability.
-----
## **Tech Stack**
**Frontend**: React.js, Styled Components, Recharts, React Query, React Toastify
**Backend**: Node.js, Express.js, MongoDB, Mongoose
**Tools**: Axios, Day.js, Morgan, Bcrypt.js, JWT, Nodemon

-----
## **Installation**
### **Prerequisites**
- Node.js v16+ and npm installed.
- MongoDB installed and running.
### **Steps**
Install Dependencies

npm install bcryptjs@2.4.3 concurrently@8.0.1 cookie-parser@1.4.6 dayjs@1.11.7 dotenv@16.0.3 express@4.18.2 express-async-errors@3.1.1 express-validator@7.0.1 http-status-codes@2.2.0 jsonwebtoken@9.0.0 mongoose@7.0.5 morgan@1.10.0 multer@1.4.5-lts.1 nanoid@4.0.2 nodemon@2.0.22 cloudinary@1.37.3 helmet@7.0.0 express-rate-limit@6.8.0 express-mongo-sanitize@2.2.0

npm install @tanstack/react-query@4.29.5 @tanstack/react-query-devtools@4.29.6 axios@1.3.6 dayjs@1.11.7 react-icons@4.8.0 react-router-dom@6.10.0 react-toastify@9.1.2 recharts@2.5.0 styled-components@5.3.10

MONGO\_URL=<your-mongodb-connection-string>

JWT\_SECRET=<your-secret>

Start the application.

npm run dev

-----
## **Usage**
1. Access the application at http://localhost:5173 (frontend).
1. Backend runs on <http://localhost:5100.>  // At the end both are integrated
-----
## **API Endpoints**

|**Method**|**Endpoint**|**Description**|
| - | - | - |
|POST|/api/v1/events|Create a new event.|
|GET|/api/v1/events|Retrieve a list of events.|
|PATCH|/api/v1/events/:id|Update an existing event.//Not Working|
|DELETE|/api/v1/events/:id|Delete an event by ID.|

-----
##
## **Database Schema**
Sql

-- Create Categories Table

CREATE TABLE categories (

`    `id UUID PRIMARY KEY,

`    `name VARCHAR(255) NOT NULL

);

-- Create Events Table

CREATE TABLE events (

`    `id UUID PRIMARY KEY,

`    `name VARCHAR(255) NOT NULL,

`    `description TEXT,

`    `start\_date\_time TIMESTAMP NOT NULL,

`    `end\_date\_time TIMESTAMP NOT NULL

);

-- Create Event-Categories Relationship Table

CREATE TABLE event\_categories (

`    `event\_id UUID,

`    `category\_id UUID,

`    `PRIMARY KEY (event\_id, category\_id),

`    `FOREIGN KEY (event\_id) REFERENCES events (id) ON DELETE CASCADE,

`    `FOREIGN KEY (category\_id) REFERENCES categories (id) ON DELETE CASCADE

);

-----
## **Considerations**
**Scalability**:

- MongoDB was chosen for its flexibility and scalability.
- Indexed fields to optimize filtering and querying.

**User Experience**:

- Used React Query for data synchronization.
- Incorporated Toastify for real-time feedback.
- Designed a responsive layout for various screen sizes.

**Security**:

- Sanitized inputs with express-validator.
- Implemented rate-limiting and helmet for secure HTTP headers.
-----
## **Attributions**
- React Query, Toastify, and Styled Components were chosen for enhancing UX.
- Backend libraries like express-validator ensured robust input validation.
