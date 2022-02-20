import App from "./App";
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./provider/GithubProvider";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;
