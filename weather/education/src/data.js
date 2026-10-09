// ── Shared data used across all pages ──────────────────────────────────────

export const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export const COLORS = [
  '#6c63ff','#00d4aa','#ff6b6b','#ffd166',
  '#48cae4','#a78bfa','#f97316','#34d399','#fb7185','#60a5fa',
];

export const CATEGORIES = ['Data Science','Web Dev','Business','Design','Language','Health','Marketing','Cloud'];

export const CAT_ENROLL     = [52000,48000,38000,29000,22000,18000,24000,17312];
export const CAT_COMPLETION = [68,72,61,58,74,65,55,70];
export const CAT_RATING     = [4.4,4.5,4.1,4.3,4.6,4.2,3.9,4.3];

export const ENROLL_2024 = [18200,19800,20210,22400,23100,24800,21000,19600,22900,23400,18700,14200];
export const ENROLL_2023 = [15400,16200,17800,19200,20100,21300,18800,17900,19800,20400,16200,12900];
export const ENROLL_2022 = [12100,12800,13900,15200,16300,17200,15000,14200,16100,16800,13400,10500];

export const COMPLETION_RATE = [58,60,61,63,65,62,60,59,63,64,61,57];
export const DROPOUT_RATE    = [42,40,39,37,35,38,40,41,37,36,39,43];

export const COURSES = [
  { name:'Python for Data Science', cat:'Data Science',  inst:'Dr. Emma Liu',    enroll:32100, comp:71, rating:4.8, demand:'Very High' },
  { name:'Full Stack Web Dev',      cat:'Web Dev',       inst:'James Martin',    enroll:28900, comp:68, rating:4.6, demand:'Very High' },
  { name:'Machine Learning A–Z',    cat:'Data Science',  inst:'Dr. Raj Patel',   enroll:26400, comp:64, rating:4.7, demand:'Very High' },
  { name:'UI/UX Design Mastery',    cat:'Design',        inst:'Sofia Chen',      enroll:21200, comp:73, rating:4.5, demand:'High'      },
  { name:'Digital Marketing Pro',   cat:'Marketing',     inst:'Tom Blake',       enroll:19800, comp:59, rating:4.2, demand:'High'      },
  { name:'AWS Cloud Practitioner',  cat:'Cloud',         inst:'Priya Sharma',    enroll:18600, comp:76, rating:4.6, demand:'High'      },
  { name:'Business Analytics',      cat:'Business',      inst:'Dr. Sarah White', enroll:17300, comp:62, rating:4.1, demand:'Medium'    },
  { name:'Spanish for Beginners',   cat:'Language',      inst:'Carlos Ruiz',     enroll:16100, comp:55, rating:4.4, demand:'Medium'    },
  { name:'Deep Learning & NLP',     cat:'Data Science',  inst:'Dr. Emma Liu',    enroll:15800, comp:58, rating:4.5, demand:'Very High' },
  { name:'React + Next.js',         cat:'Web Dev',       inst:'Kevin Park',      enroll:15200, comp:70, rating:4.6, demand:'High'      },
  { name:'Excel for Business',      cat:'Business',      inst:'Lisa Morgan',     enroll:14900, comp:80, rating:4.3, demand:'Medium'    },
  { name:'Graphic Design Basics',   cat:'Design',        inst:'Amir Hassan',     enroll:13400, comp:67, rating:4.2, demand:'Medium'    },
  { name:'Kubernetes & Docker',     cat:'Cloud',         inst:'Priya Sharma',    enroll:12800, comp:61, rating:4.5, demand:'High'      },
  { name:'Prompt Engineering',      cat:'Data Science',  inst:'Dr. Raj Patel',   enroll:11900, comp:85, rating:4.7, demand:'Very High' },
  { name:'Mindfulness & Health',    cat:'Health',        inst:'Nina Torres',     enroll:11200, comp:74, rating:4.6, demand:'Low'       },
];

export const DEMAND_TOPICS = [
  { label:'Generative AI',  val:94 },
  { label:'Data Science',   val:88 },
  { label:'Web Dev',        val:81 },
  { label:'Cloud / AWS',    val:76 },
  { label:'Cybersecurity',  val:71 },
  { label:'UI/UX Design',   val:65 },
  { label:'DevOps',         val:60 },
  { label:'Digital Mktg',   val:55 },
  { label:'Business Intel', val:50 },
  { label:'Language Learn', val:44 },
];

export const TOOLTIP_STYLE = {
  contentStyle: {
    backgroundColor: '#1a1d27',
    border: '1px solid #2e3350',
    borderRadius: '8px',
    color: '#e8eaf0',
  },
  labelStyle: { color: '#7b82a0' },
  itemStyle:  { color: '#e8eaf0' },
};
