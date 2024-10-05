import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@sharedui/primitives/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@sharedui/primitives/card';
import { Form, FormField, FormFieldItem } from '@sharedui/primitives/form';
import { Input } from '@sharedui/primitives/input';
import { getErrorMessage } from '@sharedui/utils/error';
import { useRegisterMutation } from '@rootui/api/auth';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { rootUserRegisterSchema } from './schemas/register';

export function RegisterForm() {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof rootUserRegisterSchema>>({
    resolver: zodResolver(rootUserRegisterSchema),
    defaultValues: {
      alias: '',
      email: '',
    },
  });

  const handleRegisterFormSubmit = async (
    values: z.infer<typeof rootUserRegisterSchema>
  ) => {
    try {
      const { alias, email } = values;

      const data = await register({ alias, email }).unwrap();
      toast.success(data.message);
      navigate('/a/login');
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      toast.error(message);
    }
  };

  return (
    <Card className="mx-auto min-w-60">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up for FWS</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="grid gap-4"
            onSubmit={form.handleSubmit(handleRegisterFormSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormFieldItem
                  label="Root user email address"
                  description="Used for recovery and administrative purposes"
                >
                  <Input
                    placeholder="username@example.com"
                    type="email"
                    autoComplete="email"
                    {...field}
                  />
                </FormFieldItem>
              )}
            />
            <FormField
              control={form.control}
              name="alias"
              render={({ field }) => (
                <FormFieldItem
                  label="FWS account alias"
                  description="Choose a unique alias for your account (3-20 characters)"
                >
                  <Input
                    placeholder="username"
                    autoComplete="username"
                    {...field}
                  />
                </FormFieldItem>
              )}
            />
            <Button type="submit" className="mt-4">
              Create an account
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/a/login" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
