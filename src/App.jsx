
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
        <div className="text-2xl font-bold text-cyan-400">
          LRCatalyst Marketing
        </div>

        <div className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#services" className="hover:text-cyan-400">Services</a>
          <a href="#portfolio" className="hover:text-cyan-400">Portfolio</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="text-center py-24 px-6">
        <div className="inline-block px-4 py-2 rounded-full border border-cyan-500 text-cyan-400 mb-6">
          LRCatalyst Marketing
        </div>

        <h1 className="text-5xl md:text-7xl font-bold">
          Digital Marketing Agency
          <span className="block text-cyan-400">
            SEO, Meta Ads & Website Development
          </span>
        </h1>

        <p className="text-xl text-slate-300 mt-6 max-w-3xl mx-auto">
          We help businesses generate leads, sales and revenue through SEO,
          Google Ads, Social Media Marketing and Website Development.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <a
            href="#contact"
            className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition inline-block"
          >
            Free Consultation
          </a>

          <a
            href="#services"
            className="border border-cyan-500 px-8 py-4 rounded-xl"
          >
            Our Services
          </a>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-10">
          About LR Catalyst Marketing
        </h2>

        <p className="text-slate-300 text-lg leading-8 text-center">
          LR Catalyst Marketing helps businesses grow through SEO Services,
          Google Ads, Meta Ads, Social Media Marketing, Lead Generation and
          Website Development. We focus on generating measurable business
          growth and quality leads.
        </p>
      </section>

      {/* Services */}
      <section
        id="services"
        className="max-w-6xl mx-auto px-6 py-24"
      >
       <h2 className="text-5xl font-bold text-center mb-8">
  Our Services
</h2>

<h3 className="text-center text-xl text-slate-300 mb-6">
  Platforms We Manage
</h3>

<div className="flex justify-center gap-10 mb-6 flex-wrap">
  

  <img
    src="/icons/icons8-facebook-500.png"
    alt="Facebook"
    className="h-14"
  />

  <img
    src="/icons/icons8-instagram-500.png"
    alt="Instagram"
    className="h-14"
  />

  <img
    src="/icons/icons8-linkedin-500.png"
    alt="LinkedIn"
    className="h-14"
  />

  <img
    src="/icons/icons8-youtube-500.png"
    alt="YouTube"
    className="h-14"
  />

  <img
    src="/icons/icons8-whatsapp-500.png"
    alt="WhatsApp"
    className="h-14"
  />

  <img
    src="/icons/icons8-x-500.png"
    alt="X"
    className="h-14"
  />
  
</div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["SEO", "Improve your Google rankings and drive organic traffic."],
            ["Google Ads", "Generate qualified leads through PPC campaigns."],
            ["Social Media Marketing", "Build brand awareness and engagement."],
            ["Meta Ads", "Scale your business with Facebook and Instagram Ads."],
            ["Website Development", "Fast, modern and conversion-focused websites."],
            ["Lead Generation", "Get more enquiries and customers."]
          ].map(([title, desc]) => (
            <div key={title} className="bg-slate-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {title}
              </h3>
              <p className="text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center mb-16">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Results Focused
            </h3>
            <p className="text-slate-400">
              We focus on leads, sales and business growth.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Data Driven
            </h3>
            <p className="text-slate-400">
              Every campaign is tracked and optimized.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Transparent Reporting
            </h3>
            <p className="text-slate-400">
              Clear reports showing campaign performance.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-5xl font-bold text-center mb-16">
          Portfolio Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              SEO Strategy Project
            </h3>
            <p className="text-slate-400">
              Keyword research and technical SEO audits.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Google Ads Campaign
            </h3>
            <p className="text-slate-400">
              Conversion-focused PPC campaigns.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Social Media Growth
            </h3>
            <p className="text-slate-400">
              Content planning and Meta Ads strategies.
            </p>
          </div>
        </div>
      </section>
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-bold text-center mb-4">
       Pricing Plans
      </h2>

  <p className="text-center text-slate-400 mb-16">
    Flexible solutions for businesses at every stage of growth.
  </p>

  
<div className="grid md:grid-cols-4 gap-8">

  {/* Starter */}
  <div className="bg-slate-900 p-8 rounded-2xl">
    <h3 className="text-2xl font-bold text-cyan-400 mb-3">
      Starter
    </h3>

    <p className="text-4xl font-bold mb-6">
      ₹14,999
    </p>

    <p className="text-slate-400 mb-6">
      Perfect for local businesses starting their online presence.
    </p>

    <ul className="space-y-2 text-slate-300">
      <li>✓ Business Website</li>
      <li>✓ WhatsApp Business Setup</li>
      <li>✓ Google Business Profile</li>
      <li>✓ Basic SEO Setup</li>
      <li>✓ Mobile Responsive Design</li>
      <li>✓ 30 Days Support</li>
    </ul>

    <p className="mt-6 text-cyan-400">
      Maintenance: ₹1,499/month
    </p>
  </div>

  {/* Growth */}
  <div className="bg-slate-900 p-8 rounded-2xl border border-cyan-500 relative">
    <span className="absolute -top-3 left-6 bg-cyan-500 text-black px-3 py-1 rounded-full text-sm font-bold">
      Most Popular
    </span>

    <h3 className="text-2xl font-bold text-cyan-400 mb-3">
      Growth
    </h3>

    <p className="text-4xl font-bold mb-6">
      ₹29,999
    </p>

    <p className="text-slate-400 mb-6">
      Ideal for businesses focused on lead generation and growth.
    </p>

    <ul className="space-y-2 text-slate-300">
      <li>✓ Business Website</li>
      <li>✓ Advanced SEO</li>
      <li>✓ Meta Ads Management</li>
      <li>✓ WhatsApp Business Setup</li>
      <li>✓ Google Business Optimization</li>
      <li>✓ Monthly Reporting</li>
    </ul>

    <p className="mt-6 text-cyan-400">
      Maintenance: ₹2,499/month
    </p>
  </div>

  {/* Premium */}
  <div className="bg-slate-900 p-8 rounded-2xl">
    <h3 className="text-2xl font-bold text-cyan-400 mb-3">
      Premium Partner
    </h3>

    <p className="text-4xl font-bold mb-6">
      ₹49,999
    </p>

    <p className="text-slate-400 mb-6">
      Complete growth solution for businesses ready to scale.
    </p>

    <ul className="space-y-2 text-slate-300">
      <li>✓ Premium Website</li>
      <li>✓ SEO Management</li>
      <li>✓ Meta Ads Management</li>
      <li>✓ Competitor Analysis</li>
      <li>✓ Business Expansion Strategy</li>
      <li>✓ Monthly Consultation</li>
    </ul>

    <p className="mt-6 text-cyan-400">
      Maintenance: ₹2,999/month
    </p>
  </div>

  {/* Enterprise */}
  <div className="bg-slate-900 p-8 rounded-2xl">
    <h3 className="text-2xl font-bold text-cyan-400 mb-3">
      Enterprise
    </h3>

    <p className="text-4xl font-bold mb-6">
      Custom
    </p>

    <p className="text-slate-400 mb-6">
      Tailored solutions for large organizations and enterprise clients.
    </p>

    <ul className="space-y-2 text-slate-300">
      <li>✓ CRM Integration</li>
      <li>✓ Marketing Automation</li>
      <li>✓ Multiple Landing Pages</li>
      <li>✓ Dedicated Account Manager</li>
      <li>✓ Advanced Analytics</li>
      <li>✓ Custom Development</li>
    </ul>

    <p className="mt-6 text-cyan-400">
      Request Custom Quote
    </p>
  </div>

</div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-cyan-400">
              What services do you provide?
            </h3>
            <p className="text-slate-400 mt-2">
              SEO, Google Ads, Meta Ads, Website Development and Lead Generation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-cyan-400">
              Do you work with small businesses?
            </h3>
            <p className="text-slate-400 mt-2">
              Yes. We help startups and local businesses grow online.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-24"
      >
        <h2 className="text-5xl font-bold text-center mb-12">
          Let's Grow Your Business
        </h2>
        <div className="text-center mb-10">
        <p className="text-xl text-slate-300">
         📞 +91 8121894284
        </p>

        <p className="text-xl text-slate-300 mt-2">
         📧 tejar741@gmail.com
        </p>

        <p className="text-xl text-slate-300 mt-2">
        📍 Hyderabad, India
        </p>
        </div>

        <form
          action="https://formsubmit.co/tejar741@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Lead from LRCatalyst Marketing"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-slate-900"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl bg-slate-900"
            required
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Tell us about your project"
            className="w-full p-4 rounded-xl bg-slate-900"
            required
          />

          <button
            type="submit"
            className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-semibold"
          >
            Get Free Consultation
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center">
        <h3 className="text-2xl font-bold text-cyan-400">
          LRCatalyst Marketing
        </h3>

        <p className="text-slate-400 mt-3">
          Accelerating Growth Through Digital Marketing
        </p>

        <p className="text-slate-500 mt-4">
          © 2026 LRCatalyst Marketing. All Rights Reserved.
        </p>
      </footer>

      <a
        href="https://wa.me/918121894284"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>
    </div>
  );
}

export default App;
