interface Props {
  title: string;
  rataing: string;
}

export function MovieItem({ title, rataing }: Props) {
  return (
    <div className="flex items-center gap-2 py-1">
      <span className="ml-2 w-px h-8 bg-neutral-950"/>
      <span className="font-semibold font-oswald">{title}</span>
      <div
        className="bg-[#f7b2d5] font-oswald p-1 font-medium w-8 h-8 flex
          items-center justify-center"
      >
        {rataing}
      </div>
    </div>
  );
}
