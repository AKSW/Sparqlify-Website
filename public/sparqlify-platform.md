### sparqlify-platform (Deprecated; about to be superseded by sparqlify-web-admin)
The Sparqlify Platform (under /sparqlify-platform) bundles Sparqlify with the Linked Data wrapper [Pubby](https://github.com/cygri/pubby) and the SPARQL Web interface [Snorql](https://github.com/kurtjx/SNORQL).

Usage: `sparqlify-platform config-dir [port]` 

* `config-dir` Path to the configuration directory, e.g. `<repository-root/sparqlify-platform/config/example>`
* `port` Port on which to run the platform, default 7531.


For building, at the root of the project (outside of the sparqlify-\* directories), run `mvn compile` to build all modules.
Afterwards, lauch the platform using:

    cd sparqlify-platform/bin
    ./sparqlify-platform <path-to-config> <port>


Assuming the platform runs under `http://localhost:7531`, you can access the following services relative to this base url:
* `/sparql` is Sparqlify's SPARQL endpoint
* `/snorql` shows the SNORQL web frontend
* `/pubby` is the entry point to the Linked Data interface


#### Configuration
The configDirectory argument is mandatory and must contain a *sub-directory* for the context-path (i.e. `sparqlify-platform`) in turn contains the files:
* `platform.properties` This file contains configuration parameters that can be adjusted, such as the database connection.
* `views.sparqlify` The set of Sparqlify view definition to use.

I recommend to first create a copy of the files in `/sparqlify-platform/config/example` under a different location, then adjust the parameters and finally launch the platform with `-DconfigDirectory=...` set appropriately.

The platform *applies autoconfiguration to Pubby and Snorql*:
* Snorql: Namespaces are those of the views.sparqlify file.
* Pubby: The host name of all resources generated in the Sparqlify views is replaced with the URL of the platform (currently still needs to be configured via `platform.properties`)

Additionally you probably want to make the URIs nice by e.g. configuring an apache reverse proxy:

Enable the apache `proxy_http` module:

	sudo a2enmod proxy_http

Then in your `/etc/apache2/sites-available/default` add lines such as

	ProxyRequest Off
	ProxyPass /resource http://localhost:7531/pubby/bizer/bsbm/v01/ retry=1
	ProxyPassReverse /resource http://localhost:7531/pubby/bizer/bsbm/v01/

These entries will enable requests to `http://localhost/resource/...` rather than `http//localhost:7531/pubby/bizer/bsbm/v01/`.

The `retry=1` means, that apache only waits 1 seconds before retrying again when it encounters an error (e.g. HTTP code 500) from the proxied resource.

*IMPORTANT: ProxyRequests are off by default; DO NOT ENABLE THEM UNLESS YOU KNOW WHAT YOU ARE DOING. Simply enabling them potentially allows anyone to use your computer as a proxy.*
