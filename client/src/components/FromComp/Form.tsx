import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useModal } from "@/Context/ModalContext";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Calendar24 } from "@/components/FromComp/AppointmentPicker";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const FromFields = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  userEmail: z.string(),
  date: z.date(),
  time: z.string(),
});

type UserForm = z.infer<typeof FromFields>;

export const FormModal = () => {
  const { isOpen, toggleOpen } = useModal();
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string>("10:30:00");
  const [offSubmitBtn, setOffSubmitBtn] = useState<boolean>(false);

  const { register, handleSubmit, setValue } = useForm<UserForm>({
    resolver: zodResolver(FromFields),
  });

  useEffect(() => {
    if (date) setValue("date", date);
    setValue("time", time);
  }, [date, time]);

  const onSubmit: SubmitHandler<UserForm> = async (data) => {
    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      userEmail: data.userEmail,
      date: data.date,
      time: data.time,
    };

    try {
      await emailjs.send(
        "service_qz5pn6t",
        "template_jcya9fe",
        templateParams,
        "N92Zxo1JrdTPDjo9R"
      );
      setOffSubmitBtn(true);
      toast("Anfrage erfolgreich gesendet");
      setTimeout(() => {
        setOffSubmitBtn(false);
      }, 5000);
    } catch (err) {
      console.error("Fehler beim Senden:", err);
      toast("Anfrage fehlgeschlagen");
    }
  };

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-2xl mx-auto"
          >
            <Card className="relative p-5">
              <CardHeader className="mb-5 p-0">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                    Termin buchen
                  </h1>
                  <span
                    onClick={toggleOpen}
                    className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X size={24} />
                  </span>
                </div>
              </CardHeader>

              <form
                className="flex flex-col md:flex-row gap-8"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <Label>Vorname:</Label>
                    <Input
                      {...register("firstName")}
                      name="firstName"
                      placeholder="Vorname"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Nachname:</Label>
                    <Input
                      {...register("lastName")}
                      name="lastName"
                      placeholder="Nachname"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>E-Mail:</Label>
                    <Input
                      {...register("userEmail")}
                      name="userEmail"
                      placeholder="E-Mail"
                      type="email"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-between">
                  <Calendar24
                    date={date}
                    onDateChange={setDate}
                    time={time}
                    onTimeChange={setTime}
                  />
                  <Button
                    className="w-full cursor-pointer md:w-fit font-semibold mt-4"
                    type="submit"
                    disabled={offSubmitBtn}
                  >
                    Absenden
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
