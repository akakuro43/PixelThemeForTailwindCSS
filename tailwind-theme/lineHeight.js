// インクリメントによる自動設定
const MIN             = 75 // 最小値
const MAX             = 300    // 最大値
const INCREMENTS_NUM  = 5 // インクリメント
let incrementsObj = createIncrementsObj()

// インクリメント以外の設定
const OTHER_OBJ = {
  'none': '1',
}

// アサイン
let lineHeight = Object.assign(incrementsObj, OTHER_OBJ);

// 自動生成
function createIncrementsObj() {
  let obj = {}
  let i = MIN
  while(MAX >= i) {
    obj[`${i}`]  = `${i*0.01}`
    i = i + INCREMENTS_NUM
  }
  return obj
}

module.exports = lineHeight

