
import { BarChart3, Database, Globe, MessageSquare, TrendingUp, Users, Car, Package, Mail, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollToTopLink } from "@/components/ScrollToTopLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { translations } = useLanguage();
  
  const skills = [{
    name: "Power BI",
    icon: BarChart3,
    level: "Advanced"
  }, {
    name: "Python (Pandas)",
    icon: Database,
    level: "Intermediate"
  }, {
    name: "SQL",
    icon: TrendingUp,
    level: "Advanced"
  }, {
    name: "Data Visualization",
    icon: BarChart3,
    level: "Expert"
  }];
  
  const industries = ["Electronic Payments", "Customer Service", "Logistics"];
  
  const projects = [{
    title: "Taxi Analytics Dashboard",
    description: "Complete Power BI dashboard analyzing ride-hailing operations across Iraq's major regions",
    icon: Car,
    link: "/taxi-dashboard",
    color: "from-blue-600/20 to-purple-600/20",
    buttonColor: "bg-blue-600 hover:bg-blue-700"
  }, {
    title: "FMCG Sales Dashboard",
    description: "Python-based dashboard analyzing Fast-Moving Consumer Goods sales performance",
    icon: Package,
    link: "/fmcg-dashboard",
    color: "from-green-600/20 to-blue-600/20",
    buttonColor: "bg-green-600 hover:bg-green-700"
  }];

  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-i18n="title">
              {translations.title}
            </h1>
            <p className="text-2xl md:text-3xl text-blue-300 mb-8 font-light" data-i18n="subtitle">
              {translations.subtitle}
            </p>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto" data-i18n="intro">
              {translations.intro}
            </p>
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <Badge variant="outline" className="text-blue-300 border-blue-300 px-4 py-2 text-lg">
                <Globe className="w-4 h-4 mr-2" />
                English
              </Badge>
              <Badge variant="outline" className="text-blue-300 border-blue-300 px-4 py-2 text-lg">
                <MessageSquare className="w-4 h-4 mr-2" />
                Arabic
              </Badge>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              {industries.map(industry => <Badge key={industry} className="bg-slate-700/50 text-slate-300 px-3 py-1">
                  {industry}
                </Badge>)}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-300" data-i18n="technicalExpertise">{translations.technicalExpertise}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => <Card key={skill.name} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover-scale">
                <CardContent className="p-6 text-center">
                  <skill.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                    {skill.level}
                  </Badge>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-300" data-i18n="myProjects">{translations.myProjects}</h2>
            <p className="text-xl text-slate-300" data-i18n="projectsSubtitle">{translations.projectsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => <Card key={project.title} className="bg-slate-800/50 border-slate-600 overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover-scale">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${project.color} p-8 text-center`}>
                    <project.icon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 mb-6">{project.description}</p>
                    <ScrollToTopLink to={project.link}>
                      <Button className={`${project.buttonColor} text-white px-6 py-3`}>
                        View Project Details
                      </Button>
                    </ScrollToTopLink>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-300" data-i18n="letsConnect">{translations.letsConnect}</h2>
          <p className="text-xl text-slate-300 mb-8" data-i18n="connectText">
            {translations.connectText}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <a href="mailto:abduallah.alaa.as@gamil.com">
                <Mail className="w-5 h-5 mr-2" />
                <span data-i18n="getInTouch">{translations.getInTouch}</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3">
              <a href="https://www.linkedin.com/in/abdullah-alaa-662173169/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                <span data-i18n="connectLinkedIn">{translations.connectLinkedIn}</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400" data-i18n="copyright">
            {translations.copyright}
          </p>
        </div>
      </footer>
    </div>;
};

export default Index;
