export interface DealerData {
  dealerId: string;
  templateKey: "templateOne" | "templateTwo" | "templateThree" | "templateFour";
  primaryColor: string;
  secondaryColor: string;
  logoUrl: string;
  title: string;
  description: string;
  links: {
    telegram?: string;
    whatsapp?: string;
    website?: string;
  };
}

export const fetchDealer = async (dealerId: string): Promise<DealerData> => {
  const res = await fetch(`/api/dealer/${dealerId}`);
  if (!res.ok) throw new Error("Dealer data not found");
  return res.json();
};
