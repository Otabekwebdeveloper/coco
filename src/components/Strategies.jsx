import React from "react";
import { Link } from "react-router-dom";

export default function Strategies() {
  return (
    <div className="strategies_section container">
      <div className="section_strategies">
        <h1>Qualities & Customizable Website Optimization Strategies</h1>
        <div className="strategies_box">
          <hr />
          <div className="strategy_about">
            <h1>Find your target keywords</h1>
            <p>
              Select keywords aligned with your target market and use them to
              return search engine results. As you research keywords, don’t
              forget about user intent.
            </p>
          </div>
          <hr />
          <div className="strategy_about">
            <h1>Build better backlinks</h1>
            <p>
              Backlinks from other highly-ranked sites can help organically
              improve your standing in search results. Best bet? Create and
              submit relevant, market-focused content to industry news or
              knowledge sites.
            </p>
          </div>
          <hr />
          <div className="strategy_about">
            <h1>Optimize your on-page content</h1>
            <p>
              Great content relies on relevance. Any blog post, video, podcast,
              or digital resource you create should focus on your target market.
            </p>
          </div>
          <hr />
          <div className="strategy_about">
            <h1>Speed up your website</h1>
            <p>
              Website speed is a critical component of the user experience — on
              any device. Google began incorporating mobile page speed in 2018
              as a factor in search rankings, making improved performance a
              factor in favorable results.
            </p>
          </div>
        </div>
        <div className="btn">
          <div className="btns">
            <Link to={"/"}>Explore All Strategies</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
