import Password from "./components/password";
import Timer from "./useeffect/page";

export default function Home() {
  return (
    <div
      className=" flex flex-col justify-center items-center h-screen border border-black bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqI9_pP6O43VjHcx-s4H-bj1LERGI2SI7v4htTIYb8OHnfnCxa1q11AfS9ao3VigsRbYM&usqp=CAU.jpg')",
      }}
    >
      <h1 className="outline outline-offset-2 outline-black text-5xl text-white mb-10 bg-slate-600 rounded-2xl p-4">
        UseState And OnChange Project
      </h1>

      <Password />
    </div>
  );
}
