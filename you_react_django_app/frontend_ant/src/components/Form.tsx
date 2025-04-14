import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CustomFormProps {
  route: string;
  method: "login";
}

function CustomForm({ route, method }: CustomFormProps) {
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (data: { username: string; password: string }) => {
    setLoading(true);

    try {
      const res = await api.post(route, data);
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <img 
                            src="/neteng_portal_fiserv_logo.png" 
                            alt="NetEng Portal Fiserv Logo" 
                            style={{ width: '90px', height: 'auto', alignItems: 'center', display: 'block', margin: '50px' }}
                        />
      <Dialog open={modalIsOpen} onOpenChange={setModalIsOpen}>
        <DialogTrigger asChild>
          <button variant="outline" onClick={() => setModalIsOpen(true)}>
            {name}
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription>
              Please enter your username and password.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        className="form-input"
                        type="text"
                        placeholder="Username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        className="form-input"
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {loading && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <LoadingIndicator />
                </div>
              )}
              <DialogFooter>
                <button className="form-button" type="submit">
                  {name}
                </button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <div style={{ marginTop: '5px' }}>
        {method === "login" ? (
          <button className="form-button" variant="link" onClick={() => navigate("/register")}>
            Don't have an account? Register
          </button>
        ) : (
          <button className="form-button" variant="link" onClick={() => navigate("/login")}>
            Already have an account? Login
          </button>
        )}

      </div>
    </div>
  );
}

export default CustomForm;
