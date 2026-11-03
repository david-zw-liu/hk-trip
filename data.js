/*
 * 行程資料 — 只要改這個檔案就能更新整個頁面。
 *
 * ⚠️ 這個 repo 會公開在 GitHub Pages 上，請不要填入：
 *    護照號碼、訂位代碼 / 確認碼、電話、Email、信用卡資訊、
 *    飯店房號、同行者全名等任何個人資料。
 *    需要記錄的私人資訊請放在 private/ 資料夾（已被 .gitignore 排除）。
 */
window.TRIP = {
  title: "香港 3 天 2 夜",
  subtitle: "行程規劃模板",
  dates: { start: "YYYY-MM-DD", end: "YYYY-MM-DD" }, // 例：2026-12-20 ~ 2026-12-22
  base: "尖沙咀（範例）", // 住宿區域即可，不要寫房號或訂位資訊

  overview: [
    { label: "天數", value: "3 天 2 夜" },
    { label: "住宿區域", value: "尖沙咀 / 佐敦（範例）" },
    { label: "主要交通", value: "八達通 + 港鐵 + 天星小輪" },
    { label: "幣別", value: "港幣 HKD" },
  ],

  days: [
    {
      title: "Day 1 — 抵達・九龍夜景",
      theme: "抵港、入住、維港夜色與夜市",
      items: [
        { time: "10:00", title: "抵達香港國際機場", note: "入境後在機場買 / 加值八達通", tag: "交通" },
        { time: "11:00", title: "機場快綫 → 九龍站", note: "九龍站可轉乘免費接駁巴士（出發前確認路線）", tag: "交通" },
        { time: "12:30", title: "飯店寄放行李・午餐", note: "茶餐廳：菠蘿油、凍檸茶", tag: "美食" },
        { time: "14:00", title: "尖沙咀海濱・星光大道", note: "香港藝術館、鐘樓", tag: "景點" },
        { time: "16:00", title: "K11 Musea / 海港城", note: "逛街、下午茶", tag: "購物" },
        { time: "18:30", title: "晚餐", note: "粵菜或燒味", tag: "美食" },
        { time: "20:00", title: "幻彩詠香江", note: "尖沙咀海濱觀賞燈光秀", tag: "景點" },
        { time: "21:00", title: "廟街夜市", note: "煲仔飯、街頭小吃", tag: "美食" },
      ],
    },
    {
      title: "Day 2 — 港島經典",
      theme: "太平山、中環、上環",
      items: [
        { time: "08:30", title: "早餐：港式點心", note: "早點出門避開人潮", tag: "美食" },
        { time: "09:30", title: "山頂纜車 → 太平山頂", note: "凌霄閣、盧吉道步道", tag: "景點" },
        { time: "12:00", title: "中環午餐", note: "雲吞麵 / 牛腩", tag: "美食" },
        { time: "13:30", title: "中環至半山自動扶梯", note: "沿途逛蘇豪區、壁畫街", tag: "景點" },
        { time: "15:00", title: "大館・PMQ 元創方", note: "文創、展覽", tag: "景點" },
        { time: "17:00", title: "上環・荷李活道・文武廟", note: "老街散步", tag: "景點" },
        { time: "19:00", title: "天星小輪 → 尖沙咀", note: "日落後搭船看夜景", tag: "交通" },
        { time: "20:00", title: "晚餐", note: "火鍋或大排檔", tag: "美食" },
      ],
    },
    {
      title: "Day 3 — 在地生活・返程",
      theme: "深水埗 / 旺角，下午前往機場",
      items: [
        { time: "08:30", title: "飯店退房・寄放行李", note: "", tag: "住宿" },
        { time: "09:00", title: "深水埗早餐", note: "豆腐花、腸粉", tag: "美食" },
        { time: "10:30", title: "深水埗街市・布料街", note: "", tag: "景點" },
        { time: "12:00", title: "旺角：女人街・波鞋街", note: "最後採買伴手禮", tag: "購物" },
        { time: "13:30", title: "午餐", note: "", tag: "美食" },
        { time: "15:00", title: "取行李 → 機場快綫", note: "預留充足時間（航班起飛前 3 小時到機場為佳）", tag: "交通" },
      ],
    },
  ],

  // 預算：金額請自行填寫，數字僅為範例
  budget: [
    { item: "機票", amount: 0, note: "" },
    { item: "住宿（2 晚）", amount: 0, note: "" },
    { item: "交通（八達通、機場快綫）", amount: 0, note: "" },
    { item: "餐飲", amount: 0, note: "" },
    { item: "門票 / 景點", amount: 0, note: "" },
    { item: "購物 / 其他", amount: 0, note: "" },
  ],
  currency: "TWD",

  checklist: [
    "護照（效期 6 個月以上）",
    "入境所需文件（出發前確認最新規定）",
    "港幣現金 / 信用卡",
    "八達通（或手機八達通）",
    "上網方案 / eSIM",
    "萬用轉接頭（英式三腳 BS 1363）",
    "行動電源",
    "雨具・薄外套（室內冷氣強）",
    "好走的鞋",
    "常備藥品",
    "旅遊保險",
  ],

  tips: [
    { title: "八達通", body: "港鐵、巴士、小輪、便利商店都能用；機場或港鐵站可購買與加值。" },
    { title: "港鐵", body: "搭手扶梯靠右站、左側通行；車廂內禁止飲食。" },
    { title: "天氣", body: "出發前查看香港天文台預報，夏季注意颱風與暴雨警告。" },
    { title: "插座", body: "英式三腳插座，電壓 220V。" },
    { title: "小費", body: "餐廳通常已加收一成服務費，一般不需另給小費。" },
  ],

  links: [
    { label: "香港天文台", url: "https://www.hko.gov.hk/" },
    { label: "港鐵 MTR", url: "https://www.mtr.com.hk/" },
    { label: "香港旅遊發展局", url: "https://www.discoverhongkong.com/" },
    { label: "八達通", url: "https://www.octopus.com.hk/" },
    { label: "香港國際機場", url: "https://www.hongkongairport.com/" },
  ],
};
