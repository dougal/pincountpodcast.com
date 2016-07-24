PincountPodcast.com
===================

The website for Pincount Podcast

Requirements
------------

Some scripts require a working Ruby interpreter. User will be prompted to install required Rubygems if they are not available.

All other scripts are Bash.

Audio sync script requires a working install of [FFMPEG](https://ffmpeg.org) so as to determine the episode length.


Setup
-----

  1. Run `$ cp config/secrets.yml.example config/secrets.yml`
  2. Edit `config/secrets.yml` as required.
  3. Edit `config/website.yml` as required.

Adding a New Episode
--------------------

Episodes are stored in the `episodes/` directory.

    $ ./bin/new_episode

Creates a new directory at `episodes/x` with a Markdown file for the blog post at `episodes/x/post.md`.


Building the Webpages
---------------------

Webpages are built from templates and episode metadata files. Build results are placed in `build/`.

    $ ./bin/build

This script is run automatically as part of the publish script.


Running the Website Locally
---------------------------

Once the build step has been run, the website can be run locally.

    $ ./bin/server

The website can then be accessed at [http://localhost:8000/](http://localhost:8000/).


Syncing Audio Files
-------------------

Audio files are synced to an S3 bucket, then to the server. In this way audio files do not have to be added to the respository, or stored on a local machine after the inital upload.

Audio files should be placed at episodes/x/x.mp3`. The script will warn if any files are missing.

    $ ./bin/sync_audio_files

This script is run automatically as part of the publish script.


Publishing
----------

    $ ./bin/publish

This script will build the webpages, sync the audio files, then publish the webpages to the server.

If build fails, or any audio files are missing, publish script will halt without publishing any files.

Files are transferred via `scp` from the `build/` directory, to the server and directory defined in `config/secrets.yml`.


TODO
----

* HTTPS (Not letsencrypt due to itunes server issue)
* Consider mtime query arguments on mp3 file URLs.
* Consider mtime query arguments on asset URLs.
* .htaccess to remove .html from URLs.
* Add lastBuildDate to RSS feed. (and other pages?)
* OG, social stuff, etc. https://github.com/heiswayi/thinkspace/blob/master/_includes/head.html
* Share buttons
* Twitter card?

