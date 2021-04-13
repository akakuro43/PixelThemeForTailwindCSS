// インクリメントによる自動設定
const MIN_WIDTH       = 0    // 最小値
const MAX_WIDTH       = 400  // 最大値
const INCREMENTS_NUM  = 1    // インクリメント
let incrementsObj = createIncrementsObj()

// インクリメント以外の設定
const OTHER_OBJ = {
  'auto'   : 'auto',
  'full'   : '100%',
  'screen' : '100vw',
  'min'    : 'min-content',
  'max'    : 'max-content',
  '1/2'    : '50%',
  '1/3'    : '33.333333%',
  '2/3'    : '66.666667%',
  '1/4'    : '25%',
  '2/4'    : '50%',
  '3/4'    : '75%',
  '1/5'    : '20%',
  '2/5'    : '40%',
  '3/5'    : '60%',
  '4/5'    : '80%',
  '1/6'    : '16.666667%',
  '2/6'    : '33.333333%',
  '3/6'    : '50%',
  '4/6'    : '66.666667%',
  '5/6'    : '83.333333%',
  '1/12'   : '8.333333%',
  '2/12'   : '16.666667%',
  '3/12'   : '25%',
  '4/12'   : '33.333333%',
  '5/12'   : '41.666667%',
  '6/12'   : '50%',
  '7/12'   : '58.333333%',
  '8/12'   : '66.666667%',
  '9/12'   : '75%',
  '10/12'  : '83.333333%',
  '11/12'  : '91.666667%',
}

// アサイン
let width =  Object.assign(incrementsObj, OTHER_OBJ);

// 自動生成
function createIncrementsObj() {
  let obj = {}
  let i = MIN_WIDTH
  while(MAX_WIDTH >= i) {
    obj[`${i}px`] =`${i}px`
    i = i + INCREMENTS_NUM
  }
  return obj
}

module.exports = width