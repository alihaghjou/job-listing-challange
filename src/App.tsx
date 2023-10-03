import { useState } from "react";
import data from "./data.json";
import headerImg from "./assets/images/bg-header-desktop.svg";
import Im from "./assets/images/account.svg";

type jobType = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};
//todo: fix the image
//todo: add header image color
//todo: add filtering
function App() {
  const [jobs, setJobs] = useState<jobType[]>(data);
  return (
    <>
      <header className="mb-10 w-full bg-green-500">
        <img src={headerImg} alt="header" className="w-full" />
      </header>
      <article className="flex flex-col gap-24 w-3/4 m-auto">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex md:flex-row flex-col gap-6 justify-between md:items-center shadow py-4 px-6 "
          >
            <div className="flex md:flex-row relative flex-col justify-center md:items-center gap-4 border-b">
              <section className="absolute top-0 -translate-y-1/2">
                <img src={Im} alt="Image" className="w-2/3" />
              </section>
              <section className=" mt-12">
                <div>
                  <span>{job.company}</span>
                  {job.new ? <span>NEW!</span> : <></>}
                  {job.featured ? <span>FEATURED</span> : <></>}
                </div>
                <div>{job.position}</div>
                <div>
                  <span>{job.postedAt}</span>.<span>{job.contract}</span>.
                  <span>{job.location}</span>
                </div>
              </section>
            </div>

            <section>
              {[...job.tools, ...job.languages, job.level, job.role]}
            </section>
          </div>
        ))}
      </article>
    </>
  );
}

export default App;
