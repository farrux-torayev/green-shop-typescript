const Footer = () => {
  return (
    <>
      <div className="flex">
        <div className="border-r m-[23px] pr-[23px] border-[#46A358] w-[200px] h-[210px] ">
          <img
            src="/icons/footer_flower_1.svg"
            alt="gul"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
          <h3 className="font-bold text-base mt-[17px] mb-[9px]">
            Garden Care
          </h3>
          <p className="font-light text-xs">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="border-r  m-[23px] pr-[23px] border-[#46A358] w-[200px] h-[210px] ">
          <img
            src="/icons/footer_flower_2.svg"
            alt="gul"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
          <h3 className="font-bold text-base mt-[17px] mb-[9px]">
            Garden Care
          </h3>
          <p className="font-light text-xs">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className=" w-[200px]  m-[23px] pr-[23px] h-[210px] ">
          <img
            src="/icons/footer_flower_1.svg"
            alt="gul"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
          <h3 className="font-bold text-base mt-[17px] mb-[9px]">
            Garden Care
          </h3>
          <p className="font-light text-xs">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="p-[23px] w-[473.68px]">
          <h3 className="font-bold text-base mt-[17px] mb-[9px]">
            Would you like to join newsletters?
          </h3>
          <div className="flex w-full h-[40px] mb-[17px]">
            <input
              className="h-full w-4/5 rounded-s-xl pl-[11px] placeholder:font-light"
              placeholder="enter your email address..."
            />
            <button className="bg-[#46A358] flex  items-center justify-center gap-1 text-base text-white h-full w-1/5 rounded-none rounded-e-xl">
              JOIN
            </button>
          </div>
          <p className="font-light text-xs leading-6">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-between bg-[#46A3581A] p-[23px] max-lg:flex-col max-lg:items-center gap-2.5">
        <div>
          <img
            src="/icons/logo.svg"
            alt="gul"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex gap-2.5 items-center">
          <img
            src="/icons/location.svg"
            alt="location"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="w-5 h-5"
          />
          <p className="text-sm">
            70 West Buckingham Ave. <br /> Farmingdale, NY 11735
          </p>
        </div>
        <div className="flex gap-2.5 items-center">
          <img
            src="/icons/email.svg"
            alt="email"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="w-5 h-5"
          />
          <p className="text-sm">contact@greenshop.com</p>
        </div>
        <div className="flex gap-2.5 items-center">
          <img
            src="/icons/call.svg"
            alt="call"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="w-5 h-5"
          />
          <p className="text-sm">+88 01911 717 490</p>
        </div>
      </div>
      <div className="flex justify-between p-[23px] max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-1 flex-col gap-2.5">
          <h3 className="font-bold">My Account</h3>
          <p className="font-light cursor-pointer">My Account</p>
          <p className="font-light cursor-pointer">Address</p>
          <p className="font-light cursor-pointer">Wishlist</p>
        </div>
        <div className="flex-1 flex flex-col gap-2.5">
          <h3 className="font-bold">Categories</h3>
          <p className="font-light cursor-pointer">House Plants</p>
          <p className="font-light cursor-pointer">Potter Plants</p>
          <p className="font-light cursor-pointer">Seeds</p>
          <p className="font-light cursor-pointer">Small Plants</p>
          <p className="font-light cursor-pointer">Accessories</p>
        </div>
        <div className="flex-1">
          <h3 className="font-bold">Social Media</h3>
          <div className="flex gap-3 mt-[20px] ">
            <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src="/icons/facebook.svg"
                alt="facebook"
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
                className="w-5 h-5"
              />
            </div>
            <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src="/icons/instagram.svg"
                alt="instagram"
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
                className="w-5 h-5"
              />
            </div>
            <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src="/icons/twitter.svg"
                alt="twitter"
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
                className="w-5 h-5"
              />
            </div>
            <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src="/icons/linkedin.svg"
                alt="linkedin"
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
                className="w-5 h-5"
              />
            </div>
            <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src="/icons/union.svg"
                alt="union"
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
                className="w-5 h-5"
              />
            </div>
          </div>
          <h3 className="font-bold mt-[33px]">We accept</h3>
          <div className="flex gap-3 mt-[20px]">
            <img
              src="/icons/paypal.svg"
              alt="paypal"
              width={100}
              height={100}
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <img
              src="/icons/mastercard (1).svg"
              alt="mastercard"
              width={100}
              height={100}
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <img
              src="/icons/visa (1).svg"
              alt="visa"
              width={100}
              height={100}
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <img
              src="/icons/amex.svg"
              alt="amex"
              width={100}
              height={100}
              className="w-[30px] h-[30px] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <h3 className="text-center p-[10px] font-normal text-sm">
        © 2023 GreenShop. All Rights Reserved.
      </h3>
    </>
  );
};
export default Footer;
