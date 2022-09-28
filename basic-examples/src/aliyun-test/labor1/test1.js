/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-09-28 15:00:35
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-28 16:20:31
 */

const data = [
  {date: '2021-12-25', cnt: 12},
  {date: '2021-12-28', cnt: 7},
  {date: '2021-12-30', cnt: 9},
  {date: '2022-01-02', cnt: 4},
  {date: '2022-01-03', cnt: 4}
]

Date.prototype.Format = function (fmt) {  
    var o = {
        "M+": this.getMonth() + 1,                
        "d+": this.getDate(),                     
        "h+": this.getHours(),                  
        "m+": this.getMinutes(),               
        "s+": this.getSeconds(), 
        "q+": Math.floor((this.getMonth() + 3) / 3),  
        "S": this.getMilliseconds() 
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function pathDate(data){
  const begin = data[0].date;
  const end = data[data.length -1].date;

  console.log('begin', begin);
  console.log('end', end)
  
  function getAllDates(begin, end) { 
    var arr = [];
    var ab = begin.split("-");
    var ae = end.split("-");
    var db = new Date();
    db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
    var de = new Date();
    de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
    var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
    var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
    for (var k = unixDb; k <= unixDe;) {
        k = k + 24 * 60 * 60 * 1000;
        arr.push((new Date(parseInt(k))).Format('yyyy-MM-dd'));
    }
   
        return arr
    }
    
    const allDates = getAllDates(begin, end);

   
  
    const resObj = {};

    allDates.map(time => 
        {
            resObj[time] = { date: time, cnt: 0 }
        }
    )

    data.map(i => 
        {
            resObj[i.date]= i
        }
    )
     
    console.log('resObj', resObj)

    return res
}

// ========================
//    以下为测试代码无需修改
// ========================

const res = [
  {date: '2021-12-25', cnt: 12},
  {date: '2021-12-26', cnt: 0}, // 新增
  {date: '2021-12-27', cnt: 0}, // 新增
  {date: '2021-12-28', cnt: 7},
  {date: '2021-12-29', cnt: 0}, // 新增
  {date: '2021-12-30', cnt: 9},
  {date: '2021-12-31', cnt: 0}, // 新增
  {date: '2021-01-01', cnt: 0}, // 新增
  {date: '2022-01-02', cnt: 4},
  {date: '2022-01-03', cnt: 4}
];



if(JSON.stringify(pathDate(data)) === JSON.stringify(res)){
  console.log('恭喜！测试通过');
}