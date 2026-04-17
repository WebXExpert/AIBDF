import { motion } from "motion/react";
import { Users, Award, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedHeading } from "../components/ui/AnimatedHeading";
import Seo from "../components/seo/Seo";
import { organizationSchema, physicianSchema, webPageSchema } from "../components/seo/schemas";

const trustees = [
  {
    name: "Mr. Ashok Suratwala",
    role: "Founder & Trustee",
    bio: "Founded AIBDF in loving memory of his wife Jayshree. Dedicated to ensuring no family navigates the journey of auto-immune blistering disease alone.",
    image: "/wp-images/suratwala.jpg",
  },
  {
    name: "Dr. Sharad Mutalik",
    role: "Trustee & Medical Expert",
    bio: "Renowned dermatologist based in Pune with over three decades of clinical expertise in skin disorders and patient care.",
    image: "/wp-images/photo.jpg",
  },
  {
    name: "Aniruddha A. Bambawale",
    role: "Trustee",
    bio: "Trusted advisor helping shape AIBDF's governance, operations, and long-term strategy for patient support.",
    image: "",
  },
  {
    name: "Jayant K. Hemade",
    role: "Trustee",
    bio: "Committed to strengthening AIBDF's community outreach and ensuring transparent stewardship of donor resources.",
    image: "",
  },
];

const advisoryBoard = [
  {
    name: "Prof. A. C. Inamadar",
    title: "MD, FRCP (Edin)",
    role: "Pro Vice-Chancellor, BLDE Vijaypur",
    bio: "A dermatologist and venereologist with over two decades of experience. Widely published across national and international journals, with research spanning dermatopathology and dermatosurgery.",
    image: "/wp-images/inamdar.jpg",
  },
  {
    name: "Prof. Takashi Hashimoto",
    title: "MD, Specially-Appointed Professor",
    role: "Dept. of Dermatology, Osaka Metropolitan University",
    bio: "World authority on autoimmune bullous diseases. Leads basic and clinical research using immunological and molecular biology techniques at Osaka Metropolitan University, Japan.",
    image: "/wp-images/Takashi-Hashimoto.webp",
  },
  {
    name: "Dr. A. Razzaque Ahmed",
    title: "MD, DSc, MPA, FRCP (Edin)",
    role: "Center for Blistering Diseases, USA",
    bio: "The #1 dermatologist in the United States for patients with blistering diseases. Founder of the Center for Blistering Diseases (CBD), the only center of its kind in the country, with 30+ years of practice.",
    image: "/wp-images/Dr.-Ahmed-570x380-1-po33mh20qt7thfkk29lc1buk5do1q8d7gxz2n8ust4.jpg",
  },
];

function Avatar({ name, image }: { name: string; image: string }) {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    );
  }
  const initials = name
    .split(" ")
    .filter((p) => !p.endsWith("."))
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
  return (
    <div className="w-full h-full bg-gradient-to-br from-brand-primary-soft to-blue-100 flex items-center justify-center">
      <span className="text-5xl font-medium text-brand-primary tracking-tight">{initials}</span>
    </div>
  );
}

export default function Leadership() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo
        title="Leadership & Advisory Board"
        description="Meet the trustees and world-class medical advisory board guiding AIBDF — specialists in auto-immune blistering diseases from India, Japan, and the United States."
        keywords={["AIBDF leadership", "medical advisory board", "pemphigus specialists India", "Prof Inamadar", "Prof Hashimoto", "Dr Razzaque Ahmed"]}
        jsonLd={[
          organizationSchema,
          webPageSchema({
            path: "/leadership",
            name: "Leadership & Advisory Board",
            description: "AIBDF board of trustees and medical advisory board.",
            breadcrumbs: [{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Leadership", path: "/leadership" }],
          }),
          ...advisoryBoard.map((p) =>
            physicianSchema({
              name: p.name,
              medicalSpecialty: "Dermatology",
              affiliation: p.role,
              description: p.bio,
              image: p.image,
            })
          ),
        ]}
      />
      {/* Hero */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 overflow-hidden z-0 opacity-40 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-brand-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
          <div className="absolute top-40 -left-40 w-[40rem] h-[40rem] bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <AnimatedHeading
              as="h1"
              text="Our *Leadership*"
              className="text-5xl md:text-7xl font-medium text-slate-900 mb-8 tracking-tight leading-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed"
            >
              Guided by a board of trustees and a global medical advisory council who bring decades of experience, compassion, and scholarship to the fight against auto-immune blistering diseases.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        {/* Trustees */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-end justify-between flex-wrap gap-4 mb-12"
          >
            <div>
              <p className="text-sm font-medium text-brand-primary uppercase tracking-widest mb-3">Board of Trustees</p>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">The people who steward AIBDF</h2>
            </div>
            <p className="text-slate-500 max-w-md text-lg font-light">
              Our trustees give their time voluntarily — ensuring transparent governance and that every donation reaches the patients who need it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustees.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <Avatar name={person.name} image={person.image} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-slate-900 mb-1 tracking-tight">{person.name}</h3>
                  <p className="text-xs text-brand-primary font-semibold uppercase tracking-wider mb-4">{person.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Advisory Board */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-brand-primary uppercase tracking-widest mb-3">Medical Advisory Board</p>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-4">
              World-class specialists, at your side
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              Leading experts in auto-immune blistering diseases from India, Japan, and the United States — collaborating to improve diagnosis, treatment, and research.
            </p>
          </motion.div>

          <div className="space-y-10">
            {advisoryBoard.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100`}
              >
                <div className="w-full lg:w-2/5">
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                    <Avatar name={person.name} image={person.image} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="w-full lg:w-3/5">
                  <Award className="w-12 h-12 text-brand-primary mb-6" />
                  <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-2 tracking-tight">{person.name}</h3>
                  <p className="text-lg text-brand-primary font-medium mb-1">{person.title}</p>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-6">{person.role}</p>
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Founders Tribute */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[2rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden mb-16"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 blur-3xl rounded-full -mr-20 -mt-20" />
          <div className="relative z-10 max-w-3xl">
            <Heart className="w-12 h-12 text-brand-primary mb-8" />
            <h3 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">In loving memory of Jayshree Suratwala</h3>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-8">
              AIBDF exists because one family chose to turn grief into purpose. Every trustee, doctor, and volunteer carries that intention forward — that no other family should face this alone.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-brand-primary font-medium hover:gap-4 transition-all"
            >
              Read our full story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>

        {/* Join Us */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-primary-soft rounded-[2rem] p-12 md:p-16 text-center"
        >
          <Users className="w-12 h-12 text-brand-primary mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-tight">Are you a specialist?</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 font-light">
            We are always looking to expand our medical advisory board. If you specialize in auto-immune blistering diseases and want to help patients across India, we would love to hear from you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-btn font-semibold hover:bg-brand-primary-hover transition-colors shadow-btn"
          >
            Join our advisory board <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
