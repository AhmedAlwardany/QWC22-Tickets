import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'


const PUBLIC_KEY = "pk_test_51MKkzmJ3RAo06e3vsrMhl3F1XVvTcMx9RdpYHuEapUn0TBbYpSIRtV83N3BrcHmsTXTFNUNa3Rmbvdg6QEsI23Wm00Olbf3FL9"
const stripeTestPromise = loadStripe( PUBLIC_KEY )


export default function StripeContianer(){
    return(
        <Elements stripe={ stripeTestPromise }>
            <PaymentForm/>
        </Elements>
    )
}