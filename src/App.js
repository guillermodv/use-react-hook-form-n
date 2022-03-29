import "./styles.css";
import { useForm } from "react-hook-form";

const onSubmit = (e) => {
  console.log("salida", e);
};

export default function App() {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <div className="App">
        <h1>A great title</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            nombre
            <input {...register("firstName")} />
          </label>
        </div>
        <div>
          <label>
            apellido
            <input {...register("lastName")} />
          </label>
        </div>
        <input type="submit" value="aceptar" />
      </form>
    </>
  );
}
