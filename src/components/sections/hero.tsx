import Image from 'next/image';
import { MapPin } from 'lucide-react';

import RubenHeadshot from '/public/images/ruben-headshot.jpg';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src={RubenHeadshot}
              alt="Portretfoto van Ruben Rikkerink"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hoi, ik ben Ruben{' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
              Softwareontwikkelaar en IT-generalist met een brede
              praktijkbasis. Naast mijn werk als customer support medewerker
              bij Antagonist B.V. ontwikkel ik websites en backends in
              Node.js, en zet ik moderne tooling en AI-assistenten in om
              sneller en met betere code te werken.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Hengelo, Nederland</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
