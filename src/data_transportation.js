const data = [
  {
    id: 2,
    pathname: "/transportation",
    navLink: "交通資訊.png",
    title: "交通資訊",
    title_en: "transportation",
    content: [
      {
        id: "public-transportation",
        subtitle: "搭乘大衆運輸",
        tabLink: "transportation_tab3.png",
        info: {
          mainHeader: "火車",
          instructions: [
            {
              id: "route1",
              trainStop: "關山火車站",
              options: [
                {
                  id: "taxi",
                  instruction: {
                    taxi: {
                      instruction:
                        "至武陵部落\n約20分鐘\n可在音樂祭\n會場外下車",
                      contact:
                        "計程車 邱先生 0919199508\n東洲計程車 王大哥\n0910398510\n歡迎事先預約",
                    },
                    bus: {
                      busTerminal: "",
                      busStop: "",
                      direction: "",
                      instruction: "",
                      busLines: [],
                      busLinks: [],
                    },
                    shuttleBus: {
                      header: "",
                      instruction: "",
                    },
                  },
                },
                {
                  id: "bus",
                  instruction: {
                    bus: {
                      busTerminal: "",
                      busStop: "鼎東客運關山站",
                      direction: "搭乘「往台東」方向",
                      instruction: "約15分鐘至武陵站下車",
                      busLines: [8161, 8163, 8167],
                      busLinks: ["站牌位置圖", "時刻表查詢"],
                    },
                    shuttleBus: {
                      header: "音樂祭接駁車",
                      instruction:
                        "歡迎來到武陵部落\n下車點附近即為\n音樂祭接駁車候車處\n請跟隨工作人員引導",
                    },
                  },
                },
              ],
            },
            {
              id: "route2",
              trainStop: "鹿野火車站",
              options: [
                {
                  id: "taxi",
                  instruction: {
                    taxi: {
                      instruction:
                        "至武陵部落\n約15分鐘\n可在音樂祭\n會場外下車",
                      contact:
                        "計程車 邱先生 0919199508\n東洲計程車(王大哥)\n0910398510\n歡迎事先預約",
                    },
                    bus: {
                      busTerminal: "",
                      busStop: "",
                      direction: "",
                      instruction: "",
                      busLines: [],
                      busLinks: [],
                    },
                    shuttleBus: {
                      header: "",
                      instruction: "",
                    },
                  },
                },
                {
                  id: "bus",
                  instruction: {
                    bus: {
                      busTerminal: "",
                      busStop: "鼎東客運鹿野站",
                      direction: "搭乘「往池上富里」方向",
                      instruction: "約10分鐘至武陵站下車",
                      busLines: [8161, 8163, 8167],
                      busLinks: ["站牌位置圖", "時刻表查詢"],
                    },
                    shuttleBus: {
                      header: "音樂祭接駁車",
                      instruction:
                        "歡迎來到武陵部落\n下車點附近即為\n音樂祭接駁車候車處\n請跟隨工作人員引導",
                    },
                  },
                },
              ],
            },

            {
              id: "route3",
              trainStop: "台東火車站",
              options: [
                {
                  id: "taxi",
                  instruction: {
                    taxi: {
                      instruction: "至轉運站\n約15分鐘",
                      contact: "",
                    },
                    bus: {
                      busTerminal: "台東轉運站",
                      busStop: "鼎東客運山線",
                      direction: "第三月台",
                      instruction: "約1小時至武陵站下車",
                      busLines: [8161, 8163, 8167],
                      busLinks: ["站牌位置圖", "時刻表查詢"],
                    },
                    shuttleBus: {
                      header: "音樂祭接駁車",
                      instruction:
                        "歡迎來到武陵部落\n下車點附近即為\n音樂祭接駁車候車處\n請跟隨工作人員引導",
                    },
                  },
                },
                {
                  id: "bus",
                  instruction: {
                    bus: {
                      busAfterTrainInstruction:
                        "火車站右前方\n90公尺搭公車\n約20分鐘",
                      busTerminal: "台東轉運站",
                      busStop: "鼎東客運山線",
                      direction: "第三月台",
                      instruction: "約1小時至武陵站下車",
                      busLines: [8161, 8163, 8167],
                      busLinks: ["站牌位置圖", "時刻表查詢"],
                    },
                    shuttleBus: {
                      header: "音樂祭接駁車",
                      instruction:
                        "歡迎來到武陵部落\n下車點附近即為\n音樂祭接駁車候車處\n請跟隨工作人員引導",
                    },
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: "shuttle-bus",
        subtitle: "音樂祭接駁車",
        tabLink: "transportation_tab1.png",
        info: [
          "接駁點一為貨櫃屋，接駁點二為汽車停放區。音樂祭結束後，回程請在接駁點三等候。",
        ],
      },
      {
        id: "by-self",
        subtitle: "自行前往",
        tabLink: "transportation_tab2.png",
        options: [
          {
            option: "█鹿野租機車：",
            info: "https://tour.taitung.gov.tw/zh-tw/shop/detail/1643",
          },
          {
            option: "█關山租車位置圖█",
            info: "關山租車.png",
          },
        ],
        info: [
          "請遵照現場工作人員指引，開車至汽車停車區停放。",
          "汽車停車區設有「音樂祭接駁車」接駁點，可多加利用，也可步行至會場，走路約14分鐘。",
          "騎乘機車的朋友，也請遵照現場工作人員的指引，騎至機車停車區停放。",
        ],
      },

      {
        id: "site-map",
        subtitle: "音樂祭地圖",
        tabLink: "transportation_tab4.png",
        image: "音樂祭地圖.jpg",
      },
    ],
  },
];
export default data;
