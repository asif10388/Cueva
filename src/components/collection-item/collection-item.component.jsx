import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    // <div className="collection-item">
    //   <div
    //     className="image"
    //     style={{ backgroundImage: `url(${imageUrl})` }}
    //   ></div>
    //   <div className="collection-footer">
    //     <span className="name">
    //       {name.length > 40 ? name.substring(0, 40) + "..." : name}
    //     </span>
    //     <span className="price">{price}$</span>
    //   </div>
    //   <CustomButton onClick={() => addItem(item)} inverted>
    //     Add to cart{" "}
    //   </CustomButton>
    // </div>

    // <div class="max-w-xl mx-auto my-5 md:mx-1 bg-gray-200 shadow-lg rounded-lg overflow-hidden">
    //   <div class="px-4 py-2">
    //     <h1 class="text-gray-900 font-bold text-3xl uppercase">NIKE AIR</h1>
    //   </div>

    //   <img
    //     class="h-48 w-full object-cover mt-2"
    //     src={`${imageUrl}`}
    //     alt="NIKE AIR"
    //   />

    //   <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
    //     <h1 class="text-gray-200 font-bold text-lg">$129</h1>
    //     <button class="px-2 py-1 bg-gray-200 text-xs text-gray-900 font-semibold rounded uppercase hover:bg-gray-400 focus:bg-gray-400">
    //       Add to cart
    //     </button>
    //   </div>
    // </div>
    <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-2 border-2 border-gray-300 rounded">
      <div
        class="bg-gray-300 h-64 w-full rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      <div class="w-56 md:w-64 bg-white rounded-lg overflow-hidden">
        <h3 class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
          {name.length > 40 ? name.substring(0, 40) + "..." : name}
        </h3>

        <div class="flex items-center justify-between py-2 px-3 bg-gray-200">
          <span class="text-gray-800 font-bold ">${price}</span>
          <button
            class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700"
            onClick={() => addItem(item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
