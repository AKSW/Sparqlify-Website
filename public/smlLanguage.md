## SML Mapping Syntax:
A Sparqlification Mapping Language (SML) configuration is essentially a set of CREATE VIEW statements, somewhat similar to the CREATE VIEW statement from SQL.
Probably the easiest way to learn to syntax is to look at the following resources:

* The [SML documentation](http://sparqlify.org/wiki/SML)
* The [SML test suite](https://github.com/AKSW/Sparqlify/tree/master/sparqlify-core/src/test/resources/org/aksw/sml/r2rml_tests) which is derived from the [R2RML test suite](https://github.com/AKSW/Sparqlify/tree/master/sparqlify-core/src/test/resources/org/w3c/r2rml_tests).

Two more examples are from

Additionally, for convenience, prefixes can be declared, which are valid throughout the config file.
As comments, you can use //, /\* \*/, and #. 

For a first impression, here is a quick example:
    
    /* This is a comment
     * /* You can even nest them! */
     */
    // Prefixes are valid throughout the file
    Prefix dbp:<http://dbpedia.org/ontology/>
    Prefix ex:<http://ex.org/>

    Create View myFirstView As
        Construct {
            ?s a dbp:Person .
            ?s ex:workPage ?w .
        }
    With
        ?s = uri('http://mydomain.org/person', ?id) // Define ?s to be an URI generated from the concatenation of a prefix with mytable's id-column.
        ?w = uri(?work_page) // ?w is assigned the URIs in the column 'work_page' of 'mytable'
    Constrain
        ?w prefix "http://my-organization.org/user/" // Constraints can be used for optimization, e.g. to prune unsatisfiable join conditions
    From
        mytable; // If you want to use an SQL query, the query (without trailing semicolon) must be enclosed in double square brackets: [[SELECT id, work_page FROM mytable]]


### Notes for sparqlify-csv
For `sparqlify-csv` view definition syntax is almost the same as above; the differences being:

* Instead of `Create View viewname As Construct` start your views with `CREATE VIEW TEMPLATE viewname As Construct`
* There is no FROM and CONSTRAINT clause

Colums can be referenced either by name (see the -h option) or by index (1-based).

#### Example

    // Assume a CSV file with the following columns (osm stands for OpenStreetMap)
    (city\_name, country\_name, osm\_entity\_type, osm\_id, longitude, latitude)

    Prefix fn:<http://aksw.org/sparqlify/> //Needed for urlEncode and urlDecode.
    Prefix rdfs:<http://www.w3.org/2000/01/rdf-schema#>
    Prefix owl:<http://www.w3.org/2002/07/owl#>
    Prefix xsd:<http://www.w3.org/2001/XMLSchema#>
    Prefix geo:<http://www.w3.org/2003/01/geo/wgs84_pos#>

    Create View Template geocode As
      Construct {
        ?cityUri
          owl:sameAs ?lgdUri .

        ?lgdUri
          rdfs:label ?cityLabel ;
          geo:long ?long ;
          geo:lat ?lat .
      }
      With
        ?cityUri = uri(concat("http://fp7-pp.publicdata.eu/resource/city/", fn:urlEncode(?2), "-", fn:urlEncode(?1)))
        ?cityLabel = plainLiteral(?1)
        ?lgdUri = uri(concat("http://linkedgeodata.org/triplify/", ?4, ?5))
        ?long = typedLiteral(?6, xsd:float)
        ?lat = typedLiteral(?7, xsd:float)

