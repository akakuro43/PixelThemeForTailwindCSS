// インクリメントによる自動設定
const MIN_HEIGHT      = 0    // 最小値
const MAX_HEIGHT      = 400  // 最大値
const INCREMENTS_NUM  = 1    // インクリメント
let incrementsObj = createIncrementsObj()

// インクリメント以外の設定
const OTHER_OBJ = {
  'auto'   : 'auto',
  'full'   : '100%',
  'screen' : '100vh',
}
// アサイン
let height =  Object.assign(incrementsObj, OTHER_OBJ);

// 自動生成
function createIncrementsObj() {
  let obj = {}
  let i = MIN_HEIGHT
  while(MAX_HEIGHT >= i) {
    obj[`${i}px`] = `${i}px`
    i = i + INCREMENTS_NUM
  }
  return obj
}

module.exports = height