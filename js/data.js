// ============================================================
//  SITE DATA
// ============================================================

const SITE_DATA = {

  // ----------------------------------------------------------
  // 프로필
  // ----------------------------------------------------------
  profile: {
    name: "김동범",
    nameEn: "Dongbeom Kim",
    title: "연구원 / 박사과정",
    titleEn: "Researcher · Ph.D. Student",
    affiliation: "한국환경연구원 / 고려대학교",
    department: "스마트도시재생협동과정 스마트시티 전공",
    email: "dongbum80@gmail.com",
    github: "https://github.com/dbkim-geo",
    linkedin: "",
    googleScholar: "https://scholar.google.co.kr/citations?user=vlqQ3lEAAAAJ&hl=ko",
    researchGate: "",
    orcid: "https://orcid.org/0000-0003-3267-4352",
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
      degree: "박사과정",
      major: "스마트시티 전공",
      school: "고려대학교",
      department: "스마트도시재생협동과정",
      period: "2026.03 – 현재",
      thesis: "",
      advisor: "이건원 교수"
    },
    {
      degree: "공학 석사",
      major: "공간정보공학",
      school: "서울시립대학교",
      department: "공간정보공학과",
      period: "2023.03 – 2025.02",
      thesis: "",
      advisor: "전철민 교수"
    },
    {
      degree: "학사",
      major: "지리학 (주전공, 문학사) · 대기과학 (복수전공, 이학사)",
      school: "공주대학교",
      department: "지리학과 / 대기과학과",
      period: "2015.03 – 2021.02",
      thesis: "",
      advisor: ""
    }
  ],

  // ----------------------------------------------------------
  // 경력
  // ----------------------------------------------------------
  career: [
    {
      position: "연구원",
      organization: "한국환경연구원",
      department: "",
      period: "2025.04 – 현재",
      description: ""
    },
    {
      position: "개발자 (사원)",
      organization: "(주)내가시스템",
      department: "",
      period: "2021.05 – 2022.12",
      description: ""
    }
  ],

  // ----------------------------------------------------------
  // 실적  (연도 내림차순 정렬 — renderPublications()에서 자동 처리)
  // ----------------------------------------------------------
  publications: {

    // 국외 논문 (SCI/SCIE)
    international_journals: [
      {
        id: "ij_0",
        title: "Cooperative control of intersection traffic signals based on multi-agent reinforcement learning for carbon dioxide emission reduction",
        authors: "Hyemin Kim, Jinhyuk Park, Dongbeom Kim, Chulmin Jun",
        journal: "IEEE Access",
        volume: "",
        number: "",
        pages: "",
        year: 2025,
        doi: "10.1109/ACCESS.2025.3539685",
        quartile: "Q2",
        abstract: "",
        keywords: ["multi-agent reinforcement learning", "traffic signal control", "CO2 emission"],
        status: "published",
        url: "https://doi.org/10.1109/ACCESS.2025.3539685"
      },
      {
        id: "ij_1",
        title: "The association between aggressive driving behaviors and elderly pedestrian traffic accidents: The application of explainable artificial intelligence (XAI)",
        authors: "Minjun Kim, Dongbeom Kim, Jisup Shim",
        journal: "Applied Sciences",
        volume: "Vol. 15",
        number: "No. 4",
        pages: "p. 1741",
        year: 2025,
        doi: "10.3390/app15041741",
        quartile: "Q2",
        abstract: "",
        keywords: ["aggressive driving", "elderly pedestrian", "XAI", "traffic accident"],
        status: "published",
        url: "https://doi.org/10.3390/app15041741"
      },
      {
        id: "ij_2",
        title: "Design and implementation of a two-wheeled vehicle safe driving evaluation system",
        authors: "Dongbeom Kim, Hyemin Kim, Suyun Lee, Qyoung Lee, Minwoo Lee, Jooyoung Lee, Chulmin Jun",
        journal: "Sensors",
        volume: "Vol. 24",
        number: "No. 14",
        pages: "p. 4739",
        year: 2024,
        doi: "10.3390/s24144739",
        quartile: "Q2",
        abstract: "",
        keywords: ["two-wheeled vehicle", "safe driving", "evaluation system", "sensors"],
        status: "published",
        url: "https://doi.org/10.3390/s24144739"
      },
      {
        id: "ij_3",
        title: "Application of explainable artificial intelligence (XAI) in urban growth modeling: A case study of Seoul metropolitan area, Korea",
        authors: "Minjun Kim, Dongbeom Kim, Daeyong Jin, Geunhan Kim",
        journal: "Land",
        volume: "Vol. 12",
        number: "No. 2",
        pages: "p. 420",
        year: 2023,
        doi: "10.3390/land12020420",
        quartile: "Q2",
        abstract: "",
        keywords: ["urban growth", "XAI", "explainable AI", "Seoul", "land use"],
        status: "published",
        url: "https://doi.org/10.3390/land12020420"
      },
      {
        id: "ij_4",
        title: "The Detection of Aggressive Driving Patterns in Two-Wheeled Vehicles Using Sensor-Based Approaches",
        authors: "Dongbeom Kim, Hyemin Kim, Chulmin Jun",
        journal: "Applied Sciences",
        volume: "Vol. 13",
        number: "No. 22",
        pages: "p. 12475",
        year: 2023,
        doi: "10.3390/app132212475",
        quartile: "Q2",
        abstract: "",
        keywords: ["aggressive driving", "two-wheeled vehicle", "sensor", "detection"],
        status: "published",
        url: "https://doi.org/10.3390/app132212475"
      },
      {
        id: "ij_5",
        title: "Calculation of Dangerous Driving Index for Two-Wheeled Vehicles Using the Analytic Hierarchy Process",
        authors: "Suyun Lee, Dongbeom Kim, Chulmin Jun",
        journal: "Applied Sciences",
        volume: "Vol. 13",
        number: "No. 22",
        pages: "p. 12377",
        year: 2023,
        doi: "10.3390/app132212377",
        quartile: "Q2",
        abstract: "",
        keywords: ["dangerous driving index", "two-wheeled vehicle", "AHP"],
        status: "published",
        url: "https://doi.org/10.3390/app132212377"
      },
      {
        id: "ij_6",
        title: "Examining the relationship between land use/land cover (LULC) and land surface temperature (LST) using explainable artificial intelligence (XAI) models: A case study of Seoul, South Korea",
        authors: "Minjun Kim, Dongbeom Kim, Geunhan Kim",
        journal: "International Journal of Environmental Research and Public Health",
        volume: "Vol. 19",
        number: "No. 23",
        pages: "p. 15926",
        year: 2022,
        doi: "10.3390/ijerph192315926",
        quartile: "Q2",
        abstract: "",
        keywords: ["LULC", "LST", "land surface temperature", "XAI", "Seoul"],
        status: "published",
        url: "https://doi.org/10.3390/ijerph192315926"
      },
      {
        id: "ij_7",
        title: "Urban Settlement Tree Detection and Carbon Absorption Mapping Using Probability Map-Augmented Deep Learning: A Case Study in Seoul",
        authors: "Dongbeom Kim, Joonwoo Lee, Jeongho Yoon, Geunhan Kim",
        journal: "International Journal of Digital Earth",
        volume: "Vol. 19",
        number: "No. 23",
        pages: "p. 15926",
        year: 2026,
        doi: "10.3390/ijerph192315926",
        quartile: "Q1",
        abstract: "",
        keywords: ["LULC", "LST", "land surface temperature", "XAI", "Seoul"],
        status: "published",
        url: "https://doi.org/10.3390/ijerph192315926"
      }
    ],

    // 국내 논문 (KCI)
    domestic_journals: [
      {
        id: "dj_0",
        title: "소음측정망 데이터를 활용한 통계적 환경소음 예측",
        authors: "김경민, 김동범, 김근한, 장서일",
        journal: "한국소음진동공학회논문집",
        volume: "제36권",
        number: "제1호",
        pages: "pp. 83–93",
        year: 2026,
        doi: "",
        abstract: "",
        keywords: ["환경소음", "소음측정망", "통계적 예측"],
        status: "published",
        url: ""
      },
      {
        id: "dj_1",
        title: "제한된 데이터 환경의 전이학습 기반 XGBoost 정주지 수목 탐지 모델",
        authors: "이준우, 김동범, 김근한, 전철민",
        journal: "한국측량학회지",
        volume: "제43권",
        number: "제3호",
        pages: "pp. 365–378",
        year: 2025,
        doi: "",
        abstract: "",
        keywords: ["전이학습", "XGBoost", "수목 탐지", "정주지"],
        status: "published",
        url: ""
      },
      {
        id: "dj_2",
        title: "패닉 상황을 고려한 동적 인지 에이전트 기반 화재 대피 시뮬레이션",
        authors: "김동범, 김혜민, 전철민",
        journal: "대한공간정보학회지",
        volume: "제32권",
        number: "제2호",
        pages: "pp. 59–66",
        year: 2024,
        doi: "",
        abstract: "",
        keywords: ["화재 대피", "시뮬레이션", "에이전트 기반 모델", "패닉"],
        status: "published",
        url: ""
      },
      {
        id: "dj_3",
        title: "이륜차의 운전 평가를 위한 위험운전지수 개발",
        authors: "이수연, 김동범, 김혜민, 전철민",
        journal: "대한공간정보학회지",
        volume: "제31권",
        number: "제4호",
        pages: "pp. 65–73",
        year: 2023,
        doi: "",
        abstract: "",
        keywords: ["이륜차", "위험운전지수", "운전 평가"],
        status: "published",
        url: ""
      },
      {
        id: "dj_4",
        title: "이륜차 난폭운전 분류 방법: 궤적 유사성을 활용하여",
        authors: "김동범, 이수연, 김혜민, 전철민",
        journal: "대한공간정보학회지",
        volume: "제31권",
        number: "제4호",
        pages: "pp. 43–51",
        year: 2023,
        doi: "",
        abstract: "",
        keywords: ["이륜차", "난폭운전", "궤적 유사성", "분류"],
        status: "published",
        url: ""
      },
      {
        id: "dj_5",
        title: "다중 회귀 분석을 이용한 도시 내 토지이용이 대기질에 미치는 영향 분석",
        authors: "김근한, 김동범, 송영명, 최희선",
        journal: "한국기후변화학회지",
        volume: "제12권",
        number: "제6호",
        pages: "pp. 691–700",
        year: 2021,
        doi: "",
        abstract: "",
        keywords: ["토지이용", "대기질", "다중 회귀 분석", "도시"],
        status: "published",
        url: ""
      },
      {
        id: "dj_6",
        title: "도시지역에서의 토지피복 유형별 지표면 온도 현황 분석",
        authors: "김근한, 김동범, 송영명, 최희선",
        journal: "한국지리학회지",
        volume: "",
        number: "",
        pages: "pp. 415–430",
        year: 2021,
        doi: "",
        abstract: "",
        keywords: ["토지피복", "지표면 온도", "도시열섬"],
        status: "published",
        url: ""
      },
      {
        id: "dj_7",
        title: "의사결정나무를 활용한 2030년 도시 확장 예측",
        authors: "김근한, 최희선, 김동범, 정예림, 진대용",
        journal: "Journal of the Korean Society of Environmental Restoration Technology",
        volume: "제23권",
        number: "제6호",
        pages: "pp. 125–135",
        year: 2020,
        doi: "",
        abstract: "",
        keywords: ["의사결정나무", "도시 확장 예측", "토지이용변화"],
        status: "published",
        url: ""
      }
    ],

    // 국외 학술대회
    international_conferences: [],

    // 국내 학술대회
    domestic_conferences: [
      {
        id: "dc_0",
        title: "AHP 기법과 시뮬레이션 영상을 이용한 이륜차 주행 평가 항목 가중치 결정",
        authors: "이수연, 김동범, 김혜민, 전철민",
        conference: "대한공간정보학회 학술대회",
        location: "",
        year: 2023,
        month: "",
        pages: "pp. 60–61",
        abstract: "",
        keywords: ["이륜차", "AHP", "주행 평가"],
        presentation: "oral",
        url: ""
      },
      {
        id: "dc_1",
        title: "행정구역 기반 행정의 문제점 분석: 성범죄자 신상정보 고지를 사례로",
        authors: "김혜민, 이수연, 김동범, 전철민",
        conference: "대한공간정보학회 학술대회",
        location: "",
        year: 2023,
        month: "",
        pages: "pp. 64–65",
        abstract: "",
        keywords: ["행정구역", "성범죄자 신상정보", "공간 분석"],
        presentation: "oral",
        url: ""
      }
    ],

    // 특허
    patents: [
      {
        id: "pat_0",
        title: "도시 탄소흡수원 관리를 위한 계절 변화 적응형 멀티모달 수목 수관면적 산정 방법 및 시스템",
        authors: "김근한, 김동범",
        assignee: "한국환경연구원",
        number: "10-2025-0142828",
        filing_date: "2025.09.30",
        registration_date: "",
        status: "출원",
        year: 2025
      },
      {
        id: "pat_1",
        title: "이륜차의 위험 운전 감지를 위한 시스템 및 이를 위한 방법",
        authors: "전철민, 김동범, 김혜민, 이수연",
        assignee: "서울시립대학교",
        number: "10-2850743",
        filing_date: "",
        registration_date: "",
        status: "등록",
        year: 2024
      },
      {
        id: "pat_2",
        title: "교통사고 위험도를 기반으로 경로를 계획하는 경로 생성 장치 및 방법",
        authors: "전철민, 김동범, 한유한, 박진혁",
        assignee: "",
        number: "10-2023-0121547",
        filing_date: "2023",
        registration_date: "",
        status: "출원",
        year: 2023
      },
      {
        id: "pat_3",
        title: "이륜차의 난폭운전에 대한 안전 교육을 지원하는 장치 및 방법",
        authors: "전철민, 김동범, 한유한, 김혜민, 이수연",
        assignee: "",
        number: "10-2023-0174310",
        filing_date: "2023",
        registration_date: "",
        status: "출원",
        year: 2023
      }
    ],

    // 소프트웨어
    software: [
      {
        id: "sw_0",
        title: "이륜차 교통사고 위험도 알림 프로그램",
        authors: "전철민, 김동범, 한유한, 박진혁",
        organization: "",
        registration_number: "C-2023-037663",
        year: 2023
      }
    ]
  },

  // ----------------------------------------------------------
  // 참여 프로젝트
  // ----------------------------------------------------------
  projects: [
    {
      id: "proj_0",
      title: "탄소공간지도기반 계획지원 기술개발",
      type: "R&D",
      period: "2025.04 – 2026.12",
      role: "공동기관 참여연구원",
      organization: "국토교통부",
      funding: "국토교통과학기술진흥원",
      description: "공간계획에 활용 가능한 탄소배출·흡수량 산정 모델과 탄소중립 공간계획 수립 지원 플랫폼을 개발하는 국책 R&D 과제. 10 m 격자 수준의 탄소공간지도 구축, 전국 지자체 확산 및 실증을 최종 목표로 한다.",

      overview_image: "asset/탄소공간지도_연구개발비전과목표.png",
      overview_caption: "연구개발 비전 및 목표 체계도",

      objectives: [
        {
          label: "성과목표 1",
          title: "탄소공간지도 구축 개발",
          detail: "도시계획에 활용 가능한 점·선·면 공간단위 탄소배출·흡수량 산정 모델 개발, 공간해상도 최소 10 m (격자) 수준 달성 — 건물과 도로 식별 수준"
        },
        {
          label: "성과목표 2",
          title: "탄소중립 공간계획수립 지원 플랫폼 개발",
          detail: "탄소중립 기초조사 소요 기간 25 % 단축 및 예측모델 설명력 80 % 이상 확보"
        },
        {
          label: "성과목표 3",
          title: "탄소공간지도 확산·보급 체계 개발",
          detail: "실증도시 4 곳 이상 적용, 탄소공간지도 기반 탄소중립 계획수립 지원 기술 전국 확산"
        }
      ],

      consortium_role: "A14. 흡수원 부문 탄소흡수량 산정모델 개발 (한국환경연구원 담당)",
      consortium_details: [
        "GeoXAI 기반 수목 존재 확률 지도(TPM) 산정 방법론 정립 및 자동화 파이프라인 구축",
        "딥러닝 기반 수목 수관 탐지 및 국가승인계수(Tier-2A) 연계 탄소흡수량 산정 모듈 개발",
        "정사영상(RGB)–TPM 융합 4-Band 입력 구조의 계절 변화 적응형 탄소흡수량 산정 모델 구축 및 고도화",
        "계절별(여름·겨울·가을) 영상 학습·검증 체계 구축 및 서울·세종 등 타 도시권 일반화 성능 검증",
        "25 cm 결과 래스터의 다단계 공간해상도 매핑(10 m → 1 km) 및 탄소공간지도 시스템 연계 체계 마련"
      ],

      contributions: [
        {
          title: "정주지 수목 수관 탐지 및 탄소흡수량 산정",
          description: "고해상도 항공 정사영상(25 cm)과 Sentinel-2 기반 수목 존재 확률 지도(TPM)를 결합한 딥러닝 의미론적 분할 모델을 개발하여, 도시 정주지 내 수관 면적을 픽셀 단위로 추출하고 연간 탄소흡수량을 산정하였다.",
          methods: [
            "Transformer 기반 U-Net 구조의 의미론적 분할 모델을 적용하여 25 cm급 정사영상에서 수목 수관을 픽셀 단위로 추출",
            "Sentinel-2 다중밴드 영상에서 NDVI·GNDVI·NDMI 등 17종 식생 파생지수를 산출하고 XGBoost 로 수목 존재 확률 지도(TPM) 생성",
            "항공 정사영상(RGB) + TPM(선형 보간 10 m → 25 cm)을 결합한 4-Band 입력 구조를 설계하여 계절적 식생 판별 한계 보완",
            "추출된 수관 면적(ha)에 국토부 국가승인계수(Tier-2A, 2024)를 기능유형별(가로수·공원·조경녹지)로 적용하여 연간 바이오매스 탄소흡수량 산정"
          ],
          image: "asset/탄소공간지도_treecanopysegmentation.png",
          image_caption: "Transformer-UNet 기반 수목 수관 탐지 결과 (정사영상 vs. 탐지 마스크)"
        },
        {
          title: "공간 단위별 탄소흡수량 지도 구축",
          description: "수관 탐지 결과를 탄소공간지도(CSM) 시스템에 연계하기 위해, 25 cm 해상도 결과를 행정 단위별 다단계 격자로 변환하는 공간해상도 매핑 파이프라인을 구축하였다.",
          methods: [
            "25 cm 결과 래스터를 10 m → 100 m → 500 m → 1 km 순으로 집계하는 다단계 해상도 매핑 파이프라인 구현",
            "행정경계 정합 여부 자동 검수 및 탄소공간지도 데이터 스키마(격자코드·좌표·흡수량 속성) 적용으로 시스템 연계 호환성 확보"
          ],
          image: "asset/탄소공간지도_공간단위별탄소흡수량.png",
          image_caption: "공간 단위별(10 m – 1 km) 탄소흡수량 지도"
        }
      ],

      outcomes: [
        "정주지 수목 수관 탐지 딥러닝 모델 개발 (Transformer-UNet + TPM 4-Band 융합)",
        "Sentinel-2 기반 수목 존재 확률 지도(TPM) 자동 생성 파이프라인 구축",
        "국가승인계수(Tier-2A) 연계 탄소흡수량 산정 모듈 개발",
        "10 m ~ 1 km 다단계 탄소흡수량 공간 지도 구축 체계 마련 및 탄소공간지도 시스템 연계"
      ],

      tech_stack: [
        "Python", "PyTorch", "Transformer-UNet",
        "XGBoost", "SHAP",
        "Sentinel-2", "GDAL", "GeoPandas", "GeoAI"
      ],

      tags: ["탄소흡수", "원격탐사", "GIS", "R&D"]
    },
    {
      id: "proj_1",
      title: "이륜차 착한운전 평가 기술개발",
      type: "R&D",
      period: "2023.01 – 2023.12",
      role: "주관기관 참여연구원",
      organization: "행정안전부",
      funding: "한국지역정보개발원",
      description: "이륜차 부착형 위험운전 감지장치와 착한운전지수 산정 알고리즘, 스마트폰 앱·공공 배달 앱 연계 서비스를 통합 개발한 국책 R&D 과제. 수원·성남시 현장 실증(49일, 19,697 km)을 통해 착한운전 마일리지 정책 활용방안을 도출하였다.",

      overview_image: "asset/이륜차_이륜차착한운전평가시스템개요도.png",
      overview_caption: "이륜차 착한운전 평가 시스템 개요도",

      objectives: [
        {
          label: "최종 목표 1",
          title: "이륜차 부착형 착한운전 평가 시스템 개발",
          detail: "초음파·가속도·자이로·RTK GNSS·카메라 센서 기반 위험운전 감지장치, 착한운전지수 산정 알고리즘, 스마트폰 앱, 공공 배달 앱 연계 오픈 API 개발"
        },
        {
          label: "최종 목표 2",
          title: "착한운전 마일리지 정책 활용방안 수립",
          detail: "지자체·공공 배달 앱 협력체계 구축, 실증 기반 수용성 평가 및 인센티브·보험료 차등 산정 정책 설계"
        }
      ],

      consortium_role: "주관기관 (서울시립대학교 산학협력단) — 이륜차 착한운전지수 개발 전 과정 주도",
      consortium_details: [
        "이륜차 교통사고 유형 분석을 통한 11개 위험운전행동 평가항목 정의",
        "고성능 도시환경 시뮬레이션 기반 평가항목별 정량적 판단 기준 도출 방법론 개발",
        "계층적 의사결정분석(AHP)을 이용한 평가항목별 가중치 산출 및 착한운전지수 알고리즘 개발",
        "수원·성남시 현장 실증(23.09.06 – 23.10.31, 49일, 이륜차 각 5대, 19,697 km) 및 수용성 평가",
        "공공 배달 앱·지자체 연계 착한운전 마일리지 정책 활용방안 도출 및 취약지역 분석"
      ],

      contributions: [
        {
          title: "이륜차 착한운전지수 산정 및 REST API 개발",
          description: "AHP(계층적 의사결정분석) 기반 착한운전지수 산정 알고리즘을 개발하고, 착한운전 앱·주행 모니터링 웹과 실시간으로 연동 가능한 REST API로 구현하였다.",
          methods: [
            "이륜차 사고 유형 분석으로 11개 위험운전행동 평가항목 정의 및 항목별 가중치 AHP 산출",
            "착한운전지수 산정 알고리즘 설계 및 앱·웹 모니터링 시스템 연동 REST API 개발"
          ],
          image: "asset/이륜차_착한운전app.png",
          image_caption: "착한운전 스마트폰 앱 — 주행 기록 및 착한운전지수 시각화"
        },
        {
          title: "센서 기반 위험운전 탐지 알고리즘 개발",
          description: "부착형 센서 데이터를 활용하여 급가속·급감속·급회전·급진로변경 등 이륜차 위험운전 패턴을 실시간으로 탐지하는 알고리즘을 개발하고 시스템 API로 연동하였다.",
          methods: [
            "궤적 유사성(DTW, Dynamic Time Warping) 기반 급가속·급감속·급회전 탐지 알고리즘 개발 및 API 연동",
            "CNN-LSTM 기반 시계열 주행 데이터 분류로 급진로변경 탐지 모델 개발 및 API 연동"
          ],
          image: "asset/이륜차_센서기반난폭운전탐지알고리즘.png",
          image_caption: "센서 기반 위험운전 탐지 알고리즘 구성"
        },
        {
          title: "착한운전지수 검증 및 수용성 평가",
          description: "현장 실증 주행 데이터와 설문조사를 기반으로 착한운전지수의 타당성을 검증하고, 실수요자(이륜차 운전자·지자체) 대상 수용성 평가를 수행하였다.",
          methods: [
            "현장 실증(수원·성남시, 49일, 19,697 km) 주행 데이터를 활용한 착한운전지수 정합성 검증",
            "설문 기반 이륜차 운전자 수용성 평가 수행 및 지자체 정책 연계 활용방안 도출"
          ],
          image: "asset/이륜차_부착가능한난폭운전탐지센서.png",
          image_caption: "이륜차 부착형 위험운전 감지장치 시제품 (KC 인증 획득)"
        }
      ],

      outcomes: [
        "AHP 기반 이륜차 착한운전지수 산정 알고리즘 및 REST API 개발",
        "CNN-LSTM 기반 급진로변경, DTW 기반 급가속·급감속·급회전 탐지 알고리즘 개발",
        "착한운전 스마트폰 앱 및 주행 모니터링 웹 시스템 구축",
        "이륜차 부착형 위험운전 감지장치 시제품 제작 및 KC 인증 획득",
        "수원·성남시 현장 실증 완료 (49일 / 19,697 km / 이륜차 10대)"
      ],

      tech_stack: [
        "Python", "CNN-LSTM", "DTW",
        "REST API", "AHP", "GIS",
        "RTK GNSS", "Android App"
      ],

      tags: ["이륜차", "난폭운전", "알고리즘", "R&D"]
    },
    {
      id: "proj_2",
      title: "온실가스 배출 저감을 위한 국토 공간 계획 및 관리 기술 개발",
      type: "R&D",
      period: "2022.01 – 2022.12",
      role: "공동기관 참여연구원",
      organization: "국토교통부",
      funding: "국토교통과학기술진흥원",
      description: "LULUCF 분야 정주지·기타토지의 국가 온실가스 통계 산정·보고 체계를 개발하고, 온실가스 저감을 위한 국토·도시 공간계획 및 관리기술을 개발하는 국책 R&D 과제. 각 연구단의 GeoAI 알고리즘을 통합하는 의사결정지원 시스템 구축을 담당하였다.",

      overview_image: "asset/온실가스_연구개발과제의비전및목표.png",
      overview_caption: "연구개발 과제의 비전 및 목표",

      objectives: [
        {
          label: "연구내용 1",
          title: "정주지·기타토지 부문 온실가스 산정 기술개발",
          detail: "원격탐사·항공라이더 기반 활동자료 구축, 배출·흡수계수 개발, Tier2/Approach 3 수준 인벤토리 통계 산출 및 IPCC 가이드라인 적합 NIR 발간"
        },
        {
          label: "연구내용 2",
          title: "온실가스 저감형 국토·도시 공간계획 및 관리시스템 개발",
          detail: "온실가스 저감형 도시 공간 평가·최적화 모델, 의사결정지원 시스템, 통합녹화 모듈 및 법·제도 개정(안) 개발"
        }
      ],

      consortium_role: "GeoAI 기반 의사결정지원 시스템 개발 (공동연구기관 — GIS 시스템 개발 담당)",
      consortium_details: [
        "공간분석 엔진과 AI 분석 기능을 연계하는 GeoAI 기반 의사결정지원 시스템 프레임워크 설계",
        "공간쿼리 기반 정형데이터 추출 모듈 개발 (토지피복·대기질 상관 분석, 시군구 단위 도시환경 인자)",
        "각 연구단(고려대·서울대·KAIST 등) 개발 알고리즘을 웹 시스템에 통합하는 API 연계 체계 구축",
        "전자정부 표준 프레임워크 기반 웹 시스템 및 PostgreSQL 공간 DBMS 구축"
      ],

      contributions: [
        {
          title: "연구단 알고리즘 통합 및 GIS 시스템 구현",
          description: "분산된 연구 기관의 GeoAI 알고리즘을 단일 의사결정지원 시스템으로 통합하였다. 활동자료 시각화, 식재 가능지 탐색, 수종 추천, 온실가스 흡수원 예측 등 4개 핵심 모듈을 시스템 내에 구현하였다.",
          methods: [
            "고려대 활동자료·서울대 Flux 데이터를 연계하여 전 국토·지자체 영역의 탄소진단 결과를 지도 화면에 시각화하는 모듈 구현",
            "KAIST 최적 녹화예정지 탐색 알고리즘을 연동하여 사용자 지정 섹터 내 식재 가능지역을 탐색·표출하는 기능 개발",
            "생육환경인자 기반 AutoML(20종 머신러닝 모델 자동 훈련) 수종 추천 모듈 통합 및 SHAP 기반 변수 기여도 시각화 연계",
            "XGBoost 기반 온실가스 흡수원 효과 예측 모델(LST·대기질, 거리별 민감도) 통합 및 SHAP 해석 결과 시스템 연동"
          ],
          image: "asset/온실가스_온실가스의사결정지원시스템아키텍쳐.png",
          image_caption: "온실가스 저감 의사결정지원 시스템 아키텍처"
        }
      ],

      outcomes: [
        "GeoAI 기반 온실가스 저감 의사결정지원 시스템 구축 (웹, PostgreSQL 공간 DBMS)",
        "탄소진단 결과 지도 시각화 모듈 개발 (전 국토 및 지자체 단위)",
        "AutoML 기반 수종 추천 모듈 및 XGBoost 흡수원 예측 모델 시스템 통합",
        "공간쿼리 기반 도시환경 인자 정형데이터 추출 모듈 개발"
      ],

      tech_stack: [
        "Python", "XGBoost", "AutoML", "SHAP",
        "PostgreSQL", "PostGIS", "GIS",
        "전자정부 표준 프레임워크", "REST API"
      ],

      tags: ["온실가스", "국토계획", "시스템개발", "R&D"]
    },
    {
      id: "proj_3",
      title: "동적 공간 점유 보행자 모델을 고려한 화재 대피 시뮬레이션 개발",
      type: "장학",
      period: "2023.03 – 2024.12",
      role: "장학생",
      organization: "국토교통부",
      funding: "공간정보산업진흥원",
      description: "패닉 상황에서의 군중 혼잡·충돌 효과를 반영한 에이전트 기반 화재 대피 시뮬레이션을 개발한 연구. Floor Field Model(FFM)을 확장하여 셀 다중 점유(60×60 cm², 최대 2명) 및 에이전트 간 화재 인식 전파 메커니즘을 도입하고, IndoorGML 기반 실제 건물에 적용하여 검증하였다.",

      overview_image: "asset/화재대피_FFM기반 모형 구성.png",
      overview_caption: "FFM 기반 대피 모형 구성 — Moore 이웃 전이확률 요소",

      objectives: [
        {
          label: "연구 목표 1",
          title: "동적 공간 점유 보행자 모델 개발",
          detail: "기존 FFM의 셀당 1인 제약을 완화하여 최대 2인 점유(밀도 5.5 agents/m²)를 허용, 군중 압력·병목·방향 분기 등 패닉 상황의 창발 행동을 재현"
        },
        {
          label: "연구 목표 2",
          title: "에이전트 기반 화재 인식 전파 메커니즘 도입",
          detail: "기존 Fire Recognition Field(FRF) 단독 인식에서 탈피하여, 같은 셀을 점유한 에이전트 간 화재 인식 상태를 전파하는 2단계 확산 알고리즘 제안"
        },
        {
          label: "연구 목표 3",
          title: "IndoorGML 기반 실건물 시뮬레이션 검증",
          detail: "OGC IndoorGML 표준으로 실내 공간을 격자화하여 대학 캠퍼스 건물(출구 5개, 300 에이전트)에 적용, 제안 모델의 대피 효율 향상 효과 정량 검증"
        }
      ],

      contributions: [
        {
          title: "에이전트 기반 화재 인식 전파(Agent-Based Fire Recognition Propagation) 모델 개발",
          description: "기존 FFM은 에이전트가 Fire Recognition Field(FRF)에 진입해야만 화재를 인식한다. 이 연구에서는 같은 셀에 공존하는 에이전트 간에 화재 인식 상태가 전파되는 2단계 메커니즘을 새로 설계하였다. 이를 통해 시야가 차단된 환경에서도 군중 접촉을 통해 화재 정보가 확산되며, 병목 형성 이전에 우회 경로를 확보한다.",
          methods: [
            "Moore 이웃 기반 전이확률에 Static Floor Field(SFF), Dynamic Floor Field(DFF), 화재 확산·인식 필드를 통합한 FFM 확장 모델 구현",
            "화재 인식 시 Weighted SFF(WSFF)를 매 타임스텝 재산출하여 화재 구역을 동적으로 비통행 처리, 에이전트의 실시간 우회 경로 반영",
            "셀 다중 점유(최대 2인/셀, 5.5 agents/m²)를 허용해 군중 압력·충돌·정체 유발 병목을 창발적으로 재현",
            "Phase 1(FRF 직접 인식) → Phase 2(동일 셀 에이전트 접촉 전파)의 2단계 알고리즘 설계 및 구현"
          ],
          image: "asset/화재대피_에이전트의화재인식과정및에이전트기반화재전파과정.png",
          image_caption: "기존 FRF 인식(좌)과 제안하는 에이전트 기반 화재 인식 전파(우) 비교"
        },
        {
          title: "시뮬레이션 실험 및 IndoorGML 기반 실건물 검증",
          description: "합성 시나리오(100·500·1,000 에이전트)와 실제 대학 캠퍼스 건물(IndoorGML, 300 에이전트)에서 기존 모델과 제안 모델의 대피 효율을 비교 검증하였다. 500 에이전트 기준 평균 대피 시간 21.6% 단축, 최대 밀도 11.5% 감소를 달성하였다.",
          methods: [
            "합성 모델(60×60 격자, 출구 2개, 에이전트 100·500·1,000명) 대피 시간 박스플롯 비교 — 모든 밀도 조건에서 제안 모델 우위 확인",
            "IndoorGML 데이터셋 격자화(60×60 cm²/셀)로 실내 네비게이션 구조 생성, 비통행 요소(벽) 처리 후 실건물 시뮬레이션 적용",
            "병목 정의(6.0 agents/m² 초과, 3 프레임 이상 지속) 기준으로 기존·제안 모델의 혼잡 발생 시점·규모 정량 비교"
          ],
          image: "asset/화재대피_agent based fir recognition propagation 시뮬레이션 과정.png",
          image_caption: "에이전트 기반 화재 인식 전파 시뮬레이션 진행 과정 (t=0, 50, 100, 150)"
        }
      ],

      outcomes: [
        "동적 다중 점유(최대 2인/셀) FFM 확장 대피 시뮬레이션 모델 개발",
        "에이전트 간 접촉 기반 화재 인식 전파 알고리즘(2단계) 설계 및 구현",
        "제안 모델: 평균 대피 시간 21.6% 단축, 최대 밀도 11.5% 감소 (500 에이전트 기준)",
        "IndoorGML 기반 실건물 시뮬레이션 검증 프레임워크 구축"
      ],

      tech_stack: [
        "Python", "에이전트 기반 모델(ABM)",
        "Floor Field Model (FFM)", "IndoorGML",
        "공간 시뮬레이션", "GIS"
      ],

      tags: ["화재대피", "시뮬레이션", "공간정보", "장학"]
    },
    {
      id: "proj_4",
      title: "GK2B GEMS를 활용한 환경 빅데이터 분석 예비 연구 - ⅲ",
      type: "용역",
      period: "2023.03 – 2023.12",
      role: "참여연구원",
      organization: "한국환경연구원",
      funding: "",
      description: "시스템 개발 및 분석",
      tags: ["GEMS", "환경빅데이터", "분석", "용역"]
    },
    {
      id: "proj_5",
      title: "기후변화 영향 평가 및 기법 검토 연구",
      type: "용역",
      period: "2024.08 – 2024.12",
      role: "참여연구원",
      organization: "한국환경연구원",
      funding: "",
      description: "연구분석",
      tags: ["기후변화", "영향평가", "용역"]
    },
    {
      id: "proj_6",
      title: "대구시 도시생태 현황도",
      type: "용역",
      period: "2024.08 – 2024.12",
      role: "참여연구원",
      organization: "경북개발연구원",
      funding: "",
      description: "시스템 개발 및 분석, 공간 계획 적용",
      tags: ["도시생태", "GIS", "공간계획", "용역"]
    },
    {
      id: "proj_wip_0",
      title: "시계열을 고려한 항공영상 기반 고해상도 탄소흡수량 지도 구축",
      type: "진행중",
      period: "진행중",
      role: "연구자",
      organization: "",
      funding: "",
      description: "시계열 항공영상 분석을 통한 고해상도 탄소흡수량 지도 구축 연구",
      tags: ["탄소흡수", "항공영상", "원격탐사", "진행중"]
    },
    {
      id: "proj_wip_1",
      title: "off-nadir를 고려한 항공영상 기반 고해상도 지상 바이오매스 흡수량 변화 탐지 연구",
      type: "진행중",
      period: "진행중",
      role: "연구자",
      organization: "",
      funding: "",
      description: "off-nadir 항공영상을 활용한 지상 바이오매스 흡수량 변화 탐지",
      tags: ["바이오매스", "항공영상", "원격탐사", "진행중"]
    },
    {
      id: "proj_wip_2",
      title: "스마트시티 정책의 탄소 저감 효과를 탐색하는 연구",
      type: "진행중",
      period: "진행중",
      role: "연구자",
      organization: "",
      funding: "",
      description: "스마트시티 정책 시행에 따른 탄소 저감 효과 분석",
      tags: ["스마트시티", "탄소저감", "정책분석", "진행중"]
    }
  ],

  // ----------------------------------------------------------
  // 보유 기술
  // ----------------------------------------------------------
  skills: {
    programming: [
      { name: "Python", level: 4 },
      { name: "R", level: 3 },
      { name: "MATLAB", level: 3 },
      { name: "JavaScript", level: 3 }
    ],
    frameworks: [
      { name: "PyTorch", level: 3 },
      { name: "scikit-learn", level: 4 },
      { name: "GeoPandas", level: 4 },
      { name: "OpenCV", level: 3 }
    ],
    tools: [
      { name: "ArcGIS", level: 5 },
      { name: "QGIS", level: 4 },
      { name: "ENVI", level: 4 },
      { name: "Git", level: 3 },
      { name: "Docker", level: 2 }
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
