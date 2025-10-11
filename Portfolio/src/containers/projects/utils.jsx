export const data = {
       heading : "Projects" ,
       list  : [
             {
                title :"Real Time LeaderBoard" , 
                link  :"https://github.com/rupak26/Real-time-Leaderboard",
                Description : `Built a real-time leaderboard backend using Golang, PostgreSQL, and Redis for high-performance ranking
                               operations.Implemented JWT-based authentication for secure user access and score submissions.Designed RESTful APIs to submit scores, 
                               fetch global rankings, and retrieve user-specific ranks in real time.Utilized Redis Sorted Sets (ZSET) 
                               to efficiently manage and update leaderboard scores.Integrated database migration tools to ensure seamless schema management.
                               Focused on scalability, low-latency updates, and clean code architecture`
             },
             {
                title : "SocialMedia" ,
                link : 'https://github.com/rupak26/SocialMedia',
                Description : `Developed a blog web application using Django Rest Framework and PostgreSQL, featuring user
                               authentication and authorization through registration, login, JWT-based authentication, account
                               activation via OTP, and password reset functionality. The application allows registered users to create,
                               edit, and delete blog posts, managing their visibility through published or draft status. Additionally, a
                               commenting system was implemented, enabling logged-in users to comment on posts with the ability
                               to edit or delete their comments. The app also includes advanced features like post pagination,
                               filtering, and keyword search for an enhanced user experience.`               
             } ,
             {
                title : "Task_Management" ,
                link : 'https://github.com/rupak26/TaskManagement-FastAPI-',
                Description : `Developed a task managements app . The features of this web app are Task creation, updates, deletion, and status filtering (pending/completed); supports task prioritization 
                               Tech Stack: FastAPI (Backend), MongoDB (Database), Pydantic (Validation), Motor (Async MongoDB Driver).
                               Extras: Asynchronous CRUD operations, environment variable configuration, interactive Swagger UI documentation.`
             } ,
             {
                title : "E-Commerce-Site" ,
                link : 'https://github.com/rupak26/E-Commerce-Site-with-Payment-Gateway-SSLCommerz' ,
                Description : `In this project I Implemented a user-friendly interface with React.js for frontend development, while
                               utilizing Node.js and Express.js for robust back-end functionality. Leveraged MongoDB for efficient
                               data storage and retrieval, ensuring seamless product management and order processing .`
             } ,
             {
                title : "MovieSuggesstion" ,
                link : 'https://github.com/rupak26/MovieSuggesstion' ,
                Description : `Simple movie Suggesstion app where i used api from a site name 'themoviedb.com'`
             }
       ] 
};