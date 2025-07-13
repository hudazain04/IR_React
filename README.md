# 🧠 Information Retrieval System

نظام استرجاع معلومات متكامل (Frontend) مبني وفق بنية SOA لاسترجاع الوثائق باستخدام خوارزميات متعددة.

---

## 📁 هيكل المشروع

├── ui/ # Frontend (React.js)
│ ├── src/
│ │ ├── components/ # المكونات (SearchBox, ResultList ...)
│ │ ├── pages/ # صفحات الواجهة (Home, Evaluation ...)
│ │ └── App.js # نقطة تشغيل الواجهة
│ ├── public/
│ └── package.json # إعدادات المشروع و الحزم
│
├── .gitignore # ملفات يجب تجاهلها في Git
└── README.md # هذا الملف



---

## 🧠 الخوارزميات المدعومة

- Vector Space Model (TF-IDF)
- Word2Vec
- BM25
- Hybrid (دمج بين الخوارزميات السابقة)
- FAISS Index (اختياري لتحسين الأداء)

---

## 🚀 تشغيل المشروع


### ✅ Fronend (React)
cd ui
npm install
npm run dev


🧪 التقييم (Evaluation)
تم حساب المقاييس التالية:

MAP

Precision@10

Recall@10

NDCG

