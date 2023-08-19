export const HOT_OPTIONS = [
  {
    label: "比亚迪",
    value: "比亚迪"
  },
  {
    label: "极狐",
    value: "极狐"
  },
  {
    label: "广汽埃安",
    value: "广汽埃安"
  },
  {
    label: "魏派WEY",
    value: "魏派WEY"
  },
  {
    label: "欧拉",
    value: "欧拉"
  },
  {
    label: "美能能源",
    value: "美能能源"
  },
  {
    label: "华大智造",
    value: "华大智造"
  },
  {
    label: "华宝新能",
    value: "华宝新能"
  },
  
]
function randomlyGeneratedChineseCharacters(num) {
  let arr:string[] = []
  for (let i = 0; i < num; i++) {
    let str
    //汉字对应的unicode编码为u4e00-u9fa5转为10进制为19968-40869，先取随机数，再转为16进制
    str = '\\u' + (Math.floor(Math.random() * (40869 - 19968)) + 19968).toString(16)
    //在用正则操作数据后进行解码。注意：unescape() 函数在 JavaScript 1.5 版中已弃用。请使用 decodeURI() 或 decodeURIComponent() 代替。
    str = unescape(str.replace(/\\u/g, "%u"));
    arr.push(str)
  }
  let chinese = arr.join("")
  return chinese
}

 const generateFn=(options)=>{
  const { deferValue, fieldValue, industryValue, financing } = options
  const str= randomlyGeneratedChineseCharacters(3)
  const data={
    companyName: deferValue  +str,
    concepts: fieldValue,
    financing,
    industryValue
  }
  
  return data
}

export const getData = (options,num)=>{
  let arr: any[] = []
  for (let i = 0; i < num; i++) {
    const item = generateFn(options)
    arr.push(item)
  }
  return arr
}
  
