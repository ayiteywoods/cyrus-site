'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const ServiceCard = ({ title, description, image, features }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder.jpg'; // Fallback image
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
      </div>
      <div className="p-8">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-3 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </div>
  );
};

export default function ServicesContent() {
  const services: ServiceCardProps[] = [
    {
      title: "Use of Collateral",
      description: "CYRUS borrowers lack collateral traditionally required by banks, and hence social collateral is used as leverage to induce payment. In this case, underwriting depends on a labour-intensive analysis of the household's repayment capacity and the borrower's character.",
      image: "/slider1.jpg",
      features: [
        "Social collateral model",
        "Repayment capacity analysis",
        "Character-based underwriting",
        "Community accountability"
      ]
    },
    {
      title: "Progressively Increasing Lending",
      description: "CYRUS customers have limited access to other financing and are dependent upon ongoing access to CYRUS' credit. CYRUS uses incentive schemes to reward good borrowers with preferential access to future, larger loans.",
      image: "/slider3.jpg",
      features: [
        "Incentive-based lending",
        "Credit access rewards",
        "Loan size graduation",
        "Performance-based benefits"
      ]
    },
    {
      title: "Controlling Arrears",
      description: "Strict control of arrears is employed by CYRUS given the short-term nature of the loans, lack of collateral, and high frequency of payments (e.g., weekly or bi-weekly).",
      image: "/slider2.jpg",
      features: [
        "Short-term loan structure",
        "High-frequency repayment",
        "Proactive monitoring",
        "Early intervention system"
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Methodology
            </span>
            <h2 className="mt-2 text-3xl font-thin text-gray-900 md:text-4xl">
              Specialized Lending Approaches
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-12 text-center shadow-lg">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/slider4.jpg"
                alt="Pattern background"
                fill
                className="object-cover"
                sizes="100vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/placeholder.jpg'; // Fallback image
                }}
              />
            </div>
            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-thin text-white md:text-4xl">
                Ready to access our unique financial services?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
                Contact us to learn how our collateral alternatives can work for you
              </p>
              <Link href="/contact" className="inline-block">
                <button className="rounded-lg bg-white px-8 py-3 font-medium text-blue-600 transition-all hover:bg-gray-100 hover:shadow-lg">
                  Schedule a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 