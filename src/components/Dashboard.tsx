import React from 'react';
import { 
  Play, 
  Clock, 
  TrendingUp, 
  Award, 
  Users, 
  BookOpen, 
  Video,
  FileText,
  Calendar,
  Target
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

export default function Dashboard() {
  const enrolledCourses = [
    {
      id: 1,
      title: "Physics - Complete NEET Course",
      instructor: "Dr. Rajesh Kumar",
      progress: 68,
      totalLessons: 45,
      completedLessons: 31,
      thumbnail: "physics",
      nextLesson: "Electromagnetic Induction"
    },
    {
      id: 2,
      title: "Chemistry - Organic Chemistry",
      instructor: "Prof. Sneha Patel",
      progress: 42,
      totalLessons: 38,
      completedLessons: 16,
      thumbnail: "chemistry",
      nextLesson: "Alcohols and Ethers"
    },
    {
      id: 3,
      title: "Biology - Human Physiology",
      instructor: "Dr. Amit Singh",
      progress: 85,
      totalLessons: 32,
      completedLessons: 27,
      thumbnail: "biology",
      nextLesson: "Nervous System"
    }
  ];

  const upcomingClasses = [
    {
      id: 1,
      title: "Physics - Waves and Optics",
      instructor: "Dr. Rajesh Kumar",
      time: "Today, 4:00 PM",
      duration: "90 mins",
      studentsJoined: 1247
    },
    {
      id: 2,
      title: "Chemistry - Coordination Compounds",
      instructor: "Prof. Sneha Patel", 
      time: "Tomorrow, 2:00 PM",
      duration: "75 mins",
      studentsJoined: 892
    }
  ];

  const pendingTests = [
    {
      id: 1,
      title: "Physics Mock Test - Wave Optics",
      questions: 45,
      duration: "90 mins",
      deadline: "2 days left",
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "Biology Practice Test - Reproduction",
      questions: 30,
      duration: "60 mins", 
      deadline: "5 days left",
      difficulty: "Advanced"
    }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Welcome back, Arjun! 👋
            </h1>
            <p className="text-muted-foreground">
              Ready to continue your NEET preparation journey?
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">164</div>
              <div className="text-sm text-muted-foreground">Study Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">23</div>
              <div className="text-sm text-muted-foreground">Tests Taken</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">87%</div>
              <div className="text-sm text-muted-foreground">Avg Score</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Enrolled Courses */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span>My Courses</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="bg-secondary/50 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                    </div>
                    <Badge variant="outline">{course.progress}% Complete</Badge>
                  </div>
                  
                  <Progress value={course.progress} className="mb-3" />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                    </div>
                    <Button size="sm" className="flex items-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>Continue</span>
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Live Classes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Video className="w-5 h-5 text-primary" />
                <span>Upcoming Live Classes</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingClasses.map((liveClass) => (
                <div key={liveClass.id} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{liveClass.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">by {liveClass.instructor}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{liveClass.time}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{liveClass.studentsJoined} joined</span>
                        </span>
                      </div>
                    </div>
                    <Button className="ml-4">
                      Join Class
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Today's Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Study Time</span>
                <span className="font-semibold">2h 45m</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Lessons Completed</span>
                <span className="font-semibold">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Questions Solved</span>
                <span className="font-semibold">47</span>
              </div>
            </CardContent>
          </Card>

          {/* Pending Tests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-primary" />
                <span>Pending Tests</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingTests.map((test) => (
                <div key={test.id} className="border border-border rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-2">{test.title}</h4>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Questions: {test.questions}</span>
                      <span>Duration: {test.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <Badge variant={test.deadline.includes('2 days') ? 'destructive' : 'secondary'} className="text-xs">
                        {test.deadline}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {test.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full mt-2">
                    Start Test
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Test Completed!</p>
                  <p className="text-xs text-muted-foreground">Biology Mock Test - 89%</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Lesson Completed</p>
                  <p className="text-xs text-muted-foreground">Chemical Bonding - Chapter 4</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}