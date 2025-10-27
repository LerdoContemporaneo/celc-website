import Link from "next/link";

interface LevelCardProps {
  title: string;
  href: string;
  image?: string;
  excerpt?: string;
}

export default function LevelCard({ title, href, image, excerpt }: LevelCardProps) {
  return (
    <Link href={href}
       className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <div className="h-40 md:h-48 bg-gray-100 flex items-center justify-center">
          {image ? <img src={image} alt={title} className="object-cover w-full h-full" /> : <div className="text-gray-400">{title}</div>}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-primary">{title}</h3>
          {excerpt && <p className="mt-2 text-sm text-gray-600">{excerpt}</p>}
        </div>
      
    </Link>
  );
}