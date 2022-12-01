define({ "api": [
  {
    "type": "POST",
    "url": "/product",
    "title": "上傳商品",
    "name": "UploadProduct",
    "group": "商品上傳",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>用戶上傳商品功能，用戶須通過實名認證方可使用此功能。本系統上傳商品的流程是: 用戶上傳商品--&gt;商品進入審核階段--&gt;審核成功/失敗--&gt;商品上架/不予上架。用戶可以在&quot;我的商品&quot;中查看此流程進度。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名稱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶(賣家)手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "storage",
            "description": "<p>庫存量</p>"
          },
          {
            "group": "Parameter",
            "type": "File[]",
            "optional": false,
            "field": "pictures",
            "description": "<p>商品展示照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "intro",
            "description": "<p>商品描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "price",
            "description": "<p>商品價格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catalog",
            "description": "<p>商品分類(編碼:B,M,C....)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>發貨地</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "商品上傳成功",
          "content": "{\n   201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用戶無權限",
          "content": "{\n   403\n}",
          "type": "json"
        },
        {
          "title": "商品編號重複(稍後再嘗試即可)",
          "content": "{\n   422\n}",
          "type": "json"
        },
        {
          "title": "圖片保存失敗/商品上傳失敗",
          "content": "{\n   404\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "商品上傳"
  },
  {
    "type": "post",
    "url": "/catalog",
    "title": "添加分類",
    "name": "AddCatalog",
    "group": "商品分類管理",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>添加分類</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>分類編碼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>分類名稱</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "添加成功釋例",
          "content": "{\n  201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "添加失敗(分類編碼已存在)",
          "content": "{\n  422\n}",
          "type": "json"
        },
        {
          "title": "添加失敗(信息未成功添加)",
          "content": "{\n  404\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "商品分類管理"
  },
  {
    "type": "get",
    "url": "/catalog/catalogs",
    "title": "顯示所有分類",
    "name": "AllCatalog",
    "group": "商品分類管理",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>顯示所有分類</p>",
    "success": {
      "examples": [
        {
          "title": "請求成功釋例",
          "content": "[\n     {\"id\":1,\"name\":\"書籍\",\"number\":\"B\"},\n     {\"id\":2,\"name\":\"美妝\",\"number\":\"M\"},\n     {\"id\":3,\"name\":\"數碼\",\"number\":\"D\"},\n     {\"id\":4,\"name\":\"家居\",\"number\":\"F\"},\n     {\"id\":5,\"name\":\"電器\",\"number\":\"E\"},\n     {\"id\":6,\"name\":\"服裝\",\"number\":\"C\"},\n     {\"id\":7,\"name\":\"其它\",\"number\":\"O\"}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "商品分類管理"
  },
  {
    "type": "delete",
    "url": "/catalog",
    "title": "刪除分類",
    "name": "DeleteCatalog",
    "group": "商品分類管理",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>刪除分類</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>分類序號</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "分類刪除成功",
          "content": "{\n  204\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "刪除失敗(沒有選中的對象，數據庫為發生改動)",
          "content": "{\n  400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "商品分類管理"
  },
  {
    "type": "put",
    "url": "/catalog",
    "title": "更新分類信息",
    "name": "UpdateCatalog",
    "group": "商品分類管理",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>更新分類信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>分類序號</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>新的分類編碼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>新的分類名稱</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "更新成功",
          "content": "{\n  800\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "更新失敗",
          "content": "{\n  808\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "商品分類管理"
  },
  {
    "type": "get",
    "url": "/all/likes",
    "title": "顯示所有收藏商品",
    "name": "AllLikes",
    "group": "商品收藏",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>顯示所有收藏商品，默認排序:收藏日期新到舊</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "請求成功",
          "content": "[\n   {\n     \"number\":\"B1667559776586\",\n     \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgA...(base64編碼，原文過長不全部展示)\n     \"name\":學生心理健康教育第二版\",\n     \"price\":7.9\n   },\n     ....,{}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "商品收藏"
  },
  {
    "type": "get",
    "url": "/catalog/likes",
    "title": "依照商品分類顯示收藏商品",
    "name": "CatalogLikes",
    "group": "商品收藏",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>依照商品分類顯示收藏商品</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catalog",
            "description": "<p>分類編碼(B,M,...)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "請求成功",
          "content": "[\n   {\n     \"number\":\"B1667559776586\",\n     \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgA...(base64編碼，原文過長不全部展示)\n     \"name\":學生心理健康教育第二版\",\n     \"price\":7.9\n   },\n     ....,{}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "商品收藏"
  },
  {
    "type": "get",
    "url": "/like",
    "title": "確認該商品是否已收藏",
    "name": "CheckLike",
    "group": "商品收藏",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>檢查商品是否已收藏的功能可用於前端界面顯示愛心顏色的判斷標準。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>商品編碼</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "商品已收藏",
          "content": "{\n   ture\n}",
          "type": "json"
        },
        {
          "title": "商品未收藏",
          "content": "{\n   false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "商品收藏"
  },
  {
    "type": "delete",
    "url": "/likes",
    "title": "批量取消收藏",
    "name": "DeleteLikes",
    "group": "商品收藏",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>批量取消收藏</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "numbers",
            "description": "<p>[&quot;商品編碼1&quot;, &quot;商品編碼2&quot;,....]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "取消收藏成功",
          "content": "{\n   204\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "取消收藏失敗",
          "content": "{\n   404\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "商品收藏"
  },
  {
    "type": "get",
    "url": "/all/likes/order",
    "title": "切換不同的排序方式",
    "name": "OrderLikes",
    "group": "商品收藏",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>切換不同的排序方式，type的值:0(添加日期:新--&gt;舊), 1(添加日期:舊--&gt;新), 2(商品價格:低--&gt;高), 3(商品價格:高--&gt;低)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>排序方式編號</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "請求成功",
          "content": "[\n   {\n     \"number\":\"B1667559776586\",\n     \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgA...(base64編碼，原文過長不全部展示)\n     \"name\":學生心理健康教育第二版\",\n     \"price\":7.9\n   },\n     ....,{}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "商品收藏"
  },
  {
    "type": "post",
    "url": "/like",
    "title": "添加/取消收藏",
    "name": "PressLike",
    "group": "商品收藏",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>添加/取消收藏是當用戶點下收藏鍵時，通過商品收藏狀態自動判斷該進行收藏/取消收藏的動作。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>商品編碼</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "收藏成功",
          "content": "{\n   201\n}",
          "type": "json"
        },
        {
          "title": "取消收藏成功",
          "content": "{\n   204\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用戶無權限",
          "content": "{\n   403\n}",
          "type": "json"
        },
        {
          "title": "收藏失敗",
          "content": "{\n   404\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "商品收藏"
  },
  {
    "type": "get",
    "url": "/catalog/products",
    "title": "分類檢索商品",
    "name": "CatalogProduct",
    "group": "商品查詢",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>分類檢索商品</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catalog",
            "description": "<p>商品分類編碼(B,M,E...)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "請求成功",
          "content": "[\n   {\n     \"number\":\"B1667559776586\",\n     \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgA...(base64編碼，原文過長不全部展示)\n     \"name\":學生心理健康教育第二版\",\n     \"price\":7.9\n   },\n     ....,{}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "商品查詢"
  },
  {
    "type": "get",
    "url": "/homepage",
    "title": "主頁面商品顯示",
    "name": "Homepage",
    "group": "商品查詢",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>主頁面商品顯示，返回商品信息的List</p>",
    "success": {
      "examples": [
        {
          "title": "請求成功",
          "content": "[\n   {\n     \"number\":\"B1667559776586\",\n     \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgA...(base64編碼，原文過長不全部展示)\n     \"name\":學生心理健康教育第二版\",\n     \"price\":7.9\n   },\n     ....,{}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "商品查詢"
  },
  {
    "type": "get",
    "url": "/product/detail",
    "title": "商品詳細信息顯示",
    "name": "ProductDetail",
    "group": "商品查詢",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>商品詳細信息顯示，picture_count返回該商品的圖片數，並由pictures以List的形式傳給前端</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>商品編碼</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "請求成功",
          "content": "{\n   \"name\":\"大學生心理健康教育第二版\",\n   \"seller_name\":\"天天\",\n   \"address\":\"重慶大學虎溪校區竹園3棟\",\n   \"date\":\"2022-11-04 19:02:56\",\n   \"price\":7.9,\n   \"intro\":\"全新沒有用過，到貨前就退課了\",\n   \"like_count\":0,\n   \"picture_count\":1,\n   \"pictures\":[\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAA.....(base64編碼，原文過長不全部展示)\",...,\"...\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "商品查詢"
  },
  {
    "type": "get",
    "url": "/search/products",
    "title": "搜索欄檢索",
    "name": "SearchProduct",
    "group": "商品查詢",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>搜索欄檢索</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>搜索欄輸入內容</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "請求成功",
          "content": "[\n   {\n     \"number\":\"B1667559776586\",\n     \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgA...(base64編碼，原文過長不全部展示)\n     \"name\":學生心理健康教育第二版\",\n     \"price\":7.9\n   },\n     ....,{}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "商品查詢"
  },
  {
    "type": "POST",
    "url": "/setting/address",
    "title": "添加地址",
    "name": "AddAddress",
    "group": "地址管理",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>添加地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>當前用戶手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "isDefaultAddress",
            "description": "<p>是否需要設置為默認地址(需要:1,不需要:0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收件者的稱呼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverPhone",
            "description": "<p>收件者的手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>地區</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressDetail",
            "description": "<p>詳細地址</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "添加成功(因為算是數據庫更新，所以返回800)",
          "content": "{\n   800\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "添加失敗",
          "content": "{\n   400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "地址管理"
  },
  {
    "type": "DELETE",
    "url": "/setting/address",
    "title": "刪除某地址",
    "name": "DeleteAddress",
    "group": "地址管理",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>刪除某地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rank",
            "description": "<p>要刪除的地址序列號</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "刪除地址成功",
          "content": "{\n   800\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "刪除失敗(沒有更新的數據or要刪除的地址不存在)",
          "content": "{\n   400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "地址管理"
  },
  {
    "type": "GET",
    "url": "/default/address",
    "title": "獲取默認地址",
    "name": "GetDefaultAddress",
    "group": "地址管理",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>獲取用戶的默認地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回地址信息(例子)",
          "content": "{\n   \"receiverName\":\"喵薄荷\",\n   \"receiverPhone\":\"15078818663\",\n   \"region\":\"重慶\",\n   \"addressDetail\":\"重慶大學虎溪校區松園5棟102室\",\n   \"rank\":0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "默認地址不存在",
          "content": "{\n   null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "地址管理"
  },
  {
    "type": "PUT",
    "url": "/setting/default/address",
    "title": "將某地址設為默認地址",
    "name": "SetAsDefaultAddress",
    "group": "地址管理",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>將某地址設為默認地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rank",
            "description": "<p>要設為默認地址的序列號</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "更改地址成功",
          "content": "{\n   800\n}",
          "type": "json"
        },
        {
          "title": "更改成功(rank=0)",
          "content": "{\n   200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "更改失敗(沒有更新數據or地址不存在)",
          "content": "{\n   400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "地址管理"
  },
  {
    "type": "GET",
    "url": "/setting/addresses",
    "title": "顯示用戶所有地址",
    "name": "ShowAllAddress",
    "group": "地址管理",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>顯示用戶所有地址，返回信息rank是更新與刪除地址所需要的參數</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "請求成功(例子)",
          "content": "[\n   {\n        \"receiverName\":\"喵薄荷\",\n        \"receiverPhone\":\"15078818663\",\n        \"region\":\"重慶\",\n        \"addressDetail\":\"重慶大學虎溪校區松園5棟102室\",\n        \"rank\":0\n   },\n   {\n        \"receiverName\":\"大頭兒子\",\n        \"receiverPhone\":\"15078818663\",\n        \"region\":\"重慶\",\n        \"addressDetail\":\"重慶大學虎溪校區松園5棟102室\",\n        \"rank\":1\n   },\n   {\n        \"receiverName\":\"神奇寶可夢\",\n        \"receiverPhone\":\"15078818663\",\n        \"region\":\"重慶\",\n        \"addressDetail\":\"重慶大學虎溪校區松園5棟102室\",\n        \"rank\":2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "若沒有任何地址存在",
          "content": "{\n   null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "地址管理"
  },
  {
    "type": "PUT",
    "url": "/setting/address",
    "title": "編輯地址",
    "name": "UpdateAddress",
    "group": "地址管理",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>編輯地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rank",
            "description": "<p>地址序列號</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收件者的稱呼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverPhone",
            "description": "<p>收件者的手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>地區</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressDetail",
            "description": "<p>詳細地址</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "更新成功",
          "content": "{\n   800\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "更新失敗(沒有更新)",
          "content": "{\n   400\n}",
          "type": "json"
        },
        {
          "title": "請求數據不存在(默認地址)",
          "content": "{\n   4001",
          "type": "json"
        },
        {
          "title": "請求數據不存在(其他地址)",
          "content": "{\n   4002\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "地址管理"
  },
  {
    "type": "DELETE",
    "url": "/my/product",
    "title": "刪除我的商品",
    "name": "DeleteMyProduct",
    "group": "我的商品",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>刪除我的商品的功能是完全刪除某一商品的所有信息，即數據庫和磁盤裡的圖片。為了不影響其他用戶交易，該功能需商品處於下架狀態(狀態碼為3或6)方可操作。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>商品編號</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "請求成功(例子)",
          "content": "{\n   204\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "商品不存在",
          "content": "{\n   422\n}",
          "type": "json"
        },
        {
          "title": "刪除失敗(圖片數據/數據庫數據)",
          "content": "{\n   400\n}",
          "type": "json"
        },
        {
          "title": "商品為不可刪除狀態(需先下架)",
          "content": "{\n   412\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "我的商品"
  },
  {
    "type": "PUT",
    "url": "/my/product/off",
    "title": "用戶下架商品",
    "name": "OffShelfMyProduct",
    "group": "我的商品",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>用戶下架商品的是個暫時性的操作，可以通過[商品恢復上架]使商品重新上架。只有狀態碼為0, 4, 5的商品可以進行下架操作，下架的商品不會刪除其商品信息，但若要刪除某商品，該商品必須為下架狀態。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>商品編號</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "請求成功(例子)",
          "content": "{\n   201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "商品不存在/商品下架失敗",
          "content": "{\n   422\n}",
          "type": "json"
        },
        {
          "title": "商品為不可下架狀態",
          "content": "{\n   300\n}",
          "type": "json"
        },
        {
          "title": "商品狀態異常",
          "content": "{\n   400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "我的商品"
  },
  {
    "type": "PUT",
    "url": "/my/product/on",
    "title": "用戶商品恢復上架",
    "name": "OnShelfMyProduct",
    "group": "我的商品",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>此功能提供用戶回復商品上架，只適用於用戶手動下架的商品，即狀態碼為6的商品。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>商品編號</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "請求成功(例子)",
          "content": "{\n   201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "商品不存在/商品回復上架失敗",
          "content": "{\n   422\n}",
          "type": "json"
        },
        {
          "title": "商品為不可下架狀態",
          "content": "{\n   400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "我的商品"
  },
  {
    "type": "GET",
    "url": "/my/products",
    "title": "顯示用戶所有商品",
    "name": "ShowAllMyProducts",
    "group": "我的商品",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>顯示用戶所有上傳過的商品</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "請求成功(手機號為1635905050的例子)",
          "content": "[\n   {\n         \"status\":0,\n         \"name\":\"考研真相英語一\",\n         \"price\":12.0,\n         \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAg....(base64編碼，原文過長不全部展示)\n   },\n   {\n        \"status\":0,\n        \"name\":\"二手書\",\n        \"price\":8.0,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXh.......\n   },\n   {\n        \"status\":0,\n        \"name\":\"思想道德與法治2021年版\",\n        \"price\":7.9,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYR......\n    },\n    {\n        \"status\":0,\n        \"name\":\"中公小學教師資格證\",\n        \"price\":68.0,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4Q......\n    },\n    {\n        \"status\":0,\n        \"name\":\"二手自考教材04729大學語文2018版徐中玉陶型傳北京大學出版社\",\n        \"price\":14.66,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAg......\n    },\n    {\n        \"status\":0,\n        \"name\":\"國家教師資格考試\",\n        \"price\":15.0,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0.......\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "沒有任何上傳的商品",
          "content": "{\n   null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "我的商品"
  },
  {
    "type": "GET",
    "url": "/my/products/catalog",
    "title": "根據分類顯示用戶商品",
    "name": "ShowMyProductsByCatalog",
    "group": "我的商品",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>根據分類顯示用戶上傳過的商品</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catalog",
            "description": "<p>商品分類(B,M,C...)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "請求成功(\"B\"的例子)",
          "content": "[\n   {\n         \"status\":0,\n         \"name\":\"考研真相英語一\",\n         \"price\":12.0,\n         \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAg....(base64編碼，原文過長不全部展示)\n   },\n   {\n        \"status\":0,\n        \"name\":\"二手書\",\n        \"price\":8.0,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXh.......\n   },\n   {\n        \"status\":0,\n        \"name\":\"思想道德與法治2021年版\",\n        \"price\":7.9,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYR......\n    },\n    {\n        \"status\":0,\n        \"name\":\"中公小學教師資格證\",\n        \"price\":68.0,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4Q......\n    },\n    {\n        \"status\":0,\n        \"name\":\"二手自考教材04729大學語文2018版徐中玉陶型傳北京大學出版社\",\n        \"price\":14.66,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAg......\n    },\n    {\n        \"status\":0,\n        \"name\":\"國家教師資格考試\",\n        \"price\":15.0,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0.......\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "沒有符合的商品",
          "content": "{\n   null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "我的商品"
  },
  {
    "type": "GET",
    "url": "/my/products/key",
    "title": "根據關鍵字模糊查詢用戶商品",
    "name": "ShowMyProductsByKey",
    "group": "我的商品",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>根據輸入的關鍵字顯示用戶所有上傳過的商品</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>關鍵字</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "請求成功(例子\"考\")",
          "content": "[\n   {\n         \"status\":0,\n         \"name\":\"考研真相英語一\",\n         \"price\":12.0,\n         \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAg....(base64編碼，原文過長不全部展示)\n   },\n    {\n        \"status\":0,\n        \"name\":\"二手自考教材04729大學語文2018版徐中玉陶型傳北京大學出版社\",\n        \"price\":14.66,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAg......\n    },\n    {\n        \"status\":0,\n        \"name\":\"國家教師資格考試\",\n        \"price\":15.0,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0.......\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "沒有符合的商品",
          "content": "{\n   null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "我的商品"
  },
  {
    "type": "GET",
    "url": "/my/products",
    "title": "根據狀態顯示用戶商品",
    "name": "ShowMyProductsByStatus",
    "group": "我的商品",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>根據狀態顯示用戶上傳過的商品</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>商品狀態</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "請求成功(\"0\"的例子)",
          "content": "[\n   {\n         \"status\":0,\n         \"name\":\"考研真相英語一\",\n         \"price\":12.0,\n         \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAg....(base64編碼，原文過長不全部展示)\n   },\n   {\n        \"status\":0,\n        \"name\":\"二手書\",\n        \"price\":8.0,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXh.......\n   },\n   {\n        \"status\":0,\n        \"name\":\"思想道德與法治2021年版\",\n        \"price\":7.9,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYR......\n    },\n    {\n        \"status\":0,\n        \"name\":\"中公小學教師資格證\",\n        \"price\":68.0,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4Q......\n    },\n    {\n        \"status\":0,\n        \"name\":\"二手自考教材04729大學語文2018版徐中玉陶型傳北京大學出版社\",\n        \"price\":14.66,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAg......\n    },\n    {\n        \"status\":0,\n        \"name\":\"國家教師資格考試\",\n        \"price\":15.0,\n        \"coverPic\":\"/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0.......\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "沒有符合的商品",
          "content": "{\n   null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "我的商品"
  },
  {
    "type": "PUT",
    "url": "/my/product",
    "title": "用戶更新商品信息",
    "name": "UpdateMyProduct",
    "group": "我的商品",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>用戶更新商品信息(目前沒有提供更新商品圖片的功能，若有需要請前端人員告訴我一聲，謝謝)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>商品編號</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名稱</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "storage",
            "description": "<p>庫存量</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "price",
            "description": "<p>商品價格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>發貨地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "intro",
            "description": "<p>商品描述</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "請求成功(例子)",
          "content": "{\n   201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "商品不存在/更新失敗",
          "content": "{\n   422\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "我的商品"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "用戶註冊",
    "name": "Register",
    "group": "用戶註冊",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>由用戶輸入手機號、郵箱及密碼來完成註冊，且一個手機號只能註冊一次，若手機號被重複註冊則會判定註冊失敗。 手機號須為11位手機號，其他型號本系統不予支持。所有前後端交互數據皆由UTF-8進行編碼與解碼。 為避免中英文混和而產生亂碼，數據庫除日期、純數字、純英文數據外，接先進行UTF-8編碼後存入數據庫，讀取時再進行相應的解碼顯示。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號(手機號不可重複註冊)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用戶想使用的密碼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>用戶郵箱帳號</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "註冊成功釋例",
          "content": "{\n  201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "註冊失敗(手機號已存在)",
          "content": "{\n  422\n}",
          "type": "json"
        },
        {
          "title": "註冊失敗(信息未成功添加)",
          "content": "{\n  404\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "用戶註冊"
  },
  {
    "type": "GET",
    "url": "/setting/help/catalog/question",
    "title": "獲取對應問題解答",
    "name": "GetHelpAnswer",
    "group": "設置:幫助",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>用戶找到問題後，獲得問題的解答。</p>",
    "success": {
      "examples": [
        {
          "title": "成功(以\"為何上傳商品後沒有成功上架\"為例)",
          "content": "{\n     閒置重重的商品上架流程為: 用戶上傳商品-->管理員審核通過-->用戶商品上架。\n     可以在個人中心查看商品的審核進度，若顯示[審核中]請用戶耐心等待管理員審核結果，一般不會超過24h。\n     若顯示[已駁回]表示管理員判斷該商品有違規嫌疑，具體細節由系統發送通知說明。\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失敗",
          "content": "{\n   null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "設置:幫助"
  },
  {
    "type": "GET",
    "url": "/setting/help/catalog",
    "title": "獲取相應問題類型的問題",
    "name": "GetHelpQuestions",
    "group": "設置:幫助",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>用戶鎖定問題位置後，進一步找到問題。</p>",
    "success": {
      "examples": [
        {
          "title": "成功返回問相應類型的問題(以\"商品上傳\"為例)",
          "content": "[\n    {\n         \"index\":\"0\",\n         \"catalog\":\"如何上傳商品\"\n    },\n    {\n         \"index\":\"1\",\n         \"catalog\":\"為何上傳商品後沒有成功上架\"\n    }\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失敗",
          "content": "{\n   null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "設置:幫助"
  },
  {
    "type": "GET",
    "url": "/setting/help",
    "title": "獲取幫助問題的類型",
    "name": "GetQuestionCatalogs",
    "group": "設置:幫助",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>獲取幫助問題的類型，用戶可通過問題類型鎖定問題位置。</p>",
    "success": {
      "examples": [
        {
          "title": "成功返回問題類型(例子)",
          "content": "[\n    {\n         \"index\":\"0\",\n         \"catalog\":\"商品上傳\"\n    },\n    {\n         \"index\":\"1\",\n         \"catalog\":\"關於\"\n    }\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失敗",
          "content": "{\n   null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "設置:幫助"
  },
  {
    "type": "POST",
    "url": "/setting/feedback",
    "title": "用戶反饋",
    "name": "WriteFeedback",
    "group": "設置:用戶反饋",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>用戶反饋功能</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機號</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>反饋內容</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "發送成功",
          "content": "{\n   200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "錯誤用戶",
          "content": "{\n   400\n}",
          "type": "json"
        },
        {
          "title": "找不到檔案/讀寫錯誤/路徑創建失敗",
          "content": "{\n   422\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/example.js",
    "groupTitle": "設置:用戶反饋"
  }
] });
