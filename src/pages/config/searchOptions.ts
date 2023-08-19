// 搜索先分类
export const category = [
  {
    label: "公司",
    value: "company",
  },
  {
    label: "人员",
    value: "person",
  },
  {
    label: "风险",
    value: "risk",
  },
  {
    label: "创投库",
    value: "venture",
  },
]
// 纯电动汽车(BEV，包括太阳能汽车)、混合动力电动汽车(HEV / PHEV)、燃料电池电动汽车(FCEV)、其他新能源（如超级电容器、飞轮等高效储能器）汽车

export const industryOptions = [
  {
    label: "新能汽车",
    value: "新能汽车",
    children: [
      {
        label: "纯电动汽车(BEV)",
        value: "BEV",
      },
      {
        label: "混合动力(HEV / PHEV)",
        value: "HEV",
      },
      {
        label: "燃料电池电动汽车",
        value: "FCEV"
      },
      {
        label: "其他新能源",
        value: "OTHER"
      },
    ],
  },
  {
    label: "AI概念",
    value: "AI概念",
    children: [
      {
        label: "AI服务器厂商",
        value: "OTHER1",
      },
      {
        label: "AI芯片厂商",
        value: "OTHER2",
      },
      {
        label: "AIGC概念公司",
        value: "OTHER3"
      }
    ],
  },
]

