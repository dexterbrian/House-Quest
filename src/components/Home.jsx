import viteLogo from "/vite.svg";
import { appName } from "../global_vars";
import Search from "./Search";

function Home() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>{appName}</h1>
      <h2>Curated Rental Houses in only a few Clicks</h2>
      <p className="read-the-docs">
        Why waste hours walking around neighbourhoods, searching for the perfect
        house when you can simply click Find a house on {appName}?
      </p>
      <div className="card">
        <Search />
      </div>
    </>
  );
}

export default Home;
