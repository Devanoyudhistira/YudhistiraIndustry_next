export default async function purchase(e,id,quantity,namapembeli,emailpembeli,nomorpembeli) {
  e.preventDefault();
  const transaction = await fetch("api/purchase/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      produk: name,
      harga: price,
      quantity: 1,
      id: id,
      namapembeli: namapembeli,
      emailpembeli: emailpembeli,
      nomorpembeli: nomorpembeli,
    }),
  });
  const token = await transaction.json();
  console.log(token);
  window.snap.pay(token, {
    onSuccess: function (res) {
      console.log(res);
    },
    onPending: function (res) {
      console.log(res);
    },
    onError: function (res) {
      console.log(res);
    },
    onClose: function (res) {
      console.log(res);
    },
  });
  const responsepurchase = await fetch(
    `https://api.sandbox.midtrans.com/v2/${token}/status`,
    {
      headers: {
        Authorization: "Basic " + btoa(process.env.NEXT_MIDTRANS_SERVER + ":"),
      },
    },
  );
}
