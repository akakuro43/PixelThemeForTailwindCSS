// インクリメントによる自動設定
const MIN             = -12 // 最小値
const MAX             = 400 // 最大値
const INCREMENTS_NUM  = 1   // インクリメント
let incrementsObj = createIncrementsObj()

// インクリメント以外の設定
const OTHER_OBJ = {
  'auto'   : 'auto',
}

// アサイン
let margin = Object.assign(incrementsObj, OTHER_OBJ);

// 自動生成
function createIncrementsObj() {
  let obj = {}
  let i = MIN
  while(MAX >= i) {
    obj[`${i}px`]  = `${i}px`
    i = i + INCREMENTS_NUM
  }
  return obj
}

module.exports = margin

