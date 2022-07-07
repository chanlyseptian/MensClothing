import React from "react";
import { AiFillStar } from "react-icons/ai";
import intToRupiah from "../helpers/rupiah";
import base_url from "../helpers/base_url";
import { oneStar, twoStars, threeStars,fourStars, fiveStars} from "../helpers/stars"
import { useNavigate } from "react-router-dom";

const ProductCardUser = (props) => {
  const data = props.product;
  const url = base_url;
  const navigate = useNavigate();

  

  return (
    <>
      <div className="w-72 3xl:w-[350px] h-auto  ">
        <img
          className="w-full h-auto  cursor-pointer"
          alt=""
          src={`${url}/images/${data.ProductImages[0].filename}`}
          onClick={() => navigate(`/cms/details/${data.id}`)}
        />
        <div className="p-2 flex justify-between">
          <div>
            <p className="text-cyan-800 text-start">{data.name}</p>
            <div>
              <p className="font-bold text-cyan-900 text-start">Rp. {intToRupiah(data.price)} </p>
 
            </div>
            <div className="flex grid-cols-5 mt-1 text-start">
              <div className="flex col-span-2 w-12 text-start">
                <div className="text-amber-500 text-lg flex text-start">
                  {data.rating === 1
                    ? oneStar
                    : data.rating === 2
                    ? twoStars
                    : data.rating === 3
                    ? threeStars
                    : data.rating === 4
                    ? fourStars
                    : fiveStars}
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-cyan-800">
            <p className="text-[12px] capitalize text-end">{data.category}</p>
            <p className="font-semibold text-end">Sold: {data.totalSold}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardUser;
