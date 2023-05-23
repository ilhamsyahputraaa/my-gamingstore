import Image from 'next/image';
import React from 'react'

interface MenuItemProps {
    title : string;
    link : string;
    src : string;
}

export default function MenuItem(props: MenuItemProps) {
    const {title} = props;
    const {link} = props;
    const {src} = props;
  return (
    <div>
      <div className="item active mb-30">
        <Image src={`/icon/ic-menu-${src}`} alt={'icon'} width={25} height={25}/>
        <p className="item-title m-0">
          <a href={link} className="text-lg text-decoration-none">
            {title}
          </a>
        </p>
      </div>
    </div>
  );
}
