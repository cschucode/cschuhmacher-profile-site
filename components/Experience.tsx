const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Company Name",
    period: "2022 - Present",
    description:
      "Brief description of your role and key accomplishments. Technologies used, impact made, etc.",
  },
  {
    title: "Software Engineer",
    company: "Previous Company",
    period: "2020 - 2022",
    description:
      "Brief description of your role and key accomplishments. Technologies used, impact made, etc.",
  },
  {
    title: "Junior Developer",
    company: "First Company",
    period: "2018 - 2020",
    description:
      "Brief description of your role and key accomplishments. Technologies used, impact made, etc.",
  },
];

export default function Experience() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-l-2 border-gray-200 pl-6 hover:border-gray-400 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.title}
              </h3>
              <span className="text-gray-500 text-sm">{exp.period}</span>
            </div>
            <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
            <p className="text-gray-500">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
