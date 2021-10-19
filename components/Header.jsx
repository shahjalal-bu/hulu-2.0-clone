import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row  justify-between items-center m-5'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon} />
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
        <HeaderItem title='SEARCH' Icon={SearchIcon} />
        <HeaderItem title='' Icon={UserIcon} />
      </div>
      <Image
        className='object-contain'
        src='https://links.papareact.com/ua6'
        alt='logo'
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
