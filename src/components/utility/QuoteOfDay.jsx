import React from 'react';

export default function QuoteOfDay() {
  return (
    <section className="utility-section quote-section">
      <div className="section-header">
        <h3>💭 Quote of the Day</h3>
      </div>
      <div className="daily-quote">
        <blockquote>
          "The best way to predict the future is to create it."
        </blockquote>
        <cite>— Peter Drucker</cite>
      </div>
    </section>
  );
}
