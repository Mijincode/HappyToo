import ConsultingIcon from "../assets/icon1.png";
import PromotionIcon from "../assets/icon2.png";
import EcommerceIcon from "../assets/icon3.png";
import CustomerIcon from "../assets/icon4.png";

const services = {
  Service1: {
    title: "Scientific Consulting for Success",
    icon: ConsultingIcon,
    lists: [
      "Define core company values",
      "Identify key differentiators",
      "Analyze current customer base",
      "Develop strategies for customer acquisition",
    ],
  },
  Service2: {
    title: "Revenue Growth",
    icon: PromotionIcon,
    lists: [
      "Implement marketing strategies to increase sales",
      "Online targeted marketing based on acquisition strategy",
      "Performance analysis and optimization",
    ],
  },
  Service3: {
    title: "eCommerce Platform Sales",
    icon: EcommerceIcon,
    lists: [
      "eCommerce platform management",
      "Product/service sales outsourcing",
      "Direct sales of clients products or services through our platform",
    ],
  },
  Service4: {
    title: "Customer Experience Optimization",
    icon: CustomerIcon,
    lists: [
      "Map and optimize customer journeys",
      "Develop loyalty and retention strategies",
      "Gather and analyze customer feedback to inform decisions",
    ],
  },
};

export default services;
