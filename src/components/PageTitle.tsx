import React from 'react';

interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">{title}</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>
    </section>
  );
}