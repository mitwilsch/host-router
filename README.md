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

# cert re-issue refs

Automating Certificate Renewal
The Let's Encrypt CA issues short-lived certificates, they are only valid for 90 days. This makes automating the renewal process important. Thankfully, certbot makes that easy with the command certbot renew. It checks all installed certificates, and renews the ones that will expire in less than 30 days.

It will use the same plugin for the renewal as was used when initially getting the certificate. In our case that is the standalone plugin.

The challenge process is the same, so also for renewals the ports 80 or 443 must be free.
certbot provides pre and post hooks, which we use to stop and start the webserver during the renewal, to free the ports.
The hooks are executed only if a certificate needs to be renewed, so there is no unnecessary downtime of your services.

Since we are using docker-compose, the whole command looks like this:

certbot renew --pre-hook "docker-compose -f path/to/docker-compose.yml down" --post-hook "docker-compose -f path/to/docker-compose.yml up -d"
To complete the automation simply add the previous command as a cronjob.
Open the cron file with crontab -e.
In there add a new line with

@daily certbot renew --pre-hook "docker-compose -f path/to/docker-compose.yml down" --post-hook "docker-compose -f path/to/docker-compose.yml up -d"
That's it. Now the renew command is executed daily, and you won't have to worry about your certificates' expiration date.
