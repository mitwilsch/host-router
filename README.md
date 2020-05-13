# host-router

Router for self-hosting React apps from a single project

# Layout

This project houses a docker-compose and config files

Should run a Docker container, running nginx
docker container loads configs
Nginx configs route domain names to ports on localhost

docker-compose bring up various images, serving by 3001,3002,...

nginx container runs on port 80 of server
routes to docker container port depending on routing configs

URLs on front-end should rewrite on backend, ie
request to domain1/api/test => localhost:3001/api/test
