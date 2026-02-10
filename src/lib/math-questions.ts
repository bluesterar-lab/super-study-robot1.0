type MathProblem = {
  id: number;
  grade: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

// 三年级题库
export const grade3Questions: MathProblem[] = [
  // 计算题 - 20道
  {
    id: 301,
    grade: 3,
    category: 'calculation',
    question: '25 + 37 = ?',
    options: ['52', '62', '72', '82'],
    correctAnswer: 1,
    explanation: '25 + 37 = 62，个位5+7=12进1，十位2+3+1=6'
  },
  {
    id: 302,
    grade: 3,
    category: 'calculation',
    question: '9 × 8 = ?',
    options: ['64', '72', '81', '63'],
    correctAnswer: 1,
    explanation: '9 × 8 = 72，九八七十二'
  },
  {
    id: 303,
    grade: 3,
    category: 'calculation',
    question: '100 - 25 = ?',
    options: ['65', '75', '85', '95'],
    correctAnswer: 1,
    explanation: '100 - 25 = 75'
  },
  {
    id: 304,
    grade: 3,
    category: 'calculation',
    question: '6 × 7 = ?',
    options: ['36', '42', '48', '54'],
    correctAnswer: 1,
    explanation: '6 × 7 = 42，六七四十二'
  },
  {
    id: 305,
    grade: 3,
    category: 'calculation',
    question: '45 + 28 = ?',
    options: ['63', '73', '83', '93'],
    correctAnswer: 1,
    explanation: '45 + 28 = 73'
  },
  {
    id: 306,
    grade: 3,
    category: 'calculation',
    question: '72 - 36 = ?',
    options: ['36', '46', '56', '66'],
    correctAnswer: 0,
    explanation: '72 - 36 = 36'
  },
  {
    id: 307,
    grade: 3,
    category: 'calculation',
    question: '5 × 9 = ?',
    options: ['40', '45', '50', '55'],
    correctAnswer: 1,
    explanation: '5 × 9 = 45，五九四十五'
  },
  {
    id: 308,
    grade: 3,
    category: 'calculation',
    question: '64 ÷ 8 = ?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    explanation: '64 ÷ 8 = 8，八八六十四'
  },
  {
    id: 309,
    grade: 3,
    category: 'calculation',
    question: '3 × 12 = ?',
    options: ['32', '34', '36', '38'],
    correctAnswer: 2,
    explanation: '3 × 12 = 36'
  },
  {
    id: 310,
    grade: 3,
    category: 'calculation',
    question: '81 ÷ 9 = ?',
    options: ['7', '8', '9', '10'],
    correctAnswer: 2,
    explanation: '81 ÷ 9 = 9，九九八十一'
  },
  {
    id: 311,
    grade: 3,
    category: 'calculation',
    question: '4 × 11 = ?',
    options: ['40', '42', '44', '46'],
    correctAnswer: 2,
    explanation: '4 × 11 = 44'
  },
  {
    id: 312,
    grade: 3,
    category: 'calculation',
    question: '56 ÷ 7 = ?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    explanation: '56 ÷ 7 = 8，七八五十六'
  },
  {
    id: 313,
    grade: 3,
    category: 'calculation',
    question: '24 × 3 = ?',
    options: ['60', '66', '72', '78'],
    correctAnswer: 2,
    explanation: '24 × 3 = 72'
  },
  {
    id: 314,
    grade: 3,
    category: 'calculation',
    question: '48 ÷ 6 = ?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    explanation: '48 ÷ 6 = 8，六八四十八'
  },
  {
    id: 315,
    grade: 3,
    category: 'calculation',
    question: '35 + 45 = ?',
    options: ['70', '75', '80', '85'],
    correctAnswer: 2,
    explanation: '35 + 45 = 80'
  },
  {
    id: 316,
    grade: 3,
    category: 'calculation',
    question: '90 - 27 = ?',
    options: ['53', '63', '73', '83'],
    correctAnswer: 1,
    explanation: '90 - 27 = 63'
  },
  {
    id: 317,
    grade: 3,
    category: 'calculation',
    question: '7 × 8 = ?',
    options: ['48', '54', '56', '64'],
    correctAnswer: 2,
    explanation: '7 × 8 = 56，七八五十六'
  },
  {
    id: 318,
    grade: 3,
    category: 'calculation',
    question: '49 ÷ 7 = ?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    explanation: '49 ÷ 7 = 7，七七四十九'
  },
  {
    id: 319,
    grade: 3,
    category: 'calculation',
    question: '18 × 4 = ?',
    options: ['64', '68', '72', '76'],
    correctAnswer: 2,
    explanation: '18 × 4 = 72'
  },
  {
    id: 320,
    grade: 3,
    category: 'calculation',
    question: '63 ÷ 9 = ?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    explanation: '63 ÷ 9 = 7，七九六十三'
  },

  // 应用题 - 20道
  {
    id: 321,
    grade: 3,
    category: 'application',
    question: '小明有15个苹果，吃了3个，还剩多少个？',
    options: ['12', '13', '18', '11'],
    correctAnswer: 0,
    explanation: '15 - 3 = 12个'
  },
  {
    id: 322,
    grade: 3,
    category: 'application',
    question: '一本书有240页，小明每天看30页，几天能看完？',
    options: ['6天', '7天', '8天', '9天'],
    correctAnswer: 2,
    explanation: '240 ÷ 30 = 8天'
  },
  {
    id: 323,
    grade: 3,
    category: 'application',
    question: '小红买了5支铅笔，每支2元，一共花了多少钱？',
    options: ['8元', '10元', '12元', '15元'],
    correctAnswer: 1,
    explanation: '5 × 2 = 10元'
  },
  {
    id: 324,
    grade: 3,
    category: 'application',
    question: '停车场有48辆车，开走了12辆，还剩多少辆？',
    options: ['30', '32', '36', '40'],
    correctAnswer: 2,
    explanation: '48 - 12 = 36辆'
  },
  {
    id: 325,
    grade: 3,
    category: 'application',
    question: '果园里有苹果树45棵，梨树的棵数是苹果树的3倍，梨树有多少棵？',
    options: ['125', '135', '140', '145'],
    correctAnswer: 1,
    explanation: '45 × 3 = 135棵'
  },
  {
    id: 326,
    grade: 3,
    category: 'application',
    question: '小华有36张邮票，小明的邮票是小华的2倍，小明有多少张邮票？',
    options: ['66', '68', '70', '72'],
    correctAnswer: 3,
    explanation: '36 × 2 = 72张'
  },
  {
    id: 327,
    grade: 3,
    category: 'application',
    question: '妈妈买了4盒鸡蛋，每盒6个，一共有多少个鸡蛋？',
    options: ['20', '22', '24', '26'],
    correctAnswer: 2,
    explanation: '4 × 6 = 24个'
  },
  {
    id: 328,
    grade: 3,
    category: 'application',
    question: '一个班级有40个学生，分成8个小组，每组有多少人？',
    options: ['4', '5', '6', '8'],
    correctAnswer: 1,
    explanation: '40 ÷ 8 = 5人'
  },
  {
    id: 329,
    grade: 3,
    category: 'application',
    question: '一盒粉笔有12支，5盒粉笔有多少支？',
    options: ['50', '55', '60', '65'],
    correctAnswer: 2,
    explanation: '12 × 5 = 60支'
  },
  {
    id: 330,
    grade: 3,
    category: 'application',
    question: '小刚有72颗糖果，平均分给8个小朋友，每人分到多少颗？',
    options: ['8', '9', '10', '11'],
    correctAnswer: 1,
    explanation: '72 ÷ 8 = 9颗'
  },
  {
    id: 331,
    grade: 3,
    category: 'application',
    question: '一本书有120页，小红每天看20页，多少天看完？',
    options: ['5天', '6天', '8天', '10天'],
    correctAnswer: 1,
    explanation: '120 ÷ 20 = 6天'
  },
  {
    id: 332,
    grade: 3,
    category: 'application',
    question: '动物园里有猴子36只，老虎9只，猴子是老虎的几倍？',
    options: ['3', '4', '5', '6'],
    correctAnswer: 1,
    explanation: '36 ÷ 9 = 4倍'
  },
  {
    id: 333,
    grade: 3,
    category: 'application',
    question: '小明存了300元，每周存50元，需要几周？',
    options: ['4', '5', '6', '7'],
    correctAnswer: 2,
    explanation: '300 ÷ 50 = 6周'
  },
  {
    id: 334,
    grade: 3,
    category: 'application',
    question: '一辆玩具车25元，买4辆需要多少钱？',
    options: ['90元', '95元', '100元', '105元'],
    correctAnswer: 2,
    explanation: '25 × 4 = 100元'
  },
  {
    id: 335,
    grade: 3,
    category: 'application',
    question: '一条绳子长96米，剪成8段，每段多少米？',
    options: ['10米', '11米', '12米', '13米'],
    correctAnswer: 2,
    explanation: '96 ÷ 8 = 12米'
  },
  {
    id: 336,
    grade: 3,
    category: 'application',
    question: '小红有36颗糖，小明有28颗糖，两人一共有多少颗糖？',
    options: ['54', '56', '64', '66'],
    correctAnswer: 2,
    explanation: '36 + 28 = 64颗'
  },
  {
    id: 337,
    grade: 3,
    category: 'application',
    question: '图书馆有84本书，借出去28本，还剩多少本？',
    options: ['46', '48', '56', '66'],
    correctAnswer: 2,
    explanation: '84 - 28 = 56本'
  },
  {
    id: 338,
    grade: 3,
    category: 'application',
    question: '一个房间有9排座位，每排8个座位，一共有多少个座位？',
    options: ['64', '68', '72', '76'],
    correctAnswer: 2,
    explanation: '9 × 8 = 72个座位'
  },
  {
    id: 339,
    grade: 3,
    category: 'application',
    question: '小明有48元，买了3本书，每本书12元，还剩多少钱？',
    options: ['8元', '10元', '12元', '15元'],
    correctAnswer: 2,
    explanation: '12 × 3 = 36元，48 - 36 = 12元'
  },
  {
    id: 340,
    grade: 3,
    category: 'application',
    question: '一只蜗牛爬行速度是每小时6米，5小时能爬多少米？',
    options: ['25米', '28米', '30米', '32米'],
    correctAnswer: 2,
    explanation: '6 × 5 = 30米'
  },

  // 几何题 - 20道
  {
    id: 341,
    grade: 3,
    category: 'geometry',
    question: '一个正方形有几条边？',
    options: ['3条', '4条', '5条', '6条'],
    correctAnswer: 1,
    explanation: '正方形有4条边，4个角'
  },
  {
    id: 342,
    grade: 3,
    category: 'geometry',
    question: '一个长方形有几条边？',
    options: ['3条', '4条', '5条', '6条'],
    correctAnswer: 1,
    explanation: '长方形有4条边，4个角'
  },
  {
    id: 343,
    grade: 3,
    category: 'geometry',
    question: '一个三角形有几条边？',
    options: ['3条', '4条', '5条', '6条'],
    correctAnswer: 0,
    explanation: '三角形有3条边，3个角'
  },
  {
    id: 344,
    grade: 3,
    category: 'geometry',
    question: '正方形有几条对称轴？',
    options: ['2条', '4条', '6条', '8条'],
    correctAnswer: 1,
    explanation: '正方形有4条对称轴'
  },
  {
    id: 345,
    grade: 3,
    category: 'geometry',
    question: '长方形有几条对称轴？',
    options: ['1条', '2条', '4条', '6条'],
    correctAnswer: 1,
    explanation: '长方形有2条对称轴'
  },
  {
    id: 346,
    grade: 3,
    category: 'geometry',
    question: '等边三角形的三个角各是多少度？',
    options: ['45°', '50°', '60°', '70°'],
    correctAnswer: 2,
    explanation: '等边三角形每个角都是60°'
  },
  {
    id: 347,
    grade: 3,
    category: 'geometry',
    question: '一个圆有几条对称轴？',
    options: ['无数条', '2条', '4条', '8条'],
    correctAnswer: 0,
    explanation: '圆有无数条对称轴'
  },
  {
    id: 348,
    grade: 3,
    category: 'geometry',
    question: '正方形对角线的特点是？',
    options: ['相等但不垂直', '相等且垂直', '垂直但不相等', '都不对'],
    correctAnswer: 1,
    explanation: '正方形的对角线相等且垂直'
  },
  {
    id: 349,
    grade: 3,
    category: 'geometry',
    question: '长方形的对边有什么关系？',
    options: ['不等', '平行且相等', '平行但不相等', '相等但不平行'],
    correctAnswer: 1,
    explanation: '长方形的对边平行且相等'
  },
  {
    id: 350,
    grade: 3,
    category: 'geometry',
    question: '正方形是特殊的长方形吗？',
    options: ['是', '不是', '不确定'],
    correctAnswer: 0,
    explanation: '正方形是特殊的长方形，四边都相等'
  },
  {
    id: 351,
    grade: 3,
    category: 'geometry',
    question: '长方形的长是8cm，宽是4cm，周长是多少？',
    options: ['20cm', '24cm', '26cm', '28cm'],
    correctAnswer: 1,
    explanation: '(8+4)×2 = 24cm'
  },
  {
    id: 352,
    grade: 3,
    category: 'geometry',
    question: '正方形的边长是5cm，周长是多少？',
    options: ['15cm', '20cm', '25cm', '30cm'],
    correctAnswer: 1,
    explanation: '5×4 = 20cm'
  },
  {
    id: 353,
    grade: 3,
    category: 'geometry',
    question: '长方形的长是6cm，宽是3cm，面积是多少？',
    options: ['9cm²', '12cm²', '15cm²', '18cm²'],
    correctAnswer: 3,
    explanation: '6×3 = 18cm²'
  },
  {
    id: 354,
    grade: 3,
    category: 'geometry',
    question: '正方形的边长是4cm，面积是多少？',
    options: ['12cm²', '14cm²', '16cm²', '18cm²'],
    correctAnswer: 2,
    explanation: '4×4 = 16cm²'
  },
  {
    id: 355,
    grade: 3,
    category: 'geometry',
    question: '三角形的内角和是多少度？',
    options: ['120°', '150°', '180°', '360°'],
    correctAnswer: 2,
    explanation: '三角形的内角和是180°'
  },
  {
    id: 356,
    grade: 3,
    category: 'geometry',
    question: '长方形的四个角都是什么角？',
    options: ['锐角', '钝角', '直角', '平角'],
    correctAnswer: 2,
    explanation: '长方形的四个角都是直角'
  },
  {
    id: 357,
    grade: 3,
    category: 'geometry',
    question: '正方形的四个角都是什么角？',
    options: ['锐角', '钝角', '直角', '平角'],
    correctAnswer: 2,
    explanation: '正方形的四个角都是直角'
  },
  {
    id: 358,
    grade: 3,
    category: 'geometry',
    question: '一个长方形的长是10cm，宽是6cm，周长是多少？',
    options: ['28cm', '32cm', '36cm', '40cm'],
    correctAnswer: 1,
    explanation: '(10+6)×2 = 32cm'
  },
  {
    id: 359,
    grade: 3,
    category: 'geometry',
    question: '一个正方形的周长是24cm，边长是多少？',
    options: ['4cm', '5cm', '6cm', '8cm'],
    correctAnswer: 2,
    explanation: '24÷4 = 6cm'
  },
  {
    id: 360,
    grade: 3,
    category: 'geometry',
    question: '长方形的面积公式是？',
    options: ['长×2', '宽×2', '长+宽', '长×宽'],
    correctAnswer: 3,
    explanation: '长方形的面积 = 长×宽'
  },
];

// 四年级题库
export const grade4Questions: MathProblem[] = [
  // 计算题 - 20道
  {
    id: 401,
    grade: 4,
    category: 'calculation',
    question: '125 × 4 = ?',
    options: ['400', '500', '450', '600'],
    correctAnswer: 1,
    explanation: '125 × 4 = 500'
  },
  {
    id: 402,
    grade: 4,
    category: 'calculation',
    question: '1000 - 356 = ?',
    options: ['644', '654', '634', '624'],
    correctAnswer: 0,
    explanation: '1000 - 356 = 644'
  },
  {
    id: 403,
    grade: 4,
    category: 'calculation',
    question: '25 × 8 = ?',
    options: ['180', '200', '220', '240'],
    correctAnswer: 1,
    explanation: '25 × 8 = 200'
  },
  {
    id: 404,
    grade: 4,
    category: 'calculation',
    question: '45 × 6 = ?',
    options: ['260', '270', '280', '290'],
    correctAnswer: 1,
    explanation: '45 × 6 = 270'
  },
  {
    id: 405,
    grade: 4,
    category: 'calculation',
    question: '72 ÷ 6 = ?',
    options: ['10', '11', '12', '13'],
    correctAnswer: 2,
    explanation: '72 ÷ 6 = 12'
  },
  {
    id: 406,
    grade: 4,
    category: 'calculation',
    question: '96 ÷ 8 = ?',
    options: ['10', '11', '12', '13'],
    correctAnswer: 2,
    explanation: '96 ÷ 8 = 12'
  },
  {
    id: 407,
    grade: 4,
    category: 'calculation',
    question: '128 + 275 = ?',
    options: ['393', '403', '413', '423'],
    correctAnswer: 1,
    explanation: '128 + 275 = 403'
  },
  {
    id: 408,
    grade: 4,
    category: 'calculation',
    question: '500 - 237 = ?',
    options: ['253', '263', '273', '283'],
    correctAnswer: 1,
    explanation: '500 - 237 = 263'
  },
  {
    id: 409,
    grade: 4,
    category: 'calculation',
    question: '35 × 7 = ?',
    options: ['235', '245', '255', '265'],
    correctAnswer: 1,
    explanation: '35 × 7 = 245'
  },
  {
    id: 410,
    grade: 4,
    category: 'calculation',
    question: '84 ÷ 4 = ?',
    options: ['19', '20', '21', '22'],
    correctAnswer: 2,
    explanation: '84 ÷ 4 = 21'
  },
  {
    id: 411,
    grade: 4,
    category: 'calculation',
    question: '156 + 144 = ?',
    options: ['290', '295', '300', '310'],
    correctAnswer: 2,
    explanation: '156 + 144 = 300'
  },
  {
    id: 412,
    grade: 4,
    category: 'calculation',
    question: '700 - 384 = ?',
    options: ['306', '316', '326', '336'],
    correctAnswer: 1,
    explanation: '700 - 384 = 316'
  },
  {
    id: 413,
    grade: 4,
    category: 'calculation',
    question: '48 × 5 = ?',
    options: ['230', '240', '250', '260'],
    correctAnswer: 1,
    explanation: '48 × 5 = 240'
  },
  {
    id: 414,
    grade: 4,
    category: 'calculation',
    question: '112 ÷ 7 = ?',
    options: ['14', '15', '16', '17'],
    correctAnswer: 2,
    explanation: '112 ÷ 7 = 16'
  },
  {
    id: 415,
    grade: 4,
    category: 'calculation',
    question: '245 + 356 = ?',
    options: ['591', '601', '611', '621'],
    correctAnswer: 1,
    explanation: '245 + 356 = 601'
  },
  {
    id: 416,
    grade: 4,
    category: 'calculation',
    question: '800 - 478 = ?',
    options: ['312', '322', '332', '342'],
    correctAnswer: 1,
    explanation: '800 - 478 = 322'
  },
  {
    id: 417,
    grade: 4,
    category: 'calculation',
    question: '64 × 8 = ?',
    options: ['502', '512', '522', '532'],
    correctAnswer: 1,
    explanation: '64 × 8 = 512'
  },
  {
    id: 418,
    grade: 4,
    category: 'calculation',
    question: '144 ÷ 9 = ?',
    options: ['14', '15', '16', '18'],
    correctAnswer: 2,
    explanation: '144 ÷ 9 = 16'
  },
  {
    id: 419,
    grade: 4,
    category: 'calculation',
    question: '378 + 522 = ?',
    options: ['890', '900', '910', '920'],
    correctAnswer: 1,
    explanation: '378 + 522 = 900'
  },
  {
    id: 420,
    grade: 4,
    category: 'calculation',
    question: '950 - 678 = ?',
    options: ['262', '272', '282', '292'],
    correctAnswer: 1,
    explanation: '950 - 678 = 272'
  },

  // 小数计算题 - 20道
  {
    id: 421,
    grade: 4,
    category: 'calculation',
    question: '0.5 + 0.3 = ?',
    options: ['0.8', '0.2', '0.15', '0.7'],
    correctAnswer: 0,
    explanation: '0.5 + 0.3 = 0.8'
  },
  {
    id: 422,
    grade: 4,
    category: 'calculation',
    question: '1.5 + 0.5 = ?',
    options: ['1.0', '2.0', '2.5', '3.0'],
    correctAnswer: 1,
    explanation: '1.5 + 0.5 = 2.0'
  },
  {
    id: 423,
    grade: 4,
    category: 'calculation',
    question: '3.2 - 1.5 = ?',
    options: ['1.5', '1.6', '1.7', '1.8'],
    correctAnswer: 2,
    explanation: '3.2 - 1.5 = 1.7'
  },
  {
    id: 424,
    grade: 4,
    category: 'calculation',
    question: '2.7 + 0.8 = ?',
    options: ['3.3', '3.5', '3.7', '3.9'],
    correctAnswer: 1,
    explanation: '2.7 + 0.8 = 3.5'
  },
  {
    id: 425,
    grade: 4,
    category: 'calculation',
    question: '4.5 - 2.3 = ?',
    options: ['2.1', '2.2', '2.3', '2.4'],
    correctAnswer: 1,
    explanation: '4.5 - 2.3 = 2.2'
  },
  {
    id: 426,
    grade: 4,
    category: 'calculation',
    question: '5.6 + 3.4 = ?',
    options: ['8.0', '8.5', '9.0', '9.5'],
    correctAnswer: 2,
    explanation: '5.6 + 3.4 = 9.0'
  },
  {
    id: 427,
    grade: 4,
    category: 'calculation',
    question: '8.2 - 4.7 = ?',
    options: ['3.3', '3.5', '3.7', '3.9'],
    correctAnswer: 1,
    explanation: '8.2 - 4.7 = 3.5'
  },
  {
    id: 428,
    grade: 4,
    category: 'calculation',
    question: '6.8 + 1.2 = ?',
    options: ['7.0', '7.5', '8.0', '8.5'],
    correctAnswer: 2,
    explanation: '6.8 + 1.2 = 8.0'
  },
  {
    id: 429,
    grade: 4,
    category: 'calculation',
    question: '9.6 - 3.8 = ?',
    options: ['5.6', '5.7', '5.8', '5.9'],
    correctAnswer: 2,
    explanation: '9.6 - 3.8 = 5.8'
  },
  {
    id: 430,
    grade: 4,
    category: 'calculation',
    question: '0.75 + 0.25 = ?',
    options: ['1.0', '1.1', '1.2', '1.3'],
    correctAnswer: 0,
    explanation: '0.75 + 0.25 = 1.0'
  },
  {
    id: 431,
    grade: 4,
    category: 'calculation',
    question: '2.4 - 0.8 = ?',
    options: ['1.4', '1.5', '1.6', '1.7'],
    correctAnswer: 2,
    explanation: '2.4 - 0.8 = 1.6'
  },
  {
    id: 432,
    grade: 4,
    category: 'calculation',
    question: '3.6 + 1.4 = ?',
    options: ['4.0', '4.5', '5.0', '5.5'],
    correctAnswer: 2,
    explanation: '3.6 + 1.4 = 5.0'
  },
  {
    id: 433,
    grade: 4,
    category: 'calculation',
    question: '7.5 - 2.6 = ?',
    options: ['4.7', '4.8', '4.9', '5.0'],
    correctAnswer: 2,
    explanation: '7.5 - 2.6 = 4.9'
  },
  {
    id: 434,
    grade: 4,
    category: 'calculation',
    question: '0.6 + 0.6 = ?',
    options: ['1.1', '1.2', '1.3', '1.4'],
    correctAnswer: 1,
    explanation: '0.6 + 0.6 = 1.2'
  },
  {
    id: 435,
    grade: 4,
    category: 'calculation',
    question: '5.3 - 1.9 = ?',
    options: ['3.2', '3.3', '3.4', '3.5'],
    correctAnswer: 2,
    explanation: '5.3 - 1.9 = 3.4'
  },
  {
    id: 436,
    grade: 4,
    category: 'calculation',
    question: '4.8 + 2.7 = ?',
    options: ['7.3', '7.5', '7.7', '7.9'],
    correctAnswer: 1,
    explanation: '4.8 + 2.7 = 7.5'
  },
  {
    id: 437,
    grade: 4,
    category: 'calculation',
    question: '8.1 - 3.5 = ?',
    options: ['4.4', '4.5', '4.6', '4.7'],
    correctAnswer: 2,
    explanation: '8.1 - 3.5 = 4.6'
  },
  {
    id: 438,
    grade: 4,
    category: 'calculation',
    question: '1.2 + 2.8 = ?',
    options: ['3.0', '3.5', '4.0', '4.5'],
    correctAnswer: 2,
    explanation: '1.2 + 2.8 = 4.0'
  },
  {
    id: 439,
    grade: 4,
    category: 'calculation',
    question: '6.4 - 2.5 = ?',
    options: ['3.7', '3.8', '3.9', '4.0'],
    correctAnswer: 2,
    explanation: '6.4 - 2.5 = 3.9'
  },
  {
    id: 440,
    grade: 4,
    category: 'calculation',
    question: '0.9 + 0.9 = ?',
    options: ['1.6', '1.7', '1.8', '1.9'],
    correctAnswer: 2,
    explanation: '0.9 + 0.9 = 1.8'
  },

  // 应用题 - 20道
  {
    id: 441,
    grade: 4,
    category: 'application',
    question: '一本书有300页，小明每天看25页，多少天看完？',
    options: ['10天', '11天', '12天', '13天'],
    correctAnswer: 2,
    explanation: '300 ÷ 25 = 12天'
  },
  {
    id: 442,
    grade: 4,
    category: 'application',
    question: '小红去超市买文具，铅笔每支0.8元，橡皮每块0.5元，笔记本每本2.3元。小明买了2支铅笔、3块橡皮和1本笔记本，一共花了多少钱？',
    options: ['6.5元', '7.1元', '7.8元', '8.2元'],
    correctAnswer: 1,
    explanation: '0.8×2 + 0.5×3 + 2.3 = 1.6 + 1.5 + 2.3 = 5.4元'
  },
  {
    id: 443,
    grade: 4,
    category: 'application',
    question: '一根绳子长12.5米，用去4.8米，还剩多少米？',
    options: ['7.5米', '7.7米', '7.9米', '8.1米'],
    correctAnswer: 1,
    explanation: '12.5 - 4.8 = 7.7米'
  },
  {
    id: 444,
    grade: 4,
    category: 'application',
    question: '某修路队计划3天修路500米，第一天修了150米，第二天修了180米，第三天需要修多少米？',
    options: ['150米', '160米', '170米', '180米'],
    correctAnswer: 2,
    explanation: '500 - (150 + 180) = 500 - 330 = 170米'
  },
  {
    id: 445,
    grade: 4,
    category: 'application',
    question: '一只鸵鸟每小时跑53.6千米，一辆汽车每小时行驶33.8千米，一只鸵鸟每小时比汽车快多少千米？',
    options: ['18.8千米', '19.8千米', '20.8千米', '21.8千米'],
    correctAnswer: 1,
    explanation: '53.6 - 33.8 = 19.8千米'
  },
  {
    id: 446,
    grade: 4,
    category: 'application',
    question: '小华有25.6元，买书花了18.8元，还剩多少钱？',
    options: ['6.6元', '6.8元', '7.6元', '7.8元'],
    correctAnswer: 1,
    explanation: '25.6 - 18.8 = 6.8元'
  },
  {
    id: 447,
    grade: 4,
    category: 'application',
    question: '一个盒子能装15个苹果，有100个苹果，能装多少个盒子？还剩多少个？',
    options: ['6个，剩4个', '6个，剩10个', '7个，剩4个', '7个，剩10个'],
    correctAnswer: 1,
    explanation: '100 ÷ 15 = 6余10，能装6个盒子，还剩10个'
  },
  {
    id: 448,
    grade: 4,
    category: 'application',
    question: '小刚家距离学校3.5千米，他每天往返一次，一周（5天）要走多少千米？',
    options: ['15千米', '17.5千米', '20千米', '35千米'],
    correctAnswer: 3,
    explanation: '3.5 × 2 × 5 = 35千米'
  },
  {
    id: 449,
    grade: 4,
    category: 'application',
    question: '超市牛奶40.5元/箱，面包每箱比牛奶便宜13.6元，买1箱牛奶和1箱面包一共花费多少钱？',
    options: ['53.9元', '54.1元', '67.4元', '67.6元'],
    correctAnswer: 2,
    explanation: '40.5 + (40.5 - 13.6) = 40.5 + 26.9 = 67.4元'
  },
  {
    id: 450,
    grade: 4,
    category: 'application',
    question: '一个工厂生产零件，前3天每天生产145个，后4天每天生产180个，一共生产多少个零件？',
    options: ['1135', '1155', '1175', '1195'],
    correctAnswer: 1,
    explanation: '145×3 + 180×4 = 435 + 720 = 1155个'
  },
  {
    id: 451,
    grade: 4,
    category: 'application',
    question: '一个长方形菜园长12.5米，宽8.6米，这个菜园的周长是多少？',
    options: ['40.2米', '41.2米', '42.2米', '43.2米'],
    correctAnswer: 2,
    explanation: '(12.5 + 8.6) × 2 = 42.2米'
  },
  {
    id: 452,
    grade: 4,
    category: 'application',
    question: '爸爸的身高是1.75米，小明的身高是1.35米，爸爸比小明高多少？',
    options: ['0.3米', '0.4米', '0.5米', '0.6米'],
    correctAnswer: 1,
    explanation: '1.75 - 1.35 = 0.4米'
  },
  {
    id: 453,
    grade: 4,
    category: 'application',
    question: '一本书有180页，小红第一天看了35.5页，第二天看了42.8页，还剩多少页没看？',
    options: ['100.7页', '101.7页', '102.7页', '103.7页'],
    correctAnswer: 1,
    explanation: '180 - (35.5 + 42.8) = 180 - 78.3 = 101.7页'
  },
  {
    id: 454,
    grade: 4,
    category: 'application',
    question: '小明存钱，第一个月存了125.5元，第二个月存了158.8元，两个月一共存了多少钱？',
    options: ['283.3元', '284.3元', '285.3元', '286.3元'],
    correctAnswer: 1,
    explanation: '125.5 + 158.8 = 284.3元'
  },
  {
    id: 455,
    grade: 4,
    category: 'application',
    question: '一个水池能装水150.5吨，已经放了68.8吨，还能放多少吨？',
    options: ['80.7吨', '81.7吨', '82.7吨', '83.7吨'],
    correctAnswer: 1,
    explanation: '150.5 - 68.8 = 81.7吨'
  },
  {
    id: 456,
    grade: 4,
    category: 'application',
    question: '小华跑步，第一圈用了2.5分钟，第二圈用了2.8分钟，两圈一共用了多少分钟？',
    options: ['5.1分钟', '5.3分钟', '5.5分钟', '5.7分钟'],
    correctAnswer: 1,
    explanation: '2.5 + 2.8 = 5.3分钟'
  },
  {
    id: 457,
    grade: 4,
    category: 'application',
    question: '买3支钢笔，每支12.5元，给售货员50元，应该找回多少钱？',
    options: ['11.5元', '12.5元', '13.5元', '14.5元'],
    correctAnswer: 1,
    explanation: '50 - 12.5×3 = 50 - 37.5 = 12.5元'
  },
  {
    id: 458,
    grade: 4,
    category: 'application',
    question: '一个班级有42人，平均分成6组，每组多少人？',
    options: ['6人', '7人', '8人', '9人'],
    correctAnswer: 1,
    explanation: '42 ÷ 6 = 7人'
  },
  {
    id: 459,
    grade: 4,
    category: 'application',
    question: '一条路长5.6千米，已经修了2.8千米，还剩多少千米没修？',
    options: ['2.6千米', '2.8千米', '3.6千米', '3.8千米'],
    correctAnswer: 1,
    explanation: '5.6 - 2.8 = 2.8千米'
  },
  {
    id: 460,
    grade: 4,
    category: 'application',
    question: '小明有18.5元，妈妈又给了他25.8元，现在他一共有多少钱？',
    options: ['42.3元', '43.3元', '44.3元', '45.3元'],
    correctAnswer: 2,
    explanation: '18.5 + 25.8 = 44.3元'
  },

  // 几何题 - 20道
  {
    id: 461,
    grade: 4,
    category: 'geometry',
    question: '长方形的长是8cm，宽是5cm，周长是多少？',
    options: ['26cm', '28cm', '30cm', '32cm'],
    correctAnswer: 0,
    explanation: '(8 + 5) × 2 = 26cm'
  },
  {
    id: 462,
    grade: 4,
    category: 'geometry',
    question: '正方形的边长是7cm，周长是多少？',
    options: ['26cm', '28cm', '30cm', '32cm'],
    correctAnswer: 1,
    explanation: '7 × 4 = 28cm'
  },
  {
    id: 463,
    grade: 4,
    category: 'geometry',
    question: '长方形的长是12cm，宽是6cm，面积是多少？',
    options: ['60cm²', '66cm²', '72cm²', '78cm²'],
    correctAnswer: 2,
    explanation: '12 × 6 = 72cm²'
  },
  {
    id: 464,
    grade: 4,
    category: 'geometry',
    question: '正方形的边长是8cm，面积是多少？',
    options: ['56cm²', '64cm²', '72cm²', '80cm²'],
    correctAnswer: 1,
    explanation: '8 × 8 = 64cm²'
  },
  {
    id: 465,
    grade: 4,
    category: 'geometry',
    question: '长方形的周长是30cm，长是9cm，宽是多少？',
    options: ['5cm', '6cm', '7cm', '8cm'],
    correctAnswer: 1,
    explanation: '30 ÷ 2 - 9 = 15 - 9 = 6cm'
  },
  {
    id: 466,
    grade: 4,
    category: 'geometry',
    question: '正方形的周长是36cm，边长是多少？',
    options: ['8cm', '9cm', '10cm', '12cm'],
    correctAnswer: 1,
    explanation: '36 ÷ 4 = 9cm'
  },
  {
    id: 467,
    grade: 4,
    category: 'geometry',
    question: '长方形的面积是48cm²，长是8cm，宽是多少？',
    options: ['5cm', '6cm', '7cm', '8cm'],
    correctAnswer: 1,
    explanation: '48 ÷ 8 = 6cm'
  },
  {
    id: 468,
    grade: 4,
    category: 'geometry',
    question: '正方形的面积是64cm²，边长是多少？',
    options: ['7cm', '8cm', '9cm', '10cm'],
    correctAnswer: 1,
    explanation: '64 = 8 × 8，边长是8cm'
  },
  {
    id: 469,
    grade: 4,
    category: 'geometry',
    question: '一个长方形的长是10cm，宽是4cm，周长比面积大多少？',
    options: ['6', '8', '14', '26'],
    correctAnswer: 1,
    explanation: '周长 = 28cm，面积 = 40cm²，40 - 28 = 12'
  },
  {
    id: 470,
    grade: 4,
    category: 'geometry',
    question: '两个完全相同的长方形，长是6cm，宽是4cm，拼成一个大长方形，周长可能是多少？',
    options: ['28cm', '32cm', '40cm', '28cm或32cm'],
    correctAnswer: 3,
    explanation: '竖着拼：周长32cm；横着拼：周长28cm'
  },
  {
    id: 471,
    grade: 4,
    category: 'geometry',
    question: '一个长方形的周长是40cm，长和宽可能相等吗？',
    options: ['可能', '不可能', '无法确定'],
    correctAnswer: 1,
    explanation: '如果长和宽相等，就是正方形，40÷4=10，长和宽都是10cm'
  },
  {
    id: 472,
    grade: 4,
    category: 'geometry',
    question: '一个正方形的边长扩大2倍，周长扩大几倍？',
    options: ['2倍', '4倍', '6倍', '8倍'],
    correctAnswer: 0,
    explanation: '周长也扩大2倍'
  },
  {
    id: 473,
    grade: 4,
    category: 'geometry',
    question: '一个长方形的面积是36cm²，宽是4cm，周长是多少？',
    options: ['24cm', '26cm', '28cm', '30cm'],
    correctAnswer: 1,
    explanation: '长 = 36÷4 = 9cm，周长 = (9+4)×2 = 26cm'
  },
  {
    id: 474,
    grade: 4,
    category: 'geometry',
    question: '用12个边长1cm的小正方形拼成长方形，有几种拼法？',
    options: ['2种', '3种', '4种', '5种'],
    correctAnswer: 1,
    explanation: '1×12、2×6、3×4，共3种拼法'
  },
  {
    id: 475,
    grade: 4,
    category: 'geometry',
    question: '一个正方形的边长增加3cm，周长增加多少？',
    options: ['3cm', '6cm', '9cm', '12cm'],
    correctAnswer: 3,
    explanation: '周长增加 3×4 = 12cm'
  },
  {
    id: 476,
    grade: 4,
    category: 'geometry',
    question: '长方形的长减少2cm，宽增加2cm，周长怎么变？',
    options: ['增加4cm', '减少4cm', '不变', '无法确定'],
    correctAnswer: 2,
    explanation: '周长不变'
  },
  {
    id: 477,
    grade: 4,
    category: 'geometry',
    question: '一个长方形的面积是45cm²，长和宽都是整数，长可能是什么？',
    options: ['3', '4', '5', '9'],
    correctAnswer: 3,
    explanation: '45 = 9 × 5，长可能是9cm，宽是5cm'
  },
  {
    id: 478,
    grade: 4,
    category: 'geometry',
    question: '正方形的边长是6cm，对角线大约是多少？',
    options: ['7cm', '8cm', '9cm', '10cm'],
    correctAnswer: 1,
    explanation: '对角线 = 6×√2 ≈ 8.5cm'
  },
  {
    id: 479,
    grade: 4,
    category: 'geometry',
    question: '一个长方形的周长是50cm，长比宽多5cm，长是多少？',
    options: ['10cm', '12cm', '15cm', '20cm'],
    correctAnswer: 2,
    explanation: '设宽x，长x+5，2(x+x+5)=50，4x=40，x=10，长=15cm'
  },
  {
    id: 480,
    grade: 4,
    category: 'geometry',
    question: '两个边长3cm的正方形拼成一个长方形，拼成后长方形的周长是？',
    options: ['18cm', '24cm', '30cm', '36cm'],
    correctAnswer: 1,
    explanation: '拼成后长方形长6cm，宽3cm，周长 = (6+3)×2 = 18cm'
  },
];

export const grade5Questions: MathProblem[] = [
  // 分数计算题 - 20道
  {
    id: 501,
    grade: 5,
    category: 'calculation',
    question: '1/2 + 1/4 = ?',
    options: ['1/6', '2/6', '3/4', '2/4'],
    correctAnswer: 2,
    explanation: '1/2 + 1/4 = 2/4 + 1/4 = 3/4'
  },
  {
    id: 502,
    grade: 5,
    category: 'calculation',
    question: '3/5 + 1/5 = ?',
    options: ['2/5', '4/5', '4/10', '1'],
    correctAnswer: 1,
    explanation: '3/5 + 1/5 = 4/5'
  },
  {
    id: 503,
    grade: 5,
    category: 'calculation',
    question: '5/8 - 3/8 = ?',
    options: ['1/8', '2/8', '2/4', '1/4'],
    correctAnswer: 1,
    explanation: '5/8 - 3/8 = 2/8 = 1/4'
  },
  {
    id: 504,
    grade: 5,
    category: 'calculation',
    question: '1/3 + 1/6 = ?',
    options: ['1/9', '2/9', '1/2', '2/3'],
    correctAnswer: 2,
    explanation: '1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2'
  },
  {
    id: 505,
    grade: 5,
    category: 'calculation',
    question: '3/4 - 1/2 = ?',
    options: ['1/2', '1/4', '1/3', '2/3'],
    correctAnswer: 1,
    explanation: '3/4 - 1/2 = 3/4 - 2/4 = 1/4'
  },
  {
    id: 506,
    grade: 5,
    category: 'calculation',
    question: '2/3 + 1/3 = ?',
    options: ['3/6', '3/9', '1', '2/9'],
    correctAnswer: 2,
    explanation: '2/3 + 1/3 = 3/3 = 1'
  },
  {
    id: 507,
    grade: 5,
    category: 'calculation',
    question: '7/10 - 3/10 = ?',
    options: ['4/10', '4/20', '2/5', '3/5'],
    correctAnswer: 2,
    explanation: '7/10 - 3/10 = 4/10 = 2/5'
  },
  {
    id: 508,
    grade: 5,
    category: 'calculation',
    question: '1/4 + 3/8 = ?',
    options: ['2/8', '4/12', '5/8', '1'],
    correctAnswer: 2,
    explanation: '1/4 + 3/8 = 2/8 + 3/8 = 5/8'
  },
  {
    id: 509,
    grade: 5,
    category: 'calculation',
    question: '5/6 - 1/3 = ?',
    options: ['2/6', '3/6', '1/2', '4/6'],
    correctAnswer: 2,
    explanation: '5/6 - 1/3 = 5/6 - 2/6 = 3/6 = 1/2'
  },
  {
    id: 510,
    grade: 5,
    category: 'calculation',
    question: '2/5 + 3/5 = ?',
    options: ['1', '5/10', '6/10', '5/25'],
    correctAnswer: 0,
    explanation: '2/5 + 3/5 = 5/5 = 1'
  },
  {
    id: 511,
    grade: 5,
    category: 'calculation',
    question: '1/2 - 1/3 = ?',
    options: ['1/6', '2/6', '1/5', '2/5'],
    correctAnswer: 1,
    explanation: '1/2 - 1/3 = 3/6 - 2/6 = 1/6'
  },
  {
    id: 512,
    grade: 5,
    category: 'calculation',
    question: '3/8 + 1/4 = ?',
    options: ['4/12', '4/8', '5/8', '1/2'],
    correctAnswer: 2,
    explanation: '3/8 + 1/4 = 3/8 + 2/8 = 5/8'
  },
  {
    id: 513,
    grade: 5,
    category: 'calculation',
    question: '4/5 - 1/5 = ?',
    options: ['2/5', '3/5', '3/10', '5/10'],
    correctAnswer: 1,
    explanation: '4/5 - 1/5 = 3/5'
  },
  {
    id: 514,
    grade: 5,
    category: 'calculation',
    question: '1/6 + 2/3 = ?',
    options: ['1/2', '2/3', '5/6', '3/6'],
    correctAnswer: 2,
    explanation: '1/6 + 2/3 = 1/6 + 4/6 = 5/6'
  },
  {
    id: 515,
    grade: 5,
    category: 'calculation',
    question: '7/8 - 3/8 = ?',
    options: ['1/2', '4/8', '1/3', '2/3'],
    correctAnswer: 0,
    explanation: '7/8 - 3/8 = 4/8 = 1/2'
  },
  {
    id: 516,
    grade: 5,
    category: 'calculation',
    question: '1/5 + 3/10 = ?',
    options: ['4/15', '2/5', '4/10', '5/10'],
    correctAnswer: 1,
    explanation: '1/5 + 3/10 = 2/10 + 3/10 = 5/10 = 1/2'
  },
  {
    id: 517,
    grade: 5,
    category: 'calculation',
    question: '5/9 - 2/9 = ?',
    options: ['3/9', '1/3', '2/9', '7/9'],
    correctAnswer: 1,
    explanation: '5/9 - 2/9 = 3/9 = 1/3'
  },
  {
    id: 518,
    grade: 5,
    category: 'calculation',
    question: '2/7 + 3/7 = ?',
    options: ['5/14', '5/7', '6/7', '1'],
    correctAnswer: 1,
    explanation: '2/7 + 3/7 = 5/7'
  },
  {
    id: 519,
    grade: 5,
    category: 'calculation',
    question: '3/4 - 1/8 = ?',
    options: ['2/8', '4/8', '5/8', '6/8'],
    correctAnswer: 2,
    explanation: '3/4 - 1/8 = 6/8 - 1/8 = 5/8'
  },
  {
    id: 520,
    grade: 5,
    category: 'calculation',
    question: '1/8 + 3/8 = ?',
    options: ['2/8', '3/8', '4/8', '1/2'],
    correctAnswer: 2,
    explanation: '1/8 + 3/8 = 4/8 = 1/2'
  },

  // 分数乘法题 - 20道
  {
    id: 521,
    grade: 5,
    category: 'calculation',
    question: '1/2 × 4 = ?',
    options: ['1', '2', '4', '8'],
    correctAnswer: 1,
    explanation: '1/2 × 4 = 2'
  },
  {
    id: 522,
    grade: 5,
    category: 'calculation',
    question: '2/3 × 6 = ?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: '2/3 × 6 = 4'
  },
  {
    id: 523,
    grade: 5,
    category: 'calculation',
    question: '3/5 × 10 = ?',
    options: ['4', '5', '6', '8'],
    correctAnswer: 2,
    explanation: '3/5 × 10 = 6'
  },
  {
    id: 524,
    grade: 5,
    category: 'calculation',
    question: '1/4 × 8 = ?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: '1/4 × 8 = 2'
  },
  {
    id: 525,
    grade: 5,
    category: 'calculation',
    question: '2/7 × 14 = ?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: '2/7 × 14 = 4'
  },
  {
    id: 526,
    grade: 5,
    category: 'calculation',
    question: '1/2 × 1/2 = ?',
    options: ['1', '1/2', '1/4', '2/4'],
    correctAnswer: 2,
    explanation: '1/2 × 1/2 = 1/4'
  },
  {
    id: 527,
    grade: 5,
    category: 'calculation',
    question: '2/3 × 1/2 = ?',
    options: ['1/3', '2/5', '1/6', '2/6'],
    correctAnswer: 0,
    explanation: '2/3 × 1/2 = 2/6 = 1/3'
  },
  {
    id: 528,
    grade: 5,
    category: 'calculation',
    question: '3/4 × 1/3 = ?',
    options: ['1/2', '1/4', '1/6', '3/12'],
    correctAnswer: 1,
    explanation: '3/4 × 1/3 = 3/12 = 1/4'
  },
  {
    id: 529,
    grade: 5,
    category: 'calculation',
    question: '1/2 × 1/3 = ?',
    options: ['1/5', '1/6', '2/6', '2/5'],
    correctAnswer: 1,
    explanation: '1/2 × 1/3 = 1/6'
  },
  {
    id: 530,
    grade: 5,
    category: 'calculation',
    question: '2/5 × 3/4 = ?',
    options: ['5/20', '6/20', '6/9', '5/9'],
    correctAnswer: 1,
    explanation: '2/5 × 3/4 = 6/20 = 3/10'
  },
  {
    id: 531,
    grade: 5,
    category: 'calculation',
    question: '5 × 1/5 = ?',
    options: ['0', '1', '1/25', '5'],
    correctAnswer: 1,
    explanation: '5 × 1/5 = 1'
  },
  {
    id: 532,
    grade: 5,
    category: 'calculation',
    question: '1/3 × 9 = ?',
    options: ['2', '3', '4', '6'],
    correctAnswer: 1,
    explanation: '1/3 × 9 = 3'
  },
  {
    id: 533,
    grade: 5,
    category: 'calculation',
    question: '3/8 × 4 = ?',
    options: ['3/2', '12/8', '1', '3/4'],
    correctAnswer: 0,
    explanation: '3/8 × 4 = 12/8 = 3/2'
  },
  {
    id: 534,
    grade: 5,
    category: 'calculation',
    question: '1/6 × 12 = ?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: '1/6 × 12 = 2'
  },
  {
    id: 535,
    grade: 5,
    category: 'calculation',
    question: '4/5 × 10 = ?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    explanation: '4/5 × 10 = 8'
  },
  {
    id: 536,
    grade: 5,
    category: 'calculation',
    question: '1/3 × 1/4 = ?',
    options: ['1/7', '1/12', '2/12', '1/6'],
    correctAnswer: 1,
    explanation: '1/3 × 1/4 = 1/12'
  },
  {
    id: 537,
    grade: 5,
    category: 'calculation',
    question: '2/3 × 2/3 = ?',
    options: ['4/9', '4/6', '2/9', '1/3'],
    correctAnswer: 0,
    explanation: '2/3 × 2/3 = 4/9'
  },
  {
    id: 538,
    grade: 5,
    category: 'calculation',
    question: '3/5 × 5/6 = ?',
    options: ['8/30', '15/30', '1/2', '3/6'],
    correctAnswer: 2,
    explanation: '3/5 × 5/6 = 15/30 = 1/2'
  },
  {
    id: 539,
    grade: 5,
    category: 'calculation',
    question: '1/4 × 1/5 = ?',
    options: ['1/9', '1/20', '2/20', '1/6'],
    correctAnswer: 1,
    explanation: '1/4 × 1/5 = 1/20'
  },
  {
    id: 540,
    grade: 5,
    category: 'calculation',
    question: '5/6 × 3/5 = ?',
    options: ['8/30', '15/30', '1/2', '15/11'],
    correctAnswer: 2,
    explanation: '5/6 × 3/5 = 15/30 = 1/2'
  },

  // 应用题 - 20道
  {
    id: 541,
    grade: 5,
    category: 'application',
    question: '一个西瓜重5千克，吃了3/5，吃了多少千克？',
    options: ['2千克', '3千克', '4千克', '1千克'],
    correctAnswer: 1,
    explanation: '5 × 3/5 = 3千克'
  },
  {
    id: 542,
    grade: 5,
    category: 'application',
    question: '一本书有120页，小红看了3/4，看了多少页？',
    options: ['80页', '90页', '95页', '100页'],
    correctAnswer: 1,
    explanation: '120 × 3/4 = 90页'
  },
  {
    id: 543,
    grade: 5,
    category: 'application',
    question: '小明有20个苹果，送给小华1/4，送了多少个？',
    options: ['4个', '5个', '6个', '8个'],
    correctAnswer: 1,
    explanation: '20 × 1/4 = 5个'
  },
  {
    id: 544,
    grade: 5,
    category: 'application',
    question: '一块地的面积是800平方米，种菜占3/5，种菜面积是多少？',
    options: ['400平方米', '480平方米', '500平方米', '600平方米'],
    correctAnswer: 1,
    explanation: '800 × 3/5 = 480平方米'
  },
  {
    id: 545,
    grade: 5,
    category: 'application',
    question: '一根绳子长18米，剪去1/3，剪去多少米？',
    options: ['5米', '6米', '7米', '8米'],
    correctAnswer: 1,
    explanation: '18 × 1/3 = 6米'
  },
  {
    id: 546,
    grade: 5,
    category: 'application',
    question: '动物园有60只猴子，大猴子占2/3，大猴子有多少只？',
    options: ['30只', '35只', '40只', '45只'],
    correctAnswer: 2,
    explanation: '60 × 2/3 = 40只'
  },
  {
    id: 547,
    grade: 5,
    category: 'application',
    question: '一条鱼重2.5千克，它的重量是一只鸭子的5/8，鸭子重多少千克？',
    options: ['3千克', '3.5千克', '4千克', '4.5千克'],
    correctAnswer: 2,
    explanation: '2.5 ÷ (5/8) = 2.5 × 8/5 = 4千克'
  },
  {
    id: 548,
    grade: 5,
    category: 'application',
    question: '小明身高1.5米，是小华身高的3/4，小华身高多少？',
    options: ['1.8米', '2米', '2.2米', '2.5米'],
    correctAnswer: 1,
    explanation: '1.5 ÷ (3/4) = 1.5 × 4/3 = 2米'
  },
  {
    id: 549,
    grade: 5,
    category: 'application',
    question: '一辆汽车行驶240千米，用了3/4小时，每小时行多少千米？',
    options: ['300千米', '320千米', '360千米', '400千米'],
    correctAnswer: 1,
    explanation: '240 ÷ (3/4) = 240 × 4/3 = 320千米'
  },
  {
    id: 550,
    grade: 5,
    category: 'application',
    question: '小刚存了360元，是小红的3/5，小红存了多少元？',
    options: ['540元', '560元', '600元', '640元'],
    correctAnswer: 2,
    explanation: '360 ÷ (3/5) = 360 × 5/3 = 600元'
  },
  {
    id: 551,
    grade: 5,
    category: 'application',
    question: '一个桶装水5升，倒出2/5后，还剩多少升？',
    options: ['2升', '3升', '3.5升', '4升'],
    correctAnswer: 1,
    explanation: '5 × (1 - 2/5) = 5 × 3/5 = 3升'
  },
  {
    id: 552,
    grade: 5,
    category: 'application',
    question: '一个三角形面积是18平方厘米，底是12厘米，高是多少？',
    options: ['2厘米', '3厘米', '4厘米', '6厘米'],
    correctAnswer: 1,
    explanation: '18 × 2 ÷ 12 = 36 ÷ 12 = 3厘米'
  },
  {
    id: 553,
    grade: 5,
    category: 'application',
    question: '一个长方形周长是24厘米，长是8厘米，面积是多少？',
    options: ['12cm²', '16cm²', '24cm²', '32cm²'],
    correctAnswer: 3,
    explanation: '宽 = 24 ÷ 2 - 8 = 4cm，面积 = 8 × 4 = 32cm²'
  },
  {
    id: 554,
    grade: 5,
    category: 'application',
    question: '一本书有200页，第一天看了1/5，第二天看了1/4，两天一共看了多少页？',
    options: ['80页', '90页', '95页', '100页'],
    correctAnswer: 1,
    explanation: '200 × (1/5 + 1/4) = 200 × 9/20 = 90页'
  },
  {
    id: 555,
    grade: 5,
    category: 'application',
    question: '一个班级有40人，女生占3/5，男生有多少人？',
    options: ['12人', '16人', '20人', '24人'],
    correctAnswer: 1,
    explanation: '40 × (1 - 3/5) = 40 × 2/5 = 16人'
  },
  {
    id: 556,
    grade: 5,
    category: 'application',
    question: '水果店有120千克苹果，第一天卖出1/3，第二天卖出1/4，两天共卖出多少？',
    options: ['60千克', '65千克', '70千克', '80千克'],
    correctAnswer: 2,
    explanation: '120 × (1/3 + 1/4) = 120 × 7/12 = 70千克'
  },
  {
    id: 557,
    grade: 5,
    category: 'application',
    question: '一个长方体长8cm，宽5cm，高4cm，体积是多少？',
    options: ['120cm³', '140cm³', '160cm³', '180cm³'],
    correctAnswer: 2,
    explanation: '8 × 5 × 4 = 160cm³'
  },
  {
    id: 558,
    grade: 5,
    category: 'application',
    question: '一个正方体棱长是5cm，体积是多少？',
    options: ['100cm³', '125cm³', '150cm³', '175cm³'],
    correctAnswer: 1,
    explanation: '5 × 5 × 5 = 125cm³'
  },
  {
    id: 559,
    grade: 5,
    category: 'application',
    question: '小刚有糖果120颗，吃了1/3，又给了小明1/4，还剩多少？',
    options: ['40颗', '45颗', '50颗', '60颗'],
    correctAnswer: 2,
    explanation: '120 × (1 - 1/3 - 1/4) = 120 × 5/12 = 50颗'
  },
  {
    id: 560,
    grade: 5,
    category: 'application',
    question: '一个长方体体积是96cm³，底面积是24cm²，高是多少？',
    options: ['3cm', '4cm', '5cm', '6cm'],
    correctAnswer: 1,
    explanation: '96 ÷ 24 = 4cm'
  },

  // 几何题 - 20道
  {
    id: 561,
    grade: 5,
    category: 'geometry',
    question: '三角形的面积是底×高÷2，如果底是6cm，高是4cm，面积是多少？',
    options: ['24cm²', '12cm²', '10cm²', '20cm²'],
    correctAnswer: 1,
    explanation: '6 × 4 ÷ 2 = 12cm²'
  },
  {
    id: 562,
    grade: 5,
    category: 'geometry',
    question: '平行四边形的面积是底×高，如果底是8cm，高是5cm，面积是多少？',
    options: ['40cm²', '26cm²', '13cm²', '20cm²'],
    correctAnswer: 0,
    explanation: '8 × 5 = 40cm²'
  },
  {
    id: 563,
    grade: 5,
    category: 'geometry',
    question: '梯形的面积是(上底+下底)×高÷2，如果上底是3cm，下底是5cm，高是4cm，面积是多少？',
    options: ['14cm²', '16cm²', '18cm²', '20cm²'],
    correctAnswer: 1,
    explanation: '(3 + 5) × 4 ÷ 2 = 16cm²'
  },
  {
    id: 564,
    grade: 5,
    category: 'geometry',
    question: '一个三角形底是10cm，面积是40cm²，高是多少？',
    options: ['6cm', '7cm', '8cm', '10cm'],
    correctAnswer: 2,
    explanation: '40 × 2 ÷ 10 = 8cm'
  },
  {
    id: 565,
    grade: 5,
    category: 'geometry',
    question: '一个平行四边形面积是48cm²，底是8cm，高是多少？',
    options: ['4cm', '5cm', '6cm', '7cm'],
    correctAnswer: 2,
    explanation: '48 ÷ 8 = 6cm'
  },
  {
    id: 566,
    grade: 5,
    category: 'geometry',
    question: '一个长方体长10cm，宽5cm，高4cm，表面积是多少？',
    options: ['160cm²', '180cm²', '200cm²', '220cm²'],
    correctAnswer: 3,
    explanation: '(10×5 + 10×4 + 5×4) × 2 = 220cm²'
  },
  {
    id: 567,
    grade: 5,
    category: 'geometry',
    question: '一个正方体棱长是6cm，表面积是多少？',
    options: ['144cm²', '216cm²', '150cm²', '120cm²'],
    correctAnswer: 1,
    explanation: '6 × 6 × 6 = 216cm²'
  },
  {
    id: 568,
    grade: 5,
    category: 'geometry',
    question: '长方体体积公式是？',
    options: ['长+宽+高', '长×宽+高', '长×宽×高', '(长+宽)×高'],
    correctAnswer: 2,
    explanation: '长方体体积 = 长×宽×高'
  },
  {
    id: 569,
    grade: 5,
    category: 'geometry',
    question: '一个梯形上底4cm，下底6cm，高5cm，面积是多少？',
    options: ['20cm²', '22cm²', '25cm²', '30cm²'],
    correctAnswer: 2,
    explanation: '(4 + 6) × 5 ÷ 2 = 25cm²'
  },
  {
    id: 570,
    grade: 5,
    category: 'geometry',
    question: '两个完全一样的三角形可以拼成什么图形？',
    options: ['长方形', '正方形', '平行四边形', '三角形'],
    correctAnswer: 2,
    explanation: '两个完全一样的三角形可以拼成平行四边形'
  },
  {
    id: 571,
    grade: 5,
    category: 'geometry',
    question: '一个三角形面积是24cm²，高是6cm，底是多少？',
    options: ['6cm', '7cm', '8cm', '10cm'],
    correctAnswer: 2,
    explanation: '24 × 2 ÷ 6 = 8cm'
  },
  {
    id: 572,
    grade: 5,
    category: 'geometry',
    question: '正方体的棱长扩大2倍，体积扩大几倍？',
    options: ['2倍', '4倍', '6倍', '8倍'],
    correctAnswer: 3,
    explanation: '体积扩大8倍'
  },
  {
    id: 573,
    grade: 5,
    category: 'geometry',
    question: '长方体的长、宽、高都扩大2倍，体积扩大几倍？',
    options: ['2倍', '4倍', '6倍', '8倍'],
    correctAnswer: 3,
    explanation: '体积扩大8倍'
  },
  {
    id: 574,
    grade: 5,
    category: 'geometry',
    question: '一个正方体表面积是54cm²，棱长是多少？',
    options: ['2cm', '3cm', '4cm', '5cm'],
    correctAnswer: 1,
    explanation: '54 ÷ 6 = 9cm²，棱长 = √9 = 3cm'
  },
  {
    id: 575,
    grade: 5,
    category: 'geometry',
    question: '长方体有几个面？几个顶点？几条棱？',
    options: ['6,8,12', '8,12,6', '12,6,8', '6,12,8'],
    correctAnswer: 0,
    explanation: '长方体有6个面，8个顶点，12条棱'
  },
  {
    id: 576,
    grade: 5,
    category: 'geometry',
    question: '一个三角形的高是8cm，面积是32cm²，底是多少？',
    options: ['6cm', '7cm', '8cm', '9cm'],
    correctAnswer: 2,
    explanation: '32 × 2 ÷ 8 = 8cm'
  },
  {
    id: 577,
    grade: 5,
    category: 'geometry',
    question: '等腰三角形的两边相等，三条边分别是5cm、5cm、8cm，面积是多少？(用近似值)',
    options: ['10cm²', '12cm²', '14cm²', '16cm²'],
    correctAnswer: 1,
    explanation: '用海伦公式或高计算，面积约12cm²'
  },
  {
    id: 578,
    grade: 5,
    category: 'geometry',
    question: '正方体的棱长总和是48cm，棱长是多少？',
    options: ['2cm', '3cm', '4cm', '6cm'],
    correctAnswer: 2,
    explanation: '48 ÷ 12 = 4cm'
  },
  {
    id: 579,
    grade: 5,
    category: 'geometry',
    question: '一个长方体长8cm，宽4cm，体积是64cm³，高是多少？',
    options: ['1cm', '2cm', '3cm', '4cm'],
    correctAnswer: 1,
    explanation: '64 ÷ (8 × 4) = 2cm'
  },
  {
    id: 580,
    grade: 5,
    category: 'geometry',
    question: '平行四边形和等底等高的三角形面积关系是？',
    options: ['平行四边形大2倍', '三角形大2倍', '相等', '无法比较'],
    correctAnswer: 0,
    explanation: '平行四边形面积是三角形的2倍'
  },
];

// 六年级题库
export const grade6Questions: MathProblem[] = [
  // 百分数计算题 - 20道
  {
    id: 601,
    grade: 6,
    category: 'calculation',
    question: '50的20%是多少？',
    options: ['10', '15', '20', '25'],
    correctAnswer: 0,
    explanation: '50 × 20% = 50 × 0.2 = 10'
  },
  {
    id: 602,
    grade: 6,
    category: 'calculation',
    question: '80的25%是多少？',
    options: ['10', '15', '20', '25'],
    correctAnswer: 2,
    explanation: '80 × 25% = 80 × 0.25 = 20'
  },
  {
    id: 603,
    grade: 6,
    category: 'calculation',
    question: '60的30%是多少？',
    options: ['12', '15', '18', '20'],
    correctAnswer: 2,
    explanation: '60 × 30% = 60 × 0.3 = 18'
  },
  {
    id: 604,
    grade: 6,
    category: 'calculation',
    question: '100的15%是多少？',
    options: ['10', '12', '15', '18'],
    correctAnswer: 2,
    explanation: '100 × 15% = 100 × 0.15 = 15'
  },
  {
    id: 605,
    grade: 6,
    category: 'calculation',
    question: '200的40%是多少？',
    options: ['60', '70', '80', '90'],
    correctAnswer: 2,
    explanation: '200 × 40% = 200 × 0.4 = 80'
  },
  {
    id: 606,
    grade: 6,
    category: 'calculation',
    question: '120的50%是多少？',
    options: ['40', '50', '60', '70'],
    correctAnswer: 2,
    explanation: '120 × 50% = 120 × 0.5 = 60'
  },
  {
    id: 607,
    grade: 6,
    category: 'calculation',
    question: '150的20%是多少？',
    options: ['20', '25', '30', '35'],
    correctAnswer: 2,
    explanation: '150 × 20% = 150 × 0.2 = 30'
  },
  {
    id: 608,
    grade: 6,
    category: 'calculation',
    question: '80的75%是多少？',
    options: ['50', '55', '60', '65'],
    correctAnswer: 2,
    explanation: '80 × 75% = 80 × 0.75 = 60'
  },
  {
    id: 609,
    grade: 6,
    category: 'calculation',
    question: '25的12%是多少？',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: '25 × 12% = 25 × 0.12 = 3'
  },
  {
    id: 610,
    grade: 6,
    category: 'calculation',
    question: '300的35%是多少？',
    options: ['95', '100', '105', '110'],
    correctAnswer: 2,
    explanation: '300 × 35% = 300 × 0.35 = 105'
  },
  {
    id: 611,
    grade: 6,
    category: 'calculation',
    question: '12是60的百分之几？',
    options: ['15%', '20%', '25%', '30%'],
    correctAnswer: 1,
    explanation: '12 ÷ 60 = 0.2 = 20%'
  },
  {
    id: 612,
    grade: 6,
    category: 'calculation',
    question: '15是75的百分之几？',
    options: ['15%', '18%', '20%', '25%'],
    correctAnswer: 2,
    explanation: '15 ÷ 75 = 0.2 = 20%'
  },
  {
    id: 613,
    grade: 6,
    category: 'calculation',
    question: '8是40的百分之几？',
    options: ['15%', '20%', '25%', '30%'],
    correctAnswer: 1,
    explanation: '8 ÷ 40 = 0.2 = 20%'
  },
  {
    id: 614,
    grade: 6,
    category: 'calculation',
    question: '18是90的百分之几？',
    options: ['15%', '20%', '25%', '30%'],
    correctAnswer: 1,
    explanation: '18 ÷ 90 = 0.2 = 20%'
  },
  {
    id: 615,
    grade: 6,
    category: 'calculation',
    question: '24是80的百分之几？',
    options: ['25%', '30%', '35%', '40%'],
    correctAnswer: 1,
    explanation: '24 ÷ 80 = 0.3 = 30%'
  },
  {
    id: 616,
    grade: 6,
    category: 'calculation',
    question: '36是120的百分之几？',
    options: ['25%', '30%', '35%', '40%'],
    correctAnswer: 1,
    explanation: '36 ÷ 120 = 0.3 = 30%'
  },
  {
    id: 617,
    grade: 6,
    category: 'calculation',
    question: '45是180的百分之几？',
    options: ['20%', '22%', '25%', '30%'],
    correctAnswer: 2,
    explanation: '45 ÷ 180 = 0.25 = 25%'
  },
  {
    id: 618,
    grade: 6,
    category: 'calculation',
    question: '60是200的百分之几？',
    options: ['25%', '30%', '35%', '40%'],
    correctAnswer: 1,
    explanation: '60 ÷ 200 = 0.3 = 30%'
  },
  {
    id: 619,
    grade: 6,
    category: 'calculation',
    question: '72是90的百分之几？',
    options: ['70%', '75%', '80%', '85%'],
    correctAnswer: 2,
    explanation: '72 ÷ 90 = 0.8 = 80%'
  },
  {
    id: 620,
    grade: 6,
    category: 'calculation',
    question: '54是150的百分之几？',
    options: ['32%', '34%', '36%', '38%'],
    correctAnswer: 2,
    explanation: '54 ÷ 150 = 0.36 = 36%'
  },

  // 比例计算题 - 20道
  {
    id: 621,
    grade: 6,
    category: 'calculation',
    question: '3 : 4 = ? : 8，问号处填几？',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: '3/4 = x/8，x = 3/4 × 8 = 6'
  },
  {
    id: 622,
    grade: 6,
    category: 'calculation',
    question: '2 : 5 = 6 : ?，问号处填几？',
    options: ['10', '12', '15', '18'],
    correctAnswer: 2,
    explanation: '2/5 = 6/x，x = 6 × 5/2 = 15'
  },
  {
    id: 623,
    grade: 6,
    category: 'calculation',
    question: '5 : 8 = 10 : ?，问号处填几？',
    options: ['12', '14', '16', '18'],
    correctAnswer: 2,
    explanation: '5/8 = 10/x，x = 10 × 8/5 = 16'
  },
  {
    id: 624,
    grade: 6,
    category: 'calculation',
    question: '4 : 7 = ? : 14，问号处填几？',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    explanation: '4/7 = x/14，x = 4/7 × 14 = 8'
  },
  {
    id: 625,
    grade: 6,
    category: 'calculation',
    question: '3 : 2 = ? : 10，问号处填几？',
    options: ['12', '13', '14', '15'],
    correctAnswer: 2,
    explanation: '3/2 = x/10，x = 3/2 × 10 = 15'
  },
  {
    id: 626,
    grade: 6,
    category: 'calculation',
    question: '6 : 5 = 18 : ?，问号处填几？',
    options: ['12', '13', '14', '15'],
    correctAnswer: 3,
    explanation: '6/5 = 18/x，x = 18 × 5/6 = 15'
  },
  {
    id: 627,
    grade: 6,
    category: 'calculation',
    question: '7 : 3 = ? : 12，问号处填几？',
    options: ['24', '26', '28', '30'],
    correctAnswer: 2,
    explanation: '7/3 = x/12，x = 7/3 × 12 = 28'
  },
  {
    id: 628,
    grade: 6,
    category: 'calculation',
    question: '2 : 9 = 4 : ?，问号处填几？',
    options: ['16', '17', '18', '19'],
    correctAnswer: 2,
    explanation: '2/9 = 4/x，x = 4 × 9/2 = 18'
  },
  {
    id: 629,
    grade: 6,
    category: 'calculation',
    question: '5 : 6 = 15 : ?，问号处填几？',
    options: ['16', '17', '18', '19'],
    correctAnswer: 2,
    explanation: '5/6 = 15/x，x = 15 × 6/5 = 18'
  },
  {
    id: 630,
    grade: 6,
    category: 'calculation',
    question: '8 : 3 = ? : 12，问号处填几？',
    options: ['28', '30', '32', '34'],
    correctAnswer: 2,
    explanation: '8/3 = x/12，x = 8/3 × 12 = 32'
  },
  {
    id: 631,
    grade: 6,
    category: 'calculation',
    question: '一个比的比值是0.5，前项是3，后项是？',
    options: ['4', '5', '6', '7'],
    correctAnswer: 2,
    explanation: '3/x = 0.5，x = 3/0.5 = 6'
  },
  {
    id: 632,
    grade: 6,
    category: 'calculation',
    question: '一个比的比值是2，后项是4，前项是？',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    explanation: 'x/4 = 2，x = 2 × 4 = 8'
  },
  {
    id: 633,
    grade: 6,
    category: 'calculation',
    question: '4 : 5 的比值是？',
    options: ['0.6', '0.8', '1.2', '1.25'],
    correctAnswer: 1,
    explanation: '4/5 = 0.8'
  },
  {
    id: 634,
    grade: 6,
    category: 'calculation',
    question: '7 : 4 的比值是？',
    options: ['1.5', '1.6', '1.75', '2'],
    correctAnswer: 2,
    explanation: '7/4 = 1.75'
  },
  {
    id: 635,
    grade: 6,
    category: 'calculation',
    question: '9 : 2 的比值是？',
    options: ['3.5', '4', '4.5', '5'],
    correctAnswer: 2,
    explanation: '9/2 = 4.5'
  },
  {
    id: 636,
    grade: 6,
    category: 'calculation',
    question: '如果 x : 6 = 3 : 2，x 是多少？',
    options: ['7', '8', '9', '10'],
    correctAnswer: 2,
    explanation: 'x/6 = 3/2，x = 3/2 × 6 = 9'
  },
  {
    id: 637,
    grade: 6,
    category: 'calculation',
    question: '如果 8 : x = 4 : 3，x 是多少？',
    options: ['4', '5', '6', '7'],
    correctAnswer: 2,
    explanation: '8/x = 4/3，x = 8 × 3/4 = 6'
  },
  {
    id: 638,
    grade: 6,
    category: 'calculation',
    question: '如果 12 : ? = 3 : 1，问号处填几？',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: '12/x = 3/1，x = 12/3 = 4'
  },
  {
    id: 639,
    grade: 6,
    category: 'calculation',
    question: '比值是0.25的比，前项是1，后项是？',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: '1/x = 0.25，x = 1/0.25 = 4'
  },
  {
    id: 640,
    grade: 6,
    category: 'calculation',
    question: '5 : 8 = 10 : ? = ? : 16，两个问号处分别是？',
    options: ['12, 8', '14, 10', '16, 10', '18, 12'],
    correctAnswer: 2,
    explanation: '10/5 × 8 = 16，5/16 × 8 = 2.5'
  },

  // 应用题 - 20道
  {
    id: 641,
    grade: 6,
    category: 'application',
    question: '一件衣服原价200元，打8折后多少钱？',
    options: ['140元', '150元', '160元', '170元'],
    correctAnswer: 2,
    explanation: '200 × 80% = 160元'
  },
  {
    id: 642,
    grade: 6,
    category: 'application',
    question: '一本书原价50元，打7折后便宜了多少钱？',
    options: ['10元', '15元', '20元', '25元'],
    correctAnswer: 1,
    explanation: '50 × (1 - 70%) = 50 × 0.3 = 15元'
  },
  {
    id: 643,
    grade: 6,
    category: 'application',
    question: '小明有200元，买书用去30%，买文具用去20%，还剩多少？',
    options: ['80元', '90元', '100元', '110元'],
    correctAnswer: 2,
    explanation: '200 × (1 - 30% - 20%) = 200 × 50% = 100元'
  },
  {
    id: 644,
    grade: 6,
    category: 'application',
    question: '一辆汽车每小时行驶80千米，行驶3/4小时后，行驶了多少千米？',
    options: ['50千米', '60千米', '70千米', '80千米'],
    correctAnswer: 1,
    explanation: '80 × 3/4 = 60千米'
  },
  {
    id: 645,
    grade: 6,
    category: 'application',
    question: '一个班级有50人，女生占40%，女生有多少人？',
    options: ['15人', '18人', '20人', '22人'],
    correctAnswer: 2,
    explanation: '50 × 40% = 20人'
  },
  {
    id: 646,
    grade: 6,
    category: 'application',
    question: '一件商品原价300元，先涨价20%，再降价20%，现在的价格是多少？',
    options: ['280元', '288元', '300元', '360元'],
    correctAnswer: 1,
    explanation: '300 × 1.2 × 0.8 = 288元'
  },
  {
    id: 647,
    grade: 6,
    category: 'application',
    question: '甲乙两地相距240千米，一辆汽车行驶了这段路程的75%，行驶了多少千米？',
    options: ['160千米', '170千米', '180千米', '190千米'],
    correctAnswer: 2,
    explanation: '240 × 75% = 180千米'
  },
  {
    id: 648,
    grade: 6,
    category: 'application',
    question: '小明的体重是40千克，是小华的80%，小华的体重是多少？',
    options: ['45千克', '48千克', '50千克', '52千克'],
    correctAnswer: 2,
    explanation: '40 ÷ 80% = 40 ÷ 0.8 = 50千克'
  },
  {
    id: 649,
    grade: 6,
    category: 'application',
    question: '一个工厂生产零件，第一天生产了总数的25%，第二天生产了总数的35%，两天共生产了总数的百分之几？',
    options: ['50%', '55%', '60%', '65%'],
    correctAnswer: 2,
    explanation: '25% + 35% = 60%'
  },
  {
    id: 650,
    grade: 6,
    category: 'application',
    question: '一本书有200页，小明第一天看了20%，第二天看了30%，两天一共看了多少页？',
    options: ['80页', '90页', '100页', '120页'],
    correctAnswer: 2,
    explanation: '200 × (20% + 30%) = 200 × 50% = 100页'
  },
  {
    id: 651,
    grade: 6,
    category: 'application',
    question: '甲乙两数的比是3:5，甲数是12，乙数是多少？',
    options: ['15', '18', '20', '25'],
    correctAnswer: 2,
    explanation: '3:5 = 12:x，x = 12×5/3 = 20'
  },
  {
    id: 652,
    grade: 6,
    category: 'application',
    question: '甲乙丙三人的年龄比是3:4:5，甲是15岁，丙是多少岁？',
    options: ['20岁', '22岁', '25岁', '28岁'],
    correctAnswer: 2,
    explanation: '3:5 = 15:x，x = 15×5/3 = 25岁'
  },
  {
    id: 653,
    grade: 6,
    category: 'application',
    question: '一个三角形三个内角的比是1:2:3，最大的角是多少度？',
    options: ['60°', '80°', '90°', '100°'],
    correctAnswer: 2,
    explanation: '180° ÷ (1+2+3) × 3 = 90°'
  },
  {
    id: 654,
    grade: 6,
    category: 'application',
    question: '甲乙两地相距300千米，一辆汽车行驶了4/5，还剩多少千米？',
    options: ['50千米', '60千米', '80千米', '100千米'],
    correctAnswer: 1,
    explanation: '300 × (1 - 4/5) = 300 × 1/5 = 60千米'
  },
  {
    id: 655,
    grade: 6,
    category: 'application',
    question: '一个圆柱的底面半径是3cm，高是10cm，体积是多少？',
    options: ['90π cm³', '90cm³', '120π cm³', '180π cm³'],
    correctAnswer: 0,
    explanation: 'π × 3² × 10 = 90π cm³'
  },
  {
    id: 656,
    grade: 6,
    category: 'application',
    question: '一个圆柱的底面直径是10cm，高是6cm，体积是多少？',
    options: ['120π cm³', '150π cm³', '180π cm³', '240π cm³'],
    correctAnswer: 1,
    explanation: 'π × 5² × 6 = 150π cm³'
  },
  {
    id: 657,
    grade: 6,
    category: 'application',
    question: '小明存钱，第一个月存了总数的20%，第二个月存了总数的30%，两个月共存了总数的百分之几？',
    options: ['40%', '45%', '50%', '55%'],
    correctAnswer: 2,
    explanation: '20% + 30% = 50%'
  },
  {
    id: 658,
    grade: 6,
    category: 'application',
    question: '一个圆锥的底面半径是4cm，高是9cm，体积是多少？',
    options: ['36π cm³', '48π cm³', '64π cm³', '72π cm³'],
    correctAnswer: 1,
    explanation: '1/3 × π × 4² × 9 = 48π cm³'
  },
  {
    id: 659,
    grade: 6,
    category: 'application',
    question: '甲乙两数的比是4:7，乙数比甲数多18，乙数是多少？',
    options: ['24', '30', '36', '42'],
    correctAnswer: 3,
    explanation: '设甲4x，乙7x，7x-4x=18，3x=18，x=6，乙=7×6=42'
  },
  {
    id: 660,
    grade: 6,
    category: 'application',
    question: '一辆汽车行驶240千米，用油36升，行驶1千米平均用油多少升？',
    options: ['0.1升', '0.12升', '0.15升', '0.18升'],
    correctAnswer: 2,
    explanation: '36 ÷ 240 = 0.15升'
  },

  // 几何题 - 20道
  {
    id: 661,
    grade: 6,
    category: 'geometry',
    question: '圆的周长公式是？',
    options: ['πr²', '2πr', 'πd', 'r²'],
    correctAnswer: 1,
    explanation: '圆的周长 = 2πr'
  },
  {
    id: 662,
    grade: 6,
    category: 'geometry',
    question: '圆的面积公式是？',
    options: ['πr', '2πr', 'πr²', 'πd²'],
    correctAnswer: 2,
    explanation: '圆的面积 = πr²'
  },
  {
    id: 663,
    grade: 6,
    category: 'geometry',
    question: '一个圆的半径是5cm，周长是多少？(π取3.14)',
    options: ['15.7cm', '31.4cm', '47.1cm', '78.5cm'],
    correctAnswer: 1,
    explanation: '2 × 3.14 × 5 = 31.4cm'
  },
  {
    id: 664,
    grade: 6,
    category: 'geometry',
    question: '一个圆的半径是4cm，面积是多少？(π取3.14)',
    options: ['25.12cm²', '38.44cm²', '50.24cm²', '78.5cm²'],
    correctAnswer: 2,
    explanation: '3.14 × 4² = 50.24cm²'
  },
  {
    id: 665,
    grade: 6,
    category: 'geometry',
    question: '一个圆的直径是10cm，周长是多少？(π取3.14)',
    options: ['15.7cm', '31.4cm', '47.1cm', '78.5cm'],
    correctAnswer: 1,
    explanation: '3.14 × 10 = 31.4cm'
  },
  {
    id: 666,
    grade: 6,
    category: 'geometry',
    question: '一个圆的周长是18.84cm，半径是多少？(π取3.14)',
    options: ['2cm', '3cm', '4cm', '5cm'],
    correctAnswer: 1,
    explanation: '18.84 ÷ (2 × 3.14) = 3cm'
  },
  {
    id: 667,
    grade: 6,
    category: 'geometry',
    question: '一个圆的面积是28.26cm²，半径是多少？(π取3.14)',
    options: ['2cm', '3cm', '4cm', '5cm'],
    correctAnswer: 1,
    explanation: '28.26 ÷ 3.14 = 9，√9 = 3cm'
  },
  {
    id: 668,
    grade: 6,
    category: 'geometry',
    question: '半圆的面积公式是？',
    options: ['πr', '1/2πr', '1/2πr²', 'πr²'],
    correctAnswer: 2,
    explanation: '半圆面积 = 1/2πr²'
  },
  {
    id: 669,
    grade: 6,
    category: 'geometry',
    question: '圆环的面积公式是？(R是大圆半径，r是小圆半径)',
    options: ['π(R-r)', 'π(R²-r)', 'π(R²-r²)', '2π(R-r)'],
    correctAnswer: 2,
    explanation: '圆环面积 = π(R²-r²)'
  },
  {
    id: 670,
    grade: 6,
    category: 'geometry',
    question: '一个圆环，外圆半径是6cm，内圆半径是4cm，面积是多少？(π取3.14)',
    options: ['25.12cm²', '47.1cm²', '62.8cm²', '78.5cm²'],
    correctAnswer: 2,
    explanation: '3.14 × (6²-4²) = 3.14 × 20 = 62.8cm²'
  },
  {
    id: 671,
    grade: 6,
    category: 'geometry',
    question: '一个半圆的半径是4cm，周长是多少？(π取3.14)',
    options: ['8.28cm', '12.56cm', '16.56cm', '20.56cm'],
    correctAnswer: 3,
    explanation: 'πr + 2r = 3.14×4 + 8 = 20.56cm'
  },
  {
    id: 672,
    grade: 6,
    category: 'geometry',
    question: '圆柱的体积公式是？(r是底面半径，h是高)',
    options: ['πrh', 'πr²h', '2πrh', 'πr²'],
    correctAnswer: 1,
    explanation: '圆柱体积 = πr²h'
  },
  {
    id: 673,
    grade: 6,
    category: 'geometry',
    question: '圆锥的体积公式是？(r是底面半径，h是高)',
    options: ['πr²h', '1/2πr²h', '1/3πr²h', '2/3πr²h'],
    correctAnswer: 2,
    explanation: '圆锥体积 = 1/3πr²h'
  },
  {
    id: 674,
    grade: 6,
    category: 'geometry',
    question: '一个圆柱的底面半径是2cm，高是5cm，体积是多少？(π取3.14)',
    options: ['31.4cm³', '62.8cm³', '94.2cm³', '125.6cm³'],
    correctAnswer: 1,
    explanation: '3.14 × 2² × 5 = 62.8cm³'
  },
  {
    id: 675,
    grade: 6,
    category: 'geometry',
    question: '一个圆锥的底面半径是3cm，高是4cm，体积是多少？(π取3.14)',
    options: ['25.12cm³', '37.68cm³', '50.24cm³', '75.36cm³'],
    correctAnswer: 1,
    explanation: '1/3 × 3.14 × 3² × 4 = 37.68cm³'
  },
  {
    id: 676,
    grade: 6,
    category: 'geometry',
    question: '圆的半径扩大2倍，周长扩大几倍？',
    options: ['2倍', '4倍', '6倍', '8倍'],
    correctAnswer: 0,
    explanation: '周长扩大2倍'
  },
  {
    id: 677,
    grade: 6,
    category: 'geometry',
    question: '圆的半径扩大2倍，面积扩大几倍？',
    options: ['2倍', '4倍', '6倍', '8倍'],
    correctAnswer: 1,
    explanation: '面积扩大4倍'
  },
  {
    id: 678,
    grade: 6,
    category: 'geometry',
    question: '一个扇形的圆心角是90°，半径是6cm，面积是多少？(π取3.14)',
    options: ['18.84cm²', '28.26cm²', '37.68cm²', '56.52cm²'],
    correctAnswer: 1,
    explanation: '90/360 × 3.14 × 6² = 28.26cm²'
  },
  {
    id: 679,
    grade: 6,
    category: 'geometry',
    question: '圆柱的表面积公式是？(r是底面半径，h是高)',
    options: ['2πrh', '2πr²h', '2πr(r+h)', '2πr² + 2πrh'],
    correctAnswer: 2,
    explanation: '圆柱表面积 = 2πr(r+h)'
  },
  {
    id: 680,
    grade: 6,
    category: 'geometry',
    question: '一个圆柱底面半径是3cm，高是10cm，表面积是多少？(π取3.14)',
    options: ['188.4cm²', '207.24cm²', '244.92cm²', '282.6cm²'],
    correctAnswer: 2,
    explanation: '2 × 3.14 × 3 × (3+10) = 244.92cm²'
  },
];

// 合并所有题目
export const allMathQuestions: MathProblem[] = [
  ...grade3Questions,
  ...grade4Questions,
  ...grade5Questions,
  ...grade6Questions,
];
