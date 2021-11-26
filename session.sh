volume=$1
port=$2
image=$3
basepath=$4
container_name=$5

docker run --rm \
    -v $volume:/src/ \
    -v $basepath:/jpt/ \
    -p $port:$port \
    --name $container_name \
    $image \
    /bin/bash /jpt/jupyter.sh $port $rootdir