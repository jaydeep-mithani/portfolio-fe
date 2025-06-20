import { LanguageCard } from "@/components";
import { LanguagesData } from "@/constants/data";

const Languages = () => {
  return (
    <section id="languages" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">Languages</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Multilingual communication enabling global collaboration and diverse
            client relationships
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* language Cards */}
          {LanguagesData.map((lang, i) => (
            <LanguageCard
              key={lang.id}
              delayIndex={i}
              description={lang.description}
              icon={lang.icon}
              name={lang.name}
              proficiency={lang.proficiency}
              skillLevel={lang.skillLevel}
            />
          ))}

          {/* Summary Card */}
          <div className="language-card glass-effect p-8 rounded-2xl lg:col-span-1 md:col-span-2 lg:col-start-2">
            <div className="text-center">
              <div className="language-icon mb-4">🌐</div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Global Communication
              </h3>
              <p className="text-gray-300 mb-6">
                Multilingual capabilities enabling seamless collaboration with
                international teams and diverse client bases across multiple
                continents.
              </p>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">5</div>
                  <div className="text-gray-400 text-sm">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">3</div>
                  <div className="text-gray-400 text-sm">Continents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">95%</div>
                  <div className="text-gray-400 text-sm">Avg Fluency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
