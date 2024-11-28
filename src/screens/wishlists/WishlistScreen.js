import React, { useEffect } from "react";
import WishlistComponent from "../../components/wishlists/WishlistComponent";

const WishlistScreen = () => {
  useEffect(() => {
    document.title = "Wishlists";
  }, []);
  return (
    <div>
      <WishlistComponent />
    </div>
  );
};

export default WishlistScreen;
