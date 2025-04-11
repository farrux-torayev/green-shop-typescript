import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const api = "https://green-shop-backend.onrender.com/api";

interface Flower {
  _id: string;
  title: string;
  price: number;
  discount_price?: number;
  main_image: string;
}

interface FlowerResponse {
  data: Flower[];
}

const fetchFlowers = async ({
  queryKey,
}: {
  queryKey: [string, string, string, string, string | number, string | number];
}): Promise<FlowerResponse> => {
  const [_key, category, sort, type, range_min, range_max] = queryKey;
  const { data } = await axios.get<FlowerResponse>(
    `${api}/flower/category/${category}?&sort=${sort}&type=${type}&access_token=64bebc1e2c6d3f056a8c85b7&range_min=${range_min}&range_max=${range_max}`
  );
  return data;
};

function MainMapping() {
  const [activeType, setActiveType] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "house-plants";
  const sort = searchParams.get("sort") || "default-sorting";
  const type = searchParams.get("type") || "all-plants";
  const range_min = searchParams.get("range_min") || "0";
  const range_max = searchParams.get("range_max") || "1000";

  const { data, isLoading, error } = useQuery({
    queryKey: ["flower", category, sort, type, range_min, range_max],
    queryFn: fetchFlowers,
  });

  const updateType = (type: string) => {
    searchParams.set("type", type);
    setSearchParams(searchParams);
    setActiveType(type);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set("sort", event.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div className=" w-[970px] mt-[30px] pl-[30px]">
      <div className="flex justify-between">
        <div className="gap-8 p-[5px] max-sm:gap-4 flex text-base font-normal cursor-pointer transition-colors">
          {["all-plants", "new-arrivals", "sale"].map((typeName) => (
            <h3
              key={typeName}
              onClick={() => updateType(typeName)}
              className={`cursor-pointer font-normal hover:text-[#46A358] h-[30px] transition-colors ${
                activeType === typeName
                  ? `text-[#46A358] border-[#46A358] border-b-2`
                  : ""
              }`}
            >
              {typeName
                .replace("-", " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </h3>
          ))}
        </div>
        <div className="mb-4">
          <label className="text-gray-600 font-medium">Sort by:</label>
          <select
            className="border rounded-md px-3 py-1 cursor-pointer ml-2"
            value={sort}
            onChange={handleSortChange}
          >
            <option value="default-sorting">Default Sorting</option>
            <option value="the-cheapest">The-Cheapest</option>
            <option value="expensive">Most Expensive</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 my-[30px]">
        {data?.data?.map((flower) => (
          <div key={flower._id}>
            <Link to={`/dashboard/card/${flower._id}`}>
              <div className="group h-[300px] bg-[#f5f5f5] flex justify-center items-center relative">
                <div className="bg-[#46A358] text-white absolute top-3 left-0 px-[5px] py-[3px]">
                  13% OFF
                </div>
                <img className="w-4/6" src={flower.main_image} alt="img" />
              </div>
              <h3 className="font-normal text-start cursor-pointer mt-[12px]">
                {flower.title}
              </h3>
              <p className="text-[#46A358] text-start font-bold">
                {flower.discount_price ? (
                  <>
                    ${flower.discount_price}
                    <span className="font-thin text-[#A5A5A5] ml-[5px] line-through">
                      ${flower.price}
                    </span>
                  </>
                ) : (
                  <>${flower.price}</>
                )}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainMapping;
