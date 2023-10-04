import { useState } from "react";
import data from "./data.json";
import headerImg from "./assets/images/bg-header-desktop.svg";
import headermobile from "./assets/images/bg-header-mobile.svg";
import JobsComponent from "./Jobs";
import RemoveIcon from "./assets/images/icon-remove.svg";

export type jobType = {
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
//todo: add filtering display
function App() {
  const [jobs, setJobs] = useState<jobType[]>(data);
  const [filterBase, setFilterBase] = useState<string[]>([]);
  function handleFilter(basedOn: string) {
    setFilterBase([...filterBase, basedOn]);
    const d = [...jobs].filter((item) =>
      [item.role, item.level, ...item.tools, ...item.languages].includes(
        basedOn
      )
    );
    setJobs(d);
  }
  return (
    <>
      <header className="mb-10 w-full bg-[#5ba4a4]">
        <img
          src={window.innerWidth > 750 ? headerImg : headermobile}
          alt="header"
          className="w-full"
        />
      </header>
      <section className="flex w-3/4 m-auto gap-3 rounded items-center -translate-y-1/3 mb-6 p-4 shadow-xl">
        <div className="flex flex-wrap gap-3">
          {filterBase.map((f) => (
            <div>
              <span>{f} </span>
              <button className="">
                <img src={RemoveIcon} alt="remove" />
              </button>
            </div>
          ))}
        </div>
        <div className="w-1/3">
          <button>Clear</button>
        </div>
      </section>
      <article className="flex flex-col gap-10 w-3/4 m-auto">
        <JobsComponent handleFilter={handleFilter} jobs={jobs} />
      </article>
    </>
  );
}

export default App;
