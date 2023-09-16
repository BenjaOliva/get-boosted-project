export interface HomeController {
  example: string;
  onExamplePressed: () => void;
}

export interface HomeProps {
  useController?: () => HomeController;
}
