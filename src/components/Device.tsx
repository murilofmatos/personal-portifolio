function Device({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:max-w-7xl w-full bg-black rounded-4xl h-full relative ">
      <Buttons />
      <Camera />
      <div className="w-full h-full p-8 border border-gray-400 rounded-4xl bg-black z-20">
        <div className="w-full h-full bg-[url('/wallpaper.png')] bg-cover bg-center rounded-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <>
      <div className="flex absolute -top-[3px] gap-4 left-1/12">
        <div className="w-10 h-1 bg-gradient-to-r from-gray-600 from-10% via-gray-400 to-gray-600 to-90%  rounded-t-lg border border-gray-400" />
        <div className="w-10 h-1 bg-gradient-to-r from-gray-600 from-10% via-gray-400 to-gray-600 to-90%  rounded-t-lg border border-gray-400" />
      </div>
      <div className="w-1 h-12 bg-gray-400 rounded-l-lg absolute -left-1 top-1/12 bg-gradient-to-t from-gray-600 from-10% via-gray-400 to-gray-600 to-90% border border-gray-400" />
    </>
  );
}

function Camera() {
  return (
    <div className="absolute w-5 h-5 rounded-full z-30 left-1/2 -translate-x-1/2 -translate-y-1/2 top-4 bg-gray-900 p-[1px] flex items-center justify-center">
      <div className="w-full h-full border-1 border-black/30 rounded-full p-1">
        <div className="w-full h-full rounded-full bg-slate-700 border-t-gray-500 border border-l-gray-500 border-b-gray-700 border-r-gray-700"></div>
      </div>
    </div>
  );
}

export default Device;
