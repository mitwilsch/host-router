# host-router

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

Router for self-hosting React apps from a single project.

I made this project because I want to run multiple, small-ish webapps or React pages from one, low-cost server (such as the always-free configuration of Google Cloud VM), without having to maintain Nginx configs or setup an existing Nginx config on a new server. I also ran into performance issues running multiple Docker containers on such an environment, so mostly serving static files.

What's not covered here: any SSL configs. These are generated on the server itself, so Nginx will break if the SSL files don't exist.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Router uses Docker, and the Nginx docker image.
Make a folder for the apps:

Router serves from dist folders for React apps, and Docker containers for full-stack apps.

```
ls Apps/
- host-router/
  - this...
- app1/
  - dist/
    - index.html
    - bundle.js
- app2/
  - (Docker container build)
```

### Installing

For each static host (React minified webpack dist), edit:

nginx.conf

```
... server blocks...
server {
    server_name  <URL>;

    location  / {
      root <dist folder location>;
      index index.html;
      autoindex off;
    }

    listen 80;
    ...ssl, cache, other configs, etc. ...
 }
```

For each full-stack app, edit:

docker-compose

```
projectName:
    image: <docker image:latest>
    ports: '8080'
```

and:

nginx.conf

```
  server {
    server_name  <URL>;

     location  / {
     root <dist folder>;
     index index.html;
     autoindex off;
   }

   location /api {
     rewrite ^/api(.*) $1 break;
     proxy_pass   <dockerContainerNetwork:PORT>;
   }



    listen 80;
    ... ssl, caches, other configs, etc. ...
  }
```

Run docker-compose to spin up

Static files will be served by Nginx container

Full-stack apps run in Docker containers

## Usage <a name = "usage"></a>

Nothing is needed to refresh static serves (they are hosted from the folder given in Nginx config, so as long as they are on the server they should refresh automatically)

To refresh full-stack serves:

```
cd <project_dir>
docker Build <imageName>

cd <host-router>
docker-compose up --force-recreate
```
