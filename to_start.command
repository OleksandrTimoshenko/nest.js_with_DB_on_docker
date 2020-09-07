https://rohanfaiyaz.com/post/nest/

to tsart
docker-compose up -d --force-recreate && npm start

to delete all
docker ps -aq && docker stop $(docker ps -aq) && docker rm $(docker ps -aq) && docker rmi $(docker images -q)

to connect to db 
su postgres
psql -d rainbow_database -U unicorn_user
\l


Запитати куди кидати база на AWS
Запитати що там з Тераформом
Сказати що йду в деканат
