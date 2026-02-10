type SpeakingPractice = {
  id: number;
  question: string;
  chinese: string;
  difficulty: number;
  topic: string;
  keyPhrases: string[];
};

// 三年级口语（基础对话 - 50个）
export const grade3Speaking: SpeakingPractice[] = [
  // 日常问候（10个）
  {
    id: 301,
    question: 'Hello, how are you today?',
    chinese: '你好，你好吗？',
    difficulty: 3,
    topic: '日常问候',
    keyPhrases: ['hello', 'how are you', 'today']
  },
  {
    id: 302,
    question: 'Good morning! Did you sleep well?',
    chinese: '早上好！你睡得好吗？',
    difficulty: 3,
    topic: '日常问候',
    keyPhrases: ['good morning', 'sleep well']
  },
  {
    id: 303,
    question: 'Good afternoon! What are you doing?',
    chinese: '下午好！你在做什么？',
    difficulty: 3,
    topic: '日常问候',
    keyPhrases: ['good afternoon', 'what are you doing']
  },
  {
    id: 304,
    question: 'Good evening! Are you hungry?',
    chinese: '晚上好！你饿了吗？',
    difficulty: 3,
    topic: '日常问候',
    keyPhrases: ['good evening', 'hungry']
  },
  {
    id: 305,
    question: 'Good night! See you tomorrow.',
    chinese: '晚安！明天见。',
    difficulty: 3,
    topic: '日常问候',
    keyPhrases: ['good night', 'see you tomorrow']
  },
  {
    id: 306,
    question: 'Nice to meet you!',
    chinese: '很高兴见到你！',
    difficulty: 3,
    topic: '日常问候',
    keyPhrases: ['nice to meet you']
  },
  {
    id: 307,
    question: 'What is your name?',
    chinese: '你叫什么名字？',
    difficulty: 3,
    topic: '日常问候',
    keyPhrases: ['what is your name']
  },
  {
    id: 308,
    question: 'How old are you?',
    chinese: '你多大了？',
    difficulty: 3,
    topic: '日常问候',
    keyPhrases: ['how old are you']
  },
  {
    id: 309,
    question: 'Where are you from?',
    chinese: '你来自哪里？',
    difficulty: 3,
    topic: '日常问候',
    keyPhrases: ['where are you from']
  },
  {
    id: 310,
    question: 'Have a nice day!',
    chinese: '祝你度过美好的一天！',
    difficulty: 3,
    topic: '日常问候',
    keyPhrases: ['have a nice day']
  },

  // 自我介绍（10个）
  {
    id: 311,
    question: 'My name is Tom. I am nine years old.',
    chinese: '我叫汤姆，我九岁了。',
    difficulty: 3,
    topic: '自我介绍',
    keyPhrases: ['my name is', 'years old']
  },
  {
    id: 312,
    question: 'I am a student in Grade 3.',
    chinese: '我是一名三年级学生。',
    difficulty: 3,
    topic: '自我介绍',
    keyPhrases: ['I am a student', 'Grade 3']
  },
  {
    id: 313,
    question: 'I like reading books very much.',
    chinese: '我非常喜欢读书。',
    difficulty: 3,
    topic: '自我介绍',
    keyPhrases: ['I like', 'reading books']
  },
  {
    id: 314,
    question: 'My favorite color is blue.',
    chinese: '我最喜欢的颜色是蓝色。',
    difficulty: 3,
    topic: '自我介绍',
    keyPhrases: ['favorite color', 'blue']
  },
  {
    id: 315,
    question: 'I have a happy family.',
    chinese: '我有一个快乐的家庭。',
    difficulty: 3,
    topic: '自我介绍',
    keyPhrases: ['happy family']
  },
  {
    id: 316,
    question: 'I live in a small city.',
    chinese: '我住在一个小城市。',
    difficulty: 3,
    topic: '自我介绍',
    keyPhrases: ['I live in', 'city']
  },
  {
    id: 317,
    question: 'I want to be a teacher when I grow up.',
    chinese: '长大后我想当老师。',
    difficulty: 3,
    topic: '自我介绍',
    keyPhrases: ['want to be', 'teacher', 'grow up']
  },
  {
    id: 318,
    question: 'I have a brother and a sister.',
    chinese: '我有一个哥哥和一个妹妹。',
    difficulty: 3,
    topic: '自我介绍',
    keyPhrases: ['have', 'brother', 'sister']
  },
  {
    id: 319,
    question: 'I go to school by bus.',
    chinese: '我坐公交车去上学。',
    difficulty: 3,
    topic: '自我介绍',
    keyPhrases: ['go to school', 'by bus']
  },
  {
    id: 320,
    question: 'I can play the piano.',
    chinese: '我会弹钢琴。',
    difficulty: 3,
    topic: '自我介绍',
    keyPhrases: ['can play', 'piano']
  },

  // 家庭（10个）
  {
    id: 321,
    question: 'This is my father. He is tall.',
    chinese: '这是我的父亲，他很高。',
    difficulty: 3,
    topic: '家庭',
    keyPhrases: ['this is', 'father', 'tall']
  },
  {
    id: 322,
    question: 'My mother is a doctor.',
    chinese: '我妈妈是一名医生。',
    difficulty: 3,
    topic: '家庭',
    keyPhrases: ['mother', 'doctor']
  },
  {
    id: 323,
    question: 'I love my family very much.',
    chinese: '我非常爱我的家人。',
    difficulty: 3,
    topic: '家庭',
    keyPhrases: ['love my family', 'very much']
  },
  {
    id: 324,
    question: 'My sister helps me with homework.',
    chinese: '我姐姐帮我做作业。',
    difficulty: 3,
    topic: '家庭',
    keyPhrases: ['sister', 'help', 'homework']
  },
  {
    id: 325,
    question: 'We have dinner together every evening.',
    chinese: '我们每天晚上一起吃晚餐。',
    difficulty: 3,
    topic: '家庭',
    keyPhrases: ['dinner together', 'every evening']
  },
  {
    id: 326,
    question: 'My grandmother tells us stories.',
    chinese: '我奶奶给我们讲故事。',
    difficulty: 3,
    topic: '家庭',
    keyPhrases: ['grandmother', 'tells stories']
  },
  {
    id: 327,
    question: 'My father works in a bank.',
    chinese: '我爸爸在银行工作。',
    difficulty: 3,
    topic: '家庭',
    keyPhrases: ['father', 'works in', 'bank']
  },
  {
    id: 328,
    question: 'My family has three members.',
    chinese: '我家有三口人。',
    difficulty: 3,
    topic: '家庭',
    keyPhrases: ['family', 'three members']
  },
  {
    id: 329,
    question: 'We visit our grandparents on Sunday.',
    chinese: '我们周日去看望祖父母。',
    difficulty: 3,
    topic: '家庭',
    keyPhrases: ['visit', 'grandparents', 'Sunday']
  },
  {
    id: 330,
    question: 'My parents love me very much.',
    chinese: '我的父母非常爱我。',
    difficulty: 3,
    topic: '家庭',
    keyPhrases: ['parents', 'love me']
  },

  // 学校生活（10个）
  {
    id: 331,
    question: 'I study English and Math at school.',
    chinese: '我在学校学习英语和数学。',
    difficulty: 3,
    topic: '学校生活',
    keyPhrases: ['study', 'English', 'Math']
  },
  {
    id: 332,
    question: 'Our teacher is very kind.',
    chinese: '我们的老师很和蔼。',
    difficulty: 3,
    topic: '学校生活',
    keyPhrases: ['teacher', 'kind']
  },
  {
    id: 333,
    question: 'We play games during break time.',
    chinese: '课间休息时我们玩游戏。',
    difficulty: 3,
    topic: '学校生活',
    keyPhrases: ['play games', 'break time']
  },
  {
    id: 334,
    question: 'School starts at eight o\'clock.',
    chinese: '学校八点开始上课。',
    difficulty: 3,
    topic: '学校生活',
    keyPhrases: ['school starts', 'eight o\'clock']
  },
  {
    id: 335,
    question: 'I have many friends at school.',
    chinese: '我在学校有很多朋友。',
    difficulty: 3,
    topic: '学校生活',
    keyPhrases: ['many friends', 'at school']
  },
  {
    id: 336,
    question: 'We read books in the library.',
    chinese: '我们在图书馆读书。',
    difficulty: 3,
    topic: '学校生活',
    keyPhrases: ['read books', 'library']
  },
  {
    id: 337,
    question: 'I eat lunch in the classroom.',
    chinese: '我在教室吃午餐。',
    difficulty: 3,
    topic: '学校生活',
    keyPhrases: ['eat lunch', 'classroom']
  },
  {
    id: 338,
    question: 'We learn new words every day.',
    chinese: '我们每天学习新单词。',
    difficulty: 3,
    topic: '学校生活',
    keyPhrases: ['learn', 'new words', 'every day']
  },
  {
    id: 339,
    question: 'Our school has a big playground.',
    chinese: '我们学校有个大操场。',
    difficulty: 3,
    topic: '学校生活',
    keyPhrases: ['school', 'big playground']
  },
  {
    id: 340,
    question: 'I do my homework after school.',
    chinese: '放学后我做作业。',
    difficulty: 3,
    topic: '学校生活',
    keyPhrases: ['do homework', 'after school']
  },

  // 兴趣爱好（10个）
  {
    id: 341,
    question: 'I like playing football.',
    chinese: '我喜欢踢足球。',
    difficulty: 3,
    topic: '兴趣爱好',
    keyPhrases: ['like playing', 'football']
  },
  {
    id: 342,
    question: 'My hobby is drawing pictures.',
    chinese: '我的爱好是画画。',
    difficulty: 3,
    topic: '兴趣爱好',
    keyPhrases: ['hobby', 'drawing pictures']
  },
  {
    id: 343,
    question: 'I enjoy listening to music.',
    chinese: '我喜欢听音乐。',
    difficulty: 3,
    topic: '兴趣爱好',
    keyPhrases: ['enjoy', 'listening to music']
  },
  {
    id: 344,
    question: 'Can you swim?',
    chinese: '你会游泳吗？',
    difficulty: 3,
    topic: '兴趣爱好',
    keyPhrases: ['can you', 'swim']
  },
  {
    id: 345,
    question: 'I ride my bike on weekends.',
    chinese: '我周末骑自行车。',
    difficulty: 3,
    topic: '兴趣爱好',
    keyPhrases: ['ride', 'bike', 'weekends']
  },
  {
    id: 346,
    question: 'We play games together.',
    chinese: '我们一起玩游戏。',
    difficulty: 3,
    topic: '兴趣爱好',
    keyPhrases: ['play games', 'together']
  },
  {
    id: 347,
    question: 'I watch cartoons on TV.',
    chinese: '我在电视上看动画片。',
    difficulty: 3,
    topic: '兴趣爱好',
    keyPhrases: ['watch cartoons', 'TV']
  },
  {
    id: 348,
    question: 'My favorite sport is basketball.',
    chinese: '我最喜欢的运动是篮球。',
    difficulty: 3,
    topic: '兴趣爱好',
    keyPhrases: ['favorite sport', 'basketball']
  },
  {
    id: 349,
    question: 'I like singing and dancing.',
    chinese: '我喜欢唱歌和跳舞。',
    difficulty: 3,
    topic: '兴趣爱好',
    keyPhrases: ['singing', 'dancing']
  },
  {
    id: 350,
    question: 'Reading is my favorite activity.',
    chinese: '阅读是我最喜欢的活动。',
    difficulty: 3,
    topic: '兴趣爱好',
    keyPhrases: ['reading', 'favorite activity']
  },
];

// 四年级口语（进阶对话 - 55个）
export const grade4Speaking: SpeakingPractice[] = [
  // 日常交流（12个）
  {
    id: 401,
    question: 'What did you do yesterday?',
    chinese: '你昨天做什么了？',
    difficulty: 4,
    topic: '日常交流',
    keyPhrases: ['what did you do', 'yesterday']
  },
  {
    id: 402,
    question: 'What are you going to do tomorrow?',
    chinese: '你明天打算做什么？',
    difficulty: 4,
    topic: '日常交流',
    keyPhrases: ['what are you going to do', 'tomorrow']
  },
  {
    id: 403,
    question: 'Where did you go last weekend?',
    chinese: '你上周末去哪儿了？',
    difficulty: 4,
    topic: '日常交流',
    keyPhrases: ['where did you go', 'last weekend']
  },
  {
    id: 404,
    question: 'How do you go to school every day?',
    chinese: '你每天怎么去上学？',
    difficulty: 4,
    topic: '日常交流',
    keyPhrases: ['how do you go to school', 'every day']
  },
  {
    id: 405,
    question: 'What time do you get up?',
    chinese: '你几点起床？',
    difficulty: 4,
    topic: '日常交流',
    keyPhrases: ['what time', 'get up']
  },
  {
    id: 406,
    question: 'When is your birthday?',
    chinese: '你的生日是什么时候？',
    difficulty: 4,
    topic: '日常交流',
    keyPhrases: ['when is your birthday']
  },
  {
    id: 407,
    question: 'How many people are there in your family?',
    chinese: '你家里有多少人？',
    difficulty: 4,
    topic: '日常交流',
    keyPhrases: ['how many', 'people', 'family']
  },
  {
    id: 408,
    question: 'What does your father do?',
    chinese: '你爸爸是做什么的？',
    difficulty: 4,
    topic: '日常交流',
    keyPhrases: ['what does', 'father do']
  },
  {
    id: 409,
    question: 'Where is your school?',
    chinese: '你的学校在哪里？',
    difficulty: 4,
    topic: '日常交流',
    keyPhrases: ['where is', 'your school']
  },
  {
    id: 410,
    question: 'How often do you read books?',
    chinese: '你多久读一次书？',
    difficulty: 4,
    topic: '日常交流',
    keyPhrases: ['how often', 'read books']
  },
  {
    id: 411,
    question: 'Why are you so happy today?',
    chinese: '你今天为什么这么开心？',
    difficulty: 4,
    topic: '日常交流',
    keyPhrases: ['why', 'so happy']
  },
  {
    id: 412,
    question: 'Which season do you like best?',
    chinese: '你最喜欢哪个季节？',
    difficulty: 4,
    topic: '日常交流',
    keyPhrases: ['which season', 'like best']
  },

  // 学校话题（12个）
  {
    id: 413,
    question: 'What is your favorite subject?',
    chinese: '你最喜欢的科目是什么？',
    difficulty: 4,
    topic: '学校话题',
    keyPhrases: ['favorite subject']
  },
  {
    id: 414,
    question: 'I like English because it is interesting.',
    chinese: '我喜欢英语因为它很有趣。',
    difficulty: 4,
    topic: '学校话题',
    keyPhrases: ['like', 'because', 'interesting']
  },
  {
    id: 415,
    question: 'We have six classes every day.',
    chinese: '我们每天上六节课。',
    difficulty: 4,
    topic: '学校话题',
    keyPhrases: ['six classes', 'every day']
  },
  {
    id: 416,
    question: 'Our classroom is on the third floor.',
    chinese: '我们的教室在三层。',
    difficulty: 4,
    topic: '学校话题',
    keyPhrases: ['classroom', 'third floor']
  },
  {
    id: 417,
    question: 'I sit next to my best friend.',
    chinese: '我坐在我最好的朋友旁边。',
    difficulty: 4,
    topic: '学校话题',
    keyPhrases: ['sit next to', 'best friend']
  },
  {
    id: 418,
    question: 'The teacher is very strict but kind.',
    chinese: '老师很严格但很和蔼。',
    difficulty: 4,
    topic: '学校话题',
    keyPhrases: ['strict but kind']
  },
  {
    id: 419,
    question: 'We have PE class on Monday and Friday.',
    chinese: '我们周一和周五有体育课。',
    difficulty: 4,
    topic: '学校话题',
    keyPhrases: ['PE class', 'Monday', 'Friday']
  },
  {
    id: 420,
    question: 'I am good at mathematics.',
    chinese: '我擅长数学。',
    difficulty: 4,
    topic: '学校话题',
    keyPhrases: ['good at', 'mathematics']
  },
  {
    id: 421,
    question: 'We learn about plants in science class.',
    chinese: '我们在科学课学习关于植物的知识。',
    difficulty: 4,
    topic: '学校话题',
    keyPhrases: ['learn about', 'plants', 'science class']
  },
  {
    id: 422,
    question: 'School finishes at four o\'clock.',
    chinese: '学校四点放学。',
    difficulty: 4,
    topic: '学校话题',
    keyPhrases: ['school finishes', 'four o\'clock']
  },
  {
    id: 423,
    question: 'I borrow books from the school library.',
    chinese: '我从学校图书馆借书。',
    difficulty: 4,
    topic: '学校话题',
    keyPhrases: ['borrow books', 'library']
  },
  {
    id: 424,
    question: 'We have a big sports meeting every year.',
    chinese: '我们每年都有大型运动会。',
    difficulty: 4,
    topic: '学校话题',
    keyPhrases: ['sports meeting', 'every year']
  },

  // 日常生活（12个）
  {
    id: 425,
    question: 'What do you usually do on weekends?',
    chinese: '你周末通常做什么？',
    difficulty: 4,
    topic: '日常生活',
    keyPhrases: ['usually do', 'weekends']
  },
  {
    id: 426,
    question: 'I help my mother with housework.',
    chinese: '我帮妈妈做家务。',
    difficulty: 4,
    topic: '日常生活',
    keyPhrases: ['help with', 'housework']
  },
  {
    id: 427,
    question: 'We have dinner at seven o\'clock.',
    chinese: '我们七点吃晚餐。',
    difficulty: 4,
    topic: '日常生活',
    keyPhrases: ['dinner', 'seven o\'clock']
  },
  {
    id: 428,
    question: 'I go to bed at nine thirty.',
    chinese: '我九点半上床睡觉。',
    difficulty: 4,
    topic: '日常生活',
    keyPhrases: ['go to bed', 'nine thirty']
  },
  {
    id: 429,
    question: 'My mother cooks delicious food.',
    chinese: '我妈妈做美味的食物。',
    difficulty: 4,
    topic: '日常生活',
    keyPhrases: ['cooks', 'delicious food']
  },
  {
    id: 430,
    question: 'We watch TV after dinner.',
    chinese: '晚餐后我们看电视。',
    difficulty: 4,
    topic: '日常生活',
    keyPhrases: ['watch TV', 'after dinner']
  },
  {
    id: 431,
    question: 'I wash my face and brush my teeth.',
    chinese: '我洗脸刷牙。',
    difficulty: 4,
    topic: '日常生活',
    keyPhrases: ['wash face', 'brush teeth']
  },
  {
    id: 432,
    question: 'My room is small but clean.',
    chinese: '我的房间小但很干净。',
    difficulty: 4,
    topic: '日常生活',
    keyPhrases: ['small but clean']
  },
  {
    id: 433,
    question: 'I clean my room on Saturday.',
    chinese: '我周六打扫房间。',
    difficulty: 4,
    topic: '日常生活',
    keyPhrases: ['clean my room', 'Saturday']
  },
  {
    id: 434,
    question: 'We go shopping on Sundays.',
    chinese: '我们周日去购物。',
    difficulty: 4,
    topic: '日常生活',
    keyPhrases: ['go shopping', 'Sundays']
  },
  {
    id: 435,
    question: 'I get up at six every morning.',
    chinese: '我每天早上六点起床。',
    difficulty: 4,
    topic: '日常生活',
    keyPhrases: ['get up', 'six', 'morning']
  },
  {
    id: 436,
    question: 'My father drives us to school.',
    chinese: '我爸爸开车送我们去学校。',
    difficulty: 4,
    topic: '日常生活',
    keyPhrases: ['drives us to school']
  },

  // 兴趣爱好（12个）
  {
    id: 437,
    question: 'What is your hobby?',
    chinese: '你的爱好是什么？',
    difficulty: 4,
    topic: '兴趣爱好',
    keyPhrases: ['hobby']
  },
  {
    id: 438,
    question: 'I like collecting stamps.',
    chinese: '我喜欢集邮。',
    difficulty: 4,
    topic: '兴趣爱好',
    keyPhrases: ['collecting stamps']
  },
  {
    id: 439,
    question: 'My hobby is taking photos.',
    chinese: '我的爱好是拍照。',
    difficulty: 4,
    topic: '兴趣爱好',
    keyPhrases: ['taking photos']
  },
  {
    id: 440,
    question: 'We play chess together.',
    chinese: '我们一起下棋。',
    difficulty: 4,
    topic: '兴趣爱好',
    keyPhrases: ['play chess', 'together']
  },
  {
    id: 441,
    question: 'I learn to play the guitar.',
    chinese: '我学习弹吉他。',
    difficulty: 4,
    topic: '兴趣爱好',
    keyPhrases: ['learn to play', 'guitar']
  },
  {
    id: 442,
    question: 'She is good at dancing.',
    chinese: '她擅长跳舞。',
    difficulty: 4,
    topic: '兴趣爱好',
    keyPhrases: ['good at', 'dancing']
  },
  {
    id: 443,
    question: 'I enjoy reading storybooks.',
    chinese: '我喜欢读故事书。',
    difficulty: 4,
    topic: '兴趣爱好',
    keyPhrases: ['enjoy reading', 'storybooks']
  },
  {
    id: 444,
    question: 'We have fun at the park.',
    chinese: '我们在公园玩得很开心。',
    difficulty: 4,
    topic: '兴趣爱好',
    keyPhrases: ['have fun', 'park']
  },
  {
    id: 445,
    question: 'I like to swim in summer.',
    chinese: '我喜欢夏天游泳。',
    difficulty: 4,
    topic: '兴趣爱好',
    keyPhrases: ['swim', 'summer']
  },
  {
    id: 446,
    question: 'He runs fast in the race.',
    chinese: '他在比赛中跑得很快。',
    difficulty: 4,
    topic: '兴趣爱好',
    keyPhrases: ['runs fast', 'race']
  },
  {
    id: 447,
    question: 'We like to sing songs.',
    chinese: '我们喜欢唱歌。',
    difficulty: 4,
    topic: '兴趣爱好',
    keyPhrases: ['sing songs']
  },
  {
    id: 448,
    question: 'My brother likes playing basketball.',
    chinese: '我哥哥喜欢打篮球。',
    difficulty: 4,
    topic: '兴趣爱好',
    keyPhrases: ['likes playing', 'basketball']
  },

  // 季节与天气（7个）
  {
    id: 449,
    question: 'Spring is warm and beautiful.',
    chinese: '春天温暖而美丽。',
    difficulty: 4,
    topic: '季节与天气',
    keyPhrases: ['spring', 'warm', 'beautiful']
  },
  {
    id: 450,
    question: 'Summer is hot, but I can swim.',
    chinese: '夏天很热，但我可以游泳。',
    difficulty: 4,
    topic: '季节与天气',
    keyPhrases: ['summer', 'hot', 'swim']
  },
  {
    id: 451,
    question: 'Autumn is cool and windy.',
    chinese: '秋天凉爽多风。',
    difficulty: 4,
    topic: '季节与天气',
    keyPhrases: ['autumn', 'cool', 'windy']
  },
  {
    id: 452,
    question: 'Winter is cold and snowy.',
    chinese: '冬天寒冷多雪。',
    difficulty: 4,
    topic: '季节与天气',
    keyPhrases: ['winter', 'cold', 'snowy']
  },
  {
    id: 453,
    question: 'It is raining today.',
    chinese: '今天在下雨。',
    difficulty: 4,
    topic: '季节与天气',
    keyPhrases: ['raining', 'today']
  },
  {
    id: 454,
    question: 'The sun is shining bright.',
    chinese: '太阳照耀得很亮。',
    difficulty: 4,
    topic: '季节与天气',
    keyPhrases: ['sun', 'shining', 'bright']
  },
  {
    id: 455,
    question: 'What is the weather like?',
    chinese: '天气怎么样？',
    difficulty: 4,
    topic: '季节与天气',
    keyPhrases: ['what is the weather like']
  },
];

// 五年级口语（中级对话 - 60个）
export const grade5Speaking: SpeakingPractice[] = [
  // 学习与成长（12个）
  {
    id: 501,
    question: 'How can I improve my English?',
    chinese: '我怎样才能提高我的英语？',
    difficulty: 5,
    topic: '学习与成长',
    keyPhrases: ['improve', 'English']
  },
  {
    id: 502,
    question: 'Practice makes perfect.',
    chinese: '熟能生巧。',
    difficulty: 5,
    topic: '学习与成长',
    keyPhrases: ['practice', 'perfect']
  },
  {
    id: 503,
    question: 'I study hard every day.',
    chinese: '我每天努力学习。',
    difficulty: 5,
    topic: '学习与成长',
    keyPhrases: ['study hard', 'every day']
  },
  {
    id: 504,
    question: 'Reading helps me learn new words.',
    chinese: '阅读帮助我学习新单词。',
    difficulty: 5,
    topic: '学习与成长',
    keyPhrases: ['reading', 'new words']
  },
  {
    id: 505,
    question: 'I want to get good grades.',
    chinese: '我想取得好成绩。',
    difficulty: 5,
    topic: '学习与成长',
    keyPhrases: ['get good grades']
  },
  {
    id: 506,
    question: 'My teacher encourages me.',
    chinese: '我的老师鼓励我。',
    difficulty: 5,
    topic: '学习与成长',
    keyPhrases: ['encourages', 'me']
  },
  {
    id: 507,
    question: 'We learn by doing.',
    chinese: '我们在实践中学习。',
    difficulty: 5,
    topic: '学习与成长',
    keyPhrases: ['learn by doing']
  },
  {
    id: 508,
    question: 'I prepare for the test.',
    chinese: '我为考试做准备。',
    difficulty: 5,
    topic: '学习与成长',
    keyPhrases: ['prepare for', 'test']
  },
  {
    id: 509,
    question: 'Mistakes help us learn.',
    chinese: '错误帮助我们学习。',
    difficulty: 5,
    topic: '学习与成长',
    keyPhrases: ['mistakes', 'learn']
  },
  {
    id: 510,
    question: 'I listen carefully in class.',
    chinese: '我在课堂上认真听讲。',
    difficulty: 5,
    topic: '学习与成长',
    keyPhrases: ['listen carefully', 'in class']
  },
  {
    id: 511,
    question: 'We help each other with homework.',
    chinese: '我们互相帮助做作业。',
    difficulty: 5,
    topic: '学习与成长',
    keyPhrases: ['help each other', 'homework']
  },
  {
    id: 512,
    question: 'Knowledge is power.',
    chinese: '知识就是力量。',
    difficulty: 5,
    topic: '学习与成长',
    keyPhrases: ['knowledge', 'power']
  },

  // 旅行与出行（12个）
  {
    id: 513,
    question: 'Where would you like to travel?',
    chinese: '你想去哪里旅行？',
    difficulty: 5,
    topic: '旅行与出行',
    keyPhrases: ['would like to travel']
  },
  {
    id: 514,
    question: 'I want to visit Beijing.',
    chinese: '我想去北京。',
    difficulty: 5,
    topic: '旅行与出行',
    keyPhrases: ['want to visit', 'Beijing']
  },
  {
    id: 515,
    question: 'Traveling is fun and educational.',
    chinese: '旅行既有趣又有教育意义。',
    difficulty: 5,
    topic: '旅行与出行',
    keyPhrases: ['traveling', 'fun', 'educational']
  },
  {
    id: 516,
    question: 'We went on a trip last summer.',
    chinese: '去年夏天我们去旅行了。',
    difficulty: 5,
    topic: '旅行与出行',
    keyPhrases: ['went on a trip', 'last summer']
  },
  {
    id: 517,
    question: 'How do you go to work?',
    chinese: '你怎么去上班？',
    difficulty: 5,
    topic: '旅行与出行',
    keyPhrases: ['how do you go to work']
  },
  {
    id: 518,
    question: 'I travel by train.',
    chinese: '我坐火车旅行。',
    difficulty: 5,
    topic: '旅行与出行',
    keyPhrases: ['travel by train']
  },
  {
    id: 519,
    question: 'We visited the museum.',
    chinese: '我们参观了博物馆。',
    difficulty: 5,
    topic: '旅行与出行',
    keyPhrases: ['visited', 'museum']
  },
  {
    id: 520,
    question: 'The journey was wonderful.',
    chinese: '这段旅程很精彩。',
    difficulty: 5,
    topic: '旅行与出行',
    keyPhrases: ['journey', 'wonderful']
  },
  {
    id: 521,
    question: 'I took many photos.',
    chinese: '我拍了很多照片。',
    difficulty: 5,
    topic: '旅行与出行',
    keyPhrases: ['took many photos']
  },
  {
    id: 522,
    question: 'We stayed in a hotel.',
    chinese: '我们住在酒店。',
    difficulty: 5,
    topic: '旅行与出行',
    keyPhrases: ['stayed', 'hotel']
  },
  {
    id: 523,
    question: 'I bought some souvenirs.',
    chinese: '我买了一些纪念品。',
    difficulty: 5,
    topic: '旅行与出行',
    keyPhrases: ['bought', 'souvenirs']
  },
  {
    id: 524,
    question: 'We came back yesterday.',
    chinese: '我们昨天回来的。',
    difficulty: 5,
    topic: '旅行与出行',
    keyPhrases: ['came back', 'yesterday']
  },

  // 情绪与感受（12个）
  {
    id: 525,
    question: 'How do you feel today?',
    chinese: '你今天感觉怎么样？',
    difficulty: 5,
    topic: '情绪与感受',
    keyPhrases: ['how do you feel']
  },
  {
    id: 526,
    question: 'I feel very excited.',
    chinese: '我感到很兴奋。',
    difficulty: 5,
    topic: '情绪与感受',
    keyPhrases: ['feel', 'excited']
  },
  {
    id: 527,
    question: 'I am nervous about the test.',
    chinese: '我对考试感到紧张。',
    difficulty: 5,
    topic: '情绪与感受',
    keyPhrases: ['nervous about', 'test']
  },
  {
    id: 528,
    question: 'He feels confident.',
    chinese: '他感到自信。',
    difficulty: 5,
    topic: '情绪与感受',
    keyPhrases: ['feels', 'confident']
  },
  {
    id: 529,
    question: 'Why are you so worried?',
    chinese: '你为什么这么担心？',
    difficulty: 5,
    topic: '情绪与感受',
    keyPhrases: ['so worried']
  },
  {
    id: 530,
    question: 'She is sad today.',
    chinese: '她今天很伤心。',
    difficulty: 5,
    topic: '情绪与感受',
    keyPhrases: ['sad', 'today']
  },
  {
    id: 531,
    question: 'I feel tired after the game.',
    chinese: '比赛后我感到累。',
    difficulty: 5,
    topic: '情绪与感受',
    keyPhrases: ['feel tired', 'after the game']
  },
  {
    id: 532,
    question: 'We are proud of our school.',
    chinese: '我们为我们的学校感到骄傲。',
    difficulty: 5,
    topic: '情绪与感受',
    keyPhrases: ['proud of', 'school']
  },
  {
    id: 533,
    question: 'I was surprised by the news.',
    chinese: '我对这个消息感到惊讶。',
    difficulty: 5,
    topic: '情绪与感受',
    keyPhrases: ['surprised by', 'news']
  },
  {
    id: 534,
    question: 'She feels happy about her grade.',
    chinese: '她对她的成绩感到开心。',
    difficulty: 5,
    topic: '情绪与感受',
    keyPhrases: ['feels happy about', 'grade']
  },
  {
    id: 535,
    question: 'I am bored on rainy days.',
    chinese: '下雨天我感到无聊。',
    difficulty: 5,
    topic: '情绪与感受',
    keyPhrases: ['bored', 'rainy days']
  },
  {
    id: 536,
    question: 'He was scared of the dark.',
    chinese: '他害怕黑暗。',
    difficulty: 5,
    topic: '情绪与感受',
    keyPhrases: ['scared of', 'dark']
  },

  // 社交与交流（12个）
  {
    id: 537,
    question: 'Can you help me, please?',
    chinese: '你能帮我吗？',
    difficulty: 5,
    topic: '社交与交流',
    keyPhrases: ['can you help me', 'please']
  },
  {
    id: 538,
    question: 'Would you like to join us?',
    chinese: '你想加入我们吗？',
    difficulty: 5,
    topic: '社交与交流',
    keyPhrases: ['would you like to join us']
  },
  {
    id: 539,
    question: 'I agree with you.',
    chinese: '我同意你的看法。',
    difficulty: 5,
    topic: '社交与交流',
    keyPhrases: ['agree with you']
  },
  {
    id: 540,
    question: 'Sorry, I cannot help you.',
    chinese: '抱歉，我不能帮你。',
    difficulty: 5,
    topic: '社交与交流',
    keyPhrases: ['sorry', 'cannot help you']
  },
  {
    id: 541,
    question: 'Thank you very much.',
    chinese: '非常感谢。',
    difficulty: 5,
    topic: '社交与交流',
    keyPhrases: ['thank you very much']
  },
  {
    id: 542,
    question: 'You are welcome.',
    chinese: '不客气。',
    difficulty: 5,
    topic: '社交与交流',
    keyPhrases: ['you are welcome']
  },
  {
    id: 543,
    question: 'Excuse me, where is the restroom?',
    chinese: '请问，洗手间在哪里？',
    difficulty: 5,
    topic: '社交与交流',
    keyPhrases: ['excuse me', 'restroom']
  },
  {
    id: 544,
    question: 'I am sorry for being late.',
    chinese: '很抱歉我迟到了。',
    difficulty: 5,
    topic: '社交与交流',
    keyPhrases: ['sorry for being late']
  },
  {
    id: 545,
    question: 'Congratulations on your success!',
    chinese: '祝贺你的成功！',
    difficulty: 5,
    topic: '社交与交流',
    keyPhrases: ['congratulations', 'success']
  },
  {
    id: 546,
    question: 'I suggest we go by bus.',
    chinese: '我建议我们坐公交去。',
    difficulty: 5,
    topic: '社交与交流',
    keyPhrases: ['suggest', 'go by bus']
  },
  {
    id: 547,
    question: 'Let us discuss the problem.',
    chinese: '让我们讨论这个问题。',
    difficulty: 5,
    topic: '社交与交流',
    keyPhrases: ['let us discuss', 'problem']
  },
  {
    id: 548,
    question: 'Please give me some advice.',
    chinese: '请给我一些建议。',
    difficulty: 5,
    topic: '社交与交流',
    keyPhrases: ['give me', 'advice']
  },

  // 健康与生活（12个）
  {
    id: 549,
    question: 'How do you stay healthy?',
    chinese: '你如何保持健康？',
    difficulty: 5,
    topic: '健康与生活',
    keyPhrases: ['stay healthy']
  },
  {
    id: 550,
    question: 'Exercise is good for your health.',
    chinese: '锻炼对你的健康有好处。',
    difficulty: 5,
    topic: '健康与生活',
    keyPhrases: ['exercise', 'good for health']
  },
  {
    id: 551,
    question: 'I eat fruit every day.',
    chinese: '我每天都吃水果。',
    difficulty: 5,
    topic: '健康与生活',
    keyPhrases: ['eat fruit', 'every day']
  },
  {
    id: 552,
    question: 'We should wash our hands often.',
    chinese: '我们应该经常洗手。',
    difficulty: 5,
    topic: '健康与生活',
    keyPhrases: ['wash hands', 'often']
  },
  {
    id: 553,
    question: 'Get enough sleep at night.',
    chinese: '晚上要获得足够的睡眠。',
    difficulty: 5,
    topic: '健康与生活',
    keyPhrases: ['enough sleep', 'at night']
  },
  {
    id: 554,
    question: 'Drink plenty of water.',
    chinese: '多喝水。',
    difficulty: 5,
    topic: '健康与生活',
    keyPhrases: ['drink', 'plenty of water']
  },
  {
    id: 555,
    question: 'I feel sick today.',
    chinese: '我今天感到不舒服。',
    difficulty: 5,
    topic: '健康与生活',
    keyPhrases: ['feel sick', 'today']
  },
  {
    id: 556,
    question: 'You should see a doctor.',
    chinese: '你应该去看医生。',
    difficulty: 5,
    topic: '健康与生活',
    keyPhrases: ['should see a doctor']
  },
  {
    id: 557,
    question: 'Take care of yourself.',
    chinese: '照顾好你自己。',
    difficulty: 5,
    topic: '健康与生活',
    keyPhrases: ['take care of yourself']
  },
  {
    id: 558,
    question: 'I have a headache.',
    chinese: '我头痛。',
    difficulty: 5,
    topic: '健康与生活',
    keyPhrases: ['have a headache']
  },
  {
    id: 559,
    question: 'Rest well and get better soon.',
    chinese: '好好休息，早日康复。',
    difficulty: 5,
    topic: '健康与生活',
    keyPhrases: ['rest well', 'get better']
  },
  {
    id: 560,
    question: 'Vegetables are good for you.',
    chinese: '蔬菜对你有好处。',
    difficulty: 5,
    topic: '健康与生活',
    keyPhrases: ['vegetables', 'good for you']
  },
];

// 六年级口语（高级对话 - 60个）
export const grade6Speaking: SpeakingPractice[] = [
  // 学术与职业（12个）
  {
    id: 601,
    question: 'What do you want to be in the future?',
    chinese: '你未来想成为什么样的人？',
    difficulty: 6,
    topic: '学术与职业',
    keyPhrases: ['want to be', 'in the future']
  },
  {
    id: 602,
    question: 'I want to be a scientist.',
    chinese: '我想成为一名科学家。',
    difficulty: 6,
    topic: '学术与职业',
    keyPhrases: ['want to be', 'scientist']
  },
  {
    id: 603,
    question: 'What is your dream job?',
    chinese: '你的梦想工作是什么？',
    difficulty: 6,
    topic: '学术与职业',
    keyPhrases: ['dream job']
  },
  {
    id: 604,
    question: 'We need to study hard for our future.',
    chinese: '我们需要为未来努力学习。',
    difficulty: 6,
    topic: '学术与职业',
    keyPhrases: ['study hard', 'for our future']
  },
  {
    id: 605,
    question: 'I want to help people in need.',
    chinese: '我想帮助需要帮助的人。',
    difficulty: 6,
    topic: '学术与职业',
    keyPhrases: ['help people', 'in need']
  },
  {
    id: 606,
    question: 'What subjects are you good at?',
    chinese: '你擅长哪些科目？',
    difficulty: 6,
    topic: '学术与职业',
    keyPhrases: ['good at', 'subjects']
  },
  {
    id: 607,
    question: 'I am interested in technology.',
    chinese: '我对科技感兴趣。',
    difficulty: 6,
    topic: '学术与职业',
    keyPhrases: ['interested in', 'technology']
  },
  {
    id: 608,
    question: 'Science helps us understand the world.',
    chinese: '科学帮助我们理解世界。',
    difficulty: 6,
    topic: '学术与职业',
    keyPhrases: ['science', 'understand the world']
  },
  {
    id: 609,
    question: 'We should protect our environment.',
    chinese: '我们应该保护我们的环境。',
    difficulty: 6,
    topic: '学术与职业',
    keyPhrases: ['protect', 'environment']
  },
  {
    id: 610,
    question: 'What is important for success?',
    chinese: '成功最重要的是什么？',
    difficulty: 6,
    topic: '学术与职业',
    keyPhrases: ['important for success']
  },
  {
    id: 611,
    question: 'Hard work and perseverance lead to success.',
    chinese: '努力和坚持带来成功。',
    difficulty: 6,
    topic: '学术与职业',
    keyPhrases: ['hard work', 'perseverance', 'success']
  },
  {
    id: 612,
    question: 'We need to be responsible.',
    chinese: '我们需要负责任。',
    difficulty: 6,
    topic: '学术与职业',
    keyPhrases: ['need to be', 'responsible']
  },

  // 社会与问题（12个）
  {
    id: 613,
    question: 'What can we do to protect the environment?',
    chinese: '我们能做些什么来保护环境？',
    difficulty: 6,
    topic: '社会与问题',
    keyPhrases: ['protect the environment']
  },
  {
    id: 614,
    question: 'We should recycle paper and plastic.',
    chinese: '我们应该回收纸张和塑料。',
    difficulty: 6,
    topic: '社会与问题',
    keyPhrases: ['recycle', 'paper', 'plastic']
  },
  {
    id: 615,
    question: 'Pollution is a serious problem.',
    chinese: '污染是一个严重的问题。',
    difficulty: 6,
    topic: '社会与问题',
    keyPhrases: ['pollution', 'serious problem']
  },
  {
    id: 616,
    question: 'Climate change affects us all.',
    chinese: '气候变化影响我们所有人。',
    difficulty: 6,
    topic: '社会与问题',
    keyPhrases: ['climate change', 'affects']
  },
  {
    id: 617,
    question: 'We should save energy.',
    chinese: '我们应该节约能源。',
    difficulty: 6,
    topic: '社会与问题',
    keyPhrases: ['save energy']
  },
  {
    id: 618,
    question: 'Everyone can make a difference.',
    chinese: '每个人都能带来改变。',
    difficulty: 6,
    topic: '社会与问题',
    keyPhrases: ['make a difference']
  },
  {
    id: 619,
    question: 'We need to take care of nature.',
    chinese: '我们需要照顾大自然。',
    difficulty: 6,
    topic: '社会与问题',
    keyPhrases: ['take care of nature']
  },
  {
    id: 620,
    question: 'How can we help the poor?',
    chinese: '我们如何帮助穷人？',
    difficulty: 6,
    topic: '社会与问题',
    keyPhrases: ['help the poor']
  },
  {
    id: 621,
    question: 'Donation is a good way to help.',
    chinese: '捐款是帮助的一种好方式。',
    difficulty: 6,
    topic: '社会与问题',
    keyPhrases: ['donation', 'help']
  },
  {
    id: 622,
    question: 'Education is important for everyone.',
    chinese: '教育对每个人都很重要。',
    difficulty: 6,
    topic: '社会与问题',
    keyPhrases: ['education', 'important', 'everyone']
  },
  {
    id: 623,
    question: 'We should respect others.',
    chinese: '我们应该尊重他人。',
    difficulty: 6,
    topic: '社会与问题',
    keyPhrases: ['respect others']
  },
  {
    id: 624,
    question: 'Equality and justice are important.',
    chinese: '平等和正义很重要。',
    difficulty: 6,
    topic: '社会与问题',
    keyPhrases: ['equality', 'justice', 'important']
  },

  // 文化与艺术（12个）
  {
    id: 625,
    question: 'What is traditional Chinese culture?',
    chinese: '什么是中国传统文化？',
    difficulty: 6,
    topic: '文化与艺术',
    keyPhrases: ['traditional', 'Chinese culture']
  },
  {
    id: 626,
    question: 'I love Chinese festivals.',
    chinese: '我喜欢中国的节日。',
    difficulty: 6,
    topic: '文化与艺术',
    keyPhrases: ['Chinese festivals']
  },
  {
    id: 627,
    question: 'We celebrate Spring Festival every year.',
    chinese: '我们每年庆祝春节。',
    difficulty: 6,
    topic: '文化与艺术',
    keyPhrases: ['celebrate', 'Spring Festival']
  },
  {
    id: 628,
    question: 'Art makes the world beautiful.',
    chinese: '艺术让世界变得美丽。',
    difficulty: 6,
    topic: '文化与艺术',
    keyPhrases: ['art', 'beautiful']
  },
  {
    id: 629,
    question: 'Music connects people around the world.',
    chinese: '音乐连接世界各地的人们。',
    difficulty: 6,
    topic: '文化与艺术',
    keyPhrases: ['music', 'connects', 'around the world']
  },
  {
    id: 630,
    question: 'Literature helps us understand life.',
    chinese: '文学帮助我们理解生活。',
    difficulty: 6,
    topic: '文化与艺术',
    keyPhrases: ['literature', 'understand life']
  },
  {
    id: 631,
    question: 'I enjoy visiting museums.',
    chinese: '我喜欢参观博物馆。',
    difficulty: 6,
    topic: '文化与艺术',
    keyPhrases: ['enjoy visiting', 'museums']
  },
  {
    id: 632,
    question: 'History teaches us valuable lessons.',
    chinese: '历史给我们宝贵的教训。',
    difficulty: 6,
    topic: '文化与艺术',
    keyPhrases: ['history', 'valuable lessons']
  },
  {
    id: 633,
    question: 'Every culture has its beauty.',
    chinese: '每种文化都有它的美。',
    difficulty: 6,
    topic: '文化与艺术',
    keyPhrases: ['culture', 'beauty']
  },
  {
    id: 634,
    question: 'We should respect different cultures.',
    chinese: '我们应该尊重不同的文化。',
    difficulty: 6,
    topic: '文化与艺术',
    keyPhrases: ['respect different cultures']
  },
  {
    id: 635,
    question: 'Dance is a form of expression.',
    chinese: '舞蹈是一种表达方式。',
    difficulty: 6,
    topic: '文化与艺术',
    keyPhrases: ['dance', 'expression']
  },
  {
    id: 636,
    question: 'Photography captures special moments.',
    chinese: '摄影捕捉特别的时刻。',
    difficulty: 6,
    topic: '文化与艺术',
    keyPhrases: ['photography', 'captures', 'special moments']
  },

  // 科技与未来（12个）
  {
    id: 637,
    question: 'Technology changes our lives.',
    chinese: '技术改变了我们的生活。',
    difficulty: 6,
    topic: '科技与未来',
    keyPhrases: ['technology', 'changes', 'lives']
  },
  {
    id: 638,
    question: 'The internet helps us learn.',
    chinese: '互联网帮助我们学习。',
    difficulty: 6,
    topic: '科技与未来',
    keyPhrases: ['internet', 'helps learn']
  },
  {
    id: 639,
    question: 'Artificial intelligence is developing fast.',
    chinese: '人工智能发展得很快。',
    difficulty: 6,
    topic: '科技与未来',
    keyPhrases: ['artificial intelligence', 'developing']
  },
  {
    id: 640,
    question: 'Robots can do many things.',
    chinese: '机器人可以做很多事情。',
    difficulty: 6,
    topic: '科技与未来',
    keyPhrases: ['robots', 'can do']
  },
  {
    id: 641,
    question: 'We use smartphones every day.',
    chinese: '我们每天都用智能手机。',
    difficulty: 6,
    topic: '科技与未来',
    keyPhrases: ['smartphones', 'every day']
  },
  {
    id: 642,
    question: 'Social media connects people.',
    chinese: '社交媒体连接人们。',
    difficulty: 6,
    topic: '科技与未来',
    keyPhrases: ['social media', 'connects']
  },
  {
    id: 643,
    question: 'What will the future be like?',
    chinese: '未来会是什么样子？',
    difficulty: 6,
    topic: '科技与未来',
    keyPhrases: ['what will the future be like']
  },
  {
    id: 644,
    question: 'We should use technology wisely.',
    chinese: '我们应该明智地使用技术。',
    difficulty: 6,
    topic: '科技与未来',
    keyPhrases: ['use technology wisely']
  },
  {
    id: 645,
    question: 'Science makes our life better.',
    chinese: '科学让我们的生活更美好。',
    difficulty: 6,
    topic: '科技与未来',
    keyPhrases: ['science', 'life better']
  },
  {
    id: 646,
    question: 'Virtual reality is amazing.',
    chinese: '虚拟现实很神奇。',
    difficulty: 6,
    topic: '科技与未来',
    keyPhrases: ['virtual reality', 'amazing']
  },
  {
    id: 647,
    question: 'We need to learn about coding.',
    chinese: '我们需要学习编程。',
    difficulty: 6,
    topic: '科技与未来',
    keyPhrases: ['learn about coding']
  },
  {
    id: 648,
    question: 'The future is full of possibilities.',
    chinese: '未来充满可能性。',
    difficulty: 6,
    topic: '科技与未来',
    keyPhrases: ['future', 'possibilities']
  },

  // 价值观与人生（12个）
  {
    id: 649,
    question: 'What makes a person successful?',
    chinese: '什么让人成功？',
    difficulty: 6,
    topic: '价值观与人生',
    keyPhrases: ['makes a person', 'successful']
  },
  {
    id: 650,
    question: 'Honesty is very important.',
    chinese: '诚实非常重要。',
    difficulty: 6,
    topic: '价值观与人生',
    keyPhrases: ['honesty', 'important']
  },
  {
    id: 651,
    question: 'We should be kind to others.',
    chinese: '我们应该对他人友善。',
    difficulty: 6,
    topic: '价值观与人生',
    keyPhrases: ['be kind to others']
  },
  {
    id: 652,
    question: 'Friendship is precious.',
    chinese: '友谊是珍贵的。',
    difficulty: 6,
    topic: '价值观与人生',
    keyPhrases: ['friendship', 'precious']
  },
  {
    id: 653,
    question: 'Respect your parents.',
    chinese: '尊重你的父母。',
    difficulty: 6,
    topic: '价值观与人生',
    keyPhrases: ['respect your parents']
  },
  {
    id: 654,
    question: 'Teamwork brings success.',
    chinese: '团队合作带来成功。',
    difficulty: 6,
    topic: '价值观与人生',
    keyPhrases: ['teamwork', 'brings success']
  },
  {
    id: 655,
    question: 'We should have dreams.',
    chinese: '我们应该有梦想。',
    difficulty: 6,
    topic: '价值观与人生',
    keyPhrases: ['have dreams']
  },
  {
    id: 656,
    question: 'Never give up easily.',
    chinese: '不要轻易放弃。',
    difficulty: 6,
    topic: '价值观与人生',
    keyPhrases: ['never give up']
  },
  {
    id: 657,
    question: 'Be brave and confident.',
    chinese: '要勇敢自信。',
    difficulty: 6,
    topic: '价值观与人生',
    keyPhrases: ['be brave', 'confident']
  },
  {
    id: 658,
    question: 'Love and care make the world better.',
    chinese: '爱和关怀让世界更美好。',
    difficulty: 6,
    topic: '价值观与人生',
    keyPhrases: ['love and care', 'make world better']
  },
  {
    id: 659,
    question: 'Learn from your mistakes.',
    chinese: '从错误中学习。',
    difficulty: 6,
    topic: '价值观与人生',
    keyPhrases: ['learn from mistakes']
  },
  {
    id: 660,
    question: 'Appreciate what you have.',
    chinese: '珍惜你所拥有的。',
    difficulty: 6,
    topic: '价值观与人生',
    keyPhrases: ['appreciate', 'what you have']
  },
];

// 合并所有口语
export const allSpeaking: SpeakingPractice[] = [
  ...grade3Speaking,
  ...grade4Speaking,
  ...grade5Speaking,
  ...grade6Speaking,
];

// 获取指定年级的口语
export const getSpeakingByGrade = (grade: number): SpeakingPractice[] => {
  return allSpeaking.filter(practice => practice.difficulty === grade);
};
