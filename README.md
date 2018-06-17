arisuchan - A lightweight and full featured PHP imageboard.
========================================================

About
------------
arisuchan is a free light-weight, fast, highly configurable, and user-friendly
imageboard software package. It is written in PHP and has few dependencies.

arisuchan is a fork of [vichan](https://github.com/vichan-devel/vichan/), which is still under active development.

Support and announcements for arisuchan development can be found at: https://arisuchan.jp/dev/

Requirements
------------
1.	PHP >= 5.4 (the software may continue to be compatible with PHP 5.x, but only PHP 7.x and newer is explicitly supported)
2.	MySQL/MariaDB server
3.	[mbstring](http://www.php.net/manual/en/mbstring.installation.php)
4.	[PHP GD](http://www.php.net/manual/en/intro.image.php)
5.	[PHP PDO](http://www.php.net/manual/en/intro.pdo.php)

We try to ensure that arisuchan is compatible with all major web servers and
operating systems. arisuchan does not include an Apache ```.htaccess``` file nor does
it need one.

### Recommended
1.	MySQL/MariaDB server >= 5.5.3
2.	ImageMagick (command-line ImageMagick or GraphicsMagick preferred).
3.	[APC (Alternative PHP Cache)](http://php.net/manual/en/book.apc.php),
	[XCache](http://xcache.lighttpd.net/) or
	[Memcached](http://www.php.net/manual/en/intro.memcached.php)

Contributing
------------
You can contribute to arisuchan by:

*	developing patches/improvements/translations and using GitHub to submit pull requests
*	providing feedback and suggestions
*	writing/editing documentation

If you need help developing a patch, please reach out to us in our IRC channel at #arisuchan-dev on Freenode.

Installation
-------------
1.	Download and extract arisuchan to your web directory or get the latest
	development version with:

        git clone git://github.com/arisu-dev/arisuchan.git

2.	Navigate to ```install.php``` in your web browser and follow the
	prompts.
3.	arisuchan should now be installed. Log in to ```mod.php``` with the
	default username and password combination: **admin / password**.

Please remember to change the administrator account password.

See also: [Configuration Basics](https://web.archive.org/web/20121003095922/http://tinyboard.org/docs/?p=Config).

Upgrade
-------
To upgrade from any version of arisuchan:

Either run ```git pull``` to update your files, if you used git, or
backup your ```inc/instance-config.php```, replace all your files in place
(don't remove boards etc.), then put ```inc/instance-config.php``` back and
finally run ```install.php```.

Support
--------

If you need assistance with installing, configuring, or using arisuchan, you may
find support from a variety of sources:

*	If you're unsure about how to enable or configure certain features, make
	sure you have read the comments in ```inc/config.php```.
*	Check out the [official arisuchan development board](https://arisuchan.jp/dev/).
*	You can join arisuchan's IRC channel for support
	[irc.freenode.net #arisuchan-dev](irc://irc.freenode.net/arisuchan-dev)

### Tinyboard support
arisuchan is based on a Tinyboard so both engines have very much in common. These
links may be helpful for you as well:

*	Tinyboard documentation can be found [here](https://web.archive.org/web/20121016074303/http://tinyboard.org/docs/?p=Main_Page).

CLI tools
-----------------
There are a few command line interface tools, based on Tinyboard-Tools. These need
to be launched from a Unix shell account (SSH, or something). They are located in a ```tools/```
directory.

You actually don't need these tools for your imageboard functioning, they are aimed
at the power users. You won't be able to run these from shared hosting accounts
(i.e. all free web servers).

Oekaki
------
arisuchan makes use of [wPaint](https://github.com/websanova/wPaint) for oekaki. After you pull the repository, however, you will need to download wPaint separately using git's `submodule` feature. Use the following commands:

```
git submodule init
git submodule update
```

To enable oekaki, add all the scripts listed in `js/wpaint.js` to your `instance-config.php`.

WebM support
------------
Read `inc/lib/webm/README.md` for information about enabling webm.

License
--------
See [LICENSE.md](http://github.com/arisu-dev/arisuchan/blob/master/LICENSE.md).

