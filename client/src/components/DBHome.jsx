import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api";
import { setAllProducts } from "../context/actions/productActions";

import { CChart } from "@coreui/react-chartjs";

const DBHome = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const drinks = products?.filter((item) => item.product_category === "drinks");
  const deserts = products?.filter(
    (item) => item.product_category === "deserts"
  );
  const fruits = products?.filter((item) => item.product_category === "fruits");
  const rice = products?.filter((item) => item.product_category === "rice");
  const curry = products?.filter((item) => item.product_category === "curry");
  const chinese = products?.filter(
    (item) => item.product_category === "chinese"
  );
  const bread = products?.filter((item) => item.product_category === "bread");

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);
  return (
    <div className="flex items-center justify-center flex-col pt-6 w-full ">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 h-full">
        <div className="flex items-center justify-center">
          <div className="w-460 mt-48 md:508">
            <CChart
              type="bar"
              data={{
                labels: [
                  "Drinks",
                  "Deserts",
                  "Fruits",
                  "Rice",
                  "Curry",
                  "Chinese",
                  "Bread",
                ],
                datasets: [
                  {
                    label: "Category Wise Count",
                    backgroundColor: "#f87979",
                    data: [
                      drinks?.length,
                      deserts?.length,
                      fruits?.length,
                      rice?.length,
                      curry?.length,
                      chinese?.length,
                      bread?.length,
                    ],
                  },
                ],
              }}
              // labels="months"
              // options={{
              //   plugins: {
              //     legend: {
              //       labels: {
              //         color: getStyle("--cui-body-color"),
              //       },
              //     },
              //   },
              //   scales: {
              //     x: {
              //       grid: {
              //         color: getStyle("--cui-border-color-translucent"),
              //       },
              //       ticks: {
              //         color: getStyle("--cui-body-color"),
              //       },
              //     },
              //     y: {
              //       grid: {
              //         color: getStyle("--cui-border-color-translucent"),
              //       },
              //       ticks: {
              //         color: getStyle("--cui-body-color"),
              //       },
              //     },
              //   },
              // }}
            />
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-340 md:460 mt-20">
            <CChart
              type="polarArea"
              data={{
                labels: [
                  "Orders",
                  "Delivered",
                  "Cancelled",
                  "Paid",
                  "Not Paid",
                ],
                datasets: [
                  {
                    data: [11, 16, 7, 15, 14],
                    backgroundColor: [
                      "#FF6384",
                      "#4BC0C0",
                      "#FFCE56",
                      "#fff0004",
                      "#36A2EB",
                    ],
                  },
                ],
              }}
              // options={{
              //   plugins: {
              //     legend: {
              //       labels: {
              //         color: getStyle("--cui-body-color"),
              //       },
              //     },
              //   },
              //   scales: {
              //     r: {
              //       grid: {
              //         color: getStyle("--cui-border-color"),
              //       },
              //     },
              //   },
              // }}
            />
            {/* <CChart
              type="doughnut"
              data={{
                labels: [
                  "Orders",
                  "Delivered",
                  "Cancelled",
                  "Paid",
                  "Not Paid",
                ],
                datasets: [
                  {
                    backgroundColor: [
                      "#41B883",
                      "#E46651",
                      "#00D8FF",
                      "#DD1B16",
                      "#Fff0000",
                    ],
                    data: [40, 20, 80, 10, 8],
                  },
                ],
              }}
              // options={{
              //   plugins: {
              //     legend: {
              //       labels: {
              //         color: getStyle("--cui-body-color"),
              //       },
              //     },
              //   },
              // }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBHome;
