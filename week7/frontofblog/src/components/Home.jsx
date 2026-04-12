import { pageWrapper } from "../styles/common";

function Home() {
  return (
    <div className={pageWrapper}>
      <div className="max-w-2xl mx-auto text-center bg-white p-10 rounded-3xl shadow-sm border border-[#e8e8ed]">
        
        <h1 className="text-4xl font-semibold text-[#1d1d1f] mb-4">
          Welcome to the Blog App
        </h1>

        <p className="text-[#6e6e73] text-lg mb-6 leading-relaxed">
          A space designed for sharing ideas, discovering perspectives, and building 
          meaningful content. Readers can explore articles, authors can publish and manage 
          their work, and administrators ensure everything runs smoothly.
        </p>

        <p className="text-[#6e6e73] text-sm">
          Begin your journey by reading, writing, and contributing.
        </p>

      </div>
    </div>
  );
}

export default Home;