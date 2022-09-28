<!--
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-09-28 16:15:53
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-28 16:21:02
-->

### 1. 书写圣杯布局

```js

export const Page = () => {
    return <div className="box">
        <nav className="nav"> nav </nav>
        <div className="content">
            <header className="header"> header </header>  
            <div className="content-center">
                <div className="left">left</div>
                <div className="center">center</div>
                <div className="right">right</div>
            </div>  
        </div>
    </div>
}

```

```css

html, body, #root, .App {
  height: 100%;
}

.box {
  display: flex;
  height: 100%;
  background-color: pink;
}

.nav {
  width: 250px;
  height: 100%;
  border-right: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: blueviolet;
  border-bottom: 1px solid #000;
}

.content {
  flex: 1;
}

.content-center {
  display: flex;
  height: 100%;
}

.left, .right, .center {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #000;
}

```

### 加载最快速度加载10个图片，每次最多加载3组

```
// code：
// 1. image promise 
// 2. image url put in source-stack and working-stack
// 3. image promise callback clear working-stack

```

### 补齐日期

```js

const data = [
  {date: '2021-12-25', cnt: 12},
  {date: '2021-12-28', cnt: 7},
  {date: '2021-12-30', cnt: 9},
  {date: '2022-01-02', cnt: 4},
  {date: '2022-01-03', cnt: 4}
]

// 补齐为 
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


```

