import { Home, BookOpen, ClipboardList, FileText, User, Settings } from "lucide-react";
export interface INavigationItems {
    name: {
      title: string;
      description?: string;
      icon: JSX.Element;
    };
    path: string;
    children?: INavigationItems[];
  }
  
export const NavigationItems: INavigationItems[] = [
  {
    name: {
      icon: <Home size={20} />,
      title: "Home",
      description: "Go to the dashboard",
    },
    path: "/",
  },
  {
    name: {
      icon: <BookOpen size={20} />,
      title: "Subjects",
      description: "Browse available subjects",
    },
    path: "/subjects",
    children: [
      {
        name: {
          icon: <FileText size={20} />,
          title: "Mathematics",
        },
        path: "/subjects/math",
      },
      {
        name: {
          icon: <FileText size={20} />,
          title: "Physics",
        },
        path: "/subjects/physics",
      },
    ],
  },
  {
    name: {
      icon: <ClipboardList size={20} />,
      title: "Exams",
      description: "Take a test or view past results",
    },
    path: "/exams",
    children: [
      {
        name: {
          icon: <FileText size={20} />,
          title: "Mock Tests",
        },
        path: "/exams/mock-tests",
      },
      {
        name: {
          icon: <FileText size={20} />,
          title: "Past Papers",
        },
        path: "/exams/past-papers",
      },
    ],
  },
  {
    name: {
      icon: <User size={20} />,
      title: "Profile",
      description: "View and edit your profile",
    },
    path: "/profile",
  },
  {
    name: {
      icon: <Settings size={20} />,
      title: "Settings",
      description: "Adjust your preferences",
    },
    path: "/settings",
  },
];
