docker rmi $(docker inspect --format="{{.Id}}" mysql)
docker rmi $(docker inspect --format="{{.Id}}" phpmyadmin)
