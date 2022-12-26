import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { Product, selectTotal } from "../slice/basketSlice";
import { TbMoodEmpty } from "react-icons/tb";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
//@ts-ignore
const stripePromise = loadStripe(process.env.stripe_public_key);
function checkout() {
  const [darkMood, setDarkMood] = useState(false);
  const items: Product[] = useSelector(
    (state: RootState) => state.basket.items
  );
  const total = useSelector(selectTotal);
  const { data: session } = useSession();
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("api/create-checkout-session", {
      items,
      email: session?.user?.email,
    });
    //redirect customer
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result?.error) {
      alert(result?.error.message);
    }
  };
  return (
    <div className={darkMood ? "dark bg-gray-100" : "bg-gray-100"}>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left side */}
        <div>
          <Image
            src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
            alt="some amazon sale"
            width={1020}
            height={250}
            style={{ objectFit: "contain" }}
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            {items.length === 0 ? (
              <h1 className="text-3xl border-b pb-4">
                You have no products <TbMoodEmpty className="inline" />
              </h1>
            ) : (
              <h1 className="text-3xl border-b pb-4">Shopping Basket</h1>
            )}

            {items.map((item: Product, i: number) => (
              <CheckoutProduct key={i} item={item} />
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="bg-white">
          {items.length > 0 && (
            <>
              <h2>
                (Subtotal({items.length}) items):
                <span className="font-bold">${total.toFixed(2)}</span>
              </h2>
              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={`mt-2 ${
                  !session
                    ? "px-2 py-1 bg-gradient-to-t from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                    : "bg-main-theme text-sm sm:text-md text-white-text font-bold rounded py-1  w-full active:bg-sky-600 hover:bg-secondary-theme transition-all"
                }`}
              >
                {!session ? "Login to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default checkout;
