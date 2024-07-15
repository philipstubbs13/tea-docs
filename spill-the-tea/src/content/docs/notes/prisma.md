---
title: Prisma
description: A guide in my new Starlight docs site.
---

* Prisma Crash Course (YouTube): <https://www.youtube.com/watch?v=CYH04BJzamo>
* <https://www.traversymedia.com/blog/prisma-crash-course>
* What Is Prisma and Why Use It
    * A modern database toolkit/orm for web developers that simplifies database interactions
    * Provides type safety and catches data-related errors
    * Support for various databases (Postgres, MySQL, etc)
    * Automatically generates code based on your database schema.
* 3 Parts of Prisma
    * Prisma Client - auto-generated and type-safe query builder
    * Prisma Migrate - declarative data modeling and migration system
    * Prisma Studio - GUI to view and edit your data
* What is Data Modeling?
    * Data modeling is the process of defining the data requirements and structures of a sytem.
    * Usually involves describing the database schema, including tables, fields, data types and relationships
* Getting Started

```bash
npm init -y

npm install typescript ts-node @types/node -D

npx tsc --init

npm i prisma -D

npx prisma init --datasource-provider sqlite

npx prisma migrate dev --name init

npx ts-node index.ts

npx prisma studio
```