//sk_test_gYxTBgWKGD2CRiqT7kS1DCY700udMEBChB
// Guitar: price_1Lz3lIKEEIxhRDJ8gj9zg5B1
// Pen: price_1Lz3mNKEEIxhRDJ8DskBEWMs
// Watch: price_1Lz3n7KEEIxhRDJ8Nvp1ButM
const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_gYxTBgWKGD2CRiqT7kS1DCY700udMEBChB');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));