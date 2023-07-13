import React from "react";

export default function Strategies() {
  const Strategies = [
    {
      title: 'Find your target keywords',
      text: 'Select keywords aligned with your target market and use them to return search engine results. As you research keywords, don’t forget about user intent.'
    },
    {
      title: 'Build better backlinks',
      text: 'Backlinks from other highly-ranked sites can help organically improve your standing in search results. Best bet? Create and submit relevant, market-focused content to industry news or knowledge sites.'
    },
    {
      title: 'Optimize your on-page content',
      text: 'Great content relies on relevance. Any blog post, video, podcast, or digital resource you create should focus on your target market.'
    },
    {
      title: 'Speed up your website',
      text: 'Website speed is a critical component of the user experience — on any device. Google began incorporating mobile page speed in 2018 as a factor in search rankings, making improved performance a factor in favorable results.'
    }
  ]
  return (
    <div className="strategies_section">
      <div className="section_strategies container">
        <h1>Qualities & Customizable Website Optimization Strategies</h1>
        <div className="strategies_box">
          <hr />
          {Strategies.map((strategy) => (
            <h1>{strategy}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}
