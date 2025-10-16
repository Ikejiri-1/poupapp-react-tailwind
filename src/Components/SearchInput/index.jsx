import { IconSearch } from "../Icons";

export function SearchInput(props) {
  return (
    <div className="flex items-center bg-neutral-header py-3 px-4 gap-4 rounded-lg">
      <IconSearch />
      <input
        type="text"
        {...props}
        className="w-full text-neutral-text text-[20px] leading-[125%]"
      />
    </div>
  );
}
