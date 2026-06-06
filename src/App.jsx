function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
    
      <section className="text-center py-24 px-6">
       {/* Navbar */}

      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">

        <h1 className="text-2xl font-bold text-cyan-400">
          LRCatalyst Marketing
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#services" className="hover:text-cyan-400">Services</a>
          <a href="#portfolio" className="hover:text-cyan-400">Portfolio</a>
        </div>

      </nav>
      
      <section className="text-center py-24 px-6"></section>        

        <div className="inline-block px-4 py-2 rounded-full border border-cyan-500 text-cyan-400 mb-6">
          LRCatalyst Marketing
        </div>

        <h1 className="text-6xl md:text-7xl font-bold">
          Grow Your Business With
          <span className="block text-cyan-400">
            Digital Marketing
          </span>
        </h1>

        <p className="text-xl text-slate-300 mt-6 max-w-3xl mx-auto">
          We help businesses generate leads, sales and revenue through SEO,
          Google Ads, Social Media Marketing and Website Development.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <a href="#contact"
           className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition inline-block">
           Free Consultation
          </a>
          <button className="border border-cyan-500 px-8 py-4 rounded-xl">
            Our Services
          </button>
        </div>
       
      </section>
      {/* Services Section */}

<section className="max-w-6xl mx-auto px-6 py-24">

  <h2 className="text-5xl font-bold text-center mb-16">
    Our Services
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-slate-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        SEO
      </h3>

      <p className="text-slate-400">
        Improve your Google rankings and drive organic traffic.
      </p>
    </div>

    <div className="bg-slate-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        Google Ads
      </h3>

      <p className="text-slate-400">
        Generate qualified leads through targeted PPC campaigns.
      </p>
    </div>

    <div className="bg-slate-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        Social Media Marketing
      </h3>

      <p className="text-slate-400">
        Build brand awareness and engagement across platforms.
      </p>
    </div>

    <div className="bg-slate-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        Meta Ads
      </h3>

      <p className="text-slate-400">
        Scale your business using Facebook and Instagram advertising.
      </p>
    </div>

    <div className="bg-slate-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        Website Development
      </h3>

      <p className="text-slate-400">
        Fast, modern and conversion-focused business websites.
      </p>
    </div>

    <div className="bg-slate-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        Lead Generation
      </h3>

      <p className="text-slate-400">
        Get more enquiries and customers through digital channels.
      </p>
    </div>

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
        We focus on leads, sales and business growth instead of vanity metrics.
      </p>
    </div>

    <div className="bg-slate-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        Data Driven
      </h3>

      <p className="text-slate-400">
        Every campaign is tracked, measured and optimized using analytics.
      </p>
    </div>

    <div className="bg-slate-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        Transparent Reporting
      </h3>

      <p className="text-slate-400">
        Clear monthly reports showing campaign performance and ROI.
      </p>
    </div>

  </div>

</section>
{/* Portfolio Projects */}

<section className="max-w-6xl mx-auto px-6 py-24">

  <h2 className="text-5xl font-bold text-center mb-16">
    Portfolio Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-slate-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        SEO Strategy Project
      </h3>

      <p className="text-slate-400">
        Keyword research, on-page SEO, technical SEO audit and content strategy.
      </p>
    </div>

    <div className="bg-slate-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        Google Ads Campaign
      </h3>

      <p className="text-slate-400">
        Search campaigns, conversion tracking and landing page optimization.
      </p>
    </div>

    <div className="bg-slate-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        Social Media Growth
      </h3>

      <p className="text-slate-400">
        Content planning, Meta Ads and engagement strategies.
      </p>
    </div>

  </div>

</section>
{/* Pricing */}

<section className="max-w-6xl mx-auto px-6 py-24">

  <h2 className="text-5xl font-bold text-center mb-16">
    Pricing Plans
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-slate-900 p-8 rounded-2xl text-center">
      <h3 className="text-2xl font-bold mb-4">Starter</h3>
      <h2 className="text-4xl text-cyan-400 font-bold mb-4">₹15,000</h2>
      <p className="text-slate-400">SEO + Social Media Management</p>
    </div>

    <div className="bg-slate-900 p-8 rounded-2xl text-center border border-cyan-500">
      <h3 className="text-2xl font-bold mb-4">Growth</h3>
      <h2 className="text-4xl text-cyan-400 font-bold mb-4">₹30,000</h2>
      <p className="text-slate-400">SEO + Google Ads + Social Media</p>
    </div>

    <div className="bg-slate-900 p-8 rounded-2xl text-center">
      <h3 className="text-2xl font-bold mb-4">Scale</h3>
      <h2 className="text-4xl text-cyan-400 font-bold mb-4">Custom</h2>
      <p className="text-slate-400">Complete Digital Marketing Solution</p>
    </div>

  </div>

</section>
{/* Contact */}

<section className="max-w-4xl mx-auto px-6 py-24">

  <h2 className="text-5xl font-bold text-center mb-12">
    Let's Grow Your Business
  </h2>

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

    <input
      type="text"
      name="business"
      placeholder="Business Name"
      className="w-full p-4 rounded-xl bg-slate-900"
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