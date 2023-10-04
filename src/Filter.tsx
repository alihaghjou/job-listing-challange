import { jobType } from "./App";
import RemoveIcon from "./assets/images/icon-remove.svg";
import data from "./data.json";

type propsTypeFilter = {
  filterBase: string[];
  setFilterBase: React.Dispatch<React.SetStateAction<string[]>>;
  setJobs: React.Dispatch<React.SetStateAction<jobType[]>>;
};

export default function Filter({
  filterBase,
  setFilterBase,
  setJobs,
}: propsTypeFilter) {
  function ClearFilter() {
    setFilterBase([]);
    setJobs(data);
  }
  function removeSelectedFilter(selected: string) {
    const newFilter = filterBase.filter((i) => i !== selected);
    setFilterBase(newFilter);
    const co = data.filter((arr1) => {
      if (
        newFilter.every((element) =>
          [arr1.role, arr1.level, ...arr1.tools, ...arr1.languages].includes(
            element
          )
        )
      )
        return true;
    });
    setJobs(co);
  }
  return (
    <>
      {filterBase.length > 0 && (
        <section className="flex w-3/4 justify-between m-auto gap-3 rounded items-center -translate-y-1/3 mb-6 p-4 shadow-xl">
          <div className="flex flex-wrap gap-3 ">
            {filterBase.map((f) => (
              <div key={f}>
                <span>{f} </span>
                <button className="" onClick={() => removeSelectedFilter(f)}>
                  <img src={RemoveIcon} alt="remove" />
                </button>
              </div>
            ))}
          </div>
          <div className="">
            <button onClick={ClearFilter}>Clear</button>
          </div>
        </section>
      )}
    </>
  );
}
