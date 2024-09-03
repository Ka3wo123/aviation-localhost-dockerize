# Docker-compose - dockerizing whole app

### How to launch
1. Run `docker network create aviation`
2. Run `docker-compose up -d`

Hit http://localhost:3000/ to see frontend app. \
Hit http://localhost:3000/api to obtain backend Consul \
Run `docker exec -it mongo mongosh --username admin --password password --authenticationDatabase admin` to enter MongoDB and `use aviationDb`.




