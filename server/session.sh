volume=$1
port=$2
image=$3
basepath=$4
container_name=$5
password=$6

mkdir $HOME/.JupyterDock/
cp -r $basepath/server $HOME/.JupyterDock/

docker run --rm \
    -v $volume:/src/ \
    -v $HOME/.JupyterDock/:/jpt/ \
    -p $port:$port \
    --name $container_name \
    $image \
    /bin/bash /jpt/server/jupyter.sh $port $password

# docker start \
#     $container_name \
#     /bin/bash /jpt/server/jupyter.sh $port $password

