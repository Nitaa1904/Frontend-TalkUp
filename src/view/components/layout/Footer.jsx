import {
  Footer as FlowFooter,
  FooterBrand,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterCopyright,
} from "flowbite-react";
import Logo from "../../../assets/images/logo-light.svg";

const Footer = () => {
  return (
    <FlowFooter container>
      <div className="flex flex-col items-center">
        <FooterBrand href="/" src={Logo} alt="TalkUp Logo" />

        <p
          className="
            text-center text-white mb-8 max-w-3xl mx-auto mt-2 mb-2 
            text-sm md:text-base leading-relaxed px-4
          "
        >
          TalkUp hadir untuk mendukung perjalanan emosionalmu. Diskusi anonim,
          sesi konseling, dan komunitas dukungan dalam satu platform 🚀✨
        </p>

        <FooterLinkGroup>
          <FooterLink href="#">Beranda</FooterLink>
          <FooterLink href="#">Tentang</FooterLink>
          <FooterLink href="#">Informasi</FooterLink>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">Kontak</FooterLink>
        </FooterLinkGroup>
      </div>
    </FlowFooter>
  );
};

export default Footer;