const apiKey = '498b874cb6a0e43b'
const apiDomain = 'http://www.5mell.test'
export default {
  appTitle:'5MELL',
  apiKey,
  api : {
    radom_list : apiDomain + '/api.php?c=app&a=herb_lists_random&'+apiKey,
    herb_result : apiDomain + '/api.php?c=app&a=herb_lists&'+apiKey,
    herb_show : apiDomain + '/api.php?c=app&a=herb_shows&'+apiKey
  },
  enum : {
    hot_cold: {
      "0": "未明",
      "6": "寒",
      "8": "凉",
      "10": "平",
      "12": "温",
      "14": "热"
    },
    toxicity: {
      "0": "-",
      "2": "微毒",
      "3": "小毒",
      "4": "有毒",
      "5": "大毒"
    },
    odor: {
      "1": "咸",
      "2": "苦",
      "3": "酸",
      "4": "辛",
      "5": "甘",
      "11": "淡",
      "13": "涩"
    }
  }
}
