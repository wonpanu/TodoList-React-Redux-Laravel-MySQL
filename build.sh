docker run --name mysql -e MYSQL_ROOT_PASSWORD=1234 -p 3307:3306 -d mysql:5.7.29
docker run --name phpmyadmin -d --link mysql:db -p 5000:80 phpmyadmin/phpmyadmin
