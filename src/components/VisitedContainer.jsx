export default function VisitedContainer({
  visitedCuntries,
  removeVisitedCountryHandler,
}) {
  try {
    return (
      <div className="flex flex-col justify-center">
        <h2 className=" mb-2 mx-auto">Visited Countries</h2>
        <div className="w-full">
          {visitedCuntries.length !== 0 ? (
            <div className="grid grid-cols-6 gap-2">
              {visitedCuntries.map((country, i) => {
                return (
                  <img
                    key={i}
                    src={country.flags.png}
                    title="Remove visited to unVisited"
                    onClick={() => removeVisitedCountryHandler(country)}
                    className="md:h-20 lg object-cover w-full cursor-pointer"
                  />
                );
              })}
            </div>
          ) : (
            <h2 className="mx-auto my-5 text-sm text-center">
              No Visited Country
            </h2>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error.message);
  }
}
