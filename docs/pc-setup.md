# PC-Setup

## Show boot messages
Edit `/etc/default/grub`

```diff
- GRUB_CMDLINE_LINUX_DEFAULT="quiet splash udev.log_priority=3"
+ GRUB_CMDLINE_LINUX_DEFAULT="udev.log_priority=3"
```

And then automatically re-generate the `grub.cfg` file with:
```
# grub-mkconfig -o /boot/grub/grub.cfg
```

## Install
### From repo

* fish
* google-chrome
* composer
* symfony-cli
* github-cli
* docker
* docker-compose
* keepass
* megasync-bin
* telegram-desktop
* whatsapp
* steam
* xdebug

### Other

* https://www.jetbrains.com/toolbox-app/
* https://chromewebstore.google.com/detail/noscript/doojmbjmlfjjnbmnoijecmcbfeoakpjm

### Configure fish
```
chsh -s /usr/bin/fish

fish_add_path /home/elkuku/bin
```
Create a new yakuake profile to use fish

### Configure github cli
#### Generate SSH key
```
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
```
Copy the output and add it as a new authenticatiuon SSH key to your GitHub settings.

Refs:
* https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
* https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

## Configure Docker
Enable and start the docker service

```
sudo systemctl enable docker.service
sudo systemctl start docker.service
```
Add the current user to the docker group

```
sudo usermod -aG docker $USER
```
Log out and log in again for it to take effect

## Configure PHP
edit `/etc/php/php.ini`

```ini
extension=iconv
extension=intl
extension=pdo_mysql
extension=pdo_pgsql
extension=gd
extension=xsl
```

edit `/etc/php/conf.d/xdebug.ini`

```ini
zend_extension=xdebug.so
xdebug.mode = develop,debug
xdebug.start_with_request = trigger
xdebug.client_port = 9003
```

### Install
* php-gd
* php-pgsql
* php-xsl

## Ingress
* https://iitc.app/community_plugins
* https://raw.githubusercontent.com/IITC-CE/Community-plugins/master/dist/modkin/multi_export.user.js
* https://github.com/Falenone/Blurtheme/raw/main/IITC-plugin-Blurtheme.user.js
* https://raw.githubusercontent.com/IITC-CE/Community-plugins/master/dist/DanielOnDiordna/imattc.user.js

## Starlink
* lib32-glu
* lib32-libxcursor
* lib32-pipewire

## Fish functions

```shell
function s
    symfony $argv
end
```

```shell
function play
    composer create-project elkuku/symfony-playground-two $argv -s dev
    cd $argv
    git init
    git add .
    git commit -m 'Import elkuku/symfony-playground-two'
    echo 'Your project is ready (;='
end
```