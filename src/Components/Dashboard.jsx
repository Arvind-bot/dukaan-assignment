import PaymentsSection from "./PaymentsSection";
import SideNavbar from "./SideNavbar";

const Dashboard = () => {
  return (
    <div className="flex">
      <nav className="w-[22.4rem]">
        <SideNavbar />
      </nav>
      <main className="grow">
        <PaymentsSection />
      </main>
    </div>
  )
}

export default Dashboard;