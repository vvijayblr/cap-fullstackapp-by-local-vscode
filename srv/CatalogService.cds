using {sap.capire.bookshop as my} from '../db/schema';

//CatalogService is the oData service name exposing the entities from schema.cds

service CatalogService {

    entity Books   as select * from my.Books;
    entity Authors as select * from my.Authors;
/*     entity Books   as projection on my.Books;
    entity Authors as projection on my.Authors; */

}
