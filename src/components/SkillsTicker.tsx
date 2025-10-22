const skills = [
  { name: "Linux", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
  { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Azure", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
  { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Jenkins", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg" },
  { name: "Terraform", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg" },
  { name: "GitHub", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
  { name: "Prometheus", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original.svg" },
  { name: "Grafana", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg" },
  { name: "GitLab", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg" },
  { name: "Ansible", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ansible/ansible-original.svg" },
];

const SkillsTicker = () => {
  return (
    <div className="relative w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 overflow-hidden mask-fade-x py-4">
      <div className="flex animate-ticker">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-24 mx-6 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className={`w-16 h-16 object-contain ${skill.name === "GitHub" ? "github-dark-invert" : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTicker;
