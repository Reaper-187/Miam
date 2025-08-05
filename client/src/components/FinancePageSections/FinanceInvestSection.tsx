import {
  Brain,
  ChartLine,
  House,
  ShieldPlus,
  Sprout,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";

type InvestAdvantages = {
  icons: LucideIcon;
  title: string;
};

const inverstData: InvestAdvantages[] = [
  {
    icons: Sprout,
    title: "Innovative investmentstrategien",
  },
  {
    icons: ShieldPlus,
    title: "Sichere Altersvorsorge",
  },
  {
    icons: Brain,
    title: "Intelligente Vermögensplanung",
  },
  {
    icons: TriangleAlert,
    title: "Effizientes Risiko-management",
  },
  {
    icons: House,
    title: "Clevere Immobilien-finanzierung",
  },
  {
    icons: ChartLine,
    title: "Ganzheitliche Finanzanalyse",
  },
];

export const FinanceInvestSection = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10 p-10 md:grid-cols-3">
      {inverstData.map((investOptions, i) => (
        <div key={i} className="flex items-center gap-4">
          <investOptions.icons size={40} />
          <p className="text-xl font-semibold">{investOptions.title}</p>
        </div>
      ))}

      <p className="text-center md:text-start md:text-xl">
        Von der Vermögensplanung bis zu Altersvorsorge - deine Ziele sind unser
        Kompass.
      </p>
    </div>
  );
};
