import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is important aggreement for you to accept</p>
    </Modal>
  );
  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}

      <p>
        In 1911, American union leaders including Samuel Gompers of the American
        Federation of Labor expressed opposition to lump sums being awarded to
        their members pursuant to a new workers compensation law, saying that
        when they received lump sums rather than periodic payments the risk of
        them squandering the money was greater.
      </p>
      <p>
        In 1911, American union leaders including Samuel Gompers of the American
        Federation of Labor expressed opposition to lump sums being awarded to
        their members pursuant to a new workers compensation law, saying that
        when they received lump sums rather than periodic payments the risk of
        them squandering the money was greater.
      </p>
      <p>
        In 1911, American union leaders including Samuel Gompers of the American
        Federation of Labor expressed opposition to lump sums being awarded to
        their members pursuant to a new workers compensation law, saying that
        when they received lump sums rather than periodic payments the risk of
        them squandering the money was greater.
      </p>
      <p>
        In 1911, American union leaders including Samuel Gompers of the American
        Federation of Labor expressed opposition to lump sums being awarded to
        their members pursuant to a new workers compensation law, saying that
        when they received lump sums rather than periodic payments the risk of
        them squandering the money was greater.
      </p>
      <p>
        In 1911, American union leaders including Samuel Gompers of the American
        Federation of Labor expressed opposition to lump sums being awarded to
        their members pursuant to a new workers compensation law, saying that
        when they received lump sums rather than periodic payments the risk of
        them squandering the money was greater.
      </p>
      <p>
        In 1911, American union leaders including Samuel Gompers of the American
        Federation of Labor expressed opposition to lump sums being awarded to
        their members pursuant to a new workers compensation law, saying that
        when they received lump sums rather than periodic payments the risk of
        them squandering the money was greater.
      </p>
      <p>
        In 1911, American union leaders including Samuel Gompers of the American
        Federation of Labor expressed opposition to lump sums being awarded to
        their members pursuant to a new workers compensation law, saying that
        when they received lump sums rather than periodic payments the risk of
        them squandering the money was greater.
      </p>
      <p>
        In 1911, American union leaders including Samuel Gompers of the American
        Federation of Labor expressed opposition to lump sums being awarded to
        their members pursuant to a new workers compensation law, saying that
        when they received lump sums rather than periodic payments the risk of
        them squandering the money was greater.
      </p>
      <p>
        In 1911, American union leaders including Samuel Gompers of the American
        Federation of Labor expressed opposition to lump sums being awarded to
        their members pursuant to a new workers compensation law, saying that
        when they received lump sums rather than periodic payments the risk of
        them squandering the money was greater.
      </p>
      <p>
        In 1911, American union leaders including Samuel Gompers of the American
        Federation of Labor expressed opposition to lump sums being awarded to
        their members pursuant to a new workers compensation law, saying that
        when they received lump sums rather than periodic payments the risk of
        them squandering the money was greater.
      </p>
      <p>
        In 1911, American union leaders including Samuel Gompers of the American
        Federation of Labor expressed opposition to lump sums being awarded to
        their members pursuant to a new workers compensation law, saying that
        when they received lump sums rather than periodic payments the risk of
        them squandering the money was greater.
      </p>
      <p>
        In 1911, American union leaders including Samuel Gompers of the American
        Federation of Labor expressed opposition to lump sums being awarded to
        their members pursuant to a new workers compensation law, saying that
        when they received lump sums rather than periodic payments the risk of
        them squandering the money was greater.
      </p>
      <p>
        In 1911, American union leaders including Samuel Gompers of the American
        Federation of Labor expressed opposition to lump sums being awarded to
        their members pursuant to a new workers compensation law, saying that
        when they received lump sums rather than periodic payments the risk of
        them squandering the money was greater.
      </p>
      <p>
        In 1911, American union leaders including Samuel Gompers of the American
        Federation of Labor expressed opposition to lump sums being awarded to
        their members pursuant to a new workers compensation law, saying that
        when they received lump sums rather than periodic payments the risk of
        them squandering the money was greater.
      </p>
      <p>
        In 1911, American union leaders including Samuel Gompers of the American
        Federation of Labor expressed opposition to lump sums being awarded to
        their members pursuant to a new workers compensation law, saying that
        when they received lump sums rather than periodic payments the risk of
        them squandering the money was greater.
      </p>
    </div>
  );
}
export default ModalPage;
