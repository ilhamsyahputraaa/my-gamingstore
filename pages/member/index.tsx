import OverviewContent from "@/components/organism/OverViewContent";
import SideBar from "@/components/organism/SideBar";

export default function Member() {
  return (
    <>
    {/* Testing */}
      <section className="overview overflow-auto">
        <SideBar activeMenu={"overview"} />
        <OverviewContent />
      </section>
    </>
  );
}
