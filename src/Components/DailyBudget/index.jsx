import formatter from "../../utils/formatter";

export function DailyBudget({ amount }) {
  return (
    <p className="text-primary-highlight font-bold text-[39px] leading-[125%] py-8 m-0 text-center">
      {formatter.format(amount)}
    </p>
  );
}
