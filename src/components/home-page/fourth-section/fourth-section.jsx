import ProductComponent from "../third-section/ui/product-component/product-component";
import { useNavigate } from "react-router-dom";

const FourthSection = () => {
  const navigate = useNavigate();

  const handleSaleClick = () => {
    navigate("/sale");
  };
  return <ProductComponent saleClick={handleSaleClick}>Top Selling</ProductComponent>;
};

export default FourthSection;
