import Navigation from "@/components/sections/navigation";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Get in Touch */}
          <div className="bg-black text-white p-12 rounded-lg flex flex-col justify-between min-h-[500px]">
            <div>
              <h1 className="text-4xl font-bold text-[#DC2626] mb-16">Get in Touch</h1>
              
              <div className="space-y-8 mt-auto">
                <div>
                  <p className="text-gray-300 text-sm mb-1">Address:</p>
                  <p className="text-white font-medium">Bat Yam ISR</p>
                </div>
                
                <div>
                  <p className="text-gray-300 text-sm mb-1">Email:</p>
                  <p className="text-white font-medium">contacts@inqwise.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Channels */}
          <div className="flex flex-col justify-start pt-12">
            <h2 className="text-4xl font-bold text-[#DC2626] mb-12">Contact channels</h2>
            
            <div className="space-y-6">
              <a 
                href="https://discord.gg/inqwise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-2xl text-[#2B3990] hover:text-[#DC2626] transition-colors underline"
              >
                Discord
              </a>
              <a 
                href="https://linkedin.com/company/inqwise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-2xl text-[#2B3990] hover:text-[#DC2626] transition-colors underline"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/inqwise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-2xl text-[#2B3990] hover:text-[#DC2626] transition-colors underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 text-center text-sm text-gray-600">
          <p>© 2024 by Inqwise. Powered and secured by Wix</p>
        </footer>
      </section>

      {/* Blue gradient background at bottom */}
      <div className="h-64 bg-gradient-to-b from-[#2B3990] to-[#1a2456]"></div>
    </main>
  );
}
