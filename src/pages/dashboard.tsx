import Header from "../components/DashboardHeader";

import { type NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <div className="">
      <Header />
      <main>
        <h1 className="mt-12 text-center text-5xl font-black">Dashboard</h1>
      </main>
    </div>
  );
};

export default Dashboard;
