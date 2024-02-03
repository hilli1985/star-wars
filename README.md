# star-wars
server and client using ext api 

# run the project with containers (main folder)
===============================================
docker build -t my-server-image .
docker run --name my-server -p 3001:3001 -d my-server-image

docker build -t my-client-image .
docker run --name my-client -p 8080:8080 -d my-client-image

# run the projects locally 
==========================
# server 
npm run start

# client 
npm start


# using docker compose (main folder)
====================================
# Build and start the services
docker-compose up -d

# Stop the services
docker-compose down
