import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const team = [
  { name: 'Peter Blinston', role: 'Executive Director', bio: 'Overseeing our education programs and the Children\'s Bush Camp at PDC.', image: 'https://res.cloudinary.com/dpahyb1x9/image/upload/v1778578025/Peter_Blinston_dga14t.jpg' },
  { name: 'Wilton Nsimango', role: 'Education and Community Development Programs Director', bio: 'Dedicated to teaching children about wildlife conservation and ecological balance.', image: 'https://res.cloudinary.com/dpahyb1x9/image/upload/v1778578026/Wilton_Nsimango_fvxtgx.jpg' },
  { name: 'David Kuvawoga', role: 'Director of Operations', bio: 'Managing the administrative backbone of our operations in Zimbabwe.', image: 'https://res.cloudinary.com/dpahyb1x9/image/upload/v1778577982/David_Kuvawoga_gg0jq7.jpg' },
  { name: 'Ronnie Sibanda', role: 'Education Manager', bio: 'Overseeing our education programs and the Children\'s Bush Camp at PDC.', image: 'https://res.cloudinary.com/dpahyb1x9/image/upload/v1778578025/Ronnie_ypqwi4.jpg' },
  { name: 'Ganizani Phiri', role: 'Education Officer', bio: 'Dedicated to teaching children about wildlife conservation and ecological balance.', image: 'https://res.cloudinary.com/dpahyb1x9/image/upload/v1780572591/imgi_14_Ganizani_Phiri_y2wmnc.jpg' },
  { name: 'Maria Njamba', role: 'Administration', bio: 'Managing the administrative backbone of our operations in Zimbabwe.', image: 'https://res.cloudinary.com/dpahyb1x9/image/upload/v1778578020/MAria_Njamba_w9rr6g.jpg' },
  { name: 'Last Marozhe', role: 'Anti-Poaching Manager', bio: 'Leading our community scout teams to protect painted dogs from illegal snaring.', image: 'https://res.cloudinary.com/dpahyb1x9/image/upload/v1778578020/Last_Marozhe_j9koe8.jpg' },
  { name: 'Jealous Mpofu', role: 'Community Liaison', bio: 'Born in Hwange, Jealous bridges the gap between local communities and conservation programs.', image: 'https://res.cloudinary.com/dpahyb1x9/image/upload/v1778578021/Jealous_Mpofu_Chief_Tracker_meigcu.jpg' },
  { name: 'Doubt Nkomo', role: 'Tracker', bio: 'Expert tracker monitoring pack movements and health across Hwange.', image: 'https://res.cloudinary.com/dpahyb1x9/image/upload/v1780572591/imgi_10_Doubt_Nkomo_pkfu7g.jpg' },
  { name: 'Agnes Ncube', role: 'Administrative Assistant', bio: 'Supporting our field and office teams with vital administrative tasks.', image: 'https://res.cloudinary.com/dpahyb1x9/image/upload/v1778577981/Agnes_Ncube_o3vcea.jpg' },
  { name: 'Wendy Blakeley', role: 'Operations Manager', bio: 'Ensuring smooth operations and coordination across all conservation programs.', image: 'https://res.cloudinary.com/dpahyb1x9/image/upload/v1778578025/wendy_by_MP_feb._2005_myugaa.jpg' },
  { name: 'Sanelisiwe E Mlilo', role: 'Education Officer', bio: 'Helping young people connect with nature through hands-on education.', image: 'https://res.cloudinary.com/dpahyb1x9/image/upload/v1778577988/Emma1_2_rktdss.jpg' },
  { name: 'Enock Zulu', role: 'Senior Scout', bio: 'Veteran scout with years of experience in anti-poaching and field monitoring.', image: 'https://res.cloudinary.com/dpahyb1x9/image/upload/v1778577987/Enock_Zulu_twzo5v.jpg' },
];

export function MeetOurTeam() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <ImageWithFallback
          src="https://res.cloudinary.com/dpahyb1x9/image/upload/v1778578027/PDC_Team_ijdbao.jpg"
          alt="PDC Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2c1810]/70 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-[#d97836] text-sm font-semibold uppercase tracking-widest mb-3">Our Team</div>
              <h1 className="text-5xl font-bold text-white mb-3">Meet Our Team</h1>
            
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
           
            <h1 className=" font-semibold  ">The passionate individuals driving our mission forward</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#f5f1e8] rounded-3xl overflow-hidden group"
              >
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[#d97836] text-xs font-semibold uppercase tracking-wider mb-1">{member.role}</div>
                  <h3 className="text-xl font-bold text-[#2c1810] mb-2">{member.name}</h3>
                  <p className="text-[#8b6f47] text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#d97836]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">We're always looking for passionate conservationists to join our mission.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-white text-[#d97836] px-8 py-3 rounded-full font-bold hover:bg-[#f5f1e8] transition-all">Get in Touch</Link>
            <Link to="/donate" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#d97836] transition-all">Support Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}