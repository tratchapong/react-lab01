import Carousel from "./Carousel";

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold underline text-white bg-violet-400 rounded shadow-sm w-4/5 mx-auto text-center">Carousel</h1>
      <main className="p-3 min-h-fit flex justify-center items-center">
        <Carousel />
      </main>
    </div>
  );
}

export default App;
