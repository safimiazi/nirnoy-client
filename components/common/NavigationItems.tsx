export interface INavigationItems {
    name: string;
    path: string | "/";
    children?: INavigationItems[];
  }
  
  export const NavigationItems: INavigationItems[] = [
    {
      name: "Services",
      path: "/services",
      children: [
        {
          name: "Web Development",
          path: "/services/web-development",
        },
        {
          name: "Mobile App Development",
          path: "/services/mobile-app-development",
        },
        {
          name: "UI/UX Design",
          path: "/services/ui-ux-design",
        },
        {
          name: "Digital Marketing",
          path: "/services/digital-marketing",
        },
        {
          name: "SEO Optimization",
          path: "/services/seo-optimization",
        },
      ],
    },
    {
      name: "Products",
      path: "/products",
      children: [
        {
          name: "Product 1",
          path: "/products/product-1",
        },
        {
          name: "Product 2",
          path: "/products/product-2",
        },
        {
          name: "Product 3",
          path: "/products/product-3",
        },
      ],
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "About Us",
      path: "/about-us",
      children: [
        {
          name: "Company Overview",
          path: "/about-us/company-overview",
        },
        {
          name: "Our Team",
          path: "/about-us/our-team",
        },
        {
          name: "Careers",
          path: "/about-us/careers",
        },
        {
          name: "Contact Us",
          path: "/about-us/contact",
        },
      ],
    },
    {
      name: "Blog",
      path: "/blog",
    }
 
  ];
  