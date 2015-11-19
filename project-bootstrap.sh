#!/bin/bash -x

# setup npm/bower environment goodness
# NOTE: http://stackoverflow.com/a/18277225
echo 'prefix = ~/.npm-global' >> ~/.npmrc
echo 'export PATH="$PATH:$HOME/.npm-global/bin"' >> ~/.bashrc
source ~/.bashrc


# setup project dependencies
cd /vagrant
npm install
npm update

./node_modules/bower/bin/bower install --config.interactive=false

# build the documentation
mkdocs build --clean

# import initial data
cd data
./import.sh
