import App from "./App";
import GithubProvider from "./provider/GithubProvider";

import { ResetCSS } from "./global/resetCSS";

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
