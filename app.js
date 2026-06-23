'use strict';

/* ══ INITIAL STATIC DATA PLACEHOLDER ══ */
const EMBEDDED = {
  "members": [
    {
      "id": "mprr85k9g1gna",
      "name": "김성민",
      "gender": "여",
      "birthYear": 1989,
      "age": 38,
      "height": "175",
      "mbti": "ESFP",
      "role": "모임장",
      "grade": "일반",
      "region": "",
      "birth": "1989-04-28",
      "joindate": "2026-05-02",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k97yxve",
      "name": "김동욱",
      "gender": "남",
      "birthYear": 1991,
      "age": 36,
      "height": "180",
      "mbti": "ESTJ",
      "role": "운영진",
      "grade": "일반",
      "region": "",
      "birth": "1991-10-07",
      "joindate": "2026-05-02",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k9zvyq5",
      "name": "이현준",
      "gender": "남",
      "birthYear": 1991,
      "age": 36,
      "height": "179",
      "mbti": "ISTP",
      "role": "운영진",
      "grade": "일반",
      "region": "",
      "birth": "1991-11-16",
      "joindate": "2026-05-02",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k9ouuiu",
      "name": "이세지",
      "gender": "여",
      "birthYear": 1993,
      "age": 34,
      "height": "168",
      "mbti": "ISTJ",
      "role": "운영진",
      "grade": "일반",
      "region": "",
      "birth": "1993-05-10",
      "joindate": "2026-05-02",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k97bcw9",
      "name": "정준기",
      "gender": "남",
      "birthYear": 1992,
      "age": 35,
      "height": "177",
      "mbti": "INFP",
      "role": "일반",
      "grade": "일반",
      "region": "강남",
      "birth": "1992-01-30",
      "joindate": "2026-05-02",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k9eq9jm",
      "name": "박초희",
      "gender": "여",
      "birthYear": 1991,
      "age": 36,
      "height": "166",
      "mbti": "ENTJ",
      "role": "일반",
      "grade": "일반",
      "region": "문정",
      "birth": "1991-01-11",
      "joindate": "2026-05-04",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k9agquc",
      "name": "박초은",
      "gender": "여",
      "birthYear": 1993,
      "age": 34,
      "height": "168",
      "mbti": "INFP",
      "role": "일반",
      "grade": "일반",
      "region": "문정",
      "birth": "1993-02-13",
      "joindate": "2026-05-04",
      "note": "건강이슈 유예",
      "status": "active"
    },
    {
      "id": "mprr85k9ohy9p",
      "name": "김상규",
      "gender": "남",
      "birthYear": 1987,
      "age": 40,
      "height": "180",
      "mbti": "ESFJ",
      "role": "일반",
      "grade": "일반",
      "region": "선정릉",
      "birth": "1987-03-02",
      "joindate": "2026-05-05",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k9mcnt6",
      "name": "김진연",
      "gender": "여",
      "birthYear": 1990,
      "age": 37,
      "height": "164",
      "mbti": "ISTJ",
      "role": "일반",
      "grade": "일반",
      "region": "천호/문정",
      "birth": "1990-12-08",
      "joindate": "2026-05-06",
      "note": "5월 29일 벙 당일취소",
      "status": "active"
    },
    {
      "id": "mprr85k9k3qap",
      "name": "이승민",
      "gender": "남",
      "birthYear": 1992,
      "age": 35,
      "height": "187",
      "mbti": "ISFJ",
      "role": "일반",
      "grade": "일반",
      "region": "천호/부천",
      "birth": "1992-05-02",
      "joindate": "2026-05-06",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k94035j",
      "name": "정세연",
      "gender": "여",
      "birthYear": 1987,
      "age": 40,
      "height": "166",
      "mbti": "ESTP",
      "role": "일반",
      "grade": "일반",
      "region": "송파",
      "birth": "1987-03-20",
      "joindate": "2026-05-06",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k9pmdc9",
      "name": "김원재",
      "gender": "남",
      "birthYear": 1987,
      "age": 40,
      "height": "179",
      "mbti": "ISTP",
      "role": "일반",
      "grade": "일반",
      "region": "송파",
      "birth": "1987-07-30",
      "joindate": "2026-05-08",
      "note": "[6/13]정참고지/늦참만함(다음 경고. 2회 강퇴)",
      "status": "active"
    },
    {
      "id": "mprr85k95r9ih",
      "name": "전해성",
      "gender": "남",
      "birthYear": 1991,
      "age": 36,
      "height": "178",
      "mbti": "ENFJ",
      "role": "일반",
      "grade": "일반",
      "region": "광진",
      "birth": "1991-03-12",
      "joindate": "2026-05-09",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k9c9t2l",
      "name": "김동민",
      "gender": "남",
      "birthYear": 1992,
      "age": 35,
      "height": "180",
      "mbti": "ENFP",
      "role": "일반",
      "grade": "일반",
      "region": "잠새",
      "birth": "1992-12-13",
      "joindate": "2026-05-12",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k94gglj",
      "name": "이승현",
      "gender": "남",
      "birthYear": 1994,
      "age": 33,
      "height": "175",
      "mbti": "ESTJ",
      "role": "일반",
      "grade": "일반",
      "region": "암사/문정",
      "birth": "1994-03-02",
      "joindate": "2026-05-12",
      "note": "[경고] 5/24 선넘는 말\n[주의] 6/6 주시대상",
      "status": "active"
    },
    {
      "id": "mprr85k97pba0",
      "name": "박고은",
      "gender": "여",
      "birthYear": 1996,
      "age": 31,
      "height": "160",
      "mbti": "ENFP",
      "role": "일반",
      "grade": "일반",
      "region": "망원/잠실",
      "birth": "1996-01-23",
      "joindate": "2026-05-12",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k9bdc5t",
      "name": "강명구",
      "gender": "남",
      "birthYear": 1988,
      "age": 39,
      "height": "177",
      "mbti": "ESTP",
      "role": "일반",
      "grade": "일반",
      "region": "잠실/하남",
      "birth": "1988-09-23",
      "joindate": "2026-05-14",
      "note": "[6/20 경고: 벙 늦참해서 아침까지 늘어짐_동욱 / 여자에게 하는행태(한명만걸려라)]",
      "status": "active"
    },
    {
      "id": "mprr85k9d2ojn",
      "name": "이윤주",
      "gender": "여",
      "birthYear": 1993,
      "age": 34,
      "height": "172",
      "mbti": "ISFP",
      "role": "일반",
      "grade": "일반",
      "region": "잠실/선정릉",
      "birth": "1993-10-25",
      "joindate": "2026-05-17",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k9vyvb6",
      "name": "박소진",
      "gender": "여",
      "birthYear": 1994,
      "age": 33,
      "height": "155",
      "mbti": "INFP",
      "role": "일반",
      "grade": "일반",
      "region": "구리/판교",
      "birth": "1994-02-06",
      "joindate": "2026-05-21",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k9fxery",
      "name": "김규린",
      "gender": "여",
      "birthYear": 1989,
      "age": 38,
      "height": "165",
      "mbti": "ENFJ",
      "role": "일반",
      "grade": "일반",
      "region": "방이/반포",
      "birth": "1989-05-04",
      "joindate": "2026-05-22",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k9qbzma",
      "name": "강인호",
      "gender": "남",
      "birthYear": 1993,
      "age": 34,
      "height": "178",
      "mbti": "ISTP",
      "role": "일반",
      "grade": "일반",
      "region": "성남/가락",
      "birth": "1993-01-29",
      "joindate": "2026-05-22",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k9jw1fp",
      "name": "류서연",
      "gender": "여",
      "birthYear": 1988,
      "age": 39,
      "height": "170",
      "mbti": "INFP",
      "role": "일반",
      "grade": "일반",
      "region": "송파",
      "birth": "1988-07-01",
      "joindate": "2026-05-25",
      "note": "",
      "status": "active"
    },
    {
      "id": "mprr85k9820a8",
      "name": "오진성",
      "gender": "남",
      "birthYear": 1995,
      "age": 32,
      "height": "173",
      "mbti": "ISFP",
      "role": "일반",
      "grade": "일반",
      "region": "망우/다산",
      "birth": "1995-09-16",
      "joindate": "2026-05-29",
      "note": "",
      "status": "active"
    },
    {
      "id": "mpuhv7qprun80",
      "name": "조아미",
      "gender": "여",
      "birthYear": 1993,
      "age": 34,
      "height": "162",
      "mbti": "ESTJ",
      "role": "일반",
      "grade": "일반",
      "region": "하남미사",
      "birth": "1993-10-19",
      "joindate": "2026-05-31",
      "note": "",
      "status": "active"
    },
    {
      "id": "mpuhwiz4kowgs",
      "name": "강기성",
      "gender": "남",
      "birthYear": 1988,
      "age": 39,
      "height": "172",
      "mbti": "ESTJ",
      "role": "일반",
      "grade": "일반",
      "region": "마천/성북구",
      "birth": "1988-04-09",
      "joindate": "2026-05-31",
      "note": "",
      "status": "active"
    },
    {
      "id": "mpuk0tuaf15ka",
      "name": "이경진",
      "gender": "여",
      "birthYear": 1993,
      "age": 34,
      "height": "166",
      "mbti": "INTP",
      "role": "일반",
      "grade": "일반",
      "region": "하남/건대",
      "birth": "1993-01-17",
      "joindate": "2026-05-30",
      "note": "",
      "status": "active"
    },
    {
      "id": "mq3evwlyspu06",
      "name": "이현수",
      "gender": "남",
      "birthYear": 1988,
      "age": 39,
      "height": "180",
      "mbti": "ESTJ",
      "role": "일반",
      "grade": "일반",
      "region": "천호/송파",
      "birth": "1988-12-14",
      "joindate": "2026-05-30",
      "note": "",
      "status": "active"
    },
    {
      "id": "mq3ez9oei9moy",
      "name": "주지윤",
      "gender": "여",
      "birthYear": 1993,
      "age": 34,
      "height": "161",
      "mbti": "ISTP",
      "role": "일반",
      "grade": "일반",
      "region": "송파",
      "birth": "1993-07-07",
      "joindate": "2026-06-06",
      "note": "",
      "status": "active"
    },
    {
      "id": "mqced0c4c6ky0",
      "name": "박현철",
      "gender": "남",
      "birthYear": 1989,
      "age": 38,
      "height": "170",
      "mbti": "INTP",
      "role": "일반",
      "grade": "일반",
      "region": "송파/잠실",
      "birth": "1989-03-21",
      "joindate": "2026-06-13",
      "note": "",
      "status": "active"
    },
    {
      "id": "mqkfe0p7b5cwi",
      "name": "김도현",
      "gender": "남",
      "birthYear": 1993,
      "age": 34,
      "height": "182",
      "mbti": "ISFJ",
      "role": "일반",
      "grade": "일반",
      "region": "강동/강동",
      "birth": "1993-05-18",
      "joindate": "2026-06-18",
      "note": "",
      "status": "active"
    },
    {
      "id": "mqkk61x3vquoz",
      "name": "이연호",
      "gender": "남",
      "birthYear": 1991,
      "age": 36,
      "height": "175",
      "mbti": "ESTP",
      "role": "일반",
      "grade": "일반",
      "region": "구의",
      "birth": "1991-08-01",
      "joindate": "2026-06-19",
      "note": "",
      "status": "active"
    }
  ],
  "archived": [
    {
      "id": "mprr85k95u3zt",
      "name": "박웅희",
      "gender": "남",
      "birthYear": 1994,
      "age": 33,
      "height": "",
      "mbti": "",
      "role": "일반",
      "grade": "일반",
      "region": "",
      "birth": "",
      "joindate": "2026-05-04",
      "note": "[강퇴] 2026/5/17",
      "status": "kicked",
      "exitDate": "2026/5/17",
      "period": "5/4~5/17(13일)",
      "reason": "강퇴"
    },
    {
      "id": "mprr85kaxw8hu",
      "name": "허진",
      "gender": "남",
      "birthYear": 1989,
      "age": 38,
      "height": "",
      "mbti": "",
      "role": "일반",
      "grade": "일반",
      "region": "",
      "birth": "",
      "joindate": "2026-05-20",
      "note": "[탈퇴] 2026/5/22",
      "status": "left",
      "exitDate": "2026/5/22",
      "period": "5/20~5/22(2일)",
      "reason": "탈퇴"
    },
    {
      "id": "mprr85kasddgk",
      "name": "김병규",
      "gender": "남",
      "birthYear": 1990,
      "age": 37,
      "height": "",
      "mbti": "",
      "role": "일반",
      "grade": "일반",
      "region": "",
      "birth": "",
      "joindate": "2026-05-17",
      "note": "[강퇴-무응답] 2026/5/23",
      "status": "kicked",
      "exitDate": "2026/5/23",
      "period": "5/17~5/23(6일)",
      "reason": "강퇴-무응답"
    },
    {
      "id": "mprr85karfcat",
      "name": "이현빈",
      "gender": "여",
      "birthYear": 1994,
      "age": 33,
      "height": "",
      "mbti": "",
      "role": "일반",
      "grade": "일반",
      "region": "",
      "birth": "",
      "joindate": "2026-05-23",
      "note": "[탈퇴] 2026/5/25",
      "status": "left",
      "exitDate": "2026/5/25",
      "period": "5/23~5/25(2일)",
      "reason": "탈퇴"
    },
    {
      "id": "mprr85kanhunf",
      "name": "윤수진",
      "gender": "여",
      "birthYear": 1993,
      "age": 34,
      "height": "",
      "mbti": "",
      "role": "일반",
      "grade": "일반",
      "region": "",
      "birth": "",
      "joindate": "2026-05-12",
      "note": "[강퇴-미참석] 2026/5/26",
      "status": "kicked",
      "exitDate": "2026/5/26",
      "period": "5/12~5/26(14일)",
      "reason": "강퇴-미참석"
    },
    {
      "id": "mprr85kahq3ub",
      "name": "김현중",
      "gender": "남",
      "birthYear": 1991,
      "age": 36,
      "height": "",
      "mbti": "",
      "role": "일반",
      "grade": "일반",
      "region": "",
      "birth": "",
      "joindate": "2026-05-19",
      "note": "[자진탈퇴] 2026/5/27",
      "status": "left",
      "exitDate": "2026/5/27",
      "period": "5/19~5/27(8일)",
      "reason": "자진탈퇴"
    },
    {
      "id": "mprr85kav2um8",
      "name": "배하림",
      "gender": "여",
      "birthYear": 1994,
      "age": 33,
      "height": "",
      "mbti": "",
      "role": "일반",
      "grade": "일반",
      "region": "",
      "birth": "",
      "joindate": "2026-05-03",
      "note": "[자진탈퇴(욕설)] 2026/5/28",
      "status": "left",
      "exitDate": "2026/5/28",
      "period": "5/3~5/28(25일)",
      "reason": "자진탈퇴(욕설)"
    },
    {
      "id": "mprrb3zonjara",
      "name": "예시남",
      "gender": "남",
      "birthYear": 1993,
      "age": 34,
      "height": "181",
      "mbti": "INTJ",
      "role": "일반",
      "grade": "일반",
      "region": "송파",
      "birth": "2026-06-05",
      "joindate": "2026-05-29",
      "note": "[강퇴] 2026/5/30",
      "status": "kicked",
      "exitDate": "2026/5/30",
      "period": "5/29~5/30(1일)",
      "reason": "강퇴"
    },
    {
      "id": "mq3ey9v4oss5x",
      "name": "오다미",
      "gender": "여",
      "birthYear": 1991,
      "age": 36,
      "height": "158",
      "mbti": "ISFP",
      "role": "일반",
      "grade": "일반",
      "region": "송파",
      "birth": "1991-04-16",
      "joindate": "2026-06-04",
      "note": "[탈퇴] 2026. 6. 19.",
      "status": "left",
      "exitDate": "2026/6/19",
      "reason": "탈퇴",
      "period": "6/4~6/19(16일)"
    },
    {
      "id": "mprr85k9uek9p",
      "name": "김민호",
      "gender": "남",
      "birthYear": 1990,
      "age": 37,
      "height": "182",
      "mbti": "ISTJ",
      "role": "일반",
      "grade": "일반",
      "region": "분당/잠실",
      "birth": "1990-09-13",
      "joindate": "2026-05-19",
      "note": "[노쇼 6/14]\n[탈퇴] 2026. 6. 21. - 자진탈퇴",
      "status": "left",
      "exitDate": "2026/6/21",
      "reason": "탈퇴(자진탈퇴)",
      "period": "5/19~6/21(34일)"
    },
    {
      "id": "mq3exf7snce45",
      "name": "이예림",
      "gender": "여",
      "birthYear": 1990,
      "age": 37,
      "height": "167",
      "mbti": "ISFP",
      "role": "일반",
      "grade": "일반",
      "region": "강동구청/둔촌",
      "birth": "1990-11-23",
      "joindate": "2026-06-02",
      "note": "[6/6] 당일노쇼\n[탈퇴] 2026. 6. 22. - 사교모임 3개(정리불가) 탈퇴",
      "status": "left",
      "exitDate": "2026/6/22",
      "reason": "탈퇴(사교모임 3개(정리불가) 탈퇴)",
      "period": "6/2~6/22(21일)"
    }
  ],
  "rejects": [
    {
      "id": "mprr85kazb8c4",
      "no": 1,
      "name": "김요섭",
      "gender": "남",
      "rejectDate": "2026-05-06",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kag0pxq",
      "no": 2,
      "name": "이성희",
      "gender": "남",
      "rejectDate": "2026-05-06",
      "reason": "과거 제보",
      "status": "rejected"
    },
    {
      "id": "mprr85kangpmr",
      "no": 3,
      "name": "박기영",
      "gender": "남",
      "rejectDate": "2026-05-09",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85ka7vnqm",
      "no": 4,
      "name": "신세린",
      "gender": "남",
      "rejectDate": "2026-05-11",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kamtn1t",
      "no": 5,
      "name": "강성은",
      "gender": "남",
      "rejectDate": "2026-05-13",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kap5b8y",
      "no": 6,
      "name": "서성민",
      "gender": "여",
      "rejectDate": "2026-05-15",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kak6k8j",
      "no": 7,
      "name": "김형근",
      "gender": "남",
      "rejectDate": "2026-05-16",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85ka09cwo",
      "no": 8,
      "name": "이승조",
      "gender": "남",
      "rejectDate": "2026-05-16",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kadbdqk",
      "no": 9,
      "name": "임성욱",
      "gender": "여",
      "rejectDate": "2026-05-16",
      "reason": "무응답",
      "status": "rejected"
    },
    {
      "id": "mprr85ka9dp7w",
      "no": 10,
      "name": "손창일",
      "gender": "남",
      "rejectDate": "2026-05-16",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kalpzw0",
      "no": 11,
      "name": "박기영",
      "gender": "남",
      "rejectDate": "2026-05-16",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kaom9w6",
      "no": 12,
      "name": "정승",
      "gender": "남",
      "rejectDate": "2026-05-16",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85ka9p2lm",
      "no": 13,
      "name": "마규원",
      "gender": "남",
      "rejectDate": "2026-05-17",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kacy7yf",
      "no": 14,
      "name": "장영대",
      "gender": "남",
      "rejectDate": "2026-05-18",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kajzzz5",
      "no": 15,
      "name": "최경환",
      "gender": "남",
      "rejectDate": "2026-05-18",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85ka65fcj",
      "no": 16,
      "name": "강수현",
      "gender": "남",
      "rejectDate": "2026-05-20",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85katpvf0",
      "no": 17,
      "name": "구하빈",
      "gender": "남",
      "rejectDate": "2026-05-20",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kae22yo",
      "no": 18,
      "name": "양유진",
      "gender": "여",
      "rejectDate": "2026-05-21",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85ka6cm69",
      "no": 19,
      "name": "송찬섭",
      "gender": "남",
      "rejectDate": "2026-05-24",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kanc0df",
      "no": 20,
      "name": "김종윤",
      "gender": "남",
      "rejectDate": "2026-05-24",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kas27vr",
      "no": 21,
      "name": "박형준",
      "gender": "남",
      "rejectDate": "2026-05-25",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85ka3ttjn",
      "no": 22,
      "name": "정용종",
      "gender": "남",
      "rejectDate": "2026-05-23",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kaze38c",
      "no": 23,
      "name": "박선준",
      "gender": "남",
      "rejectDate": "2026-05-25",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kanui04",
      "no": 24,
      "name": "권도우",
      "gender": "남",
      "rejectDate": "2026-05-26",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kae37j6",
      "no": 25,
      "name": "정영흠",
      "gender": "남",
      "rejectDate": "2026-05-26",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kakdo6a",
      "no": 26,
      "name": "황윤상",
      "gender": "남",
      "rejectDate": "2026-05-26",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mprr85kaj8t7t",
      "no": 27,
      "name": "김재석",
      "gender": "남",
      "rejectDate": "2026-05-28",
      "reason": "과거 제보",
      "status": "rejected"
    },
    {
      "id": "mprr85kawssim",
      "no": 28,
      "name": "최승진",
      "gender": "남",
      "rejectDate": "2026-05-28",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mq3frw2ulrxvf",
      "no": 30,
      "name": "정균호",
      "gender": "남",
      "rejectDate": "2026-06-04",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mq3fskcltdppq",
      "no": 31,
      "name": "김동준",
      "gender": "남",
      "rejectDate": "2026-06-03",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mq3ftdlw4pd55",
      "no": 32,
      "name": "임정열",
      "gender": "남",
      "rejectDate": "2026-06-02",
      "reason": "티키타카/반대사유",
      "status": "rejected"
    },
    {
      "id": "mq3ftsjwsphug",
      "no": 33,
      "name": "장신일",
      "gender": "남",
      "rejectDate": "2026-06-02",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mq3fu67zhoynv",
      "no": 34,
      "name": "김윤수",
      "gender": "남",
      "rejectDate": "2026-06-01",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mq3fvh3redwex",
      "no": 35,
      "name": "강병현",
      "gender": "남",
      "rejectDate": "2026-05-28",
      "reason": "투표 반대",
      "status": "rejected"
    },
    {
      "id": "mq6f4ctb6jf9t",
      "no": 36,
      "name": "송기영",
      "gender": "남",
      "rejectDate": "2026-06-09",
      "reason": "투표 반대"
    },
    {
      "id": "mq7coz6kg9ajr",
      "no": 37,
      "name": "박성호",
      "gender": "남",
      "rejectDate": "2026-06-10",
      "reason": "투표 반대"
    },
    {
      "id": "mq7f1s99za0rx",
      "no": 37,
      "name": "전승예",
      "gender": "여",
      "rejectDate": "2026-06-06",
      "reason": "자진탈퇴/무알콜 논의중"
    },
    {
      "id": "mq7t0a3dtfg4r",
      "no": 38,
      "name": "염태환",
      "gender": "남",
      "rejectDate": "2026-06-10",
      "reason": "투표 반대"
    },
    {
      "id": "mq8vucruuto33",
      "no": 39,
      "name": "김명록",
      "gender": "남",
      "rejectDate": "2026-06-10",
      "reason": "투표 반대"
    },
    {
      "id": "mqg5f2akot467",
      "no": 40,
      "name": "차성진",
      "gender": "남",
      "rejectDate": "2026-06-15",
      "reason": "투표 반대"
    },
    {
      "id": "mqkfc1xomk9gv",
      "no": 41,
      "name": "황재민",
      "gender": "남",
      "rejectDate": "2026-06-16",
      "reason": "사교모임3개 적발 강퇴"
    },
    {
      "id": "mqkfceqsf91jg",
      "no": 42,
      "name": "이준호",
      "gender": "남",
      "rejectDate": "2026-06-18",
      "reason": "투표 반대"
    },
    {
      "id": "mqkfczrxuzszt",
      "no": 43,
      "name": "유재민",
      "gender": "남",
      "rejectDate": "2026-06-19",
      "reason": "투표 반대"
    },
    {
      "id": "mqlqkp3jeg7so",
      "no": 44,
      "name": "박병진",
      "gender": "남",
      "rejectDate": "2026-06-20",
      "reason": "투표 반대"
    },
    {
      "id": "mqp9ck3d8w3yi",
      "no": 45,
      "name": "이준흠",
      "gender": "남",
      "rejectDate": "2026-06-22",
      "reason": "투표 반대"
    }
  ],
  "bungs": [
    {
      "id": "mqovxfno5jpnx",
      "title": "초복 삼계탕벙",
      "date": "2026-07-11",
      "attendees": [
        "mprr85k9k3qap",
        "mprr85k9zvyq5"
      ],
      "cancelled": []
    },
    {
      "id": "mqkffnp8grf10",
      "title": "명구 카페급벙",
      "date": "2026-06-17",
      "attendees": [
        "mprr85k9bdc5t",
        "mprr85k9k3qap",
        "mprr85k9fxery"
      ],
      "cancelled": []
    },
    {
      "id": "mqkfekm7otv7d",
      "title": "고은첫벙",
      "date": "2026-06-19",
      "attendees": [
        "mprr85k97pba0",
        "mprr85k94gglj",
        "mprr85k95r9ih",
        "mprr85k9mcnt6",
        "mprr85k9k3qap",
        "mprr85k9bdc5t",
        "mprr85k9g1gna",
        "mqkfe0p7b5cwi",
        "mqkk61x3vquoz"
      ],
      "cancelled": []
    },
    {
      "id": "mqg548z6np1r5",
      "title": "청계산벙",
      "date": "",
      "attendees": [],
      "cancelled": []
    },
    {
      "id": "mqg543env6836",
      "title": "가락시장 대게벙",
      "date": "2026-06-20",
      "attendees": [
        "mprr85k9ouuiu",
        "mprr85k97yxve",
        "mprr85k9g1gna",
        "mprr85k97bcw9",
        "mprr85k9jw1fp",
        "mqced0c4c6ky0",
        "mprr85k94gglj",
        "mprr85k9vyvb6",
        "mprr85k9bdc5t",
        "mprr85k9zvyq5"
      ],
      "cancelled": []
    },
    {
      "id": "mqd89cv6t10lt",
      "title": "준기첫벙",
      "date": "2026-06-18",
      "attendees": [
        "mprr85k97bcw9",
        "mprr85k9zvyq5",
        "mprr85k9bdc5t",
        "mpuhv7qprun80",
        "mq3exf7snce45"
      ],
      "cancelled": []
    },
    {
      "id": "mq9a9qyjxb9yu",
      "title": "문정 삼겹살벙",
      "date": "2026-06-12",
      "attendees": [
        "mprr85k9g1gna",
        "mprr85k9k3qap",
        "mprr85k9bdc5t",
        "mprr85k9d2ojn",
        "mprr85k94gglj",
        "mprr85k9zvyq5",
        "mprr85k97bcw9",
        "mprr85k95r9ih",
        "mprr85k9jw1fp",
        "mq3exf7snce45",
        "mpuhv7qprun80"
      ],
      "cancelled": []
    },
    {
      "id": "mq8z9jb03eycr",
      "title": "팔레트정모",
      "date": "2026-07-04",
      "attendees": [
        "mprr85k9g1gna",
        "mprr85k97yxve",
        "mprr85k9zvyq5",
        "mprr85k9ouuiu",
        "mprr85k97bcw9",
        "mpuhv7qprun80",
        "mprr85k9k3qap",
        "mprr85k9qbzma",
        "mprr85k9jw1fp",
        "mprr85k9d2ojn",
        "mprr85k9pmdc9",
        "mpuk0tuaf15ka",
        "mprr85k94gglj",
        "mprr85k9vyvb6",
        "mprr85k9mcnt6",
        "mq3evwlyspu06",
        "mprr85k9ohy9p",
        "mprr85k9fxery",
        "mpuhwiz4kowgs",
        "mprr85k94035j",
        "mprr85k97pba0",
        "mprr85k9bdc5t",
        "mprr85k9820a8",
        "mprr85k9agquc",
        "mq3ez9oei9moy",
        "mqced0c4c6ky0",
        "mprr85k9c9t2l",
        "mprr85k9eq9jm",
        "mprr85k95r9ih"
      ],
      "cancelled": [
        "mprr85k9jw1fp",
        "mprr85k9pmdc9",
        "mprr85k9mcnt6",
        "mq3evwlyspu06",
        "mpuhwiz4kowgs",
        "mprr85k94035j",
        "mprr85k9820a8",
        "mprr85k9agquc",
        "mq3ez9oei9moy",
        "mprr85k9c9t2l",
        "mprr85k9eq9jm",
        "mprr85k9d2ojn"
      ]
    },
    {
      "id": "mq6i4lkcsw2ie",
      "title": "명구첫벙",
      "date": "2026-06-09",
      "attendees": [
        "mprr85k9bdc5t",
        "mprr85k9k3qap",
        "mprr85k9fxery"
      ],
      "cancelled": []
    },
    {
      "id": "mq58n5sbmwiwq",
      "title": "남양주 논알콜벙",
      "date": "2026-06-14",
      "attendees": [
        "mprr85k9k3qap",
        "mprr85k9g1gna",
        "mprr85k9bdc5t",
        "mprr85k9uek9p",
        "mqced0c4c6ky0",
        "mprr85k9zvyq5"
      ],
      "cancelled": [
        "mprr85k9uek9p"
      ]
    },
    {
      "id": "mq3f7n0idr5s1",
      "title": "카페투벙",
      "date": "2026-06-07",
      "attendees": [
        "mprr85k9g1gna",
        "mprr85k95r9ih",
        "mprr85k94035j"
      ],
      "cancelled": []
    },
    {
      "id": "mq3f5y279iabx",
      "title": "방먹 금회번개",
      "date": "2026-06-05",
      "attendees": [
        "mprr85k9ouuiu",
        "mprr85k9g1gna",
        "mprr85k9k3qap",
        "mprr85k9bdc5t",
        "mprr85k9fxery",
        "mpuhwiz4kowgs",
        "mprr85k9ohy9p",
        "mprr85k9820a8"
      ],
      "cancelled": []
    },
    {
      "id": "mq3f2kui8wg5x",
      "title": "군체영화벙",
      "date": "2026-06-07",
      "attendees": [
        "mprr85k9g1gna",
        "mprr85k94035j",
        "mprr85k9qbzma",
        "mprr85k9d2ojn",
        "mprr85k9zvyq5",
        "mprr85k9jw1fp"
      ],
      "cancelled": []
    },
    {
      "id": "mpui0tkymisdk",
      "title": "올공 논알콜벙",
      "date": "2026-06-13",
      "attendees": [
        "mprr85k9ouuiu",
        "mprr85k9qbzma",
        "mpuk0tuaf15ka",
        "mprr85k9g1gna"
      ],
      "cancelled": []
    },
    {
      "id": "mpuhz8o5ficvl",
      "title": "문정 불토벙",
      "date": "2026-06-06",
      "attendees": [
        "mprr85k97yxve",
        "mprr85k9zvyq5",
        "mprr85k97bcw9",
        "mprr85k9k3qap",
        "mprr85k94gglj",
        "mprr85k97pba0",
        "mprr85k9d2ojn",
        "mprr85k9uek9p",
        "mprr85k9jw1fp",
        "mpuhv7qprun80",
        "mq3exf7snce45",
        "mq3ey9v4oss5x",
        "mq3ez9oei9moy",
        "mprr85k9bdc5t"
      ],
      "cancelled": [
        "mq3exf7snce45"
      ]
    },
    {
      "id": "mprry2fy3jemx",
      "title": "방먹 간술포차벙",
      "date": "2026-06-02",
      "attendees": [
        "mprr85k9ouuiu",
        "mprr85k9g1gna",
        "mprr85k94035j",
        "mprr85k9uek9p",
        "mprr85k9qbzma",
        "mq3evwlyspu06"
      ],
      "cancelled": []
    },
    {
      "id": "mpuhxwz8v7nw0",
      "title": "5월막벙",
      "date": "2026-05-30",
      "attendees": [
        "mprr85k97yxve",
        "mprr85k9g1gna",
        "mprr85k9k3qap",
        "mprr85k9bdc5t",
        "mprr85k9fxery"
      ],
      "cancelled": []
    },
    {
      "id": "mprr85ka5oed1",
      "title": "첫벙",
      "date": "2026-05-09",
      "attendees": [
        "mprr85k9g1gna",
        "mprr85k97yxve",
        "mprr85k9zvyq5",
        "mprr85k9ouuiu",
        "mprr85k97bcw9",
        "mprr85kav2um8",
        "mprr85k9eq9jm",
        "mprr85k9agquc",
        "mprr85k95u3zt",
        "mprr85k9mcnt6",
        "mprr85k9k3qap"
      ],
      "cancelled": []
    },
    {
      "id": "mprr85ka68ta7",
      "title": "야구벙v1",
      "date": "2026-05-14",
      "attendees": [
        "mprr85k9ouuiu",
        "mprr85k9ohy9p"
      ],
      "cancelled": []
    },
    {
      "id": "mprr85kafrso9",
      "title": "굽돌벙",
      "date": "2026-05-15",
      "attendees": [
        "mprr85k9g1gna",
        "mprr85k95u3zt",
        "mprr85k9ohy9p",
        "mprr85k94035j",
        "mprr85k95r9ih",
        "mprr85k9bdc5t"
      ],
      "cancelled": []
    },
    {
      "id": "mprr85kadh5vp",
      "title": "냉삼벙",
      "date": "2026-05-16",
      "attendees": [
        "mprr85k9g1gna",
        "mprr85k97yxve",
        "mprr85k9zvyq5",
        "mprr85k9ouuiu",
        "mprr85k95u3zt",
        "mprr85k9k3qap",
        "mprr85k9bdc5t"
      ],
      "cancelled": []
    },
    {
      "id": "mprr85ka7s6qp",
      "title": "쭈꾸미벙",
      "date": "2026-05-19",
      "attendees": [
        "mprr85k9bdc5t",
        "mprr85k9g1gna",
        "mprr85k94035j",
        "mprr85k9pmdc9"
      ],
      "cancelled": []
    },
    {
      "id": "mprr85ka38dru",
      "title": "족발벙",
      "date": "2026-05-22",
      "attendees": [
        "mprr85k9k3qap",
        "mprr85k9bdc5t",
        "mprr85k9g1gna",
        "mprr85kahq3ub",
        "mprr85k9fxery"
      ],
      "cancelled": []
    },
    {
      "id": "mprr85kat5ya3",
      "title": "영화벙",
      "date": "2026-05-23",
      "attendees": [
        "mprr85kav2um8",
        "mprr85k9ouuiu",
        "mprr85k97pba0",
        "mprr85k94gglj",
        "mprr85k9bdc5t",
        "mprr85k9k3qap",
        "mprr85k9zvyq5",
        "mprr85k97yxve",
        "mprr85k9vyvb6",
        "mprr85k9g1gna"
      ],
      "cancelled": []
    },
    {
      "id": "mprr85kahwxjd",
      "title": "송리단길벙",
      "date": "2026-05-24",
      "attendees": [
        "mprr85k9g1gna",
        "mprr85k94035j",
        "mprr85k9d2ojn",
        "mprr85k9uek9p",
        "mprr85k9qbzma",
        "mprr85k9k3qap"
      ],
      "cancelled": []
    },
    {
      "id": "mprr85kaf9t6x",
      "title": "번개벙",
      "date": "2026-05-28",
      "attendees": [
        "mprr85k9g1gna",
        "mprr85k94035j",
        "mprr85k9mcnt6",
        "mprr85k9c9t2l",
        "mprr85k9jw1fp",
        "mprr85k9bdc5t",
        "mprr85k97yxve",
        "mprr85k9fxery",
        "mprr85k9pmdc9"
      ],
      "cancelled": []
    },
    {
      "id": "mprr85kan8xrp",
      "title": "천호벙",
      "date": "2026-05-29",
      "attendees": [
        "mprr85k95r9ih",
        "mprr85k9g1gna",
        "mprr85k9zvyq5",
        "mprr85k9k3qap",
        "mprr85k9mcnt6"
      ],
      "cancelled": [
        "mprr85k9mcnt6"
      ]
    }
  ],
  "warnings": [
    {
      "id": "mprr85kaywcls",
      "name": "배하림",
      "date": "2026-05-24",
      "type": "경고",
      "reason": "욕설(성민·명구·현준)",
      "memberId": "mprr85kav2um8"
    },
    {
      "id": "mprr85ka9mrnn",
      "name": "이승현",
      "date": "2026-05-24",
      "type": "경고",
      "reason": "선넘는 말·행동",
      "memberId": "mprr85k94gglj"
    },
    {
      "id": "mqolcupnl9i89",
      "name": "강명구",
      "date": "2026-06-20",
      "type": "경고",
      "reason": "벙 늦참해서 아침까지 늘어짐 / 여자에게 하는행태(한명만걸려라)_동욱",
      "memberId": "mprr85k9bdc5t"
    }
  ],
  "settlements": {
    "mqkfekm7otv7d": [
      {
        "id": "mqljzi7mnwysk",
        "savedAt": "2026-06-19T23:24:49.930Z",
        "bungTitle": "고은첫벙",
        "bungDate": "2026-06-19",
        "host": "박고은",
        "acct": "하나은행 376-910175-69407 박고은",
        "moimOn": true,
        "bjOn": true,
        "noBj": false,
        "members": [
          {
            "name": "박고은",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "이승현",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "전해성",
            "prepay": 0,
            "note": "1차 논알콜"
          },
          {
            "name": "김진연",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "이승민",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "강명구",
            "prepay": 0,
            "note": "2차 11시참석"
          },
          {
            "name": "김성민",
            "prepay": 0,
            "note": "1,2차 논알콜"
          },
          {
            "name": "김도현",
            "prepay": 30000,
            "note": ""
          },
          {
            "name": "이연호",
            "prepay": 30000,
            "note": ""
          }
        ],
        "costs": [
          {
            "label": "1차",
            "place": "일월의밤",
            "total": 133100,
            "liquor": 51500,
            "drink": 6000
          },
          {
            "label": "2차",
            "place": "고구려",
            "total": 155500,
            "liquor": 69500,
            "drink": 3000
          },
          {
            "label": "3차",
            "place": "7번방",
            "total": 108700,
            "liquor": 0,
            "drink": 0
          }
        ],
        "opts": {
          "0": {
            "2": {
              "late": 0.4
            }
          },
          "1": {
            "0": {
              "late": -0.5
            },
            "2": {
              "late": -0.4
            }
          },
          "2": {
            "0": {
              "nalcohol": true,
              "late": 0
            },
            "1": {
              "exempt": true
            },
            "2": {
              "exempt": true,
              "late": 0
            }
          },
          "3": {
            "2": {
              "late": 0,
              "nalcohol": true
            }
          },
          "5": {
            "0": {
              "exempt": true
            },
            "1": {
              "nalcohol": false,
              "late": 10351
            }
          },
          "6": {
            "0": {
              "nalcohol": true,
              "late": 0.5
            },
            "1": {
              "nalcohol": true
            },
            "2": {
              "exempt": true
            }
          },
          "7": {
            "2": {
              "exempt": true
            }
          },
          "8": {
            "0": {
              "exempt": true
            },
            "1": {
              "nalcohol": false
            },
            "2": {
              "late": 0
            }
          }
        },
        "manualTotal": {}
      }
    ],
    "mqg543env6836": [
      {
        "id": "mqmktfq5jnx5j",
        "savedAt": "2026-06-20T16:51:06.532Z",
        "bungTitle": "가락시장 대게벙",
        "bungDate": "2026-06-20",
        "host": "이세지",
        "acct": "토스뱅크 100010605868 이세지",
        "moimOn": true,
        "bjOn": true,
        "noBj": false,
        "members": [
          {
            "name": "이세지",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "김동욱",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "김성민",
            "prepay": 0,
            "note": "1차 논알콜"
          },
          {
            "name": "정준기",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "류서연",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "박현철",
            "prepay": 0,
            "note": "논알콜"
          },
          {
            "name": "이승현",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "박소진",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "강명구",
            "prepay": 0,
            "note": "늦참,물마심"
          },
          {
            "name": "이현준",
            "prepay": 0,
            "note": ""
          }
        ],
        "costs": [
          {
            "label": "1차",
            "place": "향기수산",
            "total": 330000,
            "liquor": 0,
            "drink": 0
          },
          {
            "label": "1차",
            "place": "다미정",
            "total": 138000,
            "liquor": 36000,
            "drink": 8000
          },
          {
            "label": "2차",
            "place": "리얼펍가락",
            "total": 171100,
            "liquor": 102600,
            "drink": 6000
          }
        ],
        "opts": {
          "0": {
            "1": {
              "exempt": false
            },
            "2": {
              "late": 0
            }
          },
          "2": {
            "0": {
              "nalcohol": false
            },
            "1": {
              "nalcohol": true
            },
            "2": {
              "late": 0
            }
          },
          "3": {
            "2": {
              "late": 0
            }
          },
          "4": {
            "2": {
              "late": 1
            }
          },
          "5": {
            "0": {
              "nalcohol": false
            },
            "1": {
              "nalcohol": true
            },
            "2": {
              "nalcohol": true,
              "late": -4
            }
          },
          "6": {
            "2": {
              "late": 1
            }
          },
          "7": {
            "0": {
              "exempt": true
            },
            "1": {
              "exempt": true
            },
            "2": {
              "late": 1
            }
          },
          "8": {
            "0": {
              "exempt": true
            },
            "1": {
              "exempt": true
            },
            "2": {
              "exempt": true,
              "late": 0
            }
          },
          "9": {
            "0": {
              "exempt": true
            },
            "1": {
              "exempt": true
            },
            "2": {
              "late": 1
            }
          }
        },
        "manualTotal": {}
      },
      {
        "id": "mqmlimgyo1tut",
        "savedAt": "2026-06-21T07:15:47.939Z",
        "bungTitle": "가락시장 대게벙",
        "bungDate": "2026-06-20",
        "host": "이세지",
        "acct": "신한 110-315-001521 김동욱",
        "moimOn": false,
        "bjOn": false,
        "noBj": false,
        "members": [
          {
            "name": "김동욱",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "김성민",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "정준기",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "류서연",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "박현철",
            "prepay": 0,
            "note": "3차 논알콜"
          },
          {
            "name": "이승현",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "박소진",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "강명구",
            "prepay": 0,
            "note": ""
          },
          {
            "name": "이현준",
            "prepay": 0,
            "note": ""
          }
        ],
        "costs": [
          {
            "label": "3차",
            "place": "명불허전",
            "total": 179000,
            "liquor": 94000,
            "drink": 4000
          },
          {
            "label": "4차",
            "place": "노래방",
            "total": 43000,
            "liquor": 0,
            "drink": 0
          }
        ],
        "opts": {
          "0": {
            "0": {
              "late": 0
            }
          },
          "4": {
            "0": {
              "nalcohol": true,
              "late": -2.5
            },
            "1": {
              "exempt": true
            }
          },
          "6": {
            "0": {
              "late": 0.5
            },
            "1": {
              "exempt": true
            }
          },
          "7": {
            "0": {
              "late": 1
            }
          },
          "8": {
            "0": {
              "late": 1
            }
          }
        },
        "manualTotal": {}
      }
    ]
  }
};

/* ══ 비밀번호 및 권한 관리 ══ */
const PW_VIEW = '0505';
const PW_ADMIN = '0510';
let _isAdmin = false;
let _tab = 1;

let _isUnlocked = false;

async function checkPw() {
  const v = (document.getElementById('pwInput').value || '').trim();
  if (v === PW_ADMIN || v === PW_VIEW) {
    const err = document.getElementById('pwErr');
    if (err) {
      err.textContent = '🔒 데이터 연결 중... 잠시만 기다려주세요.';
      err.style.color = 'var(--pri)';
    }
    
    _isAdmin = (v === PW_ADMIN);
    _isUnlocked = true;
    
    // Defer loading of Firestore or fallback embedded data until authenticated
    await loadData();
    
    // Subscribe to Firebase real-time onSnapshot updates
    if (window._fbSubscribe) {
      window._fbSubscribe();
    }
    
    unlock(_isAdmin);
    renderAll();
  } else {
    document.getElementById('pwErr').textContent = '비밀번호가 올바르지 않습니다.';
    document.getElementById('pwErr').style.color = '#dc2626';
    document.getElementById('pwInput').value = '';
    document.getElementById('pwInput').focus();
  }
}

function unlock(isAdmin) {
  const appContent = document.getElementById('appContent');
  if (appContent) {
    appContent.style.display = 'block';
  }
  
  document.getElementById('lockScreen').style.display = 'none';
  document.getElementById('t2btn').style.display = '';
  const bcs = document.getElementById('bCreateSection');
  if (bcs) bcs.style.display = isAdmin ? 'block' : 'none';
  
  ['stlNewBtn', 'stlSaveAcctBtn', 'stlAddCostBtn', 'stlAddMemBtn', 'stlSaveBtn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = isAdmin ? '' : 'none';
  });

  document.getElementById('mLeft').style.display = isAdmin ? '' : 'none';
  document.getElementById('mGrid').style.gridTemplateColumns = isAdmin ? '310px 1fr' : '1fr';
  document.getElementById('mMgmtH').style.display = isAdmin ? '' : 'none';
  document.getElementById('btnImport').style.display = isAdmin ? '' : 'none';
  document.getElementById('rjDelH').style.display = isAdmin ? '' : 'none';
  
  const wdh = document.getElementById('wDelH');
  if (wdh) wdh.style.display = isAdmin ? '' : 'none';
  
  const kvf = document.getElementById('kvFixH');
  if (kvf) kvf.style.display = isAdmin ? '' : 'none';
  
  if (!isAdmin) {
    const o = document.getElementById('opTop');
    if (o && !o.innerHTML.includes('👁 조회 전용')) {
      o.innerHTML = o.textContent + ' <span style="background:var(--rose-light);color:var(--rose);padding:2px 8px;border-radius:99px;font-size:10px;margin-left:4px;">👁 조회 전용</span>';
    }
  }
}

/* ══ 탭 전환 ══ */
function switchTab(n) {
  _tab = n;
  [1, 2, 3].forEach(i => {
    document.getElementById('tab' + i).style.display = i === n ? 'block' : 'none';
    document.getElementById('t' + i + 'btn').className = 'tb ' + (i === n ? 'ta' : 'ti');
  });
  if (n === 3) safe(renderDash);
}

/* ══ 실행 예외 처리용 래퍼 ══ */
function safe(fn, ...a) {
  try {
    return fn(...a);
  } catch (e) {
    console.error(`Error in function ${fn?.name}:`, e);
  }
}

/* ══ 글로벌 날짜 필터 ══ */
const GF = {
  all: false,
  key() {
    if (this.all) return 'ALL';
    const y = document.getElementById('dY').value;
    const m = document.getElementById('dM').value;
    if (y && m) return y + '-' + m;
    return latestK();
  },
  label() {
    const k = this.key();
    return k === 'ALL' ? '전체 누적' : mkLbl(k);
  }
};

/* ══ STATE ══ */
let S = { members: [], archived: [], rejects: [], bungs: [], warnings: [], settlements: {} };

/**
 * Migration helper for Member records
 */
function migM(m) {
  if (!m) return null;
  m.id = m.id || uid();
  m.name = m.name || '(이름없음)';
  m.status = m.status || 'active';
  m.note = m.note || '';
  m.gender = m.gender || '';
  m.mbti = m.mbti || '';
  m.role = m.role || '일반';
  m.grade = m.grade || '일반';
  m.region = m.region || '';
  m.height = m.height || '';
  m.birth = m.birth || '';
  m.joindate = m.joindate || '';

  // Dynamic age calculation based on selected reference date or current calendar year
  const refYear = new Date(getRef()).getFullYear();
  if (!m.birthYear || m.birthYear < 1900) {
    m.birthYear = (m.age && +m.age > 0) ? refYear - +m.age + 1 : null;
  }
  m.age = m.birthYear ? refYear - +m.birthYear + 1 : (+m.age || null);
  return m;
}

/**
 * Migration helper for Bung (gathering) records
 */
function migB(b) {
  if (!b) return null;
  b.id = b.id || uid();
  b.title = b.title || '(제목없음)';
  b.date = b.date || '';
  b.attendees = Array.isArray(b.attendees) ? b.attendees : [];
  b.cancelled = Array.isArray(b.cancelled) ? b.cancelled : [];
  return b;
}

function applyData(raw) {
  S.members = (raw.members || []).map(migM).filter(Boolean);
  S.archived = (raw.archived || []).map(migM).filter(Boolean);
  S.rejects = raw.rejects || [];
  S.bungs = (raw.bungs || []).map(migB).filter(Boolean);
  
  // Filter out any older duplicate dynamic warnings
  S.warnings = (raw.warnings || []).filter(w => w.type !== '노쇼');
  S.settlements = raw.settlements || {};
  window._S = S;
}

window._syncField = (field, data) => {
  if (!_isUnlocked) return;
  if (field === 'members' || field === 'archived') {
    S[field] = data.map(migM).filter(Boolean);
  } else if (field === 'bungs') {
    S[field] = data.map(migB).filter(Boolean);
  } else {
    S[field] = data;
  }
  window._S = S;
  renderAll();
  const si = document.getElementById('si');
  if (si) {
    si.textContent = '✅ ' + new Date().toLocaleTimeString('ko');
    si.style.color = '#059669';
  }
};

async function loadData() {
  const si = document.getElementById('si');
  if (si) {
    si.textContent = '🔄 연결 중...';
    si.style.color = 'var(--mt)';
  }
  let tries = 0;
  // Poll for Firestore module initialization
  while (!window._fbInitOk && tries < 20) {
    await new Promise(r => setTimeout(r, 200));
    tries++;
  }
  try {
    const ok = window._fbLoad && await window._fbLoad();
    if (ok && window._remote && window._remote.members && window._remote.members.length > 0) {
      applyData(window._remote);
      if (si) {
        si.textContent = '✅ Firebase 동기화됨';
        si.style.color = '#059669';
      }
      return;
    }
  } catch (e) {
    console.warn('Firebase load error, falling back to static embedded data', e);
  }
  
  if (si) {
    si.textContent = '📦 초기 데이터 업로드 중...';
    si.style.color = 'var(--gold)';
  }
  applyData(JSON.parse(JSON.stringify(EMBEDDED)));
  if (window._fbSaveMember) {
    try {
      for (const m of S.members) await window._fbSaveMember(m);
      for (const m of S.archived) await window._fbSaveArchived(m);
      for (const r of S.rejects) await window._fbSaveReject(r);
      for (const b of S.bungs) await window._fbSaveBung(b);
      for (const w of S.warnings) await window._fbSaveWarning(w);
      for (const [bId, sheets] of Object.entries(S.settlements)) {
        await window._fbSaveSettlement(bId, sheets);
      }
    } catch (err) {
      console.error("Fallback seed write failed:", err);
    }
  }
  await save();
  if (si) {
    si.textContent = '✅ 초기 데이터 저장 완료';
    si.style.color = '#059669';
  }
}

async function save() {
  window._S = S;
}

/* ══ HELPERS ══ */
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function esc(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function kr(y) {
  if (!y || +y <= 1900) return null;
  const refYear = new Date(getRef()).getFullYear();
  return refYear - +y + 1;
}

const closeM = id => {
  document.getElementById(id).style.display = 'none';
};

const getTodayKST = () => {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${dd}`;
};

const getRef = () => document.getElementById('refDate').value || getTodayKST();
const START = new Date('2026-05-05');

const opDays = () => {
  const t = new Date(getRef());
  t.setHours(0, 0, 0, 0);
  return Math.max(1, Math.floor((t - START) / 86400000) + 1);
};

const dtKey = d => (d ? String(d).slice(0, 7) : '');
const mkLbl = k => {
  if (!k) return '';
  const [y, m] = k.split('-');
  return y + '년 ' + parseInt(m, 10) + '월';
};

const allMK = () => {
  const s = new Set();
  S.bungs.forEach(b => {
    const k = dtKey(b.date);
    if (k) s.add(k);
  });
  return [...s].sort();
};

const latestK = () => {
  const now = new Date();
  const cy = now.getFullYear();
  const cm = String(now.getMonth() + 1).padStart(2, '0');
  const currentKey = cy + '-' + cm;
  const keys = allMK();
  if (keys.includes(currentKey)) return currentKey;
  return keys.length ? keys[keys.length - 1] : currentKey;
};

const bFor = key => S.bungs.filter(b => dtKey(b.date) === key).sort((a, b) => b.date.localeCompare(a.date));
const dBadge = d => {
  if (!d) return '';
  const dt = new Date(d);
  return (dt.getMonth() + 1) + '/' + dt.getDate();
};

const activeM = () => S.members.filter(m => m.status === 'active');
const resolve = id => [...S.members, ...S.archived].find(x => x.id === id || x.name === id) || null;

const calcGR = ids => {
  let m = 0, f = 0;
  ids.forEach(id => {
    const p = resolve(id);
    if (p) {
      if (p.gender === '남') m++;
      else if (p.gender === '여') f++;
    }
  });
  return { m, f };
};

const isUp = b => b.date && b.date > getRef();

function getBungsGF() {
  const k = GF.key();
  return k === 'ALL' ? [...S.bungs].sort((a, b) => b.date.localeCompare(a.date)) : bFor(k);
}

/**
 * Returns noshow warnings derived dynamically from cancelled attendees in bungs
 */
function deriveNoshows(kf) {
  const r = [];
  S.bungs.forEach(b => {
    if (!b.cancelled || !b.cancelled.length) return;
    if (kf !== 'ALL' && dtKey(b.date) !== kf) return;
    b.cancelled.forEach(id => {
      const p = resolve(id);
      if (!p) return;
      r.push({
        id: 'noshow-' + b.id + '-' + id, // Unique identifier to enable dynamic deletion
        name: p.name,
        date: b.date,
        type: '노쇼',
        reason: '당일 취소',
        memberId: id
      });
    });
  });
  return r;
}

function getMergedW(kf) {
  const w = kf === 'ALL' ? (S.warnings || []) : (S.warnings || []).filter(w => w.date && dtKey(w.date) === kf);
  return [...w, ...deriveNoshows(kf)].sort((a, b) => (a.date || '').localeCompare(b.date || ''));
}

function joinDays(m) {
  if (!m.joindate) return '-';
  const ref = new Date(getRef());
  ref.setHours(0, 0, 0, 0);
  const jd = new Date(m.joindate);
  jd.setHours(0, 0, 0, 0);
  const d = Math.floor((ref - jd) / 86400000) + 1;
  return d >= 1 ? d + '일째' : '-';
}

function joinDaysNum(m) {
  if (!m.joindate) return 0;
  const ref = new Date(getRef());
  ref.setHours(0, 0, 0, 0);
  const jd = new Date(m.joindate);
  jd.setHours(0, 0, 0, 0);
  return Math.floor((ref - jd) / 86400000) + 1;
}

function isNew(m) {
  if (!m.joindate) return false;
  const ref = new Date(getRef());
  ref.setHours(0, 0, 0, 0);
  const jd = new Date(m.joindate);
  jd.setHours(0, 0, 0, 0);
  const d = Math.floor((ref - jd) / 86400000) + 1;
  return d >= 1 && d <= 7;
}

function previewAge() {
  const y = parseInt(document.getElementById('fby').value || '0', 10);
  document.getElementById('fap').textContent = (y > 1900 && y < 2030) ? '→ 나이: ' + kr(y) + '세' : '';
}

function previewEditAge() {
  const y = parseInt(document.getElementById('eby').value || '0', 10);
  document.getElementById('eap').textContent = (y > 1900 && y < 2030) ? '→ 나이: ' + kr(y) + '세' : '';
}

function onRefChange() {
  safe(renderMembers);
  safe(updateOpDays);
  // Re-calculate dynamic ages and periods
  S.members.forEach(migM);
  S.archived.forEach(migM);
}

function updateOpDays() {
  const d = opDays();
  const t = document.getElementById('opTop');
  if (t) t.textContent = '🌿 개설 ' + d + '일째';
  const o = document.getElementById('sOp');
  if (o) o.textContent = '🌿 개설 ' + d + '일째';
}

function copyEl(id) {
  navigator.clipboard.writeText(document.getElementById(id).textContent)
    .then(() => alert('복사 완료!'))
    .catch(() => alert('직접 선택 후 복사해 주세요.'));
}

function renderHistBox(panelId, memberId) {
  const panel = document.getElementById(panelId);
  if (!panel) return;
  const p = resolve(memberId);
  if (!p) {
    panel.style.display = 'none';
    return;
  }
  const myB = S.bungs.filter(b => b.attendees.includes(p.id)).sort((a, b) => b.date.localeCompare(a.date));
  const wCnt = (S.warnings || []).filter(w => w.memberId === p.id && w.type === '경고').length;
  const nCnt = S.bungs.reduce((s, b) => s + (b.cancelled.includes(p.id) ? 1 : 0), 0);
  
  let html = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;">
    <span style="font-weight:700;font-size:12px;">📋 ${esc(p.name)} 번개 참석 이력</span>
    <button class="btn bsub" style="padding:2px 8px;font-size:10px;" onclick="document.getElementById('${panelId}').style.display='none'">✕</button>
  </div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:7px;">
    <span class="pill pg">누적 ${myB.length}회 참석</span>
    ${wCnt ? `<span class="pill" style="background:var(--rose-light);color:var(--rose);">⚠️ 경고 ${wCnt}건</span>` : ''}
    ${nCnt ? `<span class="pill pr">🚷 노쇼 ${nCnt}건</span>` : ''}
  </div>
  <div style="max-height:150px;overflow-y:auto;">`;

  if (myB.length) {
    myB.forEach(b => {
      html += `<div style="display:flex;align-items:center;gap:6px;padding:4px 0;border-bottom:1px solid var(--bd);">
        <span class="db" style="font-size:9px;flex-shrink:0;">${dBadge(b.date)}</span>
        <span style="flex:1;font-size:11px;">${esc(b.title)}</span>
        <span style="font-size:10px;color:var(--mt);">${esc(b.date)}</span>
        ${b.cancelled.includes(p.id) ? '<span class="pill pr" style="font-size:9px;">취소</span>' : ''}
      </div>`;
    });
  } else {
    html += '<p style="color:var(--mt);text-align:center;padding:8px;font-size:11px;">참석 이력 없음</p>';
  }
  html += '</div>';
  panel.innerHTML = html;
  panel.style.display = 'block';
}

/* ══ EXPORT/IMPORT ══ */
function exportJSON() {
  const json = JSON.stringify(S, null, 2);
  try {
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'palette_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  } catch (e) {
    prompt('JSON 복사:', json);
  }
}

function importJSON(e) {
  const f = e.target.files?.[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = async ev => {
    try {
      const p = JSON.parse(ev.target.result);
      if (!p || !Array.isArray(p.members)) throw new Error('members 필드 없음');
      applyData(p);
      await save();
      renderAll();
      alert('불러왔습니다!');
    } catch (err) {
      alert('실패: ' + err.message);
    }
  };
  r.readAsText(f);
  e.target.value = '';
}

function exportExcel() {
  if (typeof XLSX === 'undefined') {
    alert('XLSX 라이브러리 로드 실패');
    return;
  }
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(activeM().map(m => ({
    '이름': m.name,
    '성별': m.gender,
    '나이': (m.age || kr(m.birthYear) || '-') + '세',
    '생년월일': m.birth || '-',
    '키': m.height ? m.height + 'cm' : '-',
    'MBTI': m.mbti || '-',
    '역할': m.role,
    '지역': m.region,
    '입회일': m.joindate,
    '가입기간': joinDays(m),
    '특이사항': m.note
  }))), '현재 회원');

  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(S.bungs.map(b => {
    const aN = b.attendees.map(id => {
      const p = resolve(id);
      return p ? p.name : id;
    });
    const cN = b.cancelled.map(id => {
      const p = resolve(id);
      return p ? p.name : id;
    });
    const { m: gm, f: gf } = calcGR(b.attendees);
    return {
      '날짜': b.date,
      '제목': b.title,
      '참석수': b.attendees.length,
      '남/여': '남' + gm + '/여' + gf,
      '참석자': aN.join(', '),
      '취소': cN.join(', ') || '-'
    };
  })), '번개 이력');

  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet((S.rejects || []).map(r => ({
    '이름': r.name,
    '성별': r.gender,
    '거절일': r.rejectDate,
    '사유': r.reason
  }))), '거절 리스트');

  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(S.archived.filter(m => m.status === 'kicked' || m.status === 'left').map(m => ({
    '이름': m.name,
    '구분': m.status === 'kicked' ? '강퇴' : '탈퇴',
    '기간': m.period,
    '사유': m.reason
  }))), '강퇴탈퇴');

  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(getMergedW('ALL').map(w => ({
    '이름': w.name,
    '날짜': w.date,
    '유형': w.type,
    '사유': w.reason
  }))), '경고노쇼');

  XLSX.writeFile(wb, '팔레트_' + getTodayKST() + '.xlsx');
}

/* ══ REJECT ══ */
function toggleRjMemo() {
  document.getElementById('rjm').style.display = document.getElementById('rjr').value === '기타' ? 'block' : 'none';
}

async function addReject() {
  const name = (document.getElementById('rjn').value || '').trim();
  if (!name) {
    alert('이름을 입력하세요.');
    return;
  }
  const rSel = document.getElementById('rjr').value || '';
  const memo = (document.getElementById('rjm').value || '').trim();
  const reason = rSel === '기타' ? (memo || '기타') : rSel;
  if (!reason) {
    alert('사유를 선택하세요.');
    return;
  }
  const date = document.getElementById('rjd').value || getTodayKST();
  const newRj = {
    id: uid(),
    no: S.rejects.length + 1,
    name,
    gender: document.getElementById('rjg').value || '',
    rejectDate: date,
    reason
  };
  S.rejects.push(newRj);
  if (window._fbSaveReject) await window._fbSaveReject(newRj);
  await save();
  ['rjn', 'rjd', 'rjm'].forEach(id => {
    document.getElementById(id).value = '';
  });
  ['rjg', 'rjr'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('rjm').style.display = 'none';
  if (_tab === 3) safe(renderArchived);
  alert(name + ' 거절 등록 완료');
}

async function deleteReject(id) {
  if (!confirm('이 거절 기록을 삭제하시겠습니까?')) return;
  S.rejects = S.rejects.filter(r => r.id !== id);
  if (window._fbDeleteReject) await window._fbDeleteReject(id);
  await save();
  safe(renderArchived);
}

/* ══ SORT & FILTER STATE ══ */
let _sortState = { col: '', dir: 0 };
let _mF = '';
let _upF = false;
let _selId = null;
let _editId = null;

function toggleColSort(col) {
  if (_sortState.col === col) {
    _sortState.dir = (_sortState.dir + 1) % 3;
  } else {
    _sortState.col = col;
    _sortState.dir = 1;
  }
  ['name', 'gender', 'age', 'height', 'joindate', 'joindays', 'att'].forEach(c => {
    const el = document.getElementById('sort_' + c);
    if (!el) return;
    el.textContent = (c === _sortState.col && _sortState.dir > 0) ? (_sortState.dir === 1 ? ' ▲' : ' ▼') : '';
  });
  safe(renderMembers);
}

function getAttCnt(id, mKey) {
  if (!mKey) return 0;
  const bungs = mKey === 'ALL' ? S.bungs : bFor(mKey);
  return bungs.filter(b => b.attendees.includes(id) && !b.cancelled.includes(id)).length;
}

function applySortToList(list) {
  const { col, dir } = _sortState;
  if (!col || dir === 0) return list;
  const mKey = document.getElementById('attMs').value || '';
  return [...list].sort((a, b) => {
    let va, vb;
    if (col === 'name') {
      va = a.name || ''; vb = b.name || '';
    } else if (col === 'gender') {
      va = a.gender || ''; vb = b.gender || '';
    } else if (col === 'age') {
      va = +(a.age || kr(a.birthYear) || 0);
      vb = +(b.age || kr(b.birthYear) || 0);
    } else if (col === 'height') {
      va = parseFloat(a.height) || 0;
      vb = parseFloat(b.height) || 0;
    } else if (col === 'joindate') {
      va = a.joindate || ''; vb = b.joindate || '';
    } else if (col === 'joindays') {
      va = joinDaysNum(a); vb = joinDaysNum(b);
    } else if (col === 'att') {
      va = getAttCnt(a.id, mKey); vb = getAttCnt(b.id, mKey);
    } else {
      va = ''; vb = '';
    }
    if (va < vb) return dir === 1 ? -1 : 1;
    if (va > vb) return dir === 1 ? 1 : -1;
    return 0;
  });
}

/* ══ MEMBERS ══ */
function buildAttMonOpts() {
  const sel = document.getElementById('attMs');
  if (!sel) return;
  const keys = allMK();
  const cur = sel.value || latestK();
  sel.innerHTML = '<option value="">월 선택</option><option value="ALL">📊 전체 누적</option>' +
    keys.map(k => '<option value="' + k + '"' + (k === cur ? ' selected' : '') + '>' + mkLbl(k) + '</option>').join('');
}

function onMSrch() {
  safe(renderMembers);
  const q = (document.getElementById('mSrch').value || '').trim();
  const panel = document.getElementById('mHistBox');
  if (!q) {
    panel.style.display = 'none';
    return;
  }
  const ql = q.toLowerCase();
  const hit = activeM().find(m => (m.name || '').toLowerCase() === ql) ||
              activeM().find(m => (m.name || '').toLowerCase().includes(ql));
  if (!hit) {
    panel.style.display = 'none';
    return;
  }
  renderHistBox('mHistBox', hit.id);
}

function roleTag(r) {
  return r === '모임장' ? '<span class="tag tld">모임장</span>' : r === '운영진' ? '<span class="tag tst2">운영진</span>' : '';
}

function warnTag(id) {
  const cnt = (S.warnings || []).filter(w => w.memberId === id && w.type === '경고').length;
  return cnt ? '<span class="tag twarn">⚠️' + cnt + '</span>' : '';
}

function toggleMF(type) {
  if (type === 'new') _mF = _mF === 'new' ? '' : 'new';
  else if (type === 'zero') _mF = _mF === 'zero' ? '' : 'zero';
  else if (type === 'upcoming') _upF = !_upF;

  document.getElementById('fNew').className = 'ftg ' + (_mF === 'new' ? 'fton' : 'ftoff');
  document.getElementById('fZero').className = 'ftg ' + (_mF === 'zero' ? 'fton' : 'ftoff');
  const fu = document.getElementById('fUp');
  if (fu) fu.className = 'ftg ' + (_upF ? 'fton' : 'ftoff');

  if (type === 'upcoming') safe(renderBungs);
  else safe(renderMembers);
}

function renderMembers() {
  const q = (document.getElementById('mSrch').value || '').toLowerCase();
  const mK = document.getElementById('attMs').value || '';
  const hdr = document.getElementById('attH');
  if (hdr) {
    hdr.innerHTML = (mK && mK !== 'ALL' ? mkLbl(mK) + ' 참석' : mK === 'ALL' ? '전체 참석' : '참석') +
      '<span id="sort_att">' + (_sortState.col === 'att' ? (_sortState.dir === 1 ? ' ▲' : _sortState.dir === 2 ? ' ▼' : '') : '') + '</span>';
  }
  let list = activeM();
  if (_mF === 'new') list = list.filter(isNew);
  if (_mF === 'zero' && mK) list = list.filter(m => getAttCnt(m.id, mK) === 0);
  if (q) list = list.filter(m => (m.name || '').toLowerCase().includes(q));
  
  list = applySortToList(list);
  const cnt = document.getElementById('mCnt');
  if (cnt) cnt.textContent = '(' + activeM().length + '명)';
  const tb = document.getElementById('mTbody');
  if (!tb) return;
  if (!list.length) {
    tb.innerHTML = '<tr><td colspan="12" style="text-align:center;color:var(--mt);padding:16px;">표시할 회원이 없습니다.</td></tr>';
    return;
  }
  
  tb.innerHTML = list.map(m => {
    const attCnt = mK ? getAttCnt(m.id, mK) : '-';
    const cs = typeof attCnt === 'number' && attCnt > 0 ? 'font-weight:700;color:var(--pri);' : 'color:var(--mt);';
    const age = m.age || kr(m.birthYear) || '-';
    return '<tr><td style="white-space:nowrap;"><strong>' + esc(m.name) + '</strong>' + roleTag(m.role) + warnTag(m.id) + (isNew(m) ? '<span class="tag tnew">NEW</span>' : '') + '</td>' +
      '<td><span class="pill ' + (m.gender === '남' ? 'pt' : 'pr') + '">' + esc(m.gender || '-') + '</span></td>' +
      '<td>' + age + '세</td>' +
      '<td style="font-size:10px;color:var(--sb);">' + esc(m.birth || '-') + '</td>' +
      '<td>' + (m.height ? esc(m.height) + 'cm' : '-') + '</td>' +
      '<td><span class="pill pgy">' + esc(m.mbti || '-') + '</span></td>' +
      '<td style="font-size:10px;color:var(--sb);">' + esc(m.region || '-') + '</td>' +
      '<td style="font-size:10px;color:var(--sb);">' + esc(m.joindate || '-') + '</td>' +
      '<td style="font-size:10px;color:var(--pri);font-weight:600;">' + joinDays(m) + '</td>' +
      '<td style="max-width:120px;white-space:pre-wrap;font-size:10px;color:var(--sb);">' + esc(m.note || '-') + '</td>' +
      '<td style="text-align:center;' + cs + '">' + attCnt + '</td>' +
      (_isAdmin ? '<td><button class="btn bsub" onclick="openMgmt(\'' + esc(m.id) + '\',event)">관리▾</button></td>' : '') + '</tr>';
  }).join('');
}

function openMgmt(id, e) {
  e.stopPropagation();
  _selId = id;
  const dd = document.getElementById('mgmtDD');
  dd.style.display = 'block';
  dd.style.left = Math.min(e.clientX - 10, window.innerWidth - 160) + 'px';
  dd.style.top = (e.clientY + 8) + 'px';
}

document.addEventListener('click', () => {
  const dd = document.getElementById('mgmtDD');
  if (dd) dd.style.display = 'none';
});

async function deleteMember() {
  const m = S.members.find(x => x.id === _selId);
  if (!m) return;
  if (!confirm('[' + m.name + '] 회원을 완전히 삭제합니다.\n모든 데이터가 영구 삭제됩니다. 계속하시겠습니까?')) return;
  S.members = S.members.filter(x => x.id !== _selId);
  if (window._fbDeleteMember) await window._fbDeleteMember(_selId);
  
  // Update bungs to remove the attendee
  for (const b of S.bungs) {
    const hasAtt = b.attendees.includes(_selId) || b.cancelled.includes(_selId);
    if (hasAtt) {
      b.attendees = b.attendees.filter(id => id !== _selId);
      b.cancelled = b.cancelled.filter(id => id !== _selId);
      if (window._fbSaveBung) await window._fbSaveBung(b);
    }
  }
  
  // Delete associated warnings
  const warnsToDelete = S.warnings.filter(w => w.memberId === _selId);
  for (const w of warnsToDelete) {
    if (window._fbDeleteWarning) await window._fbDeleteWarning(w.id);
  }
  S.warnings = S.warnings.filter(w => w.memberId !== _selId);
  
  await save();
  renderAll();
  alert(m.name + ' 삭제 완료');
}

function openWarnModal() {
  const m = S.members.find(x => x.id === _selId);
  if (!m) return;
  document.getElementById('warnTarget').textContent = '대상: ' + m.name + ' (' + (m.age || '-') + '세 / ' + (m.gender || '-') + ')';
  document.getElementById('wDate').value = getRef();
  document.getElementById('wReason').value = '';
  document.getElementById('warnMod').style.display = 'flex';
}

async function submitWarn() {
  const m = S.members.find(x => x.id === _selId);
  if (!m) return;
  const date = document.getElementById('wDate').value || getRef();
  const reason = (document.getElementById('wReason').value || '').trim();
  if (!reason) {
    alert('사유를 입력하세요.');
    return;
  }
  const dt = new Date(date);
  const df = (dt.getMonth() + 1) + '/' + dt.getDate();
  m.note = (m.note ? m.note + '\n' : '') + '[' + df + ' 경고: ' + reason + ']';
  
  const newW = {
    id: uid(),
    name: m.name,
    date,
    type: '경고',
    reason,
    memberId: m.id
  };
  S.warnings.push(newW);
  
  if (window._fbSaveWarning) await window._fbSaveWarning(newW);
  if (window._fbSaveMember) await window._fbSaveMember(m);
  
  await save();
  renderMembers();
  closeM('warnMod');
  if (_tab === 3) safe(syncDashAll);
}

function openEdit() {
  const m = S.members.find(x => x.id === _selId);
  if (!m) return;
  _editId = _selId;
  document.getElementById('ename').value = m.name || '';
  document.getElementById('eby').value = m.birthYear || '';
  document.getElementById('em').value = m.mbti || '';
  document.getElementById('ero').value = m.role || '';
  document.getElementById('egr').value = m.grade || '';
  document.getElementById('erg').value = m.region || '';
  document.getElementById('eht').value = m.height || '';
  document.getElementById('ent').value = m.note || '';
  document.getElementById('eap').textContent = '';
  document.getElementById('editMod').style.display = 'flex';
}

async function saveEdit() {
  const m = S.members.find(x => x.id === _editId);
  if (!m) return;
  const newName = (document.getElementById('ename').value || '').trim();
  if (newName) m.name = newName;
  const by = parseInt(document.getElementById('eby').value || '0', 10);
  if (by > 1900) {
    m.birthYear = by;
    m.age = kr(by);
  }
  const kv = { em: 'mbti', ero: 'role', egr: 'grade', erg: 'region', eht: 'height', ent: 'note' };
  Object.entries(kv).forEach(([elId, field]) => {
    const el = document.getElementById(elId);
    if (el) m[field] = el.value.trim();
  });
  
  if (window._fbSaveMember) await window._fbSaveMember(m);
  await save();
  renderMembers();
  closeM('editMod');
}

async function chgStat(status) {
  const idx = S.members.findIndex(m => m.id === _selId);
  if (idx < 0) return;
  const m = S.members.splice(idx, 1)[0];
  m.status = status;
  const d = new Date().toLocaleDateString('ko');
  const newRj = {
    id: uid(),
    no: S.rejects.length + 1,
    name: m.name,
    gender: m.gender,
    rejectDate: d,
    reason: '운영진 처리'
  };
  S.rejects.push(newRj);
  
  if (window._fbDeleteMember) await window._fbDeleteMember(m.id);
  if (window._fbSaveReject) await window._fbSaveReject(newRj);
  
  await save();
  renderMembers();
  if (_tab === 3) safe(syncDashAll);
}

function parseLocalDate(str) {
  if (!str) return new Date();
  const parts = str.split('-').map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2] || 1);
}

function fmtDateParts(dt) {
  return { y: dt.getFullYear(), m: dt.getMonth() + 1, d: dt.getDate() };
}

let _exitStatus = null;
function openExitModal(status) {
  const m = S.members.find(x => x.id === _selId);
  if (!m) return;
  _exitStatus = status;
  document.getElementById('exitModTitle').textContent = status === 'kicked' ? '⛔ 강퇴 처리' : '🚪 탈퇴 처리';
  document.getElementById('exitTarget').textContent = '대상: ' + m.name + ' (' + (m.age || '-') + '세 / ' + (m.gender || '-') + ')';
  document.getElementById('exitDateInput').value = getRef();
  document.getElementById('exitReasonInput').value = '';
  document.getElementById('exitConfirmBtn').className = 'btn ' + (status === 'kicked' ? 'bgold' : 'bgr');
  document.getElementById('exitConfirmBtn').textContent = status === 'kicked' ? '⛔ 강퇴 확정' : '🚪 탈퇴 확정';
  document.getElementById('exitMod').style.display = 'flex';
}

async function confirmExit() {
  const idx = S.members.findIndex(m => m.id === _selId);
  if (idx < 0) {
    alert('회원 정보를 찾을 수 없습니다.');
    closeM('exitMod');
    return;
  }
  const status = _exitStatus;
  const dateStr = document.getElementById('exitDateInput').value || getRef();
  const reasonInput = (document.getElementById('exitReasonInput').value || '').trim();
  const m = S.members.splice(idx, 1)[0];
  m.status = status;
  
  const dt = parseLocalDate(dateStr);
  const ep = fmtDateParts(dt);
  const exitStr = ep.y + '/' + ep.m + '/' + ep.d;
  const dLabel = ep.y + '. ' + ep.m + '. ' + ep.d + '.';
  
  const defaultReason = status === 'kicked' ? '강퇴' : '탈퇴';
  const finalReason = reasonInput ? defaultReason + '(' + reasonInput + ')' : defaultReason;
  m.note = (m.note ? m.note + '\n' : '') + '[' + defaultReason + '] ' + dLabel + (reasonInput ? ' - ' + reasonInput : '');
  m.exitDate = exitStr;
  m.reason = finalReason;
  
  if (m.joindate) {
    const jd = new Date(m.joindate + 'T00:00:00');
    const diffDays = Math.floor((dt - jd) / 86400000) + 1;
    m.period = (jd.getMonth() + 1) + '/' + jd.getDate() + '~' + ep.m + '/' + ep.d + '(' + diffDays + '일)';
  }
  
  S.archived.push(m);
  if (window._fbDeleteMember) await window._fbDeleteMember(m.id);
  if (window._fbSaveArchived) await window._fbSaveArchived(m);
  
  await save();
  renderMembers();
  closeM('exitMod');
  if (_tab === 3) safe(syncDashAll);
}

async function deleteArchived(memberId) {
  const m = S.archived.find(x => x.id === memberId);
  if (!m) return;
  if (!confirm('[' + m.name + ']님의 ' + (m.status === 'kicked' ? '강퇴' : '탈퇴') + ' 기록을 삭제합니까?')) return;
  S.archived = S.archived.filter(x => x.id !== memberId);
  if (window._fbDeleteArchived) await window._fbDeleteArchived(memberId);
  await save();
  if (_tab === 3) safe(syncDashAll);
  alert(m.name + ' 기록 삭제 완료');
}

function fixExitDate(memberId) {
  const m = S.archived.find(x => x.id === memberId);
  if (!m) return;
  _fixExitId = memberId;
  document.getElementById('fixExitTarget').textContent = '대상: ' + m.name + ' (' + (m.status === 'kicked' ? '강퇴' : '탈퇴') + ')';
  let dv = getRef();
  if (m.exitDate) {
    const p = m.exitDate.split('/').map(Number);
    if (p.length === 3) dv = p[0] + '-' + String(p[1]).padStart(2, '0') + '-' + String(p[2]).padStart(2, '0');
  }
  document.getElementById('fixExitDateInput').value = dv;
  document.getElementById('fixExitReasonInput').value = m.reason || '';
  document.getElementById('fixExitMod').style.display = 'flex';
}

let _fixExitId = null;
async function saveFixExit() {
  const m = S.archived.find(x => x.id === _fixExitId);
  if (!m) return;
  const dateStr = document.getElementById('fixExitDateInput').value;
  if (!dateStr) {
    alert('날짜를 입력해주세요.');
    return;
  }
  const reasonInput = (document.getElementById('fixExitReasonInput').value || '').trim();
  const dt = parseLocalDate(dateStr);
  const ep = fmtDateParts(dt);
  m.exitDate = ep.y + '/' + ep.m + '/' + ep.d;
  if (reasonInput) m.reason = reasonInput;
  if (m.joindate) {
    const jd = new Date(m.joindate + 'T00:00:00');
    const diffDays = Math.floor((dt - jd) / 86400000) + 1;
    m.period = (jd.getMonth() + 1) + '/' + jd.getDate() + '~' + ep.m + '/' + ep.d + '(' + diffDays + '일)';
  }
  if (window._fbSaveArchived) await window._fbSaveArchived(m);
  await save();
  closeM('fixExitMod');
  if (_tab === 3) safe(syncDashAll);
  alert('기록이 수정되었습니다. (' + m.exitDate + ')');
}

async function addMember() {
  const name = (document.getElementById('fn').value || '').trim();
  if (!name) {
    alert('이름을 입력하세요.');
    return;
  }
  const by = parseInt(document.getElementById('fby').value || '0', 10);
  if (!by || by < 1960 || by > 2015) {
    alert('올바른 출생연도(1960~2015)를 입력하세요.');
    return;
  }
  const jd = document.getElementById('fjd').value || getTodayKST();
  const newMem = {
    id: uid(),
    name,
    gender: document.getElementById('fg').value || '',
    birthYear: by,
    age: kr(by),
    height: document.getElementById('fh').value || '',
    mbti: document.getElementById('fm').value || '',
    role: document.getElementById('fro').value || '일반',
    grade: document.getElementById('fgr').value || '일반',
    region: (document.getElementById('frg').value || '').trim(),
    birth: document.getElementById('fbd').value || '',
    joindate: jd,
    note: (document.getElementById('fnt').value || '').trim(),
    status: 'active'
  };
  S.members.push(newMem);
  if (window._fbSaveMember) await window._fbSaveMember(newMem);
  await save();
  renderMembers();
  ['fn', 'fby', 'fh', 'frg', 'fbd', 'fjd', 'fnt'].forEach(id => {
    document.getElementById(id).value = '';
  });
  ['fg', 'fm', 'fro', 'fgr'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('fap').textContent = '';
}

/**
 * FIXED: Deletes warning records. Works on both standard warnings and dynamically derived noshows.
 */
async function deleteWarning(wId) {
  if (!confirm('이 경고/노쇼 기록을 삭제하시겠습니까?')) return;
  
  if (wId && wId.startsWith('noshow-')) {
    const parts = wId.split('-');
    const bId = parts[1];
    const mId = parts[2];
    const b = S.bungs.find(x => x.id === bId);
    if (b) {
      b.cancelled = b.cancelled.filter(id => id !== mId);
      if (window._fbSaveBung) await window._fbSaveBung(b);
    }
  } else {
    const w = S.warnings.find(x => x.id === wId);
    if (w) {
      const m = S.members.find(x => x.id === w.memberId);
      if (m && m.note) {
        const dt = new Date(w.date);
        const df = (dt.getMonth() + 1) + '/' + dt.getDate();
        const pat = '[' + df + ' 경고: ' + w.reason + ']';
        m.note = m.note.split('\n').filter(line => line.trim() !== pat).join('\n').trim();
        if (window._fbSaveMember) await window._fbSaveMember(m);
      }
    }
    S.warnings = S.warnings.filter(x => x.id !== wId);
    if (window._fbDeleteWarning) await window._fbDeleteWarning(wId);
  }
  
  await save();
  safe(renderMembers);
  safe(renderArchived);
  if (_tab === 3) safe(syncDashAll);
}

/* ══ BUNGS ══ */
function buildBungMonFilter() {
  const sel = document.getElementById('bMF');
  if (!sel) return;
  const keys = allMK();
  const cur = sel.value || latestK();
  sel.innerHTML = '<option value="">전체 누적</option>' +
    keys.map(k => '<option value="' + k + '"' + (k === cur ? ' selected' : '') + '>' + mkLbl(k) + '</option>').join('');
}

async function addBung() {
  const t = (document.getElementById('bt').value || '').trim();
  if (!t) {
    alert('번개 제목을 입력하세요.');
    return;
  }
  const newB = {
    id: uid(),
    title: t,
    date: document.getElementById('bdt').value || '',
    attendees: [],
    cancelled: []
  };
  S.bungs.unshift(newB);
  if (window._fbSaveBung) await window._fbSaveBung(newB);
  await save();
  renderBungs();
  safe(buildAllSels);
  document.getElementById('bt').value = '';
  document.getElementById('bdt').value = '';
}

function runBSearch() {
  const q = (document.getElementById('bSrch').value || '').trim();
  const panel = document.getElementById('bHistBox');
  if (!q) {
    panel.style.display = 'none';
    return;
  }
  const ql = q.toLowerCase();
  const hit = activeM().find(m => (m.name || '').toLowerCase() === ql) ||
              activeM().find(m => (m.name || '').toLowerCase().includes(ql));
  if (!hit) {
    panel.innerHTML = '<p style="color:var(--mt);font-size:11px;">결과 없음</p>';
    panel.style.display = 'block';
    return;
  }
  renderHistBox('bHistBox', hit.id);
}

function renderBungs() {
  const container = document.getElementById('bList');
  const empty = document.getElementById('bEmpty');
  const mK = document.getElementById('bMF').value || '';
  
  let sorted = [...S.bungs].sort((a, b) => b.date.localeCompare(a.date));
  if (mK) sorted = sorted.filter(b => dtKey(b.date) === mK);
  if (_upF) sorted = sorted.filter(isUp);
  
  const cnt = document.getElementById('bCnt');
  if (cnt) cnt.textContent = '(총 ' + S.bungs.length + '개)';
  if (!sorted.length) {
    if (container) container.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';
  if (!container) return;
  
  const act = activeM();
  container.innerHTML = sorted.map(b => {
    const badge = dBadge(b.date);
    const upc = isUp(b);
    const realAtt = b.attendees.filter(id => !b.cancelled.includes(id));
    const { m: gm, f: gf } = calcGR(realAtt);
    
    const chips = b.attendees.map(aid => {
      const p = resolve(aid);
      if (!p) return '';
      const cx = b.cancelled.includes(aid);
      if (_isAdmin) {
        return '<span class="chip' + (cx ? ' chip-cx' : '') + '">' +
          '<input type="checkbox" ' + (cx ? 'checked' : '') + ' onchange="safe(toggleCx,\'' + esc(b.id) + '\',\'' + esc(aid) + '\',this.checked)" style="width:11px;height:11px;cursor:pointer;flex-shrink:0;accent-color:var(--pri);">' +
          '<span onclick="safe(renderHistBox,\'bHistBox\',\'' + esc(aid) + '\')" style="cursor:pointer;text-decoration:underline dotted;">' + esc(p.name) + '</span>' +
          '<span onclick="safe(removeAtt,\'' + esc(b.id) + '\',\'' + esc(aid) + '\')" style="cursor:pointer;opacity:.55;font-size:10px;">✕</span></span>';
      } else {
        return '<span class="chip' + (cx ? ' chip-cx' : '') + '">' +
          (cx ? '<span style="font-size:9px;color:var(--rose);margin-right:2px;">🚷</span>' : '') +
          '<span onclick="safe(renderHistBox,\'bHistBox\',\'' + esc(aid) + '\')" style="cursor:pointer;text-decoration:underline dotted;">' + esc(p.name) + '</span></span>';
      }
    }).join('');
    
    const addBtns = _isAdmin ? act.filter(m => !b.attendees.includes(m.id)).map(m => {
      return '<span onclick="safe(addAtt,\'' + esc(b.id) + '\',\'' + esc(m.id) + '\')" style="display:inline-block;background:#f0fdf4;border-radius:99px;padding:2px 8px;font-size:11px;cursor:pointer;margin:2px;color:var(--sb);border:1px solid var(--bd);" onmouseover="this.style.background=\'var(--pri-light)\';this.style.color=\'var(--pri)\'" onmouseout="this.style.background=\'#f0fdf4\';this.style.color=\'var(--sb)\'">' + esc(m.name) + '</span>';
    }).join('') : '';
    
    const actionBtns = _isAdmin ? 
      '<div style="display:flex;gap:5px;">' +
        '<button class="btn" style="background:#f5f3ff;color:#5b21b6;border:1px solid #c4b5fd;font-size:11px;padding:3px 9px;" onclick="safe(openSettlement,\'' + esc(b.id) + '\')">💰 정산</button>' +
        '<button class="btn bsub" style="font-size:11px;padding:3px 8px;" onclick="safe(editBungTitle,\'' + esc(b.id) + '\')">✏️ 수정</button>' +
        '<button class="btn bred" onclick="safe(delBung,\'' + esc(b.id) + '\')">🗑 삭제</button>' +
      '</div>' : 
      '<div style="display:flex;gap:5px;">' +
        '<button class="btn" style="background:#f5f3ff;color:#5b21b6;border:1px solid #c4b5fd;font-size:11px;padding:3px 9px;" onclick="safe(openSettlement,\'' + esc(b.id) + '\')">💰 조회</button>' +
      '</div>';
      
    const addSection = _isAdmin ? 
      '<div>' +
        '<span style="font-size:10px;color:var(--mt);margin-right:4px;">추가</span>' + (addBtns || '<span style="color:var(--mt);font-size:11px;">모두 참석 중</span>') +
      '</div>' : '';
    
    return '<div class="bc ' + (upc ? 'bcup' : '') + '">' +
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:6px;margin-bottom:7px;flex-wrap:wrap;">' +
        '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">' +
          (badge ? '<span class="db">' + esc(badge) + '</span>' : '') +
          (upc ? '<span class="pill pgold">📅 예정</span>' : '') +
          '<span style="font-weight:700;font-size:13px;">' + esc(b.title) + '</span>' +
          '<span style="color:var(--mt);font-size:11px;">' + (esc(b.date) || '날짜미정') + '</span>' +
          '<span class="pill pg">' + realAtt.length + '명 · 남' + gm + '/여' + gf + '</span>' +
          (b.cancelled.length ? '<span class="pill pr">' + b.cancelled.length + '명 취소</span>' : '') +
        '</div>' +
        actionBtns +
      '</div>' +
      '<div style="background:#fff;border-radius:8px;padding:5px 8px;min-height:26px;margin-bottom:6px;border:1px solid var(--bd);">' +
        '<span style="font-size:10px;color:var(--mt);margin-right:4px;">참석자</span>' + (chips || '<span style="color:var(--mt);font-size:11px;">없음</span>') +
      '</div>' +
      addSection +
    '</div>';
  }).join('');
}

async function editBungTitle(bId) {
  const b = S.bungs.find(x => x.id === bId);
  if (!b) return;
  const t = prompt('번개 제목:', b.title);
  if (t === null) return;
  const tr = t.trim();
  if (!tr) {
    alert('제목을 입력하세요.');
    return;
  }
  b.title = tr;
  if (window._fbSaveBung) await window._fbSaveBung(b);
  await save();
  renderBungs();
}

async function addAtt(bId, mId) {
  const b = S.bungs.find(x => x.id === bId);
  if (b && !b.attendees.includes(mId)) {
    b.attendees.push(mId);
    if (window._fbSaveBung) await window._fbSaveBung(b);
    await save();
    renderBungs();
    if (_tab === 3) safe(syncDashAll);
  }
}

async function removeAtt(bId, mId) {
  const b = S.bungs.find(x => x.id === bId);
  if (!b) return;
  b.attendees = b.attendees.filter(x => x !== mId);
  b.cancelled = b.cancelled.filter(x => x !== mId);
  if (window._fbSaveBung) await window._fbSaveBung(b);
  await save();
  renderBungs();
  if (_tab === 3) safe(syncDashAll);
}

async function toggleCx(bId, mId, checked) {
  const b = S.bungs.find(x => x.id === bId);
  if (!b) return;
  if (checked) {
    if (!b.cancelled.includes(mId)) b.cancelled.push(mId);
  } else {
    b.cancelled = b.cancelled.filter(x => x !== mId);
  }
  if (window._fbSaveBung) await window._fbSaveBung(b);
  await save();
  renderBungs();
  safe(renderMembers);
  if (_tab === 3) safe(syncDashAll);
}

async function delBung(id) {
  if (!confirm('이 번개를 삭제하시겠습니까?')) return;
  S.bungs = S.bungs.filter(b => b.id !== id);
  if (window._fbDeleteBung) await window._fbDeleteBung(id);
  
  // Cleanup references in settlements
  if (S.settlements && S.settlements[id]) {
    delete S.settlements[id];
    if (window._fbDeleteSettlement) await window._fbDeleteSettlement(id);
  }
  await save();
  renderBungs();
  safe(buildAllSels);
  safe(renderMembers);
  if (_tab === 3) safe(syncDashAll);
}

/* ══ SETTLEMENT ENGINE ══ */
let stl = {
  bungId: null,
  sheetId: null,
  members: [],
  costs: [],
  opts: {},
  manualTotal: {},
  savedAccts: JSON.parse(localStorage.getItem('paletteAccts4') || '[]')
};

function openSettlement(bId) {
  const b = S.bungs.find(x => x.id === bId);
  if (!b) return;
  stl.bungId = bId;
  document.getElementById('stl_bungTitle').textContent = b.title + (b.date ? ' ' + b.date : '');
  document.getElementById('stlMod').style.display = 'flex';
  stlRefreshAcctDropdown();
  
  const hs = document.getElementById('stl_host');
  hs.innerHTML = activeM().map(m => '<option value="' + esc(m.name) + '">' + esc(m.name) + '</option>').join('');
  hs.disabled = !_isAdmin;
  const acctIn = document.getElementById('stl_acctInput');
  if (acctIn) acctIn.disabled = !_isAdmin;
  const acctSel = document.getElementById('stl_acctSel');
  if (acctSel) acctSel.disabled = !_isAdmin;
  
  stlRenderHistList();
  
  const list = (S.settlements && S.settlements[bId]) || [];
  if (list.length) stlLoadSheet(list[list.length - 1].id);
  else stlNewSheet();
}

function stlNewSheet() {
  const b = S.bungs.find(x => x.id === stl.bungId);
  if (!b) return;
  stl.sheetId = null;
  stl.opts = {};
  stl.manualTotal = {};
  stl.costs = [{ label: '1차', place: '', total: 0, liquor: 0, drink: 0 }];
  
  const realAtt = b.attendees.filter(id => !b.cancelled.includes(id));
  stl.members = realAtt.map(id => {
    const p = resolve(id);
    return { name: p ? p.name : id, prepay: 0, note: '' };
  });
  
  document.getElementById('stl_bName').value = b.title;
  document.getElementById('stl_bDate').value = b.date;
  
  const hostSel = document.getElementById('stl_host');
  const allNames = activeM().map(m => m.name);
  hostSel.innerHTML = allNames.map(n => '<option value="' + esc(n) + '">' + esc(n) + '</option>').join('');
  
  const firstHost = stl.members.find(m => {
    const mem = S.members.find(x => x.name === m.name);
    return mem && (mem.role === '모임장' || mem.role === '운영진');
  });
  hostSel.value = firstHost ? firstHost.name : (stl.members[0] ? stl.members[0].name : allNames[0]);
  
  document.getElementById('stl_togMoim').classList.add('on');
  document.getElementById('stl_togBj').classList.add('on');
  document.getElementById('stl_togNoBj').classList.remove('on');
  document.getElementById('stl_acctInput').value = '';
  stlUpdateAcctDisp();
  document.getElementById('stl_savedBadge').style.display = 'none';
  
  stlRenderCosts();
  stlRenderAll();
  stlRenderHistList();
}

function stlLoadSheet(sid) {
  const list = (S.settlements && S.settlements[stl.bungId]) || [];
  const sheet = list.find(s => s.id === sid);
  if (!sheet) return;
  
  stl.sheetId = sid;
  stl.members = JSON.parse(JSON.stringify(sheet.members || []));
  stl.costs = JSON.parse(JSON.stringify(sheet.costs || []));
  stl.opts = JSON.parse(JSON.stringify(sheet.opts || {}));
  stl.manualTotal = JSON.parse(JSON.stringify(sheet.manualTotal || {}));
  
  document.getElementById('stl_bName').value = sheet.bungTitle || '';
  document.getElementById('stl_bDate').value = sheet.bungDate || '';
  
  const hostSel = document.getElementById('stl_host');
  const allNames = activeM().map(m => m.name);
  hostSel.innerHTML = allNames.map(n => '<option value="' + esc(n) + '">' + esc(n) + '</option>').join('');
  hostSel.value = sheet.host || (allNames[0] || '');
  
  document.getElementById('stl_acctInput').value = sheet.acct || '';
  document.getElementById('stl_togMoim').classList.toggle('on', sheet.moimOn !== false);
  document.getElementById('stl_togBj').classList.toggle('on', sheet.bjOn !== false);
  document.getElementById('stl_togNoBj').classList.toggle('on', !!sheet.noBj);
  
  stlUpdateAcctDisp();
  document.getElementById('stl_savedBadge').style.display = '';
  
  stlRenderCosts();
  stlRenderAll();
  stlRenderHistList();
}

async function stlSaveSheet() {
  if (!S.settlements) S.settlements = {};
  if (!S.settlements[stl.bungId]) S.settlements[stl.bungId] = [];
  
  const b = S.bungs.find(x => x.id === stl.bungId);
  const sheet = {
    id: stl.sheetId || uid(),
    savedAt: new Date().toISOString(),
    bungTitle: b ? b.title : document.getElementById('stl_bName').value,
    bungDate: b ? b.date : document.getElementById('stl_bDate').value,
    host: document.getElementById('stl_host').value,
    acct: document.getElementById('stl_acctInput').value,
    moimOn: document.getElementById('stl_togMoim').classList.contains('on'),
    bjOn: document.getElementById('stl_togBj').classList.contains('on'),
    noBj: document.getElementById('stl_togNoBj').classList.contains('on'),
    members: JSON.parse(JSON.stringify(stl.members)),
    costs: JSON.parse(JSON.stringify(stl.costs)),
    opts: JSON.parse(JSON.stringify(stl.opts)),
    manualTotal: JSON.parse(JSON.stringify(stl.manualTotal))
  };
  
  const list = S.settlements[stl.bungId];
  const idx = list.findIndex(s => s.id === sheet.id);
  if (idx >= 0) list[idx] = sheet;
  else list.push(sheet);
  
  stl.sheetId = sheet.id;
  if (window._fbSaveSettlement) await window._fbSaveSettlement(stl.bungId, S.settlements[stl.bungId]);
  await save();
  document.getElementById('stl_savedBadge').style.display = '';
  stlRenderHistList();
  if (_tab === 2) safe(renderBungs);
  alert('정산이 성공적으로 저장되었습니다. ✅');
}

async function stlDeleteSheet(sid) {
  if (!confirm('이 정산 기록을 삭제할까요?')) return;
  S.settlements[stl.bungId] = (S.settlements[stl.bungId] || []).filter(s => s.id !== sid);
  if (window._fbSaveSettlement) await window._fbSaveSettlement(stl.bungId, S.settlements[stl.bungId]);
  await save();
  if (stl.sheetId === sid) stlNewSheet();
  else stlRenderHistList();
  if (_tab === 2) safe(renderBungs);
}

function stlRenderHistList() {
  const el = document.getElementById('stl_histList');
  if (!el) return;
  const list = ((S.settlements && S.settlements[stl.bungId]) || []).slice().reverse();
  if (!list.length) {
    el.innerHTML = '<p style="font-size:11px;color:#94a3b8;text-align:center;padding:8px 0;">저장된 정산 없음</p>';
    return;
  }
  el.innerHTML = list.map(s => {
    const dt = new Date(s.savedAt);
    const label = (dt.getMonth() + 1) + '/' + (dt.getDate()) + ' ' + String(dt.getHours()).padStart(2, '0') + ':' + String(dt.getMinutes()).padStart(2, '0');
    const total = (s.members || []).reduce((acc, m, mi) => acc + stlCalcTotalFromSheet(s, mi), 0);
    const isAct = stl.sheetId === s.id;
    const sid = esc(s.id);
    return '<div class="sv' + (isAct ? ' active' : '') + '" onclick="stlLoadSheet(\'' + sid + '\')">' +
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;">' +
        '<div>' +
          '<div style="font-size:11px;font-weight:700;color:#5b21b6;">' + esc(label) + '</div>' +
          '<div style="font-size:10px;color:#7c3aed;margin-top:2px;">벙주: ' + esc(s.host || '-') + '</div>' +
          '<div style="font-size:10px;color:#059669;margin-top:1px;">총 ' + total.toLocaleString() + '원</div>' +
        '</div>' +
        '<button onclick="event.stopPropagation();stlDeleteSheet(\'' + sid + '\')" style="background:none;border:none;font-size:14px;cursor:pointer;color:#fca5a5;padding:0;">🗑</button>' +
      '</div>' +
    '</div>';
  }).join('');
}

function stlCalcTotalFromSheet(sheet, mi) {
  if (sheet.manualTotal && sheet.manualTotal[mi] != null) return sheet.manualTotal[mi];
  const m = sheet.members[mi];
  if (!m) return 0;
  const isHost = m.name === sheet.host;
  let t = 0;
  (sheet.costs || []).forEach((c, ci) => {
    const sh = stlCalcSharesFrom(sheet, ci);
    t += sh[mi] || 0;
  });
  if (!isHost && sheet.moimOn !== false) t += 1000;
  if (!isHost && sheet.bjOn !== false) t += 1000;
  t -= m.prepay || 0;
  return t;
}

function stlCalcSharesFrom(sheet, ci) {
  const c = sheet.costs[ci];
  if (!c) return [];
  const n = sheet.members.length;
  const active = sheet.members.map((x, mi) => !(sheet.opts[mi] && sheet.opts[mi][ci] && sheet.opts[mi][ci].exempt));
  const aC = active.filter(Boolean).length;
  if (!aC) return sheet.members.map(() => 0);
  
  const nal = sheet.members.map((x, mi) => !!(sheet.opts[mi] && sheet.opts[mi][ci] && sheet.opts[mi][ci].nalcohol) && active[mi]);
  const nC = nal.filter(Boolean).length;
  const dbC = aC - nC;
  
  const food = c.total - c.liquor - c.drink;
  const base = sheet.members.map((x, mi) => {
    if (!active[mi]) return 0;
    let s = food / aC;
    if (nal[mi]) {
      s += nC > 0 ? c.drink / nC : 0;
    } else {
      s += dbC > 0 ? c.liquor / dbC : 0;
      s += aC > 0 ? c.drink / aC : 0;
    }
    return s;
  });
  
  const lateAmts = sheet.members.map((x, mi) => active[mi] ? +(sheet.opts[mi] && sheet.opts[mi][ci] ? sheet.opts[mi][ci].late || 0 : 0) : 0);
  const tLate = lateAmts.reduce((a, b) => a + b, 0);
  const redist = sheet.members.map((x, mi) => active[mi] && lateAmts[mi] === 0);
  const rC = redist.filter(Boolean).length;
  
  const fin = sheet.members.map((x, mi) => {
    if (!active[mi]) return 0;
    let s = base[mi] - lateAmts[mi];
    if (redist[mi] && rC > 0) s += tLate / rC;
    return Math.max(0, Math.floor(s));
  });
  
  const sum = fin.reduce((a, b) => a + b, 0);
  let diff = c.total - sum;
  
  // 벙주 인덱스 찾기
  let hostIdx = -1;
  for (let i = 0; i < n; i++) {
    if (sheet.members[i] && sheet.members[i].name === sheet.host) {
      hostIdx = i;
      break;
    }
  }
  
  if (diff > 0) {
    // 금액이 부족하여 채워야 할 때: 일반 참여자들에게만 1원씩 채움 (벙주 배제)
    let targetIdxs = [];
    for (let i = 0; i < n; i++) {
      if (active[i] && i !== hostIdx) {
        targetIdxs.push(i);
      }
    }
    // 일반 참여자가 없으면 벙주에게 채움
    if (targetIdxs.length === 0 && hostIdx !== -1 && active[hostIdx]) {
      targetIdxs.push(hostIdx);
    }
    let remaining = diff;
    let p = 0;
    while (remaining > 0 && targetIdxs.length > 0) {
      const idx = targetIdxs[p % targetIdxs.length];
      fin[idx] += 1;
      remaining--;
      p++;
    }
  } else if (diff < 0) {
    // 금액이 남아서 깎아주어야 할 때: 벙주에게 전량 깎아줌
    let remaining = Math.abs(diff);
    if (hostIdx !== -1 && active[hostIdx]) {
      const deduct = Math.min(fin[hostIdx], remaining);
      fin[hostIdx] -= deduct;
      remaining -= deduct;
    }
    // 그래도 남는게 있으면 일반 참여자들에게서 깎음
    if (remaining > 0) {
      let targetIdxs = [];
      for (let i = 0; i < n; i++) {
        if (active[i] && i !== hostIdx && fin[i] > 0) {
          targetIdxs.push(i);
        }
      }
      let p = 0;
      while (remaining > 0 && targetIdxs.length > 0) {
        const idx = targetIdxs[p % targetIdxs.length];
        if (fin[idx] > 0) {
          fin[idx] -= 1;
          remaining--;
        }
        p++;
        if (targetIdxs.every(idx => fin[idx] <= 0)) {
          break;
        }
      }
    }
  }
  return fin;
}

function stlRefreshAcctDropdown() {
  const sel = document.getElementById('stl_acctSel');
  sel.innerHTML = '<option value="">직접 입력</option>' + stl.savedAccts.map(a => '<option value="' + esc(a) + '">' + esc(a) + '</option>').join('');
}

function stlLoadAcct() {
  const v = document.getElementById('stl_acctSel').value;
  if (v) {
    document.getElementById('stl_acctInput').value = v;
    stlUpdateAcctDisp();
  }
}

function stlSaveAcct() {
  const v = (document.getElementById('stl_acctInput').value || '').trim();
  if (!v) return;
  if (!stl.savedAccts.includes(v)) {
    stl.savedAccts.unshift(v);
    if (stl.savedAccts.length > 5) stl.savedAccts.pop();
  }
  localStorage.setItem('paletteAccts4', JSON.stringify(stl.savedAccts));
  stlRefreshAcctDropdown();
  document.getElementById('stl_acctSel').value = v;
  alert('계좌가 정상적으로 저장되었습니다. ✅');
}

function stlUpdateAcctDisp() {
  const v = document.getElementById('stl_acctInput').value || '—';
  document.getElementById('stl_acctDisp').textContent = '계좌번호 : ' + v;
  document.getElementById('stl_acctDisp2').textContent = '계좌번호 : ' + v;
}

function stlTog(id) {
  if (!_isAdmin) return;
  document.getElementById(id).classList.toggle('on');
  stlRenderAll();
}

function stlTogNoBj() {
  if (!_isAdmin) return;
  const el = document.getElementById('stl_togNoBj');
  el.classList.toggle('on');
  if (el.classList.contains('on')) {
    document.getElementById('stl_togBj').classList.remove('on');
  } else {
    document.getElementById('stl_togBj').classList.add('on');
  }
  stlRenderAll();
}

function stlTogPrepay() {
  const el = document.getElementById('stl_togPrepay');
  el.classList.toggle('on');
  const mod = document.getElementById('stlMod');
  if (el.classList.contains('on')) {
    mod.classList.add('hide-prepay');
  } else {
    mod.classList.remove('hide-prepay');
  }
}

function stlAddCost() {
  stl.costs.push({ label: (stl.costs.length + 1) + '차', place: '', total: 0, liquor: 0, drink: 0 });
  stlRenderCosts();
  stlRenderAll();
}

function stlRemoveCost(i) {
  stl.costs.splice(i, 1);
  const no = {};
  Object.keys(stl.opts).forEach(mi => {
    no[mi] = {};
    Object.keys(stl.opts[mi]).forEach(ci => {
      const nci = +ci < i ? +ci : (+ci > i ? +ci - 1 : -1);
      if (nci >= 0) no[mi][nci] = stl.opts[mi][ci];
    });
  });
  stl.opts = no;
  stlRenderCosts();
  stlRenderAll();
}

function stlRenderCosts() {
  const d = document.getElementById('stl_costItems');
  d.innerHTML = '';
  stl.costs.forEach((c, i) => {
    const div = document.createElement('div');
    div.style.cssText = 'display:flex;gap:7px;align-items:flex-end;flex-wrap:wrap;border-bottom:0.5px solid #f1f5f9;padding-bottom:9px;margin-bottom:9px;';
    div.innerHTML = '<div style="flex:0 0 50px"><span class="stl-lbl">차수</span><input class="stl-input" value="' + esc(c.label) + '" ' + (_isAdmin ? '' : 'disabled') + ' oninput="stl.costs[' + i + '].label=this.value;stlRenderAll()" style="text-align:center"/></div>' +
      '<div style="flex:2;min-width:80px"><span class="stl-lbl">장소명</span><input class="stl-input" value="' + esc(c.place) + '" placeholder="장소" ' + (_isAdmin ? '' : 'disabled') + ' oninput="stl.costs[' + i + '].place=this.value;stlRenderAll()"/></div>' +
      '<div style="flex:1;min-width:72px"><span class="stl-lbl">총액</span><input class="stl-input" type="number" value="' + (c.total || '') + '" placeholder="0" ' + (_isAdmin ? '' : 'disabled') + ' oninput="stl.costs[' + i + '].total=+this.value||0;stl.manualTotal={};stlRenderAll()" style="text-align:right"/></div>' +
      '<div style="flex:1;min-width:72px"><span class="stl-lbl">주류금액</span><input class="stl-input" type="number" value="' + (c.liquor || '') + '" placeholder="0" ' + (_isAdmin ? '' : 'disabled') + ' oninput="stl.costs[' + i + '].liquor=+this.value||0;stl.manualTotal={};stlRenderAll()" style="text-align:right"/></div>' +
      '<div style="flex:1;min-width:72px"><span class="stl-lbl">음료금액</span><input class="stl-input" type="number" value="' + (c.drink || '') + '" placeholder="0" ' + (_isAdmin ? '' : 'disabled') + ' oninput="stl.costs[' + i + '].drink=+this.value||0;stl.manualTotal={};stlRenderAll()" style="text-align:right"/></div>' +
      (_isAdmin ? '<button class="stl-btn stl-btn-danger" onclick="stlRemoveCost(' + i + ')" style="margin-bottom:1px;">🗑</button>' : '');
    d.appendChild(div);
  });
}

function stlGetOpt(mi, ci, k) {
  return !!(stl.opts[mi] && stl.opts[mi][ci] && stl.opts[mi][ci][k]);
}

function stlGetLate(mi, ci) {
  return stl.opts[mi] && stl.opts[mi][ci] ? +stl.opts[mi][ci].late || 0 : 0;
}

function stlSetOpt(mi, ci, k, v) {
  if (!stl.opts[mi]) stl.opts[mi] = {};
  if (!stl.opts[mi][ci]) stl.opts[mi][ci] = {};
  stl.opts[mi][ci][k] = v;
  stl.manualTotal = {};
  stlRenderAll();
}

function stlSetLate(mi, ci, v) {
  if (!stl.opts[mi]) stl.opts[mi] = {};
  if (!stl.opts[mi][ci]) stl.opts[mi][ci] = {};
  stl.opts[mi][ci].late = +v || 0;
  stl.manualTotal = {};
  stlRenderAll();
}

function stlCalcShares(ci) {
  const c = stl.costs[ci];
  if (!c) return [];
  const n = stl.members.length;
  const active = stl.members.map((x, mi) => !stlGetOpt(mi, ci, 'exempt'));
  const aC = active.filter(Boolean).length;
  if (!aC) return stl.members.map(() => 0);
  
  const nal = stl.members.map((x, mi) => stlGetOpt(mi, ci, 'nalcohol') && active[mi]);
  const nC = nal.filter(Boolean).length;
  const dbC = aC - nC;
  
  const food = c.total - c.liquor - c.drink;
  const base = stl.members.map((x, mi) => {
    if (!active[mi]) return 0;
    let s = food / aC;
    if (nal[mi]) {
      s += nC > 0 ? c.drink / nC : 0;
    } else {
      s += dbC > 0 ? c.liquor / dbC : 0;
      s += aC > 0 ? c.drink / aC : 0;
    }
    return s;
  });
  
  const lateAmts = stl.members.map((x, mi) => active[mi] ? stlGetLate(mi, ci) : 0);
  const tLate = lateAmts.reduce((a, b) => a + b, 0);
  const redist = stl.members.map((x, mi) => active[mi] && lateAmts[mi] === 0);
  const rC = redist.filter(Boolean).length;
  
  const fin = stl.members.map((x, mi) => {
    if (!active[mi]) return 0;
    let s = base[mi] - lateAmts[mi];
    if (redist[mi] && rC > 0) s += tLate / rC;
    return Math.max(0, Math.floor(s));
  });
  
  const sum = fin.reduce((a, b) => a + b, 0);
  let diff = c.total - sum;
  
  const host = document.getElementById('stl_host').value;
  let hostIdx = -1;
  for (let i = 0; i < n; i++) {
    if (stl.members[i] && stl.members[i].name === host) {
      hostIdx = i;
      break;
    }
  }
  
  if (diff > 0) {
    let targetIdxs = [];
    for (let i = 0; i < n; i++) {
      if (active[i] && i !== hostIdx) {
        targetIdxs.push(i);
      }
    }
    if (targetIdxs.length === 0 && hostIdx !== -1 && active[hostIdx]) {
      targetIdxs.push(hostIdx);
    }
    let remaining = diff;
    let p = 0;
    while (remaining > 0 && targetIdxs.length > 0) {
      const idx = targetIdxs[p % targetIdxs.length];
      fin[idx] += 1;
      remaining--;
      p++;
    }
  } else if (diff < 0) {
    let remaining = Math.abs(diff);
    if (hostIdx !== -1 && active[hostIdx]) {
      const deduct = Math.min(fin[hostIdx], remaining);
      fin[hostIdx] -= deduct;
      remaining -= deduct;
    }
    if (remaining > 0) {
      let targetIdxs = [];
      for (let i = 0; i < n; i++) {
        if (active[i] && i !== hostIdx && fin[i] > 0) {
          targetIdxs.push(i);
        }
      }
      let p = 0;
      while (remaining > 0 && targetIdxs.length > 0) {
        const idx = targetIdxs[p % targetIdxs.length];
        if (fin[idx] > 0) {
          fin[idx] -= 1;
          remaining--;
        }
        p++;
        if (targetIdxs.every(idx => fin[idx] <= 0)) {
          break;
        }
      }
    }
  }
  return fin;
}

function stlCalcTotal(mi) {
  if (stl.manualTotal && stl.manualTotal[mi] != null) return stl.manualTotal[mi];
  const m = stl.members[mi];
  if (!m) return 0;
  
  const host = document.getElementById('stl_host').value;
  const isHost = m.name === host;
  const moimOn = document.getElementById('stl_togMoim').classList.contains('on');
  const bjOn = document.getElementById('stl_togBj').classList.contains('on');
  const noBj = document.getElementById('stl_togNoBj').classList.contains('on');
  
  let t = 0;
  stl.costs.forEach((c, ci) => {
    const sh = stlCalcShares(ci);
    t += sh[mi] || 0;
  });
  
  if (!isHost && moimOn) t += 1000;
  if (!isHost && bjOn && !noBj) t += 1000;
  t -= m.prepay || 0;
  return t;
}

function stlEditTotal(mi, val) {
  stl.manualTotal[mi] = parseInt(val.replace(/,/g, ''), 10) || 0;
  stlRenderAll();
}

function stlResetManual() {
  stl.manualTotal = {};
  stlRenderAll();
}

function stlRenderMainTable() {
  const host = document.getElementById('stl_host').value;
  const moimOn = document.getElementById('stl_togMoim').classList.contains('on');
  const bjOn = document.getElementById('stl_togBj').classList.contains('on');
  const noBj = document.getElementById('stl_togNoBj').classList.contains('on');
  const head = document.getElementById('stl_mainHead');
  const body = document.getElementById('stl_mainBody');
  const foot = document.getElementById('stl_mainFoot');
  
  head.innerHTML = '';
  body.innerHTML = '';
  foot.innerHTML = '';
  
  const htr = document.createElement('tr');
  htr.innerHTML = '<th>번호</th><th>이름</th>';
  stl.costs.forEach(c => htr.innerHTML += '<th>' + esc(c.label) + (c.place ? ' ' + esc(c.place) : '') + '</th>');
  htr.innerHTML += '<th>모임비</th><th>벙주비</th><th class="stl-prepay-col">선입금</th><th style="color:#5b21b6;">정산비용</th><th>비고</th>' + (_isAdmin ? '<th></th>' : '');
  head.appendChild(htr);
  
  const allShares = stl.costs.map((c, ci) => stlCalcShares(ci));
  let grandTotal = 0, totalMoim = 0, totalBj = 0, totalPrepay = 0;
  const hasManual = stl.manualTotal && Object.keys(stl.manualTotal).length > 0;
  
  stl.members.forEach((m, mi) => {
    const isHost = m.name === host;
    const total = stlCalcTotal(mi);
    grandTotal += total;
    const moim = (!isHost && moimOn) ? 1000 : 0;
    const bj = (!isHost && bjOn && !noBj) ? 1000 : 0;
    totalMoim += moim;
    totalBj += bj;
    totalPrepay += (m.prepay || 0);
    
    const tr = document.createElement('tr');
    const allNames = activeM().map(x => x.name);
    const nameOpts = allNames.map(n => '<option value="' + esc(n) + '"' + (m.name === n ? ' selected' : '') + '>' + esc(n) + '</option>').join('');
    
    let cells = '<td style="color:#94a3b8;">' + (mi + 1) + '</td>';
    cells += '<td class="sn"><select style="font-size:11px;padding:2px 4px;min-width:65px;border:1px solid #e2e8f0;border-radius:5px;" ' + (_isAdmin ? '' : 'disabled') + ' onchange="stl.members[' + mi + '].name=this.value;stlRenderAll()">' + nameOpts + '</select>' + (isHost ? '<span class="stl-badge-host">벙주</span>' : '') + '</td>';
    
    stl.costs.forEach((c, ci) => {
      const s = allShares[ci][mi];
      cells += '<td>' + (s > 0 ? s.toLocaleString() : '-') + '</td>';
    });
    cells += '<td style="color:#94a3b8;">' + (moim > 0 ? moim.toLocaleString() : '-') + '</td>';
    cells += '<td style="color:#94a3b8;">' + (bj > 0 ? bj.toLocaleString() : '-') + '</td>';
    cells += '<td class="stl-prepay-col"><input type="text" inputmode="numeric" value="' + ((m.prepay || 0) > 0 ? (m.prepay).toLocaleString() : '') + '" placeholder="0" ' + (_isAdmin ? '' : 'disabled') + ' style="width:70px;font-size:11px;border:1px solid #e2e8f0;border-radius:5px;padding:3px 5px;text-align:right;" onfocus="this.value=this.value.replace(/,/g,\'\')" onblur="stl.members[' + mi + '].prepay=+this.value.replace(/[^0-9]/g,\'\')||0;stl.manualTotal={};stlRenderAll()" onkeydown="if(event.key===\'Enter\')this.blur()"/></td>';
    cells += '<td><input type="text" inputmode="numeric" class="stl-amt" value="' + total.toLocaleString() + '" ' + (_isAdmin ? '' : 'disabled') + ' style="width:75px;font-weight:700;color:#5b21b6;border:1px solid #ddd6fe;border-radius:5px;padding:3px 5px;text-align:right;background:#faf5ff;" onfocus="this.value=this.value.replace(/,/g,\'\')" onblur="stlEditTotal(' + mi + ',this.value)" onkeydown="if(event.key===\'Enter\')this.blur()"/></td>';
    cells += '<td><input value="' + esc(m.note) + '" placeholder="비고" ' + (_isAdmin ? '' : 'disabled') + ' style="min-width:65px;font-size:11px;border:1px solid #e2e8f0;border-radius:5px;padding:3px 5px;" oninput="stl.members[' + mi + '].note=this.value"/></td>';
    if (_isAdmin) {
      cells += '<td><button class="stl-btn stl-btn-danger" onclick="stl.members.splice(' + mi + ',1);delete stl.opts[' + mi + '];stl.manualTotal={};stlRenderAll()">✕</button></td>';
    }
    
    tr.innerHTML = cells;
    body.appendChild(tr);
  });
  
  const ftr = document.createElement('tr');
  ftr.innerHTML = '<td colspan="2" style="text-align:left;padding-left:6px;">합계' + (hasManual ? ' <button onclick="stlResetManual()" style="font-size:9px;color:#dc2626;background:none;border:none;cursor:pointer;text-decoration:underline;">(수동수정 초기화)</button>' : '') + '</td>';
  stl.costs.forEach(c => ftr.innerHTML += '<td>' + (c.total > 0 ? c.total.toLocaleString() : '-') + '</td>');
  ftr.innerHTML += '<td>' + (totalMoim > 0 ? totalMoim.toLocaleString() : '-') + '</td>';
  ftr.innerHTML += '<td>' + (totalBj > 0 ? totalBj.toLocaleString() : '-') + '</td>';
  ftr.innerHTML += '<td class="stl-prepay-col">' + (totalPrepay > 0 ? '-' + totalPrepay.toLocaleString() : '-') + '</td>';
  ftr.innerHTML += '<td class="stl-amt">' + grandTotal.toLocaleString() + '</td><td></td>' + (_isAdmin ? '<td></td>' : '');
  foot.appendChild(ftr);
}

function stlRenderAll() {
  stlRenderMainTable();
  stlRenderOptTable();
  stlRenderResult();
}

function stlRenderOptTable() {
  const head = document.getElementById('stl_optHead');
  const body = document.getElementById('stl_optBody');
  head.innerHTML = '';
  body.innerHTML = '';
  
  const h1 = document.createElement('tr');
  h1.innerHTML = '<th>이름</th>';
  stl.costs.forEach(c => h1.innerHTML += '<th colspan="3">' + esc(c.label) + (c.place ? ' ' + esc(c.place) : '') + '</th>');
  
  const h2 = document.createElement('tr');
  h2.innerHTML = '<th></th>';
  stl.costs.forEach(() => h2.innerHTML += '<th>논알콜</th><th>늦참차감(원)</th><th>면제</th>');
  
  head.appendChild(h1);
  head.appendChild(h2);
  
  stl.members.forEach((m, mi) => {
    const tr = document.createElement('tr');
    let cells = '<td class="sn">' + esc(m.name) + '</td>';
    stl.costs.forEach((c, ci) => {
      cells += '<td><input type="checkbox" ' + (stlGetOpt(mi, ci, 'nalcohol') ? 'checked' : '') + ' ' + (_isAdmin ? '' : 'disabled') + ' onchange="stlSetOpt(' + mi + ',' + ci + ',\'nalcohol\',this.checked)"/></td>';
      cells += '<td><input type="number" value="' + (stlGetLate(mi, ci) || '') + '" placeholder="0" ' + (_isAdmin ? '' : 'disabled') + ' style="width:65px;font-size:11px;border:1px solid #e2e8f0;border-radius:5px;padding:3px 5px;" onchange="stlSetLate(' + mi + ',' + ci + ',this.value)"/></td>';
      cells += '<td><input type="checkbox" ' + (stlGetOpt(mi, ci, 'exempt') ? 'checked' : '') + ' ' + (_isAdmin ? '' : 'disabled') + ' onchange="stlSetOpt(' + mi + ',' + ci + ',\'exempt\',this.checked)"/></td>';
    });
    tr.innerHTML = cells;
    body.appendChild(tr);
  });
}

function stlRenderResult() {
  const host = document.getElementById('stl_host').value;
  const el = document.getElementById('stl_resultRows');
  el.innerHTML = stl.members.map((m, mi) => {
    const t = stlCalcTotal(mi);
    return '<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:0.5px solid #f1f5f9;">' +
      '<span>' + esc(m.name) + (m.name === host ? ' 🎯' : '') + (m.note ? ' <span style="color:#94a3b8;font-size:10px;">(' + esc(m.note) + ')</span>' : '') + '</span>' +
      '<span class="stl-amt">' + t.toLocaleString() + '원</span>' +
    '</div>';
  }).join('');
}

function stlAddMember() {
  const used = new Set(stl.members.map(m => m.name));
  const first = activeM().find(m => !used.has(m.name));
  stl.members.push({ name: first ? first.name : (activeM()[0] ? activeM()[0].name : ''), prepay: 0, note: '' });
  stl.manualTotal = {};
  stlRenderAll();
}

function stlCopyResult() {
  const host = document.getElementById('stl_host').value;
  const acct = document.getElementById('stl_acctInput').value || '—';
  const date = document.getElementById('stl_bDate').value;
  const name = document.getElementById('stl_bName').value;
  const lines = ['[' + name + ' 정산]', '날짜: ' + date + '  벙주: ' + host, ''];
  
  stl.members.forEach((m, mi) => lines.push(m.name + ': ' + stlCalcTotal(mi).toLocaleString() + '원' + (m.note ? ' (' + m.note + ')' : '')));
  lines.push('');
  lines.push('입금계좌: ' + acct);
  
  navigator.clipboard.writeText(lines.join('\n')).then(() => alert('정산결과 복사 완료! ✅'));
}

function stlCopyKakao() {
  const host = document.getElementById('stl_host').value;
  const acct = document.getElementById('stl_acctInput').value || '—';
  const date = document.getElementById('stl_bDate').value;
  const name = document.getElementById('stl_bName').value;
  const lines = ['🎨 ' + name + ' 정산 안내 🎨', '📅 ' + date, '', '💜 정산금액'];
  
  stl.members.forEach((m, mi) => {
    if (m.name !== host) lines.push('• ' + m.name + ': ' + stlCalcTotal(mi).toLocaleString() + '원');
  });
  lines.push('');
  lines.push('💳 입금계좌');
  lines.push(acct);
  lines.push('');
  lines.push('정산 확인 후 입금 부탁드려요 🙏');
  
  navigator.clipboard.writeText(lines.join('\n')).then(() => alert('카카오톡 공지 복사 완료! 💬'));
}

/* ══ DASHBOARD ══ */

function buildDashYM() {
  const keys = allMK();
  const years = [...new Set(keys.map(k => k.split('-')[0]))].sort();
  const ysel = document.getElementById('dY');
  const msel = document.getElementById('dM');
  if (!ysel || !msel) return;
  
  const cy = ysel.value, cm = msel.value;
  ysel.innerHTML = '<option value="">연도</option>' + years.map(y => '<option value="' + y + '"' + (y === cy ? ' selected' : '') + '>' + y + '년</option>').join('');
  msel.innerHTML = '<option value="">월</option>' + ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map(m => '<option value="' + m + '"' + (m === cm ? ' selected' : '') + '>' + parseInt(m, 10) + '월</option>').join('');
  
  if (!cy && years.length) {
    const lk = latestK();
    if (lk) {
      const [ly, lm] = lk.split('-');
      ysel.value = ly; msel.value = lm;
    }
  }
  GF.all = false;
}

function onDF() {
  GF.all = false;
  safe(syncDashAll);
}

function setAll() {
  GF.all = true;
  document.getElementById('dY').value = '';
  document.getElementById('dM').value = '';
  safe(syncDashAll);
}

function buildAllSels() {
  safe(buildAttMonOpts);
  safe(buildBungMonFilter);
  safe(buildDashYM);
}

let _chart = null;
function syncDashAll() {
  const fb = getBungsGF();
  const k = GF.key();
  const lbl = GF.label();
  
  document.getElementById('fLbl').textContent = '📌 ' + lbl;
  document.getElementById('histL').textContent = lbl;
  document.getElementById('mbtiN').textContent = '(' + lbl + ' 참석자)';
  
  safe(renderSummary, fb, k);
  safe(renderMbtiChart, fb);
  safe(renderHall, fb);
  safe(renderBungHist, fb);
  safe(renderArchived, k);
  safe(renderBirthday);
}

function renderSummary(fb, k) {
  const act = activeM();
  document.getElementById('sT').textContent = act.length + '명';
  safe(updateOpDays);
  
  const avg = arr => arr.length ? (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1) : '-';
  const m = act.filter(x => x.gender === '남');
  const f = act.filter(x => x.gender === '여');
  
  const gA = m2 => m2.age || kr(m2.birthYear) || null;
  document.getElementById('sA').textContent = avg(act.map(gA).filter(Boolean).map(Number)) + '세';
  document.getElementById('sAs').textContent = '남 ' + avg(m.map(gA).filter(Boolean).map(Number)) + '세 / 여 ' + avg(f.map(gA).filter(Boolean).map(Number)) + '세';
  
  const allH = act.filter(x => parseFloat(x.height) > 0).map(x => parseFloat(x.height));
  document.getElementById('sH').textContent = allH.length ? avg(allH) + 'cm' : '-';
  document.getElementById('sHs').textContent = '남 ' + avg(m.filter(x => parseFloat(x.height) > 0).map(x => parseFloat(x.height))) + 'cm / 여 ' + avg(f.filter(x => parseFloat(x.height) > 0).map(x => parseFloat(x.height))) + 'cm';
  
  const gt = m.length + f.length;
  document.getElementById('sG').textContent = gt ? '남 ' + Math.round(m.length / gt * 100) + '% / 여 ' + Math.round(f.length / gt * 100) + '%' : '-';
  document.getElementById('sGc').textContent = '남 ' + m.length + '명 / 여 ' + f.length + '명';
  document.getElementById('sB').textContent = (fb || []).length + '회';
  document.getElementById('sBc').textContent = '취소 ' + (fb || []).reduce((s, b) => s + b.cancelled.length, 0) + '건';
  
  const noshows = deriveNoshows(k);
  const warns = (S.warnings || []).filter(w => k === 'ALL' || (w.date && dtKey(w.date) === k));
  document.getElementById('sW').textContent = (noshows.length + warns.length) + '건';
  document.getElementById('sWc').textContent = '노쇼 ' + noshows.length + ' · 경고 ' + warns.length;
}

function renderMbtiChart(fb) {
  try {
    const act = activeM();
    const pIds = new Set();
    (fb || []).forEach(b => b.attendees.forEach(id => pIds.add(id)));
    const src = (fb && fb.length) ? act.filter(m => pIds.has(m.id)) : act;
    
    const mc = {};
    src.forEach(m => {
      if (m.mbti) mc[m.mbti] = (mc[m.mbti] || 0) + 1;
    });
    
    const ml = Object.keys(mc).sort();
    const md = ml.map(k => mc[k]);
    const maxV = Math.max(...md, 0);
    
    const tones = ['#059669', '#0d9488', '#10b981', '#34d399', '#6ee7b7', '#047857', '#065f46', '#0f766e', '#14b8a6', '#99f6e4', '#a7f3d0', '#d1fae5'];
    const cols = md.map((v, i) => v === maxV ? '#d97706' : tones[i % tones.length]);
    
    if (_chart) {
      try { _chart.destroy(); } catch (e) {}
      _chart = null;
    }
    if (!ml.length) return;
    
    const ctx = document.getElementById('mbtiC');
    if (!ctx) return;
    
    _chart = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ml,
        datasets: [{ data: md, backgroundColor: cols, borderRadius: 6 }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, ticks: { stepSize: 1, font: { size: 10 }, color: '#94a3b8' }, grid: { color: '#f0fdf4' } },
          x: { ticks: { font: { size: 10 }, color: '#64748b' }, grid: { display: false } }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  } catch (e) {
    console.error('Failed to render MBTI Chart', e);
  }
}

function openHallPop(name, filterKey) {
  const p = activeM().find(m => m.name === name) || resolve(name);
  if (!p) return;
  const allB = S.bungs.filter(b => b.attendees.includes(p.id));
  const showB = filterKey === 'ALL' ? allB : allB.filter(b => dtKey(b.date) === filterKey);
  const sorted = showB.sort((a, b) => b.date.localeCompare(a.date));
  
  document.getElementById('hallPopTitle').innerHTML = '📋 ' + esc(name) + ' 번개 참석 이력<span class="pill pg" style="margin-left:8px;font-size:11px;">' + (filterKey === 'ALL' ? '누적' : '당월') + ' ' + sorted.length + '회</span>';
  let html = '';
  if (sorted.length) {
    sorted.forEach(b => {
      html += '<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--bd);">' +
        '<span class="db" style="font-size:10px;flex-shrink:0;">' + dBadge(b.date) + '</span>' +
        '<span style="flex:1;font-size:12px;">' + esc(b.title) + '</span>' +
        '<span style="font-size:10px;color:var(--mt);">' + esc(b.date) + '</span>' +
        (b.cancelled.includes(p.id) ? '<span class="pill pr" style="font-size:9px;">취소</span>' : '') +
      '</div>';
    });
  } else {
    html = '<p style="color:var(--mt);text-align:center;padding:16px;font-size:12px;">이력 없음</p>';
  }
  document.getElementById('hallPopBody').innerHTML = html;
  document.getElementById('hallPop').style.display = 'flex';
}

function renderHall(fb) {
  const aIds = new Set(activeM().map(m => m.id));
  const bR = map => {
    const g = {};
    Object.entries(map).forEach(([n, c]) => {
      if (!g[c]) g[c] = [];
      g[c].push(n);
    });
    return Object.entries(g).map(([c, ns]) => ({ c: +c, ns: ns.sort() })).sort((a, b) => b.c - a.c);
  };
  
  const rc = ['r1', 'r2', 'r3'];
  const em = ['🥇', '🥈', '🥉'];
  const curKey = GF.key();
  
  const mMap = {};
  (fb || []).forEach(b => b.attendees.forEach(id => {
    const p = resolve(id);
    if (p && aIds.has(p.id)) mMap[p.name] = (mMap[p.name] || 0) + 1;
  }));
  const mg = bR(mMap).slice(0, 3);
  document.getElementById('hMon').innerHTML = mg.length ? mg.map((g, i) => {
    return '<div class="hr">' +
      '<div class="rk ' + (rc[i] || 'rn') + '">' + (em[i] || i + 1) + '</div>' +
      '<div style="flex:1;">' +
        '<div style="font-size:11px;font-weight:700;line-height:1.5;">' + g.ns.map(n => '<span onclick="openHallPop(\'' + esc(n) + '\',\'' + esc(curKey) + '\')" style="cursor:pointer;text-decoration:underline dotted;color:var(--tx);">' + esc(n) + '</span>').join(', ') + '</div>' +
        '<div style="font-size:10px;color:var(--pri);font-weight:600;cursor:pointer;" onclick="openHallPop(\'' + esc(g.ns[0]) + '\',\'' + esc(curKey) + '\')">' + g.c + '회</div>' +
      '</div>' +
    '</div>';
  }).join('') : '<p style="color:var(--mt);font-size:11px;padding:5px 0;">데이터 없음</p>';
  
  const aMap = {};
  S.bungs.forEach(b => b.attendees.forEach(id => {
    const p = resolve(id);
    if (p && aIds.has(p.id)) aMap[p.name] = (aMap[p.name] || 0) + 1;
  }));
  const ag = bR(aMap).slice(0, 5);
  document.getElementById('hAll').innerHTML = ag.length ? ag.map((g, i) => {
    return '<div class="hr">' +
      '<div class="rk ' + (i < 3 ? rc[i] : 'rn') + '">' + (i + 1) + '</div>' +
      '<div style="flex:1;">' +
        '<div style="font-size:11px;font-weight:700;line-height:1.5;">' + g.ns.map(n => '<span onclick="openHallPop(\'' + esc(n) + '\',\'ALL\')" style="cursor:pointer;text-decoration:underline dotted;color:var(--tx);">' + esc(n) + '</span>').join(', ') + '</div>' +
        '<div style="font-size:10px;color:var(--gold);font-weight:600;cursor:pointer;" onclick="openHallPop(\'' + esc(g.ns[0]) + '\',\'ALL\')">' + g.c + '회</div>' +
      '</div>' +
    '</div>';
  }).join('') : '<p style="color:var(--mt);font-size:11px;padding:5px 0;">데이터 없음</p>';
}

function renderBungHist(fb) {
  const el = document.getElementById('bHist');
  if (!el) return;
  if (!fb || !fb.length) {
    el.innerHTML = '<p style="color:var(--mt);font-size:11px;text-align:center;padding:14px;">기간 내 번개 기록이 없습니다.</p>';
    return;
  }
  el.innerHTML = fb.map(b => {
    const badge = dBadge(b.date);
    const realAtt = b.attendees.filter(id => !b.cancelled.includes(id));
    const cN = b.cancelled.map(id => {
      const p = resolve(id); return p ? p.name : id;
    });
    const { m: gm, f: gf } = calcGR(realAtt);
    const realNames = realAtt.map(id => {
      const p = resolve(id); return p ? p.name : id;
    });
    
    return '<div class="bc">' +
      '<div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px;margin-bottom:3px;">' +
        '<div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap;">' +
          (badge ? '<span class="db">' + esc(badge) + '</span>' : '') +
          (isUp(b) ? '<span class="pill pgold">📅 예정</span>' : '') +
          '<span style="font-weight:700;font-size:12px;">' + esc(b.title) + '</span>' +
        '</div>' +
        '<span style="color:var(--mt);font-size:11px;">' + esc(b.date || '날짜미정') + '</span>' +
      '</div>' +
      '<div style="font-size:11px;">' +
        '<span class="pill pg" style="margin-right:4px;">' + realAtt.length + '명 · 남' + gm + '/여' + gf + '</span>' +
        (b.cancelled.length ? '<span class="pill pr" style="margin-right:4px;">취소 ' + b.cancelled.length + '명</span>' : '') +
        esc(realNames.join(', ')) +
      '</div>' +
      (b.cancelled.length ? '<div style="font-size:11px;color:var(--rose);margin-top:2px;"><span style="font-weight:600;">취소:</span> ' + esc(cN.join(', ')) + '</div>' : '') +
    '</div>';
  }).join('');
}

function renderBirthday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const soon = activeM().filter(m => {
    if (!m.birth) return false;
    const b = new Date(m.birth);
    const nx = new Date(today.getFullYear(), b.getMonth(), b.getDate());
    if (nx < today) nx.setFullYear(today.getFullYear() + 1);
    return (nx - today) / 86400000 <= 30;
  });
  
  soon.sort((a, b) => {
    const da = new Date(a.birth), db = new Date(b.birth);
    const ya = new Date(today.getFullYear(), da.getMonth(), da.getDate());
    const yb = new Date(today.getFullYear(), db.getMonth(), db.getDate());
    if (ya < today) ya.setFullYear(today.getFullYear() + 1);
    if (yb < today) yb.setFullYear(today.getFullYear() + 1);
    return ya - yb;
  });
  
  document.getElementById('bdayL').innerHTML = soon.length ? soon.map(m => {
    const bd = new Date(m.birth);
    const nx = new Date(today.getFullYear(), bd.getMonth(), bd.getDate());
    if (nx < today) nx.setFullYear(today.getFullYear() + 1);
    const days = Math.round((nx - today) / 86400000);
    const age = m.age || kr(m.birthYear) || '-';
    return '<div style="display:flex;justify-content:space-between;align-items:center;padding:4px 9px;background:var(--gold-light);border-radius:8px;margin-bottom:4px;border:1px solid var(--gold-border);">' +
      '<span style="font-weight:600;font-size:12px;">' + esc(m.name) + ' <span style="font-weight:400;color:var(--sb);">(' + age + '세)</span></span>' +
      '<span class="pill pgold">' + (days === 0 ? '🎂 오늘!' : 'D-' + days) + '</span>' +
    '</div>';
  }).join('') : '<p style="color:var(--mt);font-size:11px;text-align:center;padding:10px;">생일 예정자 없음</p>';
}

function renderArchived(k) {
  const key = k || GF.key();
  const merged = getMergedW(key);
  
  document.getElementById('wCt').textContent = '(' + merged.length + '건)';
  document.getElementById('wB').innerHTML = merged.length ? merged.map(w => {
    const delBtn = _isAdmin ? (w.id ? '<td><button class="btn bred" style="padding:2px 7px;font-size:10px;" onclick="safe(deleteWarning,\'' + esc(w.id) + '\')">🗑</button></td>' : '<td></td>') : '';
    return '<tr><td><strong>' + esc(w.name) + '</strong></td><td style="font-size:10px;">' + esc(w.date) + '</td><td><span class="pill ' + (w.type === '경고' ? 'pamb' : 'pr') + '">' + esc(w.type) + '</span></td><td style="font-size:10px;color:var(--sb);">' + esc(w.reason) + '</td>' + delBtn + '</tr>';
  }).join('') : '<tr><td colspan="' + (_isAdmin ? 5 : 4) + '" style="text-align:center;color:var(--mt);padding:8px;">기록 없음</td></tr>';
  
  const allRj = S.rejects || [];
  const filtRj = key === 'ALL' ? allRj : allRj.filter(r => r.rejectDate && dtKey(r.rejectDate) === key);
  const rjM = filtRj.filter(r => r.gender === '남').length;
  const rjF = filtRj.filter(r => r.gender === '여').length;
  
  const rjCt = document.getElementById('rjCt');
  if (rjCt) {
    let txt = key === 'ALL' ? '(전체 ' + allRj.length + '건' : '(전체 ' + allRj.length + '건 / 이 달 ' + filtRj.length + '건';
    if (filtRj.length > 0) txt += ' · 남 ' + rjM + ' / 여 ' + rjF;
    txt += ')';
    rjCt.textContent = txt;
  }
  
  document.getElementById('rjB').innerHTML = filtRj.length ? filtRj.map(r => {
    return '<tr><td><strong>' + esc(r.name) + '</strong></td><td><span class="pill ' + (r.gender === '남' ? 'pt' : 'pr') + '">' + esc(r.gender || '-') + '</span></td><td style="font-size:10px;">' + esc(r.rejectDate || '-') + '</td><td style="font-size:10px;color:var(--sb);">' + esc(r.reason || '-') + '</td>' + (_isAdmin ? '<td><button class="btn bred" style="padding:2px 7px;font-size:10px;" onclick="safe(deleteReject,\'' + esc(r.id) + '\')">🗑</button></td>' : '') + '</tr>';
  }).join('') : '<tr><td colspan="' + (_isAdmin ? 5 : 4) + '" style="text-align:center;color:var(--mt);padding:8px;">' + (key === 'ALL' ? '없음' : '이 기간 거절 없음') + '</td></tr>';
  
  const allKv = S.archived.filter(m => m.status === 'kicked' || m.status === 'left');
  const filtKv = key === 'ALL' ? allKv : allKv.filter(m => {
    const ex = m.exitDate || '';
    if (!ex) return false;
    const p = ex.split('/');
    if (p.length >= 2) {
      const n = p[0] + '-' + String(p[1]).padStart(2, '0');
      return n === key;
    }
    return false;
  });
  
  document.getElementById('kvB').innerHTML = filtKv.length ? filtKv.map(m => {
    return '<tr><td><strong>' + esc(m.name) + '</strong></td><td><span class="pill ' + (m.status === 'kicked' ? 'pamb' : 'pgy') + '">' + (m.status === 'kicked' ? '강퇴' : '탈퇴') + '</span></td><td style="font-size:10px;">' + esc(m.period || '-') + '</td><td style="font-size:10px;color:var(--sb);">' + esc(m.reason || m.note || '-') + '</td>' + (_isAdmin ? '<td style="white-space:nowrap;"><button class="btn bsub" style="padding:2px 6px;font-size:10px;" onclick="fixExitDate(\'' + esc(m.id) + '\')" title="날짜/사유 수정">🛠</button> <button class="btn bred" style="padding:2px 6px;font-size:10px;" onclick="deleteArchived(\'' + esc(m.id) + '\')" title="기록 삭제">🗑</button></td>' : '') + '</tr>';
  }).join('') : '<tr><td colspan="' + (_isAdmin ? 5 : 4) + '" style="text-align:center;color:var(--mt);padding:8px;">' + (key === 'ALL' ? '없음' : '이 기간 강퇴·탈퇴 없음') + '</td></tr>';
}

function renderDash() {
  safe(buildAllSels);
  safe(updateOpDays);
  if (!GF.all) {
    const lk = latestK();
    if (lk && !document.getElementById('dY').value) {
      const [y, m] = lk.split('-');
      document.getElementById('dY').value = y;
      document.getElementById('dM').value = m;
    }
  }
  safe(syncDashAll);
}

function openReport() {
  const key = GF.key();
  const lbl = GF.label();
  const act = activeM();
  const fb = getBungsGF();
  const nm = key === 'ALL' ? [] : act.filter(m => m.joindate && dtKey(m.joindate) === key);
  
  const cMap = {};
  fb.forEach(b => b.attendees.forEach(id => {
    const p = resolve(id);
    if (p && p.status === 'active') cMap[p.name] = (cMap[p.name] || 0) + 1;
  }));
  const top = Object.entries(cMap).sort((a, b) => b[1] - a[1])[0];
  const noshows = deriveNoshows(key);
  const warns = (S.warnings || []).filter(w => key === 'ALL' || (w.date && dtKey(w.date) === key));
  const males = act.filter(m => m.gender === '남').length;
  const females = act.filter(m => m.gender === '여').length;
  const zero = act.filter(m => !fb.some(b => b.attendees.includes(m.id))).length;
  
  document.getElementById('repTxt').textContent = '🌿 팔레트 운영 마감 리포트 [' + lbl + ']\n' +
    '═'.repeat(42) + '\n' +
    '📅 기준일: ' + getRef() + ' | 🌿 개설 ' + opDays() + '일째\n\n' +
    '👥 회원 현황\n' +
    '  · 총 회원수: ' + act.length + '명 (남 ' + males + '명 / 여 ' + females + '명)\n' +
    (key !== 'ALL' ? '  · 신규 가입: ' + nm.length + '명' + (nm.length ? ' (' + nm.map(m => m.name).join(', ') + ')' : '') + '\n' : '') +
    '  · 활동 미달(0회): ' + zero + '명\n' +
    '  · 경고: ' + warns.length + '건 / 당일취소(노쇼): ' + noshows.length + '건\n' +
    '  · 이 기간 거절: ' + (S.rejects || []).filter(r => key === 'ALL' || dtKey(r.rejectDate || '') === key).length + '건\n' +
    '  · 누적 강퇴·탈퇴: ' + S.archived.length + '명\n\n' +
    '⚡ 번개(벙) 현황 (' + fb.length + '회)\n' +
    (fb.length ? fb.map((b, i) => {
      const { m: gm, f: gf } = calcGR(b.attendees);
      return '  ' + (i + 1) + '. [' + dBadge(b.date) + '] ' + b.title + ' — 참석 ' + b.attendees.length + '명(남' + gm + '/여' + gf + '), 취소 ' + b.cancelled.length + '명';
    }).join('\n') : '  (없음)') + '\n' +
    '  · 총 당일취소: ' + fb.reduce((s, b) => s + b.cancelled.length, 0) + '건\n\n' +
    '🏆 최고 참여자: ' + (top ? top[0] + ' (' + top[1] + '회)' : '해당 없음') + '\n\n' +
    '═'.repeat(42) + '\n' +
    '※ 팔레트 운영진 자동 생성 리포트';
  
  document.getElementById('repMod').style.display = 'flex';
}

function renderAll() {
  safe(updateOpDays);
  safe(buildAllSels);
  safe(renderMembers);
  safe(renderBungs);
  if (_tab === 3) safe(renderDash);
}

/* ══ BOOT ══ */
(async function boot() {
  document.getElementById('refDate').value = getTodayKST();
})();
