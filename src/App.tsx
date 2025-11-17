import { useState } from "react";
import svgPaths from "./imports/svg-culng0qvag";
import imgScreenshot202509261630542 from "figma:asset/1f036527d4a6086613bd0a65f42b708ff80b63ca.png";
import imgImage1 from "figma:asset/04e5c211e3e7146b2e03be125466721fed0e5c53.png";
import imgImage2 from "figma:asset/781fbbf32ba0fe5f52b30981efdef53cb3381408.png";
import imgImage4 from "figma:asset/e997235cfd38eab7aa572ff6484dc21cd286ab51.png";
import imgImage5 from "figma:asset/de7995bd5315729fb45e072fc96e6879d81e5d65.png";
import imgImage10 from "figma:asset/7206f6eeba84f8a55d1d5658b1de6cdb6a49b79f.png";
import imgImage12 from "figma:asset/14e0566715a7724c2adfeb1a424fac35bf6b4745.png";
import imgImage13 from "figma:asset/097018c8acafb83baf215bb5a4c007ee4720851d.png";
import imgImage14 from "figma:asset/05ee12ea5fe5b78ba95291a7fe816a9a0d7dd880.png";
import imgRectangle1 from "./assets/1f06319d12133106e95934d93cade02734c26677.png";
import imgCheck1 from "figma:asset/2b5a6ebcec5d468f10fc2763d7215a75198580d5.png";
import imgEquipmentCollectionC6O3UGhq1 from "figma:asset/fde1431da0d516a755a307e0d3f0305da63e1f35.png";
import imgProgressDashboardPQsSlB5M1 from "figma:asset/c5b717c4f13e6cb646079c7100d5b8831d2849cf.png";
import { ArrowRight, Check } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-[146px] py-6 flex items-center justify-between">
          <h1 className="font-['Inter'] font-semibold text-white text-[22px]">
            Fit Tracker Pro
          </h1>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`font-['Inter'] font-semibold text-[15px] px-6 py-1 rounded-[5px] transition-all ${
                activeSection === "home"
                  ? "bg-[#ff4b00] text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("workouts")}
              className="font-['Poppins'] text-[15px] text-white hover:text-[#ff4b00] transition-colors"
            >
              Workouts
            </button>
            <button
              onClick={() => scrollToSection("progress")}
              className="font-['Poppins'] text-[15px] text-white hover:text-[#ff4b00] transition-colors"
            >
              Progress
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="font-['Poppins'] text-[15px] text-white hover:text-[#ff4b00] transition-colors"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="font-['Poppins'] text-[15px] text-white hover:text-[#ff4b00] transition-colors"
            >
              Profile
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-white hover:bg-gray-100 text-black font-['Inter'] font-semibold text-[12px] px-5 py-1.5 rounded-[5px] transition-all">
              Sign In
            </button>
            <button className="bg-[#ff4b00] hover:bg-[#e04400] text-white font-['Inter'] font-semibold text-[12px] px-6 py-1.5 rounded-[5px] transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-black/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={imgRectangle1}
            alt=""
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </div>

        <div className="max-w-[1920px] mx-auto px-8 lg:px-[106px] py-32 w-full relative z-10">
          <div className="max-w-3xl">
            <h2 className="font-['Poppins'] font-bold text-[44px] md:text-[54px] text-white leading-tight mb-6">
              Transform Your
              <br />
              Fitness Journey
            </h2>

            <p className="font-['Poppins'] text-white text-[16px] mb-12 max-w-[514px] leading-relaxed">
              Track workouts, monitor progress, and achieve your fitness goals
              with intelligent analytics and personalized training programs.
            </p>

            <button
              onClick={() => scrollToSection("workouts")}
              className="bg-white hover:bg-gray-100 text-black font-['Inter'] font-semibold text-[16px] px-8 py-3 rounded-[5px] transition-all inline-flex items-center gap-2 mb-8"
            >
              View Workouts
            </button>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <img src={imgCheck1} alt="" className="w-5 h-5" />
                <span className="font-['Inter'] font-semibold text-[12px] text-white">
                  No equipment required
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img src={imgCheck1} alt="" className="w-5 h-5" />
                <span className="font-['Inter'] font-semibold text-[12px] text-white">
                  All fitness levels
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img src={imgCheck1} alt="" className="w-5 h-5" />
                <span className="font-['Inter'] font-semibold text-[12px] text-white">
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-[355px]">
          <div className="text-center mb-16">
            <h3 className="font-['Poppins'] text-[37px] text-[rgba(0,0,0,0.92)] mb-4">
              Everything You Need to{" "}
              <span className="text-[rgba(0,128,255,0.92)]">Succeed</span>
            </h3>
            <p className="font-['Poppins'] text-[16px] text-[rgba(56,56,56,0.92)] max-w-[780px] mx-auto">
              Track workouts, monitor progress, and achieve your fitness goals
              with intelligent analytics and personalized training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border border-[rgba(0,0,0,0.25)] rounded-[19px] p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6">
                <img
                  src={imgScreenshot202509261630542}
                  alt="Smart Workout Planning"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-['Inter'] font-semibold text-[18px] text-[rgba(0,0,0,0.92)] mb-4">
                Smart Workout Planning
              </h4>
              <p className="font-['Poppins'] text-[16px] text-[rgba(56,56,56,0.92)]">
                AI-powered workout recommendations based on your goals,
                equipment, and fitness level.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-[rgba(0,0,0,0.25)] rounded-[19px] p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6">
                <img
                  src={imgImage1}
                  alt="Progress Tracking"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-['Inter'] font-semibold text-[18px] text-[rgba(0,0,0,0.92)] mb-4">
                Progress Tracking
              </h4>
              <p className="font-['Poppins'] text-[16px] text-[rgba(56,56,56,0.92)]">
                Comprehensive analytics to monitor your strength gains,
                endurance, and body composition.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-[rgba(0,0,0,0.25)] rounded-[19px] p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6">
                <img
                  src={imgImage2}
                  alt="Achievement System"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-['Inter'] font-semibold text-[18px] text-[rgba(0,0,0,0.92)] mb-4">
                Achievement System
              </h4>
              <p className="font-['Poppins'] text-[16px] text-[rgba(56,56,56,0.92)]">
                Unlock badges and milestones as you reach new personal records
                and consistency goals.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-[rgba(0,0,0,0.25)] rounded-[19px] p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6">
                <img
                  src={imgImage4}
                  alt="Community Support"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-['Inter'] font-semibold text-[18px] text-[rgba(0,0,0,0.92)] mb-4">
                Community Support
              </h4>
              <p className="font-['Poppins'] text-[16px] text-[rgba(56,56,56,0.92)]">
                Connect with like-minded fitness enthusiasts and share your
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Categories Section */}
      <section id="workouts" className="py-24 bg-[#d3d1d1]">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-[107px]">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="flex-1">
              <h3 className="font-['Poppins'] text-[37px] text-[rgba(0,0,0,0.92)] mb-4">
                Diverse Workout{" "}
                <span className="text-[#ff4b00]">Categories</span>
              </h3>
              <p className="font-['Poppins'] text-[16px] text-[rgba(56,56,56,0.92)]">
                From strength training to yoga, find the perfect workout for
                your goals and preferences.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={imgEquipmentCollectionC6O3UGhq1}
                alt="Equipment Collection"
                className="rounded-[26px] shadow-lg w-full max-w-[648px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Strength Training */}
            <div className="bg-white border border-[rgba(0,0,0,0.25)] rounded-[13px] p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[18px] h-[18px] bg-[#FF4B00] rounded-full" />
                <h4 className="font-['Inter'] font-semibold text-[16px] text-[rgba(0,0,0,0.92)]">
                  Strength Training
                </h4>
              </div>
              <p className="font-['Poppins'] text-[12px] text-[rgba(56,56,56,0.92)]">
                200+ exercises
              </p>
            </div>

            {/* Cardio Workouts */}
            <div className="bg-white border border-[rgba(0,0,0,0.25)] rounded-[13px] p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[18px] h-[18px] bg-[#0080FF] opacity-92 rounded-full" />
                <h4 className="font-['Inter'] font-semibold text-[16px] text-[rgba(0,0,0,0.92)]">
                  Cardio Workouts
                </h4>
              </div>
              <p className="font-['Poppins'] text-[12px] text-[rgba(56,56,56,0.92)]">
                150+ routines
              </p>
            </div>

            {/* Flexibility */}
            <div className="bg-white border border-[rgba(0,0,0,0.25)] rounded-[13px] p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[18px] h-[18px] bg-[#089643] rounded-full" />
                <h4 className="font-['Inter'] font-semibold text-[16px] text-[rgba(0,0,0,0.92)]">
                  Flexibility
                </h4>
              </div>
              <p className="font-['Poppins'] text-[12px] text-[rgba(56,56,56,0.92)]">
                150+ routines
              </p>
            </div>

            {/* HIIT Programs */}
            <div className="bg-white border border-[rgba(0,0,0,0.25)] rounded-[13px] p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[18px] h-[18px] bg-[#FF4B00] rounded-full" />
                <h4 className="font-['Inter'] font-semibold text-[16px] text-[rgba(0,0,0,0.92)]">
                  HIIT Programs
                </h4>
              </div>
              <p className="font-['Poppins'] text-[12px] text-[rgba(56,56,56,0.92)]">
                75+ sessions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Tracking Section */}
      <section id="progress" className="py-24 bg-white">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-[110px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={imgProgressDashboardPQsSlB5M1}
                alt="Progress Dashboard"
                className="rounded-[28px] w-full shadow-lg"
              />
            </div>

            <div>
              <h3 className="font-['Poppins'] font-bold text-[37px] text-[rgba(0,0,0,0.92)] mb-2">
                Track Your{" "}
                <span className="text-[rgba(0,128,255,0.92)]">Progress</span>
              </h3>
              <p className="font-['Poppins'] text-[16px] text-[rgba(0,0,0,0.92)] mb-8">
                Visualize your fitness journey with detailed analytics, progress
                photos, and performance metrics that keep you motivated.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-[17px] h-[15px] bg-[#FF4B00] rounded-full flex-shrink-0" />
                  <p className="font-['Poppins'] text-[16px] text-[rgba(0,0,0,0.92)]">
                    Real-time workout tracking
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[17px] h-[15px] bg-[#0080FF] opacity-92 rounded-full flex-shrink-0" />
                  <p className="font-['Poppins'] text-[16px] text-[rgba(0,0,0,0.92)]">
                    Weekly and monthly reports
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[17px] h-[16px] bg-[#089643] rounded-full flex-shrink-0" />
                  <p className="font-['Poppins'] text-[16px] text-[rgba(0,0,0,0.92)]">
                    Body measurement logging
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[17px] h-[15px] bg-[#FF4B00] rounded-full flex-shrink-0" />
                  <p className="font-['Poppins'] text-[16px] text-[rgba(0,0,0,0.92)]">
                    Goal setting and achievement
                  </p>
                </div>
              </div>

              <button className="bg-[rgba(0,128,255,0.92)] hover:bg-[rgba(0,128,255,1)] text-white font-['Inter'] font-semibold text-[16px] px-8 py-3 rounded-[5px] transition-all">
                View Workouts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-[#cccccc]">
        <div className="max-w-[1920px] mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="font-['Poppins'] font-bold text-[37px] mb-4">
              <span className="text-[rgba(0,0,0,0.92)]">Loved by </span>
              <span className="text-[#ff4b00]">10,000+</span>
              <span className="text-black"> Users</span>
            </h3>
            <p className="font-['Poppins'] text-[16px] text-[rgba(0,0,0,0.92)]">
              See what our community has to say about their fitness
              transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1500px] mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white border border-[rgba(0,0,0,0.25)] rounded-[13px] p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-8 mb-6">
                <img
                  src={imgImage5}
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-['Poppins'] text-[16px] text-[rgba(0,0,0,0.92)] mb-6">
                "FitTracker Pro transformed my workout routine. The progress
                tracking keeps me motivated!"
              </p>
              <div>
                <p className="font-['Inter'] font-semibold text-[16px] text-[rgba(0,0,0,0.92)] text-center mb-1">
                  Sarah Johnson
                </p>
                <p className="font-['Poppins'] text-[16px] text-[rgba(0,0,0,0.92)]">
                  Fitness Enthusiast
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border border-[rgba(0,0,0,0.25)] rounded-[13px] p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-8 mb-6">
                <img
                  src={imgImage5}
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-['Poppins'] text-[16px] text-[rgba(0,0,0,0.92)] mb-6">
                "FitTracker Pro transformed my workout routine. The progress
                tracking keeps me motivated!"
              </p>
              <div>
                <p className="font-['Inter'] font-semibold text-[16px] text-[rgba(0,0,0,0.92)] text-center mb-1">
                  Mike Chen
                </p>
                <p className="font-['Poppins'] text-[16px] text-[rgba(0,0,0,0.92)]">
                  Personal Trainer
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white border border-[rgba(0,0,0,0.25)] rounded-[13px] p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-8 mb-6">
                <img
                  src={imgImage5}
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-['Poppins'] text-[16px] text-[rgba(0,0,0,0.92)] mb-6">
                "FitTracker Pro transformed my workout routine. The progress
                tracking keeps me motivated!"
              </p>
              <div>
                <p className="font-['Inter'] font-semibold text-[16px] text-[rgba(0,0,0,0.92)] text-center mb-1">
                  Emma Davis
                </p>
                <p className="font-['Poppins'] text-[16px] text-[rgba(0,0,0,0.92)]">
                  Beginner
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="programs" className="py-24 bg-[#ed8b62] text-center relative overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-8 relative z-10">
          <h3 className="font-['Poppins'] font-bold text-[37px] text-white mb-6 max-w-[710px] mx-auto">
            Ready to Start Your Fitness Journey?
          </h3>
          <p className="font-['Poppins'] text-[16px] text-white mb-12 max-w-[596px] mx-auto">
            Join thousands of users who have transformed their lives with
            FitTracker Pro. Start your free trial today.
          </p>
          <button className="bg-white hover:bg-gray-100 text-black font-['Inter'] font-semibold text-[16px] px-8 py-3 rounded-[5px] transition-all inline-flex items-center gap-2">
            Sign Up now
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Decorative Circle */}
        <div className="absolute bottom-0 right-12 w-[215px] h-[215px] opacity-30">
          <svg className="w-full h-full" viewBox="0 0 215 215" fill="none">
            <circle cx="107.5" cy="107.5" r="107.5" fill="white" />
            <path d={svgPaths.p14b66c80} fill="#FF4B00" />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[rgba(0,128,255,0.92)] py-20">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-[113px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <h4 className="font-['Poppins'] font-bold text-[37px] text-white mb-6">
                Fit Tracker Pro
              </h4>
              <p className="font-['Poppins'] text-[16px] text-white mb-8">
                Transform your fitness journey with intelligent workout
                tracking, personalized programs, and comprehensive progress
                analytics.
              </p>
              <div className="flex gap-4">
                <img
                  src={imgImage12}
                  alt="Social"
                  className="w-10 h-9 rounded-[13px] hover:opacity-80 transition-opacity cursor-pointer"
                />
                <img
                  src={imgImage10}
                  alt="Social"
                  className="w-10 h-9 rounded-[18px] hover:opacity-80 transition-opacity cursor-pointer"
                />
                <img
                  src={imgImage13}
                  alt="Social"
                  className="w-9 h-9 rounded-[12px] hover:opacity-80 transition-opacity cursor-pointer"
                />
                <img
                  src={imgImage14}
                  alt="Social"
                  className="w-10 h-9 rounded-[12px] hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h5 className="font-['Poppins'] font-medium text-[16px] text-white mb-6">
                Product
              </h5>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="font-['Poppins'] text-[14px] text-white hover:text-white/80 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-['Poppins'] text-[14px] text-white hover:text-white/80 transition-colors"
                  >
                    Workouts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-['Poppins'] text-[14px] text-white hover:text-white/80 transition-colors"
                  >
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-['Poppins'] text-[14px] text-white hover:text-white/80 transition-colors"
                  >
                    Progress Tracking
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h5 className="font-['Poppins'] font-medium text-[16px] text-white mb-6">
                Company
              </h5>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="font-['Poppins'] text-[14px] text-white hover:text-white/80 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-['Poppins'] text-[14px] text-white hover:text-white/80 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-['Poppins'] text-[14px] text-white hover:text-white/80 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-['Poppins'] text-[14px] text-white hover:text-white/80 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h5 className="font-['Poppins'] font-medium text-[16px] text-white mb-6">
                Support
              </h5>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="font-['Poppins'] text-[14px] text-white hover:text-white/80 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-['Poppins'] text-[14px] text-white hover:text-white/80 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-['Poppins'] text-[14px] text-white hover:text-white/80 transition-colors"
                  >
                    Term of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
