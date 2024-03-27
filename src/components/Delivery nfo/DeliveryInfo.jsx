

const DeliveryInfo = () => {
  return (
    <div className="mx-auto w-[90%]">
      <div className="hero bg-pink-100 mt-5 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse flex justify-center items-center">
          <img src="https://i.ibb.co/9pQXPYc/delivary.png" className="rounded-lg shadow-2xl w-[40%]" />
          <div className="">
            <h1 className="text-4xl font-bold text-green-600 pt-4">Delivery Information!</h1>
            <p className="py-4 text-xl">We offer various shipping methods to ensure your books reach you in a timely manner:</p>

            <div className="py-2 my-2">
              <li className="text-xl text-gray-500"><span className="text-green-500 font-bold">Standard Shipping:</span> Estimated delivery within 5-7 business days</li>
              <li className="text-xl text-gray-500"><span className="text-green-500 font-bold">Expedited Shipping:</span> Estimated delivery within 2-3 business days</li>
              <li className="text-xl text-gray-500"><span className="text-green-500 font-bold">International Shipping:</span> Delivery times may vary depending on the destination</li>
            </div>

            <p className="text-xl">Please note that delivery times may be affected by factors such as weather conditions and holidays. For any inquiries regarding your order, feel free to <a href="contact.html">contact us</a>.</p>
            <button className="btn bg-green-400 text-white text-xl mt-4 ">Contact Now</button>
          </div>
        </div>
      </div>


      {/* <h2 className="text-4xl text-green-400">Delivery Information</h2>
            <p>We offer various shipping methods to ensure your books reach you in a timely manner:</p>
            <ul>
                <li>Standard Shipping: Estimated delivery within 5-7 business days</li>
                <li>Expedited Shipping: Estimated delivery within 2-3 business days</li>
                <li>International Shipping: Delivery times may vary depending on the destination</li>
            </ul>
            <p>Please note that delivery times may be affected by factors such as weather conditions and holidays. For any inquiries regarding your order, feel free to <a href="contact.html">contact us</a>.</p> */}


    </div>
  );
};

export default DeliveryInfo;