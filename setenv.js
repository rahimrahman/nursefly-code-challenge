const fs    = require( 'fs' );
const env   = process.argv[2];

fs.writeFile( 'env.js', `const ENV = '${ env }'; export default ENV;`, ( err ) => {
    if( !err ){
        console.log( `Saved env file. ENV set to ${ env }` );
    } else {
        console.log( err );
    }
});
