// ============================================================
//  SITE DATA
// ============================================================

const SITE_DATA = {

  // ----------------------------------------------------------
  // 프로필
  // ----------------------------------------------------------
  profile: {
    name:        "김동범",
    nameEn:      "Dongbeom Kim",
    title:       "연구원 / 박사과정",
    titleEn:     "Researcher · Ph.D. Student",
    affiliation: "한국환경연구원 / 고려대학교",
    department:  "스마트도시재생협동과정 스마트시티 전공",
    email:       "dongbum80@gmail.com",
    github:      "https://github.com/dbkim-geo",
    linkedin:    "",
    googleScholar: "https://scholar.google.co.kr/citations?user=vlqQ3lEAAAAJ&hl=ko",
    researchGate:  "",
    orcid:       "https://orcid.org/0000-0003-3267-4352",
    researcher_id: "12721081",
    bio: "지리정보시스템(GIS)과 원격탐사를 기반으로 도시 환경·토지이용·대기질 등 공간 문제를 연구합니다. 현재 한국환경연구원에 재직하며 고려대학교 스마트시티 전공 박사과정에서 공간 데이터 기반의 도시 문제 해결을 연구하고 있습니다.",
    research_interests: [
      "지리정보시스템 (GIS)",
      "원격탐사 (Remote Sensing)",
      "도시 환경 분석",
      "스마트시티",
      "GeoAI"
    ],
    profileImage: "assets/profile.jpg"
  },

  // ----------------------------------------------------------
  // 학력
  // ----------------------------------------------------------
  education: [
    {
      degree:     "박사과정",
      major:      "스마트시티 전공",
      school:     "고려대학교",
      department: "스마트도시재생협동과정",
      period:     "2026.03 – 현재",
      thesis:     "",
      advisor:    "이건원 교수"
    },
    {
      degree:     "공학 석사",
      major:      "공간정보공학",
      school:     "서울시립대학교",
      department: "공간정보공학과",
      period:     "2023.03 – 2025.02",
      thesis:     "",
      advisor:    "전철민 교수"
    },
    {
      degree:     "학사",
      major:      "지리학 (주전공, 문학사) · 대기과학 (복수전공, 이학사)",
      school:     "공주대학교",
      department: "지리학과 / 대기과학과",
      period:     "2015.03 – 2021.02",
      thesis:     "",
      advisor:    ""
    }
  ],

  // ----------------------------------------------------------
  // 경력
  // ----------------------------------------------------------
  career: [
    {
      position:     "연구원",
      organization: "한국환경연구원",
      department:   "",
      period:       "2025.04 – 현재",
      description:  ""
    },
    {
      position:     "개발자 (사원)",
      organization: "(주)내가시스템",
      department:   "",
      period:       "2021.05 – 2022.12",
      description:  ""
    }
  ],

  // ----------------------------------------------------------
  // 실적  (연도 내림차순 정렬 — renderPublications()에서 자동 처리)
  // ----------------------------------------------------------
  publications: {

    // 국외 논문 (SCI/SCIE)
    international_journals: [
      {
        id:       "ij_0",
        title:    "Cooperative control of intersection traffic signals based on multi-agent reinforcement learning for carbon dioxide emission reduction",
        authors:  "Hyemin Kim, Jinhyuk Park, Dongbeom Kim, Chulmin Jun",
        journal:  "IEEE Access",
        volume:   "",
        number:   "",
        pages:    "",
        year:     2025,
        doi:      "",
        quartile: "Q2",
        abstract: "",
        keywords: ["multi-agent reinforcement learning", "traffic signal control", "CO2 emission"],
        status:   "published",
        url:      ""
      },
      {
        id:       "ij_1",
        title:    "The association between aggressive driving behaviors and elderly pedestrian traffic accidents: The application of explainable artificial intelligence (XAI)",
        authors:  "Minjun Kim, Dongbeom Kim, Jisup Shim",
        journal:  "Applied Sciences",
        volume:   "Vol. 15",
        number:   "No. 4",
        pages:    "p. 1741",
        year:     2025,
        doi:      "",
        quartile: "Q2",
        abstract: "",
        keywords: ["aggressive driving", "elderly pedestrian", "XAI", "traffic accident"],
        status:   "published",
        url:      ""
      },
      {
        id:       "ij_2",
        title:    "Design and implementation of a two-wheeled vehicle safe driving evaluation system",
        authors:  "Dongbeom Kim, Hyemin Kim, Suyun Lee, Qyoung Lee, Minwoo Lee, Jooyoung Lee, Chulmin Jun",
        journal:  "Sensors",
        volume:   "Vol. 24",
        number:   "No. 14",
        pages:    "p. 4739",
        year:     2024,
        doi:      "",
        quartile: "Q2",
        abstract: "",
        keywords: ["two-wheeled vehicle", "safe driving", "evaluation system", "sensors"],
        status:   "published",
        url:      ""
      },
      {
        id:       "ij_3",
        title:    "Application of explainable artificial intelligence (XAI) in urban growth modeling: A case study of Seoul metropolitan area, Korea",
        authors:  "Minjun Kim, Dongbeom Kim, Daeyong Jin, Geunhan Kim",
        journal:  "Land",
        volume:   "Vol. 12",
        number:   "No. 2",
        pages:    "p. 420",
        year:     2023,
        doi:      "",
        quartile: "Q2",
        abstract: "",
        keywords: ["urban growth", "XAI", "explainable AI", "Seoul", "land use"],
        status:   "published",
        url:      ""
      },
      {
        id:       "ij_4",
        title:    "The Detection of Aggressive Driving Patterns in Two-Wheeled Vehicles Using Sensor-Based Approaches",
        authors:  "Dongbeom Kim, Hyemin Kim, Chulmin Jun",
        journal:  "Applied Sciences",
        volume:   "Vol. 13",
        number:   "No. 22",
        pages:    "p. 12377",
        year:     2023,
        doi:      "",
        quartile: "Q2",
        abstract: "",
        keywords: ["aggressive driving", "two-wheeled vehicle", "sensor", "detection"],
        status:   "published",
        url:      ""
      },
      {
        id:       "ij_5",
        title:    "Calculation of Dangerous Driving Index for Two-Wheeled Vehicles Using the Analytic Hierarchy Process",
        authors:  "Suyun Lee, Dongbeom Kim, Chulmin Jun",
        journal:  "Applied Sciences",
        volume:   "Vol. 13",
        number:   "No. 22",
        pages:    "p. 12377",
        year:     2023,
        doi:      "",
        quartile: "Q2",
        abstract: "",
        keywords: ["dangerous driving index", "two-wheeled vehicle", "AHP"],
        status:   "published",
        url:      ""
      },
      {
        id:       "ij_6",
        title:    "Examining the relationship between land use/land cover (LULC) and land surface temperature (LST) using explainable artificial intelligence (XAI) models: A case study of Seoul, South Korea",
        authors:  "Minjun Kim, Dongbeom Kim, Geunhan Kim",
        journal:  "International Journal of Environmental Research and Public Health",
        volume:   "Vol. 19",
        number:   "No. 23",
        pages:    "p. 15926",
        year:     2022,
        doi:      "",
        quartile: "Q2",
        abstract: "",
        keywords: ["LULC", "LST", "land surface temperature", "XAI", "Seoul"],
        status:   "published",
        url:      ""
      }
    ],

    // 국내 논문 (KCI)
    domestic_journals: [
      {
        id:       "dj_0",
        title:    "소음측정망 데이터를 활용한 통계적 환경소음 예측",
        authors:  "김경민, 김동범, 김근한, 장서일",
        journal:  "한국소음진동공학회논문집",
        volume:   "제36권",
        number:   "제1호",
        pages:    "pp. 83–93",
        year:     2026,
        doi:      "",
        abstract: "",
        keywords: ["환경소음", "소음측정망", "통계적 예측"],
        status:   "published",
        url:      ""
      },
      {
        id:       "dj_1",
        title:    "제한된 데이터 환경의 전이학습 기반 XGBoost 정주지 수목 탐지 모델",
        authors:  "이준우, 김동범, 김근한, 전철민",
        journal:  "한국측량학회지",
        volume:   "제43권",
        number:   "제3호",
        pages:    "pp. 365–378",
        year:     2025,
        doi:      "",
        abstract: "",
        keywords: ["전이학습", "XGBoost", "수목 탐지", "정주지"],
        status:   "published",
        url:      ""
      },
      {
        id:       "dj_2",
        title:    "패닉 상황을 고려한 동적 인지 에이전트 기반 화재 대피 시뮬레이션",
        authors:  "김동범, 김혜민, 전철민",
        journal:  "대한공간정보학회지",
        volume:   "제32권",
        number:   "제2호",
        pages:    "pp. 59–66",
        year:     2024,
        doi:      "",
        abstract: "",
        keywords: ["화재 대피", "시뮬레이션", "에이전트 기반 모델", "패닉"],
        status:   "published",
        url:      ""
      },
      {
        id:       "dj_3",
        title:    "이륜차의 운전 평가를 위한 위험운전지수 개발",
        authors:  "이수연, 김동범, 김혜민, 전철민",
        journal:  "대한공간정보학회지",
        volume:   "제31권",
        number:   "제4호",
        pages:    "pp. 65–73",
        year:     2023,
        doi:      "",
        abstract: "",
        keywords: ["이륜차", "위험운전지수", "운전 평가"],
        status:   "published",
        url:      ""
      },
      {
        id:       "dj_4",
        title:    "이륜차 난폭운전 분류 방법: 궤적 유사성을 활용하여",
        authors:  "김동범, 이수연, 김혜민, 전철민",
        journal:  "대한공간정보학회지",
        volume:   "제31권",
        number:   "제4호",
        pages:    "pp. 43–51",
        year:     2023,
        doi:      "",
        abstract: "",
        keywords: ["이륜차", "난폭운전", "궤적 유사성", "분류"],
        status:   "published",
        url:      ""
      },
      {
        id:       "dj_5",
        title:    "다중 회귀 분석을 이용한 도시 내 토지이용이 대기질에 미치는 영향 분석",
        authors:  "김근한, 김동범, 송영명, 최희선",
        journal:  "한국기후변화학회지",
        volume:   "제12권",
        number:   "제6호",
        pages:    "pp. 691–700",
        year:     2021,
        doi:      "",
        abstract: "",
        keywords: ["토지이용", "대기질", "다중 회귀 분석", "도시"],
        status:   "published",
        url:      ""
      },
      {
        id:       "dj_6",
        title:    "도시지역에서의 토지피복 유형별 지표면 온도 현황 분석",
        authors:  "김근한, 김동범, 송영명, 최희선",
        journal:  "한국지리학회지",
        volume:   "",
        number:   "",
        pages:    "pp. 415–430",
        year:     2021,
        doi:      "",
        abstract: "",
        keywords: ["토지피복", "지표면 온도", "도시열섬"],
        status:   "published",
        url:      ""
      },
      {
        id:       "dj_7",
        title:    "의사결정나무를 활용한 2030년 도시 확장 예측",
        authors:  "김근한, 최희선, 김동범, 정예림, 진대용",
        journal:  "Journal of the Korean Society of Environmental Restoration Technology",
        volume:   "제23권",
        number:   "제6호",
        pages:    "pp. 125–135",
        year:     2020,
        doi:      "",
        abstract: "",
        keywords: ["의사결정나무", "도시 확장 예측", "토지이용변화"],
        status:   "published",
        url:      ""
      }
    ],

    // 국외 학술대회
    international_conferences: [],

    // 국내 학술대회
    domestic_conferences: [
      {
        id:           "dc_0",
        title:        "AHP 기법과 시뮬레이션 영상을 이용한 이륜차 주행 평가 항목 가중치 결정",
        authors:      "이수연, 김동범, 김혜민, 전철민",
        conference:   "대한공간정보학회 학술대회",
        location:     "",
        year:         2023,
        month:        "",
        pages:        "pp. 60–61",
        abstract:     "",
        keywords:     ["이륜차", "AHP", "주행 평가"],
        presentation: "oral",
        url:          ""
      },
      {
        id:           "dc_1",
        title:        "행정구역 기반 행정의 문제점 분석: 성범죄자 신상정보 고지를 사례로",
        authors:      "김혜민, 이수연, 김동범, 전철민",
        conference:   "대한공간정보학회 학술대회",
        location:     "",
        year:         2023,
        month:        "",
        pages:        "pp. 64–65",
        abstract:     "",
        keywords:     ["행정구역", "성범죄자 신상정보", "공간 분석"],
        presentation: "oral",
        url:          ""
      }
    ],

    // 특허
    patents: [],

    // 소프트웨어
    software: []
  },

  // ----------------------------------------------------------
  // 참여 프로젝트
  // ----------------------------------------------------------
  projects: [],

  // ----------------------------------------------------------
  // 보유 기술
  // ----------------------------------------------------------
  skills: {
    programming: [
      { name: "Python",   level: 4 },
      { name: "R",        level: 3 },
      { name: "MATLAB",   level: 3 },
      { name: "JavaScript", level: 3 }
    ],
    frameworks: [
      { name: "PyTorch",      level: 3 },
      { name: "scikit-learn", level: 4 },
      { name: "GeoPandas",    level: 4 },
      { name: "OpenCV",       level: 3 }
    ],
    tools: [
      { name: "ArcGIS",  level: 5 },
      { name: "QGIS",    level: 4 },
      { name: "ENVI",    level: 4 },
      { name: "Git",     level: 3 },
      { name: "Docker",  level: 2 }
    ],
    domains: [
      "지리정보시스템 (GIS)",
      "원격탐사 (Remote Sensing)",
      "도시 환경 분석",
      "토지이용 / 토지피복 분석",
      "지표면 온도 분석",
      "공간 통계",
      "스마트시티"
    ]
  }
};
