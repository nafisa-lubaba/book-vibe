

const DeliveryInfo = () => {
    return (
        <div className="">
            <div className="hero h-[60%] bg-base-200 my-10 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/3yWrXdW/download.jpg" className="rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold text-green-600">Delivery Information!</h1>
      <p className="py-6 text-3xl">We offer various shipping methods to ensure your books reach you in a timely manner:</p>
      
                <li>Standard Shipping: Estimated delivery within 5-7 business days</li>
                <li>Expedited Shipping: Estimated delivery within 2-3 business days</li>
                <li>International Shipping: Delivery times may vary depending on the destination</li>
            
            <p>Please note that delivery times may be affected by factors such as weather conditions and holidays. For any inquiries regarding your order, feel free to <a href="contact.html">contact us</a>.</p>
      <button className="btn btn-primary">Get Started</button>
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