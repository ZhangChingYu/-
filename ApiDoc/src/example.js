/**
 * @api {post} /user 用戶註冊
 * @apiName Register
 * @apiGroup 用戶註冊
 * @apiPermission none
 * 
 * @apiDescription 由用戶輸入手機號、郵箱及密碼來完成註冊，且一個手機號只能註冊一次，若手機號被重複註冊則會判定註冊失敗。 手機號須為11位手機號，其他型號本系統不予支持。所有前後端交互數據皆由UTF-8進行編碼與解碼。 為避免中英文混和而產生亂碼，數據庫除日期、純數字、純英文數據外，接先進行UTF-8編碼後存入數據庫，讀取時再進行相應的解碼顯示。
 * 
 * @apiParam {String} phone 用戶手機號(手機號不可重複註冊)
 * @apiParam {String} password 用戶想使用的密碼
 * @apiParam {String} [email] 用戶郵箱帳號
 *
 * @apiSuccessExample 註冊成功釋例
 *     {
 *       201
 *     }
 * @apiErrorExample 註冊失敗(手機號已存在)
 *     {
 *       422
 *     }
 * @apiErrorExample 註冊失敗(信息未成功添加)
 *     {
 *       404
 *     }
 */

/** 
 * @api {get} /catalog/catalogs 顯示所有分類
 * @apiName AllCatalog
 * @apiGroup 商品分類管理
 * @apiPermission none
 * 
 * @apiDescription 顯示所有分類
 *
 * @apiSuccessExample 請求成功釋例
 *     [
 *          {"id":1,"name":"書籍","number":"B"},
 *          {"id":2,"name":"美妝","number":"M"},
 *          {"id":3,"name":"數碼","number":"D"},
 *          {"id":4,"name":"家居","number":"F"},
 *          {"id":5,"name":"電器","number":"E"},
 *          {"id":6,"name":"服裝","number":"C"},
 *          {"id":7,"name":"其它","number":"O"}
 *     ]
 */

/**  
 * @api {post} /catalog 添加分類
 * @apiName AddCatalog
 * @apiGroup 商品分類管理
 * @apiPermission none
 * 
 * @apiDescription 添加分類
 * 
 * @apiParam {String} number 分類編碼
 * @apiParam {String} name 分類名稱
 *
 * @apiSuccessExample 添加成功釋例
 *     {
 *       201
 *     }
 * @apiErrorExample 添加失敗(分類編碼已存在)
 *     {
 *       422
 *     }
 * @apiErrorExample 添加失敗(信息未成功添加)
 *     {
 *       404
 *     }
 */

/** 
 * @api {put} /catalog 更新分類信息
 * @apiName UpdateCatalog
 * @apiGroup 商品分類管理
 * @apiPermission none
 * 
 * @apiDescription 更新分類信息
 * 
 * @apiParam {Integer} id 分類序號
 * @apiParam {String} number 新的分類編碼
 * @apiParam {String} name 新的分類名稱
 *
 * @apiSuccessExample 更新成功
 *     {
 *       800
 *     }
 * @apiErrorExample 更新失敗
 *     {
 *       808
 *     }
 */

/**  
 * @api {delete} /catalog 刪除分類
 * @apiName DeleteCatalog
 * @apiGroup 商品分類管理
 * @apiPermission none
 * 
 * @apiDescription 刪除分類
 * 
 * @apiParam {Integer} id 分類序號
 *
 * @apiSuccessExample 分類刪除成功
 *     {
 *       204
 *     }
 * @apiErrorExample 刪除失敗(沒有選中的對象，數據庫為發生改動)
 *     {
 *       400
 *     }
 */

/**  
 * @api {get} /homepage 主頁面商品顯示
 * @apiName Homepage
 * @apiGroup 商品查詢
 * @apiPermission none
 * 
 * @apiDescription 主頁面商品顯示，返回商品信息的List
 *
 * @apiSuccessExample 請求成功
 *     [
 *        {
 *          "number":"B1667559776586",
 *          "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgA...(base64編碼，原文過長不全部展示)
 *          "name":學生心理健康教育第二版",
 *          "price":7.9
 *        },
 *          ....,{}
 *     ]
 */

/**  
 * @api {get} /catalog/products 分類檢索商品
 * @apiName CatalogProduct
 * @apiGroup 商品查詢
 * @apiPermission none
 * 
 * @apiDescription 分類檢索商品
 * 
 * @apiParam {String} catalog 商品分類編碼(B,M,E...)
 *
 * @apiSuccessExample 請求成功
 *     [
 *        {
 *          "number":"B1667559776586",
 *          "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgA...(base64編碼，原文過長不全部展示)
 *          "name":學生心理健康教育第二版",
 *          "price":7.9
 *        },
 *          ....,{}
 *     ]
 */

/**  
 * @api {get} /search/products 搜索欄檢索
 * @apiName SearchProduct
 * @apiGroup 商品查詢
 * @apiPermission none
 * 
 * @apiDescription 搜索欄檢索
 * 
 * @apiParam {String} keyword 搜索欄輸入內容
 *
 * @apiSuccessExample 請求成功
 *     [
 *        {
 *          "number":"B1667559776586",
 *          "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgA...(base64編碼，原文過長不全部展示)
 *          "name":學生心理健康教育第二版",
 *          "price":7.9
 *        },
 *          ....,{}
 *     ]
 */

/**  
 * @api {get} /product/detail 商品詳細信息顯示
 * @apiName ProductDetail
 * @apiGroup 商品查詢
 * @apiPermission none
 * 
 * @apiDescription 商品詳細信息顯示，picture_count返回該商品的圖片數，並由pictures以List的形式傳給前端
 * 
 * @apiParam {String} number 商品編碼
 *
 * @apiSuccessExample 請求成功
 *     {
 *        "name":"大學生心理健康教育第二版",
 *        "seller_name":"天天",
 *        "address":"重慶大學虎溪校區竹園3棟",
 *        "date":"2022-11-04 19:02:56",
 *        "price":7.9,
 *        "intro":"全新沒有用過，到貨前就退課了",
 *        "like_count":0,
 *        "picture_count":1,
 *        "pictures":["/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAA.....(base64編碼，原文過長不全部展示)",...,"..."]
 *     }
 */

/**  
 * @api {get} /like 確認該商品是否已收藏
 * @apiName CheckLike
 * @apiGroup 商品收藏
 * @apiPermission none
 * 
 * @apiDescription 檢查商品是否已收藏的功能可用於前端界面顯示愛心顏色的判斷標準。
 * 
 * @apiParam {String} phone 用戶手機號
 * @apiParam {String} number 商品編碼
 *
 * @apiSuccessExample 商品已收藏
 *     {
 *        ture
 *     }
 * @apiSuccessExample 商品未收藏
 *     {
 *        false
 *     }
 */

/**  
 * @api {post} /like 添加/取消收藏
 * @apiName PressLike
 * @apiGroup 商品收藏
 * @apiPermission none
 * 
 * @apiDescription 添加/取消收藏是當用戶點下收藏鍵時，通過商品收藏狀態自動判斷該進行收藏/取消收藏的動作。
 * 
 * @apiParam {String} phone 用戶手機號
 * @apiParam {String} number 商品編碼
 *
 * @apiSuccessExample 收藏成功
 *     {
 *        201
 *     }
 * @apiSuccessExample 取消收藏成功
 *     {
 *        204
 *     }
 * @apiErrorExample 用戶無權限
 *     {
 *        403
 *     }
 * @apiErrorExample 收藏失敗
 *     {
 *        404
 *     }
 */

/**  
 * @api {get} /all/likes 顯示所有收藏商品
 * @apiName AllLikes
 * @apiGroup 商品收藏
 * @apiPermission none
 * 
 * @apiDescription 顯示所有收藏商品，默認排序:收藏日期新到舊
 * 
 * @apiParam {String} phone 用戶手機號
 *
 * @apiSuccessExample 請求成功
 *     [
 *        {
 *          "number":"B1667559776586",
 *          "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgA...(base64編碼，原文過長不全部展示)
 *          "name":學生心理健康教育第二版",
 *          "price":7.9
 *        },
 *          ....,{}
 *     ]
 */

/**  
 * @api {get} /all/likes/order 切換不同的排序方式
 * @apiName OrderLikes
 * @apiGroup 商品收藏
 * @apiPermission none
 * 
 * @apiDescription 切換不同的排序方式，type的值:0(添加日期:新-->舊), 1(添加日期:舊-->新), 2(商品價格:低-->高), 3(商品價格:高-->低)
 * 
 * @apiParam {String} phone 用戶手機號
 * @apiParam {Integer} type 排序方式編號
 *
 * @apiSuccessExample 請求成功
 *     [
 *        {
 *          "number":"B1667559776586",
 *          "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgA...(base64編碼，原文過長不全部展示)
 *          "name":學生心理健康教育第二版",
 *          "price":7.9
 *        },
 *          ....,{}
 *     ]
 */

/**  
 * @api {get} /catalog/likes 依照商品分類顯示收藏商品
 * @apiName CatalogLikes
 * @apiGroup 商品收藏
 * @apiPermission none
 * 
 * @apiDescription 依照商品分類顯示收藏商品
 * 
 * @apiParam {String} phone 用戶手機號
 * @apiParam {String} catalog 分類編碼(B,M,...)
 *
 * @apiSuccessExample 請求成功
 *     [
 *        {
 *          "number":"B1667559776586",
 *          "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgA...(base64編碼，原文過長不全部展示)
 *          "name":學生心理健康教育第二版",
 *          "price":7.9
 *        },
 *          ....,{}
 *     ]
 */

/**  
 * @api {delete} /likes 批量取消收藏
 * @apiName DeleteLikes
 * @apiGroup 商品收藏
 * @apiPermission none
 * 
 * @apiDescription 批量取消收藏
 * 
 * @apiParam {String} phone 用戶手機號
 * @apiParam {String} numbers ["商品編碼1", "商品編碼2",....]
 *
 * @apiSuccessExample 取消收藏成功
 *     {
 *        204
 *     }
 * @apiErrorExample 取消收藏失敗
 *     {
 *        404
 *     }
 */

/**  
 * @api {GET} /default/address 獲取默認地址
 * @apiName GetDefaultAddress
 * @apiGroup 地址管理
 * @apiPermission none
 * 
 * @apiDescription 獲取用戶的默認地址
 * 
 * @apiParam {String} phone 用戶手機號
 *
 * @apiSuccessExample 成功返回地址信息(例子)
 *     {
 *        "receiverName":"喵薄荷",
 *        "receiverPhone":"15078818663",
 *        "region":"重慶",
 *        "addressDetail":"重慶大學虎溪校區松園5棟102室",
 *        "rank":0
 *     }
 * @apiErrorExample 默認地址不存在
 *     {
 *        null
 *     }
 */

/**  
 * @api {GET} /setting/addresses 顯示用戶所有地址
 * @apiName ShowAllAddress
 * @apiGroup 地址管理
 * @apiPermission none
 * 
 * @apiDescription 顯示用戶所有地址，返回信息rank是更新與刪除地址所需要的參數
 * 
 * @apiParam {String} phone 用戶手機號
 *
 * @apiSuccessExample 請求成功(例子)
 *     [
 *        {
 *             "receiverName":"喵薄荷",
 *             "receiverPhone":"15078818663",
 *             "region":"重慶",
 *             "addressDetail":"重慶大學虎溪校區松園5棟102室",
 *             "rank":0
 *        },
 *        {
 *             "receiverName":"大頭兒子",
 *             "receiverPhone":"15078818663",
 *             "region":"重慶",
 *             "addressDetail":"重慶大學虎溪校區松園5棟102室",
 *             "rank":1
 *        },
 *        {
 *             "receiverName":"神奇寶可夢",
 *             "receiverPhone":"15078818663",
 *             "region":"重慶",
 *             "addressDetail":"重慶大學虎溪校區松園5棟102室",
 *             "rank":2
 *         }
 *     ]
 * @apiErrorExample 若沒有任何地址存在
 *     {
 *        null
 *     }
 */

/**  
 * @api {POST} /setting/address 添加地址
 * @apiName AddAddress
 * @apiGroup 地址管理
 * @apiPermission none
 * 
 * @apiDescription 添加地址
 * 
 * @apiParam {String} phone 當前用戶手機號
 * @apiParam {Integer} isDefaultAddress 是否需要設置為默認地址(需要:1,不需要:0)
 * @apiParam {String} name 收件者的稱呼
 * @apiParam {String} receiverPhone 收件者的手機號
 * @apiParam {String} region 地區
 * @apiParam {String} addressDetail 詳細地址
 *
 * @apiSuccessExample 添加成功(因為算是數據庫更新，所以返回800)
 *     {
 *        800
 *     }
 * @apiErrorExample 添加失敗
 *     {
 *        400
 *     }
 */

/**  
 * @api {PUT} /setting/address 編輯地址
 * @apiName UpdateAddress
 * @apiGroup 地址管理
 * @apiPermission none
 * 
 * @apiDescription 編輯地址
 * 
 * @apiParam {String} phone 用戶手機號
 * @apiParam {Integer} rank 地址序列號 
 * @apiParam {String} name 收件者的稱呼
 * @apiParam {String} receiverPhone 收件者的手機號
 * @apiParam {String} region 地區
 * @apiParam {String} addressDetail 詳細地址
 *
 * @apiSuccessExample 更新成功
 *     {
 *        800
 *     }
 * @apiErrorExample 更新失敗(沒有更新)
 *     {
 *        400
 *     }
 * @apiErrorExample 請求數據不存在(默認地址)
 *     {
 *        4001
 * @apiErrorExample 請求數據不存在(其他地址)
 *     {
 *        4002
 *     }
 */

/**  
 * @api {PUT} /setting/default/address 將某地址設為默認地址
 * @apiName SetAsDefaultAddress
 * @apiGroup 地址管理
 * @apiPermission none
 * 
 * @apiDescription 將某地址設為默認地址
 * 
 * @apiParam {String} phone 用戶手機號
 * @apiParam {Integer} rank 要設為默認地址的序列號
 *
 * @apiSuccessExample 更改地址成功
 *     {
 *        800
 *     }
 * @apiSuccessExample 更改成功(rank=0)
 *     {
 *        200
 *     }
 * @apiErrorExample 更改失敗(沒有更新數據or地址不存在)
 *     {
 *        400
 *     }
 */

/**  
 * @api {DELETE} /setting/address 刪除某地址
 * @apiName DeleteAddress
 * @apiGroup 地址管理
 * @apiPermission none
 * 
 * @apiDescription 刪除某地址
 * 
 * @apiParam {String} phone 用戶手機號
 * @apiParam {Integer} rank 要刪除的地址序列號
 *
 * @apiSuccessExample 刪除地址成功
 *     {
 *        800
 *     }
 * @apiErrorExample 刪除失敗(沒有更新的數據or要刪除的地址不存在)
 *     {
 *        400
 *     }
 */

/**
 * @api {POST} /product 上傳商品
 * @apiName UploadProduct
 * @apiGroup 商品上傳
 * @apiPermission none
 *
 * @apiDescription 用戶上傳商品功能，用戶須通過實名認證方可使用此功能。本系統上傳商品的流程是: 用戶上傳商品-->商品進入審核階段-->審核成功/失敗-->商品上架/不予上架。用戶可以在"我的商品"中查看此流程進度。
 *
 * @apiParam {String} name 商品名稱
 * @apiParam {String} phone 用戶(賣家)手機號
 * @apiParam {Integer} storage 庫存量
 * @apiParam {File[]} pictures 商品展示照片
 * @apiParam {String} intro 商品描述
 * @apiParam {Double} price 商品價格
 * @apiParam {String} catalog 商品分類(編碼:B,M,C....)
 * @apiParam {String} address 發貨地
 *
 * @apiSuccessExample 商品上傳成功
 *     {
 *        201
 *     }
 * @apiErrorExample 用戶無權限
 *     {
 *        403
 *     }
 * @apiErrorExample 商品編號重複(稍後再嘗試即可)
 *     {
 *        422
 *     }
 * @apiErrorExample 圖片保存失敗/商品上傳失敗
 *     {
 *        404
 *     }
 */

/**
 * @api {POST} /setting/feedback 用戶反饋
 * @apiName WriteFeedback
 * @apiGroup 設置:用戶反饋
 * @apiPermission none
 *
 * @apiDescription 用戶反饋功能
 *
 * @apiParam {String} phone 用戶手機號
 * @apiParam {String} content 反饋內容
 *
 * @apiSuccessExample 發送成功
 *     {
 *        200
 *     }
 * @apiErrorExample 錯誤用戶
 *     {
 *        400
 *     }
 * @apiErrorExample 找不到檔案/讀寫錯誤/路徑創建失敗
 *     {
 *        422
 *     }
 */

/**
 * @api {GET} /setting/help 獲取幫助問題的類型
 * @apiName GetQuestionCatalogs
 * @apiGroup 設置:幫助
 * @apiPermission none
 *
 * @apiDescription 獲取幫助問題的類型，用戶可通過問題類型鎖定問題位置。
 *
 * @apiSuccessExample 成功返回問題類型(例子)
 *    [
 *        {
 *             "index":"0",
 *             "catalog":"商品上傳"
 *        },
 *        {
 *             "index":"1",
 *             "catalog":"關於"
 *        }
 *     ]
 * @apiErrorExample 失敗
 *     {
 *        null
 *     }
 */

/**
 * @api {GET} /setting/help/catalog 獲取相應問題類型的問題
 * @apiName GetHelpQuestions
 * @apiGroup 設置:幫助
 * @apiPermission none
 *
 * @apiDescription 用戶鎖定問題位置後，進一步找到問題。
 *
 * @apiSuccessExample 成功返回問相應類型的問題(以"商品上傳"為例)
 *    [
 *        {
 *             "index":"0",
 *             "catalog":"如何上傳商品"
 *        },
 *        {
 *             "index":"1",
 *             "catalog":"為何上傳商品後沒有成功上架"
 *        }
 *     ]
 * @apiErrorExample 失敗
 *     {
 *        null
 *     }
 */

/**
 * @api {GET} /setting/help/catalog/question 獲取對應問題解答
 * @apiName GetHelpAnswer
 * @apiGroup 設置:幫助
 * @apiPermission none
 *
 * @apiDescription 用戶找到問題後，獲得問題的解答。
 *
 * @apiSuccessExample 成功(以"為何上傳商品後沒有成功上架"為例)
 *    {
 *         閒置重重的商品上架流程為: 用戶上傳商品-->管理員審核通過-->用戶商品上架。
 *         可以在個人中心查看商品的審核進度，若顯示[審核中]請用戶耐心等待管理員審核結果，一般不會超過24h。
 *         若顯示[已駁回]表示管理員判斷該商品有違規嫌疑，具體細節由系統發送通知說明。
 *     }
 * @apiErrorExample 失敗
 *     {
 *        null
 *     }
 */

/**
 * @api {GET} /my/products 顯示用戶所有商品
 * @apiName ShowAllMyProducts
 * @apiGroup 我的商品
 * @apiPermission none
 *
 * @apiDescription 顯示用戶所有上傳過的商品
 *
 * @apiParam {String} phone 用戶手機號
 *
 * @apiSuccessExample 請求成功(手機號為1635905050的例子)
 *     [
 *        {
 *              "status":0,
 *              "name":"考研真相英語一",
 *              "price":12.0,
 *              "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAg....(base64編碼，原文過長不全部展示)
 *        },
 *        {
 *             "status":0,
 *             "name":"二手書",
 *             "price":8.0,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXh.......
 *        },
 *        {
 *             "status":0,
 *             "name":"思想道德與法治2021年版",
 *             "price":7.9,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYR......
 *         },
 *         {
 *             "status":0,
 *             "name":"中公小學教師資格證",
 *             "price":68.0,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4Q......
 *         },
 *         {
 *             "status":0,
 *             "name":"二手自考教材04729大學語文2018版徐中玉陶型傳北京大學出版社",
 *             "price":14.66,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAg......
 *         },
 *         {
 *             "status":0,
 *             "name":"國家教師資格考試",
 *             "price":15.0,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0.......
 *         }
 *     ]
 * @apiErrorExample 沒有任何上傳的商品
 *     {
 *        null
 *     }
 */

/**
 * @api {GET} /my/products/key 根據關鍵字模糊查詢用戶商品
 * @apiName ShowMyProductsByKey
 * @apiGroup 我的商品
 * @apiPermission none
 *
 * @apiDescription 根據輸入的關鍵字顯示用戶所有上傳過的商品
 *
 * @apiParam {String} phone 用戶手機號
 * @apiParam {String} keyword 關鍵字
 *
 * @apiSuccessExample 請求成功(例子"考")
 *     [
 *        {
 *              "status":0,
 *              "name":"考研真相英語一",
 *              "price":12.0,
 *              "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAg....(base64編碼，原文過長不全部展示)
 *        },
 *         {
 *             "status":0,
 *             "name":"二手自考教材04729大學語文2018版徐中玉陶型傳北京大學出版社",
 *             "price":14.66,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAg......
 *         },
 *         {
 *             "status":0,
 *             "name":"國家教師資格考試",
 *             "price":15.0,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0.......
 *         }
 *     ]
 * @apiErrorExample 沒有符合的商品
 *     {
 *        null
 *     }
 */

/**
 * @api {GET} /my/products/catalog 根據分類顯示用戶商品
 * @apiName ShowMyProductsByCatalog
 * @apiGroup 我的商品
 * @apiPermission none
 *
 * @apiDescription 根據分類顯示用戶上傳過的商品
 *
 * @apiParam {String} phone 用戶手機號
 * @apiParam {String} catalog 商品分類(B,M,C...)
 *
 * @apiSuccessExample 請求成功("B"的例子)
 *     [
 *        {
 *              "status":0,
 *              "name":"考研真相英語一",
 *              "price":12.0,
 *              "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAg....(base64編碼，原文過長不全部展示)
 *        },
 *        {
 *             "status":0,
 *             "name":"二手書",
 *             "price":8.0,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXh.......
 *        },
 *        {
 *             "status":0,
 *             "name":"思想道德與法治2021年版",
 *             "price":7.9,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYR......
 *         },
 *         {
 *             "status":0,
 *             "name":"中公小學教師資格證",
 *             "price":68.0,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4Q......
 *         },
 *         {
 *             "status":0,
 *             "name":"二手自考教材04729大學語文2018版徐中玉陶型傳北京大學出版社",
 *             "price":14.66,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAg......
 *         },
 *         {
 *             "status":0,
 *             "name":"國家教師資格考試",
 *             "price":15.0,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0.......
 *         }
 *     ]
 * @apiErrorExample 沒有符合的商品
 *     {
 *        null
 *     }
 */

/**
 * @api {GET} /my/products 根據狀態顯示用戶商品
 * @apiName ShowMyProductsByStatus
 * @apiGroup 我的商品
 * @apiPermission none
 *
 * @apiDescription 根據狀態顯示用戶上傳過的商品
 *
 * @apiParam {String} phone 用戶手機號
 * @apiParam {Integer} status 商品狀態
 *
 * @apiSuccessExample 請求成功("0"的例子)
 *     [
 *        {
 *              "status":0,
 *              "name":"考研真相英語一",
 *              "price":12.0,
 *              "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAg....(base64編碼，原文過長不全部展示)
 *        },
 *        {
 *             "status":0,
 *             "name":"二手書",
 *             "price":8.0,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXh.......
 *        },
 *        {
 *             "status":0,
 *             "name":"思想道德與法治2021年版",
 *             "price":7.9,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYR......
 *         },
 *         {
 *             "status":0,
 *             "name":"中公小學教師資格證",
 *             "price":68.0,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4Q......
 *         },
 *         {
 *             "status":0,
 *             "name":"二手自考教材04729大學語文2018版徐中玉陶型傳北京大學出版社",
 *             "price":14.66,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAg......
 *         },
 *         {
 *             "status":0,
 *             "name":"國家教師資格考試",
 *             "price":15.0,
 *             "coverPic":"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0.......
 *         }
 *     ]
 * @apiErrorExample 沒有符合的商品
 *     {
 *        null
 *     }
 */