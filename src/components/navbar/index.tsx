import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

interface User {
  name: string;
  [key: string]: any;
}

const Navbar = () => {
//   const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user from localStorage", e);
      }
    }
  }, []);

  return (
    <>
      <div className=" h-[80px] m-auto flex items-center justify-between  p-6  align-center ">
        <div>
          <img
            src="/icons/logo.svg"
            alt="Logo"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex justify-center w-[463px] gap-8">
          <h3 className="cursor-pointer">
            <a href="/">Home</a>
          </h3>
          <h3 className="cursor-pointer">
            <a href="/blog">Blog</a>
          </h3>
        </div>
        <div className="justify-end flex gap-8">
          <span
            role="img"
            aria-label="search"
            className="anticon anticon-search flex items-center cursor-pointer text-[20px]"
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="search"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
          </span>
          <span className="ant-badge mt-[5px] css-k7429z">
            <span
              role="img"
              aria-label="bell"
              className="anticon anticon-bell cursor-pointer text-[23px]"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="bell"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path>
              </svg>
            </span>
          </span>
          <span className="ant-badge mt-[5px] css-k7429z">
            <span
              role="img"
              aria-label="shopping-cart"
              className="anticon anticon-shopping-cart cursor-pointer text-[25px]"
            >
              <svg
                viewBox="0 0 1024 1024"
                focusable="false"
                data-icon="shopping-cart"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z"></path>
              </svg>
            </span>
          </span>
          {/* <Link href="">
            <AuthModal
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
            /> */}

          <button
            //   onClick={() => setModalOpen(true)}
            className="!bg-[#46A358]  flex rounded-md w-24 items-center justify-center gap-1 h-9 text-base text-white cursor-pointer"
          >
            <span
              role="img"
              aria-label="login"
              className="anticon anticon-login text-[20px]"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="login"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <defs>
                  <style></style>
                </defs>
                <path d="M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"></path>
              </svg>
            </span>
            {user ? user.name : "Login"}
          </button>
          {/* </Link> */}
        </div>
      </div>
      <hr className="border-[#46A358]  m-auto border my-[10px]" />
    </>
  );
};

export default Navbar;
