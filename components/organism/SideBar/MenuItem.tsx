import Image from "next/image";
import React from "react";
import cx from 'classnames';
import Link from "next/link";

interface MenuItemProps {
  title: string;
  link: string;
  src: string;
  active?: boolean;
}

export default function MenuItem( props: Partial<MenuItemProps>) {
  const { title, link, src, active} = props;

  const classItem = cx({
    item : true,
    'mb-30' : true,
    'active' : active,
  });

  return (
    <div>
      <div className={classItem}>
        <div className="me-3">
          <Image
            src={`/icon/ic-menu-${src}.svg`}
            alt={"icon"}
            width={25}
            height={25}
          />
        </div>
        <p className="item-title m-0">
          <Link href={`${link}`} className="text-lg text-decoration-none">
            {title}
          </Link>
        </p>
      </div>
    </div>
  );
}
