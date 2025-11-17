import React from "react";

const Vision: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700">
              To redefine the way India experiences spaces with aluminium
              windows and doors that deliver style, strength, and
              sustainability.
            </p>
          </div>

          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission in India
            </h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-600 mr-3">•</span>
                <span>
                  Deliver world-class aluminium system solutions designed for
                  Indian lifestyles and climate.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-3">•</span>
                <span>
                  Set new benchmarks in quality, aesthetics, and performance for
                  the Indian fenestration industry.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-3">•</span>
                <span>
                  Build long-lasting relationships with customers through trust,
                  service, and innovation.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
