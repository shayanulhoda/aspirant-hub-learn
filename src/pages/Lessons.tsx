import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Play, Clock, BookOpen, Star, ChevronRight } from 'lucide-react';

const Lessons = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Physics', 'Chemistry', 'Botany', 'Zoology'];

  const recommendedLessons = [
    {
      id: 1,
      title: "Laws of Motion",
      subject: "Physics",
      duration: "45 mins",
      lessons: 12,
      thumbnail: "physics-motion",
      progress: 68,
      instructor: "Dr. Rajesh Kumar"
    },
    {
      id: 2,
      title: "Structure of Atom",
      subject: "Chemistry", 
      duration: "38 mins",
      lessons: 8,
      thumbnail: "chemistry-atom",
      progress: 0,
      instructor: "Prof. Sneha Patel"
    }
  ];

  const popularLessons = [
    {
      id: 3,
      title: "Plant Kingdom",
      subject: "Botany",
      duration: "52 mins", 
      lessons: 15,
      thumbnail: "botany-plant",
      progress: 0,
      instructor: "Dr. Priya Singh"
    },
    {
      id: 4,
      title: "Animal Kingdom",
      subject: "Zoology",
      duration: "48 mins",
      lessons: 14, 
      thumbnail: "zoology-animal",
      progress: 0,
      instructor: "Dr. Amit Sharma"
    }
  ];

  const subscribeToWatch = [
    {
      id: 5,
      title: "Evolution & Genetics",
      subject: "Biology",
      duration: "62 mins",
      lessons: 18,
      thumbnail: "evolution",
      isPremium: true
    },
    {
      id: 6,
      title: "Respiration in Plants",
      subject: "Botany", 
      duration: "41 mins",
      lessons: 10,
      thumbnail: "respiration",
      isPremium: true
    }
  ];

  const getSubjectColor = (subject: string) => {
    const colors = {
      'Physics': 'bg-blue-100 text-blue-700 border-blue-200',
      'Chemistry': 'bg-green-100 text-green-700 border-green-200',
      'Botany': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'Zoology': 'bg-purple-100 text-purple-700 border-purple-200',
      'Biology': 'bg-purple-100 text-purple-700 border-purple-200'
    };
    return colors[subject as keyof typeof colors] || 'bg-secondary text-secondary-foreground';
  };

  const LessonCard = ({ lesson, showSubscribe = false }: { lesson: any, showSubscribe?: boolean }) => (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-200 group cursor-pointer">
      <div className="h-24 bg-gradient-to-br from-primary/10 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-primary" />
        </div>
        {lesson.progress > 0 && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="text-xs">
              {lesson.progress}%
            </Badge>
          </div>
        )}
        {lesson.isPremium && (
          <div className="absolute top-2 left-2">
            <Badge className="bg-warning text-warning-foreground text-xs">
              Premium
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <Badge className={getSubjectColor(lesson.subject)} variant="outline">
            {lesson.subject}
          </Badge>
        </div>
        
        <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {lesson.title}
        </h3>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{lesson.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen className="w-3 h-3" />
            <span>{lesson.lessons} lessons</span>
          </div>
        </div>

        {lesson.instructor && (
          <p className="text-xs text-muted-foreground mb-3">by {lesson.instructor}</p>
        )}

        {showSubscribe ? (
          <Button size="sm" className="w-full">
            Subscribe to Watch
          </Button>
        ) : (
          <Link to={`/lessons/${lesson.subject.toLowerCase()}/${lesson.title.toLowerCase().replace(/ /g, '-')}`}>
            <Button size="sm" variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Play className="w-3 h-3 mr-1" />
              Continue Learning
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 overflow-auto p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-2">Lessons</h1>
            <p className="text-muted-foreground">Master NEET concepts with our comprehensive video lessons</p>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search lessons..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Recommended Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Recommended</h2>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                See all <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {recommendedLessons.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} />
              ))}
            </div>
          </div>

          {/* Popular Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Popular</h2>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                See all <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {popularLessons.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} />
              ))}
            </div>
          </div>

          {/* Subscribe to Watch Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Subscribe to Watch</h2>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                See all <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {subscribeToWatch.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} showSubscribe={true} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Lessons;