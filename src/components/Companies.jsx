import { BiBuilding } from "react-icons/bi";

const companies = [
  {
    title: "شريكنا في التطوير العقاري",
    description:
      "   شركة طيبة الخير للاستثمار العقاري هي اكبر شركة في مجال الاستثمار العقاري في اللملكة العربية السعودية.",
    icon: <BiBuilding />,
  },

  {
    title: "شريكنا في التطوير العقاري",
    description:
    "   شركة طيبة الخير للاستثمار العقاري هي اكبر شركة في مجال الاستثمار العقاري في اللملكة العربية السعودية.",
    icon: <BiBuilding />,
  },
  {
    title: "شريكنا في التطوير العقاري",
    description:
      "شركة السليمان العقارية إحدى الشركات الرائدة في مجال التطوير العقاري بخبرة واسعة تمتد لأكثر من 22 عاماً .",
    icon: <BiBuilding />,
  },
  {
    title: "شريكنا في التطوير العقاري",
    description:
    "   شركة طيبة الخير للاستثمار العقاري هي اكبر شركة في مجال الاستثمار العقاري في اللملكة العربية السعودية.",
    icon: <BiBuilding />,
  },
];
const Companies = () => {
  return (
    <div className="px-64 bg-primary/5 py-12" id="companies">
      <h1 className="mb-12 text-2xl font-bold">الشركات الشقيقة</h1>
      <ul className="grid grid-cols-6 gap-20">
        {companies.map((company) => (
          <li className="col-span-3 flex_between">
            <div className="text-8xl ml-2">{company.icon}</div>
            <div className="flex_between flex-col !items-start">
              <span className="font-bold mb-2">{company.title}</span>
              <span>{company.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Companies;
