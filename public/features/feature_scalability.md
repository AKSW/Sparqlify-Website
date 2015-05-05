### Scalability

Sparqlify does not evaluate expressions in memory. All SPARQL filters end up in the corresponding SQL statement, giving the underlying RDBMS has maximum control over query planning.
