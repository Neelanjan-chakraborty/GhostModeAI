import React from 'react';

const Legal = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto bg-navy-800/80 backdrop-blur-sm p-8 rounded-xl border border-neonBlue-500/20">
        <h1 className="text-3xl font-bold text-white mb-8">Legal Documents</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neonBlue-400 mb-4">End User License Agreement (EULA)</h2>
          <div className="prose prose-invert">
            <h3 className="text-xl text-white mb-4">1. Introduction</h3>
            <p className="text-gray-300 mb-6">
              This End User License Agreement ("EULA") is a legal agreement between you (either an individual or a single entity) and AzureRift ("Company", "we", or "us") regarding your use of GhostMode AI software ("Software"). By installing, copying, or otherwise using the Software, you agree to be bound by the terms of this EULA.
            </p>

            <h3 className="text-xl text-white mb-4">2. License Grant</h3>
            <p className="text-gray-300 mb-6">
              Subject to the terms and conditions of this Agreement, the Company grants you a limited, non-exclusive, non-transferable license to use the Software for your personal or internal business purposes.
            </p>

            <h3 className="text-xl text-white mb-4">3. Privacy and Data Security</h3>
            <p className="text-gray-300 mb-6">
              The Software may record audio, transcribe conversations, analyze screens, and hide windows during screen sharing. By using the Software, you acknowledge and consent to these capabilities. The Company is committed to protecting your privacy and data.
            </p>

            <h4 className="text-lg text-white mb-3">3.1 Audio Recording and Transcription</h4>
            <p className="text-gray-300 mb-6">
              The Software records audio from selected devices and may transmit this data to third-party services for transcription purposes. The Company does not permanently store your audio recordings unless specifically configured by you.
            </p>

            <h4 className="text-lg text-white mb-3">3.2 Window Hiding Feature</h4>
            <p className="text-gray-300 mb-6">
              The Software allows you to hide specific windows from screen captures and screen sharing applications. You are solely responsible for how you use this feature.
            </p>

            <h3 className="text-xl text-white mb-4">4. Restrictions</h3>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Distribute, sublicense, lease, rent, loan, or otherwise transfer the Software</li>
              <li>Reverse engineer, decompile, or disassemble the Software</li>
              <li>Remove or alter any proprietary notices or labels on the Software</li>
            </ul>

            {/* Continue with remaining sections... */}
            
            <h3 className="text-xl text-white mb-4">11. Contact Information</h3>
            <p className="text-gray-300 mb-6">
              For questions about this EULA, please contact us at:<br />
              Website: <a href="https://azurerift.in" className="text-neonBlue-400 hover:underline">https://azurerift.in</a><br />
              Email: support@azurerift.in
            </p>

            <p className="text-gray-400 mt-8">Last updated: May 17, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legal;