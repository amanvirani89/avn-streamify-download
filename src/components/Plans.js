import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import db from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import '../css/Plans.css';

function Plans() {
  const [product, setProduct] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then(function (querySnapshot) {
        const products = {};
        querySnapshot.forEach(async function (pDoc) {
          products[pDoc.id] = pDoc.data();
          console.log(pDoc.id, ' => ', pDoc.data());
          const priceSnap = await pDoc.ref.collection('prices').get();
          priceSnap.docs.forEach((doc) => {
            products[pDoc.id].prices = {
              priceId: doc.id,
              priceData: doc.data(),
            };
            console.log(doc.id, ' => ', doc.data());
          });
        });
        setProduct(products);
      });
  }, []);

  useEffect(() => {
    db.collection('customers')
      .doc(user.uid)
      .collection('subscriptions')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start: subscription.data().current_period_start
              .seconds,
          });
        });
      });
  });

  const loadingCheckout = async (priceId) => {
    const docRef = await db
      .collection('customers')
      .doc(user.uid)
      .collection('checkout_sessions')
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
    // Wait for the CheckoutSession to get attached by the extension
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the Firebase console.
        alert(`An error occured: ${error.message}`);
      }
      if (sessionId) {
        // We have a session, let's redirect to Checkout
        // Init Stripe
        const stripe = await loadStripe(
          'pk_test_51IK8p6ITyOPcVjHzbdbij1qzyBb6mjqWpsMy7GI5DFLThCqrwDFRlFbZcH9QKkx5rOY7OgG1WRaIwtdVcZchQwCs00dvCJqy4N'
        );

        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="plans">
      <br />
      {subscription && (
        <p>
          Renewal Date :
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(product).map(([pId, pData]) => {
        const isCurrentPackage = pData.name
          ?.toLowerCase()
          .includes(subscription?.role);

        return (
          <div
            key={pId}
            className={`${
              isCurrentPackage && 'plans-disabled'
            } plans-available`}
          >
            <div className="plans-info">
              <h5>{pData.name}</h5>
              <h6>{pData.description}</h6>
            </div>
            <button
              onClick={() =>
                !isCurrentPackage && loadingCheckout(pData.prices.priceId)
              }
            >
              {isCurrentPackage ? 'Current Package' : 'Subscribe'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
