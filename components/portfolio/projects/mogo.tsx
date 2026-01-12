import CustomSeparator from "@/components/custom-separator";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Mogo() {
  return (
    <div className="pt-5 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h4 className="text-2xl font-bold text-primary">Key Achievements</h4>
        <ul className="text-lg space-y-2">
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Built a comprehensive{" "}
              <strong className="text-white">
                urban accessibility analysis system
              </strong>{" "}
              for Praia Grande using{" "}
              <strong className="text-white">Google Street View</strong> and{" "}
              <strong className="text-white">Google Maps APIs</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Developed mobile application with{" "}
              <strong className="text-white">React Native</strong> and{" "}
              <strong className="text-white">Expo</strong>, featuring native
              maps integration
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Implemented AI-powered accessibility detection system using{" "}
              <strong className="text-white">YOLOv8</strong> to identify ramps,
              tactile paving, and essential structures
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Created star-rating classification system for routes,
              establishments, and tourist attractions
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Built backend with <strong className="text-white">Python</strong>{" "}
              and <strong className="text-white">Django REST Framework</strong>{" "}
              for data processing and API management
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Implemented modern state management using{" "}
              <strong className="text-white">Zustand</strong> and{" "}
              <strong className="text-white">TanStack Query</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Designed complete user experience using{" "}
              <strong className="text-white">Figma</strong> and{" "}
              <strong className="text-white">Adobe Illustrator</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Integrated real-time location services with{" "}
              <strong className="text-white">Expo Location</strong> and{" "}
              <strong className="text-white">Google Places Autocomplete</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Styled with <strong className="text-white">NativeWind</strong>{" "}
              (Tailwind CSS for React Native) ensuring responsive design
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Developed as final project for{" "}
              <strong className="text-white">
                Systems Analysis and Development degree
              </strong>{" "}
              at Fatec Praia Grande
            </span>
          </li>
        </ul>
      </div>
      <CustomSeparator />
      <Card className="p-20 bg-white flex-1 justify-center items-center">
        <Image
          src="/portfolio/mogo/logo.svg"
          alt="Mogo Logo"
          width={800}
          height={400}
          className="object-contain w-full h-auto"
        />
      </Card>
      <div className="flex gap-8">
        <Card className="p-20 bg-white flex-1 justify-center items-center">
          <Image
            src="/portfolio/mogo/dog.svg"
            alt="Mogo Dog Illustration"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
        <Card className="p-20 bg-white flex-1">
          <Image
            src="/portfolio/mogo/dog-2.svg"
            alt="Mogo Dog Illustration 2"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
        <Card className="p-20 bg-white flex-1">
          <Image
            src="/portfolio/mogo/dog-3.svg"
            alt="Mogo Dog Illustration 3"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
      </div>
    </div>
  );
}
