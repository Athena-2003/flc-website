import React, { useState } from "react";

export default function Hosting() {
  const [guiMode, setGuiMode] = useState<boolean>(true);

  return (
    <div className="w-full bg-blue-200 p-2 text-black">
      <br /> <br />
      <h2 className="mb-3 flex justify-between">
        <div>2. Hosting Static Sites with GitHub Pages</div>
        
        <div className="right-0 inline w-fit text-sm">
          <div>time: 10-15 mins</div>
          <div>data: few mbs</div>
        </div>
      </h2>
      
      <div className="h-fit w-full bg-slate-200">
        In this section, we will cover how to host your static website using GitHub Pages, a free and easy-to-use service provided by GitHub.
        {/* Section 1: Creating a GitHub Repository */}
       
        {/* Section 2: Adding Your Website Files */}
        
        {/* Section 3: Enabling GitHub Pages */}
        <div className="section m-3 rounded-md bg-slate-300 p-2">
          <h3 className="text-lg font-bold">1. Enabling GitHub Pages</h3>
          <p>
            Once your files are in the repository, you need to enable GitHub Pages for your repository. You can do this from the repository settings on GitHub:
          </p>
          <ul className="list-disc list-inside">
            <li>Go to the repository&apos;s settings.</li>
            <li>Scroll down to the &quot;GitHub Pages&quot; section.</li>
            <li>Select the source branch, typically <code>main</code> or <code>master</code>.</li>
            <li>Click &quot;Save&quot;.</li>
          </ul>
          <p>
            Alternatively, you can push a <code>gh-pages</code> branch to GitHub to automatically enable GitHub Pages:
          </p>
          <code className="block rounded bg-slate-400 p-2">
            git checkout -b gh-pages
          </code>
          <code className="block rounded bg-slate-400 p-2">git push origin gh-pages</code>
          <div className="image-placeholder my-3 flex h-40 w-full items-center justify-center bg-slate-400">
            <span>Image Placeholder for enabling GitHub Pages</span>
          </div>
        </div>
        {/* Section 4: Accessing Your Hosted Site */}
        <div className="section m-3 rounded-md bg-slate-300 p-2">
          <h3 className="text-lg font-bold">4. Accessing Your Hosted Site</h3>
          <p>
            After enabling GitHub Pages, your static site will be hosted at <code>https://&lt;username&gt;.github.io/&lt;repository_name&gt;</code>. It may take a few minutes for the site to be accessible.
          </p>
          <p>
            You can share this URL with others to give them access to your site.
          </p>
          <div className="image-placeholder my-3 flex h-40 w-full items-center justify-center bg-slate-400">
            <span>Image Placeholder for hosted site access</span>
          </div>
        </div>
      </div>
    </div>
  );
}
