import Link from "next/link";
import { getUser } from "@/actions/action";

interface SuccessProps  {
  params: { id: string }
};


const Success = async({params : {id}}:SuccessProps)=>{

  const user = await getUser(id)


    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold text-green-600 mb-4">Success 🎉🎉🎉</h1>
            <p className="text-gray-700 mb-6">Welcome {user?.name ?? "Guest"} 🎉.</p>
            <p className="text-gray-700 my-10">{user?.message}</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <Link href="/" className="text-blue-500 hover:underline hover:text-green-700 hover:underline-offset-5">Go back to home</Link>
            </div>
          </div>
        </div>
    )
}

export default Success;