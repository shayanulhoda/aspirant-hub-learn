import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Clock, FileText, Target, TrendingUp, Award, Calendar } from 'lucide-react';

const Tests = () => {
  const pendingTests = [
    {
      id: 1,
      title: "NEET Mock Test - Full Syllabus #12",
      subject: "All Subjects",
      questions: 180,
      duration: "3 hours",
      difficulty: "NEET Level",
      deadline: "2 days left",
      attempts: 0,
      maxMarks: 720
    },
    {
      id: 2,
      title: "Physics - Waves and Optics Test",
      subject: "Physics", 
      questions: 45,
      duration: "90 mins",
      difficulty: "Intermediate",
      deadline: "5 days left",
      attempts: 0,
      maxMarks: 180
    },
    {
      id: 3,
      title: "Biology - Human Reproduction Quiz",
      subject: "Biology",
      questions: 30,
      duration: "60 mins", 
      difficulty: "Advanced",
      deadline: "1 week left",
      attempts: 1,
      maxMarks: 120
    }
  ];

  const completedTests = [
    {
      id: 1,
      title: "Chemistry - Organic Compounds Test",
      subject: "Chemistry",
      score: 156,
      maxMarks: 180,
      percentage: 87,
      completedDate: "2 days ago",
      rank: 23,
      totalStudents: 1247
    },
    {
      id: 2,
      title: "Physics - Mechanics Mock Test",
      subject: "Physics",
      score: 142,
      maxMarks: 180,
      percentage: 79,
      completedDate: "1 week ago", 
      rank: 67,
      totalStudents: 892
    },
    {
      id: 3,
      title: "Biology - Cell Structure Quiz",
      subject: "Biology",
      score: 98,
      maxMarks: 120,
      percentage: 82,
      completedDate: "2 weeks ago",
      rank: 45,
      totalStudents: 654
    }
  ];

  const getSubjectColor = (subject: string) => {
    const colors = {
      'Physics': 'bg-blue-100 text-blue-700',
      'Chemistry': 'bg-green-100 text-green-700', 
      'Biology': 'bg-purple-100 text-purple-700',
      'All Subjects': 'bg-primary/10 text-primary'
    };
    return colors[subject as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 overflow-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-2">Tests & Assessments</h1>
            <p className="text-muted-foreground">Track your progress with mock tests and quizzes</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">23</p>
                    <p className="text-sm text-muted-foreground">Tests Taken</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">87%</p>
                    <p className="text-sm text-muted-foreground">Average Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-warning" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">+12%</p>
                    <p className="text-sm text-muted-foreground">Improvement</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">156</p>
                    <p className="text-sm text-muted-foreground">Best Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pending Tests */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Pending Tests</h2>
              <div className="space-y-4">
                {pendingTests.map((test) => (
                  <Card key={test.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{test.title}</h3>
                          <Badge className={getSubjectColor(test.subject)}>
                            {test.subject}
                          </Badge>
                        </div>
                        <Badge variant={test.deadline.includes('2 days') ? 'destructive' : 'secondary'}>
                          {test.deadline}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4" />
                          <span>{test.questions} Questions</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{test.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4" />
                          <span>{test.difficulty}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4" />
                          <span>{test.maxMarks} Marks</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {test.attempts > 0 ? `${test.attempts} attempt${test.attempts > 1 ? 's' : ''} used` : 'No attempts yet'}
                        </div>
                        <Link to={`/test/${test.id}`}>
                          <Button>
                            Start Test
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Completed Tests */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Recent Results</h2>
              <div className="space-y-4">
                {completedTests.map((test) => (
                  <Card key={test.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{test.title}</h3>
                          <Badge className={getSubjectColor(test.subject)}>
                            {test.subject}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-foreground">{test.percentage}%</div>
                          <div className="text-sm text-muted-foreground">{test.score}/{test.maxMarks}</div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <Progress value={test.percentage} />
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{test.completedDate}</span>
                        </div>
                        <div className="text-primary font-medium">
                          Rank: {test.rank}/{test.totalStudents}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Chart Placeholder */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Performance analytics coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Tests;