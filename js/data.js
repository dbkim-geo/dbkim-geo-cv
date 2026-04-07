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
        doi:      "10.1109/ACCESS.2025.3539685",
        quartile: "Q2",
        abstract: "",
        keywords: ["multi-agent reinforcement learning", "traffic signal control", "CO2 emission"],
        status:   "published",
        url:      "https://doi.org/10.1109/ACCESS.2025.3539685"
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
        doi:      "10.3390/app15041741",
        quartile: "Q2",
        abstract: "",
        keywords: ["aggressive driving", "elderly pedestrian", "XAI", "traffic accident"],
        status:   "published",
        url:      "https://doi.org/10.3390/app15041741"
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
        doi:      "10.3390/s24144739",
        quartile: "Q2",
        abstract: "",
        keywords: ["two-wheeled vehicle", "safe driving", "evaluation system", "sensors"],
        status:   "published",
        url:      "https://doi.org/10.3390/s24144739"
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
        doi:      "10.3390/land12020420",
        quartile: "Q2",
        abstract: "",
        keywords: ["urban growth", "XAI", "explainable AI", "Seoul", "land use"],
        status:   "published",
        url:      "https://doi.org/10.3390/land12020420"
      },
      {
        id:       "ij_4",
        title:    "The Detection of Aggressive Driving Patterns in Two-Wheeled Vehicles Using Sensor-Based Approaches",
        authors:  "Dongbeom Kim, Hyemin Kim, Chulmin Jun",
        journal:  "Applied Sciences",
        volume:   "Vol. 13",
        number:   "No. 22",
        pages:    "p. 12475",
        year:     2023,
        doi:      "10.3390/app132212475",
        quartile: "Q2",
        abstract: "",
        keywords: ["aggressive driving", "two-wheeled vehicle", "sensor", "detection"],
        status:   "published",
        url:      "https://doi.org/10.3390/app132212475"
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
        doi:      "10.3390/app132212377",
        quartile: "Q2",
        abstract: "",
        keywords: ["dangerous driving index", "two-wheeled vehicle", "AHP"],
        status:   "published",
        url:      "https://doi.org/10.3390/app132212377"
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
        doi:      "10.3390/ijerph192315926",
        quartile: "Q2",
        abstract: "",
        keywords: ["LULC", "LST", "land surface temperature", "XAI", "Seoul"],
        status:   "published",
        url:      "https://doi.org/10.3390/ijerph192315926"
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
    patents: [
      {
        id:                  "pat_0",
        title:               "도시 탄소흡수원 관리를 위한 계절 변화 적응형 멀티모달 수목 수관면적 산정 방법 및 시스템",
        authors:             "김근한, 김동범",
        assignee:            "한국환경연구원",
        number:              "10-2025-0142828",
        filing_date:         "2025.09.30",
        registration_date:   "",
        status:              "출원",
        year:                2025
      },
      {
        id:                  "pat_1",
        title:               "이륜차의 위험 운전 감지를 위한 시스템 및 이를 위한 방법",
        authors:             "전철민, 김동범, 김혜민, 이수연",
        assignee:            "서울시립대학교",
        number:              "10-2850743",
        filing_date:         "",
        registration_date:   "",
        status:              "등록",
        year:                2024
      },
      {
        id:                  "pat_2",
        title:               "교통사고 위험도를 기반으로 경로를 계획하는 경로 생성 장치 및 방법",
        authors:             "전철민, 김동범, 한유한, 박진혁",
        assignee:            "",
        number:              "10-2023-0121547",
        filing_date:         "2023",
        registration_date:   "",
        status:              "출원",
        year:                2023
      },
      {
        id:                  "pat_3",
        title:               "이륜차의 난폭운전에 대한 안전 교육을 지원하는 장치 및 방법",
        authors:             "전철민, 김동범, 한유한, 김혜민, 이수연",
        assignee:            "",
        number:              "10-2023-0174310",
        filing_date:         "2023",
        registration_date:   "",
        status:              "출원",
        year:                2023
      }
    ],

    // 소프트웨어
    software: [
      {
        id:                  "sw_0",
        title:               "이륜차 교통사고 위험도 알림 프로그램",
        authors:             "전철민, 김동범, 한유한, 박진혁",
        organization:        "",
        registration_number: "C-2023-037663",
        year:                2023
      }
    ]
  },

  // ----------------------------------------------------------
  // 참여 프로젝트
  // ----------------------------------------------------------
  projects: [
    {
      id:           "proj_0",
      title:        "탄소공간지도기반 계획지원 기술개발",
      type:         "R&D",
      period:       "2025.04 – 2026.12",
      role:         "공동기관 참여연구원",
      organization: "국토교통부",
      funding:      "국토교통과학기술진흥원",
      description:  "정주지 부문 탄소흡수량 식별 알고리즘 개발, 탄소흡수량 지도 구축",
      tags:         ["탄소흡수", "원격탐사", "GIS", "R&D"]
    },
    {
      id:           "proj_1",
      title:        "이륜차 착한운전 평가 기술개발",
      type:         "R&D",
      period:       "2023.01 – 2023.12",
      role:         "주관기관 참여연구원",
      organization: "행정안전부",
      funding:      "한국지역정보개발원",
      description:  "과제 관리, 난폭운전 탐지 알고리즘 개발, 플랫폼 API 개발",
      tags:         ["이륜차", "난폭운전", "알고리즘", "R&D"]
    },
    {
      id:           "proj_2",
      title:        "온실가스 배출 저감을 위한 국토 공간 계획 및 관리 기술 개발",
      type:         "R&D",
      period:       "2022.01 – 2022.12",
      role:         "공동기관 참여연구원",
      organization: "국토교통부",
      funding:      "국토교통과학기술진흥원",
      description:  "시스템 개발, 연구기관 알고리즘 API 개발",
      tags:         ["온실가스", "국토계획", "시스템개발", "R&D"]
    },
    {
      id:           "proj_3",
      title:        "동적 공간 점유 보행자 모델을 고려한 화재 대피 시뮬레이션 개발",
      type:         "장학",
      period:       "2023.03 – 2024.12",
      role:         "장학생",
      organization: "국토교통부",
      funding:      "공간정보산업진흥원",
      description:  "동적 공간 점유 보행자 모델을 고려한 화재 대피 시뮬레이션 개발",
      tags:         ["화재대피", "시뮬레이션", "공간정보", "장학"]
    },
    {
      id:           "proj_4",
      title:        "GK2B GEMS를 활용한 환경 빅데이터 분석 예비 연구 - ⅲ",
      type:         "용역",
      period:       "2023.03 – 2023.12",
      role:         "참여연구원",
      organization: "한국환경연구원",
      funding:      "",
      description:  "시스템 개발 및 분석",
      tags:         ["GEMS", "환경빅데이터", "분석", "용역"]
    },
    {
      id:           "proj_5",
      title:        "기후변화 영향 평가 및 기법 검토 연구",
      type:         "용역",
      period:       "2024.08 – 2024.12",
      role:         "참여연구원",
      organization: "한국환경연구원",
      funding:      "",
      description:  "연구분석",
      tags:         ["기후변화", "영향평가", "용역"]
    },
    {
      id:           "proj_6",
      title:        "대구시 도시생태 현황도",
      type:         "용역",
      period:       "2024.08 – 2024.12",
      role:         "참여연구원",
      organization: "경북개발연구원",
      funding:      "",
      description:  "시스템 개발 및 분석, 공간 계획 적용",
      tags:         ["도시생태", "GIS", "공간계획", "용역"]
    },
    {
      id:           "proj_wip_0",
      title:        "시계열을 고려한 항공영상 기반 고해상도 탄소흡수량 지도 구축",
      type:         "진행중",
      period:       "진행중",
      role:         "연구자",
      organization: "",
      funding:      "",
      description:  "시계열 항공영상 분석을 통한 고해상도 탄소흡수량 지도 구축 연구",
      tags:         ["탄소흡수", "항공영상", "원격탐사", "진행중"]
    },
    {
      id:           "proj_wip_1",
      title:        "off-nadir를 고려한 항공영상 기반 고해상도 지상 바이오매스 흡수량 변화 탐지 연구",
      type:         "진행중",
      period:       "진행중",
      role:         "연구자",
      organization: "",
      funding:      "",
      description:  "off-nadir 항공영상을 활용한 지상 바이오매스 흡수량 변화 탐지",
      tags:         ["바이오매스", "항공영상", "원격탐사", "진행중"]
    },
    {
      id:           "proj_wip_2",
      title:        "스마트시티 정책의 탄소 저감 효과를 탐색하는 연구",
      type:         "진행중",
      period:       "진행중",
      role:         "연구자",
      organization: "",
      funding:      "",
      description:  "스마트시티 정책 시행에 따른 탄소 저감 효과 분석",
      tags:         ["스마트시티", "탄소저감", "정책분석", "진행중"]
    }
  ],

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
