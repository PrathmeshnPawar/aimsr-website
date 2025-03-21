import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function VisionAndMissionPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">Vision, Mission & Values</h1>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mt-8 mb-4">Vision</h2>
          <p className="text-lg text-gray-600 mb-8">
            To be globally recognized as an epitome of learning and innovation,
            imparting multifaceted management education driven by social
            sensitivity and supported by state of art infrastructure.
          </p>

          <h2 className="text-2xl font-bold mb-4">Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            To impart quality education that encourages students to be competent
            enough for best-fit job roles. To provide faculty members with
            facilities to research, experiment and implement contemporary
            learning tools.
          </p>

          <h2 className="text-2xl font-bold mb-4">Values</h2>
          <ul className="text-lg text-gray-600 mb-8 list-disc pl-5 space-y-4">
            <li>
              <span className="font-bold">AGILITY:</span> Willingness to
              respond, listen and act through the dynamic approaches.
            </li>
            <li>
              <span className="font-bold">INNOVATION:</span> Idea is an asset,
              we believe. We nurture this idea and take it to a newer level each
              time.
            </li>
            <li>
              <span className="font-bold">INTEGRITY:</span> An experience of
              wholeness built through academic freedom, ethical behavior and
              shared governance.
            </li>
            <li>
              <span className="font-bold">TRUST:</span> Every initiative and
              effort that we undertake creates lasting progress in the lives of
              those we serve.
            </li>
            <li>
              <span className="font-bold">EXCELLENCE:</span> Eminence in
              teaching and research leads to a path towards excellence.
            </li>
            <li>
              <span className="font-bold">MUTUAL RESPECT:</span> An
              establishment driven by free exchange of ideas, diversity and
              harmony with a feeling of gratitude.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
