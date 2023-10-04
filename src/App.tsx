import { useState } from "react";
import data from "./data.json";
import headerImg from "./assets/images/bg-header-desktop.svg";
import headermobile from "./assets/images/bg-header-mobile.svg";
import JobsComponent from "./Jobs";
import Filter from "./Filter";

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
      <Filter
        filterBase={filterBase}
        setFilterBase={setFilterBase}
        setJobs={setJobs}
      />
      <article className="flex flex-col gap-10 w-3/4 m-auto">
        <JobsComponent handleFilter={handleFilter} jobs={jobs} />
      </article>
    </>
  );
}

export default App;
