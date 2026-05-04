// 主题色板 - 每个主题包含 5 种协调的颜色
// 用于生成渐变背景（歌单封面等）
export const colorPalettes = [
  // Sunset - 日落
  ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'],
  // Ocean - 海洋
  ['#667EEA', '#764BA2', '#F093FB', '#4FACFE', '#00F2FE'],
  // Forest - 森林
  ['#56AB2F', '#A8E063', '#38EF7D', '#11998E', '#C6EA8D'],
  // Purple Dream - 紫色梦境
  ['#A445B2', '#D41872', '#FF0844', '#FFB199', '#FF6B9D'],
  // Cosmic - 宇宙
  ['#FA709A', '#FEE140', '#30CFD0', '#330867', '#667EEA'],
  // Candy - 糖果
  ['#FF9A9E', '#FECFEF', '#FBC2EB', '#A18CD1', '#FAD0C4'],
  // Tech - 科技
  ['#00C9FF', '#92FE9D', '#667EEA', '#F093FB', '#4FACFE'],
  // Warm - 温暖
  ['#F2994A', '#F2C94C', '#EB5757', '#FF6B9D', '#FFA07A'],
  // Neon - 霓虹
  ['#FF00FF', '#00FFFF', '#FF1493', '#00CED1', '#FF69B4'],
  // Aurora - 极光
  ['#00FF87', '#60EFFF', '#B967FF', '#05FFA1', '#FF6EC7'],
  // Fire - 火焰
  ['#FF4E50', '#FC913A', '#F9D423', '#EDE574', '#E1F5C4'],
  // Ice - 冰雪
  ['#B2FEFA', '#0ED2F7', '#A8E6CF', '#3EECAC', '#69F0AE'],
]

// 单色色板 - 用于歌曲封面等小尺寸显示
// 从主题色板中提取所有颜色，去重后形成丰富的单色板
export const solidColors = [
  // 红色系
  '#FF6B6B',
  '#FF4E50',
  '#EB5757',
  '#D41872',
  '#FF0844',
  '#FF1493',
  '#FF00FF',
  '#FF69B4',

  // 粉色系
  '#FF6B9D',
  '#FA709A',
  '#FF9A9E',
  '#FFB199',
  '#FBC2EB',
  '#FECFEF',
  '#FAD0C4',
  '#FF6EC7',

  // 橙色系
  '#FFA07A',
  '#F2994A',
  '#FC913A',
  '#F9D423',

  // 黄色系
  '#F2C94C',
  '#FEE140',
  '#EDE574',
  '#E1F5C4',

  // 绿色系
  '#56AB2F',
  '#A8E063',
  '#38EF7D',
  '#11998E',
  '#C6EA8D',
  '#92FE9D',
  '#00FF87',
  '#05FFA1',
  '#69F0AE',
  '#A8E6CF',
  '#3EECAC',

  // 青色系
  '#4ECDC4',
  '#98D8C8',
  '#00C9FF',
  '#30CFD0',
  '#00F2FE',
  '#00FFFF',
  '#00CED1',
  '#60EFFF',
  '#0ED2F7',
  '#B2FEFA',

  // 蓝色系
  '#45B7D1',
  '#4FACFE',
  '#667EEA',

  // 紫色系
  '#764BA2',
  '#A445B2',
  '#F093FB',
  '#330867',
  '#A18CD1',
  '#B967FF',
]

/**
 * 简单的哈希函数
 * @param {string} str - 输入字符串
 * @returns {number} 哈希值
 */
export function simpleHash(str) {
  if (!str) return 0
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash)
}
