import React from 'react';
import { Clock, Code, Github, Zap, CheckCircle, AlertCircle, Camera, FileText, Users, ExternalLink } from 'lucide-react';

const GroundplaneDocs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            PCB Development Tracking
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Tracking time with Groundplane!
          </h1>
        </div>

        {/* Introduction */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-12">
          <p className="text-lg text-slate-300 leading-relaxed">
            To start your PCB, first we want a method to track time. Instead of getting you to use Wakatime for your EDA (can be VERY buggy), we want to use more of a journaling system (like how I track time in my day). We want to stop judging projects based solely on how long they take. We want to encourage you to be creative and come up with new ideas, and we want to reward you for your creativity and the quality of the PCB! For this very reason, I built Groundplane—an all-in-one PCB devlog software to make your devlogs easy.
          </p>
        </div>

        {/* What is Groundplane */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-emerald-400">What is Groundplane?</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <p className="text-lg text-slate-300 leading-relaxed">
              Groundplane is a time tracker that you can use to track your time using devlogs. It doesn't really track time, but more the devlogs of your projects and progress! Remember, the time tracking is trust-based and if you commit fraud we will know! <span className="text-emerald-400 font-medium">(Please don't.)</span>
            </p>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-emerald-400">Getting Started</h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-8">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              To get started with using Groundplane, head to{' '}
              <a href="https://groundplane.hackclub.com" className="text-emerald-400 hover:text-emerald-300 underline font-medium inline-flex items-center gap-1">
                https://groundplane.hackclub.com
                <ExternalLink className="w-4 h-4" />
              </a>{' '}
              and log in with Slack! (If you don't have an account, head over to{' '}
              <a href="https://hackclub.com/slack" className="text-emerald-400 hover:text-emerald-300 underline font-medium inline-flex items-center gap-1">
                https://hackclub.com/slack
                <ExternalLink className="w-4 h-4" />
              </a>{' '}
              and join the Slack.) You can then start tracking your time and devlogs!
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <p className="text-slate-300 mb-6">
                When you first open Groundplane, you will see something like this:
              </p>
              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                <img 
                  src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/5d20aadd45e9a4c73d470b475b9d89089bb59876_image.png"
                  alt="Groundplane landing page"
                  className="w-full rounded-lg"
                />
              </div>
              <p className="text-slate-300 mt-6">
                Go ahead and click <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-medium">Get Started</span>. You should be brought to a page like this:
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 mb-6">
                <img 
                  src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/83e6da24a59699a6abdb8d0bbe6ef61b0fd90bb9_image.png"
                  alt="Groundplane login page"
                  className="w-full rounded-lg"
                />
              </div>
              <p className="text-slate-300 mb-6">
                Once you click <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-medium">Login with Slack</span>, it will redirect you to Slack login, and once that is done it will bring you to the main page that looks something like this:
              </p>
              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                <img 
                  src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/c045abff86cb1f5fbb6f3046e0a0204dfbf80aad_image.png"
                  alt="Groundplane main dashboard"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <p className="text-slate-300 mb-6">
                Now this is the main page where you can perform all your actions!
              </p>
              <p className="text-slate-300 mb-6">
                On the top right, you should see a <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-medium">Create Project</span> button like this:
              </p>
              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 mb-6">
                <img 
                  src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/e16c5b1f3ada73b255628cd877e028300373848a_image.png"
                  alt="Create Project button location"
                  className="w-full rounded-lg"
                />
              </div>
              <p className="text-slate-300 mb-6">
                Once you click this, you can begin setting up your first project!
              </p>
              <p className="text-slate-300 mb-6">
                The fields are pretty self-explanatory. Here is a picture of my example:
              </p>
              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                <img 
                  src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/2bfa663d6408fcdd43f6d2328178299d9cdae821_image.png"
                  alt="Project creation form example"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <p className="text-slate-300 mb-6">
                Once you click <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-medium">Create</span>, Groundplane should redirect you back to the home page and your project should appear!
              </p>
              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 mb-6">
                <img 
                  src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/50f41858b20da2562141c12d4e901bd2c65bc665_image.png"
                  alt="Project card on homepage"
                  className="w-full rounded-lg"
                />
              </div>
              <p className="text-slate-300 mb-6">
                On the project card, you have a couple of options:
              </p>
              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 mb-6">
                <img 
                  src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/1b091a5fbbe125a79dbddfa0c432c86211485b62_image.png"
                  alt="Project card options"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
                <h3 className="text-emerald-400 font-semibold mb-4">You can:</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Edit the project details (Name, Description, GitHub URL)</span>
                  </li>
                  <li className="ml-4 text-sm text-slate-400">
                    <span className="bg-slate-600/50 px-2 py-1 rounded text-xs">NOTE:</span> MEDIA CANNOT BE CHANGED AFTER PROJECT CREATION (If you are desperate, contact @AaravJ on Slack)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Delete the project</span>
                  </li>
                  <li className="ml-4 text-sm text-slate-400">
                    <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">NOTE:</span> THIS CANNOT BE UNDONE
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>View the project GitHub Repository</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Go more in-depth into the project to start creating devlogs!</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <p className="text-slate-300 mb-6">
                From here, you want to click the <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-medium">View Project</span> button on the project card, and it will redirect you to your project page:
              </p>
              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 mb-6">
                <img 
                  src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/497005a4cd4f623c2e9c1aac9dcf756f36e40ae2_image.png"
                  alt="Project page view"
                  className="w-full rounded-lg"
                />
              </div>
              <p className="text-slate-300 mb-6">
                Now on the project page, there are 2 sections:
              </p>
              <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">1</span>
                    <span>Your project details containing the cover image and description of the project</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">2</span>
                    <span>Your devlogs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <p className="text-slate-300 mb-6">
                What are devlogs, you may ask? Devlogs are a new way of tracking project progress that we made (inspired heavily by Highway devlogs).
              </p>
              <p className="text-slate-300 mb-6">
                We want to encourage you to document your projects step-by-step, as that is a great way to view progress and mistakes, and we judge your project based on these devlogs!
              </p>
              <p className="text-slate-300 mb-6">
                Once you click <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-medium">Create Devlog</span> in the bottom section:
              </p>
              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                <img 
                  src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/8f4b61b9c509040cef45fe003dc16d9e804fc00c_image.png"
                  alt="Create Devlog button location"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <p className="text-slate-300 mb-6">
                You will be brought to a long-ish form that allows you to submit your devlog.
              </p>
              <p className="text-slate-300 mb-6">
                In this form, you need to enter:
              </p>
              <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Project Name (Automatically Entered)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Dev Log Tag (What are you working on? PCB, CAD, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Title (A title for your devlog!)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>What You Did (An in-depth description of what you accomplished that session)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Issues Faced (What issues did you face while building your project)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Next Steps (What next steps do you plan on taking to either resolve those issues or continue your project)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Time Spent (How much time did you spend this session)</span>
                  </li>
                  <li className="ml-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mt-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2">
                      <AlertCircle className="w-4 h-4" />
                      KEY NOTE:
                    </div>
                    <p className="text-emerald-300 text-sm">
                      Please be honest with this. If you are not honest, we WILL find out, and your project will be invalidated. Please keep in mind we are a non-profit with limited funds. Devlog time will also be reviewed by our team to prevent fraud.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Screenshot or Video (This is the most important step — share a screenshot or video of what you did in this session! What did you accomplish and how does it look? We want to see!!)</span>
                  </li>
                </ul>
              </div>
              <p className="text-slate-300 mt-6">
                After that, you can go ahead and submit your devlog and wait for review!
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <p className="text-slate-300 mb-6">
                After creating a devlog, if you click <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-medium">View Project</span> again, you should see it under here like so:
              </p>
              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 mb-6">
                <img 
                  src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/8da2d7aa9bd45cb2cff2e66e6082e0780d3c47b7_image.png"
                  alt="Devlog with pending approval status"
                  className="w-full rounded-lg"
                />
              </div>
              <p className="text-slate-300 mb-6">
                If you look closely, you can see how it says <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded font-medium">pending approval</span>. This means that one of the organizers needs to manually review your devlog and approve it.
              </p>
              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 mb-6">
                <img 
                  src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/74a3aa90cb9b00c049d7d13f13952f8a03086589_image.png"
                  alt="Pending approval indicator"
                  className="w-full rounded-lg"
                />
              </div>
              <p className="text-slate-300 mb-6">
                Once your devlog is approved, it should look something like this:
              </p>
              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                <img 
                  src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/f56b2324c67b55033713671a7b836d35ebba0511_image.png"
                  alt="Approved devlog view"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 rounded-2xl p-8 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-4">
                <CheckCircle className="w-5 h-5" />
                Project Completion
              </div>
              <p className="text-slate-300">
                Once you finish your project, reach out to <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-medium">@AaravJ</span> on Slack to mark it as completed and fill out the form (will be given to you)!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GroundplaneDocs;