sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'febkshop/test/integration/FirstJourney',
		'febkshop/test/integration/pages/AuthorsList',
		'febkshop/test/integration/pages/AuthorsObjectPage',
		'febkshop/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, AuthorsList, AuthorsObjectPage, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('febkshop') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAuthorsList: AuthorsList,
					onTheAuthorsObjectPage: AuthorsObjectPage,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);