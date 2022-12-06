/*eslint-disable*/
const cheerio = require("cheerio");
const axios = require("axios");
const { tr } = require("date-fns/locale");
const { compareDocumentPosition } = require("domutils");
const { isArray, result } = require("lodash");
(async () => {
  //크롤링 대상 URL, axios의 get은 비동기 함수이므로 async-await을 사용한다.

  const html = await axios.get("https://sobi.chonbuk.ac.kr/menu/week_menu.php"),
    $ = cheerio.load(html.data);
  const trElements = $("#contents > div.contentsArea.WeekMenu > div:nth-child(245) > div:nth-child(2) > table");
    const Mon = trElements
        .map((index, table) => ({
        date : "Mon",
        menu1: $(table).find("tbody > tr:nth-child(1) > td:nth-child(3) > ul > li:nth-child(12) > span").text(),
        menu2: $(table).find("tbody > tr:nth-child(1) > td:nth-child(3) > ul > li:nth-child(13) > span").text(),
        menu3: $(table).find("tbody > tr:nth-child(1) > td:nth-child(3) > ul > li:nth-child(14) > span").text(),
        menu4: $(table).find("tbody > tr:nth-child(1) > td:nth-child(3) > ul > li:nth-child(15) > span").text(),
     }))
    .toArray();
  
    const Tues = trElements
        .map((index, table) => ({
        date : "Tues",
        menu1: $(table).find("tbody > tr:nth-child(1) > td:nth-child(4) > ul > li:nth-child(9) > font > span").text(),
        menu2: $(table).find("tbody > tr:nth-child(1) > td:nth-child(4) > ul > li:nth-child(10) > font > span").text(),
        menu3: $(table).find("tbody > tr:nth-child(1) > td:nth-child(4) > ul > li:nth-child(11) > font > span").text(),
        menu4: $(table).find("tbody > tr:nth-child(1) > td:nth-child(4) > ul > li:nth-child(12) > font > span").text(), 
      }))
      .toArray();

    const Wen = trElements
        .map((index, table) => ({
        date : "Wen",
        menu1: $(table).find("tbody > tr:nth-child(1) > td:nth-child(5) > ul > li:nth-child(19) > font").text(),
        menu2: $(table).find("tbody > tr:nth-child(1) > td:nth-child(5) > ul > li:nth-child(20) > font").text(),
        menu3: $(table).find("tbody > tr:nth-child(1) > td:nth-child(5) > ul > li:nth-child(21) > font").text(),
        menu4: $(table).find("tbody > tr:nth-child(1) > td:nth-child(5) > ul > li:nth-child(22) > font").text(), 
      }))
      .toArray();  
    
    const Thur = trElements
        .map((index, table) => ({
        date : "Thur",
        menu1: $(table).find("tbody > tr:nth-child(1) > td:nth-child(6) > ul > li:nth-child(22) > font").text(),
        menu2: $(table).find("tbody > tr:nth-child(1) > td:nth-child(6) > ul > li:nth-child(23) > font").text(),
        menu3: $(table).find("tbody > tr:nth-child(1) > td:nth-child(6) > ul > li:nth-child(24) > font").text(),
        menu4: $(table).find("tbody > tr:nth-child(1) > td:nth-child(6) > ul > li:nth-child(25) > font").text(), 
      }))
      .toArray(); 
    
    const Fri = trElements
        .map((index, table) => ({
        date : "Fri",    
        menu1: $(table).find("tbody > tr:nth-child(1) > td:nth-child(7) > ul > li:nth-child(18) > font").text(),
        menu2: $(table).find("tbody > tr:nth-child(1) > td:nth-child(7) > ul > li:nth-child(19) > font").text(),
        menu3: $(table).find("tbody > tr:nth-child(1) > td:nth-child(7) > ul > li:nth-child(20) > font").text(),
        menu4: $(table).find("tbody > tr:nth-child(1) > td:nth-child(7) > ul > li:nth-child(21) > font").text(), 
      }))
    .toArray();    

let result = Array();
result.push(Mon[0]);
result.push(Tues[0]);
result.push(Wen[0]);
result.push(Thur[0]);
result.push(Fri[0]);
console.log(result);
return result;
})();

