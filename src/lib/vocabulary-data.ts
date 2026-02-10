type Word = {
  id: number;
  word: string;
  chinese: string;
  pronunciation: string;
  example: string;
  exampleChinese: string;
  level: number;
  category: string;
};

// 三年级单词（基础词汇 - 30个）
export const grade3Words: Word[] = [
  {
    id: 301,
    word: 'Apple',
    chinese: '苹果',
    pronunciation: '/ˈæpl/',
    example: 'I like to eat apples.',
    exampleChinese: '我喜欢吃苹果。',
    level: 3,
    category: '水果'
  },
  {
    id: 302,
    word: 'Banana',
    chinese: '香蕉',
    pronunciation: '/bəˈnænə/',
    example: 'Monkeys love bananas.',
    exampleChinese: '猴子喜欢香蕉。',
    level: 3,
    category: '水果'
  },
  {
    id: 303,
    word: 'Cat',
    chinese: '猫',
    pronunciation: '/kæt/',
    example: 'The cat is sleeping.',
    exampleChinese: '猫在睡觉。',
    level: 3,
    category: '动物'
  },
  {
    id: 304,
    word: 'Dog',
    chinese: '狗',
    pronunciation: '/dɒɡ/',
    example: 'My dog is very friendly.',
    exampleChinese: '我的狗很友好。',
    level: 3,
    category: '动物'
  },
  {
    id: 305,
    word: 'Teacher',
    chinese: '老师',
    pronunciation: '/ˈtiːtʃər/',
    example: 'Our teacher is very kind.',
    exampleChinese: '我们的老师很和蔼。',
    level: 3,
    category: '人物'
  },
  {
    id: 306,
    word: 'Student',
    chinese: '学生',
    pronunciation: '/ˈstjuːdnt/',
    example: 'I am a student.',
    exampleChinese: '我是一个学生。',
    level: 3,
    category: '人物'
  },
  {
    id: 307,
    word: 'Book',
    chinese: '书',
    pronunciation: '/bʊk/',
    example: 'I read a book every day.',
    exampleChinese: '我每天读书。',
    level: 3,
    category: '物品'
  },
  {
    id: 308,
    word: 'Pencil',
    chinese: '铅笔',
    pronunciation: '/ˈpensl/',
    example: 'I write with a pencil.',
    exampleChinese: '我用铅笔写字。',
    level: 3,
    category: '物品'
  },
  {
    id: 309,
    word: 'School',
    chinese: '学校',
    pronunciation: '/skuːl/',
    example: 'I go to school by bus.',
    exampleChinese: '我坐公交车去上学。',
    level: 3,
    category: '场所'
  },
  {
    id: 310,
    word: 'Home',
    chinese: '家',
    pronunciation: '/həʊm/',
    example: 'I go home after school.',
    exampleChinese: '放学后我回家。',
    level: 3,
    category: '场所'
  },
  {
    id: 311,
    word: 'Water',
    chinese: '水',
    pronunciation: '/ˈwɔːtər/',
    example: 'I drink water every day.',
    exampleChinese: '我每天都喝水。',
    level: 3,
    category: '食物'
  },
  {
    id: 312,
    word: 'Milk',
    chinese: '牛奶',
    pronunciation: '/mɪlk/',
    example: 'I drink milk for breakfast.',
    exampleChinese: '我早餐喝牛奶。',
    level: 3,
    category: '食物'
  },
  {
    id: 313,
    word: 'Mother',
    chinese: '妈妈',
    pronunciation: '/ˈmʌðər/',
    example: 'My mother loves me.',
    exampleChinese: '我妈妈爱我。',
    level: 3,
    category: '家庭'
  },
  {
    id: 314,
    word: 'Father',
    chinese: '爸爸',
    pronunciation: '/ˈfɑːðər/',
    example: 'My father is tall.',
    exampleChinese: '我爸爸很高。',
    level: 3,
    category: '家庭'
  },
  {
    id: 315,
    word: 'Red',
    chinese: '红色',
    pronunciation: '/red/',
    example: 'The flower is red.',
    exampleChinese: '这朵花是红色的。',
    level: 3,
    category: '颜色'
  },
  {
    id: 316,
    word: 'Blue',
    chinese: '蓝色',
    pronunciation: '/bluː/',
    example: 'The sky is blue.',
    exampleChinese: '天空是蓝色的。',
    level: 3,
    category: '颜色'
  },
  {
    id: 317,
    word: 'Happy',
    chinese: '快乐',
    pronunciation: '/ˈhæpi/',
    example: 'I am very happy today.',
    exampleChinese: '我今天很开心。',
    level: 3,
    category: '情绪'
  },
  {
    id: 318,
    word: 'Sad',
    chinese: '悲伤',
    pronunciation: '/sæd/',
    example: 'He looks sad.',
    exampleChinese: '他看起来很伤心。',
    level: 3,
    category: '情绪'
  },
  {
    id: 319,
    word: 'Morning',
    chinese: '早上',
    pronunciation: '/ˈmɔːrnɪŋ/',
    example: 'Good morning!',
    exampleChinese: '早上好！',
    level: 3,
    category: '时间'
  },
  {
    id: 320,
    word: 'Night',
    chinese: '晚上',
    pronunciation: '/naɪt/',
    example: 'Good night!',
    exampleChinese: '晚安！',
    level: 3,
    category: '时间'
  },
  {
    id: 321,
    word: 'Elephant',
    chinese: '大象',
    pronunciation: '/ˈelɪfənt/',
    example: 'The elephant is big.',
    exampleChinese: '大象很大。',
    level: 3,
    category: '动物'
  },
  {
    id: 322,
    word: 'Bird',
    chinese: '鸟',
    pronunciation: '/bɜːrd/',
    example: 'The bird can fly.',
    exampleChinese: '鸟会飞。',
    level: 3,
    category: '动物'
  },
  {
    id: 323,
    word: 'Desk',
    chinese: '桌子',
    pronunciation: '/desk/',
    example: 'I sit at a desk.',
    exampleChinese: '我坐在桌子前。',
    level: 3,
    category: '物品'
  },
  {
    id: 324,
    word: 'Chair',
    chinese: '椅子',
    pronunciation: '/tʃeər/',
    example: 'Please sit on the chair.',
    exampleChinese: '请坐在椅子上。',
    level: 3,
    category: '物品'
  },
  {
    id: 325,
    word: 'Bag',
    chinese: '书包',
    pronunciation: '/bæɡ/',
    example: 'I carry a bag to school.',
    exampleChinese: '我背着书包去上学。',
    level: 3,
    category: '物品'
  },
  {
    id: 326,
    word: 'Foot',
    chinese: '脚',
    pronunciation: '/fʊt/',
    example: 'I have two feet.',
    exampleChinese: '我有两只脚。',
    level: 3,
    category: '身体'
  },
  {
    id: 327,
    word: 'Hand',
    chinese: '手',
    pronunciation: '/hænd/',
    example: 'Please show me your hand.',
    exampleChinese: '请给我看看你的手。',
    level: 3,
    category: '身体'
  },
  {
    id: 328,
    word: 'One',
    chinese: '一',
    pronunciation: '/wʌn/',
    example: 'I have one book.',
    exampleChinese: '我有一本书。',
    level: 3,
    category: '数字'
  },
  {
    id: 329,
    word: 'Two',
    chinese: '二',
    pronunciation: '/tuː/',
    example: 'I have two cats.',
    exampleChinese: '我有两只猫。',
    level: 3,
    category: '数字'
  },
  {
    id: 330,
    word: 'Three',
    chinese: '三',
    pronunciation: '/θriː/',
    example: 'There are three apples.',
    exampleChinese: '有三个苹果。',
    level: 3,
    category: '数字'
  },
];

// 四年级单词（进阶词汇 - 35个）
export const grade4Words: Word[] = [
  {
    id: 401,
    word: 'Butterfly',
    chinese: '蝴蝶',
    pronunciation: '/ˈbʌtəflaɪ/',
    example: 'A butterfly landed on the flower.',
    exampleChinese: '一只蝴蝶停在花朵上。',
    level: 4,
    category: '动物'
  },
  {
    id: 402,
    word: 'Library',
    chinese: '图书馆',
    pronunciation: '/ˈlaɪbreri/',
    example: 'We read books in the library.',
    exampleChinese: '我们在图书馆读书。',
    level: 4,
    category: '场所'
  },
  {
    id: 403,
    word: 'Rainbow',
    chinese: '彩虹',
    pronunciation: '/ˈreɪnbəʊ/',
    example: 'Look at the rainbow in the sky!',
    exampleChinese: '看天上的彩虹！',
    level: 4,
    category: '自然'
  },
  {
    id: 404,
    word: 'Vacation',
    chinese: '假期',
    pronunciation: '/veɪˈkeɪʃn/',
    example: 'We went on vacation last summer.',
    exampleChinese: '去年夏天我们去度假了。',
    level: 4,
    category: '时间'
  },
  {
    id: 405,
    word: 'Mountain',
    chinese: '山',
    pronunciation: '/ˈmaʊntɪn/',
    example: 'The mountains are beautiful.',
    exampleChinese: '山很美。',
    level: 4,
    category: '自然'
  },
  {
    id: 406,
    word: 'River',
    chinese: '河流',
    pronunciation: '/ˈrɪvər/',
    example: 'The river flows to the sea.',
    exampleChinese: '河流流向大海。',
    level: 4,
    category: '自然'
  },
  {
    id: 407,
    word: 'Doctor',
    chinese: '医生',
    pronunciation: '/ˈdɒktər/',
    example: 'The doctor helps sick people.',
    exampleChinese: '医生帮助病人。',
    level: 4,
    category: '职业'
  },
  {
    id: 408,
    word: 'Nurse',
    chinese: '护士',
    pronunciation: '/nɜːs/',
    example: 'The nurse takes care of patients.',
    exampleChinese: '护士照顾病人。',
    level: 4,
    category: '职业'
  },
  {
    id: 409,
    word: 'Police',
    chinese: '警察',
    pronunciation: '/pəˈliːs/',
    example: 'The police officer helps people.',
    exampleChinese: '警察帮助人们。',
    level: 4,
    category: '职业'
  },
  {
    id: 410,
    word: 'Garden',
    chinese: '花园',
    pronunciation: '/ˈɡɑːrdn/',
    example: 'There are many flowers in the garden.',
    exampleChinese: '花园里有很多花。',
    level: 4,
    category: '场所'
  },
  {
    id: 411,
    word: 'Kitchen',
    chinese: '厨房',
    pronunciation: '/ˈkɪtʃən/',
    example: 'My mother cooks in the kitchen.',
    exampleChinese: '我妈妈在厨房做饭。',
    level: 4,
    category: '场所'
  },
  {
    id: 412,
    word: 'Bedroom',
    chinese: '卧室',
    pronunciation: '/ˈbedruːm/',
    example: 'I sleep in my bedroom.',
    exampleChinese: '我在卧室睡觉。',
    level: 4,
    category: '场所'
  },
  {
    id: 413,
    word: 'Bathroom',
    chinese: '浴室',
    pronunciation: '/ˈbæθruːm/',
    example: 'I wash my face in the bathroom.',
    exampleChinese: '我在浴室洗脸。',
    level: 4,
    category: '场所'
  },
  {
    id: 414,
    word: 'Computer',
    chinese: '电脑',
    pronunciation: '/kəmˈpjuːtər/',
    example: 'I use a computer for homework.',
    exampleChinese: '我用电脑做作业。',
    level: 4,
    category: '物品'
  },
  {
    id: 415,
    word: 'Telephone',
    chinese: '电话',
    pronunciation: '/ˈtelɪfəʊn/',
    example: 'Please call me on the telephone.',
    exampleChinese: '请给我打电话。',
    level: 4,
    category: '物品'
  },
  {
    id: 416,
    word: 'Music',
    chinese: '音乐',
    pronunciation: '/ˈmjuːzɪk/',
    example: 'I like listening to music.',
    exampleChinese: '我喜欢听音乐。',
    level: 4,
    category: '爱好'
  },
  {
    id: 417,
    word: 'Dance',
    chinese: '跳舞',
    pronunciation: '/dæns/',
    example: 'Can you dance?',
    exampleChinese: '你会跳舞吗？',
    level: 4,
    category: '爱好'
  },
  {
    id: 418,
    word: 'Picture',
    chinese: '图片',
    pronunciation: '/ˈpɪktʃər/',
    example: 'I drew a picture of my family.',
    exampleChinese: '我画了一张全家福。',
    level: 4,
    category: '物品'
  },
  {
    id: 419,
    word: 'Story',
    chinese: '故事',
    pronunciation: '/ˈstɔːri/',
    example: 'My grandmother tells me stories.',
    exampleChinese: '我奶奶给我讲故事。',
    level: 4,
    category: '物品'
  },
  {
    id: 420,
    word: 'Breakfast',
    chinese: '早餐',
    pronunciation: '/ˈbrekfəst/',
    example: 'I eat breakfast at 7:00.',
    exampleChinese: '我7点吃早餐。',
    level: 4,
    category: '食物'
  },
  {
    id: 421,
    word: 'Lunch',
    chinese: '午餐',
    pronunciation: '/lʌntʃ/',
    example: 'We have lunch at school.',
    exampleChinese: '我们在学校吃午餐。',
    level: 4,
    category: '食物'
  },
  {
    id: 422,
    word: 'Dinner',
    chinese: '晚餐',
    pronunciation: '/ˈdɪnər/',
    example: 'What do you want for dinner?',
    exampleChinese: '晚餐你想吃什么？',
    level: 4,
    category: '食物'
  },
  {
    id: 423,
    word: 'Bread',
    chinese: '面包',
    pronunciation: '/bred/',
    example: 'I eat bread for breakfast.',
    exampleChinese: '我早餐吃面包。',
    level: 4,
    category: '食物'
  },
  {
    id: 424,
    word: 'Butter',
    chinese: '黄油',
    pronunciation: '/ˈbʌtər/',
    example: 'I put butter on my bread.',
    exampleChinese: '我在面包上涂黄油。',
    level: 4,
    category: '食物'
  },
  {
    id: 425,
    word: 'Cheese',
    chinese: '奶酪',
    pronunciation: '/tʃiːz/',
    example: 'I like cheese sandwiches.',
    exampleChinese: '我喜欢奶酪三明治。',
    level: 4,
    category: '食物'
  },
  {
    id: 426,
    word: 'Chicken',
    chinese: '鸡肉',
    pronunciation: '/ˈtʃɪkɪn/',
    example: 'We had chicken for dinner.',
    exampleChinese: '我们晚餐吃了鸡肉。',
    level: 4,
    category: '食物'
  },
  {
    id: 427,
    word: 'Vegetable',
    chinese: '蔬菜',
    pronunciation: '/ˈvedʒtəbl/',
    example: 'Vegetables are good for you.',
    exampleChinese: '蔬菜对你有好处。',
    level: 4,
    category: '食物'
  },
  {
    id: 428,
    word: 'Fruit',
    chinese: '水果',
    pronunciation: '/fruːt/',
    example: 'I eat fruit every day.',
    exampleChinese: '我每天都吃水果。',
    level: 4,
    category: '食物'
  },
  {
    id: 429,
    word: 'Yellow',
    chinese: '黄色',
    pronunciation: '/ˈjeləʊ/',
    example: 'The sun is yellow.',
    exampleChinese: '太阳是黄色的。',
    level: 4,
    category: '颜色'
  },
  {
    id: 430,
    word: 'Green',
    chinese: '绿色',
    pronunciation: '/ɡriːn/',
    example: 'The grass is green.',
    exampleChinese: '草是绿色的。',
    level: 4,
    category: '颜色'
  },
  {
    id: 431,
    word: 'Orange',
    chinese: '橙色',
    pronunciation: '/ˈɒrɪndʒ/',
    example: 'Oranges are orange.',
    exampleChinese: '橙子是橙色的。',
    level: 4,
    category: '颜色'
  },
  {
    id: 432,
    word: 'Purple',
    chinese: '紫色',
    pronunciation: '/ˈpɜːpl/',
    example: 'I like purple flowers.',
    exampleChinese: '我喜欢紫色的花。',
    level: 4,
    category: '颜色'
  },
  {
    id: 433,
    word: 'Winter',
    chinese: '冬天',
    pronunciation: '/ˈwɪntər/',
    example: 'It is cold in winter.',
    exampleChinese: '冬天很冷。',
    level: 4,
    category: '季节'
  },
  {
    id: 434,
    word: 'Summer',
    chinese: '夏天',
    pronunciation: '/ˈsʌmər/',
    example: 'I swim in summer.',
    exampleChinese: '夏天我游泳。',
    level: 4,
    category: '季节'
  },
  {
    id: 435,
    word: 'Spring',
    chinese: '春天',
    pronunciation: '/sprɪŋ/',
    example: 'Flowers bloom in spring.',
    exampleChinese: '春天花开。',
    level: 4,
    category: '季节'
  },
];

// 五年级单词（中级词汇 - 40个）
export const grade5Words: Word[] = [
  {
    id: 501,
    word: 'Hospital',
    chinese: '医院',
    pronunciation: '/ˈhɒspɪtl/',
    example: 'Doctors work at the hospital.',
    exampleChinese: '医生在医院工作。',
    level: 5,
    category: '场所'
  },
  {
    id: 502,
    word: 'Weather',
    chinese: '天气',
    pronunciation: '/ˈweðər/',
    example: 'The weather is sunny today.',
    exampleChinese: '今天天气晴朗。',
    level: 5,
    category: '自然'
  },
  {
    id: 503,
    word: 'Birthday',
    chinese: '生日',
    pronunciation: '/ˈbɜːθdeɪ/',
    example: 'Happy Birthday to you!',
    exampleChinese: '祝你生日快乐！',
    level: 5,
    category: '时间'
  },
  {
    id: 504,
    word: 'Journey',
    chinese: '旅程',
    pronunciation: '/ˈdʒɜːni/',
    example: 'We had a wonderful journey.',
    exampleChinese: '我们有一段美妙的旅程。',
    level: 5,
    category: '旅行'
  },
  {
    id: 505,
    word: 'Experience',
    chinese: '经历',
    pronunciation: '/ɪkˈspɪəriəns/',
    example: 'This is a new experience for me.',
    exampleChinese: '这对我来说是新的经历。',
    level: 5,
    category: '抽象'
  },
  {
    id: 506,
    word: 'Excited',
    chinese: '兴奋',
    pronunciation: '/ɪkˈsaɪtɪd/',
    example: 'I am excited about the trip.',
    exampleChinese: '我对这次旅行感到兴奋。',
    level: 5,
    category: '情绪'
  },
  {
    id: 507,
    word: 'Nervous',
    chinese: '紧张',
    pronunciation: '/ˈnɜːvəs/',
    example: 'I feel nervous before the test.',
    exampleChinese: '考试前我感到紧张。',
    level: 5,
    category: '情绪'
  },
  {
    id: 508,
    word: 'Confident',
    chinese: '自信',
    pronunciation: '/ˈkɒnfɪdənt/',
    example: 'I am confident I can do it.',
    exampleChinese: '我有信心我能做到。',
    level: 5,
    category: '情绪'
  },
  {
    id: 509,
    word: 'Beautiful',
    chinese: '美丽',
    pronunciation: '/ˈbjuːtɪfl/',
    example: 'The view is beautiful.',
    exampleChinese: '景色很美。',
    level: 5,
    category: '形容词'
  },
  {
    id: 510,
    word: 'Wonderful',
    chinese: '奇妙',
    pronunciation: '/ˈwʌndəfl/',
    example: 'We had a wonderful time.',
    exampleChinese: '我们度过了美好的时光。',
    level: 5,
    category: '形容词'
  },
  {
    id: 511,
    word: 'Interesting',
    chinese: '有趣',
    pronunciation: '/ˈɪntrəstɪŋ/',
    example: 'The story is very interesting.',
    exampleChinese: '这个故事很有趣。',
    level: 5,
    category: '形容词'
  },
  {
    id: 512,
    word: 'Difficult',
    chinese: '困难',
    pronunciation: '/ˈdɪfɪkəlt/',
    example: 'The math problem is difficult.',
    exampleChinese: '这道数学题很难。',
    level: 5,
    category: '形容词'
  },
  {
    id: 513,
    word: 'Impossible',
    chinese: '不可能',
    pronunciation: '/ɪmˈpɒsəbl/',
    example: 'Nothing is impossible.',
    exampleChinese: '没有什么是不可能的。',
    level: 5,
    category: '形容词'
  },
  {
    id: 514,
    word: 'Adventure',
    chinese: '冒险',
    pronunciation: '/ədˈventʃər/',
    example: 'We went on an adventure.',
    exampleChinese: '我们去冒险了。',
    level: 5,
    category: '活动'
  },
  {
    id: 515,
    word: 'Competition',
    chinese: '竞赛',
    pronunciation: '/ˌkɒmpəˈtɪʃn/',
    example: 'I won the competition.',
    exampleChinese: '我赢得了比赛。',
    level: 5,
    category: '活动'
  },
  {
    id: 516,
    word: 'Celebration',
    chinese: '庆祝',
    pronunciation: '/ˌselɪˈbreɪʃn/',
    example: 'We have a celebration for the holiday.',
    exampleChinese: '我们庆祝这个节日。',
    level: 5,
    category: '活动'
  },
  {
    id: 517,
    word: 'Traditional',
    chinese: '传统的',
    pronunciation: '/trəˈdɪʃənl/',
    example: 'This is a traditional dance.',
    exampleChinese: '这是一个传统舞蹈。',
    level: 5,
    category: '形容词'
  },
  {
    id: 518,
    word: 'International',
    chinese: '国际的',
    pronunciation: '/ˌɪntəˈnæʃənl/',
    example: 'It is an international airport.',
    exampleChinese: '这是一个国际机场。',
    level: 5,
    category: '形容词'
  },
  {
    id: 519,
    word: 'Environment',
    chinese: '环境',
    pronunciation: '/ɪnˈvaɪrənmənt/',
    example: 'We must protect the environment.',
    exampleChinese: '我们要保护环境。',
    level: 5,
    category: '自然'
  },
  {
    id: 520,
    word: 'Pollution',
    chinese: '污染',
    pronunciation: '/pəˈluːʃn/',
    example: 'Air pollution is a big problem.',
    exampleChinese: '空气污染是个大问题。',
    level: 5,
    category: '自然'
  },
  {
    id: 521,
    word: 'Recycle',
    chinese: '回收',
    pronunciation: '/ˌriːˈsaɪkl/',
    example: 'We should recycle paper and plastic.',
    exampleChinese: '我们应该回收纸张和塑料。',
    level: 5,
    category: '环保'
  },
  {
    id: 522,
    word: 'Protect',
    chinese: '保护',
    pronunciation: '/prəˈtekt/',
    example: 'We must protect animals.',
    exampleChinese: '我们要保护动物。',
    level: 5,
    category: '动作'
  },
  {
    id: 523,
    word: 'Suggest',
    chinese: '建议',
    pronunciation: '/səˈdʒest/',
    example: 'I suggest we go by bus.',
    exampleChinese: '我建议我们坐公交去。',
    level: 5,
    category: '动作'
  },
  {
    id: 524,
    word: 'Agree',
    chinese: '同意',
    pronunciation: '/əˈɡriː/',
    example: 'I agree with you.',
    exampleChinese: '我同意你的看法。',
    level: 5,
    category: '动作'
  },
  {
    id: 525,
    word: 'Disagree',
    chinese: '不同意',
    pronunciation: '/ˌdɪsəˈɡriː/',
    example: 'I disagree with his opinion.',
    exampleChinese: '我不同意他的观点。',
    level: 5,
    category: '动作'
  },
  {
    id: 526,
    word: 'Decision',
    chinese: '决定',
    pronunciation: '/dɪˈsɪʒn/',
    example: 'I made a decision.',
    exampleChinese: '我做了一个决定。',
    level: 5,
    category: '抽象'
  },
  {
    id: 527,
    word: 'Opportunity',
    chinese: '机会',
    pronunciation: '/ˌɒpəˈtjuːnəti/',
    example: 'Don\'t miss this opportunity.',
    exampleChinese: '不要错过这个机会。',
    level: 5,
    category: '抽象'
  },
  {
    id: 528,
    word: 'Challenge',
    chinese: '挑战',
    pronunciation: '/ˈtʃælɪndʒ/',
    example: 'I accept the challenge.',
    exampleChinese: '我接受这个挑战。',
    level: 5,
    category: '抽象'
  },
  {
    id: 529,
    word: 'Success',
    chinese: '成功',
    pronunciation: '/səkˈses/',
    example: 'Hard work leads to success.',
    exampleChinese: '努力带来成功。',
    level: 5,
    category: '抽象'
  },
  {
    id: 530,
    word: 'Failure',
    chinese: '失败',
    pronunciation: '/ˈfeɪljər/',
    example: 'Failure is the mother of success.',
    exampleChinese: '失败是成功之母。',
    level: 5,
    category: '抽象'
  },
  {
    id: 531,
    word: 'Develop',
    chinese: '发展',
    pronunciation: '/dɪˈveləp/',
    example: 'The city is developing fast.',
    exampleChinese: '城市发展很快。',
    level: 5,
    category: '动作'
  },
  {
    id: 532,
    word: 'Improve',
    chinese: '改善',
    pronunciation: '/ɪmˈpruːv/',
    example: 'I want to improve my English.',
    exampleChinese: '我想提高我的英语。',
    level: 5,
    category: '动作'
  },
  {
    id: 533,
    word: 'Achieve',
    chinese: '实现',
    pronunciation: '/əˈtʃiːv/',
    example: 'You can achieve your dreams.',
    exampleChinese: '你可以实现你的梦想。',
    level: 5,
    category: '动作'
  },
  {
    id: 534,
    word: 'Discover',
    chinese: '发现',
    pronunciation: '/dɪˈskʌvər/',
    example: 'Scientists discover new things.',
    exampleChinese: '科学家发现新事物。',
    level: 5,
    category: '动作'
  },
  {
    id: 535,
    word: 'Invent',
    chinese: '发明',
    pronunciation: '/ɪnˈvent/',
    example: 'Edison invented the light bulb.',
    exampleChinese: '爱迪生发明了电灯。',
    level: 5,
    category: '动作'
  },
  {
    id: 536,
    word: 'Technology',
    chinese: '技术',
    pronunciation: '/tekˈnɒlədʒi/',
    example: 'Technology changes our lives.',
    exampleChinese: '技术改变了我们的生活。',
    level: 5,
    category: '科技'
  },
  {
    id: 537,
    word: 'Internet',
    chinese: '互联网',
    pronunciation: '/ˈɪntərnet/',
    example: 'I use the internet every day.',
    exampleChinese: '我每天都用互联网。',
    level: 5,
    category: '科技'
  },
  {
    id: 538,
    word: 'Information',
    chinese: '信息',
    pronunciation: '/ˌɪnfəˈmeɪʃn/',
    example: 'I need more information.',
    exampleChinese: '我需要更多信息。',
    level: 5,
    category: '科技'
  },
  {
    id: 539,
    word: 'Communication',
    chinese: '交流',
    pronunciation: '/kəˌmjuːnɪˈkeɪʃn/',
    example: 'Communication is important.',
    exampleChinese: '交流很重要。',
    level: 5,
    category: '科技'
  },
  {
    id: 540,
    word: 'Imagination',
    chinese: '想象力',
    pronunciation: '/ɪˌmædʒɪˈneɪʃn/',
    example: 'Use your imagination.',
    exampleChinese: '发挥你的想象力。',
    level: 5,
    category: '抽象'
  },
];

// 六年级单词（高级词汇 - 40个）
export const grade6Words: Word[] = [
  {
    id: 601,
    word: 'Kangaroo',
    chinese: '袋鼠',
    pronunciation: '/ˌkæŋɡəˈruː/',
    example: 'Kangaroos live in Australia.',
    exampleChinese: '袋鼠生活在澳大利亚。',
    level: 6,
    category: '动物'
  },
  {
    id: 602,
    word: 'Dictionary',
    chinese: '字典',
    pronunciation: '/ˈdɪkʃəneri/',
    example: 'I use a dictionary to learn new words.',
    exampleChinese: '我用字典学习新单词。',
    level: 6,
    category: '物品'
  },
  {
    id: 603,
    word: 'Encyclopedia',
    chinese: '百科全书',
    pronunciation: '/ɪnˌsaɪkləˈpiːdiə/',
    example: 'I read the encyclopedia for information.',
    exampleChinese: '我读百科全书获取信息。',
    level: 6,
    category: '物品'
  },
  {
    id: 604,
    word: 'Literature',
    chinese: '文学',
    pronunciation: '/ˈlɪtrətʃər/',
    example: 'She studies English literature.',
    exampleChinese: '她学习英国文学。',
    level: 6,
    category: '学科'
  },
  {
    id: 605,
    word: 'Geography',
    chinese: '地理',
    pronunciation: '/dʒiˈɒɡrəfi/',
    example: 'Geography teaches us about the world.',
    exampleChinese: '地理课教我们了解世界。',
    level: 6,
    category: '学科'
  },
  {
    id: 606,
    word: 'History',
    chinese: '历史',
    pronunciation: '/ˈhɪstri/',
    example: 'History tells us about the past.',
    exampleChinese: '历史告诉我们过去的故事。',
    level: 6,
    category: '学科'
  },
  {
    id: 607,
    word: 'Physics',
    chinese: '物理',
    pronunciation: '/ˈfɪzɪks/',
    example: 'Physics is the study of matter and energy.',
    exampleChinese: '物理是研究物质和能量的学科。',
    level: 6,
    category: '学科'
  },
  {
    id: 608,
    word: 'Chemistry',
    chinese: '化学',
    pronunciation: '/ˈkemɪstri/',
    example: 'Chemistry experiments are fun.',
    exampleChinese: '化学实验很有趣。',
    level: 6,
    category: '学科'
  },
  {
    id: 609,
    word: 'Biology',
    chinese: '生物',
    pronunciation: '/baɪˈɒlədʒi/',
    example: 'Biology is the study of living things.',
    exampleChinese: '生物是研究生命的学科。',
    level: 6,
    category: '学科'
  },
  {
    id: 610,
    word: 'Mathematics',
    chinese: '数学',
    pronunciation: '/ˌmæθəˈmætɪks/',
    example: 'Mathematics is important for science.',
    exampleChinese: '数学对科学很重要。',
    level: 6,
    category: '学科'
  },
  {
    id: 611,
    word: 'Astronomy',
    chinese: '天文学',
    pronunciation: '/əˈstrɒnəmi/',
    example: 'Astronomy studies stars and planets.',
    exampleChinese: '天文学研究恒星和行星。',
    level: 6,
    category: '学科'
  },
  {
    id: 612,
    word: 'Psychology',
    chinese: '心理学',
    pronunciation: '/saɪˈkɒlədʒi/',
    example: 'Psychology helps understand human behavior.',
    exampleChinese: '心理学帮助理解人类行为。',
    level: 6,
    category: '学科'
  },
  {
    id: 613,
    word: 'Philosophy',
    chinese: '哲学',
    pronunciation: '/fɪˈlɒsəfi/',
    example: 'Philosophy asks deep questions about life.',
    exampleChinese: '哲学探讨生命的深刻问题。',
    level: 6,
    category: '学科'
  },
  {
    id: 614,
    word: 'Democracy',
    chinese: '民主',
    pronunciation: '/dɪˈmɒkrəsi/',
    example: 'Democracy gives people the right to vote.',
    exampleChinese: '民主给予人们投票的权利。',
    level: 6,
    category: '政治'
  },
  {
    id: 615,
    word: 'Republic',
    chinese: '共和国',
    pronunciation: '/rɪˈpʌblɪk/',
    example: 'China is a republic.',
    exampleChinese: '中国是一个共和国。',
    level: 6,
    category: '政治'
  },
  {
    id: 616,
    word: 'Economy',
    chinese: '经济',
    pronunciation: '/ɪˈkɒnəmi/',
    example: 'The economy is growing.',
    exampleChinese: '经济正在增长。',
    level: 6,
    category: '经济'
  },
  {
    id: 617,
    word: 'Currency',
    chinese: '货币',
    pronunciation: '/ˈkʌrənsi/',
    example: 'The currency of China is the yuan.',
    exampleChinese: '中国的货币是人民币。',
    level: 6,
    category: '经济'
  },
  {
    id: 618,
    word: 'Investment',
    chinese: '投资',
    pronunciation: '/ɪnˈvestmənt/',
    example: 'Good investment can make money.',
    exampleChinese: '好的投资可以赚钱。',
    level: 6,
    category: '经济'
  },
  {
    id: 619,
    word: 'Inflation',
    chinese: '通货膨胀',
    pronunciation: '/ɪnˈfleɪʃn/',
    example: 'Inflation makes things more expensive.',
    exampleChinese: '通货膨胀使东西更贵。',
    level: 6,
    category: '经济'
  },
  {
    id: 620,
    word: 'Distribution',
    chinese: '分配',
    pronunciation: '/ˌdɪstrɪˈbjuːʃn/',
    example: 'Fair distribution is important.',
    exampleChinese: '公平分配很重要。',
    level: 6,
    category: '经济'
  },
  {
    id: 621,
    word: 'Architecture',
    chinese: '建筑',
    pronunciation: '/ˈɑːkɪtektʃər/',
    example: 'The architecture of this building is amazing.',
    exampleChinese: '这座建筑的架构令人惊叹。',
    level: 6,
    category: '艺术'
  },
  {
    id: 622,
    word: 'Sculpture',
    chinese: '雕塑',
    pronunciation: '/ˈskʌlptʃər/',
    example: 'The sculpture is made of marble.',
    exampleChinese: '这座雕塑是用大理石做的。',
    level: 6,
    category: '艺术'
  },
  {
    id: 623,
    word: 'Painting',
    chinese: '绘画',
    pronunciation: '/ˈpeɪntɪŋ/',
    example: 'This painting is by a famous artist.',
    exampleChinese: '这幅画是著名艺术家的作品。',
    level: 6,
    category: '艺术'
  },
  {
    id: 624,
    word: 'Photography',
    chinese: '摄影',
    pronunciation: '/fəˈtɒɡrəfi/',
    example: 'Photography is my hobby.',
    exampleChinese: '摄影是我的爱好。',
    level: 6,
    category: '艺术'
  },
  {
    id: 625,
    word: 'Performance',
    chinese: '表演',
    pronunciation: '/pəˈfɔːməns/',
    example: 'The performance was wonderful.',
    exampleChinese: '表演非常精彩。',
    level: 6,
    category: '艺术'
  },
  {
    id: 626,
    word: 'Exhibition',
    chinese: '展览',
    pronunciation: '/ˌeksɪˈbɪʃn/',
    example: 'We visited an art exhibition.',
    exampleChinese: '我们参观了一个艺术展览。',
    level: 6,
    category: '艺术'
  },
  {
    id: 627,
    word: 'Creativity',
    chinese: '创造力',
    pronunciation: '/ˌkriːeɪˈtɪvəti/',
    example: 'Creativity is important in art.',
    exampleChinese: '创造力在艺术中很重要。',
    level: 6,
    category: '抽象'
  },
  {
    id: 628,
    word: 'Innovation',
    chinese: '创新',
    pronunciation: '/ˌɪnəˈveɪʃn/',
    example: 'Innovation drives progress.',
    exampleChinese: '创新推动进步。',
    level: 6,
    category: '抽象'
  },
  {
    id: 629,
    word: 'Transformation',
    chinese: '转变',
    pronunciation: '/ˌtrænsfəˈmeɪʃn/',
    example: 'The city underwent transformation.',
    exampleChinese: '城市发生了转变。',
    level: 6,
    category: '抽象'
  },
  {
    id: 630,
    word: 'Civilization',
    chinese: '文明',
    pronunciation: '/ˌsɪvəlaɪˈzeɪʃn/',
    example: 'Ancient civilization was advanced.',
    exampleChinese: '古代文明很先进。',
    level: 6,
    category: '历史'
  },
  {
    id: 631,
    word: 'Generation',
    chinese: '一代人',
    pronunciation: '/ˌdʒenəˈreɪʃn/',
    example: 'Our generation is different.',
    exampleChinese: '我们这一代很不一样。',
    level: 6,
    category: '时间'
  },
  {
    id: 632,
    word: 'Tradition',
    chinese: '传统',
    pronunciation: '/trəˈdɪʃn/',
    example: 'We should respect tradition.',
    exampleChinese: '我们要尊重传统。',
    level: 6,
    category: '文化'
  },
  {
    id: 633,
    word: 'Heritage',
    chinese: '遗产',
    pronunciation: '/ˈherɪtɪdʒ/',
    example: 'Cultural heritage is precious.',
    exampleChinese: '文化遗产是宝贵的。',
    level: 6,
    category: '文化'
  },
  {
    id: 634,
    word: 'Diversity',
    chinese: '多样性',
    pronunciation: '/daɪˈvɜːsəti/',
    example: 'Diversity makes the world interesting.',
    exampleChinese: '多样性让世界变得有趣。',
    level: 6,
    category: '社会'
  },
  {
    id: 635,
    word: 'Equality',
    chinese: '平等',
    pronunciation: '/iˈkwɒləti/',
    example: 'Everyone deserves equality.',
    exampleChinese: '每个人都值得平等对待。',
    level: 6,
    category: '社会'
  },
  {
    id: 636,
    word: 'Justice',
    chinese: '正义',
    pronunciation: '/ˈdʒʌstɪs/',
    example: 'Justice must be served.',
    exampleChinese: '必须伸张正义。',
    level: 6,
    category: '社会'
  },
  {
    id: 637,
    word: 'Responsibility',
    chinese: '责任',
    pronunciation: '/rɪˌspɒnsəˈbɪləti/',
    example: 'We have a responsibility to help others.',
    exampleChinese: '我们有帮助他人的责任。',
    level: 6,
    category: '社会'
  },
  {
    id: 638,
    word: 'Independence',
    chinese: '独立',
    pronunciation: '/ˌɪndɪˈpendəns/',
    example: 'Independence is important.',
    exampleChinese: '独立很重要。',
    level: 6,
    category: '社会'
  },
  {
    id: 639,
    word: 'Cooperation',
    chinese: '合作',
    pronunciation: '/kəʊˌɒpəˈreɪʃn/',
    example: 'Cooperation brings success.',
    exampleChinese: '合作带来成功。',
    level: 6,
    category: '社会'
  },
  {
    id: 640,
    word: 'Sustainability',
    chinese: '可持续性',
    pronunciation: '/səˌsteɪnəˈbɪləti/',
    example: 'Sustainability is key to our future.',
    exampleChinese: '可持续性是我们未来的关键。',
    level: 6,
    category: '环保'
  },
];

// 合并所有单词
export const allVocabulary: Word[] = [
  ...grade3Words,
  ...grade4Words,
  ...grade5Words,
  ...grade6Words,
];

// 获取指定年级的单词
export const getWordsByGrade = (grade: number): Word[] => {
  return allVocabulary.filter(word => word.level === grade);
};
