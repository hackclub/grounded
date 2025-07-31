import React from "react";

export default function OSHWLabStarsGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-white p-6 md:p-10 space-y-8">
        <h2 className="text-3xl font-bold text-emerald-400">🚀 Submitting a Project for OSHWLab Stars</h2>
        <p className="text-slate-300">
          All projects <strong>must be created using <a href="https://pro.easyeda.com/" className="text-emerald-400 underline" target="_blank">EasyEDA Pro</a></strong> (free to use).
        </p>

        {/* Step 1 */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400">📝 Step 1: Sign Up for OSHWLab Stars</h3>
          <ol className="list-decimal list-inside text-slate-300 space-y-1">
            <li>Go to: <a href="https://oshwlab.com/activities/stars" className="text-emerald-400 underline">https://oshwlab.com/activities/stars</a></li>
            <li>Sign up for OSHWLab Stars.</li>
          </ol>
          <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/9d709801c512b0679b3fd9a2cc18eaa3ca58a03e_pasted_image_20250624183524.png" alt="Step 1" className="rounded-md" />
        </section>

        {/* Step 2 */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400">📁 Step 2: Submit Your Project</h3>
          <ol className="list-decimal list-inside text-slate-300 space-y-1">
            <li>Go back to the <a href="https://oshwlab.com/activities/stars" className="text-emerald-400 underline">OSHWLab Stars page</a>.</li>
            <li>Click <strong>Create Project</strong> → <strong>Existing Project</strong>.</li>
            <li>Select your project from the dropdown list.</li>
          </ol>
          <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/555937f6418ae4d3dfc6f22d3e423c16b2060cc7_pasted_image_20250624183904.png" alt="Step 2" className="rounded-md" />
        </section>

        {/* Step 3 */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400">🧩 Step 3: Fill Out Project Details</h3>
          <ol className="list-decimal list-inside text-slate-300 space-y-1">
            <li>Upload a 3D render image of your PCB.</li>
            <li>Mark your project as <strong>Ongoing</strong>.</li>
            <li>Complete all required fields.</li>
          </ol>
          <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/63f6ac4bb640b1b1e237e6662930c458149491cd_pasted_image_20250624184432.png" alt="Step 3" className="rounded-md" />
          <p className="text-emerald-400 font-bold text-lg mt-4">Important!!</p>
          <p className="text-slate-300">Under <strong>Project Tags</strong>, select:</p>
          <ul className="list-disc list-inside text-slate-300">
            <li><code>HackClub2025</code></li>
            <li><code>OSHWLab Stars</code></li>
          </ul>
          <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/f11476756bb275a6ab1c786a5556eeacbdc4099f_pasted_image_20250624184508.png" alt="Tags" className="rounded-md" />
        </section>

        {/* Step 4 */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400">🖊️ Step 4: Write a Great Description</h3>
          <p className="text-slate-300">You can use the following template:</p>
          <pre className="bg-emerald-500/20 p-4 rounded-md text-sm text-slate-200 whitespace-pre-wrap">
{`> Title  
> Description  
> Image  
> Demo Video/Gif  
> Project Features  
> Installation Guide (if any software is needed)`}
          </pre>
          <p className="text-slate-300">
            For reference, check out this example:  
            <a href="https://oshwlab.com/imbue.rudraksh2008/rp2040_neo" target="_blank" className="text-emerald-400 underline"> RP2040_Neo Example Project</a>
          </p>
        </section>

        {/* Step 5 */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400">✅ Step 5: Publish Your Project</h3>
          <p className="text-slate-300">Click <strong>Publish</strong> once you're ready.</p>
          <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/6df456b2b3187cfa257803887e184019a64c0c99_pasted_image_20250624185511.png" alt="Step 5" className="rounded-md" />
        </section>

        {/* Step 6 */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400">🎁 Step 6: Apply for a Coupon</h3>
          <ol className="list-decimal list-inside text-slate-300 space-y-1">
            <li>Go back to the <a href="https://oshwlab.com/activities/stars" className="text-emerald-400 underline">OSHWLab Stars page</a>.</li>
            <li>Click <strong>Apply for Coupon</strong> → <strong>I Need Materials</strong>.</li>
          </ol>
          <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/8b218cae1d42c61f44e525ce4910afab8b023677_pasted_image_20250624185839.png" alt="Apply Coupon" className="rounded-md" />
        </section>

        {/* Step 7 */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400">🧾 Step 7: Select Coupon Type</h3>
          <ol className="list-decimal list-inside text-slate-300 space-y-1">
            <li>Choose your project.</li>
            <li>Select:
              <ul className="list-disc ml-6">
                <li><strong>PCB + SMT Coupon</strong> (if you're using PCBA), or</li>
                <li><strong>PCB Coupon</strong> (if you're only making a PCB).</li>
              </ul>
            </li>
          </ol>
          <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/1e6f5306a90a120754e1315184978b967f7fe909_pasted_image_20250624190550.png" alt="Coupon Type" className="rounded-md" />
        </section>

        {/* Step 8 */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400">📦 Step 8: Upload Required Files</h3>
          <ul className="list-disc list-inside text-slate-300">
            <li><strong>Component Quantity:</strong> from the PCBA Price Breakdown page.</li>
            <li><strong>Screenshots of the Order Page</strong> (upload all three):</li>
          </ul>
          <div className="space-y-2">
            <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/9e03752c67dcc2e3e45e5daec207cebb490bee92_pasted_image_20250624191529.png" alt="Order 1" className="rounded-md" />
            <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/1dfe68a853bcb8ba74864faff651e6f5f188aec5_pasted_image_20250624191530.png" alt="Order 2" className="rounded-md" />
            <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/50b86715c6d7cdfff6e34867513a79445cc99598_pasted_image_20250624191527.png" alt="Order 3" className="rounded-md" />
          </div>
        </section>

        {/* Step 9 */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400">📬 Step 9: Final Submission</h3>
          <p className="text-slate-300">Submit the required details through this form:</p>
          <a href="https://forms.hackclub.com/grounded" target="_blank" className="inline-block bg-emerald-500/20 px-4 py-2 rounded-md text-emerald-400 font-semibold hover:bg-emerald-500/30 transition">🔗 Grounded PCB Grant</a>
        </section>

        <p className="text-emerald-400 font-medium text-center">You'll hear from us within a few days. Good luck! 🎉</p>
      </div>
    </div>
  );
}