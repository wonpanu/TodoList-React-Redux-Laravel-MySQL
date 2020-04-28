docker start $(docker inspect --format="{{.Id}}" mysql)
docker start $(docker inspect --format="{{.Id}}" phpmyadmin)
