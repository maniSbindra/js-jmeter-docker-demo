docker -H tcp://`hostname`:2376 login --username=$1 --password=$2 --email=$3 https://index.docker.io/v1/

docker -H tcp://`hostname`:2376 build -t $4:$5 .  
docker -H tcp://`hostname`:2376 push $4:$5

docker -H tcp://`hostname`:2376 logout