import { Github, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/milanjyotiray/',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://www.github.com/milanjyotiray/',
    icon: Github,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@themilanjyotiray',
    icon: Youtube,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/iamraymilanjyoti/',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/milanjyoti.ray.56',
    icon: Facebook,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/MilanjyotiRay',
    icon: FaXTwitter,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <link.icon size={24} />
          <span className="sr-only">{link.name}</span>
        </a>
      ))}
    </div>
  );
}