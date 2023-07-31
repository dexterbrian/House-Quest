import viteLogo from "/vite.svg";
import { appName } from "../global_vars";

function Home() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Curated Rental Houses in only a few Clicks</h1>
      <p className="read-the-docs">
        Why waste hours walking around neighbourhoods, searching for a perfect
        house when you can simply click Find a house on {appName}?
      </p>
      <div className="card">
        <button>Find a house</button>
      </div>
    </>
  );
}

export default Home;
