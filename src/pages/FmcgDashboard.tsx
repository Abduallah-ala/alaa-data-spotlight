import { ArrowLeft, BarChart3, Database, TrendingUp, Package, DollarSign, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FmcgDashboard = () => {
  const metrics = [
    { label: "Top Products", value: "Revenue Leaders", icon: Package, color: "text-green-400" },
    { label: "Weekly Performance", value: "Sales Trends", icon: Calendar, color: "text-blue-400" },
    { label: "SKU Analysis", value: "Quantity Sold", icon: BarChart3, color: "text-purple-400" },
    { label: "Price Analysis", value: "Average Unit Price", icon: DollarSign, color: "text-yellow-400" }
  ];

  const insights = [
    "Best-selling SKUs by week and month",
    "Identification of seasonal demand patterns",
    "Retailer contribution to overall sales performance",
    "Price trends and high-margin product identification",
    "SKU behavior analysis across different time periods",
    "Data-driven insights for inventory optimization"
  ];

  const technologies = [
    { name: "Python", description: "Core programming language for analysis" },
    { name: "Pandas", description: "Data manipulation and analysis" },
    { name: "Matplotlib", description: "Static data visualizations" },
    { name: "Plotly", description: "Interactive charts and dashboards" }
  ];

  const features = [
    "Visual comparisons by category and time periods",
    "Exploratory data visualizations for trend analysis",
    "Data cleaning & grouping by temporal dimensions",
    "SKU performance ranking and categorization",
    "Revenue and profitability analysis tools"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-slate-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              FMCG Sales Analysis Dashboard
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A Python-based dashboard analyzing Fast-Moving Consumer Goods (FMCG) sales performance
            </p>
          </div>

          {/* Dashboard Screenshot in Scrollable Frame */}
          <div className="flex justify-center mb-16">
            <Card className="bg-slate-800/50 border-slate-600 overflow-hidden w-full max-w-[1000px]">
              <CardContent className="p-4">
                <ScrollArea className="w-full">
                  <div className="min-w-[800px]">
                    <img 
                      src="/lovable-uploads/b0215559-26a5-486e-9859-a77003e7e8f7.png" 
                      alt="FMCG Sales Analysis Dashboard Screenshot - Python dashboard showing sales metrics, product analysis, and data visualizations"
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-300">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={metric.label} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
                  <div className="text-lg font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-400">{metric.label}</div>
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
                <CardTitle className="text-green-300 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Key Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {insights.map((insight, index) => (
                    <li key={index} className="text-slate-300 flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {insight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-green-300 flex items-center">
                  <Database className="w-5 h-5 mr-2" />
                  Technologies Used
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
              <CardTitle className="text-green-300 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Dashboard Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="text-slate-300 flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
          <p className="text-slate-400">
            © 2024 Abdullah Alaa - Data Analyst & Visualization Expert
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FmcgDashboard;
