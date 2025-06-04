
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={language === 'en' 
          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
          : 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
        }
      >
        English
      </Button>
      <Button
        variant={language === 'ar' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('ar')}
        className={language === 'ar' 
          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
          : 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
        }
      >
        العربية
      </Button>
    </div>
  );
};
