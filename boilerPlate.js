// const fs = require('fs')
// const folderName = process.argv[2] || 'Projects';


// Creates dog directory asynchronously , regardless of whether `dogs` and dogs exist.
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('In the callback!!');
//     if (err) throw err;
// });

//synchronous version
// fs.mkdirSync('Cats');
// console.log('In After callback!!');


//creating folder and files
// try {
//     fs.mkdirSync(folderName);

//     fs.writeFileSync(`${folderName}/index.html`, '')
//     fs.writeFileSync(`${folderName}/app.js`, '')
//     fs.writeFileSync(`${folderName}/app.css`, '')
// } catch (e) {
//     console.error(e)
// }