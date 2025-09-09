import Link from "next/link";
import { getUser } from "@/actions/action";

interface SuccessProps {
  params: Promise<{ id: string }>;
}

function cleanAIResponse(text: string): string {
  if (!text) return "";

  return (
    text
      // convert <br> and <br/> to real newlines
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/---/g, "")
      .replace(/\|[-\s]+\|/g, "")
      .replace(/\|/g, " ")

      .trim()
  );
}

const Success = async ({ params }: SuccessProps) => {
  const { id } = await params;
  const user = await getUser(id);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-36">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8 relative">
        {/* Header */}
        <div className="text-center border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-extrabold text-blue-600">✅ Success!</h1>
          <p className="text-gray-600 mt-2">
            Welcome{" "}
            <span className="font-semibold text-black">
              {user?.name ?? "Guest"}
            </span>{" "}
            🎉
          </p>
        </div>

        {/* AI Response Section */}
        <section className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            AI Insights
          </h2>
          <div className="bg-blue-50 border border-blue-200 text-gray-800 rounded-lg p-6 shadow-inner">
            <p className="leading-relaxed whitespace-pre-line">
              {user?.message
                ? cleanAIResponse(user.message)
                : "No insights available yet."}
            </p>
          </div>
        </section>

        {/* Actions */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
