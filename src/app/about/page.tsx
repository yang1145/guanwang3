import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import CompanyIntro from '@/components/CompanyIntro';
import HistoryTimeline from '@/components/HistoryTimeline';
import ManagementTeam from '@/components/ManagementTeam';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="about" />

      <PageTitle title="关于我们" />

      <CompanyIntro />

      <HistoryTimeline />

      <ManagementTeam />

      <Footer />
    </div>
  );
}