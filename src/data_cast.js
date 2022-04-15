const data = [
  {
    id: 3,
    pathname: "/cast",
    navLink: "演出陣容.png",
    title: "演出陣容",
    title_en: "cast",
    content: [
      {
        artist: "Biung 王宏恩",
        image: "王宏恩.jpg",
        bio: [
          "來自台東武陵部落的Biung 王宏恩，二十多年前，一把民謠吉他，堅持唱自己的歌，王宏恩成為當時歌壇第一位用原住民母語創作得到「金曲奬方言男歌手」肯定的原住民創作歌手。王宏恩透過音樂創作，傳達對土地、家人及朋友的愛，並展現文化的傳承與大自然的關懷。",
          "從2000年發行第一張專輯「獵人」以來，至今王宏恩已經累積了六張專輯和一張單曲的成果，也為其他歌手和電視劇創作了無數歌曲，2022年4月更將推出全新全族語創作專輯《Muskun kata一起我們》。從族語創作跨界到流行音樂創作，王宏恩希望自己所寫的跨界音樂能繼續感動很多人，並讓更多的朋友透過他的創作感受到部落的和諧和布農文化的豐富深刻。",
        ],
      },
      {
        artist: "布古拉夫文化藝術團",
        bio: [
          "成立於2015年，團員約二十多人，平均年齡六十歲以上，主要推廣布農族傳統文化，藉由各村文化團的交流、觀摩、研討、學習，進而達到文化統一傳承一致性。成團至今也受邀至各地演出。",
        ],
      },
      {
        artist: "馬詠恩＋Kaviaz樂團",
        image: "馬詠恩.jpg",
        bio: [
          "是來花蓮馬遠部落的馬詠恩，真正的名字Tulbus Mangququ。除了身為歌者，另一身份，則是真正走在山林與山林學習的獵人。現為農男樂團的主唱，以及台玖線樂團的主唱和團長。",
          "「誠實的唱族語歌或族語創作，是一個責任」單純想唱自己的歌給大家聽，從生活中的感動、生命的互動以屬於自己的音樂方式呈現，希望帶給大家純粹的感動。用虔敬謙卑的心，從學生時期的走唱，一直唱到世界各地的大舞台。近期更以專輯編曲身分參與專輯《從此刻起-布農孩子的傳承與跨界》，將布農族音樂推廣至全世界。創作形式及風格不拘，搖滾、藍調、原民風、輕音樂、和聲、福音音樂以及族語創作等等。",
        ],
      },
      {
        artist: "Umaq 屋瑪客夫妻",
        image: "屋瑪客夫妻.jpg",
        bio: [
          "「喜歡就做了，跟著感覺走，沒有猶豫過，就像我們的相遇一樣。」—屋瑪客夫妻。",
          "屋瑪客，umaq，排灣族語，字意為家。取名的靈感來自於夫妻倆經營的一家小 店-屋瑪客，一棟充滿音樂靈魂的老屋子，也是屋瑪客夫妻的開始的地方，從 『家』出發。",
          "屋瑪客夫妻——由有著性感帶點慵懶嗓音的布農族 Savi，與時而鬱悶帶點浪漫，時而狂野又平淡的排灣族阿輝所組成。於 2019 年 12 月 27 日，夫妻倆發行 了首張母語創作 EP，收錄了一首布農族童謠 Kalua(小螞蟻)、排灣語的創作曲 -山腳戀 Gatu gatu 以及布農語的創作曲-對不起 Sumenai。",
        ],
      },
      {
        artist: "全世煌",
        image: "全世煌.jpg",
        bio: [
          "全世煌從小就熱愛演出及創作．國小畢業為了離歌手夢想靠近．決定離開部落到台北一邊讀書一邊歌唱。從在學校、教會唱歌，再到後來的駐唱，以及在網路社群媒體推出音樂作品，終於在2021年完成首張專輯《全世煌同名創作專輯》。",
          "全世煌情感強烈的靈魂唱腔，有著無可取代的歌聲魅力。能動能靜充滿渲染力的歌聲及舞台活力，在這個嘻哈、節奏藍調、電音潮流的時代，如果您在尋找一個感動的靈魂聲音，請在此駐足，聆聽全世煌。",
        ],
      },
      {
        artist: "農男美女",
        image: "農男美女.jpg",
        bio: [
          "成團於2018年。草創初期是由三位海端鄉的布農族男生和一位電光部落的阿美族女生所組成所以團名就此命名。2019年末團員更換。團員全部都是布農族但沒有更換團名，團長覺得這個團名是一個音樂的初衷，所以延續至今。",
          "團員平常就喜歡圍著火彈著吉他，希望可以用歌謠來分享布農族的文化、語言、古調，以及延續過去老人家敘述心情的感受而唱。音樂風格融合一點雷鬼風，也運用布農的和聲技巧。",
        ],
      },
      {
        artist: "小芳家族",
        image: "小芳家族.jpg",
        bio: [
          "成員有媽媽Savi 以及Samingaz水靈、Ibu晨欣、Langui靜、Langus語桐、Ali雨荷五個孩子。我們一家都深愛自己布農族的族群與文化，我們常一起吟唱布農族歌謠，一起田野調查有關布農族先祖的生活智慧。我們一家也常去其他地方或國外交流展演。曾參訪南非、日本、美國、澳洲、蒙古、關島以及大陸等地方。",
        ],
      },
    ],
  },
];

export default data;