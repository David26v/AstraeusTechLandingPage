import {
    Code,
    Cpu,
    Globe,
    ShoppingCart,
    PenTool,
  } from "lucide-react";
  
  export const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Custom Software",
      description:
        "Bespoke software applications designed to fit your exact workflow — from CRMs to booking systems and internal dashboards.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Website Design",
      description:
        "Responsive, SEO-friendly websites that look modern and convert visitors into customers across all devices.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "E-commerce Solutions",
      description:
        "Secure, scalable online stores with integrated payments, product catalogs, and order management.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "AI Integration",
      description:
        "Leverage artificial intelligence to automate workflows, analyze data, and unlock smarter decision-making.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <PenTool className="w-10 h-10" />,
      title: "UI / UX Design",
      description:
        "User-focused designs and prototypes that make your software intuitive, engaging, and easy to use.",
      gradient: "from-yellow-500 to-amber-500",
    },
  ];
  