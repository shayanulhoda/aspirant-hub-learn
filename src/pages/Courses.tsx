import React from 'react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Play, Clock, Users, Star, BookOpen } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Physics - Complete NEET Course",
      instructor: "Dr. Rajesh Kumar",
      rating: 4.8,
      students: 12847,
      progress: 68,
      totalHours: 120,
      completedHours: 82,
      price: 4999,
      thumbnail: "physics",
      subjects: ["Mechanics", "Thermodynamics", "Optics", "Modern Physics"]
    },
    {
      id: 2,
      title: "Chemistry - Organic Chemistry Mastery",
      instructor: "Prof. Sneha Patel",
      rating: 4.9,
      students: 9543,
      progress: 42,
      totalHours: 95,
      completedHours: 40,
      price: 3999,
      thumbnail: "chemistry",
      subjects: ["Hydrocarbons", "Alcohols", "Aldehydes", "Biomolecules"]
    },
    {
      id: 3,
      title: "Biology - Human Physiology & Anatomy",
      instructor: "Dr. Amit Singh",
      rating: 4.7,
      students: 8932,
      progress: 85,
      totalHours: 88,
      completedHours: 75,
      price: 3599,
      thumbnail: "biology",
      subjects: ["Digestive System", "Respiratory System", "Nervous System", "Reproduction"]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 overflow-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-2">My Courses</h1>
            <p className="text-muted-foreground">Continue your NEET preparation journey</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-32 bg-gradient-to-br from-primary/10 to-secondary rounded-t-lg flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-primary" />
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                    <Badge variant="secondary">{course.progress}%</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.totalHours}h</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{course.completedHours}/{course.totalHours} hours</span>
                    </div>
                    <Progress value={course.progress} />
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Topics Covered:</p>
                    <div className="flex flex-wrap gap-1">
                      {course.subjects.slice(0, 3).map((subject) => (
                        <Badge key={subject} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                      {course.subjects.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.subjects.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-sm text-muted-foreground">
                      Last studied: 2 days ago
                    </div>
                    <Button size="sm" className="flex items-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>Continue</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Course Categories */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6">Explore More Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Physics Courses</h3>
                  <p className="text-sm text-muted-foreground">Master mechanics, thermodynamics, and modern physics</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Chemistry Courses</h3>
                  <p className="text-sm text-muted-foreground">Organic, inorganic, and physical chemistry mastery</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Biology Courses</h3>
                  <p className="text-sm text-muted-foreground">Complete coverage of botany and zoology</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Courses;