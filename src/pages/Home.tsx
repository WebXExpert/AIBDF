import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, ShieldCheck, Users, Activity, PhoneCall, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useTranslation } from "react-i18next";
import { AnimatedHeading } from "../components/ui/AnimatedHeading";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    // Image Reveal Animation
    const imgRevealElements = gsap.utils.toArray<HTMLElement>('.img-reveal-container');
    imgRevealElements.forEach((container) => {
      const img = container.querySelector('img');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
        }
      });
      
      tl.fromTo(container, 
        { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.5, ease: 'power4.inOut' }
      );
      
      if (img) {
        tl.fromTo(img, 
          { scale: 1.3 }, 
          { scale: 1, duration: 1.5, ease: 'power4.inOut' }, 
          '-=1.5'
        );
      }
    });

    // Fade Up Animation
    gsap.utils.toArray<HTMLElement>('.fade-up').forEach((elem) => {
      gsap.fromTo(elem,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: elem, start: 'top 85%' } }
      );
    });

  }, { scope: container });

  return (
    <div className="flex flex-col bg-white overflow-x-hidden" ref={container}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 overflow-hidden bg-gray-50">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary-soft text-brand-primary font-medium text-sm mb-8">
                <Heart className="w-4 h-4" /> {t('home.hero.badge')}
              </div>
              <AnimatedHeading 
                as="h1"
                text={t('home.hero.title')}
                className="text-5xl md:text-7xl font-medium text-gray-900 leading-[1.1] mb-8"
              />
              <p className="fade-up text-xl text-gray-600 leading-relaxed mb-10 max-w-lg">
                {t('home.hero.desc')}
              </p>
              
              <div className="fade-up flex flex-wrap gap-4">
                <Link
                  to="/get-help"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-brand-primary rounded-btn hover:bg-brand-primary-hover transition-colors shadow-btn"
                >
                  {t('home.hero.ask_help')} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-white border border-gray-200 rounded-btn hover:border-brand-primary hover:text-brand-primary transition-colors shadow-soft"
                >
                  {t('home.hero.our_story')}
                </Link>
              </div>
            </div>

            <div className="relative h-[600px] w-full hidden lg:block">
              <div className="img-reveal-container absolute top-0 right-0 w-4/5 h-4/5 rounded-card overflow-hidden shadow-card z-10">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Doctor holding patient's hand" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="img-reveal-container absolute bottom-0 left-0 w-3/5 h-3/5 rounded-card overflow-hidden shadow-hover z-20 border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" 
                  alt="Community support" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="fade-up absolute top-1/2 -left-12 bg-white p-6 rounded-card shadow-card z-30 flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary-soft text-brand-primary rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-500 font-medium">{t('home.hero.patients_guided')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium text-sm mb-6">
              {t('home.about.badge')}
            </div>
            <AnimatedHeading 
              as="h2"
              text={t('home.about.title')}
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight justify-center mb-8"
            />
            <p className="fade-up text-xl text-gray-600 leading-relaxed">
              {t('home.about.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="img-reveal-container rounded-card overflow-hidden shadow-card h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200" 
                alt="Medical consultation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-10">
              <div className="fade-up flex gap-6">
                <div className="w-16 h-16 bg-brand-primary-soft text-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">{t('home.about.mission')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('home.about.mission_desc')}</p>
                </div>
              </div>
              <div className="fade-up flex gap-6">
                <div className="w-16 h-16 bg-brand-info-soft text-brand-info rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Activity className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">{t('home.about.vision')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('home.about.vision_desc')}</p>
                </div>
              </div>
              <div className="fade-up pt-4">
                <Link to="/about" className="inline-flex items-center text-brand-primary font-medium hover:text-brand-primary-hover transition-colors text-lg">
                  {t('home.about.read_more')} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Initiatives */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-info-soft text-brand-info font-medium text-sm mb-6">
              {t('home.initiatives.badge')}
            </div>
            <AnimatedHeading 
              as="h2"
              text={t('home.initiatives.title')}
              className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight justify-center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('home.initiatives.med_guidance'),
                desc: t('home.initiatives.med_guidance_desc'),
                icon: <PhoneCall className="w-6 h-6" />,
                img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
                link: "/get-help"
              },
              {
                title: t('home.initiatives.treatment'),
                desc: t('home.initiatives.treatment_desc'),
                icon: <Heart className="w-6 h-6" />,
                img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=800",
                link: "/get-help"
              },
              {
                title: t('home.initiatives.community'),
                desc: t('home.initiatives.community_desc'),
                icon: <Users className="w-6 h-6" />,
                img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
                link: "/contact"
              }
            ].map((service, i) => (
              <div key={i} className="fade-up bg-white rounded-card overflow-hidden shadow-soft border border-gray-100 flex flex-col group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-md">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">{service.desc}</p>
                  <Link 
                    to={service.link}
                    className="w-full py-4 bg-brand-primary-soft text-brand-primary font-medium rounded-btn text-center hover:bg-brand-primary hover:text-white transition-colors"
                  >
                    {t('home.initiatives.request')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Approach */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium text-sm mb-6">
                {t('home.why.badge')}
              </div>
              <AnimatedHeading 
                as="h2"
                text={t('home.why.title')}
                className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-8"
              />
              <p className="fade-up text-xl text-gray-600 leading-relaxed mb-12">
                {t('home.why.desc')}
              </p>

              <div className="space-y-8">
                {[
                  { title: t('home.why.patient'), desc: t('home.why.patient_desc') },
                  { title: t('home.why.transparent'), desc: t('home.why.transparent_desc') },
                  { title: t('home.why.volunteers'), desc: t('home.why.volunteers_desc') }
                ].map((item, i) => (
                  <div key={i} className="fade-up flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="img-reveal-container rounded-card overflow-hidden shadow-card h-[600px] relative">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200" 
                alt="Patient smiling" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                <p className="text-white text-2xl font-medium leading-snug">
                  {t('home.why.quote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid / Impact */}
      <section className="py-24 lg:py-32 bg-gray-900 text-white">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedHeading 
              as="h2"
              text={t('home.impact.title')}
              className="text-4xl md:text-5xl font-medium leading-tight justify-center mb-6"
            />
            <p className="fade-up text-xl text-gray-400">
              {t('home.impact.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="fade-up md:col-span-1 bg-gray-800 rounded-card p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-5xl font-bold text-brand-primary mb-4">500+</h3>
                <p className="text-2xl font-medium mb-4">{t('home.impact.lives')}</p>
                <p className="text-gray-400">{t('home.impact.lives_desc')}</p>
              </div>
              <div className="mt-8 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-brand-primary">
                <Heart className="w-6 h-6" />
              </div>
            </div>

            <div className="fade-up md:col-span-2 img-reveal-container rounded-card overflow-hidden relative h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1593113514676-5f01cec60e28?auto=format&fit=crop&q=80&w=1200" 
                alt="Volunteers" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-medium mb-3">{t('home.impact.volunteer')}</h3>
                <p className="text-gray-300 max-w-lg">{t('home.impact.volunteer_desc')}</p>
              </div>
            </div>

            <div className="fade-up md:col-span-2 img-reveal-container rounded-card overflow-hidden relative h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" 
                alt="Medical facility" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-medium mb-3">{t('home.impact.centers')}</h3>
                <p className="text-gray-300 max-w-lg">{t('home.impact.centers_desc')}</p>
              </div>
            </div>

            <div className="fade-up md:col-span-1 bg-brand-primary rounded-card p-10 flex flex-col justify-between text-gray-900">
              <div>
                <h3 className="text-5xl font-bold mb-4">15+</h3>
                <p className="text-2xl font-medium mb-4">{t('home.impact.years')}</p>
                <p className="text-gray-800 font-medium">{t('home.impact.years_desc')}</p>
              </div>
              <div className="mt-8">
                <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-btn font-medium hover:bg-gray-800 transition-colors">
                  {t('home.impact.read_history')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (Shifted from Donate to Get Help) */}
      <section className="py-24 lg:py-32 bg-brand-primary-soft relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <AnimatedHeading 
            as="h2"
            text={t('home.cta.title')}
            className="text-5xl md:text-6xl font-medium text-gray-900 justify-center mb-8"
          />
          <p className="fade-up text-xl text-gray-700 mb-12">
            {t('home.cta.desc')}
          </p>
          <div className="fade-up flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/get-help"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white bg-brand-primary rounded-btn hover:bg-brand-primary-hover transition-colors shadow-btn"
            >
              {t('home.cta.request')}
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-btn hover:border-brand-primary hover:text-brand-primary transition-colors shadow-soft"
            >
              {t('home.cta.support')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
