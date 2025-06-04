
import React, { createContext, useContext, useState, useEffect } from 'react';

interface Translations {
  [key: string]: string;
}

const englishTranslations: Translations = {
  title: "Abdullah Alaa",
  subtitle: "Data Analyst & Visualization Expert",
  intro: "Specialized in transforming complex datasets into actionable insights using Power BI, Python, and SQL. Experienced in creating interactive dashboards and automated reporting solutions for various industries.",
  technicalExpertise: "Technical Expertise",
  myProjects: "My Projects",
  projectsSubtitle: "Explore my data analytics and visualization work",
  letsConnect: "Let's Connect",
  connectText: "Ready to transform your data into actionable insights? Let's discuss your next project.",
  getInTouch: "Get In Touch",
  connectLinkedIn: "Connect on LinkedIn",
  copyright: "© 2024 Abdullah Alaa - Data Analyst & Visualization Expert",
  backToPortfolio: "Back to Portfolio",
  viewProject: "VIEW THE PROJECT",
  keyMetrics: "Key Metrics",
  keyInsights: "Key Insights",
  technologiesUsed: "Technologies Used",
  dashboardFeatures: "Dashboard Features",
  kpis: "Key Performance Indicators",
  interactiveFeatures: "Interactive Features"
};

const arabicTranslations: Translations = {
  title: "عبد الله علاء",
  subtitle: "محلل بيانات وخبير تصور البيانات",
  intro: "متخصص في تحويل مجموعات البيانات المعقدة إلى رؤى قابلة للتنفيذ باستخدام Power BI و Python و SQL. ذو خبرة في إنشاء لوحات المعلومات التفاعلية وحلول التقارير الآلية لمختلف الصناعات.",
  technicalExpertise: "الخبرة التقنية",
  myProjects: "مشاريعي",
  projectsSubtitle: "استكشف أعمالي في تحليل البيانات والتصور",
  letsConnect: "دعنا نتواصل",
  connectText: "هل أنت مستعد لتحويل بياناتك إلى رؤى قابلة للتنفيذ؟ دعنا نناقش مشروعك القادم.",
  getInTouch: "تواصل معي",
  connectLinkedIn: "تواصل على لينكد إن",
  copyright: "© 2024 عبد الله علاء - محلل بيانات وخبير تصور البيانات",
  backToPortfolio: "العودة إلى المحفظة",
  viewProject: "عرض المشروع",
  keyMetrics: "المقاييس الرئيسية",
  keyInsights: "الرؤى الرئيسية",
  technologiesUsed: "التقنيات المستخدمة",
  dashboardFeatures: "ميزات لوحة المعلومات",
  kpis: "مؤشرات الأداء الرئيسية",
  interactiveFeatures: "الميزات التفاعلية"
};

interface LanguageContextType {
  language: 'en' | 'ar';
  translations: Translations;
  setLanguage: (lang: 'en' | 'ar') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<'en' | 'ar'>('en');
  const [translations, setTranslations] = useState<Translations>(englishTranslations);

  const setLanguage = (lang: 'en' | 'ar') => {
    setLanguageState(lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update body direction
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update translations
    setTranslations(lang === 'ar' ? arabicTranslations : englishTranslations);
  };

  useEffect(() => {
    // Set initial language
    document.documentElement.lang = 'en';
    document.body.dir = 'ltr';
  }, []);

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
