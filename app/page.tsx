import Image from "next/image";

const Home = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen w-full">
        <Image src="/vercel.svg" alt="logo" width={140} height={140} />

        <h1 className="my-6">Lorem Ipsum</h1>

        <div className="border w-[70%] rounded-md">
          <h1 className="px-4 w-full bg-slate-400 py-2">Login</h1>
          <div className="flex flex-col items-center">
            <form className="my-4">
              <div className="form-control mb-4">
                <label className="mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Input your name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="from-control mb-2">
                <label className="mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Input your password"
                  className="input input-bordered w-full"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
