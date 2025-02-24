import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { CustomInput } from "../CustomInput/CustomInput";
import { schema, FormValues } from "../../models/form.model";

const Customform = () => {
  const { control, handleSubmit, formState: { errors }} = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput name="name" control={control} label="name" type="text" error={errors.name}/>
      <CustomInput name="email" control={control} label="email" type="email" error={errors.email}/>
      <CustomInput name="password" control={control} label="password" type="password" error={errors.password}/>
      <CustomInput name="confirmPassword" control={control} label="confirm password" type="password" error={errors.confirmPassword}/>
      <button type="submit">Submit</button>
    </form>
  ) 
}

export default Customform;
