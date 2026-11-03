/*
 * 行程資料 — 只要改這個檔案就能更新整個頁面。
 *
 * ⚠️ 這個 repo 會公開在 GitHub Pages 上，請不要填入：
 *    護照號碼、訂位代碼 / 確認碼、航班編號、電話、Email、信用卡資訊、
 *    飯店名稱與房號、接送公司與司機資訊、同行者全名等任何個人資料。
 *    需要記錄的私人資訊請放在 private/ 資料夾（已被 .gitignore 排除）。
 */
window.TRIP = {
  title: "香港 3 天 2 夜",
  subtitle: "2027 冬季・九龍紅磡出發",
  dates: { start: "2027-01-22（五）", end: "2027-01-24（日）" },

  overview: [
    { label: "抵達", value: "01/22 09:15 香港機場" },
    { label: "回程", value: "01/24 18:40 香港機場起飛（T2）" },
    { label: "住宿區域", value: "紅磡（九龍）" },
    { label: "機場交通", value: "去程專車接送・回程機場快綫" },
    { label: "市區交通", value: "八達通 + 港鐵 + 計程車 + 天星小輪" },
    { label: "一月天氣", value: "約 14–20°C，乾燥偏涼" },
  ],

  // book: booked 已預約 / bookable 可預訂 / walkin 不設訂位・現場排隊 / ask 訂位請先致電確認
  // michelin: "一星" / "必比登"（以《香港澳門米芝蓮指南》為準，出發前再確認）
  days: [
    {
      title: "Day 1 — 01/22（五）抵港・佐敦・油麻地・尖沙咀夜色",
      theme: "專車到飯店放行李，午餐澳洲牛奶公司，下午油麻地 / 旺角，晚上尖沙咀日落・麥文記・燈光秀・廟街夜市",
      items: [
        { time: "09:15", title: "抵達香港國際機場", note: "入境、領行李約 45–60 分鐘", tag: "交通" },
        { time: "10:30", title: "專車接送 → 紅磡飯店", note: "車程約 40 分鐘；集合地點與時間依接送公司通知", tag: "交通", book: "booked" },
        { time: "11:15", title: "飯店寄放行李", note: "入住時間通常為 15:00", tag: "住宿" },
        { time: "11:30", title: "計程車 → 佐敦", note: "約 10 分鐘", tag: "交通" },
        { time: "11:45", title: "🍳 茶餐廳：澳洲牛奶公司", note: "招牌炒蛋多士、燉奶；翻桌快，常要併桌；週四公休", tag: "美食", book: "walkin" },
        { time: "13:00", title: "油麻地：天后廟・果欄", note: "從佐敦一路往北走", tag: "景點" },
        { time: "14:30", title: "旺角：女人街・波鞋街", note: "", tag: "購物" },
        { time: "16:00", title: "回飯店辦理入住・休息", note: "港鐵旺角 → 黃埔，觀塘綫直達", tag: "住宿" },
        { time: "17:15", title: "沿海濱長廊步行 → 尖沙咀", note: "紅磡海濱一路接到尖東，約 35–40 分鐘；趕時間可搭計程車（約 10 分鐘）", tag: "交通" },
        { time: "18:00", title: "星光大道・尖沙咀海濱看日落", note: "一月日落約 18:00，對岸是港島天際線", tag: "景點" },
        { time: "18:30", title: "步行 → 佐敦", note: "約 15 分鐘", tag: "交通" },
        { time: "18:45", title: "🍜 雲吞麵：麥文記麵家（佐敦白加士街）", note: "全蝦雲吞麵、南乳豬手；老字號小店，常要併桌", tag: "美食", book: "walkin", michelin: "必比登" },
        { time: "19:30", title: "步行回尖沙咀海濱", note: "約 15 分鐘，19:50 前到", tag: "交通" },
        { time: "20:00", title: "幻彩詠香江", note: "每晚 20:00，約 10 分鐘", tag: "景點" },
        { time: "20:20", title: "計程車 → 廟街", note: "約 10 分鐘", tag: "交通" },
        { time: "20:30", title: "廟街夜市", note: "攤位約 18:00 起營業；小吃、雜貨、看相，逛到 21:30 左右", tag: "景點" },
        { time: "21:30", title: "計程車回飯店", note: "約 10 分鐘", tag: "交通" },
      ],
    },
    {
      title: "Day 2 — 01/23（六）港島：燒鵝・牛腩・煲仔飯",
      theme: "一早上太平山，午餐甘牌燒鵝，下午中環上環吃九記牛腩，晚餐灣仔美麗小廚煲仔飯，夜搭天星小輪回九龍",
      items: [
        { time: "07:15", title: "飯店早餐", note: "今天要趕在燒鵝店開門前排隊，早點出發", tag: "美食" },
        { time: "08:00", title: "港鐵 紅磡 → 金鐘，步行到山頂纜車站", note: "東鐵綫過海兩站約 8 分鐘；金鐘到纜車站步行約 10–15 分鐘", tag: "交通" },
        { time: "08:30", title: "山頂纜車 → 太平山頂", note: "週末排隊久，網上預購車票可省時間", tag: "景點", book: "bookable" },
        { time: "08:45", title: "凌霄閣・盧吉道環迴步行徑", note: "全程平路約 1 小時，早上人少、維港景色最佳", tag: "景點" },
        { time: "10:30", title: "山頂纜車下山 → 計程車到灣仔", note: "約 10 分鐘", tag: "交通" },
        { time: "11:00", title: "🍗 燒臘：甘牌燒鵝（灣仔）", note: "11:30 開門，開門前就大排長龍；到店先登記取號。燒鵝、叉燒、燒肉都點", tag: "美食", book: "walkin", michelin: "一星" },
        { time: "12:45", title: "港鐵 灣仔 → 中環", note: "港島綫兩站", tag: "交通" },
        { time: "13:00", title: "中環至半山自動扶梯・蘇豪・嘉咸街壁畫", note: "", tag: "景點" },
        { time: "13:45", title: "大館", note: "前中區警署建築群，展覽與咖啡", tag: "景點" },
        { time: "14:45", title: "🥩 牛腩：九記牛腩（中環歌賦街）", note: "清湯牛腩、咖喱牛筋腩；12:30 開門，下午茶時段人較少；週日休息所以排週六。離 PMQ 步行 2 分鐘", tag: "美食", book: "walkin", michelin: "必比登" },
        { time: "15:20", title: "PMQ 元創方", note: "本地設計小店，適合買伴手禮", tag: "購物" },
        { time: "15:50", title: "上環：荷李活道・文武廟・摩羅街", note: "逛到 16:30 左右", tag: "景點" },
        { time: "16:35", title: "港鐵 上環 → 灣仔", note: "港島綫三站約 8 分鐘；計程車約 15 分鐘", tag: "交通" },
        { time: "17:00", title: "🍲 煲仔飯：美麗小廚（灣仔譚臣道）", note: "晚市 17:00 開門就到，少人數不設訂位、現場候位；鋒哥三寶煲仔飯 + 鑊氣小炒、大紅袍脆皮雞。煲仔飯要等約 20–30 分鐘", tag: "美食", book: "walkin", michelin: "必比登" },
        { time: "19:15", title: "計程車 灣仔 → 中環碼頭", note: "約 10 分鐘；搭港鐵的話中環站走到碼頭還要 15 分鐘，務必 19:15 前離開", tag: "交通" },
        { time: "20:00", title: "天星小輪 中環 → 尖沙咀", note: "在船上看幻彩詠香江與夜景", tag: "交通" },
        { time: "20:30", title: "沿海濱散步回飯店（或搭計程車）", note: "步行約 35–40 分鐘；計程車約 10 分鐘", tag: "交通" },
      ],
    },
    {
      title: "Day 3 — 01/24（日）深水埗・太子・返程",
      theme: "退房後行李寄放九龍站，上午深水埗吃添好運點心，下午太子金華冰廳，再從九龍站搭機場快綫",
      items: [
        { time: "07:30", title: "飯店早餐", note: "", tag: "美食" },
        { time: "08:30", title: "退房 → 計程車到九龍站", note: "約 15 分鐘；請飯店門口幫忙叫車", tag: "交通" },
        { time: "08:50", title: "九龍站行李寄存：衞安 Guardforce 九龍站服務中心", note: "香港機鐵九龍站地下 KOW 54 號鋪，服務時間 08:00–18:00；付費、以件計、只收港幣現金（熱線 2736 0303）", tag: "交通", book: "walkin" },
        { time: "09:15", title: "港鐵 九龍 → 南昌，步行到深水埗", note: "東涌綫兩站，再步行約 10 分鐘；或直接搭計程車", tag: "交通" },
        { time: "09:45", title: "深水埗：街市・布料街・基隆街", note: "週日上午街市最有生活感；鴨寮街攤位中午才開，留到飯後", tag: "景點" },
        { time: "11:00", title: "🥟 點心：添好運（深水埗福榮街）", note: "酥皮焗叉燒包、腸粉；週日午市要排隊，11:00 前到", tag: "美食", book: "walkin", michelin: "必比登" },
        { time: "12:15", title: "鴨寮街", note: "電子、雜貨露天攤，中午起最熱鬧", tag: "景點" },
        { time: "12:45", title: "港鐵 深水埗 → 太子", note: "荃灣綫一站", tag: "交通" },
        { time: "13:00", title: "🍳 茶餐廳：金華冰廳（太子弼街）", note: "招牌菠蘿油、奶茶，當飯後點心", tag: "美食", book: "walkin" },
        { time: "13:45", title: "太子：花墟・雀鳥花園・金魚街", note: "步行串連，順便買伴手禮", tag: "景點" },
        { time: "14:30", title: "計程車 → 九龍站，領回行李", note: "約 10–15 分鐘", tag: "交通" },
        { time: "15:00", title: "機場快綫 九龍站 → 機場", note: "約 22 分鐘，班距約 10 分鐘", tag: "交通", book: "bookable" },
        { time: "15:30", title: "T2 七樓 U 行段：自助登機・行李託運", note: "開放至起飛前 75 分鐘（17:25 截止）", tag: "交通" },
        { time: "18:40", title: "航班起飛", note: "", tag: "交通" },
      ],
    },
  ],

  // 美食清單：行程內的店 + 備案
  food: [
    { cat: "燒臘", name: "甘牌燒鵝", area: "灣仔", michelin: "一星", book: "walkin", day: "Day 2 午餐" },
    { cat: "燒臘", name: "一樂燒鵝", area: "中環", michelin: "一星", book: "walkin", day: "備案" },
    { cat: "牛腩", name: "九記牛腩", area: "中環", michelin: "必比登", book: "walkin", day: "Day 2 下午" },
    { cat: "牛腩", name: "華姐清湯腩", area: "天后", michelin: "必比登", book: "walkin", day: "備案" },
    { cat: "雲吞麵", name: "沾仔記", area: "中環", michelin: "必比登", book: "walkin", day: "備案（Day 2 下午）" },
    { cat: "雲吞麵", name: "麥文記麵家", area: "佐敦", michelin: "必比登", book: "walkin", day: "Day 1 晚餐" },
    { cat: "點心", name: "添好運", area: "深水埗", michelin: "必比登", book: "walkin", day: "Day 3 午餐" },
    { cat: "雲吞麵", name: "劉森記麵家", area: "深水埗", michelin: "必比登", book: "walkin", day: "備案（Day 3 中午）" },
    { cat: "煲仔飯", name: "美麗小廚", area: "灣仔", michelin: "必比登", book: "walkin", day: "Day 2 晚餐" },
    { cat: "煲仔飯", name: "坤記煲仔小菜", area: "西營盤", michelin: "必比登", book: "walkin", day: "備案（炭火，週六晚排 1.5–2 小時）" },
    { cat: "茶餐廳", name: "澳洲牛奶公司", area: "佐敦", michelin: "", book: "walkin", day: "Day 1 午餐" },
    { cat: "茶餐廳", name: "金華冰廳", area: "太子", michelin: "", book: "walkin", day: "Day 3 下午" },
  ],

  checklist: [
    "護照（效期 6 個月以上）",
    "台胞證（或持有效台胞證以免辦網上快證；出發前確認入境規定）",
    "確認去程專車的集合地點與聯絡方式",
    "準備港幣現金（九龍站行李寄存只收現金）",
    "預購山頂纜車票（01/23 08:30 左右）",
    "預購機場快綫車票（01/24 九龍站 → 機場）",
    "港幣現金 / 信用卡",
    "八達通（或手機八達通）",
    "上網方案 / eSIM",
    "萬用轉接頭（英式三腳 BS 1363）",
    "行動電源",
    "保暖外套（一月早晚偏涼，海邊風大）",
    "旅遊保險",
  ],

  tips: [
    { title: "一月天氣", body: "乾季，白天約 18–20°C、晚上可能降到 12–14°C；洋蔥式穿搭，加一件防風外套。" },
    { title: "紅磡交通", body: "黃埔站（觀塘綫）到油麻地、旺角、太子都直達；紅磡站（東鐵綫）兩站過海到金鐘；沿海濱長廊可步行到尖沙咀。" },
    { title: "回程行李", body: "九龍站的行李寄存由衞安（Guardforce）經營，在機鐵九龍站地下 KOW 54 號鋪（服務時間 08:00–18:00），付費、只收港幣現金；下午回九龍站領行李直接搭機場快綫，到機場 T2 七樓 U 行段自助託運。備案：圓方商場（九龍站上蓋）或飯店寄放。" },
    { title: "名店排隊", body: "甘牌燒鵝、九記牛腩、麥文記、美麗小廚、添好運、澳洲牛奶公司、金華冰廳都不設訂位（或少人數不接受訂位），避開正午尖峰或開門前到最省時間；常要和陌生人併桌。" },
    { title: "八達通", body: "港鐵、巴士、小輪、便利商店都能用；港鐵站可加值。" },
    { title: "港鐵", body: "搭手扶梯靠右站、左側通行；車廂內禁止飲食。" },
    { title: "插座", body: "英式三腳插座，電壓 220V。" },
    { title: "小費", body: "餐廳通常已加收一成服務費，一般不需另給小費。" },
  ],

  links: [
    { label: "香港天文台", url: "https://www.hko.gov.hk/" },
    { label: "港鐵 MTR", url: "https://www.mtr.com.hk/" },
    { label: "機場快綫", url: "https://www.mtr.com.hk/en/customer/services/airport_express.html" },
    { label: "衞安行李託管", url: "https://www.guardforce.com.hk/tc/secure-storage/left-lugguage" },
    { label: "山頂纜車", url: "https://www.thepeak.com.hk/" },
    { label: "天星小輪", url: "https://www.starferry.com.hk/" },
    { label: "幻彩詠香江", url: "https://www.tourism.gov.hk/symphony/" },
    { label: "香港旅遊發展局", url: "https://www.discoverhongkong.com/" },
    { label: "香港國際機場", url: "https://www.hongkongairport.com/" },
  ],
};
