# sphpdesk
<h1>SartajPhp (sphp) Server for SartajPHP Framework</h1>
<p align="center"><a href="http://sartajphp.com" target="_blank">
    <img src="logo.png">
</a></p>

Info
-----------
[SartajPHP][1] is a **PHP framework** for web applications, Command Line Application, 
Desktop Application with Hybrid Technology and Mobile Application with Hybrid and Ajax Platform.
This PHP Framework used event oriented programming techniques. It is full flexible framework
where you can build any type of application like MVC, Component Oriented, API, Multi Tier,
Cross Platform, Web Service, plugin or extension for another PHP Frameworks, wrapper 
for another PHP frameworks or applications or your new things. This PHP Framework 
has lots of reusable **PHP components**. SartajPHP is giving life to lots of web,desktop and mobile applications.

VS Code Extension Available on Market Place search SartajPHP in VS code
------------
For more info see:- <a href="https://github.com/sartaj-sphp/vscode-sartajphp-intellisense">https://github.com/sartaj-sphp/vscode-sartajphp-intellisense</a>

Installation
------------

* [Install SartajPHP + Sphp Server][1] with NPM JS Package).

How to install Sphp Server binary package?

* With NPM:----
```
npm install -g sphpdesk
```

* After Installation run command

```
npx sphpdesk
```

or direct call if symlink work, sometime nmp doesn't create symlink for binary

```
sphpdesk
```

It runs default project inside res folder. If you want to run directly sphpserver then you can create a symlink inside your bin folder.
For run with double click on file app.sphp, you need to register .sphp file type with sphpserver application. Right click on app.sphp
file and select open with and choose sphpserver application path.OR you can install on your desktop with installation file inside 
res/sphpserver folder

Use With Electron:-
-------------

Add in your package.json

```
  "dependencies": {
    "sphpdesk": "^1.3.2"
  }
```

```
Copy SartajPHP project files inside your electron project folder. Or Vs Code use 
to genearte SartajPhp Project or use copy demo project from examples in github page. 
start.php file should be inside the www folder or what ever you give name for it.
ret = await sphpdesk.run_sphp_server("localhost",0,0,www_folder);
```

in main process file main.js

```javascript
const sphpdesk = require('sphpdesk');
const { app, BrowserWindow } = require('electron');
var ls = null;
var win = null;
var mhost = '127.0.0.1';
var mport = 8000;
const path = require('path');

// run demo project in examples folder
var wwwpath = path.resolve(__dirname + "/../demo");

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true,    
    }
  });
  win.loadURL("http://" + mhost + ":" + mport);
};

app.whenReady().then(async () => {
    ret = await sphpdesk.run_sphp_server("127.0.0.1",0,0,wwwpath);
    mhost = ret.host;
    mport = ret.port;
    ls = ret.SphpServer;
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0){
            createWindow();
         }
    })

});

app.on('window-all-closed', () => {
    ls.kill('SIGINT');
  if (process.platform !== 'darwin') app.quit();
});
```

Sphpdesk with Sphp Server Commands:-
-------------

* Run Desk App mode:- sphpdesk proj_dir/app.sphp
* Run Server App mode:- sphpdesk --proj proj_dir
* Run as Script:- sphpdesk script myscript.php 
* Create Script:- sphpdesk createscript myscript 
* Run Composer update:- sphpdesk updatesphp
* Read Settings from app.sphp and you can change running mode of sphpserver


app.sphp file settings:-
-------------

```
You can over-write these settings with console arguments:-
"project": Name of project,
"type": Run Mode:- srvapp or deskapp or consoleapp,
"host": "localhost",
"port": 0 : port number to serve server
"secure": 0 : no https
"php": "php": use system installed PHP or ""
"browser": "default":- System Default 
or "$exepath/browser/nw" your custom browser
or "" empty for inbuilt browser, these browser need libraries installed on system
 like WebView2 on windows and GTK3, WebKitGTK on linux

   browser command line arguments example:-
"browserparam": ["--url=$url"],
"browserparam1": ["--allow-file-access-from-files", "--disable-web-security", "--user-data-dir=$projpath/cache","--app=$url", "--disable-features=CrossSiteDocumentBlockingIfIsolating"],
"browserparam2": ["--app=$url"],
"browserparam3": ["--new-window", "$url"]

command line example:-
./sphpserver-linux --proj "/home/admin/web/domain.com/public_html" --type "srvp3" --port 8001 --host "domain.com" --php "php" --key "/home/admin/conf/web/ssl.domain.com.key" --cert "/home/admin/conf/web/ssl.domain.com.crt" --ca "/home/admin/conf/web/ssl.domain.com.pem"
```

Documentation
-------------

* Read the [Getting Started guide][1] if you are new to SartajPHP.
* Video Tutorial on Youtube [SartajPHP Video Tutorial][3] to learn SartajPHP practically.
 

Community
---------

* Follow us on [GitHub][2], [Youtube][3] and [Facebook][4].

Contributing
------------

For Contribute and Support us please contacts on our [Facebook][4] Page

Security Issues
---------------

If you discover a security vulnerability within SartajPHP PHP Framework, please contacts us
[Facebook Page][4].



[1]: https://www.sartajphp.com
[2]: https://github.com/sartaj-sphp/SartajPHP-Framework
[3]: https://www.youtube.com/channel/UCKENEpj-PZvpS2lC4cqh-7g
[4]: https://www.facebook.com/DevelopmentFramework/
[5]: https://github.com/sartaj-sphp/vscode-sartajphp-intellisense


