import SideBar from "@/components/organism/SideBar";
import TransactionDetailContent from "@/components/organism/TransactionDetailContent";

export default function TransactionDetail() {
  return (
    <>
      <SideBar activeMenu={"transactions"} />
      <section className="transactions-detail overflow-auto">
        <TransactionDetailContent />
      </section>
    </>
  );
}
