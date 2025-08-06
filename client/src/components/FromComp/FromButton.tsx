import { CircleArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useModal } from "@/Context/ModalContext";

export const FromButton = () => {
  const { toggleOpen } = useModal();

  return (
    <Button
      onClick={toggleOpen}
      className="text-base cursor-pointer lg:text-lg"
    >
      Jetzt Buchen <CircleArrowRight />
    </Button>
  );
};
