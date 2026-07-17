import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {loginSchema} from '../lib/validations';
import { Button } from '@/components/ui/button';
function Login()
{
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return <>
     <form  onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder='Email' {...register('email')} />
        <p>{errors.email?.message}</p>
        <input type="passoword" placeholder='Password' {...register('password')} />
        <p>{errors.password?.message}</p>
        <Button type='submit'>Login</Button>
     </form>
    </>
}

export default Login;