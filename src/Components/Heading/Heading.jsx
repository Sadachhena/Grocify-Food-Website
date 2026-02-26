export default function Heading({ highlight, text }) {
  return (
    <div className="w-fit mx-auto">
      <h2 className="md:text-5xl text-[30px] font-bold">
        <span className="text-orange-500">{highlight} </span>
        {text}
      </h2>
      <div className="w-[90px] md:w-[140px] mt-5 bg-orange-400 h-1 ml-auto"></div>
    </div>
  );
}