# Live link https://book-catalog-backend-with-pl-sql-prisma.vercel.app/

## Auth

 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/auth/signup (POST)
 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/auth/signin (POST)

 ## User

 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/users (GET all)
 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/users/0041c55c-c9d2-4c0d-80db-502908e12ed8 (Single GET) Include an id that is saved in your database
 * http://localhost:5000/api/v1/users/0041c55c-c9d2-4c0d-80db-502908e12ed8 (PATCH) Include an id that is saved in your database
 * http://localhost:5000/api/v1/users/19f601bc-aa38-4613-9430-e54f9aa5e241 (DELETE) Include an id that is saved in your database
 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/users/profile (GET) login user profile

 ## Category 
 
 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1//categories/create-category (POST)
 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/categories (GET all)
 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/categories/a1ac4dcd-8a14-4178-9990-721d0b33e1aa (Single GET) Include an id that is saved in your database
 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/categories/d2430ce1-3812-4225-a6b2-1f5b194c788b (PATCH) Include an id that is saved in your database
 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/categories/d2430ce1-3812-4225-a6b2-1f5b194c788b  (DELETE) Include an id that is saved in your database

 ## Books

 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/books/create-book (POST)
 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/books (GET all books)
 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/books/14e30b7a-b6fc-4a18-aad2-8bb496f1e434 (Single GET) Include an id that is saved in your database
 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/books/14e30b7a-b6fc-4a18-aad2-8bb496f1e434 (PATCH) Include an id that is saved in your database
 * http://localhost:5000/api/v1/books/8a901648-8bd7-44b0-80db-338b6fd5ee69 (DELETE) Include an id that is saved in your database
 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/books/e5bde217-d631-452c-b10a-b3412b4593ce/category (GET by category id)

 ## Order

 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/orders/create-order (POST)
 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/orders (GET all)
 * https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/orders/ccae2a6c-5776-473d-b0db-57f7fbced1df (GET) 

## Review And Rating

* https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/reviews/add-review (POST)
* https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/reviews/update-review/15c48762-4a05-457e-b324-05b09c7a379c (PATCH)
* https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/reviews/a9312b57-a476-4492-b962-0971446da367 (GET)
* https://book-catalog-backend-with-pl-sql-prisma.vercel.app/api/v1/reviews/23016279-84c6-4404-9ebd-72f826d82733 (DELETE)