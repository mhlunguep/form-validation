
import { useForm } from 'react-hook-form';
import { ZodType, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
}
type FormData = {
  firstName: string,
  lastName: string,
  email: string,
  age: number,
  password: string,
  confirmPassword: string
};



function RegistrationForm({ children }: Props) {
  const schema: ZodType<FormData> = z
    .object({
      firstName: z.string().min(3, { message: 'Name must be at least 3 characters' }).max(30),
      lastName: z.string().min(3).max(30),
      email: z.string().email().nonempty({ message: "Email filed is required" }),
      age: z.number().min(18, { message: "Age must be at least 18" }).max(65, { message: "Age must be at most 65" }),
      password: z.string().min(5).max(20).regex(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/,
        "Password must contain at least one capital letter and one special character"
      ),
      confirmPassword: z.string().min(5).max(20)
    }).refine((data) => data.password === data.confirmPassword, {
      message: "Password do not match.",
      path: ["confirmPassword"],
    });

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();
  const submitData = (data: FormData) => {
    console.log('It worked', data)
      navigate('/contact');
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitData)}>
        <h5>{children}</h5>
        <label>First Name</label>
        <input type='text' {...register("firstName")} />
        {errors.firstName && <span className="text-danger">{errors.firstName?.message} </span>}
        <label>Last Name</label>
        <input type='text' {...register("lastName")} />
        {errors.lastName && <span className="text-danger">{errors.lastName?.message} </span>}
        <label>Email</label>
        <input type='email' {...register("email")} />
        {errors.email?.message && <span className="text-danger">{errors.email?.message} </span>}
        <label>Age</label>
        <input type='number' {...register("age", { valueAsNumber: true })} />
        {errors.age?.message && <span className="text-danger">{errors.age?.message} </span>}
        <label>Password</label>
        <input type='password' {...register("password")} />
        {errors.password?.message && <span className="text-danger">{errors.password?.message} </span>}
        <label>Confirm Password</label>
        <input type='password' {...register("confirmPassword")} />
        {errors.confirmPassword?.message && <span className="text-danger">{errors.confirmPassword?.message} </span>}

        <button className='btn btn-warning btn-sm' type='submit'>Submit</button>
      </form>
    </>
  )
}

export default RegistrationForm
