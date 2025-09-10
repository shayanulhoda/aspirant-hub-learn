import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search, Heart, MessageCircle, Share, MoreVertical, Users, Plus, Send, Paperclip, Smile } from 'lucide-react';

const Communities = () => {
  const [selectedTab, setSelectedTab] = useState('my-feed');
  const [newPost, setNewPost] = useState('');
  const [showComments, setShowComments] = useState<number | null>(null);

  const communities = [
    {
      id: 1,
      name: "Physics Marvels",
      category: "Physics", 
      members: 35,
      avatar: "/api/placeholder/40/40",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Chemistry",
      category: "Chemistry",
      members: 35,
      avatar: "/api/placeholder/40/40", 
      color: "bg-green-500"
    },
    {
      id: 3,
      name: "NEET @2025",
      category: "NEET 2025",
      members: 35,
      avatar: "/api/placeholder/40/40",
      color: "bg-red-500"
    },
    {
      id: 4,
      name: "Physics Marvels",
      category: "Physics",
      members: 35, 
      avatar: "/api/placeholder/40/40",
      color: "bg-blue-500"
    }
  ];

  const posts = [
    {
      id: 1,
      author: {
        name: "Ananya Verma",
        location: "Delhi, India",
        avatar: "/api/placeholder/40/40"
      },
      content: "In my last Organic Chemistry session, I discovered a simple trick to remember hydrocarbon series.",
      details: '"Memory Hack"\n"Think of methane as the seed, and each additional -CH₂ group as branches growing on it. This visualization made it super easy to recall the sequence: Methane → Ethane → Propane → Butane... and so on."',
      likes: 16,
      comments: 24,
      timeAgo: "2h"
    },
    {
      id: 2,
      author: {
        name: "Rahul Nair", 
        location: "Kerala, India",
        avatar: "/api/placeholder/40/40"
      },
      content: "Leaf Patterns & Life",
      details: '"I learned that the venation of leaves is not just structural but also reveals the evolutionary journey of plants. It\'s like nature\'s way of telling stories through patterns."',
      likes: 16,
      comments: 24,
      timeAgo: "1d",
      images: ["/api/placeholder/200/150", "/api/placeholder/200/150", "/api/placeholder/200/150"]
    }
  ];

  const comments = [
    {
      id: 1,
      author: {
        name: "Maude Hall",
        avatar: "/api/placeholder/32/32"
      },
      content: "That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.",
      likes: 2,
      timeAgo: "2 min"
    },
    {
      id: 2, 
      author: {
        name: "Maude Hall",
        avatar: "/api/placeholder/32/32"
      },
      content: "That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.",
      likes: 2,
      timeAgo: "5 min"
    }
  ];

  const PostCard = ({ post }: { post: any }) => (
    <Card className="mb-4">
      <CardContent className="p-6">
        {/* Author Info */}
        <div className="flex items-center space-x-3 mb-4">
          <Avatar>
            <AvatarImage src={post.author.avatar} />
            <AvatarFallback>{post.author.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">{post.author.name}</h3>
            <p className="text-sm text-muted-foreground">{post.author.location}</p>
          </div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <span>{post.timeAgo}</span>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <MoreVertical className="w-3 h-3" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">{post.content}</h4>
          <p className="text-muted-foreground text-sm whitespace-pre-line">
            {post.details}
          </p>
        </div>

        {/* Images */}
        {post.images && (
          <div className="grid grid-cols-3 gap-2 mb-4">
            {post.images.map((image: string, index: number) => (
              <div key={index} className="aspect-square bg-muted rounded overflow-hidden">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Image {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive">
              <Heart className="w-4 h-4 mr-1" />
              {post.likes}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-primary"
              onClick={() => setShowComments(showComments === post.id ? null : post.id)}
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              {post.comments}
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Share className="w-4 h-4" />
          </Button>
        </div>

        {/* Comments Section */}
        {showComments === post.id && (
          <div className="mt-4 pt-4 border-t space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={comment.author.avatar} />
                  <AvatarFallback>{comment.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="bg-muted rounded-lg p-3">
                    <h4 className="font-medium text-sm">{comment.author.name}</h4>
                    <p className="text-sm text-muted-foreground">{comment.content}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-1">
                    <Button variant="ghost" size="sm" className="text-xs text-muted-foreground h-6">
                      {comment.likes} Likes
                    </Button>
                    <Button variant="ghost" size="sm" className="text-xs text-muted-foreground h-6">
                      Reply
                    </Button>
                    <span className="text-xs text-muted-foreground">{comment.timeAgo}</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Comment Input */}
            <div className="flex space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback>YU</AvatarFallback>
              </Avatar>
              <div className="flex-1 flex space-x-2">
                <Input placeholder="Type your comment here" className="flex-1" />
                <Button size="sm">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <div className="bg-card border-b border-border p-6">
            <h1 className="text-2xl font-bold text-foreground mb-2">Community</h1>
            <p className="text-muted-foreground">Connect with fellow NEET aspirants and share your knowledge</p>
          </div>

          <div className="p-6">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="my-feed">My Feed</TabsTrigger>
                <TabsTrigger value="all-communities">All Communities</TabsTrigger>
              </TabsList>

              <TabsContent value="my-feed" className="space-y-6">
                {/* New Post */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarFallback>YU</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Textarea 
                          placeholder="Write your post here..."
                          className="mb-3"
                          value={newPost}
                          onChange={(e) => setNewPost(e.target.value)}
                        />
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Paperclip className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Smile className="w-4 h-4" />
                            </Button>
                          </div>
                          <Button>
                            Publish Post
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Posts */}
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </TabsContent>

              <TabsContent value="all-communities">
                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search communities..." className="pl-10" />
                  </div>
                </div>

                {/* Communities Grid */}
                <div className="grid gap-4">
                  {communities.map((community) => (
                    <Card key={community.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 ${community.color} rounded-full flex items-center justify-center text-white font-bold`}>
                              {community.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">{community.name}</h3>
                              <p className="text-sm text-muted-foreground">{community.category}</p>
                              <div className="flex items-center space-x-1 mt-1">
                                <Users className="w-3 h-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{community.members} Members</span>
                              </div>
                            </div>
                          </div>
                          <Button size="sm">Join</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Communities;