import { Mail, Phone, MapPin, Linkedin, Github, Send, Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import ParticleCanvas from "@/components/ParticleCanvas";
import TypeWriter from "@/components/TypeWriter";
import SkillsTicker from "@/components/SkillsTicker";
import RadialSkill from "@/components/RadialSkill";
import Timeline from "@/components/Timeline";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import dp from "./DP.png";

const skills = [
  { percent: 85, label: "AWS" },
  { percent: 70, label: "Azure" },
  { percent: 90, label: "Linux" },
  { percent: 85, label: "Docker" },
  { percent: 75, label: "Kubernetes" },
  { percent: 70, label: "Terraform" },
  { percent: 73, label: "Ansible" },
  { percent: 84, label: "Prometheus" },
  { percent: 78, label: "Grafana" },
  { percent: 80, label: "Python" },
];

const education = [
  {
    title: "B.Tech – Electronics & Telecommunication",
    date: "2020 – 2024",
    description: "7.86 CGPA. Built college cloud club, organised 3 DevOps workshops, led 30-student Kubernetes bootcamp.",
    side: "right" as const,
  },
  {
    title: "College – G.H. Raisoni Jr. College",
    date: "2018 - 2020",
    description: "72.7 %",
    side: "left" as const,
  },
  {
    title: "School - Sri Guru Harkrishan Public School",
    date: "2008 - 2018",
    description: "6-course Coursera specialisation – Git, Python, automation, troubleshooting & CI basics.",
    side: "right" as const,
  },
];

const journey = [
  {
    title: "Cloud DevOps Intern – BizTranSights Solutions, LLP",
    location: "Nagpur, Maharashtra",
    date: "Sep 2025 – present",
    description: "Own CI/CD platform for 50+ engineers. Migrated 200+ pipelines to GitHub Actions, cut build time 40%, deployments 5×/day.",
    side: "right" as const,
  },
  {
    title: "DevOps Engineer Intern – Hisan Labs Pvt. Ltd.",
    location: "Pune, Maharashtra",
    date: "Sep 2024 – June 2025",
    description: "Containerised legacy apps, wrote 30+ Ansible playbooks, built Grafana dashboards—MTTD ↓ 25%.",
    side: "left" as const,
  },
];

const projects = [
  {
    title: "Student Management Web Application",
    description: "Java-based web application designed for managing student records. Allows users to perform core operations such as viewing, adding, editing, and deleting student information. The application was built using Java, Servlets, and JSP, with Apache Tomcat serving as the web server. Containerized using Docker for easy deployment and execution.",
    tags: ["EKS", "ArgoCD", "Terraform"],
    github: "https://github.com/prathamesh633",
  },
  {
    title: "Python Flask Web App",
    description: "A Python Flask web application with a modern UI, containerized using Docker for streamlined deployment. Created a reproducible environment by containerizing the application, ensuring consistent execution across different setups. The project includes a health check endpoint for monitoring and is designed for easy deployment.",
    tags: ["Python", "Lambda", "S3"],
    github: "https://github.com/prathamesh633",
  },
  {
    title: "Reddit Clone on Kubernetes",
    description: "This is a full-stack Reddit clone deployed on Kubernetes, demonstrating practical DevOps skills. The application was built and containerized using Docker, then orchestrated on a Kubernetes cluster. Key aspects include setting up CI/CD pipelines for automated deployments, managing cluster resources, and ensuring application availability and scalability.",
    tags: ["Go", "ECS", "CloudWatch"],
    github: "https://github.com/prathamesh633",
  },
  {
    title: "Django Notes App",
    description: "A simple notes application built with React and Django, containerized for deployment. Focused on setting up a robust development and deployment pipeline. This included containerizing the application using Docker and configuring Nginx as a reverse proxy for efficient serving.",
    tags: ["Kubebuilder", "Velero", "Golang"],
    github: "https://github.com/prathamesh633",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="about" className="relative min-h-[85vh] flex items-center overflow-hidden">
        <ParticleCanvas />
        <div className="container max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <TypeWriter />
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DevOps Engineer with 1+ years of experience shipping reliable, scalable and secure
                cloud-native infrastructure. Passionate about automation, monitoring, and building
                resilient systems.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Send className="h-4 w-4" />
                  Hire me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Work
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in-right">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-accent/30 hover:border-accent transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <img
                  src={dp}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Ticker */}
      <section id="skills" className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Skills & Tooling</h2>
          <SkillsTicker />
        </div>
      </section>

      {/* Skill Strength */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Skill Strength</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {skills.map((skill, index) => (
              <RadialSkill key={index} percent={skill.percent} label={skill.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Education</h2>
          <Timeline items={education} />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Journey</h2>
          <Timeline items={journey} />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Let's Connect</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <form className="space-y-4 animate-fade-in-left">
              <Input type="text" placeholder="Your name" required />
              <Input type="email" placeholder="Your email" required />
              <Textarea placeholder="Tell me about your infra pain-points..." rows={5} required />
              <Button type="submit" className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
            
            <div className="space-y-6 animate-fade-in-right">
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold mb-4">Reach Me</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="h-4 w-4 text-primary" />
                    prathameshbhujade@outlook.com
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    88******33
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    Nagpur, Maharashtra, India
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Linkedin className="h-4 w-4 text-primary" />
                    linkedin.com/in/prathamesh-bhujade
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Github className="h-4 w-4 text-primary" />
                    github.com/prathamesh633
                  </div>
                </div>
                <Button variant="outline" className="w-full gap-2 mt-4">
                  <Download className="h-4 w-4" />
                  Download Résumé
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <a href="https://github.com/prathamesh633" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/prathamesh-bhujade" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:prathameshbhujade@outlook.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Built with ⚙️ & React – no cookies, no trackers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
