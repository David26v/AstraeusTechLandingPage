"use client";

import React from "react";
import {
  Eye,
  ShoppingCart,
  ExternalLink,
  TrendingUp,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation"; // 👈 Import router for App Router

const ProjectSection = ({ projects }) => {
  const router = useRouter(); // 👈 Initialize router

  const handleProjectClick = (project) => {
    // Navigate to /project/[id] with slug or ID
    // Example: /project/ecommerce-platform or /project/1
    const slug = project.title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
    router.push(`/project/${slug}`); // 👈 Navigate to detailed page
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4 shadow-sm">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <span className="text-sm font-semibold text-green-700">
            Live Projects & Demos
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-900 to-cyan-500 bg-clip-text text-transparent">
            Our Projects & Solutions
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore our flagship projects with live demos. All built with modern
          frameworks tailored for Philippine businesses.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-600 transform hover:-translate-y-2 hover:scale-102 border border-gray-100 ${
              project.featured ? "ring-2 ring-blue-500 ring-offset-2" : ""
            }`}
            style={{ minHeight: "580px" }} // Fixed height for consistency
          >
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute z-10 top-4 right-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                  <Star className="w-3 h-3" />
                  Featured
                </span>
              </div>
            )}

            {/* Card Body - Scrollable Content Area */}
            <div className="flex-1 flex flex-col p-6 overflow-hidden">
              {/* Image Placeholder */}
              <div className="text-5xl mb-6 text-center text-gray-400 group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Type & Price */}
              <div className="flex justify-between items-center mb-5">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold text-white capitalize ${
                    project.type === "Live Demo"
                      ? "bg-gradient-to-r from-green-500 to-teal-500 animate-pulse"
                      : project.type === "Full Project"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500"
                      : project.type === "Template"
                      ? "bg-blue-600"
                      : "bg-cyan-600"
                  }`}
                >
                  {project.type}
                </span>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {project.price}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description - Scrollable if overflow */}
              <div className="flex-1 overflow-y-auto mb-5 pr-2 custom-scrollbar">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer - Fixed at bottom */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex gap-3">
              {project.demoLink !== "#" ? (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 px-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Try Live Demo
                </a>
              ) : (
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold">
                  <ShoppingCart className="w-4 h-4" />
                  Purchase
                </button>
              )}

              {/* Eye Button → Navigate to Detailed Page */}
              <button
                onClick={() => handleProjectClick(project)}
                className="px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center group cursor-pointer"
                aria-label={`View details of ${project.title}`}
              >
                <Eye className="w-5 h-5 group-hover:text-blue-700 transition-colors" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Scrollbar for WebKit Browsers */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e0e0e0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ccc;
        }
      `}</style>
    </div>
  );
};

export default ProjectSection;