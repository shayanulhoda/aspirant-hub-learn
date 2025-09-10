import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, Play, Clock, BookOpen, Users } from 'lucide-react';

const LessonDetail = () => {
  const { subject, topic } = useParams();

  const lessonUnits = [
    {
      id: 1,
      unit: "UNIT-1",
      title: "Introduction to Force & Motion",
      description: "Concept of force",
      lessons: 6,
      duration: "45 mins",
      color: "bg-blue-500"
    },
    {
      id: 2,
      unit: "UNIT-2", 
      title: "Newton's First Law - Law of Inertia",
      description: "Inertia & newton's law",
      lessons: 4,
      duration: "32 mins",
      color: "bg-green-500"
    },
    {
      id: 3,
      unit: "UNIT-3",
      title: "Newton's Second Law - Force & Acceleration", 
      description: "Fundamental forces",
      lessons: 5,
      duration: "38 mins",
      color: "bg-orange-500"
    },
    {
      id: 4,
      unit: "UNIT-4",
      title: "Newton's Third Law - Action & Reaction",
      description: "Newton's laws & forces",
      lessons: 3,
      duration: "28 mins", 
      color: "bg-purple-500"
    },
    {
      id: 5,
      unit: "UNIT-5",
      title: "Introduction to Force & Motion",
      description: "Concept of force & motion",
      lessons: 4,
      duration: "35 mins",
      color: "bg-red-500"
    }
  ];

  const getSubjectColor = (subject: string) => {
    const colors = {
      'physics': 'from-blue-500 to-blue-600',
      'chemistry': 'from-green-500 to-green-600',
      'botany': 'from-emerald-500 to-emerald-600',
      'zoology': 'from-purple-500 to-purple-600'
    };
    return colors[subject as keyof typeof colors] || 'from-primary to-primary';
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <div className={`bg-gradient-to-r ${getSubjectColor(subject || 'physics')} text-white p-6`}>
            <div className="flex items-center space-x-4 mb-4">
              <Link to="/lessons">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <h1 className="text-2xl font-bold capitalize">
                {topic?.replace(/-/g, ' ')} 
              </h1>
            </div>
            <p className="text-white/90 mb-4">Master the fundamental concepts of forces and motion</p>
            
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-white/70" />
              <Input
                placeholder="Search..."
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid gap-4">
              {lessonUnits.map((unit) => (
                <Card key={unit.id} className="overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      {/* Unit Icon */}
                      <div className={`w-16 h-16 ${unit.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                        <BookOpen className="w-8 h-8" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {unit.unit}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {unit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {unit.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-3 h-3" />
                            <span>{unit.lessons} lessons</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{unit.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action */}
                      <Link to={`/lessons/${subject}/${topic}/${unit.title.toLowerCase().replace(/ /g, '-')}`}>
                        <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Play className="w-4 h-4 mr-2" />
                          Start
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LessonDetail;