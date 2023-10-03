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
//todo: add filtering display
function App() {
  const [jobs, setJobs] = useState<jobType[]>(data);
  function handleFilter(basedOn: string) {
    const d = [...jobs].filter((item) => [item.role, item.level, ...item.tools, ...item.languages ].includes(basedOn))
    setJobs(d)
  }
  return (
    <>
      <header className="mb-10 w-full bg-green-500">
        <img src={headerImg} alt="header" className="w-full" />
      </header>
      <article className="flex flex-col gap-10 w-3/4 m-auto">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex md:flex-row flex-col gap-6 justify-between md:items-center shadow-xl py-4 px-6 "
          >
            <div className="flex md:flex-row relative flex-col justify-center md:items-center gap-4 border-b pb-4">
              <section className="absolute top-0 -translate-y-1/2">
                <img src={Im} alt="Image" className="w-2/3" />
              </section>
              <section className="mt-12 flex flex-col gap-2">
                <div className="flex gap-3">
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

            <section className="flex flex-wrap gap-6">
              {[job.role, job.level, ...job.tools, ...job.languages ].map((item, i) => (
                <div key={i} onClick={() => handleFilter(item)} className="bg-slate-300 py-1 px-2 rounded">{item}</div>
              ))}
            </section>
          </div>
        ))}
      </article>
    </>
  );
}

export default App;
