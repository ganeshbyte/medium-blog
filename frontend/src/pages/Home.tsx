import bannerImage from "../assets/banner.jpg";

export const Home = () => {
  return (
    <div className="min-h-screen p-6">
      <header className="mb-8">
        <h1 className="text-8xl font-bold text-center text-gray-800 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          READERS ARE LEADERS
        </h1>
        <p className="text-center text-xl text-gray-600 mt-4">
          Dive into the world of books and transform your thoughts, one page at
          a time.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row w-full h-auto bg-white shadow-lg rounded-lg p-6 gap-6">
        {/* Quote Section */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <blockquote className="italic text-gray-700 text-lg leading-relaxed border-l-4 border-gray-800 pl-4">
            "A reader lives a thousand lives before he dies . . . The man who
            never reads lives only one."
          </blockquote>
          <p className="text-right mt-2 text-gray-500">― George R.R. Martin</p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center w-1/4">
          <img
            src={bannerImage}
            alt="Books"
            className="rounded-lg shadow-md w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};
