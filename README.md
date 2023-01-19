# Users SPA
## Project description

---
<br>

This is a single page application made with the framework VueJS V3.

List of the functionalities:

- Display a list of user profiles using JavaScript and a JSON file
- Allow users to filter the list of profiles by name
- Allow users to sort the list of profiles by name or bio length
- Allow users to view more details about a user by clicking on their profile
- Responsive design

<br>

## Run the project with Docker
---
<br>

You have the possibility to use a Docker container as your development environment. The development server will start automatically. You will be able to view the application from http://localhost:5173


<br>

### Prerequisite

install [docker](https://www.docker.com/) and a [git client](https://git-scm.com/).

From your terminal clone the following repo and cd into the project root directory.

### Build the image
```sh
docker build -t users-spa
```

### Run the container

```sh
docker run -p 5173:5173 users-spa
```

## Local installation without Docker
---

<br>

### Prerequisite

install [node js version 18.13.0 LTS](https://nodejs.org/en/)

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
