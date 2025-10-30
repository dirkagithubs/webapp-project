import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const StatsSection = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const stats = [
    { 
      value: "5+", 
      label: "Years Experience",
      color: "#8884d8",
      data: [
        { name: "2019", value: 1 },
        { name: "2020", value: 2 },
        { name: "2021", value: 3 },
        { name: "2022", value: 4 },
        { name: "2023", value: 5 },
        { name: "2024", value: 5.5 }
      ]
    },
    { 
      value: "25%", 
      label: "Growth Rate",
      color: "#82ca9d",
      data: [
        { name: "Q1", value: 8 },
        { name: "Q2", value: 15 },
        { name: "Q3", value: 20 },
        { name: "Q4", value: 25 }
      ]
    },
    { 
      value: "18K", 
      label: "Happy Clients",
      color: "#ffc658",
      data: [
        { name: "Social", value: 6500 },
        { name: "Referral", value: 4200 },
        { name: "Organic", value: 5300 },
        { name: "Other", value: 2000 }
      ]
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            KARIM AGENCY <span className="text-primary">Performance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track KARIM AGENCY's growth and success metrics that demonstrate our expertise and commitment to excellence
          </p>
        </div>
        
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="details">Detailed Metrics</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="overview" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="border-2 border-primary rounded-3xl p-8 text-center animate-fade-in shadow-md">
                <CardContent className="p-4">
                  <h2 className="text-3xl font-bold mb-4">Why Choose KARIM AGENCY?</h2>
                  <p className="text-muted-foreground mb-6">
                    With over 5 years of experience, consistent growth, and thousands of satisfied clients, 
                    KARIM AGENCY delivers exceptional results that speak for themselves.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {stats.map((stat, index) => (
                      <div 
                        key={index} 
                        className="text-center animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-8">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { name: "Experience", value: 5.5 },
                    { name: "Growth", value: 25 },
                    { name: "Clients (k)", value: 18 }
                  ]}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="details" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="border animate-fade-in shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{stat.label}</h3>
                    <div className="text-3xl font-bold mb-4" style={{ color: stat.color }}>{stat.value}</div>
                    
                    <ResponsiveContainer width="100%" height={200}>
                      {index === 0 ? (
                        <LineChart data={stat.data}>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="value" stroke={stat.color} strokeWidth={2} />
                        </LineChart>
                      ) : index === 1 ? (
                        <BarChart data={stat.data}>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="value" fill={stat.color} radius={[4, 4, 0, 0]} />
                        </BarChart>
                      ) : (
                        <PieChart>
                          <Pie
                            data={stat.data}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {stat.data.map((entry, i) => (
                              <Cell key={`cell-${i}`} fill={`hsl(${i * 90}, 70%, 60%)`} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      )}
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default StatsSection;
