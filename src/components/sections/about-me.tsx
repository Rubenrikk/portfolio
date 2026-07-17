import Image from 'next/image';

import RubenFullPose from '/public/images/ruben-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="Over mij" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={RubenFullPose}
              alt="Portretfoto van Ruben Rikkerink"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">Benieuwd naar mij? Hier is het:</Typography>
          <Typography>
            Softwareontwikkelaar en IT-generalist met een brede
            praktijkbasis. Naast mijn werk als customer support medewerker
            bij Antagonist B.V. ontwikkel ik websites en backends in Node.js,
            en zet ik moderne tooling en AI-assistenten in om sneller en met
            betere code te werken.
          </Typography>
          <Typography>
            Als zelfstandig ondernemer bouw en beheer ik ClubPresence, een
            SaaS-applicatie voor presentiebeheer bij sportverenigingen — van
            backend en database tot deployment. Daarnaast heb ik ruime
            hands-on ervaring met infrastructuur uit eigen homelab-projecten:
            netwerken en werkplekken inrichten, hardware repareren en
            upgraden, smart home- en domotica-installaties, en het draaien
            van een gecontaineriseerde serveromgeving met Docker, inclusief
            self-hosted diensten en beveiligde externe toegang.
          </Typography>
          <Typography>
            Buiten mijn werk regel ik als bestuurslid van Sportvereniging
            H.G.V. de ICT-zaken: van laptops instellen voor vrijwilligers tot
            hosting, mail en samenwerktools zoals Nextcloud, FreeScout en
            DocuSeal. Volg mijn projecten gerust op{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography>Tot slot, wat losse feiten over mij.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Sport en bewegen niveau 3 (ROC van Twente)
              </Typography>
              <Typography component="li">
                Zelfstandig ondernemer naast vast werk
              </Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Bestuurslid Sportvereniging H.G.V.
              </Typography>
              <Typography component="li">IT-generalist en homelabber</Typography>
            </ul>
          </div>
          <Typography>
            Heb je een vraag of wil je samenwerken? Neem gerust contact op!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
