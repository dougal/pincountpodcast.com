PincountPodcast.com
===================

The website for Pincount Podcast.

A frameworkless (2017 buzzword alert) static site generator which renders Markdown shownotes into Liquid templates.

Requirements
------------

Some scripts require a working Ruby interpreter. All other scripts are Bash.

See `Brewfile` for other dependencies.


Setup
-----

  1. Install Ruby dependencies: `$ bundle install`
  2. Install other dependencies. On Mac OS: `$ brew tap homebrew/bundle && brew bundle`
  3. Run `$ cp config/secrets.yml.example config/secrets.yml`
  4. Edit `config/secrets.yml` as required.
  5. Edit `config/website.yml` as required.


Adding a New Episode
--------------------

Episodes are stored in the `episodes/` directory.

    $ ./bin/new_episode

Creates a new directory at `episodes/x` with a Markdown file for the shownotes at `episodes/x/shownotes.md`. Creates a new Git branch, `episode-x`, and commits the generated shownotes file to this branch.


Building the Webpages
---------------------

Webpages are built from templates and episode metadata files. Build results are placed in `build/`.

    $ ./bin/build

This script is run automatically as part of the publish script.

Alternatively to build the app as changes are made, run:

    $ ./bin/watch


Running the Website Locally
---------------------------

Once the build step has been run, the website can be run locally.

    $ ./bin/server

The website can then be accessed at [http://localhost:8000/](http://localhost:8000/).


Uploading Audio Files
---------------------

Audio files are uploaded from a local path to an S3 bucket.

    $ ./bin/audio_upload EPISODE_NUMBER MP3_FILE_PATH


Syncing Audio Files
-------------------

Audio files are synced from the upload S3 bucket to the server.

    $ ./bin/audio_sync

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
* Add a licence. MIT for code, CC for episode shownotes? Font is "DejaVu Fonts License v1.00", layout is also MIT.
* Separate authors in feed.json.
