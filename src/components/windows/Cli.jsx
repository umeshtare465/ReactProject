import MacWindow from "./MacWindow";
import React, { Component } from "react";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowname, setwindowState }) => {
  const commands = {
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },

    about: {
      description: "Learn about me.",
      usage: "about",
      fn: () => `
👋 About Me
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
I'm a passionate full-stack developer with expertise in React, JavaScript, and web technologies.
I love building interactive and user-friendly applications.
Currently exploring modern web development practices and best practices.
      `,
    },
    skills: {
      description: "Display my technical skills.",
      usage: "skills",
      fn: () => `
🛠 Technical Skills
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Frontend:        React, JavaScript, CSS, SCSS, HTML5
Backend:         Node.js, Express
Tools:           Git, Vite,  VS Code
Databases:       MongoDB, MySQL
Other:           REST APIs, Git, Responsive Design
      `,
    },
    projects: {
      description: "Show my projects.",
      usage: "projects",
      fn: () => `
📁 Featured Projects
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Portfolio Website    - Interactive terminal-based portfolio (React + Vite)
2. Task Manager App     - CRUD application with real-time updates
3. E-Commerce Platform  - Full-stack e-commerce solution
4. Chat Application     - Real-time messaging using WebSockets
5. Weather Dashboard    - API integration with live weather data

Type 'projects <number>' for more details.
      `,
    },
    education: {
      description: "View my education background.",
      usage: "education",
      fn: () => `
🎓 Education
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Bachelor of Technology in Computer Science
University: Your University Name
Graduation: 2024
CGPA: 3.8/4.0

Relevant Coursework: Data Structures, Web Development, Database Design
      `,
    },
    contact: {
      description: "Get contact information.",
      usage: "contact",
      fn: () => `
📧 Contact Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email:    umesh@example.com
GitHub:   github.com/umeshtare465
LinkedIn: linkedin.com/in/umesh
Twitter:  @umeshtare465
Location: Your City, Country

Feel free to reach out! 🚀
      `,
    },
  };

  const welcomeMsg = `
╔═══════════════════════════════════════════╗
║    🎉 Welcome to Umesh's Portfolio! 🎉    ║
╚═══════════════════════════════════════════╝

Type 'help' to see all available commands.

Quick start:
  → about   - Learn about me
  → skills  - View my technical skills
  → projects - Check out my work
  → contact - Get in touch
  → clear   - Clear the screen

Have fun exploring! 👋
`;

  return (
    <MacWindow windowname={windowname} setwindowState={setwindowState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMsg}
          promptLabel={"umeshtare465@portfolio:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
