# upgrade
sudo apt-get update
sudo apt-get upgrade

# install basic packages
sudo apt-get update
sudo apt-get install git \
                     vim \
                     ssh \
                     zip unzip \
                     build-essential \
                     curl \
                     locate

adduser ubuntu

# make ubuntu superuser w/o password
vim /etc/sudoers.d/ubuntu
ubuntu ALL=(ALL) NOPASSWD:ALL

# fix timezone
sudo dpkg-reconfigure tzdata

# configure sshd
vim /etc/ssh/sshd_config
PasswordAuthentication no
sudo /etc/init.d/ssh restart

# copy id_rsa and authorized_keys

# configure iptables to block mongo access

# node
curl https://raw.githubusercontent.com/creationix/nvm/v0.18.0/install.sh | bash
nvm install v0.11.14
nvm install v0.10.33
npm instal -g bower grunt-cli ember-cli
