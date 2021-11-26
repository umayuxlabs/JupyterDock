port=$1
password=$2

cd /src/
mkdir .logs/

rm /jpt/server/jupyter_lab_config.py
python /jpt/server/create_password.py $password
jupyter-lab --ip 0.0.0.0 --port $port --allow-root --config /jpt/server/jupyter_lab_config.py