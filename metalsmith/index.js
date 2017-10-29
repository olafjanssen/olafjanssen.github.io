var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var collections = require('metalsmith-collections');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var dateFormatter = require('metalsmith-date-formatter');


Metalsmith(__dirname)
  .metadata({
    generator: "Metalsmith",
    url: "https://olafjanssen.github.io/"
  })
  .source('./src')
  .destination('../')
  .clean(false)
    .use(collections({
        projects: {
            pattern: 'projects/*.md',
            sortBy: 'date',
            reverse: true
        }
    }))
    .use(dateFormatter({
        dates: [
            {
                key: 'date',
                format: 'MMMM YYYY'
            },
            {
                key: 'start-date',
                format: 'MMMM YYYY'
            }
        ]
    }))
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
