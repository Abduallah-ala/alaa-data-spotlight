
import { BarChart3, Database, Globe, MessageSquare, TrendingUp, Users, Car, Star, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Index = () => {
  const skills = [
    { name: "Power BI", icon: BarChart3, level: "Advanced" },
    { name: "Python (Pandas)", icon: Database, level: "Intermediate" },
    { name: "SQL", icon: TrendingUp, level: "Advanced" },
    { name: "Data Visualization", icon: BarChart3, level: "Expert" }
  ];

  const metrics = [
    { label: "Total Trips", value: "1,517", icon: Car },
    { label: "Completion Rate", value: "92.8%", icon: TrendingUp },
    { label: "Avg Rating", value: "3.99", icon: Star },
    { label: "Avg Price", value: "10.71K IQD", icon: Database }
  ];

  const insights = [
    "Majority of trips occurred in March and December",
    "Most users take between 5–9 trips",
    "92.8% of trips were completed successfully",
    "Najaf and Mosul were among the highest trip-generating regions",
    "Some inactive drivers still hold high historical ratings"
  ];

  const industries = ["Electronic Payments", "Customer Service", "Logistics"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Abdullah Alaa
            </h1>
            <p className="text-2xl md:text-3xl text-blue-300 mb-8 font-light">
              Data Analyst & Visualization Expert
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
              {industries.map((industry) => (
                <Badge key={industry} className="bg-slate-700/50 text-slate-300 px-3 py-1">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover-scale">
                <CardContent className="p-6 text-center">
                  <skill.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                    {skill.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-300">Featured Project</h2>
            <p className="text-xl text-slate-300">Taxi Data Analytics Dashboard</p>
          </div>

          {/* Project Hero */}
          <Card className="bg-slate-800/50 border-slate-600 mb-12 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 text-center">
                <BarChart3 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Taxi Analytics Dashboard</h3>
                <p className="text-slate-300 text-lg">
                  Complete Power BI dashboard analyzing ride-hailing operations across Iraq's major regions
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <Card key={metric.label} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <metric.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-400">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-blue-300 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Key Insights
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

            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-blue-300 flex items-center">
                  <Database className="w-5 h-5 mr-2" />
                  Technologies & Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Tech Stack:</h4>
                    <p className="text-slate-300">Power BI (DAX, Custom Visuals), SQL Server, Relational Modeling, M Query</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Interactive Features:</h4>
                    <p className="text-slate-300">Date range filters, trip status controls, regional analysis, driver performance drill-downs</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Visualizations:</h4>
                    <p className="text-slate-300">Line charts, bar charts, pie charts, KPI cards, ranking tables</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Projects */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">Other Projects</h2>
          <Card className="bg-slate-700/50 border-slate-600 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
                FMCG Sales Analysis Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">
                Python-based dashboard analyzing Fast-Moving Consumer Goods sales performance using advanced data manipulation and visualization techniques.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-600/20 text-blue-300">Python</Badge>
                <Badge className="bg-blue-600/20 text-blue-300">Pandas</Badge>
                <Badge className="bg-blue-600/20 text-blue-300">Matplotlib</Badge>
                <Badge className="bg-blue-600/20 text-blue-300">Plotly</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-300">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-8">
            Ready to transform your data into actionable insights? Let's discuss your next project.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <MessageSquare className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3">
              <Database className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Abdullah Alaa - Data Analyst & Visualization Expert
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
