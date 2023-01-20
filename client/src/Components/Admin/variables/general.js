// Assets
import avatar1 from "../../../assets/img/avatars/avatar1.png";
import avatar2 from "../../../assets/img/avatars/avatar2.jpg";
import avatar3 from "../../../assets/img/avatars/avatar3.jpg";
import avatar4 from "../../../assets/img/avatars/avatar4.jpg";
import avatar5 from "../../../assets/img/avatars/avatar5.jpg";
import mac1 from "../../../assets/img/avatars/mac1.jpg";
import iphone2 from "../../../assets/img/avatars/iphone2.jpg";
import ipad3 from "../../../assets/img/avatars/ipad3.jpg";
import watch4 from "../../../assets/img/avatars/watch4.jpg";
import iphone5 from "../../../assets/img/avatars/iphone5.jpg";
// Custom icons
import { AiOutlineExclamation } from "react-icons/ai";
import {
  FaArrowDown,
  FaArrowUp,
  FaFilePdf,

} from "react-icons/fa";


export const ORDERTableData = [
  {
    logo: mac1,
    name: "Apple MacBook Pro",
    domain: "Mackbook",
    status: "IN",
    date: "799$",
    color:"#48bb78",
  },
  {
    logo: iphone2,
    name: "Iphone 13 pro",
    domain: "Iphone",
    status: "IN",
    date: "499$",
    color:"#48bb78",
  },
  {
    logo: ipad3,
    name: "Ipad 10th Gen",
    domain: "Ipad",
    status: "IN",
    date: "499$",
    color:"#48bb78",
  },
  {
    logo: watch4,
    name: "Apple Watch SE",
    domain: "Watch",
    status: "IN",
    date: "499$",
    color:"#48bb78",
  },
  {
    logo: iphone5,
    name: "Iphone 13 pro max",
    domain: "Iphone",
    status: "OUT",
    color:"#48bb78",
    date: "499$",
  },
]


export const tablesTableData = [
  {
    logo: avatar1,
    name: "Prajwal Jaiswal",
    email: "Prajwal@BlueApple.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Online",
    date: "14/06/21",
  },
  {
    logo: avatar2,
    name: "Arpit Mishra",
    email: "Arpit@BlueApple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Online",
    date: "10/02/00",
  },
  {
    logo: avatar3,
    name: "Vicky Kumar",
    email: "Vicky@BlueApple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Online",
    date: "07/06/21",
  },
  {
    logo: avatar4,
    name: "Noor",
    email: "noor@BlueApple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Online",
    date: "14/11/21",
  },
  {
    logo: avatar5,
    name: "shivkant",
    email: "shivkant@BlueApple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Online",
    date: "21/01/21",
  },
  
];

export const tablesProjectData = [
  {
    logo: avatar1,
    name: "Prajwal",
    budget: "Nice",
    status: "The Best",
    progression: 100,
  },
  {
    logo: avatar2,
    name: "Arpit",
    budget: "Majboori",
    status: "The Best",
    progression: 100,
  },
  {
    logo: avatar3,
    name: "Vicky",
    budget: "Great",
    status: "The Best",
    progression: 100,
  },
  {
    logo: avatar4,
    name: "Noor",
    budget: "Responsive",
    status: "Average",
    progression: 80,
  },
  {
    logo: avatar5,
    name: "Shivkant",
    budget: "Good UI",
    status: "Good",
    progression: 95,
  },
];

export const invoicesData = [
  {
    date: "March, 01, 2020",
    code: "#MS-415646",
    price: "$180",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "February, 10, 2020",
    code: "#RV-126749",
    price: "$250",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "April, 05, 2020",
    code: "#FB-212562",
    price: "$560",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "June, 25, 2019",
    code: "#QW-103578",
    price: "$120",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "March, 01, 2019",
    code: "#AR-803481",
    price: "$300",
    logo: FaFilePdf,
    format: "PDF",
  },
];

export const billingData = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    number: "FRB1235476",
  },
  {
    name: "Lucas Harper",
    company: "Stone Tech Zone",
    email: "lucas@stone-tech.com",
    number: "FRB1235476",
  },
  {
    name: "Ethan James",
    company: "Fiber Notion",
    email: "ethan@fiber.com",
    number: "FRB1235476",
  },
];

export const newestTransactions = [
  {
    name: "Netflix",
    date: "27 March 2021, at 12:30 PM",
    price: "- $2,500",
    logo: FaArrowDown,
  },
  {
    name: "Apple",
    date: "27 March 2021, at 12:30 PM",
    price: "+ $2,500",
    logo: FaArrowUp,
  },
];

export const olderTransactions = [
  {
    name: "Stripe",
    date: "26 March 2021, at 13:45 PM",
    price: "+ $800",
    logo: FaArrowUp,
  },
  {
    name: "HubSpot",
    date: "26 March 2021, at 12:30 PM",
    price: "+ $1,700",
    logo: FaArrowUp,
  },
  {
    name: "Webflow",
    date: "26 March 2021, at 05:00 PM",
    price: "Pending",
    logo: AiOutlineExclamation,
  },
  {
    name: "Microsoft",
    date: "25 March 2021, at 16:30 PM",
    price: "- $987",
    logo: FaArrowDown,
  },
];
