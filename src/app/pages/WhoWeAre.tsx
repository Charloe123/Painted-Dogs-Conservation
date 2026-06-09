import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, Heart, Target, Users, Award } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Compassion', desc: 'Every painted dog deserves protection. We treat each animal with the highest care and respect.' },
  { icon: Target, title: 'Science-Led', desc: 'Our conservation decisions are guided by rigorous research and field data.' },
  { icon: Users, title: 'Community First', desc: 'Lasting conservation only succeeds when local communities are partners, not bystanders.' },
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards of conservation practice and transparency.' },
];



const milestones = [
  { year: '1992', event: 'Painted Dog Conservation founded by Peter Blinston in Hwange' },
  { year: '1998', event: 'Painted Dog Education Centre opened, reaching thousands of children' },
  { year: '2003', event: 'Rehabilitation facility established for orphaned and injured dogs' },
  { year: '2010', event: 'GPS satellite tracking program launched across three packs' },
  { year: '2016', event: 'Community scout anti-poaching program expanded to 50+ scouts' },
  { year: '2022', event: '30th anniversary — 500+ painted dogs under active protection' },
];

export function WhoWeAre() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <ImageWithFallback
          src="https://res.cloudinary.com/dpahyb1x9/image/upload/v1780990454/imgi_193_Playtime_g6wvae.jpg"
          alt="Who We Are"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  flex items-center">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-[#d97836] text-sm font-semibold uppercase tracking-widest mb-3">About Us</div>
              <h1 className="text-5xl font-bold text-white mb-3">Who We Are</h1>
              <p className="text-[#d97836] max-w-xl">Three decades of passionate conservation in the heart of Zimbabwe</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-[#d97836] text-sm font-semibold uppercase tracking-widest mb-3">Our Story</div>
              <h2 className="text-4xl font-bold text-[#2c1810] mb-6">Built on 30 Years of Dedication</h2>
              <p className="text-[#8b6f47] leading-relaxed mb-4">
                Founded in 1992 by Peter Blinston, Painted Dog Conservation (PDC) operates from the heart of Hwange National Park in western Zimbabwe — the last stronghold of the African painted dog.
              </p>
              <p className="text-[#8b6f47] leading-relaxed mb-6">
                We combine on-the-ground anti-poaching patrols, veterinary rehabilitation, scientific research, and community education into a holistic model that has become a global benchmark for species conservation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '30+', label: 'Years of conservation' },
                  { value: '500+', label: 'Dogs protected' },
                  { value: '60+', label: 'Staff members' },
                  { value: '5', label: 'Countries engaged' },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#f5f1e8] rounded-xl p-4">
                    <div className="text-3xl font-bold text-[#d97836]">{stat.value}</div>
                    <div className="text-sm text-[#8b6f47] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden aspect-[4/3]">
              <ImageWithFallback
                src="https://res.cloudinary.com/dpahyb1x9/image/upload/v1778578028/pdc_yacmeq.png"
                alt="Zimbabwe wilderness"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2c1810] mb-3">Our Values</h2>
            <p className="text-[#8b6f47]">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#d97836]/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#d97836]" />
                </div>
                <h3 className="font-bold text-[#2c1810] text-lg mb-2">{title}</h3>
                <p className="text-[#8b6f47] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-16 bg-[#2c1810]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Our History</h2>
            <p className="text-white/60">Key milestones in three decades of conservation</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#d97836] flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-white/10 mt-2" />}
                </div>
                <div className="pb-8 last:pb-0">
                  <div className="text-[#d97836] font-bold text-lg mb-1">{m.year}</div>
                  <p className="text-white/70">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#d97836]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Conservation Family</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Whether through donation, volunteering, or spreading the word, you can be part of our story.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate" className="bg-white text-[#d97836] px-8 py-3 rounded-full font-bold hover:bg-[#f5f1e8] transition-all">Donate Now</Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#d97836] transition-all">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}