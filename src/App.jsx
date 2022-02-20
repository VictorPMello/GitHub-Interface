import Layout from "./components/layout/Layout";
import Profile from "./components/profile/Profile";
import Repositories from "./components/repositories/Repositories";

import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./provider/GithubProvider";

const App = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
};

export default App;
