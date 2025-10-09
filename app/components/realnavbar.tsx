'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './realnavbar.css';

export default function RealNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="real-navbar">
      <div className="real-navbar-left">
        <Image src="/vj.png" alt="Venejobs Logo" width={32} height={32} />
        <span className="brand-name">Venejobs</span>
      </div>

      <ul className="real-navbar-links">
        <li>Find Talent</li>
        <li>Post a Job</li>
        <li>Manage Work</li>
        <li>Reports</li>
        <li>Message</li>
      </ul>

      <div className="real-navbar-right">
        <input className="search-bar" type="text" placeholder="Search" />

        <Image
          src="/notification.svg"
          alt="Notifications"
          width={22}
          height={22}
          className="notification-icon"
        />

        <div className="profile-wrapper" ref={dropdownRef}>
          <Image
            src="https://randomuser.me/api/portraits/men/30.jpg"
            alt="User Avatar"
            width={32}
            height={32}
            className="profile-avatar"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />

          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-header">
                <strong>Alessandro Marotti</strong>
                <span className="role">Client</span>
              </div>
              <div className="dropdown-divider" />
              <button className="dropdown-item">Account Settings</button>
              <button className="dropdown-item logout">Log Out</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
