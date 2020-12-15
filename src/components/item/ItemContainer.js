import Item from "./ItemComponent";
// import ItemDetail from "./ItemDetail";
import { connect } from "react-redux";
import { getItems, getItem  } from "../../redux/item/action";

const mapStateToProps = (state) => {
  const { items, item } = state.item;
  return {
    items: items,
    item: item
  }
}

const mapDispatchToProps = (dispatch) => ({
  getItems: (value) => dispatch(getItems(value)),
  getItem: (value) => dispatch(getItem(value))
});

const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item);

export default ItemContainer;

// const itemContainerCreator = connect(mapStateToProps, mapDispatchToProps);

// export const Item = mySpecialContainerCreator(Item);
// export const ItemDetail = mySpecialContainerCreator(ItemDetail);

// export default ItemContainer {
//   connect(mapStateToProps, mapDispatchToProps)(Item),
//   connect(mapStateToProps, mapDispatchToProps)(ItemDetail)
// }
