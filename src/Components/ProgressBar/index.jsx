export function ProgressBar({ progress }) {
  return (
    <div className="bg-neutral-darker rounded-lg overflow-hidden w-full h-10">
      <div
        style={{ width: `${progress}%` }}
        className="bg-primary-highlight h-10 items-center flex justify-center text-neutral-darker font-bold text-base leading-[120%] transition-all duration-300 ease-in-out"
      >
        {progress}%
      </div>
    </div>
  );
}
