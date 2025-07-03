Installation on window is portable.

installation on Linux:-
Install Open SSL
sudo apt install libssl-dev
sudo apt install openssl 1.0.2

command to run server base app
./sphpserver-linux --proj "/home/admin/web/domain.com/public_html" --type "srvp3" --port 8001 --host "domain.com" --php "php" --key "/home/admin/conf/web/ssl.domain.com.key" --cert "/home/admin/conf/web/ssl.domain.com.crt" --ca "/home/admin/conf/web/ssl.domain.com.pem"

--ca is same --cert = pem file and you can leave --ca 

you can also specify --sartajphppath 

./sphpserver-linux --proj /home/user1/www/demo

---------------------------------------

Command to run desktop application
-----------------------------------
add path of sphpserver-linux file to path variable

now open project folder and run:-
sphpserver-linux ./app.sphp
OR on windows
sphpserver-win ./app.sphp

run default project simple run command on terminal or command prompt:-
sphpserver-linux
or on windows
sphpserver-win


run phar file
D:\www\sphpdesk\sphpserver_fpc\sphpserver.exe D:\www\demo5\dist\demo5_exec.phar
