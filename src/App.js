import Carousel from "./Carousel";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-white bg-violet-700 rounded shadow-sm">Hello world!</h1>
      <main className="p-3 min-h-fit flex justify-center items-center">
        <Carousel />
      </main>
    </div>
  );
}

export default App;
