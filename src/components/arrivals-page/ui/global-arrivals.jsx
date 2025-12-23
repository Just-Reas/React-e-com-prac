import GlobalItem from "../../sale-page/ui/global-item/global-item";
import styles from "./global-arrivals.module.scss";

const globalArrivalsMockData = [
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
  {
    Name: "T-shirt with Tape Details",
    Rating: "5.0",
    Price: "$120",
    OldPrice: "$150",
    Discount: "-25%",
  },
];

const GlobalArrivals = () => {
  return (
    <div className={styles.productsInner}>
      <div className="containerSup">
        <div className={styles.productsBox}>
          {globalArrivalsMockData.map((item) => (
            <GlobalItem
              Name={item.Name}
              Rating={item.Rating}
              Price={item.Price}
              OldPrice={item.OldPrice}
              Discount={item.Discount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalArrivals;
