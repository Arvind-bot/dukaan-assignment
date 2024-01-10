import PaymentsBody from "./PaymentsBody";
import PaymentsHeader from "./PaymentsHeader";

const PaymentsSection = () => {
  return (
    <>
      <PaymentsHeader/>
      <div className="m-[3.2rem]">
        <PaymentsBody />
      </div>
    </>
  );
}

export default PaymentsSection;