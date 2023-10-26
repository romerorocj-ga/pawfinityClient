/* eslint-disable react/prop-types */
import './PetList.css';
import PetListItem from '../PetListItem/PetListItem';

export default function PetList({ petItems, handleAddToOrder }) {
  const items = petItems.map((item) => (
    <PetListItem
      key={item._id}
      petItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  ));
  return <main className="PetList">{items}</main>;
}
