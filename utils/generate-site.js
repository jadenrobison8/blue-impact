const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFileSync('./dist/index.html', fileContent, err => {
            //if theres an err, reject the promise and send the error to the promises .catch() method
            if (err) {
                reject(err);
                //return out of the function here to make sure the promise doesnt accidentally execute the resolve() function as well
                return;
            }

            //if everything went well, resolve the promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./dist/style.css', fileContent, err => {
            //if theres an err reject the promise and send the error to the promises .catch() method
            if (err) {
                reject(err);
                //return out of the function to make sure.......
                return;
            }

            resolve({
                ok:true,
                message: 'File created!'
            });
        });
    });
};

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};