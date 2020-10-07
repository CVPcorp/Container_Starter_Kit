# `College Hire Bootcamp Starter Kits`

The purpose of this project is to provide a template for the College Hire Bootcamp hackathon and demonstrate the use of `Docker Desktop` and how it can increase software developer productivity, quickly and easily containerize applications, and include DevOps as a standard practice from the beginning of a project.

##### This project consists of the following components...
* PostgreSql Database
* ExpressJS API built on NodeJS (uses JavaScript)
* NestJS API built on NodeJS & ExpressJS (uses Typescript)
* React Web Application

Each of the components are built into a docker container using the `Dockerfile.dev` file which specifies the Docker base image to use and the package dependencies to install using `npm`.

The `docker-compose.yml` file configures the containers volumes, port mappings, and service connections for communication with each other.

##### PgAdmin...
* localhost port 80 maps to container port 80
* PgAdmin Login - [http://localhost](http://localhost)

### `NOTE: PgAdmin & Database username, password, port information is contained within docker-compose.yml file in root folder`

##### React Web Application...
* localhost port 3000 maps to container port 3000
* React Home Page - [http://localhost:3000](http://localhost:3000)
* React Posts Route - [http://localhost:3000/posts](http://localhost:3000/posts)
* React Tasks Route - [http://localhost:3000/tasks](http://localhost:3000/tasks)

##### Posts API...
* localhost port 4000 maps to container port 4000
* Health Check - [http://localhost:4000/api](http://localhost:4000/api)
* Posts Route - [http://localhost:4000/api/posts](http://localhost:4000/api/posts)

##### Tasks API...
* localhost port 5000 maps to container port 5000
* Health Check - [http://localhost:5000/api/ping](http://localhost:5000/api/ping)
* Tasks Route - [http://localhost:5000/api/tasks](http://localhost:5000/api/tasks)
* Swagger UI - [http://localhost:5000/api/swagger](http://localhost:5000/api/swagger)
  
## `Available Scripts`

From with the `root` project directory, you can run:

### `docker-compose up`
This will pull down the base images either from `Docker Hub` or use the local cache if already pulled previously, build, and run the containers in the background.

### `docker-compose up --build`
The `--build` option is the same as `docker-compose up`, however, it will force the containers to be rebuilt in order to capture changes within the docker files.

### `docker-compose down`
This will stop, tear down, & destroy all containers