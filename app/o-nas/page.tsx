import Image from "next/image";
import Logo from "../../images/logo.svg";
import BgImage from "../../images/bg.webp";
import Link from "next/link";

export default function Home() {
  const navItems = [
    {
      title: "O nás",
      link: "/o-nas",
    },
    {
      title: "Aktuality",
      link: "/aktuality",
    },
    {
      title: "Tým",
      link: "/tym",
    },
    {
      title: "Termíny",
      link: "/tym",
    },
    {
      title: "Kontakty",
      link: "/kontakty",
    },
    {
      title: "Přihlašování",
      link: "/prihlasovani",
    },
  ];

  return (
    <>
      <div className="fixed left-0 top-0 h-screen w-screen">
        <Image
          src={BgImage}
          alt=""
          className="h-full w-full object-cover object-center opacity-60 blur"
        />
      </div>
      <div className="relative p-10">
        <header className="flex-start mb-8 flex justify-between" id="top">
          <menu className="columns-2">
            {navItems.map(({ title, link }) => (
              <li key={link}>
                <Link href={link} className="my-2 block text-3xl font-bold">
                  {title}
                </Link>
              </li>
            ))}
          </menu>
          <Image src={Logo} alt="logo" width="200" height="200" />
        </header>

        <main className="relative mb-16">
          <h1 className="mb-8 font-bold">Kdo je Veronica</h1>
          <p>
            Kdo je Veronica? Veronica je sebe rozvojový kurz pro skauty a
            skautky, kteří se chystají absolvovat vůdcovskou zkoušku, nebo se
            prostě jen dozvědět něco o sobě a světu kolem nich. Za svých
            třiadvacet let si prošla personifikací jako malokterý jiný kurz a
            mluvit o ní ve středním rodě by se se zlou potázalo. Je trochu
            jezinkou, trochu dítetem a hodně tržištěm za dob výměnného obchodu.
            Odneseš si z ní jen tolik, kolik jsi do ní ochoten/na dát. Ale nic
            na těchto řádcích jí perfektně nevysvětlí. Je totiž hlavně srdeční
            záležitostí. Nejde na ní o dekret, nejde ani o šátek, se kterým
            odchází každý z nás. Jde o Tvojí vůli hledat.
          </p>
          <p>
            Hledat, nacházet a předávat dál je středobodem roverského poslání.
            To ti na Veronice nabízíme a o to se skrz ní i sami snažíme.
            Veronica vznikla jako kurz bandy nadšenců a tím také zůstala. Linie
            mezi účastníkem a vedoucím je skoro tak tenká jako nitě na
            císařových nových šatech. Jsme rovery, experimentujeme s programy,
            učíme se jeden od druhého a tvoříme příběhy k táborovým ohňům.
            Veronica je čtveřicí slonů a my jsme jejich vesmírnou želvou. Stojí
            jen na nás.
          </p>
          <p>
            Veronica je kurz, který se snaží otevírat obzory. Více než kde jinde
            zde ovlivňujete, jaký kurz bude. Veronica je svobodomyslná,
            přátelská a tvořivá a snaží se poskytnout možnost zabloudit hluboko
            do sebe samých.
          </p>
          <p>
            Veronica spatřila světlo světa v roce 2000 jako mladší sestra
            čekatelského lesního kurzu Rozrazil, je lesním kurzem pořádaným pod
            hlavičkou Junáka – českého skauta. Přímým pořadatelem kurzu je Junák
            – český skaut, středisko Kompas Brno, z. s, vůdkyní kurzu je Delfín
            – Anna Bláhová.
          </p>
        </main>
        <Link
          href="#top"
          className="rounded-def bold bg-black px-6 pt-1 text-2xl text-white"
        >
          zpět nahoru
        </Link>
        <p className="m-0 text-[12vw] font-bold uppercase">Veronica</p>
      </div>
    </>
  );
}
