import FaqToProps from "./FaqToProps";

export default function Faqs() {
  const faqs = [
    {
      title: "Why You Need SEO Optimization",
      text: "When does a mere internet 'SEO' company grow into a trusted partner that stays in front of the latest industry trends? When it's time to partner with Mocer, that's when.",
    },
    {
      title: "The Benefits of SEO Optimization",
      text: "When does a mere internet 'SEO' company grow into a trusted partner that stays in front of the latest industry trends? When it's time to partner with Mocer, that's when.",
    },
    {
      title: "How to Get Started with SEO Optimization",
      text: "When does a mere internet 'SEO' company grow into a trusted partner that stays in front of the latest industry trends? When it's time to partner with Mocer, that's when.",
    },
    {
      title: "How to Get Your Business Ready for SEO Optimization",
      text: "When does a mere internet 'SEO' company grow into a trusted partner that stays in front of the latest industry trends? When it's time to partner with Mocer, that's when.",
    },
    {
      title: "What is a Meta Description?",
      text: "When does a mere internet 'SEO' company grow into a trusted partner that stays in front of the latest industry trends? When it's time to partner with Mocer, that's when.",
    },
    {
      title: "How to Write a Meta Description",
      text: "When does a mere internet 'SEO' company grow into a trusted partner that stays in front of the latest industry trends? When it's time to partner with Mocer, that's when.",
    },
  ];

  return (
    <>
      <div className="faqs">
        <h1 className="faqs-title">
          Awesome features <br /> optimizing your website
        </h1>
        {faqs &&
          faqs.map((item, index) => <FaqToProps item={item} index={index} />)}
      </div>
    </>
  );
}
