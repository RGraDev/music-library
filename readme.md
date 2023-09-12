# Music Library 🎶🎤
## Introduction

This is an application that performs CRUD operations on a PostgreSQL database containing
a table of artists. The project makes use of the following languages, technologies & framerworks:

- JavaScript
- Express API Framework
- SQL (Postgres)
- Docker (To run the database server within a container)
- Mocha, Chai & Supertest (Testing frameworks)

## Project Structure
```bash
├── README.md
├── index.js
├── migrations
│   └── 01-create-artist-table.sql
├── package-lock.json
├── package.json
├── scripts
│   ├── create-database.js
│   ├── drop-database.js
│   └── migrate.js
├── src
│   ├── app.js
│   ├── controllers
│   │   └── artist.js
│   ├── db
│   │   └── index.js
│   └── routes
│       └── artist.js
└── tests
    ├── artist-create.test.js
    ├── artist-delete.test.js
    ├── artist-read.test.js
    ├── artist-update.test.js
    ├── helper.js
    └── test-setup.js
```
