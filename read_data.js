/*eslint-disable*/
const fs = require('fs');

try {
    const readData = fs.readFileSync('./haksa.txt').toString('utf-8').split('\n');
    for (i in readData) {
      const temp = readData[i].split(':');
      global.data[temp[0]] = temp[1];
    }

    const keys = Object.keys(global.data);
    for (i in keys) {
      if (keys[i].length > 6) {
        const savedata = global.data[keys[i]];
        delete global.data[keys[i]];
        const temptemp = keys[i].split(/\/|-/);
        const diff = parseInt(temptemp[3]) - parseInt(temptemp[1]);
        for (let j = 0; j <= diff; j += 1) {
          const backdate = j + parseInt(temptemp[1]);
          if(`${String(temptemp[0])}/${String(backdate)} ` in global.data){
            let stringplus = global.data[`${String(temptemp[0])}/${String(backdate)} `] + "," + savedata;
            global.data[`${String(temptemp[0])}/${String(backdate)} `] = stringplus;
          }
          else{
            global.data[`${String(temptemp[0])}/${String(backdate)} `] = savedata;
          }
        }
      }
    }
    delete global.data[''];
    console.log(data); //debugcode
  } catch (err) {
    console.error(err);
  }