import { useEffect } from "react";

export default function VisitedContainer({ visitedCuntries }) {
  try {
    useEffect(() => {
      console.log(visitedCuntries);
    }, [visitedCuntries]);
    return (
      <div className="flex flex-col justify-center">
        <h2 className="font-bold mb-2">Visited Countries</h2>
        <div>
          {visitedCuntries.length !== 0 ? (
            <div className="grid grid-cols-6 gap-2">
              {visitedCuntries.map((country, i) => {
                return (
                  <img
                    key={i}
                    src={country.flags.png}
                    className="md:h-20 lg object-cover w-full"
                  />
                );
              })}
            </div>
          ) : (
            <h2 className="mx-auto my-5 text-sm">No Visited Country</h2>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error.message);
  }
}
