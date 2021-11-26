port=$1
rootdir=$2

cd /src/
mkdir .logs/

jupyter-lab --ip 0.0.0.0 --port $port --allow-root --config /jpt/jupyter_lab_config.py