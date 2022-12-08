/*eslint-disable*/


const cheerio = require("cheerio");
const axios = require("axios");
const { tr } = require("date-fns/locale");
const { compareDocumentPosition } = require("domutils");
const { isArray, result } = require("lodash");
(async () => {
menuResult = {
  'date':'',
  'menu1':'',
  'menu2':'',
  'menu3':'',
  'menu4':'',
  evaluation:0
}
  const html = await axios.get("https://sobi.chonbuk.ac.kr/menu/week_menu.php"),
    $ = cheerio.load(html.data);
    //#contents > div.contentsArea.WeekMenu > div:nth-child(247) > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(3) > ul > li:nth-child(12) > span
  const trElements = $(".tblType03");
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
// console.log(result);
// ===================별점 매기기=============================
// <고기사랑 식단>
// 국 : 쇠고기, 된장국, 김치찌개, 육개장 => 0.5점
// 메뉴2 : 갈비, 불고기, 고추장, 숯불, 치킨, 닭 =>1점
// 메뉴3 : 계란찜, 미트, 비엔나, 쫄면, 베이컨, 샐러드, 잡채 => 0.5점
// 메뉴4 : 쫄면, 깻잎, 샐러드, 도토리묵 => 0.5점
// 2.5 이상 => 별3개
// 1.5이상 2.5 미만 => 별2
// 그외 => 별1
let evaluation = [0, 0, 0, 0, 0];
for(var i=0; i<5; i++)
{
  if(result[i].menu1.includes('쇠고기'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 0.5;
    // console.log(result[i].date,"국 발견")
    continue;
  }
  if(result[i].menu1.includes('된장국'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 0.5;
    // console.log(result[i].date,"국 발견")
    continue;
  }
  if(result[i].menu1.includes('김치찌개'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 0.5;
    // console.log(result[i].date,"국 발견")
    continue;
  }
  if(result[i].menu1.includes('육개장'))
  {
    result[i].evaluation + 0.5
    evaluation[i] += 0.5;
    // console.log(result[i].date,"국 발견")
    continue;
  }
}
// ==================menu2=======================갈비, 불고기, 고추장, 숯불, 치킨, 닭 =>1점
for(var i=0; i<5; i++)
{
  if(result[i].menu2.includes('갈비'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 1;
    // console.log(result[i].date,"점수추가 1")
    continue;
  }
  if(result[i].menu2.includes('불고기'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 1;
    // console.log(result[i].date,"점수추가 1")
    continue;
  }
  if(result[i].menu2.includes('고추장'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 1;
    // console.log(result[i].date,"점수추가 1")
    continue;
  }
  if(result[i].menu2.includes('숯불'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 1;
    // console.log(result[i].date,"점수추가 1")
    continue;
  }
  if(result[i].menu2.includes('치킨'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 1;
    // console.log(result[i].date,"점수추가 1")
    continue;
  }
  if(result[i].menu2.includes('닭'))
  {
    result[i].evaluation + 0.5
    evaluation[i] += 1;
    // console.log(result[i].date,"점수추가 1")
    continue;
  }
}
// ==================menu3=======================계란찜, 미트, 비엔나, 쫄면, 베이컨, 샐러드, 잡채 => 0.5점
for(var i=0; i<5; i++)
{
  if(result[i].menu3.includes('계란찜'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 0.5;
    // console.log(result[i].date,"점수추가 0.5")
    continue;
  }
  if(result[i].menu3.includes('미트'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 0.5;
    // console.log(result[i].date,"점수추가 0.5")
    continue;
  }
  if(result[i].menu3.includes('비엔나'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 0.5;
    // console.log(result[i].date,"점수추가 0.5")
    continue;
  }
  if(result[i].menu3.includes('쫄면'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 0.5;
    // console.log(result[i].date,"점수추가 0.5")
    continue;
  }
  if(result[i].menu3.includes('베이컨'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 0.5;
    // console.log(result[i].date,"점수추가 0.5")
    continue;
  }
  if(result[i].menu3.includes('샐러드'))
  {
    result[i].evaluation + 0.5
    evaluation[i] += 0.5;
    // console.log(result[i].date,"점수추가 0.5")
    continue;
  }
  if(result[i].menu3.includes('잡채'))
  {
    result[i].evaluation + 0.5
    evaluation[i] += 0.5;
    // console.log(result[i].date,"점수추가 0.5")
    continue;
  }
}
// ===================ㅡmenu4================쫄면, 깻잎, 샐러드, 도토리묵 => 0.5점
for(var i=0; i<5; i++)
{
  if(result[i].menu4.includes('쫄면'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 0.5;
    // console.log(result[i].date,"점수추가 0.5")
    continue;
  }
  if(result[i].menu4.includes('깻잎'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 0.5;
    // console.log(result[i].date,"점수추가 0.5")
    continue;
  }
  if(result[i].menu4.includes('샐러드'))
  {
    // result[i].evaluation + 0.5
    evaluation[i] += 0.5;
    // console.log(result[i].date,"점수추가 0.5")
    continue;
  }
  if(result[i].menu4.includes('도토리'))
  {
    result[i].evaluation + 0.5
    evaluation[i] += 0.5;
    // console.log(result[i].date,"점수추가 0.5")
    continue;
  }
}
// =================menu 평가완료=================
// 2.5 이상 => 별3개
// 1.5이상 2.5 미만 => 별2
// 그외 => 별1
for(var i=0;i<5;i++)
{
  console.log(result[i].date,"평점",evaluation[i],"\n")
  if(evaluation[i]>=2.5)
  {
    console.log("★★★")
  }
  if(evaluation[i]>=1.5 && evaluation[i]<2.5)
  {
    console.log("★★☆")
  }
  else{
    console.log("★☆☆")
  }
}
})();

