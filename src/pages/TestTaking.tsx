import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, Flag, CheckCircle } from 'lucide-react';

const TestTaking = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [timeLeft, setTimeLeft] = useState(3540); // 59 minutes in seconds
  const [showInstructions, setShowInstructions] = useState(true);

  const questions = [
    {
      id: 1,
      text: "A thermodynamic system is taken through the cyclic process. The work done by the gas along the path bc is:",
      options: ["(1) zero", "(2) 50 J", "(3) -50 J", "(4) -60 J"],
      subject: "Physics",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2, 
      text: "A ray light enters into a material through a right angled prism at point P with the angle of incidence 30° as shown in figure. It travels through the inside of refractive index of the prism",
      options: ["(1) π/4", "(2) 30.2°", "(3) 2π/3", "(4) 45°/2"],
      subject: "Physics",
      image: "/api/placeholder/300/200"
    }
  ];

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmitTest = () => {
    navigate(`/test/${testId}/result`);
  };

  if (showInstructions) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Optics - Ray & Wave</CardTitle>
            <Badge className="mx-auto w-fit">Physics</Badge>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <h3 className="font-semibold text-destructive mb-2">READ THE INSTRUCTIONS CAREFULLY</h3>
              <div className="space-y-2 text-sm">
                <h4 className="font-medium">GENERAL INSTRUCTIONS</h4>
                <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                  <li>Total duration of the test is 3 hours (180 min)</li>
                  <li>The clock will be set at the server. The countdown timer in the top right corner of screen will display remaining time</li>
                  <li>You can use draft work or scrap sheets for your calculations</li>
                  <li>Do not close the browser tab during exam as this will result in the loss of answering time</li>
                </ul>
                
                <h4 className="font-medium mt-4">ANSWERING QUESTIONS</h4>
                <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                  <li>Click on the number of the question from the Question Palette at the right of your screen to go to that question directly</li>
                  <li>To select your answer, click on one of the option buttons</li>
                  <li>To change your answer, click on another option button</li>
                  <li>To save your answer, you MUST click on the 'Save & Next' button</li>
                </ul>
                
                <h4 className="font-medium mt-4">NAVIGATION</h4>
                <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                  <li>To go to the next question, click the 'Next' button</li>
                  <li>To go back to the previous question, click the 'Previous' button</li>
                </ul>
              </div>
            </div>
            
            <Button 
              className="w-full" 
              size="lg"
              onClick={() => setShowInstructions(false)}
            >
              Continue
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = questions[currentQuestion - 1];
  const totalQuestions = 180;
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/tests">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-lg font-semibold">Optics - Ray & Wave</h1>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Badge variant="outline">Physics</Badge>
                <span>•</span>
                <span>Question {currentQuestion} of {totalQuestions}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4 text-destructive" />
              <span className="font-mono font-semibold text-destructive">
                {formatTime(timeLeft)}
              </span>
            </div>
            <Button onClick={handleSubmitTest}>
              Submit Test
            </Button>
          </div>
        </div>
        <Progress value={progress} className="mt-2" />
      </div>

      <div className="grid lg:grid-cols-4 gap-6 p-6">
        {/* Question Area */}
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-6">
              <div className="mb-4">
                <Badge variant="outline" className="mb-2">
                  Question No {currentQ.id} / {totalQuestions}
                </Badge>
                <h2 className="text-lg font-medium mb-4">
                  {currentQ.text}
                </h2>
                
                {currentQ.image && (
                  <div className="mb-6 p-4 border rounded-lg bg-muted/20">
                    <div className="w-full h-48 bg-muted rounded flex items-center justify-center">
                      <span className="text-muted-foreground">Question Diagram</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-6">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(currentQ.id, option)}
                    className={`w-full p-4 text-left rounded-lg border transition-all ${
                      answers[currentQ.id] === option 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-border hover:border-primary/50 hover:bg-muted/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Mark for Review
                  </Button>
                  <Button variant="outline" size="sm">
                    <Flag className="w-4 h-4 mr-2" />
                    PREV
                  </Button>
                  <Button variant="outline" size="sm">
                    SKIP
                  </Button>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    onClick={() => handleAnswerSelect(currentQ.id, answers[currentQ.id] || '')}
                  >
                    Clear Response
                  </Button>
                  <Button>
                    Save & Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Question Palette */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">All Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-2 mb-4">
                {Array.from({ length: 45 }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentQuestion(num)}
                    className={`w-8 h-8 text-xs rounded flex items-center justify-center transition-colors ${
                      currentQuestion === num 
                        ? 'bg-primary text-primary-foreground' 
                        : answers[num] 
                        ? 'bg-success text-success-foreground' 
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-success rounded"></div>
                  <span>Answered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-warning rounded"></div>
                  <span>Marked for Review</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-muted border rounded"></div>
                  <span>Unanswered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-primary rounded"></div>
                  <span>Current</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TestTaking;