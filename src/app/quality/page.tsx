'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import QualityPolicy from '@/components/QualityPolicy';
import Certifications from '@/components/Certifications';
import QualityProcess from '@/components/QualityProcess';

export default function QualityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="quality" />

      <PageTitle title="质量体系" />

      <QualityPolicy />

      <Certifications />

      <QualityProcess />

      <Footer />
    </div>
  );
}
