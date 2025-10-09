'use client';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './styles.css';
import Image from 'next/image';

export default function CheckFreelancerProfile() {
  return (
    <>
      <Navbar />
      <div className="freelancer-layout">
        {/* Main Card */}
        <div className="main-card">
          {/* Header */}
          <section className="profile-header">
            <div className="avatar-name-role">
              <Image
                src="/avatar-placeholder.png"
                alt="Avatar"
                width={70}
                height={70}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/default-avatar.png';
                }}
              />
              <div>
                <h2>Alishan Noor</h2>
                <p>UX/UI Designer | Website/App/Figma</p>
                <p>⭐ 5.0 (10 reviews) • Last seen 2 days ago</p>
              </div>
            </div>
            <div className="profile-stats">
              <div>
                <strong>100K</strong><br />
                Total Earning
              </div>
              <div>
                <strong>20</strong><br />
                Total Jobs
              </div>
            </div>
          </section>

          {/* About */}
          <section className="profile-about">
            <h3>About Freelancer</h3>
            <p>
              Looking for a freelancer to work on your next project? As a Google-certified UX/UI Designer
              with 4+ years of experience, I specialize in creating captivating digital experiences for
              websites, apps, and dashboards.
            </p>
          </section>

          {/* Reviews */}
          <section className="profile-reviews">
            <h3>Reviews</h3>
            {[1, 2, 3].map((_, i) => (
              <div className="review" key={i}>
                <p className="review-name">⭐ 5.0 • UX/UI Designer Needed for Website & App Redesign</p>
                <p>The design was very good and easy to communicate. Very helpful for my MVP.</p>
                <p className="review-date">Dec 3, 2024</p>
              </div>
            ))}
          </section>
        </div>

        {/* Sidebar */}
        <div className="freelancer-sidebar">
          <h4>Language</h4>
          <ul>
            <li>English – Fluent</li>
            <li>Urdu – Fluent</li>
            <li>Russian – Native or Bilingual</li>
          </ul>

          <h4>Skills</h4>
          <div className="tags">
            <span>Landing Page</span>
            <span>Web Design</span>
            <span>Prototype</span>
            <span>UX/UI Design</span>
            <span>User Flow</span>
          </div>

          <div className="profile-actions">
            <button className="hire-btn">Hire</button>
            <button className="message-btn">Message</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
