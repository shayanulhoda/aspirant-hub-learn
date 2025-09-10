import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Play, Pause, Volume2, Settings, Maximize, ThumbsUp, MessageCircle, Save, MoreVertical, Share } from 'lucide-react';

const VideoLesson = () => {
  const { subject, topic, lesson } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  const lessonData = {
    title: "Introduction to Force & Motion",
    description: "Learn the fundamental concepts of force and motion that form the foundation of classical mechanics. This lesson covers definitions, types of forces, and basic motion concepts.",
    duration: "18:00:00",
    instructor: {
      name: "Dr. Ananya Sharma",
      title: "Physics | 12+ Years",
      subtitle: "Specialized in NEET Physics preparation",
      avatar: "/api/placeholder/40/40"
    },
    videoId: "sample-video",
    concepts: [
      "Quadratic Equations",
      "Gaussian-Solving"
    ]
  };

  const instructors = [
    {
      id: 1,
      name: "Dr. Ananya Sharma", 
      title: "Physics | 12+ Years",
      subtitle: "Specialized in NEET Physics preparation",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 2,
      name: "Prof. Raghav Menu",
      title: "Chemistry | 10+ Years", 
      subtitle: "Mastered for NEET top finishers",
      avatar: "/api/placeholder/60/60"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <div className="bg-card border-b border-border p-4">
            <div className="flex items-center space-x-4">
              <Link to={`/lessons/${subject}/${topic}`}>
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="flex-1">
                <h1 className="text-xl font-bold text-foreground capitalize">
                  {lesson?.replace(/-/g, ' ')}
                </h1>
                <p className="text-sm text-muted-foreground">
                  Track: {subject?.toUpperCase()} • {topic?.replace(/-/g, ' ')}
                </p>
              </div>
              <Button variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 p-6">
            {/* Main Video Area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-black relative group">
                  {/* Video placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="w-20 h-20 rounded-full"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? 
                        <Pause className="w-8 h-8" /> : 
                        <Play className="w-8 h-8 ml-1" />
                      }
                    </Button>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Progress value={progress} className="mb-2" />
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Volume2 className="w-4 h-4" />
                        </Button>
                        <span className="text-sm">8:42 / 18:00</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Settings className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Maximize className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Lesson Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-foreground mb-2">
                        {lessonData.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {lessonData.description}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-4 mb-6">
                    <Button variant="outline" size="sm">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Like
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Comment
                    </Button>
                  </div>

                  {/* Instructor Info */}
                  <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={lessonData.instructor.avatar} />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">
                        {lessonData.instructor.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {lessonData.instructor.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {lessonData.instructor.subtitle}
                      </p>
                    </div>
                    <Button size="sm">
                      Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Comments</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    placeholder="Type your comment here..." 
                    className="mb-4"
                  />
                  <Button>Send</Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Description</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Learn from the Best</h4>
                    <div className="space-y-3">
                      {instructors.map((instructor) => (
                        <div key={instructor.id} className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={instructor.avatar} />
                            <AvatarFallback>
                              {instructor.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">
                              {instructor.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {instructor.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {instructor.subtitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* All Doubt */}
              <Card>
                <CardContent className="p-4">
                  <Button className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Ask Doubt
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VideoLesson;