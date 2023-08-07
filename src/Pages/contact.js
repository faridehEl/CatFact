import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
const Contact=()=>{
    const textValid=yup.object().shape({
        name:yup.string().required(),
        email :yup.string().matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).required(),
        password :yup.string().min(3).max(6).matches(/[a-z]+/).matches(/\d+/).required()
    })
    const {register , handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(textValid)});
    const onFormSubmit =()=>{
console.log("submitted")

    }
    return(
        <form onSubmit = { handleSubmit(onFormSubmit) }> 
            <input type="text" placeholder="Name" {...register("name")}></input>
            {errors.name && (<p>{errors.name.message}</p>)}
            <input type="text" placeholder="Email" {...register("email")}></input>
            {errors.email && (<p>{errors.email.message}</p>)}
            <input type="password" placeholder="Password" {...register("password")}></input>
            {errors.password && (<p>{errors.password.message}</p>)}
            <input type="submit"></input>
        </form>

    )
}
export default Contact