import React from "react";
import { useDealer } from "@/contexts/useDealer";

// templates
import { TemplateOne } from "@/templates/TemplateOne";
import { TemplateTwo } from "@/templates/TemplateTwo";
import { TemplateThree } from "@/templates/TemplateThree";
import { TemplateFour } from "@/templates/TemplateFour";

const templates = {
  templateOne: TemplateOne,
  templateTwo: TemplateTwo,
  templateThree: TemplateThree,
  templateFour: TemplateFour,
};

export const IndexPage: React.FC = () => {
  const { dealer } = useDealer();
  if (!dealer) return null;

  const TemplateComponent = templates[dealer.templateKey] || TemplateOne;

  return <TemplateComponent {...dealer} />;
};
