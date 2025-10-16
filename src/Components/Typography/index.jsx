const TAGS = {
  body: "p",
  h1: "h1",
  h2: "h2",
};

const VARIANT_CLASS = {
  body: "text-neutral-text m-0 text-base leading-[120%]",
  h1: "text-neutral-text m-0 text-[31px] leading-[120%] font-bold",
  h2: "text-neutral-text m-0",
};

export function Typography({ variant, children }) {
  const Component = TAGS[variant] || TAGS.body;
  const ClassName = VARIANT_CLASS[variant] || VARIANT_CLASS.body;

  return <Component className={ClassName}>{children}</Component>;
}
