const TopCategories = ({ icon, txt, qty }) => {
  return (
    <div>
      <article className="w-full h-auto bg-gray-500/40 rounded-md p-4 hover:scale-[0.9] duration-300">
        <div className="w-full p-10 bg-blue-300/40 flex justify-center items-center rounded-md mb-2">
          <span className="text-gray-100 text-3xl">{icon}</span>
        </div>
        <p className="text-white font-medium text-lg">{txt}</p>
        <span className="text-gray-300">{qty} items</span>
      </article>
    </div>
  );
};

export default TopCategories;
