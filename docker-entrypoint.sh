# Wait for the database docker to be running
# while ! nc "database" 3306; do
#   >&2 echo "database is unavailable - sleeping"
#   sleep 1
# done
service nginx start
npm start
