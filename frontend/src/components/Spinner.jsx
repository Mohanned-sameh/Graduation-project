function Spinner() {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 z-[5000] flex justify-center items-center">
      <div className="w-[64px] h-[64px] border-8 border-solid border-y-black border-x-gray-400 border-transparent rounded-full"></div>
    </div>
  );
}

export default Spinner;
