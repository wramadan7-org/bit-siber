import HighSecurity from "../assets/images/benefit1.png";
import PrivacyGuaranteed from "../assets/images/benefit2.png";
import EntryEfficiency from "../assets/images/benefit3.png";
import VenuesWithHighSecurityNeeds from "../assets/images/usability1.png";
import HighAttendaceEvents from "../assets/images/usability2.png";
import SituationsWithLimitedInternetConnection from "../assets/images/usability3.png";

export const benefitCards = [
  {
    title: "High Security",
    description:
      "With authentication done offline using SQRC, security risks are much lower as there is no need to store personal information on the server.",
    image: HighSecurity,
  },
  {
    title: "Privacy Guaranteed",
    description:
      "There is no registration or face data management on the server, reducing the risk of personal information leakage.",
    image: PrivacyGuaranteed,
  },
  {
    title: "Entry Efficiency",
    description:
      "Entry into the venue is faster and more reliable, reducing queues and improving user experience.",
    image: EntryEfficiency,
  },
];

export const usabilityCards = [
  {
    title: "Venues with High Security Needs",
    description:
      "With authentication done offline using SQRC, security risks are much lower as there is no need to store personal information on the server.",
    image: VenuesWithHighSecurityNeeds,
  },
  {
    title: "High Attendance Events",
    description:
      "There is no registration or face data management on the server, reducing the risk of personal information leakage.",
    image: HighAttendaceEvents,
  },
  {
    title: "Situations with Limited Internet Connection",
    description:
      "Venues or events that may experience internet connectivity issues, can still operate smoothly without being disrupted by network interruptions.",
    image: SituationsWithLimitedInternetConnection,
  },
];
