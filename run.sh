chmod +x $0


CONTAINER_NAME="portfolio"
IMAGE_NAME="portfolio"
PORT="5000"


if [ "$(docker ps -a -q -f name=$CONTAINER_NAME)" ]; then
    echo "Container $CONTAINER_NAME already exists."

    if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
        echo "Container $CONTAINER_NAME is already running. Stopping it first..."
        docker stop $CONTAINER_NAME
    fi


    docker rm $CONTAINER_NAME
fi


if [ -z "$(docker images -q $IMAGE_NAME)" ]; then
    echo "Building the Docker image..."
    docker build -t $IMAGE_NAME .
fi


echo "Running the container..."
docker run -d -p $PORT:$PORT -v $(pwd):/app --name $CONTAINER_NAME $IMAGE_NAME

echo "Container $CONTAINER_NAME is running on port $PORT"


echo "You can now this port:  http://localhost:5000/"