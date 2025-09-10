import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Trophy, Target, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const TestResult = () => {
  const { testId } = useParams();

  const resultData = {
    testName: "Optics - Ray & Wave",
    subject: "Physics",
    score: 60,
    totalMarks: 180,
    percentage: 33,
    timeTaken: "02:45:30",
    rank: 1247,
    totalStudents: 2850,
    correctAnswers: 15,
    wrongAnswers: 25,
    unattempted: 140,
    totalQuestions: 180
  };

  const subjectAnalysis = [
    { subject: "Physics", correct: 8, incorrect: 12, unattempted: 70, total: 90, percentage: 18 },
    { subject: "Chemistry", correct: 4, incorrect: 8, unattempted: 35, total: 45, percentage: 18 },
    { subject: "Biology", correct: 3, incorrect: 5, unattempted: 35, total: 45, percentage: 13 }
  ];

  const topicAnalysis = [
    { topic: "Mechanics", correct: 3, incorrect: 5, percentage: 37 },
    { topic: "Optics", correct: 2, incorrect: 4, percentage: 33 },
    { topic: "Thermodynamics", correct: 2, incorrect: 2, percentage: 50 },
    { topic: "Modern Physics", correct: 1, incorrect: 1, percentage: 50 }
  ];

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 75) return "text-success";
    if (percentage >= 50) return "text-warning";
    return "text-destructive";
  };

  const getPerformanceBg = (percentage: number) => {
    if (percentage >= 75) return "bg-success/10";
    if (percentage >= 50) return "bg-warning/10";
    return "bg-destructive/10";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Link to="/tests">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Test Results</h1>
            <p className="text-muted-foreground">{resultData.testName}</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Score Overview */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="md:col-span-2">
            <CardContent className="p-6 text-center">
              <div className={`w-32 h-32 rounded-full ${getPerformanceBg(resultData.percentage)} flex items-center justify-center mx-auto mb-4`}>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getPerformanceColor(resultData.percentage)}`}>
                    {resultData.score}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    / {resultData.totalMarks}
                  </div>
                </div>
              </div>
              <div className={`text-2xl font-bold ${getPerformanceColor(resultData.percentage)} mb-2`}>
                {resultData.percentage}%
              </div>
              <p className="text-muted-foreground">Your Score</p>
              
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Rank</span>
                  <span className="font-semibold">{resultData.rank} / {resultData.totalStudents}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">{resultData.correctAnswers}</div>
                  <div className="text-sm text-muted-foreground">Correct</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-destructive">{resultData.wrongAnswers}</div>
                  <div className="text-sm text-muted-foreground">Incorrect</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Subject-wise Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Subject-wise Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {subjectAnalysis.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{subject.subject}</span>
                    <span className={`font-semibold ${getPerformanceColor(subject.percentage)}`}>
                      {subject.percentage}%
                    </span>
                  </div>
                  <Progress value={subject.percentage} />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Correct: {subject.correct}</span>
                    <span>Wrong: {subject.incorrect}</span>
                    <span>Unattempted: {subject.unattempted}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Topic-wise Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Topic-wise Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topicAnalysis.map((topic, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{topic.topic}</span>
                    <span className={`font-semibold ${getPerformanceColor(topic.percentage)}`}>
                      {topic.percentage}%
                    </span>
                  </div>
                  <Progress value={topic.percentage} />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Correct: {topic.correct}</span>
                    <span>Wrong: {topic.incorrect}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Performance Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-success/10 rounded-lg">
                <Trophy className="w-8 h-8 text-success mx-auto mb-2" />
                <div className="text-sm font-medium">Strong Areas</div>
                <div className="text-xs text-muted-foreground mt-1">Thermodynamics, Modern Physics</div>
              </div>
              
              <div className="text-center p-4 bg-warning/10 rounded-lg">
                <Target className="w-8 h-8 text-warning mx-auto mb-2" />
                <div className="text-sm font-medium">Needs Improvement</div>
                <div className="text-xs text-muted-foreground mt-1">Mechanics, Optics</div>
              </div>

              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">Time Management</div>
                <div className="text-xs text-muted-foreground mt-1">Completed in {resultData.timeTaken}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link to={`/test/${testId}/answers`}>View Answer Key</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/tests">Back to Tests</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestResult;