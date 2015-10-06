//get all documents
db.movies.find();
{ "_id" : ObjectId("5613206c893090e04cfed71d"), "title" : "Fight Club", "writer" : "Chuck Palahniuk", "year" : "1999", "actors" : [ "Brad Pitt", "Edward Norton" ] }
{ "_id" : ObjectId("561320d9893090e04cfed71e"), "title" : "Pulp Fiction", "writer" : "Quentin Tarantino", "year" : "1994", "actors" : [ "John Travolta", "Uma Thurman" ] }
{ "_id" : ObjectId("56132132893090e04cfed71f"), "title" : "Inglorious Basterds", "writer" : "Quentin Tarantino", "year" : "2009", "actors" : [ "Brad Pitt", "Diane Kruger", "Eli Roth" ] }
{ "_id" : ObjectId("56132186893090e04cfed720"), "title" : "The Hobbit: An Unexpected Journey", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit" }
{ "_id" : ObjectId("561321ad893090e04cfed721"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R. Tolkein", "year" : "2013", "franchise" : "The Hobbit" }
{ "_id" : ObjectId("56132283893090e04cfed722"), "title" : "The Hobbit: The Battle of the Five Armies", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit", "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness" }
{ "_id" : ObjectId("561322d1893090e04cfed723"), "title" : "Pee Wee Herman's Big Adventure" }
{ "_id" : ObjectId("561322ee893090e04cfed724"), "title" : "Avatar" }

//get all documents with writer set to Quentin Tarantino
db.movies.find({writer : 'Quentin Tarantino'});
{ "_id" : ObjectId("561320d9893090e04cfed71e"), "title" : "Pulp Fiction", "writer" : "Quentin Tarantino", "year" : "1994", "actors" : [ "John Travolta", "Uma Thurman" ] }
{ "_id" : ObjectId("56132132893090e04cfed71f"), "title" : "Inglorious Basterds", "writer" : "Quentin Tarantino", "year" : "2009", "actors" : [ "Brad Pitt", "Diane Kruger", "Eli Roth" ] }

//get all documents where actors include Brad Pitt
db.movies.find({ actors : 'Brad Pitt'});
{ "_id" : ObjectId("5613206c893090e04cfed71d"), "title" : "Fight Club", "writer" : "Chuck Palahniuk", "year" : "1999", "actors" : [ "Brad Pitt", "Edward Norton" ] }
{ "_id" : ObjectId("56132132893090e04cfed71f"), "title" : "Inglorious Basterds", "writer" : "Quentin Tarantino", "year" : "2009", "actors" : [ "Brad Pitt", "Diane Kruger", "Eli Roth" ] }

//get all documents with franchise set to The Hobbit
db.movies.find( { franchise : 'The Hobbit' });
{ "_id" : ObjectId("56132186893090e04cfed720"), "title" : "The Hobbit: An Unexpected Journey", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit" }
{ "_id" : ObjectId("561321ad893090e04cfed721"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R. Tolkein", "year" : "2013", "franchise" : "The Hobbit" }
{ "_id" : ObjectId("56132283893090e04cfed722"), "title" : "The Hobbit: The Battle of the Five Armies", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit", "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness" }

//get all movies released in the 90s
db.movies.find( { year : { $gte : '1990', $lte : '2000'} });
{ "_id" : ObjectId("5613206c893090e04cfed71d"), "title" : "Fight Club", "writer" : "Chuck Palahniuk", "year" : "1999", "actors" : [ "Brad Pitt", "Edward Norton" ] }
{ "_id" : ObjectId("561320d9893090e04cfed71e"), "title" : "Pulp Fiction", "writer" : "Quentin Tarantino", "year" : "1994", "actors" : [ "John Travolta", "Uma Thurman" ] }

//get all movies released before the year 2000 or after 2010
db.movies.find( { $or: [ { year: { $lt: '2000' } }, { year: { $gt: '2010' } } ] })
{ "_id" : ObjectId("5613206c893090e04cfed71d"), "title" : "Fight Club", "writer" : "Chuck Palahniuk", "year" : "1999", "actors" : [ "Brad Pitt", "Edward Norton" ] }
{ "_id" : ObjectId("561320d9893090e04cfed71e"), "title" : "Pulp Fiction", "writer" : "Quentin Tarantino", "year" : "1994", "actors" : [ "John Travolta", "Uma Thurman" ] }
{ "_id" : ObjectId("56132186893090e04cfed720"), "title" : "The Hobbit: An Unexpected Journey", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit" }
{ "_id" : ObjectId("561321ad893090e04cfed721"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R. Tolkein", "year" : "2013", "franchise" : "The Hobbit" }
{ "_id" : ObjectId("56132283893090e04cfed722"), "title" : "The Hobbit: The Battle of the Five Armies", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit", "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness" }


//update documents adding new synopsis
db.movies.update( { title : 'The Hobbit: An Unexpected Journey'}, { $set : { synopsis : 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.'} });

//update documents adding new synopsis
db.movies.update( { title : 'The Hobbit: The Desolation of Smaug'}, { $set : { synopsis : 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.'} });
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

//update document by adding new actor
db.movies.update( {title : 'Pulp Fiction'}, { $push : { actors : 'Samuel L. Jackson'} });
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

//search for Bilbo by creating an index in synopsis
db.movies.createIndex( { synopsis : 'text'});
{
  "createdCollectionAutomatically" : false,
  "numIndexesBefore" : 1,
  "numIndexesAfter" : 2,
  "ok" : 1
}
> db.movies.find( { $text : { $search : 'Bilbo'} } );
{ "_id" : ObjectId("56132186893090e04cfed720"), "title" : "The Hobbit: An Unexpected Journey", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit", "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." }
{ "_id" : ObjectId("56132283893090e04cfed722"), "title" : "The Hobbit: The Battle of the Five Armies", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit", "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness" }
{ "_id" : ObjectId("561321ad893090e04cfed721"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R. Tolkein", "year" : "2013", "franchise" : "The Hobbit", "synopsis" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." }

//search for Gandalf in synopsis
db.movies.find( { $text : { $search : 'Gandalf'} } );
{ "_id" : ObjectId("561321ad893090e04cfed721"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R. Tolkein", "year" : "2013", "franchise" : "The Hobbit", "synopsis" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." }

//search for Bilbo and not Gandalf
db.movies.find( { $text : { $search : 'Bilbo -Gandalf'} } );
{ "_id" : ObjectId("56132186893090e04cfed720"), "title" : "The Hobbit: An Unexpected Journey", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit", "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." }
{ "_id" : ObjectId("56132283893090e04cfed722"), "title" : "The Hobbit: The Battle of the Five Armies", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit", "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness" }

//search synopsis for movies that contain 'dwarves' or 'hobbit'
db.movies.find( { $text : { $search : 'dwarves hobbit'} } );
{ "_id" : ObjectId("561321ad893090e04cfed721"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R. Tolkein", "year" : "2013", "franchise" : "The Hobbit", "synopsis" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." }
{ "_id" : ObjectId("56132186893090e04cfed720"), "title" : "The Hobbit: An Unexpected Journey", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit", "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." }

//search synopsis for movies that contain the words gold and dragon
b.movies.find( { $text : { $search : '\'gold\' dragon'} } );
{ "_id" : ObjectId("56132186893090e04cfed720"), "title" : "The Hobbit: An Unexpected Journey", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit", "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." }

//Delete the movie 'Pee Wee Herman's Big Adventure'
db.movies.remove( { title: "Pee Wee Herman's Big Adventure"});
WriteResult({ "nRemoved" : 1 })

//Delete the movie 'Avatar'
db.movies.remove( { title : 'Avatar'});
WriteResult({ "nRemoved" : 1 })

//Find all users collection
db.users.find();
{ "_id" : ObjectId("56134b2a893090e04cfed725"), "username" : "GoodGuyGreg", "first_name" : "Good Guy", "last_name" : "Greg" }
{ "_id" : ObjectId("56134ba7893090e04cfed726"), "username" : "ScumbagSteve", "full_name" : { "first" : "Scumbag", "last" : "Steve" } }

//Find all posts collection
db.posts.find();
{ "_id" : ObjectId("56134f6b893090e04cfed727"), "username" : "GoodGuyGreg", "title" : "Passes out at party", "body" : "Wakes up early and cleans house" }
{ "_id" : ObjectId("56134f99893090e04cfed728"), "username" : "GoodGuyGreg", "title" : "Steals your identity", "body" : "Raises your credit score" }
{ "_id" : ObjectId("56134fce893090e04cfed729"), "username" : "GoodGuyGreg", "title" : "Reports a bug in your code", "body" : "Sends you a Pull Request" }
{ "_id" : ObjectId("56134ff3893090e04cfed72a"), "username" : "ScumbagSteve", "title" : "Borrows something", "body" : "Sells it" }
{ "_id" : ObjectId("56135008893090e04cfed72b"), "username" : "ScumbagSteve", "title" : "Borrows everything", "body" : "The end" }
{ "_id" : ObjectId("56135023893090e04cfed72c"), "username" : "ScumbagSteve", "title" : "Forks your repo on github", "body" : "Sets to private" }

//Find all posts that were authored by GoodGuyGreg
db.posts.find( { username : 'GoodGuyGreg'} );
{ "_id" : ObjectId("56134f6b893090e04cfed727"), "username" : "GoodGuyGreg", "title" : "Passes out at party", "body" : "Wakes up early and cleans house" }
{ "_id" : ObjectId("56134f99893090e04cfed728"), "username" : "GoodGuyGreg", "title" : "Steals your identity", "body" : "Raises your credit score" }
{ "_id" : ObjectId("56134fce893090e04cfed729"), "username" : "GoodGuyGreg", "title" : "Reports a bug in your code", "body" : "Sends you a Pull Request" }

//Find all posts that were authored by ScumbagSteve
db.posts.find( { username : 'ScumbagSteve'} );
{ "_id" : ObjectId("56134ff3893090e04cfed72a"), "username" : "ScumbagSteve", "title" : "Borrows something", "body" : "Sells it" }
{ "_id" : ObjectId("56135008893090e04cfed72b"), "username" : "ScumbagSteve", "title" : "Borrows everything", "body" : "The end" }
{ "_id" : ObjectId("56135023893090e04cfed72c"), "username" : "ScumbagSteve", "title" : "Forks your repo on github", "body" : "Sets to private" }

//Find all comments collection
db.comments.find();
{ "_id" : ObjectId("561352c8893090e04cfed72d"), "username" : "GoodGuyGreg", "comment" : "Hope you got a good deal!", "post" : ObjectId("56134ff3893090e04cfed72a") }
{ "_id" : ObjectId("56135370893090e04cfed72e"), "username" : "GoodGuyGreg", "comment" : "What's mine is yours!", "post" : ObjectId("56135008893090e04cfed72b") }
{ "_id" : ObjectId("56135410893090e04cfed72f"), "username" : "GoodGuyGreg", "comment" : "Don't violate the licensing agreement!", "post" : ObjectId("56135023893090e04cfed72c") }
{ "_id" : ObjectId("561354b4893090e04cfed730"), "username" : "ScumbagSteve", "comment" : "It still isn't clean", "post" : ObjectId("56134f6b893090e04cfed727") }
{ "_id" : ObjectId("56135549893090e04cfed731"), "username" : "ScumbagSteve", "comment" : "Denied your PR cause I found a hack", "post" : ObjectId("56134fce893090e04cfed729") }

//Find all comments authored by GoodGuyGreg
db.comments.find( {username : 'GoodGuyGreg'});
{ "_id" : ObjectId("561352c8893090e04cfed72d"), "username" : "GoodGuyGreg", "comment" : "Hope you got a good deal!", "post" : ObjectId("56134ff3893090e04cfed72a") }
{ "_id" : ObjectId("56135370893090e04cfed72e"), "username" : "GoodGuyGreg", "comment" : "What's mine is yours!", "post" : ObjectId("56135008893090e04cfed72b") }
{ "_id" : ObjectId("56135410893090e04cfed72f"), "username" : "GoodGuyGreg", "comment" : "Don't violate the licensing agreement!", "post" : ObjectId("56135023893090e04cfed72c") }

//Find all comments authored by ScumbagSteve
db.comments.find( {username : 'ScumbagSteve'});
{ "_id" : ObjectId("561354b4893090e04cfed730"), "username" : "ScumbagSteve", "comment" : "It still isn't clean", "post" : ObjectId("56134f6b893090e04cfed727") }
{ "_id" : ObjectId("56135549893090e04cfed731"), "username" : "ScumbagSteve", "comment" : "Denied your PR cause I found a hack", "post" : ObjectId("56134fce893090e04cfed729") }

//Find all comments belonging to the post 'Reports a bug in your code'
db.comments.find( {post : reportsBug._id});
{ "_id" : ObjectId("56135549893090e04cfed731"), "username" : "ScumbagSteve", "comment" : "Denied your PR cause I found a hack", "post" : ObjectId("56134fce893090e04cfed729") }