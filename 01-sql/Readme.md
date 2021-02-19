
docker run -p 3306:3306 --name mysql_db_server -e MYSQL_ROOT_PASSWORD=secret -d mysql:8.0.1

docker run --name myadmin -d --link mysql_db_server:db -p 8080:80 phpmyadmin

docker exec -it mysql_db_server bash
$ mysql -uroot -p
$ secret


docker exec -it mysql_db_server mysql -uroot -p
$ secret