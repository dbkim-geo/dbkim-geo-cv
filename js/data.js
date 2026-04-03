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
    international_journals: [],

    // 국내 논문 (KCI)
    domestic_journals: [
      {
        id:       "dj_0",
        title:    "다중 회귀 분석을 이용한 도시 내 토지이용이 대기질에 미치는 영향 분석",
        authors:  "김근한, 김동범, 송영명, & 최희선",
        journal:  "한국기후변화학회지",
        volume:   "제12권",
        number:   "제6호",
        pages:    "pp. 691-700",
        year:     2021,
        doi:      "",
        abstract: "",
        keywords: ["토지이용", "대기질", "다중 회귀 분석", "도시"],
        status:   "published",
        url:      ""
      },
      {
        id:       "dj_1",
        title:    "도시지역에서의 토지피복 유형별 지표면 온도 현황 분석",
        authors:  "김근한, 김동범, 송영명, & 최희선",
        journal:  "한국지리학회지",
        volume:   "",
        number:   "",
        pages:    "pp. 415-430",
        year:     2021,
        doi:      "",
        abstract: "",
        keywords: ["토지피복", "지표면 온도", "도시열섬"],
        status:   "published",
        url:      ""
      },
      {
        id:       "dj_2",
        title:    "의사결정나무를 활용한 2030년 도시 확장 예측",
        authors:  "김근한, 최희선, 김동범, 정예림, & 진대용",
        journal:  "Journal of the Korean Society of Environmental Restoration Technology",
        volume:   "제23권",
        number:   "제6호",
        pages:    "pp. 125-135",
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
    domestic_conferences: [],

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
