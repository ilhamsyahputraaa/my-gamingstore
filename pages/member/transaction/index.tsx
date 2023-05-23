import SideBar from "@/components/organism/SideBar";
import TransactionContent from "@/components/organism/TransactionContent";

export default function Transaction() {
    return (
      
        <>
            <SideBar activeMenu={"transactions"} />
            <TransactionContent />
        </>
  )
}
