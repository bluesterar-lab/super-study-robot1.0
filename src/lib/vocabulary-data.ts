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

// 三年级单词（基础词汇 - 80个）
export const grade3Words: Word[] = [
  // 水果（8个）
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
    word: 'Orange',
    chinese: '橙子',
    pronunciation: '/ˈɒrɪndʒ/',
    example: 'Oranges are orange.',
    exampleChinese: '橙子是橙色的。',
    level: 3,
    category: '水果'
  },
  {
    id: 304,
    word: 'Pear',
    chinese: '梨',
    pronunciation: '/peər/',
    example: 'This pear is sweet.',
    exampleChinese: '这个梨很甜。',
    level: 3,
    category: '水果'
  },
  {
    id: 305,
    word: 'Grape',
    chinese: '葡萄',
    pronunciation: '/ɡreɪp/',
    example: 'I like purple grapes.',
    exampleChinese: '我喜欢紫葡萄。',
    level: 3,
    category: '水果'
  },
  {
    id: 306,
    word: 'Watermelon',
    chinese: '西瓜',
    pronunciation: '/ˈwɔːtərmelən/',
    example: 'Watermelon is my favorite fruit.',
    exampleChinese: '西瓜是我最喜欢的水果。',
    level: 3,
    category: '水果'
  },
  {
    id: 307,
    word: 'Strawberry',
    chinese: '草莓',
    pronunciation: '/ˈstrɔːbəri/',
    example: 'Strawberries are red and sweet.',
    exampleChinese: '草莓又红又甜。',
    level: 3,
    category: '水果'
  },
  {
    id: 308,
    word: 'Peach',
    chinese: '桃子',
    pronunciation: '/piːtʃ/',
    example: 'I ate a peach this morning.',
    exampleChinese: '我今天早上吃了一个桃子。',
    level: 3,
    category: '水果'
  },
  
  // 动物（12个）
  {
    id: 309,
    word: 'Cat',
    chinese: '猫',
    pronunciation: '/kæt/',
    example: 'The cat is sleeping.',
    exampleChinese: '猫在睡觉。',
    level: 3,
    category: '动物'
  },
  {
    id: 310,
    word: 'Dog',
    chinese: '狗',
    pronunciation: '/dɒɡ/',
    example: 'My dog is very friendly.',
    exampleChinese: '我的狗很友好。',
    level: 3,
    category: '动物'
  },
  {
    id: 311,
    word: 'Bird',
    chinese: '鸟',
    pronunciation: '/bɜːrd/',
    example: 'The bird can fly.',
    exampleChinese: '鸟会飞。',
    level: 3,
    category: '动物'
  },
  {
    id: 312,
    word: 'Fish',
    chinese: '鱼',
    pronunciation: '/fɪʃ/',
    example: 'Fish swim in the water.',
    exampleChinese: '鱼在水里游泳。',
    level: 3,
    category: '动物'
  },
  {
    id: 313,
    word: 'Rabbit',
    chinese: '兔子',
    pronunciation: '/ˈræbɪt/',
    example: 'The rabbit has long ears.',
    exampleChinese: '兔子有长耳朵。',
    level: 3,
    category: '动物'
  },
  {
    id: 314,
    word: 'Horse',
    chinese: '马',
    pronunciation: '/hɔːrs/',
    example: 'The horse runs fast.',
    exampleChinese: '马跑得很快。',
    level: 3,
    category: '动物'
  },
  {
    id: 315,
    word: 'Cow',
    chinese: '奶牛',
    pronunciation: '/kaʊ/',
    example: 'Cows give us milk.',
    exampleChinese: '奶牛给我们牛奶。',
    level: 3,
    category: '动物'
  },
  {
    id: 316,
    word: 'Pig',
    chinese: '猪',
    pronunciation: '/pɪɡ/',
    example: 'The pig is pink.',
    exampleChinese: '猪是粉色的。',
    level: 3,
    category: '动物'
  },
  {
    id: 317,
    word: 'Sheep',
    chinese: '绵羊',
    pronunciation: '/ʃiːp/',
    example: 'Sheep eat grass.',
    exampleChinese: '绵羊吃草。',
    level: 3,
    category: '动物'
  },
  {
    id: 318,
    word: 'Duck',
    chinese: '鸭子',
    pronunciation: '/dʌk/',
    example: 'Ducks like water.',
    exampleChinese: '鸭子喜欢水。',
    level: 3,
    category: '动物'
  },
  {
    id: 319,
    word: 'Chicken',
    chinese: '鸡',
    pronunciation: '/ˈtʃɪkɪn/',
    example: 'Chickens lay eggs.',
    exampleChinese: '鸡会下蛋。',
    level: 3,
    category: '动物'
  },
  {
    id: 320,
    word: 'Elephant',
    chinese: '大象',
    pronunciation: '/ˈelɪfənt/',
    example: 'The elephant is big.',
    exampleChinese: '大象很大。',
    level: 3,
    category: '动物'
  },
  {
    id: 321,
    word: 'Lion',
    chinese: '狮子',
    pronunciation: '/ˈlaɪən/',
    example: 'The lion is the king of animals.',
    exampleChinese: '狮子是动物之王。',
    level: 3,
    category: '动物'
  },

  // 人物（8个）
  {
    id: 322,
    word: 'Teacher',
    chinese: '老师',
    pronunciation: '/ˈtiːtʃər/',
    example: 'Our teacher is very kind.',
    exampleChinese: '我们的老师很和蔼。',
    level: 3,
    category: '人物'
  },
  {
    id: 323,
    word: 'Student',
    chinese: '学生',
    pronunciation: '/ˈstjuːdnt/',
    example: 'I am a student.',
    exampleChinese: '我是一个学生。',
    level: 3,
    category: '人物'
  },
  {
    id: 324,
    word: 'Doctor',
    chinese: '医生',
    pronunciation: '/ˈdɒktər/',
    example: 'The doctor helps sick people.',
    exampleChinese: '医生帮助病人。',
    level: 3,
    category: '人物'
  },
  {
    id: 325,
    word: 'Nurse',
    chinese: '护士',
    pronunciation: '/nɜːs/',
    example: 'The nurse takes care of patients.',
    exampleChinese: '护士照顾病人。',
    level: 3,
    category: '人物'
  },
  {
    id: 326,
    word: 'Driver',
    chinese: '司机',
    pronunciation: '/ˈdraɪvər/',
    example: 'The bus driver drives carefully.',
    exampleChinese: '公交司机开车很小心。',
    level: 3,
    category: '人物'
  },
  {
    id: 327,
    word: 'Farmer',
    chinese: '农民',
    pronunciation: '/ˈfɑːrmər/',
    example: 'The farmer grows crops.',
    exampleChinese: '农民种植庄稼。',
    level: 3,
    category: '人物'
  },
  {
    id: 328,
    word: 'Policeman',
    chinese: '警察',
    pronunciation: '/pəˈliːsmən/',
    example: 'The policeman helps people.',
    exampleChinese: '警察帮助人们。',
    level: 3,
    category: '人物'
  },
  {
    id: 329,
    word: 'Cook',
    chinese: '厨师',
    pronunciation: '/kʊk/',
    example: 'The cook makes delicious food.',
    exampleChinese: '厨师做美味的食物。',
    level: 3,
    category: '人物'
  },

  // 家庭（6个）
  {
    id: 330,
    word: 'Mother',
    chinese: '妈妈',
    pronunciation: '/ˈmʌðər/',
    example: 'My mother loves me.',
    exampleChinese: '我妈妈爱我。',
    level: 3,
    category: '家庭'
  },
  {
    id: 331,
    word: 'Father',
    chinese: '爸爸',
    pronunciation: '/ˈfɑːðər/',
    example: 'My father is tall.',
    exampleChinese: '我爸爸很高。',
    level: 3,
    category: '家庭'
  },
  {
    id: 332,
    word: 'Sister',
    chinese: '姐姐/妹妹',
    pronunciation: '/ˈsɪstər/',
    example: 'My sister is smart.',
    exampleChinese: '我的姐姐很聪明。',
    level: 3,
    category: '家庭'
  },
  {
    id: 333,
    word: 'Brother',
    chinese: '哥哥/弟弟',
    pronunciation: '/ˈbrʌðər/',
    example: 'My brother plays football.',
    exampleChinese: '我的哥哥踢足球。',
    level: 3,
    category: '家庭'
  },
  {
    id: 334,
    word: 'Grandmother',
    chinese: '奶奶/外婆',
    pronunciation: '/ˈɡrænmʌðər/',
    example: 'My grandmother tells stories.',
    exampleChinese: '我奶奶讲故事。',
    level: 3,
    category: '家庭'
  },
  {
    id: 335,
    word: 'Grandfather',
    chinese: '爷爷/外公',
    pronunciation: '/ˈɡrændfɑːðər/',
    example: 'My grandfather is old.',
    exampleChinese: '我爷爷年纪大了。',
    level: 3,
    category: '家庭'
  },

  // 身体（8个）
  {
    id: 336,
    word: 'Face',
    chinese: '脸',
    pronunciation: '/feɪs/',
    example: 'She has a happy face.',
    exampleChinese: '她有一张快乐的脸。',
    level: 3,
    category: '身体'
  },
  {
    id: 337,
    word: 'Eye',
    chinese: '眼睛',
    pronunciation: '/aɪ/',
    example: 'I have two eyes.',
    exampleChinese: '我有两只眼睛。',
    level: 3,
    category: '身体'
  },
  {
    id: 338,
    word: 'Ear',
    chinese: '耳朵',
    pronunciation: '/ɪr/',
    example: 'Rabbits have long ears.',
    exampleChinese: '兔子有长耳朵。',
    level: 3,
    category: '身体'
  },
  {
    id: 339,
    word: 'Nose',
    chinese: '鼻子',
    pronunciation: '/nəʊz/',
    example: 'The dog has a good nose.',
    exampleChinese: '狗的鼻子很好。',
    level: 3,
    category: '身体'
  },
  {
    id: 340,
    word: 'Mouth',
    chinese: '嘴巴',
    pronunciation: '/maʊθ/',
    example: 'Open your mouth.',
    exampleChinese: '张开嘴。',
    level: 3,
    category: '身体'
  },
  {
    id: 341,
    word: 'Hand',
    chinese: '手',
    pronunciation: '/hænd/',
    example: 'Wash your hands.',
    exampleChinese: '洗手。',
    level: 3,
    category: '身体'
  },
  {
    id: 342,
    word: 'Foot',
    chinese: '脚',
    pronunciation: '/fʊt/',
    example: 'I have two feet.',
    exampleChinese: '我有两只脚。',
    level: 3,
    category: '身体'
  },
  {
    id: 343,
    word: 'Head',
    chinese: '头',
    pronunciation: '/hed/',
    example: 'Touch your head.',
    exampleChinese: '摸摸你的头。',
    level: 3,
    category: '身体'
  },

  // 颜色（6个）
  {
    id: 344,
    word: 'Red',
    chinese: '红色',
    pronunciation: '/red/',
    example: 'The flower is red.',
    exampleChinese: '这朵花是红色的。',
    level: 3,
    category: '颜色'
  },
  {
    id: 345,
    word: 'Blue',
    chinese: '蓝色',
    pronunciation: '/bluː/',
    example: 'The sky is blue.',
    exampleChinese: '天空是蓝色的。',
    level: 3,
    category: '颜色'
  },
  {
    id: 346,
    word: 'Yellow',
    chinese: '黄色',
    pronunciation: '/ˈjeləʊ/',
    example: 'The sun is yellow.',
    exampleChinese: '太阳是黄色的。',
    level: 3,
    category: '颜色'
  },
  {
    id: 347,
    word: 'Green',
    chinese: '绿色',
    pronunciation: '/ɡriːn/',
    example: 'The grass is green.',
    exampleChinese: '草是绿色的。',
    level: 3,
    category: '颜色'
  },
  {
    id: 348,
    word: 'Black',
    chinese: '黑色',
    pronunciation: '/blæk/',
    example: 'The cat is black.',
    exampleChinese: '这只猫是黑色的。',
    level: 3,
    category: '颜色'
  },
  {
    id: 349,
    word: 'White',
    chinese: '白色',
    pronunciation: '/waɪt/',
    example: 'The cloud is white.',
    exampleChinese: '云是白色的。',
    level: 3,
    category: '颜色'
  },

  // 数字（8个）
  {
    id: 350,
    word: 'One',
    chinese: '一',
    pronunciation: '/wʌn/',
    example: 'I have one book.',
    exampleChinese: '我有一本书。',
    level: 3,
    category: '数字'
  },
  {
    id: 351,
    word: 'Two',
    chinese: '二',
    pronunciation: '/tuː/',
    example: 'I have two cats.',
    exampleChinese: '我有两只猫。',
    level: 3,
    category: '数字'
  },
  {
    id: 352,
    word: 'Three',
    chinese: '三',
    pronunciation: '/θriː/',
    example: 'There are three apples.',
    exampleChinese: '有三个苹果。',
    level: 3,
    category: '数字'
  },
  {
    id: 353,
    word: 'Four',
    chinese: '四',
    pronunciation: '/fɔːr/',
    example: 'I have four pencils.',
    exampleChinese: '我有四支铅笔。',
    level: 3,
    category: '数字'
  },
  {
    id: 354,
    word: 'Five',
    chinese: '五',
    pronunciation: '/faɪv/',
    example: 'Show me five fingers.',
    exampleChinese: '给我看五个手指。',
    level: 3,
    category: '数字'
  },
  {
    id: 355,
    word: 'Six',
    chinese: '六',
    pronunciation: '/sɪks/',
    example: 'My sister is six years old.',
    exampleChinese: '我妹妹六岁了。',
    level: 3,
    category: '数字'
  },
  {
    id: 356,
    word: 'Seven',
    chinese: '七',
    pronunciation: '/ˈsevn/',
    example: 'There are seven days in a week.',
    exampleChinese: '一周有七天。',
    level: 3,
    category: '数字'
  },
  {
    id: 357,
    word: 'Eight',
    chinese: '八',
    pronunciation: '/eɪt/',
    example: 'The class starts at eight.',
    exampleChinese: '八点开始上课。',
    level: 3,
    category: '数字'
  },

  // 时间（6个）
  {
    id: 358,
    word: 'Morning',
    chinese: '早上',
    pronunciation: '/ˈmɔːrnɪŋ/',
    example: 'Good morning!',
    exampleChinese: '早上好！',
    level: 3,
    category: '时间'
  },
  {
    id: 359,
    word: 'Afternoon',
    chinese: '下午',
    pronunciation: '/ˌæftərˈnuːn/',
    example: 'Good afternoon!',
    exampleChinese: '下午好！',
    level: 3,
    category: '时间'
  },
  {
    id: 360,
    word: 'Evening',
    chinese: '晚上',
    pronunciation: '/ˈiːvnɪŋ/',
    example: 'Good evening!',
    exampleChinese: '晚上好！',
    level: 3,
    category: '时间'
  },
  {
    id: 361,
    word: 'Night',
    chinese: '夜晚',
    pronunciation: '/naɪt/',
    example: 'Good night!',
    exampleChinese: '晚安！',
    level: 3,
    category: '时间'
  },
  {
    id: 362,
    word: 'Day',
    chinese: '天',
    pronunciation: '/deɪ/',
    example: 'Today is a sunny day.',
    exampleChinese: '今天是晴天。',
    level: 3,
    category: '时间'
  },
  {
    id: 363,
    word: 'Week',
    chinese: '周',
    pronunciation: '/wiːk/',
    example: 'I go to school every week.',
    exampleChinese: '我每周都去上学。',
    level: 3,
    category: '时间'
  },

  // 物品（6个）
  {
    id: 364,
    word: 'Book',
    chinese: '书',
    pronunciation: '/bʊk/',
    example: 'I read a book every day.',
    exampleChinese: '我每天读书。',
    level: 3,
    category: '物品'
  },
  {
    id: 365,
    word: 'Pencil',
    chinese: '铅笔',
    pronunciation: '/ˈpensl/',
    example: 'I write with a pencil.',
    exampleChinese: '我用铅笔写字。',
    level: 3,
    category: '物品'
  },
  {
    id: 366,
    word: 'Pen',
    chinese: '钢笔',
    pronunciation: '/pen/',
    example: 'This pen is blue.',
    exampleChinese: '这支钢笔是蓝色的。',
    level: 3,
    category: '物品'
  },
  {
    id: 367,
    word: 'Bag',
    chinese: '书包',
    pronunciation: '/bæɡ/',
    example: 'I carry a bag to school.',
    exampleChinese: '我背着书包去上学。',
    level: 3,
    category: '物品'
  },
  {
    id: 368,
    word: 'Desk',
    chinese: '桌子',
    pronunciation: '/desk/',
    example: 'I sit at a desk.',
    exampleChinese: '我坐在桌子前。',
    level: 3,
    category: '物品'
  },
  {
    id: 369,
    word: 'Chair',
    chinese: '椅子',
    pronunciation: '/tʃeər/',
    example: 'Please sit on the chair.',
    exampleChinese: '请坐在椅子上。',
    level: 3,
    category: '物品'
  },

  // 场所（6个）
  {
    id: 370,
    word: 'School',
    chinese: '学校',
    pronunciation: '/skuːl/',
    example: 'I go to school by bus.',
    exampleChinese: '我坐公交车去上学。',
    level: 3,
    category: '场所'
  },
  {
    id: 371,
    word: 'Home',
    chinese: '家',
    pronunciation: '/həʊm/',
    example: 'I go home after school.',
    exampleChinese: '放学后我回家。',
    level: 3,
    category: '场所'
  },
  {
    id: 372,
    word: 'Room',
    chinese: '房间',
    pronunciation: '/ruːm/',
    example: 'This is my room.',
    exampleChinese: '这是我的房间。',
    level: 3,
    category: '场所'
  },
  {
    id: 373,
    word: 'Park',
    chinese: '公园',
    pronunciation: '/pɑːrk/',
    example: 'We play in the park.',
    exampleChinese: '我们在公园玩。',
    level: 3,
    category: '场所'
  },
  {
    id: 374,
    word: 'Zoo',
    chinese: '动物园',
    pronunciation: '/zuː/',
    example: 'We saw animals at the zoo.',
    exampleChinese: '我们在动物园看了动物。',
    level: 3,
    category: '场所'
  },
  {
    id: 375,
    word: 'Farm',
    chinese: '农场',
    pronunciation: '/fɑːrm/',
    example: 'We visited a farm.',
    exampleChinese: '我们参观了一个农场。',
    level: 3,
    category: '场所'
  },

  // 食物（6个）
  {
    id: 376,
    word: 'Water',
    chinese: '水',
    pronunciation: '/ˈwɔːtər/',
    example: 'I drink water every day.',
    exampleChinese: '我每天都喝水。',
    level: 3,
    category: '食物'
  },
  {
    id: 377,
    word: 'Milk',
    chinese: '牛奶',
    pronunciation: '/mɪlk/',
    example: 'I drink milk for breakfast.',
    exampleChinese: '我早餐喝牛奶。',
    level: 3,
    category: '食物'
  },
  {
    id: 378,
    word: 'Bread',
    chinese: '面包',
    pronunciation: '/bred/',
    example: 'I eat bread for breakfast.',
    exampleChinese: '我早餐吃面包。',
    level: 3,
    category: '食物'
  },
  {
    id: 379,
    word: 'Rice',
    chinese: '米饭',
    pronunciation: '/raɪs/',
    example: 'I like eating rice.',
    exampleChinese: '我喜欢吃米饭。',
    level: 3,
    category: '食物'
  },
  {
    id: 380,
    word: 'Egg',
    chinese: '鸡蛋',
    pronunciation: '/eɡ/',
    example: 'I eat an egg for breakfast.',
    exampleChinese: '我早餐吃一个鸡蛋。',
    level: 3,
    category: '食物'
  },
  {
    id: 381,
    word: 'Cake',
    chinese: '蛋糕',
    pronunciation: '/keɪk/',
    example: 'The cake is sweet.',
    exampleChinese: '蛋糕是甜的。',
    level: 3,
    category: '食物'
  },

  // 形容词（4个）
  {
    id: 382,
    word: 'Happy',
    chinese: '快乐',
    pronunciation: '/ˈhæpi/',
    example: 'I am very happy today.',
    exampleChinese: '我今天很开心。',
    level: 3,
    category: '形容词'
  },
  {
    id: 383,
    word: 'Sad',
    chinese: '悲伤',
    pronunciation: '/sæd/',
    example: 'He looks sad.',
    exampleChinese: '他看起来很伤心。',
    level: 3,
    category: '形容词'
  },
  {
    id: 384,
    word: 'Big',
    chinese: '大',
    pronunciation: '/bɪɡ/',
    example: 'The elephant is big.',
    exampleChinese: '大象很大。',
    level: 3,
    category: '形容词'
  },
  {
    id: 385,
    word: 'Small',
    chinese: '小',
    pronunciation: '/smɔːl/',
    example: 'The bird is small.',
    exampleChinese: '鸟很小。',
    level: 3,
    category: '形容词'
  },
];

// 四年级单词（进阶词汇 - 90个）
export const grade4Words: Word[] = [
  // 自然（10个）
  {
    id: 401,
    word: 'Butterfly',
    chinese: '蝴蝶',
    pronunciation: '/ˈbʌtəflaɪ/',
    example: 'A butterfly landed on the flower.',
    exampleChinese: '一只蝴蝶停在花朵上。',
    level: 4,
    category: '自然'
  },
  {
    id: 402,
    word: 'Rainbow',
    chinese: '彩虹',
    pronunciation: '/ˈreɪnbəʊ/',
    example: 'Look at the rainbow in the sky!',
    exampleChinese: '看天上的彩虹！',
    level: 4,
    category: '自然'
  },
  {
    id: 403,
    word: 'Mountain',
    chinese: '山',
    pronunciation: '/ˈmaʊntɪn/',
    example: 'The mountains are beautiful.',
    exampleChinese: '山很美。',
    level: 4,
    category: '自然'
  },
  {
    id: 404,
    word: 'River',
    chinese: '河流',
    pronunciation: '/ˈrɪvər/',
    example: 'The river flows to the sea.',
    exampleChinese: '河流流向大海。',
    level: 4,
    category: '自然'
  },
  {
    id: 405,
    word: 'Tree',
    chinese: '树',
    pronunciation: '/triː/',
    example: 'There are many trees in the park.',
    exampleChinese: '公园里有很多树。',
    level: 4,
    category: '自然'
  },
  {
    id: 406,
    word: 'Flower',
    chinese: '花朵',
    pronunciation: '/ˈflaʊər/',
    example: 'The flower is beautiful.',
    exampleChinese: '花很美。',
    level: 4,
    category: '自然'
  },
  {
    id: 407,
    word: 'Grass',
    chinese: '草地',
    pronunciation: '/ɡræs/',
    example: 'The grass is green.',
    exampleChinese: '草是绿色的。',
    level: 4,
    category: '自然'
  },
  {
    id: 408,
    word: 'Cloud',
    chinese: '云',
    pronunciation: '/klaʊd/',
    example: 'White clouds float in the sky.',
    exampleChinese: '白云在天空中漂浮。',
    level: 4,
    category: '自然'
  },
  {
    id: 409,
    word: 'Sun',
    chinese: '太阳',
    pronunciation: '/sʌn/',
    example: 'The sun gives us light.',
    exampleChinese: '太阳给我们光。',
    level: 4,
    category: '自然'
  },
  {
    id: 410,
    word: 'Moon',
    chinese: '月亮',
    pronunciation: '/muːn/',
    example: 'The moon is bright tonight.',
    exampleChinese: '今晚的月亮很亮。',
    level: 4,
    category: '自然'
  },

  // 场所（12个）
  {
    id: 411,
    word: 'Library',
    chinese: '图书馆',
    pronunciation: '/ˈlaɪbreri/',
    example: 'We read books in the library.',
    exampleChinese: '我们在图书馆读书。',
    level: 4,
    category: '场所'
  },
  {
    id: 412,
    word: 'Garden',
    chinese: '花园',
    pronunciation: '/ˈɡɑːrdn/',
    example: 'There are many flowers in the garden.',
    exampleChinese: '花园里有很多花。',
    level: 4,
    category: '场所'
  },
  {
    id: 413,
    word: 'Kitchen',
    chinese: '厨房',
    pronunciation: '/ˈkɪtʃən/',
    example: 'My mother cooks in the kitchen.',
    exampleChinese: '我妈妈在厨房做饭。',
    level: 4,
    category: '场所'
  },
  {
    id: 414,
    word: 'Bedroom',
    chinese: '卧室',
    pronunciation: '/ˈbedruːm/',
    example: 'I sleep in my bedroom.',
    exampleChinese: '我在卧室睡觉。',
    level: 4,
    category: '场所'
  },
  {
    id: 415,
    word: 'Bathroom',
    chinese: '浴室',
    pronunciation: '/ˈbæθruːm/',
    example: 'I wash my face in the bathroom.',
    exampleChinese: '我在浴室洗脸。',
    level: 4,
    category: '场所'
  },
  {
    id: 416,
    word: 'Classroom',
    chinese: '教室',
    pronunciation: '/ˈklæsruːm/',
    example: 'We study in the classroom.',
    exampleChinese: '我们在教室学习。',
    level: 4,
    category: '场所'
  },
  {
    id: 417,
    word: 'Playground',
    chinese: '操场',
    pronunciation: '/ˈpleɪɡraʊnd/',
    example: 'We play on the playground.',
    exampleChinese: '我们在操场玩。',
    level: 4,
    category: '场所'
  },
  {
    id: 418,
    word: 'Shop',
    chinese: '商店',
    pronunciation: '/ʃɒp/',
    example: 'I bought a book at the shop.',
    exampleChinese: '我在商店买了一本书。',
    level: 4,
    category: '场所'
  },
  {
    id: 419,
    word: 'Bank',
    chinese: '银行',
    pronunciation: '/bæŋk/',
    example: 'My father works at the bank.',
    exampleChinese: '我爸爸在银行工作。',
    level: 4,
    category: '场所'
  },
  {
    id: 420,
    word: 'Hospital',
    chinese: '医院',
    pronunciation: '/ˈhɒspɪtl/',
    example: 'Doctors work at the hospital.',
    exampleChinese: '医生在医院工作。',
    level: 4,
    category: '场所'
  },
  {
    id: 421,
    word: 'Post Office',
    chinese: '邮局',
    pronunciation: '/pəʊst ˈɒfɪs/',
    example: 'I went to the post office.',
    exampleChinese: '我去了邮局。',
    level: 4,
    category: '场所'
  },
  {
    id: 422,
    word: 'Restaurant',
    chinese: '餐厅',
    pronunciation: '/ˈrestrɒnt/',
    example: 'We eat at the restaurant.',
    exampleChinese: '我们在餐厅吃饭。',
    level: 4,
    category: '场所'
  },

  // 职业（8个）
  {
    id: 423,
    word: 'Doctor',
    chinese: '医生',
    pronunciation: '/ˈdɒktər/',
    example: 'The doctor helps sick people.',
    exampleChinese: '医生帮助病人。',
    level: 4,
    category: '职业'
  },
  {
    id: 424,
    word: 'Nurse',
    chinese: '护士',
    pronunciation: '/nɜːs/',
    example: 'The nurse takes care of patients.',
    exampleChinese: '护士照顾病人。',
    level: 4,
    category: '职业'
  },
  {
    id: 425,
    word: 'Police',
    chinese: '警察',
    pronunciation: '/pəˈliːs/',
    example: 'The police officer helps people.',
    exampleChinese: '警察帮助人们。',
    level: 4,
    category: '职业'
  },
  {
    id: 426,
    word: 'Teacher',
    chinese: '老师',
    pronunciation: '/ˈtiːtʃər/',
    example: 'Our teacher is very kind.',
    exampleChinese: '我们的老师很和蔼。',
    level: 4,
    category: '职业'
  },
  {
    id: 427,
    word: 'Worker',
    chinese: '工人',
    pronunciation: '/ˈwɜːrkər/',
    example: 'The worker builds houses.',
    exampleChinese: '工人建造房子。',
    level: 4,
    category: '职业'
  },
  {
    id: 428,
    word: 'Singer',
    chinese: '歌手',
    pronunciation: '/ˈsɪŋər/',
    example: 'The singer has a beautiful voice.',
    exampleChinese: '歌手有美丽的声音。',
    level: 4,
    category: '职业'
  },
  {
    id: 429,
    word: 'Dancer',
    chinese: '舞者',
    pronunciation: '/ˈdænsər/',
    example: 'The dancer moves beautifully.',
    exampleChinese: '舞者跳得很美。',
    level: 4,
    category: '职业'
  },
  {
    id: 430,
    word: 'Artist',
    chinese: '艺术家',
    pronunciation: '/ˈɑːrtɪst/',
    example: 'The artist paints pictures.',
    exampleChinese: '艺术家画画。',
    level: 4,
    category: '职业'
  },

  // 物品（12个）
  {
    id: 431,
    word: 'Computer',
    chinese: '电脑',
    pronunciation: '/kəmˈpjuːtər/',
    example: 'I use a computer for homework.',
    exampleChinese: '我用电脑做作业。',
    level: 4,
    category: '物品'
  },
  {
    id: 432,
    word: 'Telephone',
    chinese: '电话',
    pronunciation: '/ˈtelɪfəʊn/',
    example: 'Please call me on the telephone.',
    exampleChinese: '请给我打电话。',
    level: 4,
    category: '物品'
  },
  {
    id: 433,
    word: 'Picture',
    chinese: '图片',
    pronunciation: '/ˈpɪktʃər/',
    example: 'I drew a picture of my family.',
    exampleChinese: '我画了一张全家福。',
    level: 4,
    category: '物品'
  },
  {
    id: 434,
    word: 'Story',
    chinese: '故事',
    pronunciation: '/ˈstɔːri/',
    example: 'My grandmother tells me stories.',
    exampleChinese: '我奶奶给我讲故事。',
    level: 4,
    category: '物品'
  },
  {
    id: 435,
    word: 'Camera',
    chinese: '相机',
    pronunciation: '/ˈkæmrə/',
    example: 'I take photos with my camera.',
    exampleChinese: '我用相机拍照。',
    level: 4,
    category: '物品'
  },
  {
    id: 436,
    word: 'Watch',
    chinese: '手表',
    pronunciation: '/wɒtʃ/',
    example: 'My watch shows the time.',
    exampleChinese: '我的手表显示时间。',
    level: 4,
    category: '物品'
  },
  {
    id: 437,
    word: 'Glasses',
    chinese: '眼镜',
    pronunciation: '/ˈɡlæsɪz/',
    example: 'I wear glasses to see better.',
    exampleChinese: '我戴眼镜看得更清楚。',
    level: 4,
    category: '物品'
  },
  {
    id: 438,
    word: 'Shoes',
    chinese: '鞋子',
    pronunciation: '/ʃuːz/',
    example: 'I wear shoes to school.',
    exampleChinese: '我穿鞋子去上学。',
    level: 4,
    category: '物品'
  },
  {
    id: 439,
    word: 'Clothes',
    chinese: '衣服',
    pronunciation: '/kləʊðz/',
    example: 'I buy new clothes.',
    exampleChinese: '我买新衣服。',
    level: 4,
    category: '物品'
  },
  {
    id: 440,
    word: 'Hat',
    chinese: '帽子',
    pronunciation: '/hæt/',
    example: 'I wear a hat in summer.',
    exampleChinese: '我夏天戴帽子。',
    level: 4,
    category: '物品'
  },
  {
    id: 441,
    word: 'Map',
    chinese: '地图',
    pronunciation: '/mæp/',
    example: 'I use a map to find the way.',
    exampleChinese: '我用地图找路。',
    level: 4,
    category: '物品'
  },
  {
    id: 442,
    word: 'Money',
    chinese: '钱',
    pronunciation: '/ˈmʌni/',
    example: 'I save money in the bank.',
    exampleChinese: '我在银行存钱。',
    level: 4,
    category: '物品'
  },

  // 食物（12个）
  {
    id: 443,
    word: 'Breakfast',
    chinese: '早餐',
    pronunciation: '/ˈbrekfəst/',
    example: 'I eat breakfast at 7:00.',
    exampleChinese: '我7点吃早餐。',
    level: 4,
    category: '食物'
  },
  {
    id: 444,
    word: 'Lunch',
    chinese: '午餐',
    pronunciation: '/lʌntʃ/',
    example: 'We have lunch at school.',
    exampleChinese: '我们在学校吃午餐。',
    level: 4,
    category: '食物'
  },
  {
    id: 445,
    word: 'Dinner',
    chinese: '晚餐',
    pronunciation: '/ˈdɪnər/',
    example: 'What do you want for dinner?',
    exampleChinese: '晚餐你想吃什么？',
    level: 4,
    category: '食物'
  },
  {
    id: 446,
    word: 'Butter',
    chinese: '黄油',
    pronunciation: '/ˈbʌtər/',
    example: 'I put butter on my bread.',
    exampleChinese: '我在面包上涂黄油。',
    level: 4,
    category: '食物'
  },
  {
    id: 447,
    word: 'Cheese',
    chinese: '奶酪',
    pronunciation: '/tʃiːz/',
    example: 'I like cheese sandwiches.',
    exampleChinese: '我喜欢奶酪三明治。',
    level: 4,
    category: '食物'
  },
  {
    id: 448,
    word: 'Chicken',
    chinese: '鸡肉',
    pronunciation: '/ˈtʃɪkɪn/',
    example: 'We had chicken for dinner.',
    exampleChinese: '我们晚餐吃了鸡肉。',
    level: 4,
    category: '食物'
  },
  {
    id: 449,
    word: 'Vegetable',
    chinese: '蔬菜',
    pronunciation: '/ˈvedʒtəbl/',
    example: 'Vegetables are good for you.',
    exampleChinese: '蔬菜对你有好处。',
    level: 4,
    category: '食物'
  },
  {
    id: 450,
    word: 'Fruit',
    chinese: '水果',
    pronunciation: '/fruːt/',
    example: 'I eat fruit every day.',
    exampleChinese: '我每天都吃水果。',
    level: 4,
    category: '食物'
  },
  {
    id: 451,
    word: 'Soup',
    chinese: '汤',
    pronunciation: '/suːp/',
    example: 'The soup is hot.',
    exampleChinese: '汤很热。',
    level: 4,
    category: '食物'
  },
  {
    id: 452,
    word: 'Sandwich',
    chinese: '三明治',
    pronunciation: '/ˈsænwɪdʒ/',
    example: 'I eat a sandwich for lunch.',
    exampleChinese: '我午餐吃三明治。',
    level: 4,
    category: '食物'
  },
  {
    id: 453,
    word: 'Biscuit',
    chinese: '饼干',
    pronunciation: '/ˈbɪskɪt/',
    example: 'I like chocolate biscuits.',
    exampleChinese: '我喜欢巧克力饼干。',
    level: 4,
    category: '食物'
  },
  {
    id: 454,
    word: 'Candy',
    chinese: '糖果',
    pronunciation: '/ˈkændi/',
    example: 'Children like candy.',
    exampleChinese: '孩子们喜欢糖果。',
    level: 4,
    category: '食物'
  },

  // 季节（6个）
  {
    id: 455,
    word: 'Winter',
    chinese: '冬天',
    pronunciation: '/ˈwɪntər/',
    example: 'It is cold in winter.',
    exampleChinese: '冬天很冷。',
    level: 4,
    category: '季节'
  },
  {
    id: 456,
    word: 'Summer',
    chinese: '夏天',
    pronunciation: '/ˈsʌmər/',
    example: 'I swim in summer.',
    exampleChinese: '夏天我游泳。',
    level: 4,
    category: '季节'
  },
  {
    id: 457,
    word: 'Spring',
    chinese: '春天',
    pronunciation: '/sprɪŋ/',
    example: 'Flowers bloom in spring.',
    exampleChinese: '春天花开。',
    level: 4,
    category: '季节'
  },
  {
    id: 458,
    word: 'Autumn',
    chinese: '秋天',
    pronunciation: '/ˈɔːtəm/',
    example: 'Leaves fall in autumn.',
    exampleChinese: '秋天落叶。',
    level: 4,
    category: '季节'
  },
  {
    id: 459,
    word: 'Snow',
    chinese: '雪',
    pronunciation: '/snəʊ/',
    example: 'Snow covers the ground.',
    exampleChinese: '雪覆盖了地面。',
    level: 4,
    category: '季节'
  },
  {
    id: 460,
    word: 'Rain',
    chinese: '雨',
    pronunciation: '/reɪn/',
    example: 'It is raining today.',
    exampleChinese: '今天在下雨。',
    level: 4,
    category: '季节'
  },

  // 颜色（8个）
  {
    id: 461,
    word: 'Yellow',
    chinese: '黄色',
    pronunciation: '/ˈjeləʊ/',
    example: 'The sun is yellow.',
    exampleChinese: '太阳是黄色的。',
    level: 4,
    category: '颜色'
  },
  {
    id: 462,
    word: 'Green',
    chinese: '绿色',
    pronunciation: '/ɡriːn/',
    example: 'The grass is green.',
    exampleChinese: '草是绿色的。',
    level: 4,
    category: '颜色'
  },
  {
    id: 463,
    word: 'Orange',
    chinese: '橙色',
    pronunciation: '/ˈɒrɪndʒ/',
    example: 'Oranges are orange.',
    exampleChinese: '橙子是橙色的。',
    level: 4,
    category: '颜色'
  },
  {
    id: 464,
    word: 'Purple',
    chinese: '紫色',
    pronunciation: '/ˈpɜːpl/',
    example: 'I like purple flowers.',
    exampleChinese: '我喜欢紫色的花。',
    level: 4,
    category: '颜色'
  },
  {
    id: 465,
    word: 'Pink',
    chinese: '粉色',
    pronunciation: '/pɪŋk/',
    example: 'The dress is pink.',
    exampleChinese: '这条裙子是粉色的。',
    level: 4,
    category: '颜色'
  },
  {
    id: 466,
    word: 'Brown',
    chinese: '棕色',
    pronunciation: '/braʊn/',
    example: 'The dog is brown.',
    exampleChinese: '这只狗是棕色的。',
    level: 4,
    category: '颜色'
  },
  {
    id: 467,
    word: 'Gray',
    chinese: '灰色',
    pronunciation: '/ɡreɪ/',
    example: 'The sky is gray today.',
    exampleChinese: '今天天空是灰色的。',
    level: 4,
    category: '颜色'
  },
  {
    id: 468,
    word: 'Gold',
    chinese: '金色',
    pronunciation: '/ɡəʊld/',
    example: 'The medal is gold.',
    exampleChinese: '奖牌是金色的。',
    level: 4,
    category: '颜色'
  },

  // 爱好（8个）
  {
    id: 469,
    word: 'Music',
    chinese: '音乐',
    pronunciation: '/ˈmjuːzɪk/',
    example: 'I like listening to music.',
    exampleChinese: '我喜欢听音乐。',
    level: 4,
    category: '爱好'
  },
  {
    id: 470,
    word: 'Dance',
    chinese: '跳舞',
    pronunciation: '/dæns/',
    example: 'Can you dance?',
    exampleChinese: '你会跳舞吗？',
    level: 4,
    category: '爱好'
  },
  {
    id: 471,
    word: 'Draw',
    chinese: '画画',
    pronunciation: '/drɔː/',
    example: 'I like to draw pictures.',
    exampleChinese: '我喜欢画画。',
    level: 4,
    category: '爱好'
  },
  {
    id: 472,
    word: 'Sing',
    chinese: '唱歌',
    pronunciation: '/sɪŋ/',
    example: 'She sings beautifully.',
    exampleChinese: '她唱得很美。',
    level: 4,
    category: '爱好'
  },
  {
    id: 473,
    word: 'Read',
    chinese: '阅读',
    pronunciation: '/riːd/',
    example: 'I read books every day.',
    exampleChinese: '我每天读书。',
    level: 4,
    category: '爱好'
  },
  {
    id: 474,
    word: 'Write',
    chinese: '写作',
    pronunciation: '/raɪt/',
    example: 'I write stories.',
    exampleChinese: '我写故事。',
    level: 4,
    category: '爱好'
  },
  {
    id: 475,
    word: 'Run',
    chinese: '跑步',
    pronunciation: '/rʌn/',
    example: 'I run in the morning.',
    exampleChinese: '我早上跑步。',
    level: 4,
    category: '爱好'
  },
  {
    id: 476,
    word: 'Jump',
    chinese: '跳',
    pronunciation: '/dʒʌmp/',
    example: 'Can you jump high?',
    exampleChinese: '你能跳很高吗？',
    level: 4,
    category: '爱好'
  },

  // 形容词（8个）
  {
    id: 477,
    word: 'Beautiful',
    chinese: '美丽',
    pronunciation: '/ˈbjuːtɪfl/',
    example: 'The view is beautiful.',
    exampleChinese: '景色很美。',
    level: 4,
    category: '形容词'
  },
  {
    id: 478,
    word: 'Tall',
    chinese: '高',
    pronunciation: '/tɔːl/',
    example: 'The building is tall.',
    exampleChinese: '这栋楼很高。',
    level: 4,
    category: '形容词'
  },
  {
    id: 479,
    word: 'Short',
    chinese: '矮/短',
    pronunciation: '/ʃɔːt/',
    example: 'The pencil is short.',
    exampleChinese: '这支铅笔很短。',
    level: 4,
    category: '形容词'
  },
  {
    id: 480,
    word: 'Long',
    chinese: '长',
    pronunciation: '/lɒŋ/',
    example: 'The river is long.',
    exampleChinese: '这条河很长。',
    level: 4,
    category: '形容词'
  },
  {
    id: 481,
    word: 'New',
    chinese: '新',
    pronunciation: '/njuː/',
    example: 'I have a new book.',
    exampleChinese: '我有一本新书。',
    level: 4,
    category: '形容词'
  },
  {
    id: 482,
    word: 'Old',
    chinese: '旧/老',
    pronunciation: '/əʊld/',
    example: 'This is an old car.',
    exampleChinese: '这是一辆旧车。',
    level: 4,
    category: '形容词'
  },
  {
    id: 483,
    word: 'Young',
    chinese: '年轻',
    pronunciation: '/jʌŋ/',
    example: 'My sister is young.',
    exampleChinese: '我妹妹很年轻。',
    level: 4,
    category: '形容词'
  },
  {
    id: 484,
    word: 'Hot',
    chinese: '热',
    pronunciation: '/hɒt/',
    example: 'It is hot today.',
    exampleChinese: '今天很热。',
    level: 4,
    category: '形容词'
  },
  {
    id: 485,
    word: 'Cold',
    chinese: '冷',
    pronunciation: '/kəʊld/',
    example: 'It is cold in winter.',
    exampleChinese: '冬天很冷。',
    level: 4,
    category: '形容词'
  },
  {
    id: 486,
    word: 'Busy',
    chinese: '忙碌',
    pronunciation: '/ˈbɪzi/',
    example: 'I am busy today.',
    exampleChinese: '我今天很忙。',
    level: 4,
    category: '形容词'
  },

  // 时间（6个）
  {
    id: 487,
    word: 'Vacation',
    chinese: '假期',
    pronunciation: '/veɪˈkeɪʃn/',
    example: 'We went on vacation last summer.',
    exampleChinese: '去年夏天我们去度假了。',
    level: 4,
    category: '时间'
  },
  {
    id: 488,
    word: 'Holiday',
    chinese: '节日',
    pronunciation: '/ˈhɒlədeɪ/',
    example: 'Christmas is my favorite holiday.',
    exampleChinese: '圣诞节是我最喜欢的节日。',
    level: 4,
    category: '时间'
  },
  {
    id: 489,
    word: 'Year',
    chinese: '年',
    pronunciation: '/jɪr/',
    example: 'This year is 2024.',
    exampleChinese: '今年是2024年。',
    level: 4,
    category: '时间'
  },
  {
    id: 490,
    word: 'Month',
    chinese: '月',
    pronunciation: '/mʌnθ/',
    example: 'There are twelve months in a year.',
    exampleChinese: '一年有12个月。',
    level: 4,
    category: '时间'
  },
  {
    id: 491,
    word: 'Tomorrow',
    chinese: '明天',
    pronunciation: '/təˈmɒrəʊ/',
    example: 'See you tomorrow.',
    exampleChinese: '明天见。',
    level: 4,
    category: '时间'
  },
  {
    id: 492,
    word: 'Yesterday',
    chinese: '昨天',
    pronunciation: '/ˈjestədeɪ/',
    example: 'I played football yesterday.',
    exampleChinese: '我昨天踢了足球。',
    level: 4,
    category: '时间'
  },
];

// 五年级单词（中级词汇 - 100个）
export const grade5Words: Word[] = [
  // 情绪（10个）
  {
    id: 501,
    word: 'Excited',
    chinese: '兴奋',
    pronunciation: '/ɪkˈsaɪtɪd/',
    example: 'I am excited about the trip.',
    exampleChinese: '我对这次旅行感到兴奋。',
    level: 5,
    category: '情绪'
  },
  {
    id: 502,
    word: 'Nervous',
    chinese: '紧张',
    pronunciation: '/ˈnɜːvəs/',
    example: 'I feel nervous before the test.',
    exampleChinese: '考试前我感到紧张。',
    level: 5,
    category: '情绪'
  },
  {
    id: 503,
    word: 'Confident',
    chinese: '自信',
    pronunciation: '/ˈkɒnfɪdənt/',
    example: 'I am confident I can do it.',
    exampleChinese: '我有信心我能做到。',
    level: 5,
    category: '情绪'
  },
  {
    id: 504,
    word: 'Worried',
    chinese: '担心',
    pronunciation: '/ˈwʌrid/',
    example: 'I am worried about my grades.',
    exampleChinese: '我担心我的成绩。',
    level: 5,
    category: '情绪'
  },
  {
    id: 505,
    word: 'Surprised',
    chinese: '惊讶',
    pronunciation: '/səˈpraɪzd/',
    example: 'I was surprised by the news.',
    exampleChinese: '我对这个消息感到惊讶。',
    level: 5,
    category: '情绪'
  },
  {
    id: 506,
    word: 'Tired',
    chinese: '累',
    pronunciation: '/ˈtaɪərd/',
    example: 'I am tired after the game.',
    exampleChinese: '比赛后我很累。',
    level: 5,
    category: '情绪'
  },
  {
    id: 507,
    word: 'Angry',
    chinese: '生气',
    pronunciation: '/ˈæŋɡri/',
    example: 'He is angry about the result.',
    exampleChinese: '他对结果感到生气。',
    level: 5,
    category: '情绪'
  },
  {
    id: 508,
    word: 'Proud',
    chinese: '骄傲',
    pronunciation: '/praʊd/',
    example: 'I am proud of my work.',
    exampleChinese: '我为我的工作感到骄傲。',
    level: 5,
    category: '情绪'
  },
  {
    id: 509,
    word: 'Bored',
    chinese: '无聊',
    pronunciation: '/bɔːrd/',
    example: 'I am bored on rainy days.',
    exampleChinese: '下雨天我很无聊。',
    level: 5,
    category: '情绪'
  },
  {
    id: 510,
    word: 'Scared',
    chinese: '害怕',
    pronunciation: '/skeəd/',
    example: 'I was scared of the dark.',
    exampleChinese: '我害怕黑暗。',
    level: 5,
    category: '情绪'
  },

  // 形容词（15个）
  {
    id: 511,
    word: 'Beautiful',
    chinese: '美丽',
    pronunciation: '/ˈbjuːtɪfl/',
    example: 'The view is beautiful.',
    exampleChinese: '景色很美。',
    level: 5,
    category: '形容词'
  },
  {
    id: 512,
    word: 'Wonderful',
    chinese: '奇妙',
    pronunciation: '/ˈwʌndəfl/',
    example: 'We had a wonderful time.',
    exampleChinese: '我们度过了美好的时光。',
    level: 5,
    category: '形容词'
  },
  {
    id: 513,
    word: 'Interesting',
    chinese: '有趣',
    pronunciation: '/ˈɪntrəstɪŋ/',
    example: 'The story is very interesting.',
    exampleChinese: '这个故事很有趣。',
    level: 5,
    category: '形容词'
  },
  {
    id: 514,
    word: 'Difficult',
    chinese: '困难',
    pronunciation: '/ˈdɪfɪkəlt/',
    example: 'The math problem is difficult.',
    exampleChinese: '这道数学题很难。',
    level: 5,
    category: '形容词'
  },
  {
    id: 515,
    word: 'Easy',
    chinese: '容易',
    pronunciation: '/ˈiːzi/',
    example: 'The test was easy.',
    exampleChinese: '考试很简单。',
    level: 5,
    category: '形容词'
  },
  {
    id: 516,
    word: 'Important',
    chinese: '重要',
    pronunciation: '/ɪmˈpɔːrtnt/',
    example: 'This is very important.',
    exampleChinese: '这非常重要。',
    level: 5,
    category: '形容词'
  },
  {
    id: 517,
    word: 'Dangerous',
    chinese: '危险',
    pronunciation: '/ˈdeɪndʒərəs/',
    example: 'Do not play with fire, it is dangerous.',
    exampleChinese: '不要玩火，很危险。',
    level: 5,
    category: '形容词'
  },
  {
    id: 518,
    word: 'Safe',
    chinese: '安全',
    pronunciation: '/seɪf/',
    example: 'The playground is safe.',
    exampleChinese: '操场很安全。',
    level: 5,
    category: '形容词'
  },
  {
    id: 519,
    word: 'Famous',
    chinese: '著名',
    pronunciation: '/ˈfeɪməs/',
    example: 'She is a famous singer.',
    exampleChinese: '她是位著名歌手。',
    level: 5,
    category: '形容词'
  },
  {
    id: 520,
    word: 'Popular',
    chinese: '受欢迎',
    pronunciation: '/ˈpɒpjələr/',
    example: 'This game is very popular.',
    exampleChinese: '这个游戏很受欢迎。',
    level: 5,
    category: '形容词'
  },
  {
    id: 521,
    word: 'Expensive',
    chinese: '昂贵',
    pronunciation: '/ɪkˈspensɪv/',
    example: 'The car is expensive.',
    exampleChinese: '这辆车很贵。',
    level: 5,
    category: '形容词'
  },
  {
    id: 522,
    word: 'Cheap',
    chinese: '便宜',
    pronunciation: '/tʃiːp/',
    example: 'This book is cheap.',
    exampleChinese: '这本书很便宜。',
    level: 5,
    category: '形容词'
  },
  {
    id: 523,
    word: 'Heavy',
    chinese: '重',
    pronunciation: '/ˈhevi/',
    example: 'The box is heavy.',
    exampleChinese: '这个箱子很重。',
    level: 5,
    category: '形容词'
  },
  {
    id: 524,
    word: 'Light',
    chinese: '轻/亮',
    pronunciation: '/laɪt/',
    example: 'The feather is light.',
    exampleChinese: '羽毛很轻。',
    level: 5,
    category: '形容词'
  },
  {
    id: 525,
    word: 'Quiet',
    chinese: '安静',
    pronunciation: '/ˈkwaɪət/',
    example: 'The library is quiet.',
    exampleChinese: '图书馆很安静。',
    level: 5,
    category: '形容词'
  },

  // 动词（15个）
  {
    id: 526,
    word: 'Suggest',
    chinese: '建议',
    pronunciation: '/səˈdʒest/',
    example: 'I suggest we go by bus.',
    exampleChinese: '我建议我们坐公交去。',
    level: 5,
    category: '动词'
  },
  {
    id: 527,
    word: 'Agree',
    chinese: '同意',
    pronunciation: '/əˈɡriː/',
    example: 'I agree with you.',
    exampleChinese: '我同意你的看法。',
    level: 5,
    category: '动词'
  },
  {
    id: 528,
    word: 'Disagree',
    chinese: '不同意',
    pronunciation: '/ˌdɪsəˈɡriː/',
    example: 'I disagree with his opinion.',
    exampleChinese: '我不同意他的观点。',
    level: 5,
    category: '动词'
  },
  {
    id: 529,
    word: 'Develop',
    chinese: '发展',
    pronunciation: '/dɪˈveləp/',
    example: 'The city is developing fast.',
    exampleChinese: '城市发展很快。',
    level: 5,
    category: '动词'
  },
  {
    id: 530,
    word: 'Improve',
    chinese: '改善',
    pronunciation: '/ɪmˈpruːv/',
    example: 'I want to improve my English.',
    exampleChinese: '我想提高我的英语。',
    level: 5,
    category: '动词'
  },
  {
    id: 531,
    word: 'Achieve',
    chinese: '实现',
    pronunciation: '/əˈtʃiːv/',
    example: 'You can achieve your dreams.',
    exampleChinese: '你可以实现你的梦想。',
    level: 5,
    category: '动词'
  },
  {
    id: 532,
    word: 'Discover',
    chinese: '发现',
    pronunciation: '/dɪˈskʌvər/',
    example: 'Scientists discover new things.',
    exampleChinese: '科学家发现新事物。',
    level: 5,
    category: '动词'
  },
  {
    id: 533,
    word: 'Protect',
    chinese: '保护',
    pronunciation: '/prəˈtekt/',
    example: 'We must protect animals.',
    exampleChinese: '我们要保护动物。',
    level: 5,
    category: '动词'
  },
  {
    id: 534,
    word: 'Recycle',
    chinese: '回收',
    pronunciation: '/ˌriːˈsaɪkl/',
    example: 'We should recycle paper.',
    exampleChinese: '我们应该回收纸张。',
    level: 5,
    category: '动词'
  },
  {
    id: 535,
    word: 'Share',
    chinese: '分享',
    pronunciation: '/ʃeər/',
    example: 'Let us share the cake.',
    exampleChinese: '让我们分享蛋糕。',
    level: 5,
    category: '动词'
  },
  {
    id: 536,
    word: 'Discuss',
    chinese: '讨论',
    pronunciation: '/dɪˈskʌs/',
    example: 'Let us discuss the problem.',
    exampleChinese: '让我们讨论这个问题。',
    level: 5,
    category: '动词'
  },
  {
    id: 537,
    word: 'Describe',
    chinese: '描述',
    pronunciation: '/dɪˈskraɪb/',
    example: 'Can you describe the picture?',
    exampleChinese: '你能描述这张图片吗？',
    level: 5,
    category: '动词'
  },
  {
    id: 538,
    word: 'Compare',
    chinese: '比较',
    pronunciation: '/kəmˈpeər/',
    example: 'Compare the two pictures.',
    exampleChinese: '比较这两张图片。',
    level: 5,
    category: '动词'
  },
  {
    id: 539,
    word: 'Create',
    chinese: '创造',
    pronunciation: '/kriˈeɪt/',
    example: 'Artists create beautiful art.',
    exampleChinese: '艺术家创造美丽的艺术。',
    level: 5,
    category: '动词'
  },
  {
    id: 540,
    word: 'Solve',
    chinese: '解决',
    pronunciation: '/sɒlv/',
    example: 'Let us solve this problem.',
    exampleChinese: '让我们解决这个问题。',
    level: 5,
    category: '动词'
  },

  // 科技（10个）
  {
    id: 541,
    word: 'Technology',
    chinese: '技术',
    pronunciation: '/tekˈnɒlədʒi/',
    example: 'Technology changes our lives.',
    exampleChinese: '技术改变了我们的生活。',
    level: 5,
    category: '科技'
  },
  {
    id: 542,
    word: 'Internet',
    chinese: '互联网',
    pronunciation: '/ˈɪntərnet/',
    example: 'I use the internet every day.',
    exampleChinese: '我每天都用互联网。',
    level: 5,
    category: '科技'
  },
  {
    id: 543,
    word: 'Robot',
    chinese: '机器人',
    pronunciation: '/ˈrəʊbɒt/',
    example: 'The robot can walk and talk.',
    exampleChinese: '机器人可以走路和说话。',
    level: 5,
    category: '科技'
  },
  {
    id: 544,
    word: 'Email',
    chinese: '电子邮件',
    pronunciation: '/ˈiːmeɪl/',
    example: 'Send me an email.',
    exampleChinese: '给我发一封邮件。',
    level: 5,
    category: '科技'
  },
  {
    id: 545,
    word: 'Website',
    chinese: '网站',
    pronunciation: '/ˈwebsaɪt/',
    example: 'Visit our website.',
    exampleChinese: '访问我们的网站。',
    level: 5,
    category: '科技'
  },
  {
    id: 546,
    word: 'Phone',
    chinese: '手机',
    pronunciation: '/fəʊn/',
    example: 'My phone is smart.',
    exampleChinese: '我的手机是智能手机。',
    level: 5,
    category: '科技'
  },
  {
    id: 547,
    word: 'App',
    chinese: '应用',
    pronunciation: '/æp/',
    example: 'Download the app.',
    exampleChinese: '下载这个应用。',
    level: 5,
    category: '科技'
  },
  {
    id: 548,
    word: 'Keyboard',
    chinese: '键盘',
    pronunciation: '/ˈkiːbɔːrd/',
    example: 'Type on the keyboard.',
    exampleChinese: '在键盘上打字。',
    level: 5,
    category: '科技'
  },
  {
    id: 549,
    word: 'Mouse',
    chinese: '鼠标',
    pronunciation: '/maʊs/',
    example: 'Click the mouse.',
    exampleChinese: '点击鼠标。',
    level: 5,
    category: '科技'
  },
  {
    id: 550,
    word: 'Screen',
    chinese: '屏幕',
    pronunciation: '/skriːn/',
    example: 'Look at the screen.',
    exampleChinese: '看屏幕。',
    level: 5,
    category: '科技'
  },

  // 环境（10个）
  {
    id: 551,
    word: 'Environment',
    chinese: '环境',
    pronunciation: '/ɪnˈvaɪrənmənt/',
    example: 'We must protect the environment.',
    exampleChinese: '我们要保护环境。',
    level: 5,
    category: '环境'
  },
  {
    id: 552,
    word: 'Pollution',
    chinese: '污染',
    pronunciation: '/pəˈluːʃn/',
    example: 'Air pollution is a problem.',
    exampleChinese: '空气污染是个问题。',
    level: 5,
    category: '环境'
  },
  {
    id: 553,
    word: 'Energy',
    chinese: '能源',
    pronunciation: '/ˈenərdʒi/',
    example: 'Save energy at home.',
    exampleChinese: '在家里节约能源。',
    level: 5,
    category: '环境'
  },
  {
    id: 554,
    word: 'Nature',
    chinese: '自然',
    pronunciation: '/ˈneɪtʃər/',
    example: 'Respect nature.',
    exampleChinese: '尊重自然。',
    level: 5,
    category: '环境'
  },
  {
    id: 555,
    word: 'Climate',
    chinese: '气候',
    pronunciation: '/ˈklaɪmət/',
    example: 'The climate is changing.',
    exampleChinese: '气候正在变化。',
    level: 5,
    category: '环境'
  },
  {
    id: 556,
    word: 'Forest',
    chinese: '森林',
    pronunciation: '/ˈfɒrɪst/',
    example: 'Forests are important for the environment.',
    exampleChinese: '森林对环境很重要。',
    level: 5,
    category: '环境'
  },
  {
    id: 557,
    word: 'Ocean',
    chinese: '海洋',
    pronunciation: '/ˈəʊʃn/',
    example: 'The ocean is big and deep.',
    exampleChinese: '海洋又大又深。',
    level: 5,
    category: '环境'
  },
  {
    id: 558,
    word: 'Island',
    chinese: '岛屿',
    pronunciation: '/ˈaɪlənd/',
    example: 'I want to visit the island.',
    exampleChinese: '我想去这个岛屿。',
    level: 5,
    category: '环境'
  },
  {
    id: 559,
    word: 'Desert',
    chinese: '沙漠',
    pronunciation: '/ˈdezərt/',
    example: 'The desert is very dry.',
    exampleChinese: '沙漠非常干燥。',
    level: 5,
    category: '环境'
  },
  {
    id: 560,
    word: 'Jungle',
    chinese: '丛林',
    pronunciation: '/ˈdʒʌŋɡl/',
    example: 'Many animals live in the jungle.',
    exampleChinese: '很多动物住在丛林里。',
    level: 5,
    category: '环境'
  },

  // 抽象（15个）
  {
    id: 561,
    word: 'Experience',
    chinese: '经历',
    pronunciation: '/ɪkˈspɪəriəns/',
    example: 'This is a new experience for me.',
    exampleChinese: '这对我来说是新的经历。',
    level: 5,
    category: '抽象'
  },
  {
    id: 562,
    word: 'Adventure',
    chinese: '冒险',
    pronunciation: '/ədˈventʃər/',
    example: 'We went on an adventure.',
    exampleChinese: '我们去冒险了。',
    level: 5,
    category: '抽象'
  },
  {
    id: 563,
    word: 'Competition',
    chinese: '竞赛',
    pronunciation: '/ˌkɒmpəˈtɪʃn/',
    example: 'I won the competition.',
    exampleChinese: '我赢得了比赛。',
    level: 5,
    category: '抽象'
  },
  {
    id: 564,
    word: 'Celebration',
    chinese: '庆祝',
    pronunciation: '/ˌselɪˈbreɪʃn/',
    example: 'We have a celebration for the holiday.',
    exampleChinese: '我们庆祝这个节日。',
    level: 5,
    category: '抽象'
  },
  {
    id: 565,
    word: 'Decision',
    chinese: '决定',
    pronunciation: '/dɪˈsɪʒn/',
    example: 'I made a decision.',
    exampleChinese: '我做了一个决定。',
    level: 5,
    category: '抽象'
  },
  {
    id: 566,
    word: 'Opportunity',
    chinese: '机会',
    pronunciation: '/ˌɒpəˈtjuːnəti/',
    example: 'Do not miss this opportunity.',
    exampleChinese: '不要错过这个机会。',
    level: 5,
    category: '抽象'
  },
  {
    id: 567,
    word: 'Challenge',
    chinese: '挑战',
    pronunciation: '/ˈtʃælɪndʒ/',
    example: 'I accept the challenge.',
    exampleChinese: '我接受这个挑战。',
    level: 5,
    category: '抽象'
  },
  {
    id: 568,
    word: 'Success',
    chinese: '成功',
    pronunciation: '/səkˈses/',
    example: 'Hard work leads to success.',
    exampleChinese: '努力带来成功。',
    level: 5,
    category: '抽象'
  },
  {
    id: 569,
    word: 'Failure',
    chinese: '失败',
    pronunciation: '/ˈfeɪljər/',
    example: 'Failure is the mother of success.',
    exampleChinese: '失败是成功之母。',
    level: 5,
    category: '抽象'
  },
  {
    id: 570,
    word: 'Dream',
    chinese: '梦想',
    pronunciation: '/driːm/',
    example: 'Follow your dreams.',
    exampleChinese: '追随你的梦想。',
    level: 5,
    category: '抽象'
  },
  {
    id: 571,
    word: 'Goal',
    chinese: '目标',
    pronunciation: '/ɡəʊl/',
    example: 'Set a goal and work hard.',
    exampleChinese: '设定目标并努力工作。',
    level: 5,
    category: '抽象'
  },
  {
    id: 572,
    word: 'Idea',
    chinese: '想法',
    pronunciation: '/aɪˈdiə/',
    example: 'I have a good idea.',
    exampleChinese: '我有个好主意。',
    level: 5,
    category: '抽象'
  },
  {
    id: 573,
    word: 'Knowledge',
    chinese: '知识',
    pronunciation: '/ˈnɒlɪdʒ/',
    example: 'Knowledge is power.',
    exampleChinese: '知识就是力量。',
    level: 5,
    category: '抽象'
  },
  {
    id: 574,
    word: 'Wisdom',
    chinese: '智慧',
    pronunciation: '/ˈwɪzdəm/',
    example: 'My grandmother has great wisdom.',
    exampleChinese: '我奶奶有伟大的智慧。',
    level: 5,
    category: '抽象'
  },
  {
    id: 575,
    word: 'Imagination',
    chinese: '想象力',
    pronunciation: '/ɪˌmædʒɪˈneɪʃn/',
    example: 'Use your imagination.',
    exampleChinese: '发挥你的想象力。',
    level: 5,
    category: '抽象'
  },

  // 健康（10个）
  {
    id: 576,
    word: 'Health',
    chinese: '健康',
    pronunciation: '/helθ/',
    example: 'Health is important.',
    exampleChinese: '健康很重要。',
    level: 5,
    category: '健康'
  },
  {
    id: 577,
    word: 'Exercise',
    chinese: '锻炼',
    pronunciation: '/ˈeksərsaɪz/',
    example: 'Exercise every day.',
    exampleChinese: '每天锻炼。',
    level: 5,
    category: '健康'
  },
  {
    id: 578,
    word: 'Sport',
    chinese: '运动',
    pronunciation: '/spɔːrt/',
    example: 'I like playing sports.',
    exampleChinese: '我喜欢运动。',
    level: 5,
    category: '健康'
  },
  {
    id: 579,
    word: 'Diet',
    chinese: '饮食',
    pronunciation: '/ˈdaɪət/',
    example: 'Eat a healthy diet.',
    exampleChinese: '吃健康的饮食。',
    level: 5,
    category: '健康'
  },
  {
    id: 580,
    word: 'Sleep',
    chinese: '睡眠',
    pronunciation: '/sliːp/',
    example: 'Get enough sleep.',
    exampleChinese: '获得足够的睡眠。',
    level: 5,
    category: '健康'
  },
  {
    id: 581,
    word: 'Disease',
    chinese: '疾病',
    pronunciation: '/dɪˈziːz/',
    example: 'Wash hands to prevent disease.',
    exampleChinese: '洗手预防疾病。',
    level: 5,
    category: '健康'
  },
  {
    id: 582,
    word: 'Medicine',
    chinese: '药物',
    pronunciation: '/ˈmedɪsn/',
    example: 'Take your medicine.',
    exampleChinese: '吃药。',
    level: 5,
    category: '健康'
  },
  {
    id: 583,
    word: 'Hospital',
    chinese: '医院',
    pronunciation: '/ˈhɒspɪtl/',
    example: 'Go to the hospital if you are sick.',
    exampleChinese: '生病去医院。',
    level: 5,
    category: '健康'
  },
  {
    id: 584,
    word: 'Patient',
    chinese: '病人',
    pronunciation: '/ˈpeɪʃnt/',
    example: 'The patient is resting.',
    exampleChinese: '病人在休息。',
    level: 5,
    category: '健康'
  },
  {
    id: 585,
    word: 'Doctor',
    chinese: '医生',
    pronunciation: '/ˈdɒktər/',
    example: 'The doctor checked my health.',
    exampleChinese: '医生检查了我的健康。',
    level: 5,
    category: '健康'
  },

  // 物品（10个）
  {
    id: 586,
    word: 'Birthday',
    chinese: '生日',
    pronunciation: '/ˈbɜːθdeɪ/',
    example: 'Happy Birthday to you!',
    exampleChinese: '祝你生日快乐！',
    level: 5,
    category: '物品'
  },
  {
    id: 587,
    word: 'Weather',
    chinese: '天气',
    pronunciation: '/ˈweðər/',
    example: 'The weather is sunny today.',
    exampleChinese: '今天天气晴朗。',
    level: 5,
    category: '物品'
  },
  {
    id: 588,
    word: 'Journey',
    chinese: '旅程',
    pronunciation: '/ˈdʒɜːni/',
    example: 'We had a wonderful journey.',
    exampleChinese: '我们有一段美妙的旅程。',
    level: 5,
    category: '物品'
  },
  {
    id: 589,
    word: 'Gift',
    chinese: '礼物',
    pronunciation: '/ɡɪft/',
    example: 'I got a gift on my birthday.',
    exampleChinese: '我生日收到了礼物。',
    level: 5,
    category: '物品'
  },
  {
    id: 590,
    word: 'Ticket',
    chinese: '票',
    pronunciation: '/ˈtɪkɪt/',
    example: 'I bought a ticket to the concert.',
    exampleChinese: '我买了音乐会的票。',
    level: 5,
    category: '物品'
  },
  {
    id: 591,
    word: 'Diary',
    chinese: '日记',
    pronunciation: '/ˈdaɪəri/',
    example: 'I write in my diary every day.',
    exampleChinese: '我每天写日记。',
    level: 5,
    category: '物品'
  },
  {
    id: 592,
    word: 'Calendar',
    chinese: '日历',
    pronunciation: '/ˈkæləndər/',
    example: 'Check the calendar for the date.',
    exampleChinese: '查看日历确认日期。',
    level: 5,
    category: '物品'
  },
  {
    id: 593,
    word: 'Clock',
    chinese: '时钟',
    pronunciation: '/klɒk/',
    example: 'The clock shows the time.',
    exampleChinese: '时钟显示时间。',
    level: 5,
    category: '物品'
  },
  {
    id: 594,
    word: 'Key',
    chinese: '钥匙',
    pronunciation: '/kiː/',
    example: 'I lost my key.',
    exampleChinese: '我丢了钥匙。',
    level: 5,
    category: '物品'
  },
  {
    id: 595,
    word: 'Lock',
    chinese: '锁',
    pronunciation: '/lɒk/',
    example: 'Lock the door.',
    exampleChinese: '锁门。',
    level: 5,
    category: '物品'
  },

  // 地理（5个）
  {
    id: 596,
    word: 'Country',
    chinese: '国家',
    pronunciation: '/ˈkʌntri/',
    example: 'I love my country.',
    exampleChinese: '我爱我的国家。',
    level: 5,
    category: '地理'
  },
  {
    id: 597,
    word: 'City',
    chinese: '城市',
    pronunciation: '/ˈsɪti/',
    example: 'I live in a big city.',
    exampleChinese: '我住在大城市。',
    level: 5,
    category: '地理'
  },
  {
    id: 598,
    word: 'Town',
    chinese: '城镇',
    pronunciation: '/taʊn/',
    example: 'The town is small and quiet.',
    exampleChinese: '这个城镇小而安静。',
    level: 5,
    category: '地理'
  },
  {
    id: 599,
    word: 'Village',
    chinese: '村庄',
    pronunciation: '/ˈvɪlɪdʒ/',
    example: 'I visited a village.',
    exampleChinese: '我参观了一个村庄。',
    level: 5,
    category: '地理'
  },
  {
    id: 600,
    word: 'Street',
    chinese: '街道',
    pronunciation: '/striːt/',
    example: 'Walk across the street.',
    exampleChinese: '穿过街道。',
    level: 5,
    category: '地理'
  },
];

// 六年级单词（高级词汇 - 100个）
export const grade6Words: Word[] = [
  // 学科（15个）
  {
    id: 601,
    word: 'Dictionary',
    chinese: '字典',
    pronunciation: '/ˈdɪkʃəneri/',
    example: 'I use a dictionary to learn new words.',
    exampleChinese: '我用字典学习新单词。',
    level: 6,
    category: '学科'
  },
  {
    id: 602,
    word: 'Encyclopedia',
    chinese: '百科全书',
    pronunciation: '/ɪnˌsaɪkləˈpiːdiə/',
    example: 'I read the encyclopedia for information.',
    exampleChinese: '我读百科全书获取信息。',
    level: 6,
    category: '学科'
  },
  {
    id: 603,
    word: 'Literature',
    chinese: '文学',
    pronunciation: '/ˈlɪtrətʃər/',
    example: 'She studies English literature.',
    exampleChinese: '她学习英国文学。',
    level: 6,
    category: '学科'
  },
  {
    id: 604,
    word: 'Geography',
    chinese: '地理',
    pronunciation: '/dʒiˈɒɡrəfi/',
    example: 'Geography teaches us about the world.',
    exampleChinese: '地理课教我们了解世界。',
    level: 6,
    category: '学科'
  },
  {
    id: 605,
    word: 'History',
    chinese: '历史',
    pronunciation: '/ˈhɪstri/',
    example: 'History tells us about the past.',
    exampleChinese: '历史告诉我们过去的故事。',
    level: 6,
    category: '学科'
  },
  {
    id: 606,
    word: 'Physics',
    chinese: '物理',
    pronunciation: '/ˈfɪzɪks/',
    example: 'Physics is the study of matter and energy.',
    exampleChinese: '物理是研究物质和能量的学科。',
    level: 6,
    category: '学科'
  },
  {
    id: 607,
    word: 'Chemistry',
    chinese: '化学',
    pronunciation: '/ˈkemɪstri/',
    example: 'Chemistry experiments are fun.',
    exampleChinese: '化学实验很有趣。',
    level: 6,
    category: '学科'
  },
  {
    id: 608,
    word: 'Biology',
    chinese: '生物',
    pronunciation: '/baɪˈɒlədʒi/',
    example: 'Biology is the study of living things.',
    exampleChinese: '生物是研究生命的学科。',
    level: 6,
    category: '学科'
  },
  {
    id: 609,
    word: 'Mathematics',
    chinese: '数学',
    pronunciation: '/ˌmæθəˈmætɪks/',
    example: 'Mathematics is important for science.',
    exampleChinese: '数学对科学很重要。',
    level: 6,
    category: '学科'
  },
  {
    id: 610,
    word: 'Astronomy',
    chinese: '天文学',
    pronunciation: '/əˈstrɒnəmi/',
    example: 'Astronomy studies stars and planets.',
    exampleChinese: '天文学研究恒星和行星。',
    level: 6,
    category: '学科'
  },
  {
    id: 611,
    word: 'Psychology',
    chinese: '心理学',
    pronunciation: '/saɪˈkɒlədʒi/',
    example: 'Psychology helps understand human behavior.',
    exampleChinese: '心理学帮助理解人类行为。',
    level: 6,
    category: '学科'
  },
  {
    id: 612,
    word: 'Philosophy',
    chinese: '哲学',
    pronunciation: '/fɪˈlɒsəfi/',
    example: 'Philosophy asks deep questions about life.',
    exampleChinese: '哲学探讨生命的深刻问题。',
    level: 6,
    category: '学科'
  },
  {
    id: 613,
    word: 'Economics',
    chinese: '经济学',
    pronunciation: '/ˌiːkəˈnɒmɪks/',
    example: 'Economics studies money and trade.',
    exampleChinese: '经济学研究金钱和贸易。',
    level: 6,
    category: '学科'
  },
  {
    id: 614,
    word: 'Politics',
    chinese: '政治',
    pronunciation: '/ˈpɒlətɪks/',
    example: 'Politics is about government.',
    exampleChinese: '政治是关于政府的。',
    level: 6,
    category: '学科'
  },
  {
    id: 615,
    word: 'Language',
    chinese: '语言',
    pronunciation: '/ˈlæŋɡwɪdʒ/',
    example: 'I want to learn a new language.',
    exampleChinese: '我想学习一门新语言。',
    level: 6,
    category: '学科'
  },

  // 社会（15个）
  {
    id: 616,
    word: 'Democracy',
    chinese: '民主',
    pronunciation: '/dɪˈmɒkrəsi/',
    example: 'Democracy gives people the right to vote.',
    exampleChinese: '民主给予人们投票的权利。',
    level: 6,
    category: '社会'
  },
  {
    id: 617,
    word: 'Republic',
    chinese: '共和国',
    pronunciation: '/rɪˈpʌblɪk/',
    example: 'China is a republic.',
    exampleChinese: '中国是一个共和国。',
    level: 6,
    category: '社会'
  },
  {
    id: 618,
    word: 'Economy',
    chinese: '经济',
    pronunciation: '/ɪˈkɒnəmi/',
    example: 'The economy is growing.',
    exampleChinese: '经济正在增长。',
    level: 6,
    category: '社会'
  },
  {
    id: 619,
    word: 'Currency',
    chinese: '货币',
    pronunciation: '/ˈkʌrənsi/',
    example: 'The currency of China is the yuan.',
    exampleChinese: '中国的货币是人民币。',
    level: 6,
    category: '社会'
  },
  {
    id: 620,
    word: 'Investment',
    chinese: '投资',
    pronunciation: '/ɪnˈvestmənt/',
    example: 'Good investment can make money.',
    exampleChinese: '好的投资可以赚钱。',
    level: 6,
    category: '社会'
  },
  {
    id: 621,
    word: 'Diversity',
    chinese: '多样性',
    pronunciation: '/daɪˈvɜːsəti/',
    example: 'Diversity makes the world interesting.',
    exampleChinese: '多样性让世界变得有趣。',
    level: 6,
    category: '社会'
  },
  {
    id: 622,
    word: 'Equality',
    chinese: '平等',
    pronunciation: '/iˈkwɒləti/',
    example: 'Everyone deserves equality.',
    exampleChinese: '每个人都值得平等对待。',
    level: 6,
    category: '社会'
  },
  {
    id: 623,
    word: 'Justice',
    chinese: '正义',
    pronunciation: '/ˈdʒʌstɪs/',
    example: 'Justice must be served.',
    exampleChinese: '必须伸张正义。',
    level: 6,
    category: '社会'
  },
  {
    id: 624,
    word: 'Responsibility',
    chinese: '责任',
    pronunciation: '/rɪˌspɒnsəˈbɪləti/',
    example: 'We have a responsibility to help others.',
    exampleChinese: '我们有帮助他人的责任。',
    level: 6,
    category: '社会'
  },
  {
    id: 625,
    word: 'Independence',
    chinese: '独立',
    pronunciation: '/ˌɪndɪˈpendəns/',
    example: 'Independence is important.',
    exampleChinese: '独立很重要。',
    level: 6,
    category: '社会'
  },
  {
    id: 626,
    word: 'Cooperation',
    chinese: '合作',
    pronunciation: '/kəʊˌɒpəˈreɪʃn/',
    example: 'Cooperation brings success.',
    exampleChinese: '合作带来成功。',
    level: 6,
    category: '社会'
  },
  {
    id: 627,
    word: 'Community',
    chinese: '社区',
    pronunciation: '/kəˈmjuːnəti/',
    example: 'Our community is friendly.',
    exampleChinese: '我们的社区很友好。',
    level: 6,
    category: '社会'
  },
  {
    id: 628,
    word: 'Society',
    chinese: '社会',
    pronunciation: '/səˈsaɪəti/',
    example: 'We live in a modern society.',
    exampleChinese: '我们生活在一个现代社会。',
    level: 6,
    category: '社会'
  },
  {
    id: 629,
    word: 'Culture',
    chinese: '文化',
    pronunciation: '/ˈkʌltʃər/',
    example: 'Every country has its own culture.',
    exampleChinese: '每个国家都有自己的文化。',
    level: 6,
    category: '社会'
  },
  {
    id: 630,
    word: 'Tradition',
    chinese: '传统',
    pronunciation: '/trəˈdɪʃn/',
    example: 'We should respect tradition.',
    exampleChinese: '我们要尊重传统。',
    level: 6,
    category: '社会'
  },
  {
    id: 631,
    word: 'Heritage',
    chinese: '遗产',
    pronunciation: '/ˈherɪtɪdʒ/',
    example: 'Cultural heritage is precious.',
    exampleChinese: '文化遗产是宝贵的。',
    level: 6,
    category: '社会'
  },
  {
    id: 632,
    word: 'Government',
    chinese: '政府',
    pronunciation: '/ˈɡʌvənmənt/',
    example: 'The government serves the people.',
    exampleChinese: '政府为人民服务。',
    level: 6,
    category: '社会'
  },
  {
    id: 633,
    word: 'Citizen',
    chinese: '公民',
    pronunciation: '/ˈsɪtɪzn/',
    example: 'Every citizen has rights.',
    exampleChinese: '每个公民都有权利。',
    level: 6,
    category: '社会'
  },
  {
    id: 634,
    word: 'Law',
    chinese: '法律',
    pronunciation: '/lɔː/',
    example: 'We must follow the law.',
    exampleChinese: '我们必须遵守法律。',
    level: 6,
    category: '社会'
  },
  {
    id: 635,
    word: 'Crime',
    chinese: '犯罪',
    pronunciation: '/kraɪm/',
    example: 'Crime is bad for society.',
    exampleChinese: '犯罪对社会有害。',
    level: 6,
    category: '社会'
  },

  // 艺术（10个）
  {
    id: 636,
    word: 'Architecture',
    chinese: '建筑',
    pronunciation: '/ˈɑːkɪtektʃər/',
    example: 'The architecture of this building is amazing.',
    exampleChinese: '这座建筑的架构令人惊叹。',
    level: 6,
    category: '艺术'
  },
  {
    id: 637,
    word: 'Sculpture',
    chinese: '雕塑',
    pronunciation: '/ˈskʌlptʃər/',
    example: 'The sculpture is made of marble.',
    exampleChinese: '这座雕塑是用大理石做的。',
    level: 6,
    category: '艺术'
  },
  {
    id: 638,
    word: 'Painting',
    chinese: '绘画',
    pronunciation: '/ˈpeɪntɪŋ/',
    example: 'This painting is by a famous artist.',
    exampleChinese: '这幅画是著名艺术家的作品。',
    level: 6,
    category: '艺术'
  },
  {
    id: 639,
    word: 'Photography',
    chinese: '摄影',
    pronunciation: '/fəˈtɒɡrəfi/',
    example: 'Photography is my hobby.',
    exampleChinese: '摄影是我的爱好。',
    level: 6,
    category: '艺术'
  },
  {
    id: 640,
    word: 'Performance',
    chinese: '表演',
    pronunciation: '/pəˈfɔːməns/',
    example: 'The performance was wonderful.',
    exampleChinese: '表演非常精彩。',
    level: 6,
    category: '艺术'
  },
  {
    id: 641,
    word: 'Exhibition',
    chinese: '展览',
    pronunciation: '/ˌeksɪˈbɪʃn/',
    example: 'We visited an art exhibition.',
    exampleChinese: '我们参观了一个艺术展览。',
    level: 6,
    category: '艺术'
  },
  {
    id: 642,
    word: 'Creativity',
    chinese: '创造力',
    pronunciation: '/ˌkriːeɪˈtɪvəti/',
    example: 'Creativity is important in art.',
    exampleChinese: '创造力在艺术中很重要。',
    level: 6,
    category: '艺术'
  },
  {
    id: 643,
    word: 'Innovation',
    chinese: '创新',
    pronunciation: '/ˌɪnəˈveɪʃn/',
    example: 'Innovation drives progress.',
    exampleChinese: '创新推动进步。',
    level: 6,
    category: '艺术'
  },
  {
    id: 644,
    word: 'Masterpiece',
    chinese: '杰作',
    pronunciation: '/ˈmæstərpiːs/',
    example: 'This book is a masterpiece.',
    exampleChinese: '这本书是杰作。',
    level: 6,
    category: '艺术'
  },
  {
    id: 645,
    word: 'Design',
    chinese: '设计',
    pronunciation: '/dɪˈzaɪn/',
    example: 'Good design makes products beautiful.',
    exampleChinese: '好的设计让产品变美。',
    level: 6,
    category: '艺术'
  },

  // 科学（15个）
  {
    id: 646,
    word: 'Energy',
    chinese: '能量',
    pronunciation: '/ˈenərdʒi/',
    example: 'The sun gives us energy.',
    exampleChinese: '太阳给我们能量。',
    level: 6,
    category: '科学'
  },
  {
    id: 647,
    word: 'Force',
    chinese: '力',
    pronunciation: '/fɔːrs/',
    example: 'Gravity is a force.',
    exampleChinese: '重力是一种力。',
    level: 6,
    category: '科学'
  },
  {
    id: 648,
    word: 'Matter',
    chinese: '物质',
    pronunciation: '/ˈmætər/',
    example: 'Everything is made of matter.',
    exampleChinese: '一切都是由物质构成的。',
    level: 6,
    category: '科学'
  },
  {
    id: 649,
    word: 'Molecule',
    chinese: '分子',
    pronunciation: '/ˈmɒlɪkjuːl/',
    example: 'Water molecules are small.',
    exampleChinese: '水分子很小。',
    level: 6,
    category: '科学'
  },
  {
    id: 650,
    word: 'Atom',
    chinese: '原子',
    pronunciation: '/ˈætəm/',
    example: 'Atoms are the building blocks of matter.',
    exampleChinese: '原子是物质的构建块。',
    level: 6,
    category: '科学'
  },
  {
    id: 651,
    word: 'Experiment',
    chinese: '实验',
    pronunciation: '/ɪkˈsperəmənt/',
    example: 'We did an experiment in science class.',
    exampleChinese: '我们在科学课上做了实验。',
    level: 6,
    category: '科学'
  },
  {
    id: 652,
    word: 'Research',
    chinese: '研究',
    pronunciation: '/ˈriːsɜːtʃ/',
    example: 'Scientists do research.',
    exampleChinese: '科学家做研究。',
    level: 6,
    category: '科学'
  },
  {
    id: 653,
    word: 'Discovery',
    chinese: '发现',
    pronunciation: '/dɪˈskʌvəri/',
    example: 'The discovery changed the world.',
    exampleChinese: '这个发现改变了世界。',
    level: 6,
    category: '科学'
  },
  {
    id: 654,
    word: 'Theory',
    chinese: '理论',
    pronunciation: '/ˈθɪəri/',
    example: 'The theory explains the phenomenon.',
    exampleChinese: '理论解释了这个现象。',
    level: 6,
    category: '科学'
  },
  {
    id: 655,
    word: 'Evidence',
    chinese: '证据',
    pronunciation: '/ˈevɪdəns/',
    example: 'We need evidence to prove it.',
    exampleChinese: '我们需要证据来证明它。',
    level: 6,
    category: '科学'
  },
  {
    id: 656,
    word: 'Hypothesis',
    chinese: '假设',
    pronunciation: '/haɪˈpɒθəsɪs/',
    example: 'We made a hypothesis.',
    exampleChinese: '我们做了一个假设。',
    level: 6,
    category: '科学'
  },
  {
    id: 657,
    word: 'Conclusion',
    chinese: '结论',
    pronunciation: '/kənˈkluːʒn/',
    example: 'The conclusion is clear.',
    exampleChinese: '结论很清楚。',
    level: 6,
    category: '科学'
  },
  {
    id: 658,
    word: 'Laboratory',
    chinese: '实验室',
    pronunciation: '/ləˈbɒrətri/',
    example: 'We work in the laboratory.',
    exampleChinese: '我们在实验室工作。',
    level: 6,
    category: '科学'
  },
  {
    id: 659,
    word: 'Instrument',
    chinese: '仪器',
    pronunciation: '/ˈɪnstrəmənt/',
    example: 'Use the instrument carefully.',
    exampleChinese: '小心使用仪器。',
    level: 6,
    category: '科学'
  },
  {
    id: 660,
    word: 'Measurement',
    chinese: '测量',
    pronunciation: '/ˈmeʒərmənt/',
    example: 'Accurate measurement is important.',
    exampleChinese: '精确的测量很重要。',
    level: 6,
    category: '科学'
  },

  // 高级抽象（10个）
  {
    id: 661,
    word: 'Civilization',
    chinese: '文明',
    pronunciation: '/ˌsɪvəlaɪˈzeɪʃn/',
    example: 'Ancient civilization was advanced.',
    exampleChinese: '古代文明很先进。',
    level: 6,
    category: '抽象'
  },
  {
    id: 662,
    word: 'Transformation',
    chinese: '转变',
    pronunciation: '/ˌtrænsfəˈmeɪʃn/',
    example: 'The city underwent transformation.',
    exampleChinese: '城市发生了转变。',
    level: 6,
    category: '抽象'
  },
  {
    id: 663,
    word: 'Generation',
    chinese: '一代人',
    pronunciation: '/ˌdʒenəˈreɪʃn/',
    example: 'Our generation is different.',
    exampleChinese: '我们这一代很不一样。',
    level: 6,
    category: '抽象'
  },
  {
    id: 664,
    word: 'Sustainability',
    chinese: '可持续性',
    pronunciation: '/səˌsteɪnəˈbɪləti/',
    example: 'Sustainability is key to our future.',
    exampleChinese: '可持续性是我们未来的关键。',
    level: 6,
    category: '抽象'
  },
  {
    id: 665,
    word: 'Global',
    chinese: '全球的',
    pronunciation: '/ˈɡləʊbl/',
    example: 'We have global challenges.',
    exampleChinese: '我们面临全球性的挑战。',
    level: 6,
    category: '抽象'
  },
  {
    id: 666,
    word: 'Universal',
    chinese: '普遍的',
    pronunciation: '/ˌjuːnɪˈvɜːsl/',
    example: 'Education should be universal.',
    exampleChinese: '教育应该是普遍的。',
    level: 6,
    category: '抽象'
  },
  {
    id: 667,
    word: 'Traditional',
    chinese: '传统的',
    pronunciation: '/trəˈdɪʃənl/',
    example: 'This is a traditional dance.',
    exampleChinese: '这是一个传统舞蹈。',
    level: 6,
    category: '抽象'
  },
  {
    id: 668,
    word: 'Modern',
    chinese: '现代的',
    pronunciation: '/ˈmɒdn/',
    example: 'We live in modern times.',
    exampleChinese: '我们生活在现代。',
    level: 6,
    category: '抽象'
  },
  {
    id: 669,
    word: 'International',
    chinese: '国际的',
    pronunciation: '/ˌɪntəˈnæʃənl/',
    example: 'It is an international airport.',
    exampleChinese: '这是一个国际机场。',
    level: 6,
    category: '抽象'
  },
  {
    id: 670,
    word: 'Professional',
    chinese: '专业的',
    pronunciation: '/prəˈfeʃənl/',
    example: 'He is a professional teacher.',
    exampleChinese: '他是一位专业的老师。',
    level: 6,
    category: '抽象'
  },

  // 动物（10个）
  {
    id: 671,
    word: 'Kangaroo',
    chinese: '袋鼠',
    pronunciation: '/ˌkæŋɡəˈruː/',
    example: 'Kangaroos live in Australia.',
    exampleChinese: '袋鼠生活在澳大利亚。',
    level: 6,
    category: '动物'
  },
  {
    id: 672,
    word: 'Elephant',
    chinese: '大象',
    pronunciation: '/ˈelɪfənt/',
    example: 'Elephants are the largest land animals.',
    exampleChinese: '大象是最大的陆生动物。',
    level: 6,
    category: '动物'
  },
  {
    id: 673,
    word: 'Tiger',
    chinese: '老虎',
    pronunciation: '/ˈtaɪɡər/',
    example: 'The tiger is fierce.',
    exampleChinese: '老虎很凶猛。',
    level: 6,
    category: '动物'
  },
  {
    id: 674,
    word: 'Lion',
    chinese: '狮子',
    pronunciation: '/ˈlaɪən/',
    example: 'The lion is the king of the jungle.',
    exampleChinese: '狮子是丛林之王。',
    level: 6,
    category: '动物'
  },
  {
    id: 675,
    word: 'Giraffe',
    chinese: '长颈鹿',
    pronunciation: '/dʒəˈrɑːf/',
    example: 'The giraffe has a long neck.',
    exampleChinese: '长颈鹿有长脖子。',
    level: 6,
    category: '动物'
  },
  {
    id: 676,
    word: 'Zebra',
    chinese: '斑马',
    pronunciation: '/ˈzebrə/',
    example: 'Zebras have black and white stripes.',
    exampleChinese: '斑马有黑白条纹。',
    level: 6,
    category: '动物'
  },
  {
    id: 677,
    word: 'Penguin',
    chinese: '企鹅',
    pronunciation: '/ˈpeŋɡwɪn/',
    example: 'Penguins live in cold places.',
    exampleChinese: '企鹅住在寒冷的地方。',
    level: 6,
    category: '动物'
  },
  {
    id: 678,
    word: 'Dolphin',
    chinese: '海豚',
    pronunciation: '/ˈdɒlfɪn/',
    example: 'Dolphins are intelligent.',
    exampleChinese: '海豚很聪明。',
    level: 6,
    category: '动物'
  },
  {
    id: 679,
    word: 'Whale',
    chinese: '鲸鱼',
    pronunciation: '/weɪl/',
    example: 'Whales are the largest animals.',
    exampleChinese: '鲸鱼是最大的动物。',
    level: 6,
    category: '动物'
  },
  {
    id: 680,
    word: 'Eagle',
    chinese: '老鹰',
    pronunciation: '/ˈiːɡl/',
    example: 'The eagle flies high.',
    exampleChinese: '老鹰飞得很高。',
    level: 6,
    category: '动物'
  },

  // 食物（10个）
  {
    id: 681,
    word: 'Vegetable',
    chinese: '蔬菜',
    pronunciation: '/ˈvedʒtəbl/',
    example: 'Eat vegetables for health.',
    exampleChinese: '吃蔬菜对健康有好处。',
    level: 6,
    category: '食物'
  },
  {
    id: 682,
    word: 'Ingredient',
    chinese: '配料',
    pronunciation: '/ɪnˈɡriːdiənt/',
    example: 'What ingredients do we need?',
    exampleChinese: '我们需要什么配料？',
    level: 6,
    category: '食物'
  },
  {
    id: 683,
    word: 'Recipe',
    chinese: '食谱',
    pronunciation: '/ˈresəpi/',
    example: 'Follow the recipe to cook.',
    exampleChinese: '按照食谱做饭。',
    level: 6,
    category: '食物'
  },
  {
    id: 684,
    word: 'Delicious',
    chinese: '美味',
    pronunciation: '/dɪˈlɪʃəs/',
    example: 'The food is delicious.',
    exampleChinese: '食物很美味。',
    level: 6,
    category: '食物'
  },
  {
    id: 685,
    word: 'Nutritious',
    chinese: '营养丰富',
    pronunciation: '/nuːˈtrɪʃəs/',
    example: 'Vegetables are nutritious.',
    exampleChinese: '蔬菜营养丰富。',
    level: 6,
    category: '食物'
  },
  {
    id: 686,
    word: 'Spicy',
    chinese: '辣',
    pronunciation: '/ˈspaɪsi/',
    example: 'I like spicy food.',
    exampleChinese: '我喜欢辣的食物。',
    level: 6,
    category: '食物'
  },
  {
    id: 687,
    word: 'Sour',
    chinese: '酸',
    pronunciation: '/ˈsaʊər/',
    example: 'Lemons are sour.',
    exampleChinese: '柠檬是酸的。',
    level: 6,
    category: '食物'
  },
  {
    id: 688,
    word: 'Bitter',
    chinese: '苦',
    pronunciation: '/ˈbɪtər/',
    example: 'Coffee can be bitter.',
    exampleChinese: '咖啡可能很苦。',
    level: 6,
    category: '食物'
  },
  {
    id: 689,
    word: 'Sweet',
    chinese: '甜',
    pronunciation: '/swiːt/',
    example: 'Cakes are sweet.',
    exampleChinese: '蛋糕是甜的。',
    level: 6,
    category: '食物'
  },
  {
    id: 690,
    word: 'Salty',
    chinese: '咸',
    pronunciation: '/ˈsɔːlti/',
    example: 'The soup is too salty.',
    exampleChinese: '汤太咸了。',
    level: 6,
    category: '食物'
  },

  // 地理（10个）
  {
    id: 691,
    word: 'Continent',
    chinese: '大陆',
    pronunciation: '/ˈkɒntɪnənt/',
    example: 'Asia is a large continent.',
    exampleChinese: '亚洲是一个大洲。',
    level: 6,
    category: '地理'
  },
  {
    id: 692,
    word: 'Ocean',
    chinese: '海洋',
    pronunciation: '/ˈəʊʃn/',
    example: 'The Pacific Ocean is the largest.',
    exampleChinese: '太平洋是最大的。',
    level: 6,
    category: '地理'
  },
  {
    id: 693,
    word: 'Mountain',
    chinese: '山',
    pronunciation: '/ˈmaʊntɪn/',
    example: 'Mount Everest is the highest mountain.',
    exampleChinese: '珠穆朗玛峰是最高的山。',
    level: 6,
    category: '地理'
  },
  {
    id: 694,
    word: 'River',
    chinese: '河流',
    pronunciation: '/ˈrɪvər/',
    example: 'The Nile is a long river.',
    exampleChinese: '尼罗河是一条长河。',
    level: 6,
    category: '地理'
  },
  {
    id: 695,
    word: 'Valley',
    chinese: '山谷',
    pronunciation: '/ˈvæli/',
    example: 'The valley is beautiful.',
    exampleChinese: '山谷很美。',
    level: 6,
    category: '地理'
  },
  {
    id: 696,
    word: 'Desert',
    chinese: '沙漠',
    pronunciation: '/ˈdezərt/',
    example: 'The Sahara is a large desert.',
    exampleChinese: '撒哈拉是一个大沙漠。',
    level: 6,
    category: '地理'
  },
  {
    id: 697,
    word: 'Island',
    chinese: '岛屿',
    pronunciation: '/ˈaɪlənd/',
    example: 'Japan is an island country.',
    exampleChinese: '日本是一个岛国。',
    level: 6,
    category: '地理'
  },
  {
    id: 698,
    word: 'Climate',
    chinese: '气候',
    pronunciation: '/ˈklaɪmət/',
    example: 'The climate here is mild.',
    exampleChinese: '这里气候温和。',
    level: 6,
    category: '地理'
  },
  {
    id: 699,
    word: 'Equator',
    chinese: '赤道',
    pronunciation: '/ɪˈkweɪtər/',
    example: 'The equator divides the earth.',
    exampleChinese: '赤道将地球分开。',
    level: 6,
    category: '地理'
  },
  {
    id: 700,
    word: 'Satellite',
    chinese: '卫星',
    pronunciation: '/ˈsætəlaɪt/',
    example: 'Satellites orbit the earth.',
    exampleChinese: '卫星围绕地球轨道运行。',
    level: 6,
    category: '地理'
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
