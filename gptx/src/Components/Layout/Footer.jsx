import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: "Subjects",
      links: ["Maths", "Science", "History", "Business studies"]
    },
    {
      title: "Design",
      links: [
        "Design",
        "Prototyping",
        "Development features",
        "Design systems",
        "Collaboration features",
        "Design process",
        "FigJam"
      ]
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Best practices",
        "Colors",
        "Color wheel",
        "Support",
        "Developers",
        "Resource library"
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-12">
          {/* Icon placeholders as rounded squares */}
          <div className="w-8 h-8 rounded-sm bg-white/20 hover:bg-white/30 cursor-pointer transition-colors"></div>
          <div className="w-8 h-8 rounded-sm bg-white/20 hover:bg-white/30 cursor-pointer transition-colors"></div>
          <div className="w-8 h-8 rounded-sm bg-white/20 hover:bg-white/30 cursor-pointer transition-colors"></div>
          <div className="w-8 h-8 rounded-sm bg-white/20 hover:bg-white/30 cursor-pointer transition-colors"></div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-200 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;