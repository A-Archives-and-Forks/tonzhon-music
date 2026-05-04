import { solidColors, simpleHash } from './colors'

/**
 * 为歌曲生成纯色背景
 * @param {string} identifier - 歌曲的唯一标识
 * @returns {string} CSS 颜色值
 */
export function generateSongCover(identifier = '') {
  const hash = simpleHash(identifier)
  const colorIndex = hash % solidColors.length
  return solidColors[colorIndex]
}

export default generateSongCover
