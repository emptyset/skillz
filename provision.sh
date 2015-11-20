#!/bin/sh

# update, upgrade distribution
apt-get update 
# NOTE: http://askubuntu.com/a/147079
sudo DEBIAN_FRONTEND=noninteractive apt-get -y -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold" dist-upgrade

# install: prerequisite packages
apt-get -y install build-essential curl git python g++ make python-software-properties vim

# install mongodb
# NOTE: aggregate pipeline only exists in versions 2.2 and later
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
apt-get update
sudo apt-get install -y mongodb-org
echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-org-shell hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections

# install: nodejs and npm
sudo add-apt-repository ppa:chris-lea/node.js
apt-get update
apt-get -y install nodejs

# install: pip
curl -sL https://bootstrap.pypa.io/get-pip.py | sudo python - 
pip install --upgrade pip

# install: mkdocs
pip install mkdocs
