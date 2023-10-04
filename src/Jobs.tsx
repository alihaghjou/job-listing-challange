import { LogoArray } from "./ImagesArray";
import { jobType } from "./App";

type propsType = {
  jobs: jobType[];
  handleFilter: (basedOn: string) => void;
};

export default function JobsComponent({ jobs, handleFilter }: propsType) {
  return (
    <>
      {jobs.map((job) => (
        <div
          key={job.id}
          className="flex md:flex-row flex-col gap-6 justify-between md:items-center shadow-xl py-4 px-6 "
        >
          <div className="flex md:flex-row relative flex-col justify-center md:items-center gap-4 border-b pb-4 md:border-none">
            <section className="absolute top-0 -translate-y-1/2 md:relative md:top-12">
              <img src={LogoArray[job.id - 1]} alt="Image" className="w-2/3" />
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
            {[job.role, job.level, ...job.tools, ...job.languages].map(
              (item, i) => (
                <div
                  key={i}
                  onClick={() => handleFilter(item)}
                  className="bg-slate-300 py-1 px-2 rounded"
                >
                  {item}
                </div>
              )
            )}
          </section>
        </div>
      ))}
    </>
  );
}
