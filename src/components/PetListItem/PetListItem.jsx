/* eslint-disable react/prop-types */
import './PetListItem.css';

export default function PetListItem({ petItem, handleAddToOrder }) {
  return (
    <div className="PetListItem">
      <div className="emoji flex-ctr-ctr">{petItem.emoji}</div>
      <div className="name">{petItem.name}</div>
      <div className="buy">
        <span>${petItem.price.toFixed(2)}</span>
        <button
          className="btn-sm"
          onClick={() => handleAddToOrder(petItem._id)}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
