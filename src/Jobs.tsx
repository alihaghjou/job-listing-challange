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
              <div className="flex gap-3 items-center">
                <span className="text-[#7b8e8e] font-bold">{job.company}</span>
                {job.new ? <span className="bg-[#7b8e8e] text-white py-1 px-2 rounded-2xl">NEW!</span> : <></>}
                {job.featured ? <span className="bg-[#2c3a3a] rounded-2xl text-white py-1 px-2">FEATURED</span> : <></>}
              </div>
              <div className="font-black">{job.position}</div>
              <div className="flex gap-3 items-center">
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
                  className="bg-[#eef6f6] py-1 px-2 rounded font-medium text-[#7b8e8e]"
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
