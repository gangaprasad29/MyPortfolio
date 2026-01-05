import { motion } from 'framer-motion';
import { SectionWrapper, TimelineItem } from '../components';
import { staggerContainer } from '../animations/variants';

const experiences = [
  {
    id: 1,
    title: 'Full Stack Developer',
    organization: 'Self-Driven Learning & Development (Remote)',
    period: '2024 - Present',
    type: 'Experience',
    description:
      'Built full-stack projects including Remote Interview Platform, AI Finance Tracker, and DentCare Appointment System. Focused on clean UI, modular components, and responsive layouts.',
    achievements: [
      'Built full-stack projects including Remote Interview Platform, AI Finance Tracker, and DentCare Appointment System',
      'Focused on clean UI, modular components, and responsive layouts',
      'Developed REST APIs, tested endpoints using Postman, and designed MongoDB schemas and CRUD workflows',
    ],
  },
  {
    id: 2,
    title: 'NPTEL Soft Skills Certification',
    organization: 'NPTEL',
    period: '2024',
    type: 'Certification',
    description:
      'Completed certification in soft skills covering communication, teamwork, and professional workplace collaboration.',
    achievements: [
      'Communication and interpersonal skills',
      'Teamwork and collaboration techniques',
      'Professional workplace collaboration',
    ],
  },
  {
    id: 3,
    title: 'Google Cloud Bootcamp Certified',
    organization: 'Google Cloud',
    period: '2024',
    type: 'Certification',
    description:
      'Completed Google Cloud Bootcamp covering cloud fundamentals, deployment workflows, and modern application environments.',
    achievements: [
      'Cloud fundamentals and architecture',
      'Deployment workflows and CI/CD',
      'Modern application environments',
    ],
  },
  {
    id: 4,
    title: 'LeetCode Problem Solver',
    organization: 'LeetCode',
    period: '2024 - Present',
    type: 'Achievement',
    description:
      'Actively solving algorithmic problems on LeetCode to strengthen data structures and algorithms knowledge.',
    achievements: [
      'Solved 150+ LeetCode Problems',
      'Focused on arrays, strings, dynamic programming, and graphs',
      'Improved problem-solving and coding efficiency',
    ],
  },
];

const Experience = () => {
  return (
    <SectionWrapper
      id="experience"
      title="Experience & Achievements"
      subtitle="My journey"
      centered={true}
    >
      <motion.div
        className="max-w-3xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {experiences.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Experience;
