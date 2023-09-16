import { HomeController } from "./interfaces";

export const useHomeController = (): HomeController => {
  const onExamplePressed = () => {};

  return { example: "example", onExamplePressed };
};
