https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-10

Style 04-10

Consider creating a file that imports, aggregates, and re-exports items. We call this technique a barrel.

Consider naming this barrel file index.ts.

Why? A barrel aggregates many imports into a single import.

Why? A barrel reduces the number of imports a file may need.

Why? A barrel provides a consistent pattern to import everything exported in the barrel from a folder.

Why? This is consistent with a pattern from Node, which imports the index.js|ts file from a folder.

Why? A barrel shortens import statements.