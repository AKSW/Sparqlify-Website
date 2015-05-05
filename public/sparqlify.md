### sparqlify
Usage: `sparqlify [options]`

Options are:

* Setup
  * -m   SML view definition file

* Database Connectivity Settings
  * -h   Hostname of the database (e.g. localhost or localhost:5432)
  * -d   Database name
  * -u   User name
  * -p   Password
  * -j   JDBC URI (mutually exclusive with both -h and -d)

* Quality of Service
  * -n   Maximum result set size
  * -t   Maximum query execution time in seconds (excluding rewriting time)

* Stand-alone Server Configuration
  * -P   Server port [default: 7531]

* Run-Once (these options prevent the server from being started and are mutually exclusive with the server configuration)
  * -D   Create an N-TRIPLES RDF dump on STDOUT 
  * -Q   [SPARQL query] Runs a SPARQL query against the configured database and view definitions

#### Example
The following command will start the Sparqlify HTTP server on the default port.

    sparqlify -h localhost -u postgres -p secret -d mydb -m mydb-mappings.sml -n 1000 -t 30

Agents can now access the SPARQL endpoint at `http://localhost:7531/sparql`

