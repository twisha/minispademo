Bower 1.3.5.2
=============

Bower is a package manager for client-side JavaScript. It is platform independent (unlike
NuGet, gem or npm) works with bare Git repositories, and because of this - largely
supported in JavaScript community. That's why Bower becomes a standard client-side package
manager on all platforms.


Installation overview
---------------------

Bower cmd is installed into .bin dir in your project, along with Node.js cmd. NuGet rules are
the same: everything deployed by NuGet, so use package restore and ignore packages in VCS.

Node.js and Git is not needed to be installed on dev machines or build servers.


Automation
----------

Use ".bin\bower" command to run Bower in your build scripts. For example, here is a simple
MsBuild target to restore Bower packages defined in bower.json:

<Target Name="BowerInstall">
  <Exec Command=".bin\bower install" />
</Target>


Daily usage
-----------

Because ".bin" was added to your PATH, you should be able to run Bower directly in the
command prompt from the project dir. For example, if "MySite.Web" is a project dir:

D:\Projects\MySite\MySite.Web> bower install requirejs

Note: add ".bin" to the PATH manually for other developers in your team.
Note: if PATH was changed, restart your command prompt to refresh environment variables.


Proxy settings
--------------

If Bower should use a proxy for remote connections, set 'HTTP_PROXY' and/or 'HTTPS_PROXY'
environment variables to the proxy URL. For Node.js delivered via NuGet, edit
"~/.bin/node.cmd" file:
    
    SET HTTP_PROXY=http://1:1@127.0.0.1:8888
    SET HTTPS_PROXY=http://1:1@127.0.0.1:8888
    
where "http://1:1@127.0.0.1:8888" is the proxy at "127.0.0.1:8888" with username "1" and
password "1" used for authentication.


Docs
----

Read more about Bower at http://bower.io/


------------------------------------------------------
© 2014 Twitter and other contributors