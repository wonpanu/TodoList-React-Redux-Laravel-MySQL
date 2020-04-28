docker stop $(docker inspect --format="{{.Id}}" mysql)
docker stop $(docker inspect --format="{{.Id}}" phpmyadmin)
