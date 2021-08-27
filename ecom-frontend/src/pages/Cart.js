import Cart from "../components/cart/Cart";
import NavbarUser from "../components/navbar/navbarUser";


const CartPage = () => {
  return (
    <div style={{ height: "100vh" }}>
      <NavbarUser />
      <Cart />
    </div>
  );
};

export default CartPage;