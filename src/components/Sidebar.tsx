import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  CreditCard, 
  Bell, 
  User,
  GraduationCap
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Lessons', href: '/lessons', icon: BookOpen },
  { name: 'Live Classes', href: '/live-classes', icon: Video },
  { name: 'Tests', href: '/tests', icon: FileText },
  { name: 'Communities', href: '/communities', icon: Users },
  { name: 'Subscription', href: '/subscription', icon: CreditCard },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Profile', href: '/profile', icon: User },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-card border-r border-border flex flex-col h-screen">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">NEET Hub</h1>
            <p className="text-xs text-muted-foreground">Learn. Practice. Succeed.</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-3 px-3 py-2.5 text-sm rounded-lg transition-all duration-200 group",
                    isActive 
                      ? "bg-secondary text-primary font-medium" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-border">
        <div className="bg-secondary rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Arjun Sharma</p>
              <p className="text-xs text-muted-foreground">Premium Student</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}