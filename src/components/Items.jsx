// eslint-disable-next-line react/prop-types
const Items = ({ qty, span, txt }) => {
  return (
    <article className="flex flex-col bg-gray-900 w-full h-36 rounded-xl text-center justify-center shadow-xl shadow-gray-800 space-y-1 duration-500 hover:scale-[.9] ">
      <span className="text-blue-600 text-2xl ">{qty}</span>
      <span className="text-gray-500 ">{span}</span>
      <span className="text-gray-300 text-sm  font-medium">{txt}</span>
    </article>
  );
};

export default Items;
