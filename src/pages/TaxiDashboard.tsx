import { ArrowLeft, BarChart3, Database, TrendingUp, Car, Star, MapPin, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollToTopLink } from "@/components/ScrollToTopLink";
import { useLanguage } from "@/contexts/LanguageContext";

const TaxiDashboard = () => {
  const { translations } = useLanguage();
  
  const kpis = [
    { label: "Total Trips", value: "1,517", icon: Car, color: "text-blue-400" },
    { label: "Completed Trips", value: "1,373", icon: TrendingUp, color: "text-green-400" },
    { label: "Cancellation Rate", value: "7.17%", icon: Database, color: "text-red-400" },
    { label: "Avg Trip Price", value: "10.71K IQD", icon: Database, color: "text-yellow-400" },
    { label: "Avg Rating", value: "3.99", icon: Star, color: "text-purple-400" },
    { label: "Avg Trips per User", value: "4.1", icon: Users, color: "text-cyan-400" }
  ];

  const insights = [
    "Majority of trips occurred in March and December",
    "Most users take between 5–9 trips",
    "92.8% of trips were completed successfully",
    "Highest cancelled trip prices slightly exceed completed ones",
    "Some inactive drivers like D002 still have a perfect 5.0 rating",
    "Najaf and Mosul generate the most trips"
  ];

  const technologies = [
    { name: "Power BI", description: "DAX, Custom Visuals" },
    { name: "SQL Server", description: "Data modeling and queries" },
    { name: "M Query", description: "Data transformation" }
  ];

  const features = [
    "Filters for trip status, is_active, region, and date range",
    "Dynamic charts: bar charts, line graphs, pie visuals, KPI cards",
    "Drill-down capabilities by drivers and users"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <ScrollToTopLink to="/">
            <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-slate-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span data-i18n="backToPortfolio">{translations.backToPortfolio}</span>
            </Button>
          </ScrollToTopLink>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Taxi Analytics Dashboard
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A complete Power BI dashboard analyzing ride-hailing operations across Iraq's major regions
            </p>
          </div>

          {/* Dashboard Screenshot */}
          <Card className="bg-slate-800/50 border-slate-600 mb-16 overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/64e885d6-d60e-4c4e-bee5-1b491676b3bd.png" 
                alt="Taxi Analytics Dashboard Screenshot - Power BI Dashboard showing trip metrics, KPIs, charts and data visualizations"
                className="w-full h-auto object-contain"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-300" data-i18n="kpis">{translations.kpis}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kpis.map((kpi, index) => (
              <Card key={kpi.label} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <kpi.icon className={`w-8 h-8 ${kpi.color} mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-white mb-1">{kpi.value}</div>
                  <div className="text-sm text-slate-400">{kpi.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Key Insights */}
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-blue-300 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <span data-i18n="keyInsights">{translations.keyInsights}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {insights.map((insight, index) => (
                    <li key={index} className="text-slate-300 flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {insight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-blue-300 flex items-center">
                  <Database className="w-5 h-5 mr-2" />
                  <span data-i18n="technologiesUsed">{translations.technologiesUsed}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {technologies.map((tech, index) => (
                    <div key={index}>
                      <h4 className="text-white font-semibold mb-1">{tech.name}</h4>
                      <p className="text-slate-300 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <Card className="bg-slate-800/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-blue-300 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                <span data-i18n="interactiveFeatures">{translations.interactiveFeatures}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="text-slate-300 flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
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
    </div>
  );
};

export default TaxiDashboard;
