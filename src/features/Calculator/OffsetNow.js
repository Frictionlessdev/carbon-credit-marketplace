import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CheckoutButton from "../buy-sell/CheckoutButton";
import CreatePurchaseForm from "./CreatePurchaseForm";

function OffsetNow({ project, estimateId }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="offset-window">
          <Button>Offset now</Button>
        </Modal.Open>
        <Modal.Window name="offset-window">
          <CreatePurchaseForm project={project} estimateId={estimateId} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default OffsetNow;
