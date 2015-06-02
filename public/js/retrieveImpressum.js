//in ng-scope reinschreiben

var sparqlService = jassa.service.SparqlServiceBuilder
    .http(http://aksw.org/sparql, http://aksw.org/ {type: 'POST'})
    .create();
var store = new jassa.sponate.StoreFacade(sparqlService);
store.addMap({
    name: 'info',
    template: [{ id: '?s', depiction: '?d', label: '?l' }],
    from: '?s memberOf <http://aksw.org/Projects/Sparqlify> ; foaf:depicition ?d ; rdfs:label ?l' }
});
var listService = store.info.getListService();
listService.fetchItems()
    .then(function(entries){
        //kv: id element
});