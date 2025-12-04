export type Project = {
  slug: string
  title: string
  description: string
  tech: string[]
  repo?: string
  demo?: string
  image: string
}

export const projects: Project[] = [
  {
    slug: "ghostesp-security-firmware",
    title: "GhostESP — Wireless Security Testing Firmware",
    description:
      "Converts ESP32 into a wireless analysis and testing platform for Wi-Fi and BLE scanning. Performs packet monitoring, signal mapping, and controlled vulnerability testing. Designed for ethical security research and network hardening.",
    tech: ["ESP32", "WiFi Security", "BLE", "Packet Analysis", "Ethical Hacking"],
    repo: undefined,
    demo: undefined,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
  {
    slug: "esp-monitor-wifi-security",
    title: "ESP Monitor — WiFi Security Monitor",
    description:
      "Real-time Wi-Fi security tool detecting deauthentication attacks and beacon spam. Analyzes channel activity with live graphs on a 1.47\" LCD and RGB LED indicators. Uses ESP32-C6, ST7789 LCD, and WS2812 RGB LED hardware.",
    tech: ["ESP32-C6", "WiFi Security", "ST7789 LCD", "Real-time Monitoring"],
    repo: "https://github.com/ManglamX/Cyber-Presentation",
    demo: undefined,
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
  },
  {
    slug: "pwdguard-password-security",
    title: "PWDGuard — Password Security Suite",
    description:
      "Desktop app to check password strength, detect breach exposure, and generate secure passwords with password management. Chrome extension for auto-saving and auto-filling login credentials. Enhances user security and convenience by securely managing authentication data.",
    tech: ["Desktop App", "Chrome Extension", "Security", "Password Management"],
    repo: "https://github.com/ManglamX/PWDGuard",
    demo: undefined,
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=600&fit=crop",
  },
  {
    slug: "fixlit-smart-lighting",
    title: "FixLit – Smart Lighting Control System",
    description:
      "Energy-saving IoT solution using ESP32-CAM and OpenCV for automated lighting with app-based presets and ambient detection.",
    tech: ["ESP32-CAM", "OpenCV", "IoT", "Mobile App"],
    demo: "https://fixlit.netlify.app",
    repo: "https://github.com/Slavik2475/Fixlit",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  },
  {
    slug: "alumni-website",
    title: "Alumni Website Development",
    description:
      "Dynamic website for Electronics Engineering batch of 1999 with profiles, search, and event management.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Angular"],
    demo: "https://ee-batch1999.vercel.app/",
    repo: "https://github.com/ManglamX/EE_Batch1999",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
  },
  {
    slug: "alcohol-detection-prevention",
    title: "Alcohol Detection and Accident Prevention",
    description:
      "Safety system with automated motor shutdown on alcohol detection, Firebase logging, and email alerts. Demonstrated practical application of IoT in automotive safety.",
    tech: ["Arduino", "ESP32", "Firebase", "Email Alerts", "IoT"],
    demo: "https://drive.google.com/file/d/1UC8FUfdTYsdqpWJV1scYbbeI6nCRlFEG/view",
    repo: "https://github.com/ManglamX/Accident-Prevention",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
  },
  {
    slug: "voice-controlled-lighting",
    title: "Voice-Controlled Lighting Automation",
    description:
      "Automated project room lighting system with voice command integration and mobile app backup controls. Combined IoT with voice recognition technology.",
    tech: ["Voice Control", "ESP32", "Mobile App", "IoT"],
    demo: undefined,
    repo: "https://github.com/ManglamX/Voxon",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    slug: "waste-classification-system",
    title: "AI-Powered Waste Classification System",
    description:
      "Waste-classification system using a ResNet50 model to identify items (plastic, metal, paper, etc.) and map them to recyclable, compostable, or non-recyclable categories. Uses generative AI (Gemini API) for recycling suggestions and decomposition times.",
    tech: ["ResNet50", "Gemini API", "Generative AI", "PDF Reports"],
    demo: "https://drive.google.com/drive/folders/1oyzeUu4Ili1kv6Sn3LUl9RVOXoZ3wpjt",
    repo: "https://github.com/ManglamX/Wasteclassificationproject",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
  },
  {
    slug: "climate-change-education",
    title: "Climate Change Education Platform",
    description:
      "Interactive education website featuring cache-based automated learning podcast module generation with quizzes, and gamified content like mini-games and animations. Includes progress tracker, infographics, and community hub.",
    tech: ["Web Development", "Gamification", "Podcasts", "Community Hub"],
    demo: undefined,
    repo: "https://github.com/ManglamX/Climate-Change-Education-App",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
  },
]