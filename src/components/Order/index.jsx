import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase/client";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import OrderItem from "../OrderItem";

const Order = () => {
  const { cart, clear } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const total = cart
    .reduce((acc, p) => (acc += p.price * p.quantity), 0)
    .toFixed(2);

  const successAlert = (id) => {
    Swal.fire({
      icon: "success",
      title: `Compra exitosa! Total: $${total}`,
      text: `El id de su compra es: ${id}`,
    }).then(() => {
      clear();
    });
  };

  const onSubmit = handleSubmit((data) => {
    const order = {
      buyer: { name: data.nombre, phone: data.telefono, email: data.correo },
      items: cart,
      total: total,
    };
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => successAlert(id, total));
  });

  return (
    <main className="main-order">
      {!cart.length ? (
        <h1>No hay una orden</h1>
      ) : (
        <>
          <section className="container-order-items">
            <h2>Total: ${total}</h2>
            {cart.map((p) => {
              return (
                <OrderItem
                  key={p.id}
                  title={p.title}
                  image={p.image}
                  quantity={p.quantity}
                  price={p.price}
                />
              );
            })}
          </section>
          <form className="container-form-order" onSubmit={onSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                {...register("nombre", {
                  required: true,
                })}
              />
            </div>

            <div>
              <label htmlFor="telefono">Telefono</label>
              <input
                type="number"
                {...register("telefono", {
                  required: true,
                })}
              />
            </div>

            <div>
              <label htmlFor="correo">Correo</label>
              <input
                type="email"
                {...register("correo", {
                  required: true,
                })}
              />
            </div>

            <button className="btn" type="submit">
              Comprar
            </button>
          </form>
        </>
      )}
    </main>
  );
};

export default Order;
