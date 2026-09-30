import React, { useState } from 'react';
import AnnouncementRibbon from './components/AnnouncementRibbon';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import CoursesSection from './components/CoursesSection';
import CourseDetailModal from './components/CourseDetailModal';
import WhyChooseUs from './components/WhyChooseUs';
import InteractiveSalaryCalculator from './components/InteractiveSalaryCalculator';
import ResultsSection from './components/ResultsSection';
import MockInterviewInternshipSection from './components/MockInterviewInternshipSection';
import FacultySection from './components/FacultySection';
import TestimonialSection from './components/TestimonialSection';
import InteractiveKnowledgeQuiz from './components/InteractiveKnowledgeQuiz';
import FreeResourcesSection from './components/FreeResourcesSection';
import BlogSection from './components/BlogSection';
import LeadGenerationSection from './components/LeadGenerationSection';
import ContactBranchesSection from './components/ContactBranchesSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingContactWidget from './components/FloatingContactWidget';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoModalContext, setDemoModalContext] = useState('Free Demo Class');

  const handleOpenDemoModal = (context = 'Free Demo Class') => {
    setDemoModalContext(context);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseCourseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      
      {/* Top Announcements */}
      <AnnouncementRibbon onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Sticky Navigation */}
      <Navbar 
        onOpenDemoModal={handleOpenDemoModal} 
        onSelectCourse={handleSelectCourse} 
      />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection 
          onOpenDemoModal={handleOpenDemoModal} 
          onSelectCourse={handleSelectCourse} 
        />

        {/* 2. Trust Metrics & Hiring Partners Marquee */}
        <TrustBar />

        {/* 3. Choose Your Preparation (Courses Grid) */}
        <CoursesSection 
          onSelectCourse={handleSelectCourse} 
          onOpenDemoModal={handleOpenDemoModal} 
        />

        {/* 4. Why Choose The Kiran Academy (6 Core Pillars) */}
        <WhyChooseUs onOpenDemoModal={handleOpenDemoModal} />

        {/* 5. Interactive Career & Salary Trajectory Calculator */}
        <InteractiveSalaryCalculator onOpenDemoModal={handleOpenDemoModal} />

        {/* 6. Results & Student Placements Showcase */}
        <ResultsSection onOpenDemoModal={handleOpenDemoModal} />

        {/* 7. Special Programmes: 15+ Mock Interviews & Industry Internship */}
        <MockInterviewInternshipSection onOpenDemoModal={handleOpenDemoModal} />

        {/* 8. Faculty & Mentors */}
        <FacultySection onOpenDemoModal={handleOpenDemoModal} />

        {/* 9. Student Testimonials & Google Reviews */}
        <TestimonialSection onOpenDemoModal={handleOpenDemoModal} />

        {/* 10. Interactive 2-Minute Skill Matcher */}
        <InteractiveKnowledgeQuiz 
          onOpenDemoModal={handleOpenDemoModal} 
          onSelectCourse={handleSelectCourse} 
        />

        {/* 11. Free Study Resources & Roadmaps */}
        <FreeResourcesSection onOpenDemoModal={handleOpenDemoModal} />

        {/* 12. Articles & Industry Insights */}
        <BlogSection onOpenDemoModal={handleOpenDemoModal} />

        {/* 13. High-Converting Lead Generation Counselling Section */}
        <LeadGenerationSection />

        {/* 14. Contact & 4-Branch Campus Locations with Maps */}
        <ContactBranchesSection onOpenDemoModal={handleOpenDemoModal} />

        {/* 15. Frequently Asked Questions Accordion */}
        <FAQSection onOpenDemoModal={handleOpenDemoModal} />
      </main>

      {/* Corporate Footer */}
      <Footer 
        onSelectCourse={handleSelectCourse} 
        onOpenDemoModal={handleOpenDemoModal} 
      />

      {/* Floating Call / WhatsApp / Demo Widget */}
      <FloatingContactWidget onOpenDemoModal={handleOpenDemoModal} />

      {/* Full Course Details Modal */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={handleCloseCourseModal}
          onOpenDemoModal={handleOpenDemoModal}
        />
      )}

      {/* Global Booking / Lead Modal */}
      <EnquiryModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
        initialContext={demoModalContext}
      />

    </div>
  );
}
