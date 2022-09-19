import React, { useEffect, useState } from "react";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

 

export default function Flutter() {
  
  const [mount, setMount] = useState();
  const config = {
    public_key: 'FLWPUBK-540baa5fcb11489599856596ad198f06-X',
    tx_ref: Date.now(),
    amount: mount,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="Button">
      <p>Accounts</p>
         
            <input
              type="text" 
              value={mount}
              onChange={(e) => setMount(e.target.value)}  required /> <br/>    
      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Payment with React hooks
      </button>
      
    </div>
  );
}

