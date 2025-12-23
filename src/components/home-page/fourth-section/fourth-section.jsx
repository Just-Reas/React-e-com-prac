import { SaleRoute } from "../../../routes";
import ProductComponent from "../third-section/ui/product-component/product-component";
import { useNavigate } from "react-router-dom";

const FourthSection = () => {
  const navigate = useNavigate();

  const handleSaleClick = () => {
    navigate(SaleRoute.path);
  };
  return (
    <ProductComponent saleClick={handleSaleClick}>Top Selling</ProductComponent>
  );
};

export default FourthSection;
